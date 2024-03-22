module.exports = {
  content: ["./src/scss/**/*.scss", "./src/**/*.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1216px",
    },
    extend: {
      fontSize: {},
      colors: {
        primary: {
          DEFAULT: "#FBCD21",
        },
        typo: {
          DEFAULT: "#030519",
        },
      },
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
  },
};
