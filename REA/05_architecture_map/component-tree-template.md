# REA Component Tree & Hierarchy Blueprint

Use this template to map out the component architecture of any reverse-engineered target page or feature before beginning code reconstruction.

---

## 🌳 Target Page: [e.g. Landing Page / 3D Showcase]

### 1. Visual Hierarchy Tree
```text
RootLayout (src/app/layout.tsx)
 ├── GlobalHeader / Navigation
 │    ├── BrandLogo (SVG)
 │    ├── NavLinks (Desktop List)
 │    ├── ThemeToggle / SoundToggle
 │    └── MobileMenuDrawer (Framer Motion AnimatePresence)
 │
 ├── HeroSection (Full Viewport 100vh)
 │    ├── WebGLCanvasContainer (Client-side Three.js Scene)
 │    │    ├── HeroSculpture (GLB Mesh + Custom ShaderMaterial)
 │    │    └── AmbientParticles (InstancedMesh BufferGeometry)
 │    ├── HeroHeadlineOverlay (Fluid Typography + GSAP Stagger)
 │    └── PrimaryCTAButtonGroup (Interactive Magnetic Hover)
 │
 ├── BentoGridSection (Interactive Portfolio Grid)
 │    ├── SectionHeader (Title + Subtitle + Category Filter)
 │    └── BentoGridContainer
 │         ├── ProjectCardFeatured (Span 2x2 with Video Reel)
 │         ├── StatCard (Real-time animated counter)
 │         └── InteractiveLabCard (WebGL mini-shader preview)
 │
 ├── ProcessTimelineSection (ScrollTrigger Pinning)
 │    ├── StickyProgressIndicator
 │    └── HorizontalScrollTrack (GSAP Pin & Scrub)
 │         ├── StepCard01
 │         ├── StepCard02
 │         └── StepCard03
 │
 └── GlobalFooter
      ├── BigTypographyBanner
      ├── ContactFormModal (React Hook Form / Zod)
      └── SocialLinks & Copyright
```

---

## 🧩 2. Component Specification Matrix

| Component Name | Client / Server | Key Props (`interface`) | Internal State (`useState` / store) | External Dependencies |
| :--- | :--- | :--- | :--- | :--- |
| `HeroCanvasScene` | Client (`"use client"`) | `{ isHovered?: boolean, cameraSpeed?: number }` | `isLoaded`, `fps`, `mouseCoords` | `three`, `requestAnimationFrame` |
| `HeroHeadlineOverlay` | Client (`"use client"`) | `{ title: string, subtitle: string, badgeText?: string }` | None (pure presentation) | `gsap`, `split-type` |
| `BentoProjectCard` | Client (`"use client"`) | `{ title: string, tags: string[], imageSrc: string, liveUrl: string }` | `isCardHovered`, `tiltPosition` | `framer-motion`, `lucide-react` |
| `InteractiveCursor` | Client (`"use client"`) | `{ targetVariant: "default" \| "hover" \| "text" }` | `cursorX`, `cursorY`, `scale` | `framer-motion` |

---

## ⚡ 3. Props Interface Definition Example

```typescript
export interface BentoProjectCardProps {
  id: string;
  title: string;
  description: string;
  tags: string[];
  thumbnailUrl: string;
  videoPreviewUrl?: string;
  liveDemoUrl?: string;
  githubUrl?: string;
  layoutSpan?: 'col-span-1' | 'col-span-2' | 'col-span-3';
  accentColor?: string;
}
```
