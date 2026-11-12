# Extracted Web Fonts Repository
Place extracted `.woff2`, `.woff`, `.ttf`, or `.otf` font files here.

### Integration Blueprint:
- Modern Next.js apps should load `.woff2` fonts using `next/font/local` in `src/app/layout.tsx` for zero layout shift and automatic font preloading.
- Ensure fallback font metrics (`sizeAdjust`, `ascentOverride`) match standard sans-serif / serif fonts.
