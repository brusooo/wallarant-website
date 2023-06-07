/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        camar: ["CAMAR", "cursive"]
      },
      backgroundColor : {
        palewhite : "#FFFAFE"
      }
    },
  },
  plugins: [],

}

