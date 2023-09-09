/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/layouts/**/*.{handlebars, js}",
    "./views/**/*.{handlebars, js}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#007bff',
        'secondary': '#ff9900',
      },
      fontFamily: {
        main: ['Archivo, sans-serif'],
        secondary: ['Inter, sans-serif'],
      },
    },
  },
  plugins: [],
}
