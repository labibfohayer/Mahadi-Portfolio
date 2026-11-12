#!/usr/bin/env node

/**
 * REA Deep Asset Extractor & Downloader Engine
 * Reads both rendered DOM and intercepted runtime network assets.
 * 
 * Usage:
 *   node extract-assets.mjs [--download] [--source-html=path] [--source-intercepted=path]
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync, statSync } from 'node:fs';
import { resolve, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const defaultHtmlPath = resolve(__dirname, '../01_recon_capture/captured-dom.html');
const defaultInterceptedPath = resolve(__dirname, '../01_recon_capture/intercepted-network-assets.json');

const htmlSourceArg = process.argv.find(arg => arg.startsWith('--source-html='));
const sourceHtmlPath = htmlSourceArg ? resolve(process.cwd(), htmlSourceArg.split('=')[1]) : defaultHtmlPath;

const interceptedArg = process.argv.find(arg => arg.startsWith('--source-intercepted='));
const sourceInterceptedPath = interceptedArg ? resolve(process.cwd(), interceptedArg.split('=')[1]) : defaultInterceptedPath;

const shouldDownload = process.argv.includes('--download');

// Subdirectories
const subdirs = {
  models: resolve(__dirname, 'models'),
  fonts: resolve(__dirname, 'fonts'),
  svgs: resolve(__dirname, 'svgs'),
  textures: resolve(__dirname, 'textures')
};

for (const dir of Object.values(subdirs)) {
  mkdirSync(dir, { recursive: true });
}

console.log(`\n======================================================`);
console.log(`📦 [REA 02_DEEP_ASSETS] Asset Cataloging & Extraction`);
console.log(`   📄 Rendered DOM:       ${existsSync(sourceHtmlPath) ? sourceHtmlPath : 'Not found'}`);
console.log(`   🌐 Intercepted Logs:   ${existsSync(sourceInterceptedPath) ? sourceInterceptedPath : 'Not found'}`);
console.log(`   📥 Download Mode:      ${shouldDownload ? 'ENABLED' : 'CATALOG ONLY (pass --download to save files)'}`);
console.log(`======================================================\n`);

async function runDeepExtraction() {
  const assetMap = new Map(); // deduplication by URL or filename

  // Helper to add asset
  function addAsset(category, url, filename, source, extra = {}) {
    const cleanFilename = filename ? basename(filename.split('?')[0]) : `asset-${Date.now()}`;
    const key = url || cleanFilename;
    if (assetMap.has(key)) return;

    let localFolder = 'textures';
    if (category === 'models3D' || category === 'model') localFolder = 'models';
    else if (category === 'fonts' || category === 'font') localFolder = 'fonts';
    else if (category === 'svgs' || category === 'svg') localFolder = 'svgs';

    assetMap.set(key, {
      id: `asset-${assetMap.size + 1}`,
      category,
      filename: cleanFilename,
      originalUrl: url || null,
      localPath: `${localFolder}/${cleanFilename}`,
      source,
      status: 'cataloged',
      ...extra
    });
  }

  // 1. Process Intercepted Network Assets from Phase 01
  if (existsSync(sourceInterceptedPath)) {
    try {
      const interceptedData = JSON.parse(readFileSync(sourceInterceptedPath, 'utf-8'));
      const assets = interceptedData.assets || {};

      for (const item of assets.models3D || []) {
        addAsset('model', item.url, item.filename, 'runtime_network_interception', {
          contentType: item.contentType,
          contentLength: item.contentLength
        });
      }
      for (const item of assets.fonts || []) {
        addAsset('font', item.url, item.filename, 'runtime_network_interception', {
          contentType: item.contentType
        });
      }
      for (const item of assets.svgs || []) {
        addAsset('svg', item.url, item.filename, 'runtime_network_interception', {
          contentType: item.contentType
        });
      }
      for (const item of assets.textures || []) {
        addAsset('texture', item.url, item.filename, 'runtime_network_interception', {
          contentType: item.contentType
        });
      }
      console.log(`📡 Loaded ${assetMap.size} runtime network assets from Phase 01 interception`);
    } catch (e) {
      console.warn(`⚠️ Could not parse intercepted assets:`, e.message);
    }
  }

  // 2. Process Rendered DOM HTML
  if (existsSync(sourceHtmlPath)) {
    const html = readFileSync(sourceHtmlPath, 'utf-8');

    // Extract Inline SVGs
    const svgRegex = /<svg[\s\S]*?<\/svg>/gi;
    let svgMatch;
    let svgIndex = 1;
    while ((svgMatch = svgRegex.exec(html)) !== null) {
      const rawSvg = svgMatch[0];
      const filename = `extracted-icon-${String(svgIndex).padStart(2, '0')}.svg`;
      const targetPath = resolve(subdirs.svgs, filename);

      writeFileSync(targetPath, rawSvg, 'utf-8');
      addAsset('svg', null, filename, 'rendered_dom_inline', {
        format: 'SVG',
        lengthBytes: Buffer.byteLength(rawSvg, 'utf-8'),
        status: 'extracted_local'
      });
      svgIndex++;
    }
    console.log(`🎨 Extracted ${svgIndex - 1} inline SVG elements from rendered DOM`);

    // Scan for HTML asset references (.glb, .woff2, etc.)
    const assetRegex = /["']([^"']+\.(?:glb|gltf|bin|hdr|exr|woff2|woff|ttf|svg|webp|png|jpg|jpeg)(?:\?[^"']*)?)["']/gi;
    let match;
    while ((match = assetRegex.exec(html)) !== null) {
      const url = match[1];
      const filename = basename(url.split('?')[0]);
      const ext = filename.split('.').pop().toLowerCase();

      if (['glb', 'gltf', 'bin', 'hdr', 'exr'].includes(ext)) {
        addAsset('model', url, filename, 'dom_html_attribute');
      } else if (['woff2', 'woff', 'ttf'].includes(ext)) {
        addAsset('font', url, filename, 'dom_html_attribute');
      } else if (ext === 'svg') {
        addAsset('svg', url, filename, 'dom_html_attribute');
      } else if (['webp', 'png', 'jpg', 'jpeg'].includes(ext)) {
        addAsset('texture', url, filename, 'dom_html_attribute');
      }
    }
  }

  const allAssets = Array.from(assetMap.values());
  console.log(`\n📊 Total unique cataloged assets: ${allAssets.length}`);

  // 3. Download Remote Assets if requested
  if (shouldDownload) {
    console.log(`\n⬇️  Downloading remote assets to local storage...`);
    let downloadedCount = 0;
    let downloadedBytes = 0;

    for (const asset of allAssets) {
      if (asset.originalUrl && asset.originalUrl.startsWith('http')) {
        const fullLocalPath = resolve(__dirname, asset.localPath);

        // Skip if already exists and non-empty
        if (existsSync(fullLocalPath) && statSync(fullLocalPath).size > 0) {
          asset.status = 'already_downloaded';
          asset.fileSizeBytes = statSync(fullLocalPath).size;
          continue;
        }

        try {
          const res = await fetch(asset.originalUrl, {
            headers: {
              'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36',
              'Accept': '*/*'
            }
          });

          if (res.ok) {
            const buffer = Buffer.from(await res.arrayBuffer());
            writeFileSync(fullLocalPath, buffer);
            asset.fileSizeBytes = buffer.length;
            asset.status = 'downloaded';
            downloadedCount++;
            downloadedBytes += buffer.length;
            console.log(`   ✅ Downloaded [${asset.category.toUpperCase()}] ${asset.filename} (${(buffer.length / 1024).toFixed(1)} KB)`);
          } else {
            console.warn(`   ⚠️ HTTP ${res.status} for: ${asset.originalUrl}`);
          }
        } catch (e) {
          console.warn(`   ❌ Failed downloading ${asset.originalUrl}:`, e.message);
        }
      }
    }
    console.log(`🎉 Download complete: ${downloadedCount} new assets saved (${(downloadedBytes / 1024 / 1024).toFixed(2)} MB)`);
  }

  // 4. Save Updated Asset Inventory
  const inventory = {
    project: 'Reverse Engineered Asset Inventory',
    updatedAt: new Date().toISOString(),
    totalAssets: allAssets.length,
    counts: {
      models: allAssets.filter(a => a.category === 'model' || a.category === 'models3D').length,
      fonts: allAssets.filter(a => a.category === 'font' || a.category === 'fonts').length,
      svgs: allAssets.filter(a => a.category === 'svg' || a.category === 'svgs').length,
      textures: allAssets.filter(a => a.category === 'texture' || a.category === 'textures').length
    },
    assets: allAssets
  };

  const inventoryPath = resolve(__dirname, 'asset-inventory.json');
  writeFileSync(inventoryPath, JSON.stringify(inventory, null, 2), 'utf-8');
  console.log(`\n📋 Saved inventory: ${inventoryPath}\n`);
}

runDeepExtraction();
