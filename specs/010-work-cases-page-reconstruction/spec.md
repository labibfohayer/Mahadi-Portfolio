# Feature Specification: Full Work / Cases Page Reconstruction

**Feature ID**: `010-work-cases-page-reconstruction`  
**Target Components**:  
- `src/components/WorkPage.tsx` (new full-fidelity Work/Cases page)  
- `src/components/Navbar.tsx` (navigation link binding to Work page and Home)  
- `src/components/LatestWork.tsx` ("View all work" button routing to Work page)  
- `src/App.tsx` (SPA view routing between Home and Work pages)  
**Status**: `Draft` -> `In Progress`

---

## 1. Overview & Objectives

Reverse engineer and build the complete "Work" / "Cases" page from the original Weichie website (`https://weichie.com/cases/`), featuring:
1. Exact typographic hierarchy:
   - Season Mix serif display headline: `Our Work`
   - Authentic intro callout with orange corner arrow (`↳`)
2. Interactive Category Filter Chips:
   - `All`
   - `SEO & GEO Services`
   - `Web development` (with Globe SVG icon)
   - `eCommerce` (with Cart SVG icon)
   - `Application development` (with App grid SVG icon)
   - `Artificial intelligence` (with AI star SVG icon)
   - `Blockchain` (with Blockchain cube SVG icon)
3. Layout View Switcher:
   - Grid View (`⊞⊞`)
   - List View (`≡`)
4. Case Studies Portfolio Grid:
   - 23 authenticated case studies with high-res imagery, titles, and service tags.
   - Parallax blur-sweep hover card effects and custom pointer cursor.
5. Interactive Pagination:
   - 8 items per page across 3 pages (Page 1: 1-8, Page 2: 9-16, Page 3: 17-23).
   - Smooth scroll-to-top on page change.
6. Unified Routing:
   - Clicking "Work" in `Navbar` navigates to the Work page.
   - Clicking "View all work" in the homepage `LatestWork` section navigates to the Work page.
   - Clicking the brand logo "Mahadi Hasan" returns to the Homepage.
   - URL hash/history synchronization (`#work` / `#home` or browser history).

---

## 2. Technical Requirements

### 2.1 Component Structure
- `WorkPage.tsx`: Contains the header banner, filter chip bar, view mode switcher, card grid/list view, and pagination.
- Shares the same global layout shell: `Navbar` (with active route indicator) and `Footer` (with Brussels & New York office cards and large footer logo).
- Dark/Light mode compatibility: Respects `data-theme` variable styles.

### 2.2 Data Integrity
- All 23 scraped project entries stored in clean, typed JSON/TS structure.
- Card images loaded with graceful fallbacks and proper aspect ratios.

### 2.3 Verification Gate
- `npm run build` with zero TypeScript errors.
- Visual inspection via Playwright across both Grid and List modes and page navigation.
