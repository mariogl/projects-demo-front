export interface ProjectStructure {
  id: string;
  name: string;
  date: string;
  student: {
    id: string;
    name: string;
  };
  technologies: string[];
}

export interface UserStructure {
  id: string;
  username: string;
}
