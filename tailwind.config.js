/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                intel: {
                    blue: '#0068B5',
                    dark: '#004A86',
                    green: '#C4D600', // Digital Readiness Green
                },
                neon: {
                    cyan: '#00F0FF',
                    purple: '#BC00FF',
                },
                deep: {
                    black: '#0A0A0A',
                    dark: '#121212',
                }
            },
            fontFamily: {
                sans: ['Pretendard', 'Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'shine': 'shine 1.5s linear infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                shine: {
                    '0%': { backgroundPosition: '200% center' },
                    '100%': { backgroundPosition: '-200% center' },
                }
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #0068B5 0deg, #00F0FF 180deg, #BC00FF 360deg)',
            },
            boxShadow: {
                'neon': '0 0 20px rgba(0, 240, 255, 0.2)',
                'primary': '0 0 30px rgba(0, 104, 181, 0.5)',
            }
        },
    },
    plugins: [],
}
