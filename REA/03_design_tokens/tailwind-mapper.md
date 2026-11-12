# REA Design Tokens to Tailwind CSS Mapper

This guide provides the official translation matrix for converting reverse-engineered CSS variables, raw styles, and design tokens into Tailwind CSS (v3 / v4) utility classes.

---

## 🎨 1. Backgrounds & Surfaces

| Target CSS Property / Value | Tailwind CSS Equivalent | Notes / Semantic Usage |
| :--- | :--- | :--- |
| `background-color: #050505` | `bg-[#050505]` or `bg-neutral-950` | Primary dark viewport canvas |
| `background-color: #0d0d0f` | `bg-[#0d0d0f]` | Card & container surface |
| `background: rgba(255,255,255,0.03)` | `bg-white/[0.03]` | Subtle frosted backdrop |
| `backdrop-filter: blur(16px)` | `backdrop-blur-md` | Glassmorphic floating navigation |
| `border: 1px solid rgba(255,255,255,0.08)` | `border border-white/[0.08]` | Clean dark mode separator |
| `box-shadow: 0 0 30px rgba(99,102,241,0.35)` | `shadow-[0_0_30px_rgba(99,102,241,0.35)]` | Glowing active accents |

---

## 🔤 2. Typography & Lettering

| Target CSS Rule | Tailwind CSS Equivalent | Context |
| :--- | :--- | :--- |
| `font-size: clamp(3rem, 7vw, 6.5rem)` | `text-5xl md:text-7xl lg:text-9xl` | Display Hero Headings |
| `font-size: clamp(1.75rem, 3vw, 2.5rem)` | `text-2xl sm:text-3xl md:text-4xl` | Section Headings |
| `letter-spacing: -0.04em` | `tracking-tighter` | Modern editorial headlines |
| `letter-spacing: -0.02em` | `tracking-tight` | Body headlines & card titles |
| `line-height: 1.05` | `leading-none` or `leading-[1.05]` | Hero text alignment |
| `background-clip: text; color: transparent;` | `bg-clip-text text-transparent` | Gradient text effects |

---

## 📐 3. Layout, Spacing & Flex/Grid

| Target Layout Pattern | Tailwind CSS Utility Cluster | Use Case |
| :--- | :--- | :--- |
| Full-height hero with centered canvas | `relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden` | Three.js / WebGL Hero Canvas |
| Bento-style responsive grid | `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6` | Portfolio / Features Showcase |
| Fluid section padding | `px-4 sm:px-6 md:px-12 lg:px-24 py-16 md:py-28` | Main content container |
| Sticky glassmorphic navbar | `fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-black/40 border-b border-white/5` | Global Header |

---

## 💡 4. Tailwind v4 `@theme` Integration Snippet
In modern Tailwind v4 (as used in this Next.js project via `@tailwindcss/postcss`), tokens can be declared directly in `src/app/globals.css`:

```css
@import "tailwindcss";

@theme {
  --color-bg-primary: #050505;
  --color-bg-surface: rgba(255, 255, 255, 0.03);
  --color-accent-indigo: #6366f1;
  --color-accent-glow: rgba(99, 102, 241, 0.45);
  
  --font-display: "Syne", sans-serif;
  --font-sans: var(--font-geist-sans), sans-serif;
  --font-mono: var(--font-geist-mono), monospace;
  
  --ease-fluid: cubic-bezier(0.16, 1, 0.3, 1);
}
```
*Allows immediate usage of `bg-bg-primary`, `text-accent-indigo`, and `font-display` across all reconstructed components.*
