# REA Phase 03: Design Tokens, CSS Variables & Layout Grids

## 🎯 Purpose & Scope
The `03_design_tokens/` directory is responsible for distilling the visual language of the target site into a clean, systematic, and reusable design system. It captures colors, gradients, typography scales, container grids, glassmorphism filters, and shadow elevations, translating them into Tailwind CSS classes and CSS custom properties.

---

## 📂 File Inventory
| File | Purpose |
| :--- | :--- |
| `tokens-schema.json` | Master structured JSON holding color hexes, gradients, typography scales, spacing tokens, and z-index layers. |
| `tailwind-mapper.md` | Translation matrix showing how to convert raw CSS values into standard Tailwind utility classes or Tailwind v4 `@theme` variables. |
| `README.md` | Operational manual for extracting and organizing design tokens. |

---

## ⚡ Operational Protocols

### Step 1: Inspect Computed Styles & CSS Variables
1. Open DevTools on the target website (`F12`).
2. Select the root `<html>` or `<body>` element.
3. In the **Styles** or **Computed** pane, locate custom properties (usually prefixed with `--` such as `--color-primary`, `--font-sans`, `--radius`).
4. Copy these values into `tokens-schema.json`.

### Step 2: Extract Color Hierarchy
Categorize extracted colors into:
- **Base Surfaces:** Background primary, secondary, and elevated card surfaces.
- **Typography:** Headings, body copy, muted timestamps, and subtle link colors.
- **Accents & Glows:** Primary brand color, secondary complement, and glow opacity values for buttons or WebGL lights.

### Step 3: Typography Calibration
- Record the exact `font-family` and check if font files were saved in Phase 02 (`fonts/`).
- Record `clamp()` formulas for fluid headlines to ensure responsive scaling across mobile and 4K displays.

---

## 🛡️ Verification Gate
- No arbitrary color approximations; tokens must be exact hex/rgba values.
- Verify contrast ratios (WCAG AA: minimum 4.5:1 for body copy against dark surfaces).
