/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#4b3f72',
        secondary:'#ffc857',
        light:'#edfaea',
        dark:'#1f2041',
      }
    },
  },
  plugins: [],
}

