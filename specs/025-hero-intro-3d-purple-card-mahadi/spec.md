# Specification: Hero Intro "MAHADI HASAN" 3D Purple Floating Card Reconstruction

## Overview
Implement the exact 3D floating purple/violet card styling for the name "Mahadi Hasan" in the homepage hero intro ("The official portfolio of MAHADI HASAN, crafting visual excellence") based on the user's provided reference image (`HELLO I'M MAHADI`):
1. Remove all remnants of the previous green badge and green underline.
2. Render "Mahadi Hasan" (or "MAHADI HASAN") inside an elevated 3D rectangular floating card matching the reference image.
3. Card Background: Rich electric purple / violet gradient (`#ad2bef` / `#9b19e0` / `#8c0ed4`).
4. 3D Bevel & Extrusion:
   - Crisp top specular highlight bevel (`inset 0 2px 1px rgba(255, 255, 255, 0.5)`).
   - Solid 3D bottom/right extrusion edge (`3px 5px 0px #6d078a`).
   - Deep diffused progressive drop shadow cast underneath (`0 14px 28px rgba(129, 17, 155, 0.38), 0 6px 12px rgba(0, 0, 0, 0.22)`).
5. Text Typography:
   - Font: `Poppins`, font weight `800` (ExtraBold / Black).
   - Text Transform: Uppercase (`MAHADI HASAN`).
   - Text Color: Pure Crisp White (`#ffffff`).
6. Surrounding Typography:
   - Line 1: `The official portfolio`
   - Line 2: `of <3D Card>MAHADI HASAN</3D Card>,`
   - Line 3: `crafting visual excellence`
   - Preserves Season Mix serif editorial balance and smooth SaaS entrance animation.

## Requirements & Acceptance Criteria
- [ ] **Requirement 1**: Green badge, green underline, and green text styling completely removed.
- [ ] **Requirement 2**: "MAHADI HASAN" rendered inside a 3D rectangular purple floating card with physical extrusion and specular bevel.
- [ ] **Requirement 3**: Text is Poppins ExtraBold (800), pure white (`#ffffff`), and uppercase.
- [ ] **Requirement 4**: Card background uses the exact sampled electric violet-purple gradient (`#a728eb` / `#9013fe`).
- [ ] **Requirement 5**: Responsive scaling on mobile (`clamp`) ensuring no awkward wraps or overflowing.
- [ ] **Requirement 6**: Works seamlessly in both Light Theme and Dark Theme.
- [ ] **Requirement 7**: `npm run build` succeeds with 0 errors.
- [ ] **Requirement 8**: Playwright automated test verifies computed styles and captures visual screenshot evidence.
