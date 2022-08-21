const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{html,js,ts,jsx,tsx,css}',
    '../../packages/**/*.{js,jsx,ts,tsx}',
  ],
  plugins: ['nativewind/tailwind/css'],
  important: 'html',
  theme: {
    extend: {
      colors: {
        primary: '#113B3C',
        secondary: '#F66B0E',
      },
    },
  },
}
