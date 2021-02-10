module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Raleway", "sans-serif"],
    },
    extend: {
      backgroundImage: (theme) => ({
        "hero-img": "url('/img/hero-1-min.jpg')",
        "couple-img": "url('/img/hero-img-min.jpg')",
        "scotland-img": "url('/img/scotland-min.jpg')",
        "prague-img": "url('/img/prague-min.jpg')",
        "london-img": "url('/img/london-min.jpg')",
        "munich-img": "url('/img/munich-min.jpg')",
        "budapest-img": "url('/img/budapest-min.jpg')",
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
