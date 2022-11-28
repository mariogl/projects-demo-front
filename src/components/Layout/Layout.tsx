import {
  Routes,
  Route,
  Navigate,
  useRoutes,
  useLocation,
} from "react-router-dom";
import ProjectsPage from "../../pages/ProjectsPage/ProjectsPage";
import { paths } from "../../paths/paths";
import Header from "../Header/Header";
import ContainerStyled from "../../styles/components/ContainerStyled";
import HomePage from "../../pages/HomePage/HomePage";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import LoginPage from "../../pages/LoginPage/LoginPage";
import AntiManolitaRoute from "../AntiManolitaRoute/AntiManolitaRoute";
import Modal from "../Modal/Modal";
import { useAppSelector } from "../../store/hooks";

const Layout = (): JSX.Element => {
  const modal = useAppSelector((state) => state.uiState.modal);
  const { pathname } = useLocation();

  const isCentered = pathname === paths.login;

  return (
    <>
      <Header />
      <ContainerStyled centered={isCentered}>
        <Routes>
          <Route path={paths.home} element={<HomePage />} />
          <Route path={paths.root} element={<Navigate to={paths.home} />} />
          <Route
            path={paths.login}
            element={
              <AntiManolitaRoute>
                <LoginPage />
              </AntiManolitaRoute>
            }
          />
          <Route
            path={paths.projectsList}
            element={
              <ProtectedRoute>
                <ProjectsPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </ContainerStyled>
      {modal.isOpen && <Modal />}
    </>
  );
};

export default Layout;
