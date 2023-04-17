/** @type {import('tailwindcss').Config} */
export default {
  content: ['./**/*.{html,js}', './**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        main: '#00040F',
        'main-gradient':
          'linear-gradient(110.53deg, #FFFFFF -265.46%, #14101D 96.75%)',
        'accent-gradient':
          'linear-gradient(157.81deg, #DEF9FA -43.27%, #BEF3F5 -21.24%, #9DEDF0 12.19%, #7DE7EB 29.82%, #5CE1E6 51.94%, #33BBCF 90.29%);',
      },
    },
  },
  plugins: [],
};
