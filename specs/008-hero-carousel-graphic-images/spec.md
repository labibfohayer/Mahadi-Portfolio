# Spec 008: Hero 3D Carousel Graphic Design Showcase Integration

## Overview
Replace the generic placeholder 3D carousel textures in the hero section with the 15 authentic graphic design portfolio artworks located in the user's `~/Documents/Graphic` directory. Each image must be processed, aspect-corrected (cropped to a 1024x1024 square matching the 3D plane dimensions), optimized with high-fidelity Lanczos filtering, and seamlessly mapped to each of the 15 planes on the rotating WebGL carousel.

---

## User Scenarios & Acceptance Criteria

### Scenario: Viewing the 3D Hero Carousel with Real Work
- **Given** the visitor lands on the homepage.
- **When** the 3D cylindrical carousel rises up and begins its hypnotic rotation.
- **Then**:
  1. All 15 planes of the carousel display Mahadi Hasan's real graphic design projects from `~/Documents/Graphic`.
  2. The textures appear sharp, vivid, un-distorted, and perfectly fitted with rounded corners (`borderRadius: 0.08`).
  3. No placeholder or repeated generic eCommerce/AI/Blockchain covers appear in the carousel.
  4. Hovering, dragging, and spinning the carousel operates with continuous 120fps smoothness.
  5. Textures load instantly with optimized web formats (WebP/JPEG 1024x1024).

---

## Functional Requirements

### 1. Image Extraction, Cropping & Optimization Pipeline
- Source Directory: `/home/labib-fohayer/Documents/Graphic`
- Process the 15 selected master graphic design assets:
  1. `3936-Sabbir.png`
  2. `Artboard 3.png`
  3. `Ass11.png`
  4. `Ass2.png`
  5. `Ass3.png`
  6. `Ass31.png`
  7. `Ass33.png`
  8. `Ass4.png`
  9. `Ass5.png`
  10. `Assinment 1.jpg`
  11. `Green-1.png`
  12. `Perfume.png`
  13. `Sabbir 2.png`
  14. `bloe-1.png`
  15. `Untitled-2.png 01.png`
- **Aspect Correction**: Crop to 1:1 square centered on the artwork subject and resize to 1024x1024 using high-quality Lanczos resampling.
- **Destination**: Output to `/public/textures/graphic-hero-1.webp` through `graphic-hero-15.webp` (and copy to `/dist/textures/`).

### 2. Carousel Mapping in `HeroThreeCanvas.tsx`
- Define 15 distinct `HERO_GRAPHICS` items in `HeroThreeCanvas.tsx`, each pointing to its respective cropped texture `/textures/graphic-hero-N.webp`.
- Update the carousel generation loop so that each of the 15 planes receives its own unique graphic design artwork without artificial repetition.
- Preserve all existing Three.js shaders, curved cylinder bending (`uBend: 0.12`), rounded corner SDF shader, inertia physics, and drag interactions.

---

## Success Criteria

- [ ] All 15 graphic design images from `~/Documents/Graphic` are cropped to 1:1 square (1024x1024) and optimized.
- [ ] The 15 planes of the hero 3D carousel each display one unique graphic design asset.
- [ ] Image quality is crisp and clear without stretching or aspect ratio warping.
- [ ] Continuous 120fps rotation and drag interactions remain fully functional.
- [ ] `npm run build` succeeds with 0 errors.
- [ ] Playwright visual test confirms all planes render the new graphic artwork cleanly.
