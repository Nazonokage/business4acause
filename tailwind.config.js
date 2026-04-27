/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sedona: {
          burgundy: '#75000C',
          chili: '#8D261F',
          flax: '#D4CFAE',
          mushroom: '#F0E5C1',
        },
      },
    },
  },
  plugins: [],
}

