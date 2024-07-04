/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**.js",
    "./src/*.js",
    "./src/**/*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'circular-std': ['Circular-Std-Book', 'sans-serif'],
        'nunito': ['Nunito'],
      },
      inset: {
        '100': '100%',
      },

      padding: {
        '120': '120px',
      },

      colors: {
        'col-blue': '#417FEF',
        'col-redlight': '#FE7A7B'
      }
    },
  },
  plugins: [],
}

