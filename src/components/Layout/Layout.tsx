import { Routes, Route, Navigate } from "react-router-dom";
import ProjectsPage from "../../pages/ProjectsPage/ProjectsPage";
import { paths } from "../../paths/paths";
import Header from "../Header/Header";
import ContainerStyled from "../../styles/components/ContainerStyled";
import HomePage from "../../pages/HomePage/HomePage";

const Layout = (): JSX.Element => {
  return (
    <>
      <Header />
      <ContainerStyled>
        <Routes>
          <Route path={paths.home} element={<HomePage />} />
          <Route path={paths.projectsList} element={<ProjectsPage />} />
          <Route path={paths.root} element={<Navigate to={paths.home} />} />
        </Routes>
      </ContainerStyled>
    </>
  );
};

export default Layout;
