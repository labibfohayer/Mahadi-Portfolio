# REA Section Specification Blueprint

Use this template to document the exact technical specification for any single component, section, or interactive widget before initiating AI reconstruction.

---

## 📋 1. Section Overview
- **Section ID / Name:** `HeroCanvasSection`
- **Target File Path:** `src/components/sections/HeroCanvasSection.tsx`
- **Staging Path:** `REA/07_reconstructed_builds/staging/HeroCanvasSection.tsx`
- **Component Classification:** React Client Component (`"use client"`)
- **Key Visual Goal:** High-impact landing hero with interactive WebGL background, fluid typography, and magnetic call-to-action buttons.

---

## 📱 2. Responsive Breakpoint Layout Matrix

| Breakpoint | Viewport Width | Layout Behavior | 3D WebGL Behavior |
| :--- | :--- | :--- | :--- |
| **Mobile** | `< 640px` | Single column vertical stack, text centered, reduced padding (`px-4`) | Reduced particle count (500 pts), DPR clamped to 1.5, touch pan rotation |
| **Tablet** | `640px - 1024px` | 2-column hybrid layout, text left-aligned, CTAs inline | Normal particle count (1500 pts), touch & pointer tracking |
| **Desktop** | `1024px - 1536px`| Grid layout with canvas taking full right-side background, text overlay | Full WebGL shaders, mouse magnetic attraction, post-processing bloom |
| **Ultrawide**| `> 1536px` | Max container constraint `max-w-7xl mx-auto`, extra vertical spacing | DPR clamped to 2, high-res texture matcaps |

---

## 🎨 3. Design Tokens & Styling Map
- **Container Background:** `bg-[#050505]`
- **Headline Font:** `font-heading tracking-tighter text-white font-bold`
- **Subtitle Color:** `text-neutral-400`
- **CTA Button:**
  - Base: `bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-8 py-4 rounded-full shadow-lg shadow-indigo-500/25`
  - Motion: `whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}`

---

## 🎬 4. Animation & Interaction Specifications
1. **Initial Mount Reveal (GSAP / Framer Motion):**
   - Title lines stagger in from `y: 40px`, `opacity: 0` to `y: 0`, `opacity: 1` over `1.0s` with ease `cubic-bezier(0.16, 1, 0.3, 1)`.
   - WebGL canvas fades in simultaneously over `1.4s`.
2. **Interactive Hover (Mouse Parallax):**
   - Normalized mouse coordinates `[-1, 1]` gently rotate 3D camera rig (`camera.position.x = mouse.x * 0.5`).
3. **Scroll Transition:**
   - As user scrolls down past `100vh`, hero content fades out to `opacity: 0` via ScrollTrigger scrub.

---

## ♿ 5. Accessibility & Progressive Enhancement
- **Reduced Motion (`prefers-reduced-motion`):** If user prefers reduced motion, disable 3D canvas animation loop and show static high-res fallback image; display text immediately without stagger.
- **Semantic HTML:** `<section id="hero" aria-label="Introduction">` with an `<h1>` heading.
- **Keyboard Navigation:** All CTA links and interactive buttons must have visible `:focus-visible` outline rings.

---

## ✅ 6. Acceptance & QA Criteria
- [ ] TypeScript compiles with 0 errors (`npx tsc --noEmit`).
- [ ] No hydration mismatch errors in browser console.
- [ ] 60 FPS maintained during cursor movement on standard laptop.
- [ ] Memory verified: WebGL resources clean up on component unmount.
