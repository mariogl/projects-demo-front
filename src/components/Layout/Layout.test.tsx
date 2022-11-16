import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { store } from "../../store/store";
import theme from "../../styles/theme";
import Layout from "./Layout";
import { paths } from "../../paths/paths";

describe("Given a Layout component", () => {
  describe("When the user clicks on navigation link 'Projects list'", () => {
    test("Then it should show a level 1 heading with 'Projects list' inside", async () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={theme}>
              <Layout />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );

      const link = screen.queryByRole("link", {
        name: "Projects list",
      });

      await userEvent.click(link!);

      const projectsHeading = screen.queryByRole("heading", {
        level: 1,
        name: /projects list/i,
      });

      expect(projectsHeading).toBeInTheDocument();
    });
  });

  describe("When the user visits /projects", () => {
    test("Then it should show a level 1 heading with 'Projects list' inside", () => {
      render(
        <MemoryRouter initialEntries={[paths.projectsList]}>
          <Provider store={store}>
            <ThemeProvider theme={theme}>
              <Layout />
            </ThemeProvider>
          </Provider>
        </MemoryRouter>
      );

      const projectsHeading = screen.queryByRole("heading", {
        level: 1,
        name: /projects list/i,
      });

      expect(projectsHeading).toBeInTheDocument();
    });
  });
});
