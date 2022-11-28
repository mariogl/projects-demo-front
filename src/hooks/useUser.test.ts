import { renderHook } from "@testing-library/react";
import jwtDecode from "jwt-decode";
import mockToken from "../mocks/token";
import {
  loginActionCreator,
  logoutActionCreator,
} from "../store/features/user/userSlice";
import { UserStructure } from "../types";
import useUser from "./useUser";

const mockDispatch = jest.fn();
jest.mock("../store/hooks", () => ({
  useAppDispatch: () => mockDispatch,
}));

beforeEach(() => {
  jest.clearAllMocks();
  jest.resetAllMocks();
  jest.restoreAllMocks();
});

describe("Given an useUser hook", () => {
  describe("When its function loginUser is called with John Doe's token", () => {
    test("Then it should call dispatch function with a login action with John Doe's data", () => {
      const { result } = renderHook(() => useUser());

      const user: UserStructure = jwtDecode(mockToken);
      const expectedAction = loginActionCreator(user);

      result.current.loginUser(mockToken);

      expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
    });

    describe("And shouldSave true", () => {
      test("Then it should call its saveToken function with the received token", () => {
        const { result } = renderHook(() => useUser());

        const mockSetItem = jest.spyOn(
          Object.getPrototypeOf(localStorage),
          "setItem"
        );

        result.current.loginUser(mockToken, true);

        expect(mockSetItem).toHaveBeenCalled();
      });

      test("Then the storage should have the received token stored", () => {
        const { result } = renderHook(() => useUser());

        result.current.loginUser(mockToken, true);

        const storedToken = localStorage.getItem("token");

        expect(storedToken).toBe(mockToken);
      });
    });
  });

  describe("When its function logoutUser is called with logout action", () => {
    test("Then it should call dispatch function", () => {
      const { result } = renderHook(() => useUser());
      const expectedAction = logoutActionCreator();

      result.current.logoutUser();

      expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
    });

    test("Then the storage shouldn't have any token stored", () => {
      const { result } = renderHook(() => useUser());

      result.current.logoutUser();

      const storedToken = localStorage.getItem("token");

      expect(storedToken).toBeNull();
    });
  });
});
