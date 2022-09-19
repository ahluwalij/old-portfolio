/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
],

theme: {
  extend: {
    colors: {
      primary: '#0ea5e9',
      secondary: '#494c7d',
    },
    animation: {
      text: 'text 2s ease infinite',
      cursor: 'cursor .6s linear infinite alternate',
      type: 'type 1.8s ease-out 0.8s 1 normal both',
      'type-reverse': 'type 1.8s ease-out   both',
    },
    fontFamily: {
      lobster: ["Lobster", "cursive"],
    },
    keyframes: {
      type: {
        '0%': { width: '0ch' },
        '5%, 10%': { width: '1ch' },
        '15%, 20%': { width: '2ch' },
        '25%, 30%': { width: '3ch' },
        '35%, 40%': { width: '4ch' },
        '45%, 50%': { width: '5ch' },
        '55%, 60%': { width: '6ch' },
        '65%, 70%': { width: '7ch' },
        '75%, 80%': { width: '8ch' },
        '85%, 90%': { width: '9ch' },
        '95%': { width: '10ch' },
      },
      text: {
        '0%, 100%': {
           'background-size':'200% 200%',
            'background-position': 'left center'
        },
        '50%': {
           'background-size':'200% 200%',
            'background-position': 'right center'
        }
    },
    },
   
  },
},
}
