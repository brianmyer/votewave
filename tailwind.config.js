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
        fontMain: ['test'],
        fontSecondary: ['test'],
      },
    },
  },
  plugins: [],
}
