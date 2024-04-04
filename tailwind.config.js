/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#213E60 ',
        'secondary': '#94b6ef',
        'accent': '#e68c30',
        'background': '#f4f2ef',
        'secondary 2': '#212830'
      },
    },
  },
  plugins: [],
}