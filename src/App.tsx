import { useTheme } from './context/ThemeContext';
import ParticleBackground from './components/ParticleBackground';
import ScrollProgress from './components/ScrollProgress';
import ScrollEffects from './components/ScrollEffects';
import CursorTrail from './components/CursorTrail';
import ThemeToggle from './components/ThemeToggle';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import GitHubStats from './components/GitHubStats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

export default function App() {
    const { theme } = useTheme();

    // Check if device supports hover (not mobile)
    const isTouchDevice = typeof window !== 'undefined' &&
        ('ontouchstart' in window || navigator.maxTouchPoints > 0);

    return (
        <div className={`relative min-h-screen ${!isTouchDevice ? 'cursor-none' : ''}`}>
            {/* Background effects - reduced in light mode via CSS */}
            <ParticleBackground />

            {/* Parallax scroll effects - hidden on mobile via CSS */}
            <ScrollEffects />

            {/* Custom cursor trail - only on non-touch devices */}
            {!isTouchDevice && <CursorTrail />}

            {/* Theme toggle button */}
            <ThemeToggle />

            {/* Scroll progress */}
            <ScrollProgress />

            {/* Main content */}
            <main>
                <Hero />
                <About />
                <TechStack />
                <Projects />
                <GitHubStats />
                <Contact />
            </main>

            {/* Footer */}
            <Footer />

            {/* AI Chatbot */}
            <Chatbot />
        </div>
    );
}
