# Specification: 3D Carousel Cards Shadow Studio 3 Progressive Volumetric Shadows

## Overview
Implement the **Shadow Studio 3** progressive volumetric lighting and multi-stage directional shadow system across all 3D rotating cards/images on the homepage Hero wheel (`HeroThreeCanvas.tsx`).

## Problem Statement & Visual Objective
In the current WebGL wheel, the project cards (featuring Mahadi Hasan's real artworks and projects) float as flat planes on the cylinder. They lack physical elevation, depth separation, and ground/ambient occlusion.
With **Shadow Studio 3** (Plugin Everything After Effects model):
1. Each 3D card gains a multi-layered soft progressive cast shadow behind it in true 3D space:
   - **Stage 1 (Contact AO)**: Sharp, dense contact occlusion directly behind the card boundary.
   - **Stage 2 (Directional Falloff)**: Medium directional cast with soft penumbra.
   - **Stage 3 (Volumetric Studio Diffusion)**: Wide soft ambient occlusion bloom.
2. The card shader features inner ambient occlusion / rim contact shading so the card edges look physical and elevated.
3. As the wheel rotates and cards face the camera or tilt away, the shadows dynamically adjust with cosine lighting attenuation and subtle breathing dynamics.

## Requirements & Acceptance Criteria
- [ ] **Requirement 1**: Implement Shadow Studio 3 multi-stage shadow rendering for each 3D artwork plane in `HeroThreeCanvas.tsx`.
- [ ] **Requirement 2**: The shadow must bend seamlessly with the cylindrical vertex shader (`uBend`) and move synchronously with the rotating wheel.
- [ ] **Requirement 3**: Include progressive soft falloff (Contact AO + Mid-depth + Volumetric Diffusion) that looks natural in both Dark and Light themes.
- [ ] **Requirement 4**: Include inner edge contact shading on the card fragment shader for enhanced tangible depth.
- [ ] **Requirement 5**: Maintain continuous 120 FPS sub-frame rendering performance without frame drops.
- [ ] **Requirement 6**: `npm run build` passes with 0 errors.
- [ ] **Requirement 7**: Playwright automated test captures screenshots of the 3D wheel showing the Shadow Studio 3 depth.
