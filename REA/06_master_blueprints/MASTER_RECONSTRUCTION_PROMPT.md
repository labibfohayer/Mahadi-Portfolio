# 🚀 REA MASTER RECONSTRUCTION PROMPT (PROD-READY TEMPLATE)

> **Instructions for the User:**
> Copy this entire markdown prompt into a new turn with your AI coding agent (Antigravity). Fill in or reference the sections below using data extracted from REA Folders 01–05. The AI agent will execute the reconstruction with zero hallucinations, strict TypeScript compliance, and 60 FPS performance.

---

```markdown
# MISSION: REVERSE-ENGINEER & RECONSTRUCT TARGET FEATURE

You are a Principal Frontend Systems Architect and Creative Technologist. Your objective is to build a pixel-perfect, 60 FPS, fully responsive, and accessible reconstruction of the target component/section specified below.

## 1. TARGET SUMMARY (From REA Folder 01)
- **Target Name:** [Insert Component / Section Name, e.g. "Hero WebGL Canvas Scene"]
- **Target URL / Reference:** [Insert URL or reference screenshot]
- **Target Tech Stack:** Next.js (App Router), Tailwind CSS v4, Three.js, GSAP / Framer Motion.

## 2. REQUISITE ASSETS (From REA Folder 02)
- **3D Models / GLB:** `REA/02_assets_extractor/models/[filename.glb]`
- **Textures / HDR:** `REA/02_assets_extractor/textures/[filename.png]`
- **Custom Fonts:** `REA/02_assets_extractor/fonts/[font-name.woff2]`
- **Vector Icons:** `REA/02_assets_extractor/svgs/[icon-name.svg]`

## 3. DESIGN TOKENS SPECIFICATION (From REA Folder 03)
Apply the exact tokens recorded in `REA/03_design_tokens/tokens-schema.json`:
- **Backgrounds:** Primary: `#050505`, Surface: `rgba(255, 255, 255, 0.03)`, Glass: `rgba(10, 10, 12, 0.75)`
- **Accents:** `#6366f1` (Indigo glow: `rgba(99, 102, 241, 0.45)`)
- **Typography:**
  - Display: `clamp(3rem, 7vw, 6.5rem)`, `leading-none`, `tracking-tighter`
  - Subtitle: `clamp(1.125rem, 2vw, 1.5rem)`, `text-neutral-400`
- **Tailwind v4 Classes:** Use clean utility patterns as outlined in `REA/03_design_tokens/tailwind-mapper.md`.

## 4. MOTION & SHADER CHOREOGRAPHY (From REA Folder 04)
- **Animation Curve:** Easing `cubic-bezier(0.16, 1, 0.3, 1)` (Fluid editorial deceleration).
- **Framer Motion Config:** Spring `stiffness: 380, damping: 30, mass: 0.8`.
- **Three.js Shader / Scene Mechanics:**
  - PerspectiveCamera: `FOV: 45°`, clamped DPR: `Math.min(window.devicePixelRatio, 2)`.
  - Vertex Shader: Noise wave displacement along normals.
  - Fragment Shader: Fresnel rim glow (`pow(1.0 - dot(viewDir, normal), 2.5)`).
  - Strict Disposal: Dispose all geometries, materials, and renderer on component unmount.

## 5. ARCHITECTURE & PROPS CONTRACT (From REA Folder 05)
- **Output Destination:** Staged first at `REA/07_reconstructed_builds/staging/[ComponentName].tsx`.
- **Component Boundary:** Specify whether `"use client"` is required.
- **TypeScript Interface:**
  ```typescript
  export interface [ComponentName]Props {
    // Exact props interface
  }
  ```

## 6. STRICT IMPLEMENTATION GUARDRAILS (ZERO BUGS)
1. **TypeScript Strictness:** ZERO `any` types. Provide full type definitions for all state, props, and Three.js objects.
2. **Next.js & React 19 Safety:**
   - Three.js WebGL canvas must only run in the browser inside a `useEffect` hook.
   - Do NOT reference `window` or `document` during SSR.
   - Handle window resize with automatic aspect ratio updates and renderer resizing.
3. **Performance (60 FPS):**
   - Throttle mousemove events using `requestAnimationFrame`.
   - Never re-allocate textures or geometries inside the animation tick loop.
4. **Clean Code:** Write modular, readable code with descriptive comments explaining the reverse-engineered mechanics.

Please inspect the REA folders, generate the complete TypeScript component file, and verify it with `npx tsc --noEmit`.
```
