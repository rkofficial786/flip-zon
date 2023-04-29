/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customDark: '#474747',
        customWhite: '#fcfcfc',
        customViloet: '#ae2af5',
        customlightDark: '#7c7a7d',
        customTooDark: '#161417',
        customSky: '#3eebf7',
        customelightdarker:'#100f0f',
        customemediumdark:'#141313',
      },
    },
  },
  plugins: [],
}