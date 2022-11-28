import { getUiState } from "../../../factories/states/uiState";
import {
  closeModalActionCreator,
  initialUiState,
  openModalActionCreator,
  uiReducer,
} from "./uiSlice";

describe("Given a uiReducer reducer", () => {
  describe("When it receives an open modal action with text 'Test modal' and subtext 'It works'", () => {
    test("Then it should return an open modal data with text 'Test modal' and subtext 'It works'", () => {
      const modalText = "Test modal";
      const modalSubtext = "It works";
      const currentUiState = getUiState();
      const openModalAction = openModalActionCreator({
        text: modalText,
        subtext: modalSubtext,
        isError: false,
      });

      const newUiState = uiReducer(currentUiState, openModalAction);

      expect(newUiState.modal.isOpen).toBe(true);
      expect(newUiState.modal.text).toBe(modalText);
      expect(newUiState.modal.subtext).toBe(modalSubtext);
    });
  });

  describe("When it receives a close modal action", () => {
    test("Then it should return a closed modal data", () => {
      const currentUiState = getUiState({
        modal: {
          isError: true,
          isOpen: true,
          text: "text",
          subtext: "subtext",
        },
      });
      const closeModalAction = closeModalActionCreator();

      const newUiState = uiReducer(currentUiState, closeModalAction);

      expect(newUiState.modal.isOpen).toBe(false);
    });
  });
});
