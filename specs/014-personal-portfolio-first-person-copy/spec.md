# Feature Specification: Personal Portfolio First-Person Re-Alignment (Mahadi Hasan - Video Editor & Graphic Designer)

**Feature ID:** `014-personal-portfolio-first-person-copy`  
**Created:** 2026-11-13  
**Status:** In Progress  
**Methodology:** GitHub Spec Kit (SDD) + Strict Watchdog Zero-Regression  

---

## 1. Overview & User Intent

The user requested a complete persona and copy re-alignment across the portfolio:
- **Solo Persona:** The website is a personal portfolio for **Mahadi Hasan**, a dedicated **Professional Video Editor and Graphic Designer**.
- **First-Person Voice:** Replace all agency/plural pronouns ("We", "Our", "Us") with first-person singular ("I", "My", "Me") across the **About**, **Services**, and **Work** pages.
- **About Page Overhaul:**
  - `About us` → `About me`.
  - `Our story` → `My story`.
  - **Remove `Our team` completely** (no team section, since this is a personal portfolio).
  - Add a dedicated showcase of Mahadi Hasan's craft, creative philosophy, post-production toolstack (Premiere Pro, After Effects, DaVinci Resolve, Photoshop, Illustrator, Blender), retention-focused pacing, and storytelling principles.
  - Core Values converted to first-person singular ("I do what's right", "Craft over hype", etc.).
- **Services Page Overhaul:**
  - `Our services` → `My services`.
  - Content reflects specialized Video Editing & Graphic Design capabilities (High-retention video editing, motion graphics, graphic & brand identity design, YouTube thumbnail design, cinematic color grading, sound design).
  - First-person workflow & FAQs.
- **Work Page Overhaul:**
  - Refine copy to first-person ("Selected Works", "Projects I've crafted").
  - Preserve all 24 projects (9 videos + 15 graphics) and category filters intact.

---

## 2. Scope & Requirement Ledger

### R1. About Page (`AboutPage.tsx`)
1. Hero headline: `About me`.
2. Mission intro: "↳ An ambitious and multidisciplinary video editor and graphic designer crafting high-retention video content and memorable visual identities."
3. Section `My story`: Personal background, passion for cinematic storytelling, visual pacing, and graphic impact.
4. **Remove `Our team` section completely**:
   - Replace with **"My Creative Arsenal & Toolstack"** or **"My Craft & Approach"**:
     - Premiere Pro & DaVinci Resolve (Editing & Grading)
     - After Effects (Kinetic Typography & Motion Design)
     - Photoshop & Illustrator (Visual Identity & High-CTR Thumbnails)
     - Blender (3D Elements & Visual FX)
5. Core Values: Rephrased from "We" to "I" (01. I DO WHAT'S RIGHT, 02. CRAFT OVER HYPE, 03. SPEED WITH PRECISION, 04. TRANSPARENT PROCESS, 05. HUMAN-CENTRIC MOTION, 06. BUILT FOR RETENTION, 07. PUSHING CREATIVE LIMITS).
6. Culture / Philosophy quote: Personal statement on creative collaboration.
7. CTA banner: "Let's create something extraordinary together."

### R2. Services Page (`ServicesPage.tsx`)
1. Hero headline: `My services`.
2. Subtitle: "↳ Dedicated video editing, motion graphics, and visual design crafted to turn viewers into loyal followers and brands into icons."
3. Metric counter: `128+ Projects Delivered` (Solo track record).
4. Interactive 6-Service Explorer:
   - 01. High-Retention Video Editing
   - 02. Motion Graphics & Visual FX
   - 03. Brand & Graphic Design
   - 04. High-CTR Thumbnail Design
   - 05. Color Grading & Film Emulation
   - 06. Sound Design & Audio Mastering
5. Capabilities Matrix: "My 4-Step Production Pipeline" (Discovery & Script Pacing, Visual Direction & Asset Creation, Surgical Editing & Motion, Final Mastering & Delivery).
6. FAQ Accordion: "Frequently Asked Questions" from Mahadi's personal working process.

### R3. Work Page (`WorkPage.tsx`)
1. Copy updated to first-person singular: "Selected Works", "Projects I've crafted for ambitious creators, YouTube channels, and high-growth brands."
2. All 24 projects (9 videos + 15 graphics) and category filters remain 100% functional.

### R4. Verification & Guardrails
1. `npm run build` must compile cleanly with 0 TypeScript/bundling errors.
2. Playwright automated tests must verify:
   - About page displays "About me", "My story", NO team cards.
   - Services page displays "My services" with video & graphic design offerings.
   - Work page displays first-person showcase.
   - All navigation routes operate smoothly.
