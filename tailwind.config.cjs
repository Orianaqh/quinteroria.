/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'black': '#333334',
        'beige': '#f4eee2',
        'orange': '#df5729',
        'blackBlack': '#000000',
        'green': '#84a98c',
        'rosa': '#e7a5be',
        'rosaTwo': '#f89297'
      },
      fontFamily: {
        'body': ['Martian Mono'],
        'jobsy': ['Jost'],
      },
      boxShadow: {
        'inner2': 'inset 0 2px 4px 0 rgb(1 1 1 / 1)',
        'inner': 'inset 0 2px 4px 0 rgb(1 1 1 / 0.5)'
      },
    },
  },
  plugins: [],
}
