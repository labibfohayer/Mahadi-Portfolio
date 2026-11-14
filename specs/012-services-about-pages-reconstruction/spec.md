# Feature Specification: Services and About Pages Reconstruction

**Feature Directory**: `specs/012-services-about-pages-reconstruction`  
**Status**: In Progress  
**Category**: Multi-Page Architecture / REA Reverse Engineering  
**Author**: Antigravity Strict Watchdog  

---

## 1. Executive Summary & Objective

The user requested:
1. Completely reverse engineer the **Services Page** (`https://weichie.com/services/`) and **About Page** (`https://weichie.com/about/`) from the original website.
2. In the top navigation bar, display exactly the three links: **Work**, **Services**, and **About**.
3. Clicking **Services** navigates directly to the reconstructed Services page (`ServicesPage.tsx`).
4. Clicking **About** navigates directly to the reconstructed About page (`AboutPage.tsx`).
5. Clicking **Work** navigates to the Work page (`WorkPage.tsx`).
6. Clicking **Mahadi Hasan** logo navigates back to the Homepage.

---

## 2. Reconstructed Pages Architecture

### 2.1 Services Page (`src/components/ServicesPage.tsx`)
- **Hero Section (`block-hero-page`)**:
  - Season Mix serif title: `Our services`.
  - Mission callout with orange arrow `↳`: `We craft innovative, high-impact video & motion solutions for your brand that help you communicate powerfully with your audience through dynamic visuals.`
  - Metric counter badge: `128+ Projects / Crafted for ambitious brands`.
- **Interactive Service List (`block-service-list`)**:
  - Hoverable interactive table featuring:
    1. Video Editing & Post-Production
    2. Motion Graphics & Animation
    3. Graphic Design & Brand Art
    4. Commercials & Social Video Ads
    5. Color Grading & Sound Foley
    6. Visual Effects & Compositing
  - Interactive preview panel that updates image, features, and description on row hover.
- **Horizontal Gallery Scroll (`block-gallery-scroll`)**:
  - Horizontal drifting showcase of creative production frames.
- **Capabilities Matrix (`block-list-columns`)**:
  - 4 Pillars:
    - **Strategy**: Storyboarding, Visual Direction, Narrative Flow, Audience Retention, Script Pacing.
    - **Design**: Visual Identity, Brand Assets, Custom Typography, Color Palettes, UI/UX Graphics.
    - **Production**: 4K Video Editing, Sound Foley & FX, High-End Color Grading, Social Formats, Motion Sequencing.
    - **Future Proof**: 3D Motion Graphics, AI-Assisted Workflows, Dynamic Subtitles, Multi-Platform Optimization.
- **Accordion / FAQ (`block-accordion`)**:
  - "That's not all." interactive accordion answering questions on deliverables, turnaround times, and technical specs.
- **Call-To-Action (`block-cta`)**:
  - "Let's work together!" banner with contact triggers.
- **Footer**:
  - Reusable Brussels & New York Studios footer.

### 2.2 About Page (`src/components/AboutPage.tsx`)
- **Hero Section (`block-hero-page`)**:
  - Season Mix serif title: `About us`.
  - Intro statement with orange arrow `↳`: `An enthusiastic, result-oriented, international, and hardworking creative studio in Brussels & New York.`
- **Our Story (`block-simple-text`)**:
  - Season Mix heading: `Our Story`.
  - Narrative on blending cinematic visual craft, modern technology, and strategic storytelling.
- **Core Values Grid (`block-core-values`)**:
  - 7 values:
    - `01. WE DO WHAT'S RIGHT`
    - `02. WE BACK OUR CUSTOMERS`
    - `03. WE MAKE IT GREAT`
    - `04. WE RESPECT PEOPLE`
    - `05. WE STAND FOR QUALITY`
    - `06. WE WIN AS A TEAM`
    - `07. WE PUSH OUR LIMITS`
- **Team Grid (`block-team-grid`)**:
  - "Our team" with cards for Mahadi Hasan (Creative Director & Lead Editor), Bob Weichler (Executive Producer), Yannick Van Meerbeeck (Tech & Motion Lead), and Edward Park (Design Lead).
- **Culture Statement (`block-simple-text`)**:
  - "Culture is the foundation of every great relationship..."
- **Gallery Scroll (`block-gallery-scroll`)**:
  - Studio lifestyle, editing suites, and creative production snapshots.
- **Footer**:
  - Reusable Brussels & New York Studios footer.

---

## 3. Top Navigation Updates (`Navbar.tsx` & `App.tsx`)
- Navbar navigation items strictly constrained to:
  1. `Work` (`route === 'work'`)
  2. `Services` (`route === 'services'`)
  3. `About` (`route === 'about'`)
- Active link highlighting in `#ff4f31`.
- Router state supports `'home' | 'work' | 'services' | 'about'`.
- Synchronized with `window.location.hash` (`#home`, `#work`, `#services`, `#about`).

---

## 4. Empirical Validation Plan
- `npm run build` verification gate.
- Playwright automated browser test script verifying:
  - Navigation between Home, Work, Services, and About.
  - Screenshots of Services Page (viewport and fullpage).
  - Screenshots of About Page (viewport and fullpage).
  - Interactive hover on Service List rows.
  - Interactive click on Core Values cards.
  - Interactive click on Accordion items.
