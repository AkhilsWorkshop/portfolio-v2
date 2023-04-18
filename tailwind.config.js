/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "primary": "#ABDF12",
      "secondary": "#F3F0EB",
      "third": "#8892b0",
      "fourth": "#43665D",
      "fifth": "#111234",
      "sixth": "#112240",
      bgDark: "#082A3A",
      black: "black",
      "orange": "#ffbc04",
    },
    extend: {},
    fontFamily: {
      slogan: ["Ubuntu"],
    }
  },
  plugins: [],
}
