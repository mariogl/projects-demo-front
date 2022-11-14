import { ProjectStructure } from "../../types";

interface ProjectsListProps {
  projects: ProjectStructure[];
}

const ProjectsList = ({ projects }: ProjectsListProps): JSX.Element => {
  return (
    <>
      {projects.map((project) => (
        <li key={project.id}>{project.name}</li>
      ))}
    </>
  );
};

export default ProjectsList;
