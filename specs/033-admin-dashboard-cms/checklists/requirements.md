# Requirements Checklist: Full Portfolio Admin Panel & CMS

- [x] Spec and requirements defined.
- [x] Create `PortfolioContext.tsx` with project CRUD, site settings state, and localStorage engine.
- [x] Connect `WorkPage.tsx` to read dynamic projects from `PortfolioContext`.
- [x] Connect `HeroSection.tsx`, `AboutPage.tsx`, `Footer.tsx` to read dynamic site content from `PortfolioContext`.
- [x] Create `AdminPanel.tsx` with:
  - [x] Passcode authentication screen (`mahadi2026`).
  - [x] Tab 1: Projects CRUD (Add, Edit, Delete, Search, Filter).
  - [x] Tab 2: Site Content (Hero, My Story, Services, Contact info, Font).
  - [x] Tab 3: Media & Photos (Avatar, About photo, Postcard replacement).
  - [x] Tab 4: Backup & Restore (JSON Export / Import, Reset to Defaults).
- [x] Update `Navbar.tsx` and `App.tsx` to support `#admin` route.
- [x] Add discreet admin entry point in Footer.
- [x] Build verification with `npm run build`.
- [x] End-to-end automated Playwright test verifying Admin login, Project Add/Edit/Delete, and Live synchronization.
