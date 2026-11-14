# Specification: 3D Wheel Shadow Studio 3 Opacity Tuning (40-50%) & Artifact Removal

## Overview
Refine the Shadow Studio 3 progressive shadow engine in `HeroThreeCanvas.tsx`:
1. Tune the shadow opacity strictly between 40% and 50% (peak $\approx 0.45$).
2. Eliminate all dark boundary marks, edges, and upward shadow smudges outside the shapes ("এই শেপের বাইরে যে কালো দাগগুলো আসছে, এই দাগগুলো যাতে না থাকে, এগুলোকে রিমুভ করে দিবা").
3. Ensure natural downward directional shadow casting with zero shadow leakage above the card tops or beyond clean visual boundaries.
4. Clean up any edge darkening from the card texture so the artwork cards remain 100% crisp, vibrant, and clean.

## Requirements & Acceptance Criteria
- [ ] **Requirement 1**: Shadow Studio 3 overall opacity is tuned to 40%-50% (peak ~0.45).
- [ ] **Requirement 2**: Upward shadow leakage above the card tops is eliminated using directional top fading and adjusted shadow mesh bounds.
- [ ] **Requirement 3**: Dark marks/smudges outside the card boundaries are completely removed.
- [ ] **Requirement 4**: Card fragment shader retains clean albedo texture without muddy inner edge darkening.
- [ ] **Requirement 5**: 120 FPS sub-frame animation performance maintained.
- [ ] **Requirement 6**: `npm run build` succeeds with 0 errors.
- [ ] **Requirement 7**: Playwright test validates opacity, checks absence of artifact pixels, and captures verification screenshots.
