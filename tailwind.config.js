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
                sans: ['Inter', 'Pretendard', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            }
        },
    },
    plugins: [],
}
