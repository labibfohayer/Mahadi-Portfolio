# Requirements Checklist: 3D Carousel Cards Shadow Studio 3

- [x] Shadow Studio 3 multi-stage soft shadow planes attached to each rotating artwork card.
- [x] Vertex shader bending (`uBend`) matches the artwork plane curvature.
- [x] Fragment shader computes multi-stage progressive falloff using signed distance field (`sdRoundedBox`).
- [x] Card fragment shader enhanced with subtle inner contact edge occlusion and top rim highlight.
- [x] Dynamic lighting and opacity attenuation as cards rotate around the cylinder.
- [x] Full compatibility with both Dark Theme and Light Theme.
- [x] `npm run build` succeeds with 0 type/syntax errors.
- [x] Automated Playwright test verifies 3D shadow meshes, captures screenshots, and validates visual elevation.
