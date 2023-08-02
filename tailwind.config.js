/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/html/home.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        "white": "rgba(255,255,255,0.8)",
        "purple": "#7000FF"
      }
    },
  },
  plugins: [],
}

