const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './index.html',
    './src/**/*.{jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          500: '#8257E5',
          300: '#996DFF'
        },
        primary: {
          dark: colors.zinc[100],
          light: colors.zinc[800]
        },
        secondary: {
          dark: colors.zinc[400],
          light: colors.zinc[500]
        },
        onTooltip: {
          dark: colors.zinc[800],
          light: colors.zinc[100]
        },
        surface: {
          primary: {
            dark: colors.zinc[900],
            light: colors.white
          },
          secondary: {
            dark: colors.zinc[800],
            light: colors.zinc[100],
            hover: {
              dark: colors.zinc[700],
              light: colors.zinc[200]
            }
          }
        },
        stroke: {
          dark: colors.zinc[600],
          light: colors.zinc[300]
        },
        tooltip: {
          dark: colors.zinc[100],
          light: colors.zinc[800]
        }
      }
    },

    fontFamily: {
      sans: ['Inter', 'sans-serif']
    }
  },
  plugins: [
    require('tailwind-scrollbar')
  ]
};
