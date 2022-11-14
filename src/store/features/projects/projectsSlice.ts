import { createSlice } from "@reduxjs/toolkit";
import { ProjectStructure } from "../../../types";
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

const project: ProjectStructure = {
  id: "2",
  name: "zzzzzzz",
  date: new Date().toISOString(),
  student: {
    id: "12",
    name: "asdfjlasfd",
  },
  technologies: [],
};
