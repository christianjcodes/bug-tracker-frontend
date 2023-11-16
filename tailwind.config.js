/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {

  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  
  theme: {
    extend: {},
  },
  plugins: [],
}