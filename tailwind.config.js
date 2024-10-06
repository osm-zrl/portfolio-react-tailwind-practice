/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'dark-grey': '#161616',
      'grey':'#1B1B1B',
      'border-grey':'#262626',
      'primary':'#F35034',
      'white':'#FFFFFF',
      'dimmed-white':'#C0C0C0',
      'eclipse-fill':'#2C2C2C',
      'exlipse-stroke':'#3F3E3E'
    },
    extend: {
     
    },
  },
  plugins: [],
}
