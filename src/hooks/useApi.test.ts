import { renderHook } from "@testing-library/react";
import { getMockProjects } from "../factories/projects";
import { loadProjectsActionCreator } from "../store/features/projects/projectsSlice";
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
  const { result } = renderHook(() => useApi());

  describe("When its function loginUserApi is called with Luis' right credentials", () => {
    test("Then it should call loginUser", async () => {
      const userCredentials: UserCredentials = {
        username: "luis",
        password: "1234",
      };

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

      await result.current.loginUserApi(userCredentials);

      expect(mockLoginUser).not.toHaveBeenCalled();
      expect(mockDispatch).toHaveBeenCalledWith(
        openModalActionCreator({
          type: "loginError",
        })
      );
    });
  });

  describe("When its function getProjectsApi is called", () => {
    test.only("Then it should call dispatch with load projects action with two projects", async () => {
      const mockProjects = getMockProjects();
      const expectedAction = loadProjectsActionCreator(mockProjects);

      await result.current.getProjectsApi();

      expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});
