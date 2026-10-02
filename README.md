<div align="center">

  <h1>Renish Mansara — Developer Portfolio</h1>
  <p><strong>Premium, Minimalist Single-Page Portfolio & Case Study Showcase for a Full-Stack Developer & Software Engineer</strong></p>

  <p>
    <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js_16-black?style=flat-square&logo=next.js&logoColor=white" alt="Next.js 16" /></a>
    <a href="https://react.dev/"><img src="https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB" alt="React 19" /></a>
    <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" /></a>
    <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" /></a>
    <a href="https://www.framer.com/motion/"><img src="https://img.shields.io/badge/Framer_Motion-black?style=flat-square&logo=framer&logoColor=white" alt="Framer Motion" /></a>
    <a href="https://vercel.com/"><img src="https://img.shields.io/badge/Deployed_on-Vercel-black?style=flat-square&logo=vercel&logoColor=white" alt="Vercel" /></a>
  </p>

  <p>
    <a href="https://www.linkedin.com/in/renishmansara">LinkedIn</a> •
    <a href="https://github.com/Renish-AI">GitHub</a> •
    <a href="mailto:renishmansara@gmail.com">Email</a>
  </p>

</div>

---

## ⚡ Overview

A high-performance portfolio website built with **Next.js 16 (App Router + Turbopack)**, **Tailwind CSS v4**, and **Framer Motion**. Designed around an editorial monochrome visual language with subtle micro-interactions, smooth inertial scrolling, spotlight reveal effects, and full case study detail pages.

### ✨ Key Features

- **Strictly Monochrome Visual Language**: Crisp contrast, editorial typography, soft rounded cards, and hairline dividers with minimal green availability indicator dots.
- **Hero Cutout & Spotlight Cursor Reveal**: Dual-layer portrait cutout with mouse-tracking radial spotlight revealing the full-color photo behind an eased physics follower (disabled on touch devices).
- **Smooth Inertial Scrolling**: Fluid Lenis smooth-scroller integrated across both desktop and mobile.
- **Dynamic Ghost Watermarks**: Low-opacity watermark headers (`PORTFOLIO`, `SERVICE`, `EXPERIENCE`) that animate into view with section entry.
- **Interactive Selected Work Grid**:
  - Filterable by project category (*All / Real Project / Exploration*).
  - 2-column offset staggered layout.
  - Hover zoom with view cursor indicator.
  - Direct **Live Demo ↗** and **GitHub Code ↗** action pills on every card.
- **Interactive Service & Experience Accordions**:
  - Expanding dark bars with hover preview mockups that dynamically track the cursor.
  - Academic background at **Nirma University (B.Tech CSE '28)**, HackaMind Top 5 Finalist, SIH, and certifications.
- **Case Study Detail Pages (`/work/[slug]`)**:
  - Full-width hero showcase with metadata (Service, Timeline, Tech Tools).
  - Deep-dive feature breakdowns and responsive screenshots.
  - Direct Live Preview and GitHub repository links.
  - Related `/MORE WORK` recommendation cards.
- **100% React 19 & ESLint Compliant**: Built with `useSyncExternalStore` for client capabilities, zero cascading renders, and Lighthouse 95+ performance metrics.

---

## 🚀 Featured Projects

| Project | Stack | Links |
| :--- | :--- | :--- |
| **Commercial Website Platform** | `React` `TypeScript` `Vite` `Tailwind CSS` | [Live Demo ↗](https://redenergy.vercel.app/) • [GitHub ↗](https://github.com/Renish-AI/Commercial-Website) |
| **SmartCampus Portal** | `React` `TypeScript` `Vite` `Gemini AI` | [Live Demo ↗](https://smart-campus-portal-taupe.vercel.app/) • [GitHub ↗](https://github.com/Renish-AI/SmartCampus-Portal) |
| **GlobeTrotter 2.0** | `React` `Gemini API` `Vite` `Full Stack` | [Live Demo ↗](https://globetrotter-2-0.vercel.app/) • [GitHub ↗](https://github.com/Renish-AI/Globetrotter_2.0) |
| **GlobeTrotter - Odoo Hackathon** | `React 18` `Supabase` `PostgreSQL` `Framer Motion` | [Live Demo ↗](https://planningtrip.vercel.app/) • [GitHub ↗](https://github.com/Renish-AI/Odoo) |

---

## 🛠️ Tech Stack & Architecture

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router with Turbopack bundler)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations & Physics**: [Framer Motion](https://www.framer.com/motion/)
- **Smooth Scroll**: [Lenis](https://lenis.darkroom.engineering/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Deployment**: [Vercel](https://vercel.com/) Edge Network

---

## 📂 Project Structure

```bash
portfolio/
├── my-app/                         # Next.js Application Root
│   ├── public/                     # Static Assets & Resume
│   │   ├── images/                 # Optimized project photos & cutouts
│   │   └── Renish_Mansara_Resume.pdf
│   ├── src/
│   │   ├── app/                    # Next.js App Router
│   │   │   ├── layout.tsx          # Root Layout & Font definitions
│   │   │   ├── page.tsx            # Main Portfolio Page
│   │   │   ├── globals.css         # Tailwind & theme styles
│   │   │   └── work/[slug]/        # Dynamic Case Study detail routes
│   │   ├── components/             # Modular UI Components
│   │   │   ├── Navbar.tsx          # Fixed blur navbar with live counters
│   │   │   ├── Hero.tsx            # Cutout & spotlight reveal
│   │   │   ├── WorkGrid.tsx        # Project showcase & direct links
│   │   │   ├── ServiceList.tsx     # Expanding rows & tilt mockup hover
│   │   │   ├── ExperienceList.tsx  # Dark theme experience showcase
│   │   │   ├── Footer.tsx          # Curtain reveal CTA & mail trigger
│   │   │   ├── CustomCursor.tsx    # Magnetic custom cursor
│   │   │   └── SmoothScroll.tsx    # Inertial smooth scroll provider
│   │   └── data/
│   │       └── data.ts             # Centralized project & profile content
│   ├── package.json
│   ├── tsconfig.json
│   └── next.config.ts
└── README.md
```

---

## 💻 Local Development

### 1. Clone the Repository
```bash
git clone https://github.com/Renish-AI/portfolio.git
cd portfolio/my-app
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## ☁️ Deployment on Vercel

1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import the `portfolio` repository.
4. Set the **Root Directory** to `my-app`:
   - Click **Edit** next to **Root Directory**
   - Select or type `my-app`
5. Keep **Framework Preset** as **Next.js** and click **Deploy**.

---

## 📬 Contact & Connect

- **Renish Mansara** — Full Stack Developer & Software Engineer
- **LinkedIn**: [linkedin.com/in/renishmansara](https://www.linkedin.com/in/renishmansara)
- **GitHub**: [@Renish-AI](https://github.com/Renish-AI)
- **Email**: [renishmansara@gmail.com](mailto:renishmansara@gmail.com)

---

<div align="center">
  <sub>Designed & Developed by Renish Mansara • Built with Next.js & Tailwind CSS</sub>
</div>
