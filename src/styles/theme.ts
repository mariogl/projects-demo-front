import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    primary: {
      base: "#6b4eff",
      dark: "#5538ee",
    },
    ink: {
      base: "#404446",
      lighter: "#72777a",
    },
    sky: {
      base: "#cdcfd0",
      light: "#e3e5e5",
    },
    red: {
      base: "#ff5247",
    },
  },
  distances: {
    containers: {
      padding: {
        horizontal: "1rem",
        vertical: "1rem",
      },
    },
    inputs: {
      padding: {
        horizontal: "1rem",
        vertical: "1rem",
      },
    },
    buttons: {
      padding: {
        horizontal: "2rem",
        vertical: "0.7rem",
      },
    },
    modals: {
      padding: {
        horizontal: "1.5rem",
        vertical: "1.5rem",
      },
    },
  },
};

export default theme;
