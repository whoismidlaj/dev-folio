/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#FBE62F",
        "black": "#010101",
      },
      fontFamily: {
          "sans": ['Bai Jamjuree', 'sans-serif']
      }
  },
  },
  plugins: [],
}

