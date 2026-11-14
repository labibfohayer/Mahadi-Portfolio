# Mahadi Hasan - Interactive 3D Portfolio and Content Management System

A production-grade, WebGL-powered portfolio and client-facing Content Management System (CMS) engineered for Mahadi Hasan, specializing in high-retention video editing, motion design, and visual brand identity systems.

Built with React 18, TypeScript, Three.js, GSAP ScrollTrigger, Lenis Smooth Scroll, and Tailwind CSS.

---

## Technical Overview

The application is structured as a high-performance Single Page Application (SPA) designed to combine cinematic presentation with full content agility. It delivers a hardware-accelerated 3D viewport, responsive masonry video showcases tailored for multiple commercial aspect ratios, and an embedded administrative dashboard allowing real-time content mutations without requiring redeployments or server restarts.

### Primary Engineering Objectives
- **Zero-Distortion Multi-Aspect Media**: Responsive rendering across 16:9 widescreen, 9:16 vertical reels, and 1:1 square video formats with zero cropping artifacts.
- **Hardware-Accelerated Kinetic Typography**: Fluid 120 FPS text wave shaders executed via GPU-accelerated compositing layers with zero layout shift (CLS: 0.00).
- **Integrated Client CMS**: Client-accessible administration suite enabling full CRUD over projects, copy, contact metadata, and asset references backed by resilient local persistence and portable JSON serialization.
- **Progressive Modern Stack**: Strictly typed TypeScript code with Vite-driven bundling, tree-shaking, and minified production artifacts.

---

## System Architecture and Core Modules

### 1. WebGL Cylindrical 3D Hero Stage
- **Engine**: Three.js WebGLRenderer with antialiasing and sRGB color encoding.
- **Geometry**: Procedurally arranged cylindrical presentation ring displaying core creative capabilities across 5 distinct disciplines.
- **Physics and Inertia**: Pointer-driven drag interaction model with normalized velocity decay and spring damping.
- **Lifecycle Management**: Strict event cleanup and WebGL context destruction on unmount to eliminate GPU memory leaks.

### 2. Adaptive Multi-Aspect Ratio Video Engine (`LatestWork`)
- **Aspect Ratio Architecture**:
  - **Slot 1 (Left Column)**: `16:9 Landscape Widescreen` - Optimized for cinematic brand commercials and broadcast productions.
  - **Slot 2 (Center Column)**: `9:16 Vertical Reel` - Tailored for TikTok, Instagram Reels, and YouTube Shorts.
  - **Slot 3 (Right Column)**: `1:1 Custom Square` - Formatted for social editorial cuts, square feeds, and documentary previews.
- **Automated Looping and Playback**: Staggered video playback sequencing with audio controls and hardware-accelerated opacity dissolves.
- **Parallax Kinematics**: GSAP ScrollTrigger timelines synchronized with Lenis virtual smooth scroll for friction-free viewport translation.

### 3. Kinetic Typography Wave (`About` / `My Story`)
- **120 FPS Wave Motion**: CSS animation pipeline utilizing GPU-composited background position translation with cubic-bezier easing curves.
- **Typesetting Integrity**: Non-destructive inline typography preserving original DOM word boundaries and accessibility trees.
- **Visual Palette**: Deep orange ambient specular sweep calibrated against both nocturnal dark and editorial light color tokens.

### 4. Headless Admin Dashboard and CMS (`#admin`)
- **Access Route**: Accessible via `#admin` or through the footer administration trigger.
- **Security Barrier**: Client-side passcode verification gate (configurable in settings; default: `mahadi2026`).
- **Project CRUD Operations**:
  - Create new portfolio entries with title, category, media type (video/image), poster thumbnail, client tag, year, and detailed case description.
  - Update any existing record in place with real-time UI synchronization across `#home` and `#work` views.
  - Delete entries with state confirmation safeguards.
  - Live filtering by creative category and substring search queries.
- **Copy and Asset Management**:
  - Live editor for Hero headlines, taglines, and About section narratives.
  - Contact information editor covering email, phone, location, and social media handles (Instagram, Facebook, LinkedIn, Twitter, YouTube).
  - Media asset manager supporting both direct local image file ingestion (DataURL conversion) and hosted remote URLs.
- **Data Portability and Disaster Recovery**:
  - Full state serialization to portable JSON backup files.
  - One-click restore workflow validating schema structure before ingestion.
  - Reset-to-factory defaults safeguard.

---

## Technology Stack

| Layer | Technologies |
|---|---|
| **Core Framework** | React 18, TypeScript 5 |
| **Build & Tooling** | Vite 6, PostCSS, Autoprefixer |
| **3D & Graphics** | Three.js (WebGLRenderer, PerspectiveCamera, MeshStandardMaterial) |
| **Animation & Physics** | GSAP 3, GSAP ScrollTrigger, Lenis Smooth Scroll |
| **Design & UI** | Tailwind CSS 3, Custom CSS Design Tokens, Lucide Icons |
| **Routing & Navigation** | Hash-based SPA Router (`#home`, `#work`, `#services`, `#about`, `#contact`, `#admin`) |
| **State & Persistence** | React Context API, Web Storage API (LocalStorage), JSON Serialization |
| **Quality & Verification** | Playwright End-to-End Test Suite |

