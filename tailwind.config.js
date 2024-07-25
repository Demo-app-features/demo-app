/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        whitesmoke: "#e9e9e9",
        black: "#000",
        gold: {
          "100": "#ffcd02",
          "200": "#ffcc00",
        },
        crimson: "#d40511",
        gray: "rgba(0, 0, 0, 0.8)",
        dimgray: "#555",
        darkgray: "#999",
      },
      spacing: {},
      fontFamily: {
        delivery: "Delivery",
      },
    },
    fontSize: {
      "29xl": "48px",
      "10xl": "29px",
      "19xl": "38px",
      "5xl": "24px",
      lgi: "19px",
      "17xl": "36px",
      base: "16px",
      "13xl": "32px",
      "7xl": "26px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
