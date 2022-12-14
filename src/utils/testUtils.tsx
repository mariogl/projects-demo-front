import { PreloadedState } from "@reduxjs/toolkit";
import { InitialEntry } from "@remix-run/router";
import { render, RenderOptions } from "@testing-library/react";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { AppStore, RootState, setupStore } from "../store/store";
import GlobalStyled from "../styles/GlobalStyled";
import mainTheme from "../styles/theme";

interface ExtendedRenderOptions extends RenderOptions {
  initialEntries?: InitialEntry[];
  theme?: DefaultTheme;
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

const renderWithProviders = (
  ui: JSX.Element,
  {
    initialEntries,
    theme = mainTheme,
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) => {
  const Router = ({ children }: PropsWithChildren): JSX.Element => {
    debugger;
    return initialEntries ? (
      <MemoryRouter initialEntries={initialEntries}>{children}</MemoryRouter>
    ) : (
      <BrowserRouter>{children}</BrowserRouter>
    );
  };

  const Wrapper = ({ children }: PropsWithChildren): JSX.Element => {
    debugger;
    return (
      <Router>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <GlobalStyled />
            {children}
          </ThemeProvider>
        </Provider>
      </Router>
    );
  };

  render(ui, { wrapper: Wrapper, ...renderOptions });
};

export default renderWithProviders;
