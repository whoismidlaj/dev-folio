/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#eddedf",
        "black": "#2f3d7e",
      },
      fontFamily: {
          "sans": ['Bai Jamjuree', 'sans-serif']
      }
  },
  },
  plugins: [],
}

