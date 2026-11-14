# Feature Specification: Full Portfolio Admin Panel & CMS

## Overview
Develop and integrate a complete, client-ready Admin Dashboard & CMS for the portfolio website. The admin panel enables the client to manage their entire portfolio A-to-Z:
- Add, Edit, and Delete projects with all metadata (Title, Category, Media, Poster, Tag, Summary/Description).
- Change profile photos, hero carousel media, and page graphics.
- Edit website copy, summaries, bio text, and contact information.
- Configure typography, fonts, and accent styles.
- Export and import data backups with localStorage persistence.

## User Goals & Requirements
1. **Passcode Protection**:
   - Access via `#admin` route, with discreet triggers in the Footer and navigation.
   - Secure and user-friendly passcode login (default: `mahadi2026`), with session persistence and change-passcode capability.
2. **Projects Management (CRUD - A to Z)**:
   - **Create**: Add new projects with title, category, media type (`video` / `image`), file source / URL, poster image, category tag, and detailed summary.
   - **Read / Filter**: Search and filter by category with visual thumbnails and quick status.
   - **Update**: Edit any existing project's fields, replace poster/video, modify description or title.
   - **Delete**: Remove any project with confirmation.
3. **Site Content & Text Editor**:
   - Edit Hero intro ("The official portfolio of Mahadi Hasan, crafting visual excellence").
   - Edit About "My Story" title and paragraphs 1 & 2.
   - Edit contact details (email, phone, location, social links).
   - Customize font and typography preferences.
4. **Photo & Media Manager**:
   - Upload and change profile photos, avatar, and media assets using file upload (dataURL) or direct URLs.
5. **Data Persistence & Portability**:
   - Reactive global context (`PortfolioContext`) providing real-time synchronization between the Admin CMS and all live pages (`HeroSection`, `WorkPage`, `AboutPage`, `LatestWork`, `Footer`).
   - `localStorage` persistence with one-click JSON backup export and import.
   - "Reset to Defaults" safeguard.

## Verification Checklist
- [ ] Spec 033 initialized and checklists created.
- [ ] `PortfolioContext` implemented with localStorage syncing and default fallbacks.
- [ ] `AdminPanel.tsx` component implemented with full CRUD, Media Uploader, and Content Editor.
- [ ] Hash route `#admin` integrated into `App.tsx` and `Navbar.tsx`.
- [ ] Discrete admin link added in Footer.
- [ ] `npm run build` succeeds with 0 errors.
- [ ] Playwright test suite verifies login, project creation, edit, deletion, content update, and live preview.
