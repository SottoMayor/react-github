/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#161a1d',
        secondary: '#0b090a',
        tertiary: '#ffba08',
        white: '#ffffff',
        gray: '#dee2e6'
      }
    },
  },
  plugins: [],
}
