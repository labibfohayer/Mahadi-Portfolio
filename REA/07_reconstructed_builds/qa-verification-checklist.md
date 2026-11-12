# REA Quality Assurance & Verification Checklist

Before moving any reverse-engineered component from `REA/07_reconstructed_builds/staging/` into the production codebase (`src/components/`), it must pass all verification gates below.

---

## 🔍 Component Details
- **Component:** `[ComponentName.tsx]`
- **Source Feature:** `[Target Site / Section Name]`
- **Staging Location:** `REA/07_reconstructed_builds/staging/[ComponentName.tsx]`
- **Production Target:** `src/components/[category]/[ComponentName.tsx]`
- **Reviewer:** Principal Reverse Engineering Systems Architect

---

## 🛡️ Gate 1: TypeScript & Build Safety
- [ ] **Zero Compilation Errors:** `npx tsc --noEmit` exits with status `0`.
- [ ] **Zero `any` Types:** All props, state variables, and Three.js/GSAP references have explicit interfaces or types.
- [ ] **Next.js 15+ / React 19 Compliance:**
  - [ ] Client-only hooks (`useState`, `useEffect`, `useRef`) only appear in `"use client"` modules.
  - [ ] No `window` or `document` calls during SSR/static evaluation.
  - [ ] No Hydration mismatch warnings in browser console.

---

## ⚡ Gate 2: GPU Performance & 60 FPS Profiling
- [ ] **Frame Rate Stability:** Holds consistent 60 FPS (or 120 FPS on ProMotion displays) with no micro-stutter.
- [ ] **DPR Clamping:** WebGL canvas clamps device pixel ratio:
  ```typescript
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  ```
- [ ] **Memory & Garbage Collection:**
  - [ ] Proper disposal of Three.js `geometry.dispose()`, `material.dispose()`, and `renderer.dispose()` on unmount.
  - [ ] No accumulating textures or memory leaks on window resize.
  - [ ] Event listeners (`mousemove`, `scroll`, `resize`) are cleaned up in `useEffect` return functions.

---

## 📱 Gate 3: Responsive Viewport Integrity
- [ ] **Mobile (393px - iPhone 15 Pro):** No horizontal layout overflow; touch interactions work fluidly; text is readable.
- [ ] **Tablet (768px - iPad):** Layout reflows gracefully without awkward text wraps.
- [ ] **Laptop (1440px - MacBook Pro):** Standard layout matches target reference.
- [ ] **Desktop / Ultrawide (1920px & 2560px):** Content remains properly centered within max-width constraints (`max-w-7xl`).

---

## ♿ Gate 4: Accessibility & Motion Preferences
- [ ] **Prefers-Reduced-Motion:** Animations gracefully disable or simplify when system setting is active (`@media (prefers-reduced-motion: reduce)`).
- [ ] **Keyboard Navigation:** All interactive elements (links, buttons) are reachable via `Tab` with visible focus rings.
- [ ] **Contrast & Color:** Text meets minimum WCAG AA contrast ratio (4.5:1 for body copy).

---

## 🎯 Verification Verdict
- [ ] **APPROVED FOR PRODUCTION MIGRATION**
- [ ] **CHANGES REQUESTED (See notes below)**

*Notes:*
- 
