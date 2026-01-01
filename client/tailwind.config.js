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
                    // Warmer, more readable Yellow (Gold/Amber)
                    yellow: {
                        light: '#FEF9C3', // yellow-100
                        DEFAULT: '#FACC15', // yellow-400
                        dark: '#A16207',   // yellow-700 (for text)
                    },
                    // Friendlier Blue (Sky)
                    blue: {
                        light: '#E0F2FE', // sky-100
                        DEFAULT: '#38BDF8', // sky-400
                        dark: '#0369A1',   // sky-700 (for text)
                    },
                    // Soft but visible Pink
                    pink: {
                        light: '#FCE7F3', // pink-100
                        DEFAULT: '#F472B6', // pink-400
                        dark: '#BE185D',   // pink-700 (for text)
                    },
                    // Fresh Green
                    green: {
                        light: '#DCFCE7', // green-100
                        DEFAULT: '#4ADE80', // green-400
                        dark: '#15803D',   // green-700 (for text)
                    },
                    white: '#FAFAFA',  // Background
                    text: {
                        primary: '#1E293B', // slate-800
                        secondary: '#475569', // slate-600
                        muted: '#94A3B8', // slate-400
                    }
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
                '4xl': '2.5rem',
            },
            boxShadow: {
                'soft': '0 10px 40px -10px rgba(0,0,0,0.08)',
                'glow': '0 0 20px rgba(250, 204, 21, 0.3)',
            }
        },
    },
    plugins: [],
}
