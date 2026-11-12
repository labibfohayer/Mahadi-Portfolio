# REA Phase 02: 3D Models, Media, Fonts & SVG Extraction

## 🎯 Purpose & Scope
The `02_assets_extractor/` folder provides the asset acquisition pipeline. It extracts, isolates, catalogs, and prepares binary models (`.glb`/`.gltf`), textures, vector SVGs, and web fonts (`.woff2`) discovered during Phase 01.

---

## 📂 Folder Architecture
```text
02_assets_extractor/
├── README.md               # Operational extraction guide (this file)
├── asset-inventory.json    # Master registry tracking all extracted assets
├── extract-assets.mjs      # Zero-dependency extractor script
├── fonts/                  # Staging for .woff2 / .woff typography files
├── models/                 # Staging for .glb / .gltf 3D assets & HDR maps
├── svgs/                   # Staging for extracted vector icons and logos
└── textures/               # Staging for noise maps, matcaps, PBR textures
```

---

## ⚡ Operational Protocols

### Step 1: Run the Asset Extraction Script
Once Phase 01 has produced `captured-dom.html`, run:
```bash
# Catalog assets and extract inline SVGs
node REA/02_assets_extractor/extract-assets.mjs

# Or catalog and attempt direct downloading of remote assets:
node REA/02_assets_extractor/extract-assets.mjs --download
```

### Step 2: Manual 3D Model & Network Extraction
If 3D assets or WebGL textures are loaded dynamically via Three.js / XHR:
1. Open DevTools -> **Network** tab -> Filter by `Fetch/XHR` or `.glb`.
2. Find the `.glb` or `.gltf` asset request, right-click, and select **Open in new tab** to download.
3. Move the downloaded file into `REA/02_assets_extractor/models/`.
4. Register the asset entry inside `asset-inventory.json`.

### Step 3: Draco & glTF Optimization
Before embedding any 3D model into Three.js:
- Inspect vertex and polygon counts. Aim for < 50,000 vertices for mobile 60fps performance.
- Draco compression or meshopt compression can reduce file size by 70–90%.

---

## 🛡️ Quality Gates
- All SVGs must have clean viewports and use `currentColor` where possible.
- Textures must use power-of-two dimensions (`1024x1024`, `2048x2048`).
- Font files must be validated for web compliance (`woff2` preferred).
