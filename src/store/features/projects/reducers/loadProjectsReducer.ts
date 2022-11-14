import { PayloadAction } from "@reduxjs/toolkit";
import { ProjectStructure } from "../../../../types";
import { ProjectsState } from "../types";

export const loadProjectsReducer = (
  currentProjectsState: ProjectsState,
  action: PayloadAction<ProjectStructure[]>
): ProjectsState => ({
  ...currentProjectsState,
  projects: [...action.payload],
});
