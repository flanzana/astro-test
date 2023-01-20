const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: colors.violet,
        secondary: colors.pink,
      },
      gridTemplateColumns: {
        cards: 'repeat(auto-fit, minmax(24ch, 1fr))',
      },
    },
  },
  plugins: [],
}
