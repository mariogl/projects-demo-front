import axios, { AxiosError } from "axios";
import { apiEndpoints } from "../paths/paths";
import {
  closeModalActionCreator,
  openModalActionCreator,
} from "../store/features/ui/uiSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { UserCredentials } from "../types";
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
      if (
        (error as AxiosError).response?.status === 400 ||
        (error as AxiosError).response?.status === 401
      ) {
        dispatch(
          openModalActionCreator({
            isError: true,
            text: "We couldn't log you in",
            subtext: "Wrong credentials",
          })
        );
        return false;
      }

      dispatch(
        openModalActionCreator({
          isError: true,
          text: "Error on login",
          subtext: "Please try again in a few minutes",
        })
      );

      return false;
    }
  };

  return {
    loginUserApi,
  };
};

export default useApi;
