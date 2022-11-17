import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { setupStore } from "./store/store";
import "@fontsource/inter";
import GlobalStyled from "./styles/GlobalStyled";
import theme from "./styles/theme";

const container = document.getElementById("root")!;
const root = createRoot(container);
const store = setupStore();

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyled />
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
