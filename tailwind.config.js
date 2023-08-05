/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      colors :{
        "white-900" : "rgba(255,255,255,1)",
        "white-800" : "rgba(255,255,255,0.8)",
        "green-800": "rgba(0, 102, 52, 0.9)",
        "yellow-500": "rgba(255,255,255,0.8)"
      }
    },
  },
  plugins: [],
}

