/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary)',
          dark: 'var(--primary-dark)',
          light: 'var(--primary-light)',
        },
        dark: {
          DEFAULT: 'var(--dark)',
          light: 'var(--dark-light)',
        },
        stroke: {
          DEFAULT: 'var(--stroke)',
          dark: 'var(--stroke-dark)',
        },
        boxdark: {
          DEFAULT: 'var(--boxdark)',
          light: 'var(--boxdark-light)',
        },
        bodydark: {
          DEFAULT: 'var(--bodydark)',
          light: 'var(--bodydark-light)',
        },
        brand: {
          500: '#3C50E0',
          600: '#1B2B8F',
          800: '#1B2B8F',
          950: '#1B2B8F',
        },
        error: {
          500: '#FF4B4B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 