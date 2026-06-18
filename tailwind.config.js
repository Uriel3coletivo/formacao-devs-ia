/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'agi-blue': '#0064f5',
        'agi-navy': '#000f44',
        'agi-blue-medium': '#0033b0',
        'agi-green': '#77df40',
      },
      fontFamily: {
        'agibank': ['Inter', 'sans-serif'], // Placeholder, depois você muda
      },
    },
  },
  plugins: [],
}
