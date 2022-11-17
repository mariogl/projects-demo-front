import { useEffect } from "react";
import Heading from "../../components/Heading/Heading";
import ProjectsList from "../../components/ProjectsList/ProjectsList";
import { getProjects } from "../../factories/projects";
import { useAppSelector } from "../../store/hooks";

const ProjectsPage = (): JSX.Element => {
  const { projects } = useAppSelector((state) => state.projectsState);

  return (
    <>
      <Heading level={1}>Projects list</Heading>
      <ProjectsList projects={projects} />
    </>
  );
};

export default ProjectsPage;
