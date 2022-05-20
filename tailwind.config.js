module.exports = {
  content: ["./pages/**/*.js", "./components/**/*.js"],
  theme: {
    fontFamily: {
      sans: ["IBM Plex Sans", "sans-serif"],
      mono: ["IBM Plex Mono", "monospace"],
    },
    extend: {
      boxShadow: {
        pixel: "10px 10px 0px 0px #333333",
      },
      colors: {
        "pastel-red": "#a4443f",
        "pastel-blue": "#3f98a4",
        "pastel-yellow": "#a69d74",
      },
      aspectRatio: {
        "4/3": "4 / 3",
      },
    },
  },
  plugins: [],
};
