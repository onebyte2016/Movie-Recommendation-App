/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  // content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}"],
  content: ["./App/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#030014',
        secondary: '#151312',
        light:{
          100: '#D6CFF',
          200:'#A8B5DB',
          300:'#9CA4AB',
        },
        dark:{
          100:'#221f3d',
          200:'#0f0d23',
        },
        accent: '#AB8BFF',
      }
    },
  },
  plugins: [],
}

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

