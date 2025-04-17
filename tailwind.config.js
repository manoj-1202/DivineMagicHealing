/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Cormorant Garamond"'],
        title:['"Libre Baskerville"'],
        body: ['"Open Sans"', 'sans-serif'],
      },
      colors: {
        allBg:'#e7c4a2',
      },
    },
  },
  plugins: [],
}
