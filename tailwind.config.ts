import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366f1', // Indigo
          light: '#818cf8',
          dark: '#4f46e5',
        },
        secondary: {
          DEFAULT: '#ec4899', // Pink
          light: '#f472b6',
          dark: '#db2777',
        },
        ignition: {
          DEFAULT: '#fbbf24', // Golden yellow
          light: '#fcd34d',
          dark: '#f59e0b',
          glow: '#fbbf2480',
        },
        space: {
          DEFAULT: '#0a0e27', // Deep navy
          light: '#1a1f3a',
          dark: '#050812',
        },
        background: {
          DEFAULT: '#fafafa',
          light: '#ffffff',
          dark: '#1a1a1a',
        },
        accent: {
          DEFAULT: '#6366f1',
          light: '#818cf8',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
      },
      animation: {
        'rocket': 'rocket 2s ease-out forwards',
        'smoke': 'smoke 2s ease-out forwards',
      },
      keyframes: {
        rocket: {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '1' },
          '100%': { transform: 'translateY(-100vh) scale(0.3)', opacity: '0' },
        },
        smoke: {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '0.6' },
          '100%': { transform: 'translateY(-50vh) scale(2)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
export default config

