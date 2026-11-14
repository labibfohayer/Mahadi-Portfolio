# Specification: Hero Intro "Mahadi Hasan" Poppins Bold, Light Green & Black Accent Shape

## Overview
Update the styling of "Mahadi Hasan" in the middle line of the homepage hero intro ("The official portfolio of Mahadi Hasan, crafting visual excellence"):
1. Change the font of "Mahadi Hasan" to **Poppins Bold** (`font-family: 'Poppins', sans-serif`, `font-weight: 700`).
2. Change the text color from orange (`#ff4f31`) to a modern, vibrant **Light Green** (`#22c55e` / `#2bd67b`).
3. Remove the heavy **Shadow Studio 3** text-shadow from the headline middle line ("of Mahadi Hasan,").
4. Add a sleek, modern **Black Shape** (`কালো শেপ`) underneath/around the name "Mahadi Hasan" that coordinates harmoniously with the light green color (e.g. a high-end black badge/capsule shape with light green accent/glow and subtle underline shape), making the light green Poppins bold text stand out vividly on both dark and light modes.

## Requirements & Acceptance Criteria
- [ ] **Requirement 1**: Load Google Font `Poppins:wght@600;700;800` in `index.html` and configure in `tailwind.config.js`.
- [ ] **Requirement 2**: "Mahadi Hasan" renders in Poppins Bold font (`font-['Poppins'] font-bold`).
- [ ] **Requirement 3**: "Mahadi Hasan" text color is light green (not orange).
- [ ] **Requirement 4**: Shadow Studio 3 drop shadow is removed from the middle headline text.
- [ ] **Requirement 5**: A black shape (`কালো শেপ`) is rendered under/around "Mahadi Hasan" with matching light-green accent coordination.
- [ ] **Requirement 6**: High contrast and visual aesthetic in both Dark Mode and Light Mode.
- [ ] **Requirement 7**: `npm run build` succeeds with 0 type/syntax errors.
- [ ] **Requirement 8**: Playwright automated test validates font, color, shape, and captures screenshots in both light and dark themes.
