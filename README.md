# ⚡ Nikhil Kumar Giri (Vishwa) - Developer Portfolio

A modern, responsive, high-performance personal portfolio website built with a clean tech-focused dark mode aesthetic, subtle neon cyan and purple accents, smooth scroll animations, and a no-code visual content editor.

---

## 🚀 Sections Included (In Exact Order)

1. **Hero Section**
   - Headline: *"Hi, I'm Nikhil Kumar Giri"*
   - Subtitle: *"BCA Student specializing in AI & Data Analytics | Full-Stack & UI Developer"*
   - Quick action buttons: *"View Projects"* and *"Contact Me"*
   - Direct Social Links:
     - [GitHub: @ctrlvishwa](https://github.com/ctrlvishwa)
     - [LinkedIn: Nikhil Giri](https://www.linkedin.com/in/nikhil-giri-808b9a419/)
     - [Instagram: @ctrl_vishwa](https://www.instagram.com/ctrl_vishwa/)

2. **About Me Section**
   - BCA candidate at **Teerthanker Mahaveer University** graduating in 2027.
   - Core passion for AI-driven applications, clean UIs, and full-stack solutions.
   - Interactive key milestone cards highlighting graduation year, academic focus, and UI/UX craft.

3. **Skills Section**
   - **Languages**: Python, JavaScript, Golang.
   - **Frameworks & Tools**: React, Next.js, Streamlit, Flutter.
   - Additional domain badges for LLM APIs, Render deployments, and Data Analytics.

4. **Projects Section (Featured Work Grid)**
   - **AI Bug Finder & Catcher**: AI-powered code auditing tool with deployed models on Render, LLM API integration, and automated vulnerability detection.
   - **Streamlit Analytics Dashboards**: Interactive data visualization UI for student dropout risk prediction and financial fraud anomaly classification.
   - **Enterprise Web Catalogs**: Production commercial platform for [remarkchemical.com](https://remarkchemical.com) and interface design systems for KVG2Chem Industries.
   - **LocalMart (Ongoing Project)**: Hyperlocal retail marketplace platform connecting local stores with neighborhood shoppers.

5. **Contact Section**
   - Direct Email: `nikhil1512006@gmail.com` (with one-click clipboard copy)
   - Direct Phone: `7255899651` / `+91 72558 99651` (with WhatsApp direct chat link)
   - Working-style interactive contact form with validation and `mailto:` action.
   - Sticky navigation bar with scroll spy and responsive mobile drawer.
   - Clean footer with social icons and 2026 copyright notice: `© 2026 Nikhil Kumar Giri (Vishwa). All rights reserved.`

---

## 🛠️ No-Code Content Management (Update Without Touching Code)

To satisfy the requirement of updating content anytime without touching code:
- **Visual Editor**: Click **"Update Info"** in the navigation bar or **"⚙️ Visual Content Editor"** in the footer (or press `Alt + E`). Edit any section directly in the browser and see instant live updates!
- **Data Configuration (`data.js`)**: All website content is decoupled into [`data.js`](./data.js). Edit fields in plain English, save, and reload.

Read [`HOW_TO_UPDATE.md`](./HOW_TO_UPDATE.md) for full instructions.

---

## 🚀 Publish with GitHub and Vercel

This is a static site, so it has no build or install step. The included
[`vercel.json`](./vercel.json) tells Vercel to publish the project root.

1. Create an empty repository on GitHub (do not add a README or other files).
2. From this project folder, run the following commands, replacing the URL
   with your repository's HTTPS or SSH URL:

   ```sh
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin <your-github-repository-url>
   git push -u origin main
   ```

3. Sign in at [Vercel](https://vercel.com), choose **Add New → Project**, and
   import the GitHub repository.
4. Keep the project root as the **Root Directory**, leave the framework as
   **Other**, and deploy. Vercel will redeploy automatically whenever you push
   changes to the connected branch.

Do not commit passwords, API keys, or other secrets. The `.gitignore` excludes
local Vercel state, environment files, and installed Node modules.

---

## 💻 Tech Stack

- **Semantic HTML5**: Accessible tags, responsive meta tags, OpenGraph attributes.
- **Modern CSS3**: Custom properties (variables), CSS grid, flexbox, glassmorphic backdrop filters, neon glow animations, responsive breakpoints.
- **Vanilla ES6+ JavaScript**: Zero dependencies, instant loading, smooth scrolling, clipboard API, localStorage data persistence.
- **Google Fonts**: Inter & JetBrains Mono.
