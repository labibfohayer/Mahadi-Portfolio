# Specification: Hero Intro Bevel Alpha, Shadow Studio 3, and SaaS Animation

## Overview
Implement premium motion-design and visual styling on the homepage Hero headline ("The official portfolio of Mahadi Hasan, crafting visual excellence"). Specifically:
1. Apply **Bevel Alpha** 3D embossed highlight & chiseled edge effect to the middle line ("of Mahadi Hasan,"), especially accentuating the name "Mahadi Hasan".
2. Apply **Shadow Studio 3** progressive soft multi-stage directional lighting and ambient occlusion shadows to the middle line ("of Mahadi Hasan,"), creating tangible depth with warm orange studio diffusion.
3. Apply modern **SaaS Animation** kinetics across all three lines:
   - High-end SaaS text entrance with blur-to-focus dissipation, springy kinetic mask reveal (`cubic-bezier(0.16, 1, 0.3, 1)` / `power4.out`), and subtle ambient specular shimmer/specular sheen sweep.
   - Smooth seamless transition to the 3D wheel stage.

## Detailed Requirements & Visual Physics

### 1. Bevel Alpha Effect (`of Mahadi Hasan,`)
- Emulates the classic After Effects **Bevel Alpha** effect:
  - Top-left 45-degree specular light angle creating a crisp highlight bevel on the letters.
  - Chiseled edge depth with contrasting subtle bottom-right shadow bevel.
  - Crisp definition that works seamlessly in both Dark Theme and Light Theme.
  - On the orange `<span className="text-[#ff4f31]">Mahadi Hasan</span>`, the bevel features a vibrant peach/white specular ridge (`rgba(255, 230, 220, 0.85)` / `#ffe4dc`) on top, giving it a tangible 3D embossed typography look.

### 2. Shadow Studio 3 Effect (`of Mahadi Hasan,`)
- Emulates the **Shadow Studio 3** (Plugin Everything) progressive diffusion model:
  - **Stage 1 (Contact Shadow / AO)**: Sharp, tight occlusion close to the letterforms (`0 2px 4px rgba(0,0,0,0.2)` or `0 2px 6px rgba(255, 79, 49, 0.35)`).
  - **Stage 2 (Mid-depth Falloff)**: Medium directional cast (`0 6px 16px rgba(0,0,0,0.18)` / `0 8px 24px rgba(255, 79, 49, 0.25)`).
  - **Stage 3 (Volumetric Studio Diffusion)**: Wide soft ambient glow (`0 16px 40px rgba(0,0,0,0.15)` / `0 20px 50px rgba(255, 79, 49, 0.2)`).
  - Works dynamically across both light and dark themes.

### 3. SaaS Kinetic Entrance Animation (`every title line`)
- Replaces standard basic opacity fade with high-end SaaS motion choreography:
  - Masked line container (`overflow-hidden`) with clip reveal.
  - Kinetic transform from `y: 60px`, `filter: blur(12px)`, `opacity: 0` to `y: 0px`, `filter: blur(0px)`, `opacity: 1`.
  - Sophisticated SaaS easing curve (`power4.out` / `cubic-bezier(0.16, 1, 0.3, 1)`).
  - Micro-staggered cadence (0.12s between lines) for premium cadence.
  - Elegant dwell period before smooth SaaS dissipation into the 3D amphitheater carousel wheel.

## Acceptance Criteria
- [ ] Middle line (`of Mahadi Hasan,`) features Bevel Alpha embossed chisel highlight and Shadow Studio 3 progressive depth shadow.
- [ ] All three lines animate in with modern SaaS blur-to-focus and kinetic masked slide.
- [ ] Perfectly legible and aesthetic in both Dark Mode (`data-theme="dark"`) and Light Mode.
- [ ] Zero regression to the 3D wheel carousel, navbar, theme switcher, or responsive layout.
- [ ] TypeScript build (`npm run build`) passes with 0 errors.
- [ ] Empirical verification with Playwright test capturing screenshots of the animation and effects.
