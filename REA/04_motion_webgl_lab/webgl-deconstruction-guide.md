# REA WebGL 3D Scene Deconstruction Protocol

A step-by-step methodology for reverse-engineering high-end 3D WebGL scenes, interactive canvas hero elements, and custom shaders (inspired by Lusion, Active Theory, and Apple) into production-ready Three.js code.

---

## 🔬 Phase 1: GPU Pipeline & Canvas Inspection

### 1. Identify Context & Canvas Properties
Open DevTools Console on the target site:
```javascript
const canvas = document.querySelector('canvas');
const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
console.log({
  vendor: gl.getParameter(gl.VENDOR),
  renderer: gl.getParameter(gl.RENDERER),
  version: gl.getParameter(gl.VERSION),
  shadingLanguage: gl.getParameter(gl.SHADING_LANGUAGE_VERSION),
  maxTextureSize: gl.getParameter(gl.MAX_TEXTURE_SIZE)
});
```

### 2. Spector.js Capture (Draw Call Profiling)
1. Install the **Spector.js** Chrome extension.
2. Click the Spector.js icon and hit **Record Frame**.
3. Inspect the recorded frame:
   - **Total Draw Calls:** Check if the scene performs 1–10 draw calls (highly batched/instanced) or 100+ (unoptimized).
   - **Buffer Geometries:** Inspect vertex count, normal attributes, and UV mapping.
   - **Shaders:** View the exact Vertex Shader and Fragment Shader compiled into GPU memory.

---

## 📐 Phase 2: Scene Graph Reconstruction

### 1. Camera Rig & Viewport Calibration
Most studio hero scenes use:
- **PerspectiveCamera:** `FOV: 45°` or `35°` (for minimal perspective distortion).
- **Position:** `(0, 0, 5)` to `(0, 0, 8)` with `camera.lookAt(0, 0, 0)`.
- **DPR Clamping:** Always clamp `renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))` to prevent 4K screens from frying mobile GPUs.

### 2. Lighting & Environment Setup
- **Ambient Light:** Soft fill (`#ffffff`, intensity `0.3–0.5`).
- **Directional Key Light:** Casts highlights from top-right `(5, 5, 5)`.
- **Spherical Matcap / HDR Environment:** Used for realistic metallic or glass reflections without heavy real-time raytracing overhead.

---

## 🎨 Phase 3: Shader Extraction & Conversion to Three.js

When extracting GLSL from Spector.js, convert it into a Three.js `ShaderMaterial`:

```typescript
import * as THREE from 'three';

const customShaderMaterial = new THREE.ShaderMaterial({
  vertexShader: `
    varying vec2 vUv;
    varying vec3 vNormal;
    void main() {
      vUv = uv;
      vNormal = normalize(normalMatrix * normal);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    varying vec2 vUv;
    varying vec3 vNormal;
    uniform float uTime;
    void main() {
      float fresnel = pow(1.0 - dot(vec3(0.0, 0.0, 1.0), vNormal), 3.0);
      vec3 color = mix(vec3(0.05, 0.05, 0.1), vec3(0.39, 0.4, 0.95), fresnel);
      gl_FragColor = vec4(color, 1.0);
    }
  `,
  uniforms: {
    uTime: { value: 0 },
    uResolution: { value: new THREE.Vector2() }
  },
  transparent: true
});
```

---

## ⚡ Phase 4: Animation Loop & React Component Lifecycle

In Next.js / React 19, Three.js canvases must be strictly mounted in `useEffect` and **completely disposed** upon unmount to eliminate memory leaks:

```typescript
useEffect(() => {
  if (!containerRef.current) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  containerRef.current.appendChild(renderer.domElement);

  // Animation Loop
  let animationFrameId: number;
  const clock = new THREE.Clock();

  const tick = () => {
    const elapsedTime = clock.getElapsedTime();
    material.uniforms.uTime.value = elapsedTime;
    renderer.render(scene, camera);
    animationFrameId = requestAnimationFrame(tick);
  };
  tick();

  // Strict Cleanup Protocol
  return () => {
    cancelAnimationFrame(animationFrameId);
    geometry.dispose();
    material.dispose();
    renderer.dispose();
    if (renderer.domElement.parentElement) {
      renderer.domElement.parentElement.removeChild(renderer.domElement);
    }
  };
}, []);
```

---

## 🎯 Verification Matrix
1. **FPS Stability:** Must hold 60fps steady on 120Hz/60Hz monitors.
2. **GPU Memory:** Texture memory must not increase on window resize or page re-renders.
3. **Resize Responsiveness:** Viewport resize listener must update `camera.aspect` and call `camera.updateProjectionMatrix()`.
