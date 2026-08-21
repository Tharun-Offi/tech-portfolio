# 🚀 Tharun Murugavel — 3D Interactive Cyber Portfolio

[![React](https://img.shields.io/badge/React-18.3.1-61dafb?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Three.js](https://img.shields.io/badge/Three.js-WebGL-black?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646cff?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

A high-performance, futuristic 3D developer portfolio engineered with **React 18**, **TypeScript**, **Three.js / React Three Fiber**, **Tailwind CSS**, and **Framer Motion**. Features interactive 3D WebGL holograms, a 360° rotating skill cloud, a functional keyboard-driven CLI terminal emulator, procedural Web Audio synthesizer sound FX, and a dedicated isolated print resume engine.

---

## 🌟 Key Features

- **🌐 Interactive 3D WebGL Hologram Core**:
  - Custom Three.js holographic globe with concentric latitude/longitude wireframe spheres, an inner glowing energy core, and 3 concentric orbital rings (Cyan, Purple, Emerald) that respond to mouse motion with smooth damping.
  - Symmetrically framed within a rotating cyberpunk HUD ring with real-time FPS and telemetry monitors.

- **🪐 360° Interactive 3D Tech Cloud**:
  - Spherical 3D distribution of skills built with `@react-three/drei` and `@react-three/fiber` that can be dragged and rotated 360° in WebGL space.

- **💻 Developer CLI Terminal Emulator**:
  - Fully interactive command-line interface supporting commands: `help`, `about`, `skills`, `projects`, `experience`, `education`, `contact`, `clear`, and `sudo hire` (with celebratory confetti particle bursts).
  - Includes command history traversal via `ArrowUp` / `ArrowDown` and quick-run pill buttons.

- **📄 Isolated Print Resume Engine**:
  - Custom sandbox print engine that outputs a clean, single-page A4 resume PDF with profile avatar, executive summary, experience cards, education metrics (CGPA: 7.92), and 2-column technical competencies — with **zero trailing blank pages**.

- **🔊 Web Audio API Synthesizer**:
  - Procedural, lightweight sci-fi audio synthesizer for hover, click, and success feedback without loading external audio assets, complete with a global mute toggle.

- **📬 Live Interactive Contact Portal**:
  - Direct message dispatch powered by **Web3Forms API**, supporting Name, Email, Purpose of Inquiry / Subject, and Message fields with validation and live status alerts.

- **✨ Cyber Glassmorphic Aesthetics**:
  - Dark-matter theme (`#080a11`), smooth spring-trailing glowing cursor, ambient 3D starfield particles (1,200+ nodes), and sticky skill category navigation.

---

## 🛠️ Technical Stack

| Area | Technologies |
|---|---|
| **Core Framework** | React 18, TypeScript, Vite 6 |
| **3D Graphics & WebGL** | Three.js, `@react-three/fiber`, `@react-three/drei` |
| **Styling & UI** | Tailwind CSS 3.4, PostCSS, Autoprefixer |
| **Animation & Motion** | Framer Motion 12, Canvas Confetti |
| **Icons & Typography** | Lucide React, JetBrains Mono, Plus Jakarta Sans |
| **Audio & SFX** | Native HTML5 Web Audio API Synthesizer |
| **Contact API** | Web3Forms API |

---

## 📂 Project Structure

```bash
animated-portfolio/
├── public/
│   ├── avatar.jpg              # High-resolution profile portrait
│   ├── logo.png                # 3D AI-generated cyber monogram logo
│   └── favicon.png             # Browser tab favicon
├── src/
│   ├── components/
│   │   ├── 3d/
│   │   │   ├── BackgroundParticles.tsx   # 1,200+ 3D starfield dust
│   │   │   ├── HeroCanvas.tsx            # Symmetrical 3D holographic globe
│   │   │   └── TechSphere.tsx            # 360° draggable 3D skill cloud
│   │   ├── layout/
│   │   │   ├── Navbar.tsx                # Glassmorphic header with live time & audio
│   │   │   └── Footer.tsx                # Footer with quick links & back-to-top
│   │   ├── sections/
│   │   │   ├── Hero.tsx                  # Landing hero with typewriter & 3D HUD
│   │   │   ├── About.tsx                 # Profile story, credentials & 3 pillars
│   │   │   ├── Skills.tsx                # Sticky skill navigation & proficiency bars
│   │   │   ├── Experience.tsx            # TCS & Expleo career roadmap
│   │   │   ├── Projects.tsx              # 3D perspective mouse-tilt project cards
│   │   │   ├── TerminalSection.tsx       # Interactive CLI shell emulator
│   │   │   └── Contact.tsx               # Web3Forms contact portal
│   │   └── ui/
│   │       ├── CustomCursor.tsx          # Spring-trailing cyber cursor
│   │       ├── Icons.tsx                 # Custom SVG brand icons (GitHub, LinkedIn)
│   │       ├── ProjectModal.tsx          # Detailed project spotlight modal
│   │       └── ResumeModal.tsx           # Interactive viewer & isolated print engine
│   ├── data/
│   │   └── portfolioData.ts              # Centralized portfolio data & skills matrix
│   ├── types/
│   │   └── index.ts                      # TypeScript interfaces & types
│   ├── utils/
│   │   └── sound.ts                      # Web Audio API procedural sound engine
│   ├── App.tsx                           # Master root application component
│   ├── main.tsx                          # Vite React DOM entrypoint
│   └── index.css                         # Tailwind CSS & print media rules
├── index.html                            # Root HTML template with preconnect fonts
├── package.json                          # Dependencies & build scripts
├── tsconfig.json                         # TypeScript compiler settings
├── tailwind.config.js                    # Tailwind theme extensions & keyframes
└── vite.config.ts                        # Vite configuration
```

---

## ⚡ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version `v18.0.0` or higher)
- [npm](https://www.npmjs.com/) (version `v9.0.0` or higher)

### 1. Clone the Repository
```bash
git clone https://github.com/Tharun-Offi/animated-portfolio.git
cd animated-portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
```
Generates an optimized production bundle inside the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 📬 Contact Form Setup (Web3Forms)

The contact form is pre-configured with a Web3Forms access key in `src/components/sections/Contact.tsx`. If you wish to use your own access key:
1. Visit [Web3Forms](https://web3forms.com/) and enter your email to receive a free Access Key.
2. In `src/components/sections/Contact.tsx`, update the `access_key` value:
```ts
formData.append('access_key', 'YOUR_WEB3FORMS_ACCESS_KEY');
```

---

## 👨‍💻 About Tharun Murugavel

- **Role**: Assistant System Engineer @ **Tata Consultancy Services (TCS)**, Chennai
- **Past Experience**: Full Stack Developer Intern @ **Expleo Solutions**, Bangalore (Software-in-the-Loop SiL Server)
- **Education**: Bachelor of Engineering (B.E.) in **Computer Science and Engineering (Specialized in Cyber Security)** — *Erode Sengunthar Engineering College* (**CGPA: 7.92 / 10**)
- **Core Focus**: Enterprise Java Full Stack (Spring Boot, Servlets, Angular, React), Python AI / ML (FastAPI, Transformers, Scikit-learn), Relational Databases (PostgreSQL, MySQL, PL/SQL, Supabase), and Asynchronous Systems (Redis, Celery).

### 🌐 Connect with Tharun:
- **Email**: [tharunmbecse@gmail.com](mailto:tharunmbecse@gmail.com)
- **Phone / WhatsApp**: [+91 8122250010](https://wa.me/+918122250010)
- **GitHub**: [github.com/Tharun-Offi](https://github.com/Tharun-Offi)
- **LinkedIn**: [linkedin.com/in/tharun-offi](https://www.linkedin.com/in/tharun-offi/)
- **Instagram**: [@tharun_murugavel](https://www.instagram.com/tharun_murugavel/)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) — feel free to use and customize it for your own personal portfolio!
