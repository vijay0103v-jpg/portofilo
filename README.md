# Vijay V — Premium Editorial Dark Portfolio

A bespoke, dark editorial portfolio website engineered exclusively with **semantic HTML5** and modern **CSS3**. Built with an editorial aesthetic featuring warm ivory typography against a near-black canvas, thin burgundy gridlines, and restrained vermilion accents.

---

## 🎨 Visual Identity & Palette

| Token | Hex Value | Application |
|---|---|---|
| **Background** | `#100909` | Deep obsidian canvas |
| **Glass Surface** | `rgba(27, 16, 16, 0.72)` | Translucent frosted glass cards |
| **Glass Bevel** | `rgba(255, 255, 255, 0.16)` | Top-edge specular reflection |
| **Main Text** | `#F0E1CA` | Warm ivory headlines & body copy |
| **Secondary Text** | `#B6A9A0` | Warm stone captions & metadata |
| **Accent Red** | `#A83D40` | Muted vermilion indicators & buttons |
| **Borders** | `#4A2929` | Hairline burgundy editorial rules |

---

## ✨ Visual Polish, Typography & Animations

- **Glossy Glassmorphism:** All cards, panels, and badges feature translucent frosted glass surfaces (`backdrop-filter: blur(16px)`), crisp top-edge specular highlights (`inset 0 1px 1px 0 rgba(255,255,255,0.16)`), and interactive cursor-tracking specular lighting (`--mouse-x`, `--mouse-y`).
- **Atmospheric Ambient Glows:** Three slow-floating multi-color ambient orbs (`.glow-1`, `.glow-2`, `.glow-3`) with soft 140px blur that slowly undulate behind the content, refracting through the frosted glass cards as the visitor scrolls.
- **Enhanced Editorial Typography:** Added Google Font **Syne** paired with **Big Shoulders Display**, **Plus Jakarta Sans**, and **Space Grotesk**. Titles feature multi-stop metallic ivory linear gradients (`#FFFFFF` → `#F0E1CA` → `#C9B8A3`), drop shadows, and glowing crimson numeral counters.
- **Scroll-Driven Animations:**
  - **Luminous Progress Bar:** Fixed 3px progress bar at the top of the browser that tracks reading depth with a vermilion-to-ivory glow.
  - **Intersection Observer Reveal Effects:** All section headers and cards glide smoothly upward into place (`translateY(32px)` → `translateY(0)` at `0.85s cubic-bezier(0.16, 1, 0.3, 1)`).
  - **Active Navigation Tracking:** Automatically highlights the active section in the sticky header as the user scrolls past each section.
  - **Dynamic Scrolled Header State:** Transitions to an enhanced 20px blur glassmorphic bar when scrolling down.
  - **Custom Luxury Scrollbar:** Bespoke obsidian track with glowing burgundy-to-vermilion thumb.

---

## 📁 File Structure

```text
├── index.html          # Semantic HTML5 layout in 8 recommended stages
├── style.css           # Complete CSS3 grid, typography, animations, responsive rules
├── script.js           # Lightweight vanilla JS for mobile menu & dynamic copyright year
├── README.md           # Documentation & architecture breakdown
├── README.txt          # Quick reference notes
└── assets/
    ├── hero_showcase.jpg   # Master studio hero artwork
    ├── portrait_studio.jpg # Studio portrait for About section
    ├── portrait.png        # Original portrait of Vijay V
    ├── guardian_brand_logo.png
    └── guardian_app_icon.png
```

---

## 🚀 How to Run Locally

1. **Direct Browser Execution:**
   Double-click `index.html` or open it with any modern web browser (Chrome, Edge, Firefox, Safari).

2. **Using a Local Server (Recommended):**
   ```bash
   # Using Python 3:
   python -m http.server 8000
   # Then visit http://localhost:8000 in your browser
   ```

3. **Using VS Code:**
   Right-click `index.html` and choose **"Open with Live Server"**.

---

## 🧭 The 8-Stage Architecture

The portfolio follows the exact 8-stage layout sequence designed to guide visitors through Vijay's narrative, technical capabilities, verified projects, credentials, and contact channels:

### `01` Hero
- **Header:** Sticky editorial bar with monogram wordmark, navigation links, and direct contact CTA.
- **Top Label:** `PERSONAL PORTFOLIO` & pulsing `OPEN TO OPPORTUNITIES` indicator.
- **Title & Subtitle:** Large `PORTFOLIO` title, `VIJAY V`, `SOFTWARE ENGINEER / AI & ML / DATA ANALYTICS`.
- **Introductory Statement:** Clear focus on building intelligent applications and data-driven solutions using Python, SQL, AI/ML, and modern web technologies.
- **Dual CTAs:** `EXPLORE MY WORK →` and `LET'S CONNECT`.
- **Hero Showcase Stage:** Studio portrait artwork featuring 3 interactive editorial hotspots (`#projects`, `#about`, `#contact`) and 5 core competency highlight tiles (Python & SQL, AI/ML Applications, Software & Data Solutions, DSA, LLM & RAG).

