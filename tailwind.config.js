/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
     ],

  theme: {
    extend: {
      colors: {
        baseCard: "#212225",
        frontCard: "#36373a",
      }
    },
  },
  plugins: [],
}

