# Mahadi Hasan — Official 3D Portfolio & CMS

A high-performance, immersive 3D personal portfolio and complete content management system engineered for **Mahadi Hasan**, professional video editor and motion graphics designer.

Built with **React**, **TypeScript**, **Three.js**, **GSAP ScrollTrigger**, **Lenis Smooth Scroll**, and **Tailwind CSS**.

---

## 🌟 Key Highlights & Features

### 1. 🌐 Interactive 3D Cylindrical Hero Stage
- Hardware-accelerated WebGL cylindrical stage rendered with **Three.js**.
- Smooth rotational drag and inertial physics across 5 disciplines:
  - *Video Editing*, *Motion Graphics*, *Graphic Design*, *Color & Sound*, *Brand Identity*.
- SaaS-grade kinetic title reveal with optical blur-to-focus dissipation.

### 2. 🎬 Multi-Aspect-Ratio Video Showcase (Latest Work)
- Continuous 3-video sequential loop per column with specular light sweeps and audio toggles.
- Zero-cropping tailored aspect-ratio frames:
  - **Slot 1 (Left)**: `16:9 Landscape Widescreen` for cinematic commercial edits.
  - **Slot 2 (Center)**: `9:16 Portrait / Vertical Reel` for TikTok and Instagram reels.
  - **Slot 3 (Right)**: `1:1 Custom Square` for documentary and custom cuts.
- Staggered masonry editorial layout with hardware-accelerated ScrollTrigger parallax kinematics.

### 3. 🌊 120 FPS Zero-Jitter Wave Light Flow
- Rhythmic, continuous deep orange specular text wave flowing across the "My Story" narrative.
- Non-destructive inline typesetting with zero layout shift (0.00px jitter).

### 4. 🎛️ Integrated Full-Site Admin Dashboard & CMS (`#admin`)
- Accessible directly via `#admin` or through the discreet footer link `⚙️ Admin CMS`.
- **Passcode Protected Gate** (default: `mahadi2026`, customizable in settings).
- **Projects CRUD (A to Z)**:
  - Add new projects with title, category, media (video/image), poster thumbnail, tags, client, year, and description.
  - Live edit any existing project's fields.
  - Delete projects with confirmation safeguard.
  - Live category filters and real-time search.
- **Content & Story Editor**:
  - Live edit Hero headlines, client name, and taglines.
  - Live edit About "My Story" kicker, title, and paragraphs.
  - Live edit contact details, phone, location, and social profile links.
- **Photo & Media Manager**:
  - Upload profile photos and posters directly from local disk (dataURL conversion) or web URLs.
- **Backup & Portability**:
  - Download complete JSON backup snapshots.
  - Restore anytime from a `.json` backup file.
  - Factory reset safeguard.
- **Reactive Real-Time Sync**:
  - Changes in the Admin CMS instantly update `#home`, `#work`, and `#about` without rebuilds or server restarts.

### 5. 🌗 Complete Dark & Light Theme System
- Contrast-curated color science supporting both daytime editorial light and sleek nocturnal dark modes.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Dev Server**: [Vite 6](https://vitejs.dev/)
- **3D Graphics**: [Three.js](https://threejs.org/)
- **Motion & Physics**: [GSAP 3](https://gsap.com/) + [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) + [Lenis](https://lenis.darkroom.engineering/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + Custom Keyframes
- **Icons**: [Lucide React](https://lucide.dev/) + Authentic SVG Vectors
- **Testing**: [Playwright](https://playwright.dev/) End-to-End Test Suite

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18+ recommended)
- `npm` or `pnpm` / `yarn`

### Installation
```bash
# Clone the repository
git clone https://github.com/labibfohayer/mahadi-hasan-portfolio.git

# Navigate to the project directory
cd mahadi-hasan-portfolio

# Install dependencies
npm install
```

### Running Locally
```bash
# Start Vite development server
npm run dev
```
Open your browser and navigate to:
- **Portfolio Home**: `http://localhost:5173#home`
- **Selected Work**: `http://localhost:5173#work`
- **Services**: `http://localhost:5173#services`
- **About**: `http://localhost:5173#about`
- **Contact**: `http://localhost:5173#contact`
- **Admin CMS**: `http://localhost:5173#admin` *(Passcode: `mahadi2026`)*

### Building for Production
```bash
npm run build
```

---

## 👤 Credits & Author

- **Client**: Mahadi Hasan (Video Editor & Motion Designer)
- **Engineered by**: [Labib Fohayer](https://github.com/labibfohayer)

---

## 📄 License

Private & Proprietary. All rights reserved.
