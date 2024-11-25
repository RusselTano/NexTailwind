const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0px)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.4s ease-in-out',
      },
    },
  },
  plugins: [],
}
