import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import { RootState } from "../../store/store";
import Layout from "./Layout";
import { paths } from "../../paths/paths";
import renderWithProviders from "../../utils/testUtils";
import { PreloadedState } from "@reduxjs/toolkit";
import { getProjects } from "../../factories/projects";

describe("Given a Layout component", () => {
  describe("When the user clicks on navigation link 'Projects list'", () => {
    test("Then it should show a level 1 heading with 'Projects list' inside", async () => {
      renderWithProviders(<Layout />);

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
      const preloadedState: PreloadedState<RootState> = {
        projectsState: {
          projects: getProjects(3),
        },
      };
      renderWithProviders(<Layout />, {
        initialEntries: [paths.projectsList],
        preloadedState,
      });

      const projectsHeading = screen.queryByRole("heading", {
        level: 1,
        name: /projects list/i,
      });

      expect(projectsHeading).toBeInTheDocument();
    });
  });
});
