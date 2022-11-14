import { Factory } from "fishery";
import { faker } from "@faker-js/faker";
import { ProjectStructure } from "../types";

const projectFactory = Factory.define<ProjectStructure>(() => ({
  id: faker.database.mongodbObjectId().toString(),
  name: faker.word.noun(),
  date: faker.date.past().toISOString(),
  technologies: [],
  student: {
    id: faker.database.mongodbObjectId().toString(),
    name: faker.name.firstName(),
  },
}));

export const getProject = (data: Partial<ProjectStructure>) =>
  projectFactory.build(data);

export const getProjects = (number = 2) => projectFactory.buildList(number);
