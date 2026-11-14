# Quality Checklist: Work / Cases Page Reconstruction

- [ ] CHK001: Extract all 23 cases from Weichie with titles, categories, images, and links.
- [ ] CHK002: Build `WorkPage.tsx` with authentic Weichie typography, intro callout, arrow icon, and Season Mix headline.
- [ ] CHK003: Implement category filter chips (`All`, `Web development`, `eCommerce`, etc.) with active filter logic.
- [ ] CHK004: Implement Grid View and List View switcher with dynamic CSS grid/flex layout.
- [ ] CHK005: Implement 3-page pagination (8 items per page, 23 total) with active state and prev/next controls.
- [ ] CHK006: Connect Navbar "Work" button and `LatestWork` "View all work" button to open the Work page.
- [ ] CHK007: Connect brand logo to return to Homepage.
- [ ] CHK008: Verify dark/light mode styles across the entire Work page.
- [ ] CHK009: `npm run build` succeeds with zero errors.
- [ ] CHK010: Playwright automated verification with screenshots of Grid view, List view, and filter interaction.
