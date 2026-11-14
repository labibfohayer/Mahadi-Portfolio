# Spec 007: Global Full-Site Dark & Light Theme & Language Simplification

## Overview
Expand the authentic Weichie dark/light theme switching system from the header and hero to the **entire website**—top to bottom, across every component and section (Work, Services, About, Insights, Technologies, Footer, Contact, Interactive Diagrams, and Mobile Drawer). When the theme toggle is switched, the entire website synchronously shifts between the authentic light theme palette and the dark theme palette. In addition, completely remove the multi-language / Bengali switcher; the portfolio will be 100% English-only with clean, permanent English typography and no language switching overhead.

---

## User Scenarios & Flows

### Scenario 1: Global Theme Switching to Dark Mode
- **Given** the user is viewing the portfolio in default light mode.
- **When** the user clicks the Theme Toggle button in the header.
- **Then**:
  1. The `<html>` tag sets `data-theme="dark"` and class `dark`.
  2. Every single section of the website transitions smoothly (`transition-colors duration-300`):
     - **Backgrounds**: Transform to `--clr-dark` (`#15140e`) or `--clr-dark-raised` (`#26241b`).
     - **Typography**: Headings, paragraphs, labels, and links transform to `--clr-text` (`#f4efea` / `#fdf9f9` / `#999994`).
     - **Cards & Surfaces**: Bento cards, contact pills, input bars, technology items, and footer columns adopt `#26241b` with subtle dark borders (`rgba(255, 255, 255, 0.08)`).
     - **Canvas/3D Elements**: Background fills seamlessly blend with the dark backdrop.
  3. No component exhibits white flashes, hardcoded bright light backgrounds, or low-contrast dark-on-dark unreadable text.
  4. The user's preference is saved in `localStorage` as `theme="dark"`.

### Scenario 2: Switching Back to Light Mode
- **Given** the user is in dark mode.
- **When** the user clicks the Theme Toggle button.
- **Then**:
  1. The `<html>` tag removes `data-theme="dark"` and class `dark`.
  2. The entire website transitions back to the light palette:
     - Backgrounds: `#fdf9f9` / `#f4efea`.
     - Typography: `#12110b` / `#555555`.
     - Surfaces: `#f4efea` / white with subtle dark borders.
  3. The preference is updated in `localStorage` as `theme="light"`.

### Scenario 3: English-Only Navigation & Removal of Language Switcher
- **Given** the visitor interacts with the header and mobile navigation.
- **When** inspecting the header and mobile drawer.
- **Then**:
  1. No language switcher (`EN` / `BN`) exists in the DOM.
  2. All navigation items are permanently English: `Work`, `Services`, `About`, `Insights`, `Get in touch`.
  3. The layout adjusts seamlessly to accommodate the space previously occupied by the language toggle without visual awkwardness.

---

## Functional Requirements

