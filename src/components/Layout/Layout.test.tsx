import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import { RootState } from "../../store/store";
import Layout from "./Layout";
import { paths } from "../../paths/paths";
import renderWithProviders from "../../utils/testUtils";
import { PreloadedState } from "@reduxjs/toolkit";
import { getMockRandomProjects } from "../../factories/projects";

describe("Given a Layout component", () => {
  describe("When the user is logged in", () => {
    const preloadedState: PreloadedState<RootState> = {
      userState: {
        isLoggedIn: true,
        id: "",
        username: "",
      },
      projectsState: {
        projects: getMockRandomProjects(3),
      },
    };

    describe("And he clicks on navigation link 'Projects list'", () => {
      test("Then it should show a level 1 heading with 'Projects list' inside", async () => {
        renderWithProviders(<Layout />, {
          preloadedState,
        });

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

    describe("And he visits /projects", () => {
      test("Then it should show a level 1 heading with 'Projects list' inside", () => {
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

  describe("When the user is not logged in", () => {
    describe("And he visits /login", () => {
      test("Then it should show a level 1 heading with 'Login page' inside", () => {
        renderWithProviders(<Layout />, {
          initialEntries: [paths.login],
        });

        const loginHeading = screen.queryByRole("heading", {
          level: 1,
          name: /login/i,
        });

        expect(loginHeading).toBeInTheDocument();
      });
    });

    describe("And he visits /projects", () => {
      test("Then it shouldn't show a level 1 heading with 'Projects list' inside", () => {
        renderWithProviders(<Layout />, {
          initialEntries: [paths.projectsList],
        });

        const loginHeading = screen.queryByRole("heading", {
          level: 1,
          name: /projects list/i,
        });

        expect(loginHeading).not.toBeInTheDocument();
      });
    });

    describe("And he clicks on navigation link 'Homepage'", () => {
      test("Then it should show a level 1 heading with 'Home Page' inside", async () => {
        renderWithProviders(<Layout />);

        const link = screen.queryByRole("link", {
          name: "Homepage",
        });

        await userEvent.click(link!);

        const projectsHeading = screen.queryByRole("heading", {
          level: 1,
          name: /home page/i,
        });

        expect(projectsHeading).toBeInTheDocument();
      });
    });
  });
});
