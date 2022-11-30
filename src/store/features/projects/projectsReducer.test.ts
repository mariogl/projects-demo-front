import { getMockRandomProjects } from "../../../factories/projects";
import { loadProjectsActionCreator, projectsReducer } from "./projectsSlice";
import { ProjectsState } from "./types";

describe("Given a projectsReducer reducer", () => {
  describe("When it receives an empty list of projects and two projects", () => {
    test("Then it should return the received two projects", () => {
      const currentProjectsState: ProjectsState = {
        projects: [],
      };
      const projects = getMockRandomProjects();
      const action = loadProjectsActionCreator(projects);

      const newProjectsState = projectsReducer(currentProjectsState, action);

      expect(newProjectsState).toHaveProperty("projects", projects);
    });
  });

  describe("When it receives two projects and an unknown action", () => {
    test("Then it should return the two received projects", () => {
      const projects = getMockRandomProjects(2);
      const currentProjectsState: ProjectsState = {
        projects,
      };
      const action = { type: "unknown" };

      const newProjectsState = projectsReducer(currentProjectsState, action);

      expect(newProjectsState).toStrictEqual(currentProjectsState);
    });
  });
});