### 1. English-Only UI & Language Switcher Decommissioning
- Remove `LangSwitcher` component and all language toggle state (`lang === 'BN'`) from [Navbar.tsx](file:///home/labib-fohayer/.gemini/antigravity/scratch/weichie-rea/src/components/Navbar.tsx).
- Fix all header, mobile menu, and call-to-action labels to standard professional English:
  - `Work`
  - `Services`
  - `About`
  - `Insights`
  - `Get in touch` / `Contact`

### 2. Full-Site Semantic Color System (Light & Dark)
Every component must strictly respect Weichie's CSS design tokens or Tailwind `dark:` variants:
- **Base Canvas**:
  - Light: `--clr-light-beige` (`#fdf9f9`)
  - Dark: `--clr-dark` (`#15140e`)
- **Secondary Surfaces & Raised Cards** (Bento cells, pill buttons, badges):
  - Light: `--clr-beige` (`#f4efea`)
  - Dark: `--clr-dark-raised` (`#26241b`)
- **Primary Text**:
  - Light: `--clr-black` (`#12110b`)
  - Dark: `--clr-text` (`#f4efea` / `#fdf9f9`)
- **Muted / Secondary Text**:
  - Light: `#666666` / `#777777`
  - Dark: `#999994` / `#a09e99`
- **Borders & Dividers**:
  - Light: `border-black/10` or `border-[#12110b]/10`
  - Dark: `border-white/10` or `border-[#f4efea]/10`
- **Primary Accent**:
  - `#ff4f31` (consistent high-energy signature orange-red in both modes)

### 3. Comprehensive Section Audit & Theme Adaptation
The following sections must be audited and updated for 100% complete dark mode fidelity:
1. **[Navbar.tsx](file:///home/labib-fohayer/.gemini/antigravity/scratch/weichie-rea/src/components/Navbar.tsx)**: Header container, logo, nav links, contact pill, theme toggle, mobile menu drawer.
2. **[HeroSection.tsx](file:///home/labib-fohayer/.gemini/antigravity/scratch/weichie-rea/src/components/HeroSection.tsx)**: Hero title, stage, service labels and icons.
3. **[SimpleText.tsx](file:///home/labib-fohayer/.gemini/antigravity/scratch/weichie-rea/src/components/SimpleText.tsx)**: Text sticky intros, subtitle labels, headline text.
4. **[LatestWork.tsx](file:///home/labib-fohayer/.gemini/antigravity/scratch/weichie-rea/src/components/LatestWork.tsx)**: Project cards, tags, meta text, hover states.
5. **[WorkShowcase.tsx](file:///home/labib-fohayer/.gemini/antigravity/scratch/weichie-rea/src/components/WorkShowcase.tsx)**: Showcase grids, bento cards, preview images, descriptions.
6. **[AboutOffices.tsx](file:///home/labib-fohayer/.gemini/antigravity/scratch/weichie-rea/src/components/AboutOffices.tsx)**: Office cards (Brussels & New York), time displays, status dots, contact buttons.
7. **[MeetTheTeam.tsx](file:///home/labib-fohayer/.gemini/antigravity/scratch/weichie-rea/src/components/MeetTheTeam.tsx)**: Bio cards, avatar containers, social links, role titles.
8. **[TechnologyPicker.tsx](file:///home/labib-fohayer/.gemini/antigravity/scratch/weichie-rea/src/components/TechnologyPicker.tsx)**: Technology selection pills, search/filter inputs, active highlights, submit CTA.
9. **[PartnersCall.tsx](file:///home/labib-fohayer/.gemini/antigravity/scratch/weichie-rea/src/components/PartnersCall.tsx)**: Callout banner, testimonial/partnership copy, action pill.
10. **[InteractiveDiagram.tsx](file:///home/labib-fohayer/.gemini/antigravity/scratch/weichie-rea/src/components/InteractiveDiagram.tsx)**: Diagram background, node boxes, connector paths, labels.
11. **[TextSticky.tsx](file:///home/labib-fohayer/.gemini/antigravity/scratch/weichie-rea/src/components/TextSticky.tsx)**: Sticky narrative text, step numbers, details.
12. **[Footer.tsx](file:///home/labib-fohayer/.gemini/antigravity/scratch/weichie-rea/src/components/Footer.tsx)**: Footer background, columns, category headings, links, legal credits, peace hand icon.

---

## Success Criteria

- [ ] Language switcher is completely removed; site is 100% English.
- [ ] Theme toggle switches between Light and Dark mode with authentic Weichie vertical rolling icon animation.
- [ ] In Dark Mode, every section from the top header to the bottom footer renders with authentic dark palette (`#15140e` base, `#26241b` raised cards, `#f4efea` text).
- [ ] No section contains hardcoded light background colors (e.g. `bg-white`, `bg-[#fdf9f9]`, `bg-[#f4efea]`) that fail to invert in dark mode.
- [ ] All text across all sections is crisp, legible, and high-contrast in both light and dark modes.
- [ ] `npm run build` succeeds with 0 errors.
- [ ] Full-page Playwright screenshot verification confirms dark mode across the entire scrollable page height.
