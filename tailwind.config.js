/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Caveat', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background:'#f78c6c',
        foreground:'#546E7A',
        comment:	'#888477',
        accent:	'#fff8ed',
        redish:	'#ff5370',
        orangish:	'#f78c6c',        
        yellowish:'#ffcb6b',
        greenish:	'#c3e88d',
        bluish:	'#82aaff',
        purplish:	'#c792ea',
      },
    },
  },
  plugins: [],
}

