import { PayloadAction } from "@reduxjs/toolkit";
import { UiState } from "../types";

export const openModalReducer = (
  currentUiState: UiState,
  action: PayloadAction<{ isError: boolean; text: string; subtext: string }>
): UiState => {
  return {
    ...currentUiState,
    modal: {
      ...currentUiState.modal,
      isOpen: true,
      isError: action.payload.isError,
      text: action.payload.text,
      subtext: action.payload.subtext,
    },
  };
};

export const closeModalReducer = (currentUiState: UiState): UiState => {
  return {
    ...currentUiState,
    modal: {
      ...currentUiState.modal,
      isOpen: false,
      isError: false,
      text: "",
      subtext: "",
    },
  };
};
