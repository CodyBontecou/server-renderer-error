/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    zIndex: {
      '-1': '-1',
      1000: '1000',
    },
    extend: {
      spacing: {
        22: '5.25rem',
        72: '18rem',
        84: '21rem',
        96: '24rem',
        215: '215px',
      },
      margin: {
        14: '3.25rem',
      },
      maxWidth: {
        356: '356px',
      },
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [],
}
