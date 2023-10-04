/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`./src/pages/**/*.{js,jsx,ts,tsx}`, `./src/components/**/*.{js,jsx,ts,tsx}`],
  theme: {
    extend: {
      colors: {},
      height: {
        450: 450,
        500: 500,
      },
      width: {
        450: 450,
      },
    },
  },
  plugins: [],
};
