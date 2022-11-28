import { renderHook } from "@testing-library/react";
import { openModalActionCreator } from "../store/features/ui/uiSlice";
import { UserCredentials } from "../types";
import useApi from "./useApi";

const mockDispatch = jest.fn();
jest.mock("../store/hooks", () => ({
  ...jest.requireActual("../store/hooks"),
  useAppDispatch: () => mockDispatch,
}));

const mockLoginUser = jest.fn();
jest.mock("./useUser", () => () => ({
  loginUser: mockLoginUser,
}));

describe("Given an useApi hook", () => {
  describe("When its function loginUserApi is called with Luis' right credentials", () => {
    test("Then it should call loginUser", async () => {
      const userCredentials: UserCredentials = {
        username: "luis",
        password: "1234",
      };
      const { result } = renderHook(() => useApi());

      await result.current.loginUserApi(userCredentials);

      expect(mockLoginUser).toHaveBeenCalled();
    });
  });

  describe("When its function loginUserApi is called with Marta' wrong credentials", () => {
    test("Then it should call dispatch", async () => {
      const userCredentials: UserCredentials = {
        username: "marta",
        password: "1234",
      };
      const { result } = renderHook(() => useApi());

      await result.current.loginUserApi(userCredentials);

      expect(mockLoginUser).not.toHaveBeenCalled();
      expect(mockDispatch).toHaveBeenCalledWith(
        openModalActionCreator({
          isError: true,
          text: "We couldn't log you in",
          subtext: "Wrong credentials",
        })
      );
    });
  });
});
