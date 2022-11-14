import { Routes, Route, Navigate } from "react-router-dom";
import ProjectsPage from "../../pages/ProjectsPage/ProjectsPage";
import { paths } from "../../paths/paths";
import Header from "../Header/Header";
import ContainerStyled from "../../styles/components/ContainerStyled";

const Layout = (): JSX.Element => {
  return (
    <>
      <Header />
      <ContainerStyled>
        <Routes>
          <Route path={paths.projectsList} element={<ProjectsPage />} />
          <Route
            path={paths.root}
            element={<Navigate to={paths.projectsList} />}
          />
        </Routes>
      </ContainerStyled>
    </>
  );
};

export default Layout;
