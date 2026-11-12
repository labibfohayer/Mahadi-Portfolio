#!/usr/bin/env node

/**
 * REA Deep Runtime Browser Recon & Network Asset Interception Engine
 * Leverages Playwright Headless Chromium with fallback to native fetch().
 * 
 * Capabilities:
 * - Full client-side rendered (CSR) DOM capture
 * - Live network asset interception (.glb, .gltf, .hdr, .mp4, .woff2, .glsl, textures)
 * - Computed CSS tokens & variable extraction
 * - High-resolution viewport screenshot capture (1920x1080)
 * 
 * Usage:
 *   node capture-dom.mjs [targetUrl] [--output-dir=./] [--no-headless]
 */

import { writeFileSync, mkdirSync, existsSync, readFileSync } from 'node:fs';
import { resolve, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const targetUrl = process.argv[2] && !process.argv[2].startsWith('--')
  ? process.argv[2]
  : 'https://lusion.co';

const outputDirArg = process.argv.find(arg => arg.startsWith('--output-dir='));
const outputDir = outputDirArg 
  ? resolve(process.cwd(), outputDirArg.split('=')[1])
  : __dirname;

const tokensDir = resolve(__dirname, '../03_design_tokens');
const motionDir = resolve(__dirname, '../04_motion_webgl_lab');
mkdirSync(outputDir, { recursive: true });
mkdirSync(tokensDir, { recursive: true });
mkdirSync(motionDir, { recursive: true });

console.log(`\n======================================================`);
console.log(`🕵️ [REA 01_DEEP_RECON] Runtime Browser Recon & Interception`);
console.log(`   🌐 URL: ${targetUrl}`);
console.log(`   📁 Output: ${outputDir}`);
console.log(`======================================================\n`);

// Asset categorization regex patterns
const PATTERNS = {
  models3D: /\.(?:glb|gltf|bin|hdr|exr|ktx2)(?:\?|$)/i,
  shaders: /\.(?:glsl|vert|frag)(?:\?|$)/i,
  media: /\.(?:mp4|webm|mp3|wav|ogg)(?:\?|$)/i,
  fonts: /\.(?:woff2|woff|ttf|otf|eot)(?:\?|$)/i,
  svgs: /\.svg(?:\?|$)/i,
  textures: /\.(?:webp|avif|png|jpg|jpeg)(?:\?|$)/i
};

async function runDeepRecon(url) {
  let playwright;
  try {
    playwright = await import('playwright');
  } catch (err) {
    console.warn(`⚠️ Playwright not detected in node_modules. Falling back to static fetch() recon.`);
    return runFetchFallback(url);
  }

  const startTime = Date.now();
  const interceptedAssets = {
    models3D: [],
    shaders: [],
    media: [],
    fonts: [],
    svgs: [],
    textures: [],
    other: []
  };

  const interceptedUrls = new Set();
  let browser = null;

  try {
    console.log(`🚀 Launching Headless Chromium with Network Interceptor...`);
    const launchOptions = {
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-web-security',
        '--disable-features=IsolateOrigins,site-per-process'
      ]
    };

    // Prefer system google-chrome-stable if available, otherwise default chromium
    if (existsSync('/usr/bin/google-chrome-stable')) {
      launchOptions.executablePath = '/usr/bin/google-chrome-stable';
    }

    browser = await playwright.chromium.launch(launchOptions);
    const context = await browser.newContext({
      viewport: { width: 1920, height: 1080 },
      deviceScaleFactor: 1,
      userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36'
    });

    const page = await context.newPage();

    // 1. Intercept Network Responses in Real-Time
    page.on('response', async (response) => {
      try {
        const resUrl = response.url();
        if (interceptedUrls.has(resUrl) || resUrl.startsWith('data:')) return;
        interceptedUrls.add(resUrl);

        const status = response.status();
        const contentType = response.headers()['content-type'] || '';
        let contentLength = parseInt(response.headers()['content-length'] || '0', 10);

        const assetRecord = {
          url: resUrl,
          filename: basename(resUrl.split('?')[0]) || 'unknown',
          status,
          contentType,
          contentLength: contentLength > 0 ? contentLength : null,
          timestamp: new Date().toISOString()
        };

        if (PATTERNS.models3D.test(resUrl) || /gltf|model/i.test(contentType)) {
          interceptedAssets.models3D.push(assetRecord);
          console.log(`   🧊 [3D Model/HDR]   ${assetRecord.filename} (${contentType})`);
        } else if (PATTERNS.shaders.test(resUrl)) {
          interceptedAssets.shaders.push(assetRecord);
          console.log(`   ✨ [GLSL Shader]    ${assetRecord.filename}`);
        } else if (PATTERNS.media.test(resUrl) || /video|audio/i.test(contentType)) {
          interceptedAssets.media.push(assetRecord);
          console.log(`   🎬 [Media Reel]     ${assetRecord.filename}`);
        } else if (PATTERNS.fonts.test(resUrl) || /font|woff/i.test(contentType)) {
          interceptedAssets.fonts.push(assetRecord);
          console.log(`   🔤 [Web Font]       ${assetRecord.filename}`);
        } else if (PATTERNS.svgs.test(resUrl) || /image\/svg/i.test(contentType)) {
          interceptedAssets.svgs.push(assetRecord);
          console.log(`   🎨 [Vector SVG]     ${assetRecord.filename}`);
        } else if (PATTERNS.textures.test(resUrl) || /image\/(webp|png|jpeg|avif)/i.test(contentType)) {
          interceptedAssets.textures.push(assetRecord);
        }
      } catch (err) {
        // Silently skip failed header reads on aborted streams
      }
    });

    console.log(`🌐 Navigating to ${url}...`);
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 35000 });

    // Wait for network idle or dynamic scripts/Three.js initialization
    console.log(`⏳ Waiting for WebGL & JavaScript hydration to settle...`);
    await page.waitForLoadState('networkidle', { timeout: 8000 }).catch(() => {});
    await page.waitForTimeout(3000); // Allow WebGL canvas, shaders, and animations to initialize

    // 2. Dump Rendered DOM (Client-Side Hydrated)
    const renderedHtml = await page.content();
    const htmlPath = resolve(outputDir, 'captured-dom.html');
    writeFileSync(htmlPath, renderedHtml, 'utf-8');
    console.log(`\n📄 Saved Rendered DOM: ${htmlPath} (${(renderedHtml.length / 1024).toFixed(1)} KB)`);

    // 3. Auto-Capture Desktop Viewport Screenshot
    const screenshotPath = resolve(outputDir, 'target-screenshot.png');
    await page.screenshot({ path: screenshotPath, fullPage: false });
    console.log(`📸 Saved Desktop Screenshot: ${screenshotPath} (1920x1080)`);

    // 4. Extract Computed Tokens & Root CSS Variables
    console.log(`🎨 Extracting computed design tokens & CSS custom properties...`);
    const designTokens = await page.evaluate(() => {
      const rootStyles = getComputedStyle(document.documentElement);
      const bodyStyles = getComputedStyle(document.body);

      // Extract all declared CSS variables across all stylesheets
      const cssVars = {};
      try {
        for (const sheet of Array.from(document.styleSheets)) {
          try {
            for (const rule of Array.from(sheet.cssRules || [])) {
              if (rule.style) {
                for (let i = 0; i < rule.style.length; i++) {
                  const prop = rule.style[i];
                  if (prop.startsWith('--')) {
                    cssVars[prop] = rootStyles.getPropertyValue(prop).trim() || rule.style.getPropertyValue(prop).trim();
                  }
                }
              }
            }
          } catch (e) {
            // Cross-origin stylesheet access restriction
          }
        }
      } catch (e) {}

      // Sample key DOM elements for computed colors, fonts & sizes
      const sampledElements = Array.from(document.querySelectorAll('body, h1, h2, h3, p, a, button, nav, header, canvas'));
      const fontFamilies = new Set();
      const fontSizes = new Set();
      const colors = new Set();
      const backgrounds = new Set();
      let hasCanvas = false;
      let webglVersion = null;

      const canvasEl = document.querySelector('canvas');
      if (canvasEl) {
        hasCanvas = true;
        try {
          const gl2 = canvasEl.getContext('webgl2');
          const gl1 = canvasEl.getContext('webgl');
          webglVersion = gl2 ? 'WebGL2' : (gl1 ? 'WebGL1' : '2D Canvas');
        } catch (e) {}
      }

      for (const el of sampledElements) {
        const computed = getComputedStyle(el);
        if (computed.fontFamily) fontFamilies.add(computed.fontFamily);
        if (computed.fontSize) fontSizes.add(computed.fontSize);
        if (computed.color && computed.color !== 'rgba(0, 0, 0, 0)') colors.add(computed.color);
        if (computed.backgroundColor && computed.backgroundColor !== 'rgba(0, 0, 0, 0)') backgrounds.add(computed.backgroundColor);
      }

      // Extract all declared @keyframes across all accessible stylesheets
      const keyframes = {};
      try {
        for (const sheet of Array.from(document.styleSheets)) {
          try {
            for (const rule of Array.from(sheet.cssRules || [])) {
              if (rule.type === CSSRule.KEYFRAMES_RULE || rule.type === 7) {
                const kfName = rule.name;
                const frames = [];
                for (const kf of Array.from(rule.cssRules || [])) {
                  frames.push({
                    keyText: kf.keyText,
                    cssText: kf.style.cssText
                  });
                }
                keyframes[kfName] = frames;
              }
            }
          } catch (e) {}
        }
      } catch (e) {}

      // Sample elements for animations & transitions
      const animatedElements = [];
      const transitionCurves = new Set();
      const animationCurves = new Set();
      const allElements = Array.from(document.querySelectorAll('*'));
      for (const el of allElements) {
        const comp = getComputedStyle(el);
        const animName = comp.animationName;
        const animDur = comp.animationDuration;
        const animTiming = comp.animationTimingFunction;
        const transProp = comp.transitionProperty;
        const transDur = comp.transitionDuration;
        const transTiming = comp.transitionTimingFunction;

        if (animName && animName !== 'none' && animDur && animDur !== '0s') {
          animationCurves.add(`${animName} (${animDur}, ${animTiming})`);
          if (animatedElements.length < 50) {
            animatedElements.push({
              tag: el.tagName.toLowerCase(),
              className: el.className && typeof el.className === 'string' ? el.className.trim().split(/\s+/).slice(0, 3).join('.') : '',
              animation: { name: animName, duration: animDur, timing: animTiming, iterationCount: comp.animationIterationCount }
            });
          }
        }

        if (transProp && transProp !== 'none' && transDur && transDur !== '0s') {
          transitionCurves.add(`${transProp} (${transDur}, ${transTiming})`);
        }
      }

      // Check Web Animations API
      const webAnimations = [];
      if (typeof document.getAnimations === 'function') {
        try {
          for (const anim of document.getAnimations()) {
            const effect = anim.effect;
            if (effect && effect.getTiming) {
              webAnimations.push({
                playState: anim.playState,
                timing: effect.getTiming()
              });
            }
          }
        } catch (e) {}
      }

      return {
        pageTitle: document.title,
        webgl: { hasCanvas, webglVersion },
        cssVariables: cssVars,
        motion: {
          keyframes,
          keyframeCount: Object.keys(keyframes).length,
          animatedElements,
          transitionCurves: Array.from(transitionCurves),
          animationCurves: Array.from(animationCurves),
          webAnimationsCount: webAnimations.length
        },
        computed: {
          fontFamilies: Array.from(fontFamilies),
          fontSizes: Array.from(fontSizes).slice(0, 15),
          textColors: Array.from(colors).slice(0, 15),
          backgroundColors: Array.from(backgrounds).slice(0, 15)
        }
      };
    });

    // 5. Update tokens-schema.json automatically
    const tokensSchemaPath = resolve(tokensDir, 'tokens-schema.json');
    let existingTokens = {};
    if (existsSync(tokensSchemaPath)) {
      try {
        existingTokens = JSON.parse(readFileSync(tokensSchemaPath, 'utf-8'));
      } catch (e) {}
    }

    const mergedTokens = {
      ...existingTokens,
      targetUrl: url,
      extractedAt: new Date().toISOString(),
      webglContext: designTokens.webgl,
      extractedCssVariables: designTokens.cssVariables,
      computedPalette: {
        backgrounds: designTokens.computed.backgroundColors,
        textColors: designTokens.computed.textColors,
        fontFamilies: designTokens.computed.fontFamilies
      }
    };
    writeFileSync(tokensSchemaPath, JSON.stringify(mergedTokens, null, 2), 'utf-8');
    console.log(`💎 Synced tokens into: ${tokensSchemaPath}`);

    // 5b. Save Extracted Motion & Animation Curves
    const motionExtractedPath = resolve(motionDir, 'extracted-motion.json');
    writeFileSync(motionExtractedPath, JSON.stringify({
      targetUrl: url,
      extractedAt: new Date().toISOString(),
      motion: designTokens.motion
    }, null, 2), 'utf-8');
    console.log(`🎬 Synced motion & animations into: ${motionExtractedPath} (${designTokens.motion.keyframeCount} keyframe sets, ${designTokens.motion.animationCurves.length} curves)`);

    // 6. Save Intercepted Network Assets
    const interceptedPath = resolve(outputDir, 'intercepted-network-assets.json');
    writeFileSync(interceptedPath, JSON.stringify({
      targetUrl: url,
      interceptedAt: new Date().toISOString(),
      counts: {
        models3D: interceptedAssets.models3D.length,
        shaders: interceptedAssets.shaders.length,
        media: interceptedAssets.media.length,
        fonts: interceptedAssets.fonts.length,
        svgs: interceptedAssets.svgs.length,
        textures: interceptedAssets.textures.length
      },
      assets: interceptedAssets
    }, null, 2), 'utf-8');
    console.log(`📦 Saved Intercepted Network Assets: ${interceptedPath}`);

    // 7. Tech Stack Heuristics
    const techStack = [];
    if (renderedHtml.includes('__NEXT_DATA__') || renderedHtml.includes('/_next/')) techStack.push('Next.js');
    if (renderedHtml.includes('astro')) techStack.push('Astro');
    if (renderedHtml.includes('react')) techStack.push('React');
    if (designTokens.webgl.hasCanvas) techStack.push(`Three.js / ${designTokens.webgl.webglVersion || 'WebGL'} Canvas`);
    if (renderedHtml.includes('gsap')) techStack.push('GSAP');
    if (renderedHtml.includes('tailwind')) techStack.push('Tailwind CSS');
    if (renderedHtml.includes('lenis')) techStack.push('Lenis Smooth Scroll');

    // 8. Save Recon Summary
    const summary = {
      targetUrl: url,
      capturedAt: new Date().toISOString(),
      runtimeMode: 'playwright-deep-browser',
      latencyMs: Date.now() - startTime,
      pageTitle: designTokens.pageTitle,
      heuristics: techStack,
      webglInfo: designTokens.webgl,
      networkAssetsIntercepted: {
        models3DCount: interceptedAssets.models3D.length,
        shadersCount: interceptedAssets.shaders.length,
        mediaCount: interceptedAssets.media.length,
        fontsCount: interceptedAssets.fonts.length,
        svgsCount: interceptedAssets.svgs.length,
        texturesCount: interceptedAssets.textures.length
      },
      motionExtracted: {
        keyframeCount: designTokens.motion.keyframeCount,
        animationCurvesCount: designTokens.motion.animationCurves.length,
        transitionCurvesCount: designTokens.motion.transitionCurves.length,
        animatedElementsCount: designTokens.motion.animatedElements.length
      },
      screenshotFile: 'target-screenshot.png'
    };

    const summaryPath = resolve(outputDir, 'recon-summary.json');
    writeFileSync(summaryPath, JSON.stringify(summary, null, 2), 'utf-8');
    console.log(`📊 Saved Deep Recon Summary: ${summaryPath}`);

    console.log(`\n🎉 Deep Runtime Browser Recon successfully completed!`);
    console.log(`   🧊 3D Models/HDR:      ${interceptedAssets.models3D.length}`);
    console.log(`   ✨ GLSL Shaders:       ${interceptedAssets.shaders.length}`);
    console.log(`   🎬 Media Videos:       ${interceptedAssets.media.length}`);
    console.log(`   🔤 Custom Fonts:       ${interceptedAssets.fonts.length}`);
    console.log(`   🎨 Vector SVGs:        ${interceptedAssets.svgs.length}`);
    console.log(`   🖼️  Textures/Img:       ${interceptedAssets.textures.length}`);
    console.log(`   ⚡ Keyframe Animations: ${designTokens.motion.keyframeCount}`);
    console.log(`   🌊 Motion Curves:      ${designTokens.motion.animationCurves.length}\n`);

    await browser.close();
    return summary;
  } catch (error) {
    console.error(`❌ Deep Browser Recon error:`, error.message);
    if (browser) await browser.close().catch(() => {});
    console.log(`🔄 Attempting fallback static fetch recon...`);
    return runFetchFallback(url);
  }
}

// Fallback when Headless Browser is unavailable
async function runFetchFallback(url) {
  const startTime = Date.now();
  console.log(`⚡ Running static fetch fallback for: ${url}`);
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36'
      }
    });
    const html = await res.text();
    const htmlPath = resolve(outputDir, 'captured-dom.html');
    writeFileSync(htmlPath, html, 'utf-8');

    const summary = {
      targetUrl: url,
      capturedAt: new Date().toISOString(),
      runtimeMode: 'static-fetch-fallback',
      latencyMs: Date.now() - startTime,
      statusCode: res.status,
      htmlLength: html.length
    };
    writeFileSync(resolve(outputDir, 'recon-summary.json'), JSON.stringify(summary, null, 2), 'utf-8');
    console.log(`✅ Static fetch completed. Saved: ${htmlPath}`);
    return summary;
  } catch (e) {
    console.error(`❌ Fallback fetch also failed:`, e.message);
  }
}

runDeepRecon(targetUrl);
