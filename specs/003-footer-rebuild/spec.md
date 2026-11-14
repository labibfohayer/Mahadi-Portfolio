# Spec 003: Footer Section Reverse Engineering & Pixel-Perfect Rebuild

## Overview
Comprehensive reverse engineering and rebuild of the footer section for the portfolio website from the original `weichie.com` reference. Replaces the former incomplete footer layout with the complete structure extracted from the production DOM and stylesheet.

## Key Requirements & Architectural Details

### 1. Structure & Layout
- **Container**: `max-w-[1568px]` with warm beige background (`#f4efea`), dark text (`#12110b`), and responsive fluid padding.
- **Top Section (Office Cards)**:
  - 2 responsive office cards: New York and Brussels.
  - Image media with portrait aspect ratio and `8px` rounded corners.
  - Location status badges:
    - New York: `#c72c27` red dot + "We are closed".
    - Brussels: `#2ecc40` green dot + "We are open".
  - Serif typography for city titles: "New York, USA" and "Brussels, Belgium" using `Season Mix` / serif styling.
  - Working hours and interactive telephone link with orange `#ff4f31` phone SVG icon.
  - Absolute top-right CTA pill: "Contact" label + `#ff4f31` circular badge containing the hand SVG icon with interactive hover scaling and tilt.
- **Middle Section (5 Navigation Columns)**:
  - **Column 1 (About)**: Studio description with underlined links to Brussels and New York.
  - **Column 2 (Studio)**: Vertical nav list (`Projects`, `About`, `Insights`, `Network`, `Careers`).
  - **Column 3 (Expertises)**: 5 core services with custom SVG vector icons (`Web development`, `eCommerce`, `Application development`, `Artificial intelligence`, `Blockchain`).
  - **Column 4 (Legal)**: Legal links (`Legal Notice`, `Terms of Service`, `Cookie Preference`, `AI Charter`, `AI Mode`).
  - **Column 5 (Business Inquiries)**: Contact numbers, `hello@weichie.com`, and `Request proposals`.
- **Bottom Section**:
  - Floating peace hand sign SVG (`.footer__hand`) aligned to the left above the logo.
  - Vertically stacked social links (`LinkedIn`, `Instagram`, `Facebook`) aligned to the right.
  - Gigantic display vector "Weichie" logo spanning the full width of the container.
  - Copyright line `Weichie © 2026` positioned at the bottom right.

## Verification Checklist
- [x] Zero-regression invariant: Navbar ("Mahadi Hasan"), Hero, Latest Work, Text Sticky, Partners Call, Meet The Team, and Technology Picker left 100% untouched.
- [x] Full build test: `npm run build` succeeds in 2.3s with code 0.
- [x] Playwright empirical verification: Rendered and verified with headless Chrome screenshot (`footer_clean_capture.png`).
- [x] Visual fidelity: Office cards, badges, 5 nav columns with SVGs, peace hand icon, and giant Weichie logo match the original `weichie.com` footer reference.
