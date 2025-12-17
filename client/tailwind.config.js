/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                mimi: {
                    yellow: '#FDFD96', // Primary
                    blue: '#AEC6CF',   // Secondary
                    pink: '#FFB7B2',   // Accent
                    green: '#77DD77',  // Accent
                    white: '#FAFAFA',  // Background
                }
            },
            fontFamily: {
                heading: ['"Fredoka"', 'sans-serif'],
                body: ['"Nunito"', 'sans-serif'],
            },
            borderRadius: {
                'xl': '1rem',
                '2xl': '1.5rem',
                '3xl': '2rem',
            }
        },
    },
    plugins: [],
}
