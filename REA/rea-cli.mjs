#!/usr/bin/env node

/**
 * REA Master Automation Controller & CLI Runner
 * Pure Node.js (v18+) - Zero external dependencies.
 * 
 * Usage:
 *   node rea-cli.mjs [command] [options]
 */

import { existsSync, readdirSync, readFileSync, statSync, mkdirSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { fork } from 'node:child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const command = process.argv[2] || 'help';
const args = process.argv.slice(3);

const REQUIRED_FOLDERS = [
  {
    folder: '01_recon_capture',
    files: ['README.md', 'target-manifest.json', 'capture-dom.mjs']
  },
  {
    folder: '02_assets_extractor',
    files: ['README.md', 'extract-assets.mjs', 'asset-inventory.json'],
    subdirs: ['models', 'fonts', 'svgs', 'textures']
  },
  {
    folder: '03_design_tokens',
    files: ['README.md', 'tokens-schema.json', 'tailwind-mapper.md']
  },
  {
    folder: '04_motion_webgl_lab',
    files: ['README.md', 'shader-template.glsl', 'motion-curves.json', 'webgl-deconstruction-guide.md']
  },
  {
    folder: '05_architecture_map',
    files: ['README.md', 'component-tree-template.md', 'data-flow-schema.json']
  },
  {
    folder: '06_master_blueprints',
    files: ['README.md', 'MASTER_RECONSTRUCTION_PROMPT.md', 'section-spec-template.md']
  },
  {
    folder: '07_reconstructed_builds',
    files: ['README.md', 'qa-verification-checklist.md', 'build-registry.json'],
    subdirs: ['staging']
  }
];

function printBanner() {
  console.log(`\n================================================================`);
  console.log(`⚡ REA (Reverse Engineering Anything) - Master Controller`);
  console.log(`   Principal Reverse Engineering Systems Architecture Engine`);
  console.log(`================================================================\n`);
}

function runAudit() {
  printBanner();
  console.log(`🔍 Auditing all 7 REA Architecture folders & required artifacts...\n`);

  let allValid = true;
  let totalFiles = 0;

  for (const item of REQUIRED_FOLDERS) {
    const folderPath = resolve(__dirname, item.folder);
    const folderExists = existsSync(folderPath);

    if (!folderExists) {
      console.log(`❌ [MISSING FOLDER] ${item.folder}/`);
      allValid = false;
      continue;
    }

    const missingFiles = [];
    for (const f of item.files) {
      const filePath = resolve(folderPath, f);
      if (!existsSync(filePath)) {
        missingFiles.push(f);
      } else {
        totalFiles++;
      }
    }

    if (item.subdirs) {
      for (const sub of item.subdirs) {
        const subPath = resolve(folderPath, sub);
        if (!existsSync(subPath)) {
          missingFiles.push(`${sub}/`);
        }
      }
    }

    if (missingFiles.length === 0) {
      console.log(`✅ [100% COMPLETE] ${item.folder}/`);
      console.log(`   └─ Validated: ${item.files.join(', ')} ${item.subdirs ? `(+ subdirs: ${item.subdirs.join(', ')})` : ''}`);
    } else {
      console.log(`⚠️  [INCOMPLETE]     ${item.folder}/ (Missing: ${missingFiles.join(', ')})`);
      allValid = false;
    }
  }

  console.log(`\n----------------------------------------------------------------`);
  if (allValid) {
    console.log(`🎉 AUDIT PASSED: All 7 REA Folders and required files are 100% operational!`);
    console.log(`📊 Total verified core artifacts: ${totalFiles}`);
  } else {
    console.log(`❌ AUDIT FAILED: Some files or folders are missing.`);
  }
  console.log(`----------------------------------------------------------------\n`);
}

function runRecon(url) {
  printBanner();
  const targetUrl = url || 'https://example.com';
  const scriptPath = resolve(__dirname, '01_recon_capture/capture-dom.mjs');

  console.log(`🚀 Executing Phase 01 Recon on: ${targetUrl}`);
  const child = fork(scriptPath, [targetUrl, `--output-dir=${resolve(__dirname, '01_recon_capture')}`]);
  child.on('exit', (code) => {
    if (code === 0) {
      console.log(`✅ Phase 01 Recon completed successfully.`);
    }
  });
}

function runExtract(downloadFlag) {
  printBanner();
  const scriptPath = resolve(__dirname, '02_assets_extractor/extract-assets.mjs');
  const forkArgs = [];
  if (downloadFlag) forkArgs.push('--download');

  console.log(`🚀 Executing Phase 02 Asset Extraction...`);
  const child = fork(scriptPath, forkArgs);
  child.on('exit', (code) => {
    if (code === 0) {
      console.log(`✅ Phase 02 Extraction completed successfully.`);
    }
  });
}

function runStatus() {
  printBanner();
  const registryPath = resolve(__dirname, '07_reconstructed_builds/build-registry.json');
  if (existsSync(registryPath)) {
    try {
      const data = JSON.parse(readFileSync(registryPath, 'utf-8'));
      console.log(`📋 REA Reconstructed Builds Registry:`);
      console.log(`   Project: ${data.project} (v${data.version})`);
      console.log(`   Updated: ${data.updatedAt}\n`);

      for (const build of data.builds || []) {
        console.log(`• [${build.id}] ${build.name} (${build.category})`);
        console.log(`  Status:      ${build.status.toUpperCase()}`);
        console.log(`  Staging:     ${build.stagingPath}`);
        console.log(`  Production:  ${build.productionPath}`);
        console.log(`  Tech Stack:  ${build.techStack.join(', ')}`);
        console.log('');
      }
    } catch (e) {
      console.error(`Failed to parse build-registry.json:`, e.message);
    }
  } else {
    console.log(`⚠️ No build registry found at: ${registryPath}`);
  }
}

function showHelp() {
  printBanner();
  console.log(`Available Commands:`);
  console.log(`  node rea-cli.mjs audit               Scan all 7 REA folders and verify integrity`);
  console.log(`  node rea-cli.mjs recon <url>         Capture target DOM, metadata, and tech heuristics`);
  console.log(`  node rea-cli.mjs extract [--download] Extract and catalog SVGs, 3D models, fonts, textures`);
  console.log(`  node rea-cli.mjs status              View staged and deployed component registry`);
  console.log(`  node rea-cli.mjs help                Show this guidance screen\n`);
}

switch (command) {
  case 'audit':
    runAudit();
    break;
  case 'recon':
    runRecon(args[0]);
    break;
  case 'extract':
    runExtract(args.includes('--download'));
    break;
  case 'status':
    runStatus();
    break;
  case 'help':
  default:
    showHelp();
    break;
}
