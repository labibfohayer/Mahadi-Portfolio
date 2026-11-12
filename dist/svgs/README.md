# Extracted Vector SVGs Repository
Place extracted SVG icons, vector shapes, logo marks, and geometric path definitions here.

### Processing Pipeline:
1. SVGs extracted by `extract-assets.mjs` land here automatically.
2. Clean unused `<defs>`, editor metadata, inline style tags, and hardcoded `width`/`height`.
3. Set `fill="currentColor"` or `stroke="currentColor"` so icons inherit Tailwind color classes.
