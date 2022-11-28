import "@fontsource/inter";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyled from "../src/styles/GlobalStyled";
import theme from "../src/styles/theme";
import { setupStore } from "../src/store/store";

const store = setupStore({
  userState: {
    isLoggedIn: true,
  },
});

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
      <BrowserRouter>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <GlobalStyled />
            <Story />
          </ThemeProvider>
        </Provider>
      </BrowserRouter>
    </>
  ),
];
