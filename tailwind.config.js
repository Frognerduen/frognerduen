/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        mocca: '#3B2C28',
        gold: '#C8A951'
      },
      fontFamily: {
        serif: ['"Times New Roman"', 'Georgia', 'serif'],
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif']
      }
    }
  },
  plugins: []
};