/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // Define tus colores personalizados aquí
        'millbrook': {
          '50': '#f9f8ed',
          '100': '#efedd2',
          '200': '#e1daa7',
          '300': '#d0c174',
          '400': '#c1ab4e',
          '500': '#b29740',
          '600': '#997935',
          '700': '#7b5b2d',
          '800': '#674b2c',
          '900': '#563e28',
          '950': '#332215',
      },

      },
    },
  },
  plugins: [],
}
