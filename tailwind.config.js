/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [ "./app/**/*.{js,jsx,ts,tsx}"], // ensure the path to the app folder is correct
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}