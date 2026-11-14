# Quality & Acceptance Checklist: Contact ("Get in Touch") Page Reconstruction

- [x] 1. Spec registered in `.specify/feature.json` with active directory `specs/013-contact-page-reconstruction`.
- [x] 2. `ContactPage.tsx` built with authentic Weichie layout (Hero, Subtitle, 2 Compact Office Cards with Live Status Dots, Interactive Form with live character counter, Dynamic Service Pills, Seamless Footer Integration).
- [x] 3. Top Navbar "Get in touch" button triggers navigation to `'contact'` route (`#contact`).
- [x] 4. PartnersCall "Let's talk" button triggers navigation to `'contact'` route (`#contact`).
- [x] 5. AppRoute in `Navbar.tsx` and `App.tsx` supports `'home' | 'work' | 'services' | 'about' | 'contact'` with hash sync and scroll reset.
- [x] 6. Brand logo returns cleanly to Home page from `#contact`.
- [x] 7. Full Dark and Light theme styling works across `#contact`.
- [x] 8. `npm run build` compiles with 0 TypeScript or bundling errors.
- [x] 9. Automated browser test captures screenshots and verifies both "Get in touch" and "Let's talk" button flows.
