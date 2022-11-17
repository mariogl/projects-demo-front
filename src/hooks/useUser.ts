import { useCallback } from "react";
import {
  loginActionCreator,
  logoutActionCreator,
} from "../store/features/user/userSlice";
import { useAppDispatch } from "../store/hooks";
import decodeToken from "../utils/decodeToken";

const useUser = () => {
  const dispatch = useAppDispatch();

  const loginUser = useCallback(
    (token: string) => {
      const user = decodeToken(token);
      dispatch(loginActionCreator(user));
    },
    [dispatch]
  );

  const logoutUser = () => {
    localStorage.removeItem("token");

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
