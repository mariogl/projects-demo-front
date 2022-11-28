import { useCallback } from "react";
import {
  loginActionCreator,
  logoutActionCreator,
} from "../store/features/user/userSlice";
import { useAppDispatch } from "../store/hooks";
import decodeToken from "../utils/decodeToken";

const useUser = () => {
  const dispatch = useAppDispatch();

  const saveToken = (token: string) => {
    localStorage.setItem("token", token);
  };

  const removeToken = () => {
    localStorage.removeItem("token");
  };

  const loginUser = useCallback(
    (token: string, shouldSave = false) => {
      const user = decodeToken(token);

      if (shouldSave) {
        saveToken(token);
      }

      dispatch(loginActionCreator(user));
    },
    [dispatch]
  );

  const logoutUser = () => {
    removeToken();

    dispatch(logoutActionCreator());
  };

  const checkToken = useCallback((): void => {
    const token = localStorage.getItem("token");

    if (token) {
      loginUser(token);
    }
  }, [loginUser]);

  return {
    checkToken,
    loginUser,
    logoutUser,
  };
};

export default useUser;
