# Feature Specification: Work Page User Projects Integration

**Feature Directory**: `specs/011-work-page-user-projects`  
**Status**: In Progress  
**Category**: Portfolio Showcase / Dynamic Content Reconstruction  
**Author**: Antigravity Strict Watchdog  

---

## 1. Executive Summary & Objective

The user requested that the Work Page (`WorkPage.tsx`) display all their actual creative projects found in their computer's `Documents` directory:
1. **`New folder`** (9 Video Projects):
   - `3D camera .mp4` (3D Camera Motion)
   - `ai.mp4` (AI Visual Production)
   - `coffee.mp4` (Coffee Commercial)
   - `Comp 1_11.mp4` (Motion Graphics Reel)
   - `Sequence 01_1.mp4` (Cinematic Story)
   - `kosto.mp4` (Dramatic Narrative Short)
   - `mahadi hasan_1.mp4` (Mahadi Hasan Brand Feature)
   - `Nazmul.mp4` (Documentary Narrative)
   - `finish.mp4` (Cinematic Sequence)

2. **`Graphic`** (15 Graphic Design Projects):
   - 15 high-impact graphic design pieces covering Brand Identity, Social Media Ads, Packaging, Posters, Vector Illustrations, and Commercial Visuals (cached in `/textures/graphic-hero/hero-1.webp` to `hero-15.webp`).

Total = **24 distinct creative projects** (9 videos + 15 graphics).

---

## 2. Functional Requirements

### 2.1 Project Dataset (`src/data/userProjects.json`)
- Define all 24 projects with rich metadata:
  - `id`: 1 to 24
  - `type`: `'video' | 'image'`
  - `title`: Professional project title
  - `category`: Relevant service category (e.g., `Video Editing`, `Motion Graphics`, `Graphic Design`, `Commercials`, `Brand Identity`, `3D & Visuals`)
  - `media`: Video source path (`/videos/latest-work/...`) or Image path (`/textures/graphic-hero/...`)
  - `poster`: High-quality frame thumbnail for instant loading
  - `description`: 1-2 sentence professional project synopsis

### 2.2 Category Filter Synchronization
- The Work Page filter chips must allow intuitive browsing:
  - `All` (All 24 projects)
  - `Video Editing` (Filter video cuts & narrative projects)
  - `Motion Graphics` (Filter kinetic typography & dynamic animation)
  - `Graphic Design` (Filter posters, banners, and layout art)
  - `Commercials & 3D` (Filter commercial ads & 3D camera visuals)
  - `Brand Identity` (Filter identity systems & packaging)
- When a user clicks any filter, only the matching projects are rendered with instant smooth re-flow.

### 2.3 Interactive Media Player in Cards
- **Video Projects**:
  - Cards feature a sleek inline video preview with auto-play on hover or looping preview.
  - Video play/pause and sound toggle or full preview modal.
  - Progress bar and duration indicator.
- **Graphic Projects**:
  - Crisp high-resolution WebP rendering with parallax blur-sweep on hover.
  - Full lightbox / zoom inspection on click.

### 2.4 Layout & Pagination Consistency
- Supports Grid view (`⊞⊞`) and List view (`≡`).
- Exactly 8 items per page = 3 pages total (`8 × 3 = 24`).
- Interactive pagination bar (`Prev`, `1`, `2`, `3`, `Next`) with smooth scroll-to-top.
- Custom pointing-hand floating cursor badge.
- Full dark and light theme compliance.

---

## 3. Non-Functional & Quality Constraints
- **Zero Regression**: Preserve all existing homepage components (`HeroSection`, `SimpleText`, `LatestWork`, `TextSticky`, `PartnersCall`, `MeetTheTeam`, `TechnologyPicker`, `Footer`).
- **Performance**: High performance video rendering (MP4 + WebP posters, lazy loading) with 0 lag or memory leaks.
- **Strict Watchdog Gate**: Must pass `npm run build` with 0 errors and browser screenshot validation across all views and filters.
