/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'deep-space': 'var(--deep-space)',
                'space-mid': 'var(--space-mid)',
                'nebula-purple': 'var(--nebula-purple)',
                'nebula-light': 'var(--nebula-light)',
                'cosmic-blue': 'var(--cosmic-blue)',
                'cosmic-light': 'var(--cosmic-light)',
                'stellar-white': 'var(--stellar-white)',
                'solar-orange': 'var(--solar-orange)',
                'solar-light': 'var(--solar-light)',
                'star-glow': 'var(--star-glow)',
            },
            fontFamily: {
                'sans': ['Inter', 'system-ui', 'sans-serif'],
                'mono': ['Fira Code', 'monospace'],
            },
            screens: {
                'xs': '375px',
                'sm': '640px',
                'md': '768px',
                'lg': '1024px',
                'xl': '1280px',
                '2xl': '1536px',
            },
            animation: {
                'float': 'float 8s ease-in-out infinite',
                'twinkle': 'twinkle 3s ease-in-out infinite',
                'shooting-star': 'shootingStar 3s linear infinite',
                'aurora': 'aurora 15s ease infinite',
                'orbit': 'orbit 20s linear infinite',
                'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
                'gradient': 'gradient 8s ease infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
                    '50%': { transform: 'translateY(-20px) rotate(3deg)' },
                },
                twinkle: {
                    '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
                    '50%': { opacity: '1', transform: 'scale(1.2)' },
                },
                shootingStar: {
                    '0%': { transform: 'translateX(-100px) translateY(-100px)', opacity: '1' },
                    '70%': { opacity: '1' },
                    '100%': { transform: 'translateX(1000px) translateY(1000px)', opacity: '0' },
                },
                aurora: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                orbit: {
                    '0%': { transform: 'rotate(0deg) translateX(100px) rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' },
                },
                pulseGlow: {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.4)' },
                    '50%': { boxShadow: '0 0 40px rgba(139, 92, 246, 0.8), 0 0 60px rgba(59, 130, 246, 0.4)' },
                },
                gradient: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
            },
        },
    },
    plugins: [],
}
