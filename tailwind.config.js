/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        lato : 'Lato-Black',
        poppins : 'Poppins-Regular',
      }
    },
  },
  plugins: [],
}

