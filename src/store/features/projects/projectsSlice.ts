import { createSlice } from "@reduxjs/toolkit";
import { loadProjectsReducer } from "./reducers/loadProjectsReducer";
import { ProjectsState } from "./types";

const initialProjectsState: ProjectsState = {
  projects: [],
};

const projectsSlice = createSlice({
  name: "projects",
  initialState: initialProjectsState,
  reducers: {
    loadProjects: loadProjectsReducer,
  },
});

export const projectsReducer = projectsSlice.reducer;

export const { loadProjects: loadProjectsActionCreator } =
  projectsSlice.actions;
