/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{hbs,html,js}'],
  theme: {
    extend: {
      fontFamily: {
        sf: [`SF UI Display`, `sans-serif`],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
