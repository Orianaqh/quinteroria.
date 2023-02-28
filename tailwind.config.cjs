/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'black': '#333334',
        'beige': '#f4eee2',
        'orange': '#df5729',
        'blackBlack': '#000000'
      },
      fontFamily: {
        'body': ['Martian Mono']
      },
      boxShadow: {
        'inner2': 'inset 0 2px 4px 0 rgb(2 2 2 / 2)',
        'inner': 'inset 0 2px 4px 0 rgb(1 1 1 / 0.5)'
      },
    },
  },
  plugins: [],
}