### `02` What I Do
- 5 compact service cards detailing core engineering offerings:
  1. *Software Development* (Python, FastAPI, Flask, responsive web frontends)
  2. *Data Analytics* (Data cleaning, validation, reporting, actionable insights)
  3. *AI & Machine Learning* (Computer vision, DeepFace, LLMs, RAG)
  4. *Database & API Development* (MySQL, relational design, RESTful endpoints)
  5. *Project Coordination* (Requirements gathering, timeline tracking, documentation)

### `03` My Process
- 5-step vertical editorial timeline with connected spine:
  - `01 Discover` · Requirements gathering & scope definition
  - `02 Plan` · Architecture design & tech stack selection
  - `03 Develop` · Clean coding, modular logic & version control
  - `04 Test & Refine` · Validation, debugging & code optimization
  - `05 Deliver` · Deployment, documentation & client handover

### `04` Featured Projects
- Two-column editorial gallery with verified project descriptions, technology tags, and actionable links:
  - **01 / AI-POWERED APPLICATION:** *Smart Emergency Intelligence System (SEIS)* — Python, FastAPI, MySQL, AI/ML, HTML, CSS, JavaScript (includes live demo anchor).
  - **02 / COMPUTER VISION & ML:** *AI-Powered Food Mood Prediction* — Python, OpenCV, DeepFace, Machine Learning, Flask, MySQL.
  - **03 / SOFTWARE QUALITY:** *Rapid Code Quality Analyzer (RCQA)* — Research publication on code quality metrics and methodology.
  - **04 / DATA ANALYTICS:** *Data Analysis & Business Reporting* — Python, SQL, Excel, Data Visualization.

### `05` About Me + Skills
- **Biography:** Studio portrait, verified narrative, and metadata profile cards (Location: Bengaluru; Degree: MCA; Interests: Software Engineering, AI, Data Analytics, Intelligent Applications).
- **Work Experience (`#experience`):** 2 industry cards:
  - *Project Coordinator* (July 2026 – October 2026) · EMechanicz Test Solutions Pvt. Ltd., Bengaluru.
  - *Data Analyst* (December 2025 – July 2026) · EMechanicz Test Solutions Pvt. Ltd., Bengaluru.
- **Technical Skills (`#skills`):** 8 category cards with individual technology tiles:
  - Programming, Web Development, Backend Frameworks, Databases, Data Analytics, AI & Machine Learning, Computer Science, and Tools.

### `06` Education + Publications
- **Degrees & Qualifications (`#education`):**
  - *Master of Computer Applications (MCA)* — SEA College of Science, Commerce and Arts, Bengaluru (CGPA 8.2 / 10, Nov 2024 – Oct 2026).
  - *Bachelor of Computer Applications (BCA)* — Indian Academy Degree College, Bengaluru (CGPA 6.82 / 10, Sep 2021 – Sep 2024).
- **Research Publications (`#publications`):** 2 clean cards with verified DOIs:
  - *Rapid Code Quality Analyzer (RCQA)* — IJISRT, Vol. 11, Issue 3, pp. 3337–3340 · DOI: [10.38124/ijisrt/26mar1929](https://doi.org/10.38124/ijisrt/26mar1929?utm_source=chatgpt.com)
  - *AI-Powered Food Mood Prediction* — IJRPA, Vol. 01, Issue 07, pp. 01–06 · DOI: [10.1555/ijrpa.7714](https://doi.org/10.1555/ijrpa.7714?utm_source=chatgpt.com)

### `07` Certifications + Leadership
- Balanced dual-column layout:
  - **Certifications & Training (`#certifications`):**
    - *AI Tools and Claude Workshop* (August 2026) — Claude, Prompt Engineering, Generative AI.
    - *Data Analytics Using Python and SQL* (July 2026) — Data cleaning, visualization, SQL analysis.
  - **Leadership Experience (`#leadership`):**
    - *Volunteer – IT Fest Hackathon* (March 2025) · SEA College of Science, Commerce and Arts, Bengaluru — Assisted 100+ participants, rule briefings, and coordination.

### `08` Contact
- Editorial closing banner: `LET'S BUILD SOMETHING MEANINGFUL.`
- Introductory text inviting collaboration with recruiters, engineers, and innovation teams.
- Dual CTAs: `GET IN TOUCH` (`mailto:vijay0103.v@gmail.com`) and `VIEW MY PROJECTS` (`#projects`).
- 5 Verified Direct Channels:
  - **Email:** `vijay0103.v@gmail.com`
  - **Phone:** `+91 7996912263`
  - **Location:** Bengaluru, Karnataka, India
  - **LinkedIn:** [https://www.linkedin.com/in/vijay-v-link/](https://www.linkedin.com/in/vijay-v-link/)
  - **GitHub:** [https://github.com/vijay0103v-jpg/](https://github.com/vijay0103v-jpg/)
- Minimal editorial footer with back-to-top shortcut and dynamic copyright year.

---

## 🛡️ Profile Verification

- **Email:** `vijay0103.v@gmail.com`
- **Phone:** `+91 7996912263`
- **Location:** Bengaluru, Karnataka, India
- **LinkedIn:** [https://www.linkedin.com/in/vijay-v-link/](https://www.linkedin.com/in/vijay-v-link/)
- **GitHub:** [https://github.com/vijay0103v-jpg/](https://github.com/vijay0103v-jpg/)
