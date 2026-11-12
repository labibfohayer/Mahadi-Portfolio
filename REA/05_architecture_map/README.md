# REA Phase 05: Component Hierarchy, State Flow & Logic Decompilation

## 🎯 Purpose & Scope
The `05_architecture_map/` directory translates visual UI layouts and dynamic interactions into an exact software engineering plan. It establishes:
- Component hierarchies (Server Components vs. Client `"use client"` Components).
- Props contracts, TypeScript interfaces, and component boundaries.
- Global & local state management flows.
- Event listeners, throttle/debounce policies, and WebGL lifecycle sync.

---

## 📂 File Inventory
| File | Format | Purpose |
| :--- | :--- | :--- |
| `component-tree-template.md` | Markdown | Visual ASCII component tree and props specification matrix. |
| `data-flow-schema.json` | JSON | Machine-readable schema mapping state stores, event triggers, and API endpoints. |
| `README.md` | Markdown | Operational guide for logic decomposition. |

---

## ⚡ Operational Protocols

### Step 1: Map the Page Sections
Break the target down into discrete sections (e.g., `HeroSection`, `BentoGrid`, `TestimonialCarousel`, `Footer`).
For each section:
1. Determine if it can remain a React Server Component (RSC) for zero-JS rendering.
2. Mark interactive leaves (e.g. 3D canvas, hover cards, modals) as `"use client"`.

### Step 2: Define State & Event Listeners
Check `data-flow-schema.json`:
- Where does mouse position data come from? (Is it throttled at 60fps / 16ms?)
- How is scroll synchronized with GSAP ScrollTrigger or Three.js camera position?
- What happens on window resize or mobile breakpoint changes?

---

## 🛡️ Architecture Integrity Checklist
- Clear separation of concerns: Presentation logic vs. 3D WebGL render loop.
- No prop drilling deeper than 2 levels (use context or local composable hooks).
- TypeScript interfaces declared for every single component.
