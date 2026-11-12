# Bug Assessment: Visual & Motion Fidelity Mismatch in Weichie REA

- **Slug**: `visual-fidelity-mismatch`
- **Reported**: 2026-11-12
- **Severity**: Critical (Full REA Accuracy Deficit)

## Symptom Analysis from User Evidence

User submitted side-by-side evidence:
- **Image 1 (Live Weichie)**: Light cream/white background (`#fdf9f9`), clean full-width header with authentic serif wordmark SVG, 3D amphitheater carousel with -13 degree forward tilt and bent curved planes (`uBend = 0.12`), 15 circular service cards with exact cover textures, bottom label pills with authentic SVG icons.
- **Image 2 (Initial Draft)**: Rendered dark (`#0d0d0d`), center-floating nav pill obstructing the stage, flat cards without cylindrical bending or tilt, misaligned font styles.

## Root Causes Identified
1. **Theme / Background Default**: Initial styling defaulted to `class="dark"` with `#0d0d0d` background, whereas Weichie's primary default theme is clean light (`#fdf9f9`).
2. **Carousel Geometry & Physics**:
   - Weichie uses `CylinderGroup` tilted at `-13deg` with `position.y = radius * sin(-13deg)` and camera at `fov: 24`, `z: 8.6`.
   - The card geometry is a subdivided plane (`PlaneGeometry(1.6, 1.6, 24, 1)`) with vertex shader quadratic deflection `p.z -= uBend * distX * distX` creating the inward curved concave bend.
   - Weichie creates `15` cards (`N=3` repetitions of 5 services) rather than 5 flat cards.
3. **Header Architecture**: Weichie uses a clean, full-width `site-header` featuring the exact 133x28 SVG wordmark, text nav links, and a signature pill button (`Get in touch`) with a coral badge icon.
4. **Section Completeness**: Missing the exact authentic copy and interactive components for `simple-text`, `latest-work` grid, `text-sticky`, `meet-the-team`, `technology` picker, and dual-hub office `footer`.

## Remediation Plan
- Switch global theme to Weichie's authentic light palette (`#fdf9f9` background, `#111111` typography, `#ff4f31` accent).
- Completely rewrite `HeroThreeCanvas.tsx` using the exact extracted shaders (`j` and `M`), 15 curved planes, -13deg tilt, and pointer drag inertia.
- Rebuild `Navbar.tsx` with the exact SVG wordmark, clean layout, and "Get in touch" pill.
- Rebuild all subsequent sections with verbatim HTML copy, real assets, and verified responsive styling.
