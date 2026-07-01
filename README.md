#  Portfolio

A single-page, dark-mode portfolio website for **S Asfiya Anjum**, Data Analyst — built with plain HTML5, CSS3, and vanilla JavaScript. No frameworks, no build step, no dependencies to install.

🔗 **Live site:** _add your deployed link here once hosted_

---

## Overview

This is a self-contained `index.html` file — everything (styles, scripts, and even the downloadable resume) is embedded in one document. Clone it, open it, or deploy it as-is on any static host.

### Sections
- **Hero** — headline, quick stats, animated SQL/chart visual
- **About** — profile summary and core areas of expertise
- **Experience** — internship timeline with achievements
- **Projects** — Heart Disease Predictor, Sales Data Pipeline, EduSphere (each linked to its GitHub repo)
- **Skills Matrix** — categorized technical skills
- **Education** — degree and CGPA
- **Contact** — direct email / phone / LinkedIn / GitHub cards (no form, no backend required)

## Features

- 🌑 Dark theme with layered surfaces and colored accents (blue, teal, amber, violet)
- 📱 Fully responsive (mobile, tablet, desktop) with an animated hamburger menu
- ✨ Scroll-triggered reveal animations via `IntersectionObserver`
- 📄 One-click resume download — the PDF is embedded as a base64 data URI, so it works even without a separate file on the server
- ♿ Accessible: visible focus states, `prefers-reduced-motion` respected, semantic HTML
- ⚡ Zero dependencies beyond Google Fonts (Inter + JetBrains Mono)

## Tech Stack

- HTML5 (semantic markup)
- CSS3 (custom properties, Grid, Flexbox, no preprocessor)
- Vanilla JavaScript (no frameworks/libraries)

## Getting Started

### Run locally
```bash
git clone https://github.com/ASFIYA11/<your-repo-name>.git
cd <your-repo-name>
open index.html   # or just double-click the file
```
No install step needed — it's a static file.


## Project Structure
```
.
├── index.html   # entire site: markup, styles, script, and embedded resume
└── README.md
```

## Updating Content

All content lives in `index.html`:
- **Resume file**: replace the base64 string in the two `Download Resume` buttons if you update your resume (search for `data:application/pdf;base64,`).
- **Projects**: edit the `<div class="proj-card">` blocks in the Projects section — update the repo links to point at your latest work.
- **Contact info**: update the `mailto:`, `tel:`, LinkedIn, and GitHub links in the Contact section's `.ccard` blocks.

