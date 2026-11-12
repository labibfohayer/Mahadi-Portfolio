# Feature Specification: Weichie Studio Website Full REA Reconstruction

**Feature ID**: `001-weichie-rea`  
**Target URL**: `https://weichie.com/`  
**Created**: 2026-11-12  
**Status**: Specified & Ready for Implementation  

---

## 🎯 Executive Summary & Purpose

Reverse Engineer and Reconstruct the complete digital experience of **Weichie Studio** (`https://weichie.com/`), an award-winning creative digital agency in Brussels & New York. The goal is to deliver a 100% faithful, pixel-perfect, and motion-synchronized replica covering all design tokens, custom WebGL/Three.js shaders, 3D cylindrical carousels, dynamic cursor-following previews, responsive layouts, and smooth physics-driven interactions.

---

## 👥 User Scenarios & Experience Walkthrough

### 1. Primary Scenario: Immersive 3D Hero Stage Interaction
- **Given** the visitor arrives at the homepage,
- **When** the hero section hydrates,
- **Then** a 3D cylindrical carousel of service cards (Web Development, eCommerce, Application Development, AI, Blockchain) renders in WebGL2 with custom SDF rounded box shaders, anti-aliased borders, and a Gaussian blur sweep.
- **When** the visitor drags or swipes horizontally on the canvas,
- **Then** the carousel rotates with continuous inertia, damping, and velocity preservation, smoothly settling on release with a signature `cubic-bezier(0.19, 1, 0.22, 1)` easing curve.
- **When** the visitor clicks or taps any of the service pills above the stage,
- **Then** the carousel automatically animates with a synchronized GSAP timeline, bringing the selected card front and center while highlighting its active badge.

### 2. Secondary Scenario: Interactive Case Studies & Floating Preview Card
- **Given** the visitor scrolls down to the selected works / case studies list,
- **When** the cursor hovers over any case study row (e.g., DogChef, Spantech, AdaptiveGreen, Druglijn),
- **Then** a floating WebGL preview card scales in from `0.8` to `1.0` and smoothly tracks the cursor's horizontal position with `power3.out` quick-to dynamics while locking vertically to the hovered row.
- **When** the cursor transitions between different rows,
- **Then** the image texture seamlessly cross-fades using the pixelation mosaic shader transition without any layout shifting or frame dropping.

### 3. Tertiary Scenario: Capabilities & Interactive Architecture Diagram
- **Given** the visitor navigates through the agency's capabilities and methodology,
- **When** hovering over distinct capability nodes,
- **Then** interactive previews update synchronously with smooth text cross-fades, diagram line glows, and status badges.

### 4. Quaternary Scenario: Full Responsive Adaptation
- **Given** any viewport size from mobile (375px) to tablet (768px) and wide desktop (1920px+),
- **Then** all typography, grid containers, floating navigation bars, and touch events adapt fluidly with zero horizontal overflow and sub-pixel alignment.

---

## 📋 Functional Requirements

### FR-1: Design System & Token Extraction
- **Color Palette**: Reconstruct the exact dark/light aesthetic:
  - Deep rich dark background: `#0d0d0d` / `#121212`
  - High-contrast text: `#ffffff`, `#e5e5e5`, muted `#999999`
  - Signature brand accent: `#ff4f31` (warm scarlet/coral)
  - Card borders & subtle glass dividers: `rgba(255, 255, 255, 0.08)`
- **Typography Hierarchy**:
  - Primary sans font: **Fustat** (Medium 500, Bold 700)
  - Editorial serif / display font: **Season Mix** (Medium)
  - Proportional modular scale matching extracted tokens.

### FR-2: 3D WebGL Cylindrical Hero Carousel
- Integrated Three.js r184 canvas (`data-hero-homepage-canvas`).
- Interactive cylinder layout featuring 5 service planes positioned around an orbital radial radius.
- Custom GLSL Fragment Shader:
  - Signed Distance Field (SDF) rounded rectangle with adjustable corner radius.
  - 3x3 Gaussian-weighted kernel sampling with aspect ratio preservation (`coverUv`).
  - Dynamic transition progress (`uProgress`): pixelation block effect peaking at midpoint, chromatic color veil (`uColor`), and quantized retro step levels.
  - Angle-dependent plane opacity: front planes maintain `uOpacity = 1.0`, fading gracefully toward the back.
- Interactive Physics:
  - Pointer/Touch drag with continuous momentum, clamped spin velocity, and automatic idle rotation.
  - Raycaster-based hit detection for card selection.
  - Bi-directional sync between DOM service labels and 3D camera angles.

### FR-3: Floating Cursor-Following Preview Engine
- Floating preview canvas mounted adjacent to work listings (`[data-list-preview-host]`).
- Smooth X-axis cursor following with spring-like inertia (`gsap.quickTo(canvas, 'x', { duration: 0.5, ease: 'power3.out' })`).
- Row-anchored Y positioning (`positionToRow`) with bounds clipping to stay inside parent container.
- WebGL texture swapping with active texture caching and transition progress interpolation.

### FR-4: Header & Overlay Navigation
- Sticky floating pill navbar with brand mark (`weichie-logo.svg`), location badge (`Brussels & New York`), and menu trigger.
- Fullscreen overlay menu with staggered item reveal animated using `cubic-bezier(0.19, 1, 0.22, 1)`.
- Smooth language toggle and contact CTA button with hover micro-animations (`btn-icon-pop`).

### FR-5: Case Studies & Selected Work Showcase
- Rich project cards displaying client achievements (DogChef, AdaptiveGreen, Spantech, Restaurant, Druglijn).
- High-fidelity typography, project category tags, live preview triggers, and external study links.

### FR-6: Agency Team & Global Office Footprint
- Authentic team member grid with verified headshots (Mathias, Sam, Sven, Yannick, Bob, Edward).
- Dual-hub presence showcase highlighting Brussels (Belgium) and New York (USA) studios.

### FR-7: Inertia Smooth Scrolling & Page Transitions
- Integrated Lenis smooth scroll engine configured for natural mouse wheel and touch deceleration (`lerp: 0.08`, `duration: 1.2`).
- Scroll-triggered reveal animations for editorial text blocks and media grids.

---

## 📈 Success Criteria & Quality Gates

| Metric | Target | Measurement Method |
|--------|--------|-------------------|
| **Visual Accuracy** | 98%+ match with live site | Viewport screenshot comparison vs `target-screenshot.png` |
| **Motion Fidelity** | 60fps locked, 120fps capable | Chrome Performance devtools & requestAnimationFrame budget |
| **Asset Completeness** | 100% of required media & fonts | Local asset inventory check (WOFF2 fonts, SVGs, textures) |
| **Zero Errors** | 0 TypeScript errors, 0 runtime exceptions | `npx tsc --noEmit` and browser console audit |
| **Responsiveness** | Flawless across 375px, 768px, 1440px | Multi-viewport automated rendering test |

---

## 🔒 Strict Guardrails & Zero Placeholders Policy
- Every single section must contain real, functional markup and styling.
- Absolutely NO `// TODO: implement later`, placeholder images, or dummy text.
- Full adherence to the `/strict-watchdog` protocol before marking completion.
