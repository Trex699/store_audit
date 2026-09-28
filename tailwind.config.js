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
        gold: {
          50: '#FFF9E5',
          100: '#FFF0BF',
          200: '#FFE08A',
          300: '#FFD155',
          400: '#FFC220',
          500: '#D4A017',
          600: '#B8860B',
          700: '#8B6508',
          800: '#5C4305',
          900: '#2E2203',
        },
        dark: {
          50: '#3A3A3A',
          100: '#2E2E2E',
          200: '#252525',
          300: '#1F1F1F',
          400: '#1A1A1A',
          500: '#151515',
          600: '#111111',
          700: '#0D0D0D',
          800: '#080808',
          900: '#000000',
        },
      },
      fontFamily: {
        sans: ['"Noto Sans Thai"', 'sans-serif'],
        heading: ['"Noto Sans Thai"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
