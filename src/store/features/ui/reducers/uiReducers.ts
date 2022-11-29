import { PayloadAction } from "@reduxjs/toolkit";
import { ModalType } from "../../../../components/ModalComposer/ModalComposer";
import { UiState } from "../types";

export const openModalReducer = (
  currentUiState: UiState,
  action: PayloadAction<{ type: ModalType }>
): UiState => {
  return {
    ...currentUiState,
    modal: {
      ...currentUiState.modal,
      isOpen: true,
      type: action.payload.type,
    },
  };
};

export const closeModalReducer = (currentUiState: UiState): UiState => {
  return {
    ...currentUiState,
    modal: {
      ...currentUiState.modal,
      isOpen: false,
      type: null,
    },
  };
};
