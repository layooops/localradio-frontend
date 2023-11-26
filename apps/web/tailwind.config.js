/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-right-grotesk)', ...defaultTheme.fontFamily.sans],
      },
      fontWeight: {},
      colors: {
        primary: '#dee5c6',
        secondary: {
          light: '#3e835a',
          dark: '#236e42',
        },
        'gray-color': '#666a86',
        'red-color': '#ef4343',
      },
      screens: {
        xxxs: '250px',
        xxs: '500px',
        '3xl': '1400px',
        '4xl': '1800px',
        '5xl': '2000px',
        '6xl': '2200px',
      },
      animation: {
        'pulse-slow': 'pulseSlow 2s cubic-bezier(0.4, 0, 0.7, 1) infinite',
        'spin-slow': 'spin 2s linear infinite',
      },
      boxShadow: {
        't-sm': '0 0 8px 0 rgba(0, 0, 0, 0.05)',
      },
      borderRadius: {
        'sm-clamp': 'clamp(4px, 5vw, 8px)',
      },
      keyframes: {
        pulseSlow: {
          '0%, 100%': { opacity: '1' },
          '55%': { opacity: '0.85' },
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
