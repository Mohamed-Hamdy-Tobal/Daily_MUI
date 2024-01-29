/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'main-bg': '#FAFBFB',
        'main-dark-bg': '#20232A',
        'secondary-dark-bg': '#33373E',
        'light-gray': '#F7F7F7',
        'half-transparent': 'rgba(0, 0, 0, 0.5)',
      },
      colors: {
        blueTheme: '#1a97f5',
        greenTheme: '#03c9d7',
        purpleTheme: '#7352ff',
        redTheme: '#ff5c8e',
        indigoTheme: '#1e4db7',
        orangeTheme: '#fb9678',
        salte: '#0f172a'
      },
      keyframes : {
        moveRight: {
          '0%' : {transform: 'translateX(0)'},
          '50%' : {transform: 'translateX(10px)'},
          '100%' : {transform: 'translateX(0)'},
        }
      },
      animation : {
        moveRight : 'moveRight 1s ease-in-out infinite', 
      },
      boxShadow: {
        menu: '0px 159px 95px rgba(13,12,34,0.01), 0px 71px 71px rgba(13,12,34,0.02), 0px 18px 39px rgba(13,12,34,0.02), 0px 0px 0px rgba(13,12,34,0.02)',
      },
      screens: {
        'xs': '400px',
      },
      maxWidth: {
        '10xl': '1680px'
      }
    },
  },
  plugins: [],
};