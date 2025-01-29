/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        move: 'move 5s linear infinite', 
      },
      keyframes: {
        move: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(50px)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      colors: {
        mainbackcolor: '#faffff',
      },
    },
  },
  plugins: [],
}
