const { Montserrat } = require('next/font/google');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
        'segoe-ui': ['segoe-ui', 'sans-serif'],
        'hack': ['hack', 'sans-serif'],
        'poppins': ['poppins', 'sans-serif']
      },
      colors: {
        sage: '#758f64',
        darksage: '#415642',
        lightsage: '#AEC6A3'
      },
    },
  },
  plugins: [],
};