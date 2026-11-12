# REA Phase 01: Target Reconnaissance & DOM/Network Capture

## 🎯 Purpose & Scope
The `01_recon_capture/` folder is the initial intake port of the **Reverse Engineering Anything (REA)** framework. Its objective is to capture ground-truth raw artifacts from the target website, web application, or 3D WebGL scene before any code is written or assumptions are made.

---

## 📂 File Inventory & Architecture
| File | Type | Purpose |
| :--- | :--- | :--- |
| `target-manifest.json` | Configuration / Schema | Master metadata manifest logging target URL, device viewports, detected tech stack, and prioritized reconstruction milestones. |
| `capture-dom.mjs` | Automated Script | Zero-dependency Node.js engine to fetch the target HTML, parse metadata, identify external/inline scripts, detect stylesheets, and log tech stack heuristics. |
| `captured-dom.html` | Generated Artifact | Complete verbatim DOM dump of the target application. |
| `recon-summary.json` | Generated Artifact | Structured breakdown of page title, HTTP headers, stylesheets, scripts, and initial heuristics. |

---

## ⚡ Operational Protocols (How to Conduct Recon)

### Step 1: Run the Automated DOM Capture
Execute the native capture engine against any target URL:
```bash
node REA/01_recon_capture/capture-dom.mjs "https://target-website.com"
```
*Output will automatically populate `captured-dom.html` and `recon-summary.json`.*

### Step 2: Capture Viewport Screenshots & HAR Network Logs
For comprehensive visual and network reverse engineering:
1. Open the target site in Chrome / Chromium DevTools (`F12`).
2. Go to the **Network** tab, check **Preserve log**, and reload the page with a hard refresh (`Ctrl + Shift + R`).
3. Right-click the network requests and select **Save all as HAR with content**. Save as `network-capture.har` in this directory.
4. Capture high-resolution viewport screenshots across:
   - **Desktop 4K / Ultrawide:** `2560 x 1440`
   - **Desktop Standard:** `1920 x 1080`
   - **Mobile Viewport:** `393 x 852` (iPhone 15 Pro)
   Save images into this directory as `viewport-desktop.png` and `viewport-mobile.png`.

### Step 3: Populate `target-manifest.json`
Update `target-manifest.json` with the detected libraries (e.g., Three.js, GSAP, Tailwind, Lenis), key reconstruction goals, and network metrics.

---

## 🛡️ Best Practices & Quality Control
- **Inspect `__NEXT_DATA__`:** If the site is built with Next.js, search for `<script id="__NEXT_DATA__">` inside `captured-dom.html`. It contains exact page props, server-rendered state, and build IDs.
- **Identify WebGL Canvases:** Check for `<canvas>` elements and look at initialized WebGL contexts (`webgl` or `webgl2`) to prepare for Phase 04 deconstruction.
