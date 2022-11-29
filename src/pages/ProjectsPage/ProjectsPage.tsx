import { useEffect } from "react";
import Heading from "../../components/Heading/Heading";
import ProjectsList from "../../components/ProjectsList/ProjectsList";
import useApi from "../../hooks/useApi";
import { useAppSelector } from "../../store/hooks";

const ProjectsPage = (): JSX.Element => {
  const { projects } = useAppSelector((state) => state.projectsState);
  const { getProjectsApi } = useApi();

  useEffect(() => {
    (async () => {
      await getProjectsApi();
    })();
  }, [getProjectsApi]);

  return (
    <>
      <Heading level={1}>Projects list</Heading>
      <ProjectsList projects={projects} />
    </>
  );
};

export default ProjectsPage;
