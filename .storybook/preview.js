import "@fontsource/inter";
import { ThemeProvider } from "styled-components";
import GlobalStyled from "../src/styles/GlobalStyled";
import theme from "../src/styles/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyled />
        <Story />
      </ThemeProvider>
    </>
  ),
];
