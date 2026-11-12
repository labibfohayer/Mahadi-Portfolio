# REA Phase 04: Motion Design & WebGL 3D Shader Laboratory

## 🎯 Purpose & Scope
The `04_motion_webgl_lab/` directory is the interactive mechanics workshop of REA. It deconstructs and catalogs:
- Three.js / WebGL scenes, buffer geometries, and custom GLSL vertex & fragment shaders.
- GSAP timelines, ScrollTrigger pin & scrub mechanics.
- Framer Motion spring physics (stiffness, damping, mass).
- Lenis smooth scroll inertia calibrations.

---

## 📂 File Inventory
| File | Format | Purpose |
| :--- | :--- | :--- |
| `shader-template.glsl` | GLSL | Ready-to-use vertex & fragment shader template with simplex noise, Fresnel glow, and mouse interaction. |
| `motion-curves.json` | JSON | Curated easing curves, GSAP timeline configs, and Framer Motion spring presets. |
| `webgl-deconstruction-guide.md` | Markdown | Comprehensive manual for profiling draw calls, extracting GPU shaders, and mounting Three.js safely inside React/Next.js. |
| `README.md` | Markdown | Operational guide for this motion laboratory. |

---

## ⚡ Operational Protocols

### Step 1: Profiling WebGL Scenes
- Inspect `<canvas>` contexts via DevTools or Spector.js.
- Extract vertex shaders, fragment shaders, and uniform names (`uTime`, `uMouse`, `uProgress`).
- Document them in a new shader file or port into `shader-template.glsl`.

### Step 2: Extracting Animation Easing & Timing
- Open Chrome DevTools -> **Animations** drawer.
- Trigger hover effects or page transitions.
- Record the duration, delay, and cubic-bezier curve. Compare against `motion-curves.json` to find the exact matching ease.

---

## 🛡️ Performance Verification Gate
- GPU Shader Compilation: Zero warnings or deprecations in WebGL console.
- Frame Rate: 60 FPS verified via Chrome DevTools Performance tab.
- React Lifecycle Safety: Ensure proper disposal of `Geometry`, `Material`, and `WebGLRenderer` on component unmount.
