// const colors = require('tailwindcss/colors');  //No es necesario en tailwind importar el modulo de colores ya que desde la version v3 los incluye.

/** @type {import('tailwindcss').Config} */
module.exports = {
  // eslint-disable-next-line prettier/prettier
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
