/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['selector', '[data-theme="dark"]'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff4f31',
        dark: {
          900: '#0d0d0d',
          800: '#141414',
          700: '#1c1c1c',
          600: '#262626',
          500: '#333333'
        },
        muted: '#8e8e8e',
        light: '#f7f7f7'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        sans: ['Fustat', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Season Mix"', 'Georgia', 'serif'],
        display: ['"Season Mix"', 'serif'],
        editorial: ['"Season Mix"', 'serif']
      },
      borderRadius: {
        'default': '1rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem'
      },
      transitionTimingFunction: {
        'expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'fluid': 'cubic-bezier(0.16, 1, 0.3, 1)'
      }
    },
  },
  plugins: [],
}
