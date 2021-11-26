// tailwind.config.js
module.exports = {
  purge: [
    // TODO: 打包打開
    // './components/**/*.{vue,js}',
    // './layouts/**/*.vue',
    // './pages/**/*.vue',
    // './plugins/**/*.{js,ts}',
    // './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'landing-image': "url('@/assets/icon/landing-image.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
