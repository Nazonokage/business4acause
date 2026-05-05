/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sedona: {
          burgundy: '#75000C',
          chili: '#8D261F',
          flax: '#D4CFAE',
          mushroom: '#F0E5C1',
          'mushroom-bright': '#FAF3DC', // used in Navbar as --mushroom-bright
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        display: ['Playfair Display', 'Georgia', 'serif'], // used in Navbar logo
        body: ['Lato', 'system-ui', 'sans-serif'],         // used in Navbar text
      },
    },
  },
  plugins: [],
}