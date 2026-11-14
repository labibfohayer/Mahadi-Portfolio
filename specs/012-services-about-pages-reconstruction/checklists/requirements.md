# Quality & Acceptance Checklist: Services and About Pages

- [x] 1. `specs/012-services-about-pages-reconstruction` registered in `.specify/feature.json`.
- [x] 2. Navbar updated to display exactly three links: **Work**, **Services**, and **About** (Desktop and Mobile).
- [x] 3. `ServicesPage.tsx` built with authentic Weichie layout (Hero, Metric Counter, Interactive Service List with Live Preview, Capabilities Pillars, Accordion, CTA).
- [x] 4. `AboutPage.tsx` built with authentic Weichie layout (Hero, Our Story, Core Values Grid, Team Profiles, Culture, Gallery).
- [x] 5. State routing in `App.tsx` handles `'home' | 'work' | 'services' | 'about'` with hash synchronization.
- [x] 6. Brand logo returns cleanly to Home page from all routes.
- [x] 7. Full Dark and Light theme styling works across both new pages.
- [x] 8. `npm run build` compiles with 0 TypeScript or bundling errors.
- [x] 9. Automated browser test captures screenshots and validates zero regression on homepage and work page.