---

## Directory Structure

```
mahadi-hasan-portfolio/
├── public/
│   ├── _redirects              # Cloudflare Pages SPA rewrite rules
│   ├── textures/               # Compressed WebP/AVIF textures & icons
│   │   ├── cases/              # Client project previews
│   │   ├── graphic-hero/       # 3D stage capability textures
│   │   └── video-posters/      # Fallback video thumbnail posters
│   └── videos/
│       └── latest-work/        # Optimized MP4 reel & commercial assets
├── src/
│   ├── components/
│   │   ├── AboutOffices.tsx    # Studio locations and credentials
│   │   ├── AboutPage.tsx       # Full About page experience
│   │   ├── AdminPanel.tsx      # Headless Admin Dashboard & CMS
│   │   ├── ContactPage.tsx     # Direct inquiry form & booking channels
│   │   ├── Footer.tsx          # Master footer with kinetic reveal & socials
│   │   ├── FooterSvgs.tsx      # SVG icons for discipline badges
│   │   ├── HeroSection.tsx     # Hero typography & CTA layout
│   │   ├── HeroThreeCanvas.tsx # Three.js 3D cylindrical canvas implementation
│   │   ├── LatestWork.tsx      # Multi-aspect ratio video masonry
│   │   ├── Navbar.tsx          # Responsive navigation & theme switchers
│   │   ├── ServicesPage.tsx    # Detailed service breakdown & pricing tiers
│   │   ├── SimpleText.tsx      # Mission statement typography
│   │   ├── TechnologyPicker.tsx# Service selection chips
│   │   ├── TextReveal.tsx      # Masked typographic scroll reveal
│   │   ├── TextSticky.tsx      # Sticky narrative storytelling section
│   │   └── WorkPage.tsx        # Comprehensive searchable project gallery
│   ├── context/
│   │   └── PortfolioContext.tsx# Reactive state provider & persistence engine
│   ├── data/
│   │   ├── cases.json          # Curated archive cases
│   │   └── userProjects.json   # Base project dataset
│   ├── App.tsx                 # Root application controller & hash routing
│   ├── index.css               # Global theme tokens, typography, & keyframes
│   └── main.tsx                # Application bootstrap
├── index.html                  # HTML5 entrypoint & font preloads
├── package.json                # Project dependencies & operational scripts
├── tailwind.config.js          # Tailwind theme extensions & typography scale
├── tsconfig.json               # TypeScript compiler configuration
└── vite.config.ts              # Vite bundling & asset pipeline configuration
```

---

## Getting Started

### Prerequisites
- Node.js version 18.0.0 or higher (Node.js 20 LTS recommended)
- npm version 9.0.0 or higher (or pnpm / yarn)

### Installation
Clone the repository and install runtime dependencies:
```bash
git clone https://github.com/labibfohayer/Mahadi-Portfolio.git
cd Mahadi-Portfolio
npm install
```

### Local Development
To launch the Vite development server with Hot Module Replacement (HMR):
```bash
npm run dev
```

Navigate to `http://localhost:5173` in your browser. Available routes include:
- `/#home`: Interactive 3D Hero stage, Latest Work showcase, and narrative story
- `/#work`: Filterable gallery of commercial and motion graphics projects
- `/#services`: Service offerings, deliverables breakdown, and FAQ
- `/#about`: Personal bio, creative methodology, and credentials
- `/#contact`: Interactive commission inquiry form and direct communication channels
- `/#admin`: Administrative CMS panel (Passcode: `mahadi2026`)

### Production Build
To validate TypeScript types and compile optimized production assets:
```bash
npm run build
```
Production output will be generated inside the `dist/` directory.

To preview the production bundle locally:
```bash
npm run preview
```

---

## Deployment Configuration

### Cloudflare Pages
The repository includes a `public/_redirects` configuration file configured for Single Page Application routing:
- **Framework Preset**: `Vite` (or `None`)
- **Build Command**: `npm run build`
- **Build Output Directory**: `dist`
- **Environment Variables**:
  - `NODE_VERSION`: `20`

### Vercel / Netlify
- Build command: `npm run build`
- Publish directory: `dist`
- Route rewrites: Handled via standard static SPA index fallback.

---

## Social and Contact Endpoints

- **Instagram**: [https://www.instagram.com/mahadihasan9451/](https://www.instagram.com/mahadihasan9451/)
- **Facebook**: [https://www.facebook.com/mahadi.hasan.385339](https://www.facebook.com/mahadi.hasan.385339)
- **WhatsApp**: [+880 1314-632404](https://wa.me/8801314632404)
- **Direct Email**: [mahadihasan20125@gmail.com](mailto:mahadihasan20125@gmail.com)

---

## Credits and Maintainers

- **Client**: Mahadi Hasan (Video Editor & Motion Designer)
- **Lead Full-Stack Engineer**: [Labib Fohayer](https://github.com/labibfohayer)

---

## License

Private and proprietary. All rights reserved.
