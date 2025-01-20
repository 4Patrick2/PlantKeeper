/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        white: "#FCFCFC",
        blacked: "#01140F",
        lessblack: "#1b1b1b",
        green: "#5BE42A",
        darkgreen: "#588c25",
        red:   "#EF1D1D",
        blue:  "#197ACE",
        primary: "#161622",
        inactive: "#cdcde0"
      }
    },
  },
  plugins: [],
}
