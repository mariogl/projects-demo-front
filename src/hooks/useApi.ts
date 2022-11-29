import axios, { AxiosError } from "axios";
import { useCallback } from "react";
import { apiEndpoints } from "../paths/paths";
import { loadProjectsActionCreator } from "../store/features/projects/projectsSlice";
import { openModalActionCreator } from "../store/features/ui/uiSlice";
import { useAppDispatch } from "../store/hooks";
import { ProjectStructure, UserCredentials } from "../types";
import useUser from "./useUser";

const useApi = () => {
  const { loginUser } = useUser();
  const dispatch = useAppDispatch();

  const loginUserApi = async (
    credentials: UserCredentials
  ): Promise<boolean> => {
    try {
      const { data } = await axios.post<{ token: string }>(
        process.env.REACT_APP_API_URL + apiEndpoints.loginUser,
        credentials
      );

      loginUser(data.token, true);

      return true;
    } catch (error: unknown) {
      dispatch(
        openModalActionCreator({
          type: "loginError",
        })
      );

      return false;
    }
  };

  const getProjectsApi = useCallback(async (): Promise<boolean> => {
    try {
      const { data } = await axios.get<{ projects: ProjectStructure[] }>(
        process.env.REACT_APP_API_URL + apiEndpoints.getProjects
      );

      dispatch(loadProjectsActionCreator(data.projects));

      return true;
    } catch (error: unknown) {
      if ((error as AxiosError).response?.status === 401) {
        dispatch(
          openModalActionCreator({
            type: "noAuth",
          })
        );
        return false;
      }

      dispatch(
        openModalActionCreator({
          type: "projectsError",
        })
      );

      return false;
    }
  }, [dispatch]);

  return {
    loginUserApi,
    getProjectsApi,
  };
};

export default useApi;
