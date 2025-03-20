/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'silkscreen': ['Silkscreen', 'cursive'],
        'iceland': ['Iceland', 'cursive'],
        'chakra': ['Chakra Petch', 'sans-serif'],
        'pixel': ['Press Start 2P', 'cursive'],
      },
    },
  },
  plugins: [],
}

