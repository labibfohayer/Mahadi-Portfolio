# Requirements Checklist: 3D Wheel Shadow Studio 3 Tuning & Artifact Removal

- [x] Shadow Studio 3 opacity adjusted to 40%-50% range in `shadowFragmentShader` (peak 0.45).
- [x] Top shadow leakage masked out with `smoothstep` clamp above `uCardSize.y * 0.5`.
- [x] Shadow mesh size and position optimized (`shadowMesh.position.set(0, -0.08, -0.04)`, `1.95 x 1.95`).
- [x] Inner card darkening removed from `fragmentShader` to keep card artwork clean and pristine.
- [x] `npm run build` succeeds with 0 errors.
- [x] Automated Playwright test verifies clean card boundaries without dark smudges and takes screenshots.
