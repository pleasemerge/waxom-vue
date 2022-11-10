const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        100: '30rem'
      },
      colors: {
        lime: colors.lime,
        rose: colors.rose,
        warmgray: colors.warmGray,
        orange: colors.orange,
        amber: colors.amber,
        primary: {
          DEFAULT: '#998675',
          light: '#b59e8a',
          dark: '#4E3427',
          darkest: '#211B19'
        },
        secondary: {
          DEFAULT: '#FBFAF8'
        }
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.3xl') },
        'h2': { fontSize: theme('fontSize.2xl') },
        'h3': { fontSize: theme('fontSize.xl') }
      })
    })
  ],
}