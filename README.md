# 🚀 Prajwal's Developer Portfolio

<div align="center">

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![EmailJS](https://img.shields.io/badge/EmailJS-Contact_Form-FF6B35?style=for-the-badge)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**A modern, animated developer portfolio built with React 19 + Vite — featuring particle animations, smooth transitions, project showcases, and a working contact form.**

[🌐 Live Demo](#-live-demo) · [✨ Features](#-features) · [🚀 Getting Started](#-getting-started) · [📁 Project Structure](#-project-structure)

</div>

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Customization](#-customization)
- [License](#-license)

---

## 🧠 Overview

This is my personal developer portfolio — customized and built on top of a React + Vite foundation to showcase my projects, skills, and experience. It features **particle background animations**, **Framer Motion page transitions**, a **functional EmailJS contact form**, and a fully **responsive dark/light theme** layout.

---

## ✨ Features

- 🎇 **Particle Background** — Dynamic animated particles via `tsParticles`
- 🎞️ **Smooth Animations** — Page and element transitions powered by `Framer Motion`
- 📬 **Working Contact Form** — Sends real emails using `EmailJS` (no backend needed)
- 🌙 **Theme Support** — Dark/Light mode via `useTheme` custom hook
- 📱 **Fully Responsive** — Mobile-first design with Tailwind CSS
- 🧭 **Multi-page Routing** — Clean navigation with `React Router DOM v7`
- 🔔 **Toast Notifications** — Form feedback via `React Toastify`
- ⬆️ **Scroll To Top** — Smooth scroll-to-top component
- 💼 **Projects Showcase** — Dedicated projects page with cards
- 🛠️ **Skills Section** — Visual display of technical skills
- 👤 **About Me** — Personal intro and background section
- ❌ **Custom 404 Page** — Friendly error page for unknown routes

---

## 🛠️ Tech Stack

| Category | Technology | Version |
|----------|------------|---------|
| **Framework** | React | 19.0.0 |
| **Build Tool** | Vite | 6.2.0 |
| **Styling** | Tailwind CSS | 3.4.17 |
| **Animations** | Framer Motion | 12.4.7 |
| **Particles** | tsParticles + react-tsparticles | 2.12.2 |
| **Routing** | React Router DOM | 7.2.0 |
| **Contact Form** | EmailJS Browser | 4.4.1 |
| **Icons** | React Icons | 5.5.0 |
| **Notifications** | React Toastify | 11.0.5 |
| **Linting** | ESLint | 9.21.0 |

---

## 📁 Project Structure

```
portfolio/
│
├── public/
│   ├── _redirects                    # Netlify routing fix
│   ├── banner_pic.png                # Banner image
│   ├── banner_pic_red.png            # Alternate banner
│   ├── favicon.png                   # Site favicon
│   ├── internship-matcher.png        # Project screenshot
│   ├── mailbox.png                   # Contact section asset
│   ├── my-medical-assistance.png     # Project screenshot
│   ├── my-picture.png                # Profile photo
│   ├── no-signal.gif                 # 404 page animation
│   ├── prajwal.pdf                   # Downloadable resume
│   ├── recommendation.webp           # Project screenshot
│   └── spam_detector.jpg             # Project screenshot
│
├── src/
│   ├── assets/
│   │   ├── Tailwind_CSS_Logo.png
│   │   ├── expressjs_icon.png
│   │   └── logo.png
│   │
│   ├── components/
│   │   ├── About.jsx                 # About me section
│   │   ├── Contact.jsx               # EmailJS contact form
│   │   ├── ErrorPage.jsx             # Custom 404 page
│   │   ├── Footer.jsx                # Site footer
│   │   ├── Home.jsx                  # Hero / landing section
│   │   ├── Loader.jsx                # Loading screen
│   │   ├── Navbar.jsx                # Navigation bar
│   │   ├── ParticlesBackground.jsx   # tsParticles background
│   │   ├── Projects.jsx              # Projects showcase
│   │   ├── ScrollToTop.jsx           # Scroll-to-top button
│   │   └── Skill.jsx                 # Skills display
│   │
│   ├── hooks/
│   │   └── useTheme.js               # Dark/light theme hook
│   │
│   ├── App.jsx                       # Root component & routes
│   ├── index.css                     # Global styles
│   └── main.jsx                      # React entry point
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18+
- **npm** or **yarn**

---

### 1. Clone the Repository

```bash
git clone https://github.com/prajwal5065/portfolio.git
cd portfolio
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Set Up EmailJS (for Contact Form)

1. Create a free account at [emailjs.com](https://www.emailjs.com/)
2. Create an **Email Service** and **Email Template**
3. Update `Contact.jsx` with your credentials:

```js
emailjs.sendForm(
  'YOUR_SERVICE_ID',      // EmailJS Service ID
  'YOUR_TEMPLATE_ID',     // EmailJS Template ID
  formRef.current,
  'YOUR_PUBLIC_KEY'       // EmailJS Public Key
)
```

---

### 4. Start Development Server

```bash
npm run dev
```

App runs at `http://localhost:5173`

---

### 5. Build for Production

```bash
npm run build
```

---

### 6. Preview Production Build

```bash
npm run preview
```

---

## 🎨 Customization

| What to change | Where to change it |
|---|---|
| Your name & bio | `src/components/Home.jsx`, `About.jsx` |
| Profile photo | `public/my-picture.png` (replace file) |
| Resume / CV | `public/prajwal.pdf` (replace file) |
| Projects list | `src/components/Projects.jsx` |
| Skills list | `src/components/Skill.jsx` |
| Particle style | `src/components/ParticlesBackground.jsx` |
| Colors & theme | `tailwind.config.js` |
| Contact form | `src/components/Contact.jsx` + EmailJS config |
| Social links | `src/components/Footer.jsx`, `Navbar.jsx` |

---

## 🌐 Deployment

This portfolio is optimized for **Netlify** deployment (note the `_redirects` file in `public/` for React Router support).

```bash
# Build and deploy
npm run build
# Upload the dist/ folder to Netlify
# or connect your GitHub repo for auto-deploy
```

For **Vercel**:
```bash
npm install -g vercel
vercel --prod
```

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

> 💡 This portfolio was customized from an existing open-source React portfolio template. Credits to the original author. Modifications include personal content, project showcases, EmailJS integration, and UI customizations.

---

<div align="center">

Made with ❤️ by [Prajwal](https://github.com/prajwal5065)

⭐ Star this repo if you found it helpful!

</div>
