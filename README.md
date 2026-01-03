# 🚀 Ashish Gusain | AI Engineer Portfolio

<div align="center">

![Portfolio Banner](https://img.shields.io/badge/Portfolio-Cosmic%20Theme-8B5CF6?style=for-the-badge&logo=react&logoColor=white)

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Site-3B82F6?style=for-the-badge)](https://agusain2001.github.io/PortFolio/)
[![GitHub](https://img.shields.io/badge/GitHub-agusain2001-181717?style=for-the-badge&logo=github)](https://github.com/agusain2001)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/ashish-gusain-aa279a280/)

*A stunning, interactive portfolio website with a Cosmic/Space Explorer theme*

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-FF0055?logo=framer&logoColor=white)

</div>

---

## ✨ Features

### 🎨 Visual Experience
- **Cosmic/Space Explorer Theme** - Deep space backgrounds with twinkling stars and nebula effects
- **Dark/Light Mode Toggle** - Seamlessly switch between cosmic dark and celestial light themes
- **Interactive Particle Background** - Stars react to mouse movement, forming constellations
- **Custom Cursor Trail** - Nebula-colored particles follow your cursor
- **Parallax Scroll Effects** - Floating orbs and geometric shapes with depth

### 🛠️ Technical Highlights
- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **TypeScript** - Type-safe codebase for better maintainability
- **Framer Motion Animations** - Smooth, physics-based animations throughout
- **SEO Optimized** - Meta tags, semantic HTML, and proper heading structure
- **Performance Focused** - Lazy loading, optimized assets, and efficient rendering

### 🤖 AI Integration
- **Gemini AI Chatbot** - Interactive AI assistant powered by Google's Gemini API
- **Context-Aware Responses** - Chatbot knows about Ashish's skills, projects, and experience

### 📊 Live Data
- **GitHub Stats Integration** - Real-time repository and contribution data
- **Animated Counters** - Dynamic statistics with scroll-triggered animations

---

## 🖼️ Sections

| Section | Description |
|---------|-------------|
| **🌟 Hero** | Animated introduction with typewriter effect and floating planets |
| **👨‍🚀 Mission Profile** | About section with bio, highlights, and animated stats |
| **🛸 Tech Universe** | Skills organized as cosmic categories (AI/ML Nebula, LLM Galaxy, etc.) |
| **🚀 Space Missions** | Project showcase with 3D tilt cards and gradient effects |
| **📊 Mission Control** | GitHub statistics with theme-aware contribution graphs |
| **📡 Establish Contact** | Contact form and social links with cosmic styling |
| **🛸 AI Co-Pilot** | Floating chatbot for interactive Q&A |

---

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI library with hooks
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library

### Build Tools
- **Vite** - Next-generation frontend tooling
- **PostCSS** - CSS transformations
- **ESLint** - Code linting

### APIs & Services
- **Google Gemini AI** - Chatbot responses
- **GitHub API** - Live statistics
- **GitHub Readme Stats** - Contribution visualizations

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/agusain2001/PortFolio.git

# Navigate to project directory
cd PortFolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Environment Variables

Create a `.env` file in the root directory for the AI chatbot:

```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

> **Note:** The chatbot will prompt for an API key if not provided in `.env`

---

## 📁 Project Structure

```
PortFolio/
├── public/
│   └── favicon.svg          # Site favicon
├── src/
│   ├── components/
│   │   ├── About.tsx         # Mission Profile section
│   │   ├── Chatbot.tsx       # AI Co-Pilot chatbot
│   │   ├── Contact.tsx       # Contact form & info
│   │   ├── CursorTrail.tsx   # Custom cursor effects
│   │   ├── Footer.tsx        # Site footer
│   │   ├── GitHubStats.tsx   # GitHub statistics
│   │   ├── Hero.tsx          # Hero section
│   │   ├── ParticleBackground.tsx  # Star field canvas
│   │   ├── Projects.tsx      # Project showcase
│   │   ├── ScrollEffects.tsx # Parallax effects
│   │   ├── ScrollProgress.tsx # Reading progress bar
│   │   ├── TechStack.tsx     # Skills/technologies
│   │   └── ThemeToggle.tsx   # Dark/Light switch
│   ├── context/
│   │   └── ThemeContext.tsx  # Theme state management
│   ├── hooks/
│   │   ├── useGemini.ts      # Gemini AI integration
│   │   ├── useScrollAnimation.ts  # Scroll animations
│   │   └── useTypewriter.ts  # Typewriter effect
│   ├── App.tsx               # Main application
│   ├── index.css             # Global styles & themes
│   └── main.tsx              # Entry point
├── index.html                # HTML template
├── tailwind.config.js        # Tailwind configuration
├── vite.config.ts            # Vite configuration
└── package.json              # Dependencies
```

---

## 🎨 Color Palette

### Dark Mode (Cosmic Space)
| Color | Hex | Usage |
|-------|-----|-------|
| Deep Space | `#0a0e27` | Primary background |
| Space Mid | `#1a1f3a` | Card backgrounds |
| Nebula Purple | `#8B5CF6` | Primary accent |
| Cosmic Blue | `#3B82F6` | Secondary accent |
| Solar Orange | `#F59E0B` | Highlight accent |
| Star Glow | `#E0E7FF` | Text color |

### Light Mode (Celestial Day)
| Color | Hex | Usage |
|-------|-----|-------|
| Light BG | `#F8FAFC` | Primary background |
| Card White | `#FFFFFF` | Card backgrounds |
| Nebula Purple | `#7C3AED` | Primary accent |
| Cosmic Blue | `#2563EB` | Secondary accent |
| Text Primary | `#0F172A` | Main text |

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Optimizations |
|------------|-------|---------------|
| Mobile | < 640px | Stacked layouts, hidden cursor effects |
| Tablet | < 768px | 2-column grids, adjusted spacing |
| Desktop | < 1024px | Full experience with all effects |
| Large | > 1280px | Maximum content width |

---

## 🔧 Available Scripts

```bash
# Development server with hot reload
npm run dev

# Type checking
npm run type-check

# Lint code
npm run lint

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🌐 Deployment

### GitHub Pages

```bash
# Build the project
npm run build

# Deploy to GitHub Pages (manual)
# Upload contents of 'dist' folder
```

### Vercel / Netlify
Simply connect your GitHub repository - auto-deployment is supported!

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🤝 Connect With Me

<div align="center">

[![Email](https://img.shields.io/badge/Email-2001.ashish.official@gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:2001.ashish.official@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-ashish--gusain-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ashish-gusain-aa279a280/)
[![GitHub](https://img.shields.io/badge/GitHub-agusain2001-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/agusain2001)
[![Twitter](https://img.shields.io/badge/Twitter-@2001agusain-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://x.com/2001agusain)

</div>

---

<div align="center">

**Made with ❤️ and ☕ by Ashish Gusain**

*Crafted among the stars 🌌*

</div>
