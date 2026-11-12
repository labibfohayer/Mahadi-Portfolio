# Bug Fix: 100% Faithful REA Reconstruction of Weichie.com

- **Slug**: `visual-fidelity-mismatch`
- **Fixed At**: 2026-11-12
- **Related Spec**: `specs/001-weichie-rea/spec.md`

## Implemented Remediation

1. **Light Aesthetic Realignment (`index.html` & `tailwind.config.js`)**:
   - Replaced dark class with light background `#fdf9f9` and text `#111111`.
   - Updated selection styles to `#ff4f31`.

2. **Exact 3D Curved Carousel Re-Architecture (`src/components/HeroThreeCanvas.tsx`)**:
   - Camera parameters aligned: `fov: 24`, `cameraZ: 8.6`, `carouselRadius: 4.3`.
   - Applied exact tilt: `rotation.x = degToRad(-13)`, `position.y = 4.3 * sin(degToRad(-13))`.
   - Subdivided curved geometry: `PlaneGeometry(1.6, 1.6, 24, 1)`.
   - Exact vertex shader with `p.z -= uBend * distX * distX` where `uBend: 0.12`.
   - Exact fragment shader with `sdRoundedBox`, `coverUv`, anti-aliased mask, and `uOpacity` cosine curve falloff.
   - 15 total cards (`N = 3` repetitions of 5 services) matching Weichie production bundle.

3. **Authentic Header Rebuild (`src/components/Navbar.tsx`)**:
   - Integrated exact 133x28 Weichie SVG brand logo.
   - Text nav links: `Work`, `Services`, `About`, `Insights`.
   - Pill button: `Get in touch` with circular coral icon badge.
   - Theme toggle (Sun) & Language selector (`EN`).

4. **Verbatim Content & Section Layouts**:
   - `HeroSection`: Centered stage with title intro and 5 labels with authentic SVGs (`Web development`, `eCommerce`, `Application development`, `Artificial intelligence`, `Blockchain`).
   - `SimpleTextSection`: "Development partner - We craft innovative, digital solutions..."
   - `LatestWorkSection`: Real case study cards (De Druglijn, Adaptive Green, Spantech, DogChef, Restaurant 5, Viewbox) with category tags and images.
   - `TextStickySection`: "Digital Development Studio in Brussels & New York. We build systems your business runs on."
   - `MeetTheTeamSection`: Team member cards with authentic headshots (Mathias, Sam, Sven, Yannick, Bob, Edward).
   - `TechnologyPickerSection`: Interactive requirement selector pill grid.
   - `FooterSection`: Authentic Brussels and New York studio hours, phone numbers, and address details.
