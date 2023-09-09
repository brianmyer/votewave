/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/layouts/**/*.{handlebars, js}",
    "./views/**/*.{handlebars, js}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1800ff',
        'secondary': '#00a2ff',
      },
      fontFamily: {
        main: ['Syne, sans-serif'],
        secondary: ['Inter, sans-serif'],
      },
      boxShadow: {
        top: '0 0 10px #00000020',
      },
    },
  },
  plugins: [],
}
