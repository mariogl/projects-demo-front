import { getMockUiState } from "../../../factories/states/uiState";
import {
  closeModalActionCreator,
  openModalActionCreator,
  uiReducer,
} from "./uiSlice";

describe("Given a uiReducer reducer", () => {
  describe("When it receives an open modal action with text 'Test modal' and subtext 'It works'", () => {
    test("Then it should return an open modal data with text 'Test modal' and subtext 'It works'", () => {
      const currentUiState = getMockUiState();
      const openModalAction = openModalActionCreator({ type: "registerOk" });

      const newUiState = uiReducer(currentUiState, openModalAction);

      expect(newUiState.modal.isOpen).toBe(true);
      expect(newUiState.modal.type).toBe("registerOk");
    });
  });

  describe("When it receives a close modal action", () => {
    test("Then it should return a closed modal data", () => {
      const currentUiState = getMockUiState();
      const closeModalAction = closeModalActionCreator();

      const newUiState = uiReducer(currentUiState, closeModalAction);

      expect(newUiState.modal.isOpen).toBe(false);
    });
  });
});
