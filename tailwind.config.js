module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Raleway", "sans-serif"],
    },
    extend: {
      backgroundImage: (theme) => ({
        "hero-img": "url('../img/hero-1.jpg')",
        "couple-img": "url('../img/hero-img.jpg')",
        "scotland-img": "url('../img/scotland.jpg')",
        "prague-img": "url('../img/prague.jpg')",
        "london-img": "url('../img/london.jpg')",
        "munich-img": "url('../img/munich.jpg')",
        "budapest-img": "url('../img/budapest.jpg')",
      }),
      spacing: {
        144: "36rem",
      },
      colors: {
        "theme-yellow": "#FAED26",
        "theme-purple": "#46344E",
        "theme-grey": "#5A5560",
        "theme-rose": "#9D8D8F",
        "theme-orange": "#9B786F",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
