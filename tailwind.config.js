/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/pages/home/home.component.html', './src/app/sharepages/headbar/headbar.component.html'],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#2b2014',
      }
    },
  },
  plugins: [],
}

