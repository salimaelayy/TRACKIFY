/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#00171f ',
        'secondary': '#136f63',
        'accent': '#ffc857',
        'background': '#f0f3bd',
        'secondary_2': '#003459'
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}