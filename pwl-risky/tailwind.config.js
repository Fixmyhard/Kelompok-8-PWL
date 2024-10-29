/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#6366f1',
        secondary: '#818cf8',
      },
    },
  },
  content: [
    './*.html',
    './src/**/*.{html,js}',
  ],
};
