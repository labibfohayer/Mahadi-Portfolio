# Feature Specification: Contact & "Get in Touch" Page Reconstruction

**Feature ID:** `013-contact-page-reconstruction`  
**Created:** 2026-11-13  
**Status:** In Progress  
**Methodology:** GitHub Spec Kit (SDD) + Strict Watchdog Zero-Regression  

---

## 1. Overview & User Intent

The user requested a 100% faithful reverse-engineering and reconstruction of the authentic **"Get in touch" / Contact Page** (`https://weichie.com/contact/`).
Furthermore, the user specifically highlighted that:
- Clicking **"Get in touch"** (in top navbar or elsewhere) AND clicking **"Let's talk"** (at the bottom of the section *"The creative partner you call"*) must both cleanly route to this same Contact page (`#contact`).
- The Contact page must feature all authentic layouts, typography (Season Mix & Fustat), interactive form fields (Name, Company, Email, Phone, Message with character counter, Consent checkbox, Submit button with hover animations), office compact cards with live timezone availability dots, secondary dual office cards with building photography, and dynamic responsiveness across Dark and Light modes.

---

## 2. Scope & Requirement Ledger

### R1. Routing & Unified Navigation Triggers
- Route: `AppRoute = 'home' | 'work' | 'services' | 'about' | 'contact'`.
- URL Hash synchronization with `#contact`.
- **Top Navbar "Get in touch" Button**: Clicking switches route to `'contact'`, resets scroll to top, highlights button active state.
- **PartnersCall "Let's talk" Button**: Clicking switches route to `'contact'`, resets scroll to top.
- **Mobile Navigation Drawer "Get in touch"**: Switches route to `'contact'`, closes drawer, resets scroll to top.
- **Footer "Request proposals" / Contact links**: Switches route to `'contact'`.
- **Services & About CTA Buttons**: Switches route to `'contact'`.
- **Logo Click**: Smoothly returns to `'home'`.

### R2. Contact Page (`ContactPage.tsx`) Design & Components
1. **Hero & Intro (Left Column)**:
   - Season Mix serif display headline: `Contact us.`
   - Subtitle: *"Interested in working together? So are we! Simply fill out the form on this page to start the conversation. Already have a project brief? Please send your RFP directly to hello@mahadihasan.com"*
   - **Compact Office Cards**:
     - **New York, USA**:
       - Red/Orange line-art landmark icon (`NY.svg` or SVG inline).
       - Live indicator dot (`• US team: Open / Online`).
       - Entity: `Mahadi Hasan Studio Inc. / Weichie.com Inc.`
       - Address: `530 7th Avenue, New York, NY 10018, United States`.
       - Direct links: `hello@mahadihasan.com`, `+1 (929) 822-5127`, `Request W-9 Form` (mailto).
     - **Brussels, Belgium**:
       - Red/Orange line-art landmark icon (`Atomium.svg` or SVG inline).
       - Live indicator dot (`• BE team: Open / Online`).
       - Entity: `Mahadi Hasan Studio BV. / Weichie.com BV.`
       - Address: `Oude Graanmarkt 6, 1000 Brussels, Belgium`.
       - Direct links: `hello@mahadihasan.com`, `+32 469 129 449`, `BE 0782.257.983`.

2. **Interactive Form (Right Column)**:
   - Required indicator legend: `"`*`" indicates required fields`.
   - Grid layout:
     - Row 1: `Name*` input + `Company*` input.
     - Row 2: `Email*` input + `Phone` input (international format).
     - Row 3: `Message*` textarea with dynamic live character counter (`X of 600 max characters`).
     - Row 4: Privacy Consent checkbox: `[ ] I agree to the privacy policy.*`.
   - Dynamic Pre-selected Needs / Pills:
     - Display selected tags from TechnologyPicker ("Tell me what you need.") if any were selected.
   - Submit Button: `Send message →` pill button with hover micro-interaction.
   - Submission Feedback State: Inline animated confirmation toast / card upon submission with reset option.

3. **Dual Office Showcase Cards (Middle Section)**:
   - Two large aesthetic cards with building photography:
     - New York office card: Building architecture photography, `• We are open` live badge, `New York, USA`, `Monday to Friday 9am to 5pm`, `+1 (929) 822-5127`, `Contact [hand icon]`.
     - Brussels office card: Historic Brussels facade photography, `• We are open` live badge, `Brussels, Belgium`, `Monday to Friday 9h to 17h`, `+32 469 129 449`, `Contact [hand icon]`.

4. **Footer Integration**:
   - Universal footer with Mahadi Hasan branding, links, and giant typography remains intact.

### R3. Visual & Animation Polish
- Season Mix headings with smooth reveal.
- Form inputs styled with authentic Weichie input border styling, focus glow, placeholder typography, and error/valid indicators.
- Seamless Dark/Light theme mode compatibility.

---

## 3. Empirical Verification Gates
- `npm run build` must compile cleanly with 0 TypeScript/bundling errors.
- Playwright automated browser test script must verify:
  1. Clicking top "Get in touch" navigates to `#contact` and loads Contact page.
  2. Clicking "Let's talk" in PartnersCall navigates to `#contact`.
  3. Form input interactivity and character counter typing.
  4. Full page screenshot and viewport screenshots captured.
