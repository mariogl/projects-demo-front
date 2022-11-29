import { createSlice } from "@reduxjs/toolkit";
import { closeModalReducer, openModalReducer } from "./reducers/uiReducers";
import { UiState } from "./types";

export const initialUiState: UiState = {
  isLoading: false,
  modal: {
    isOpen: false,
    type: null,
  },
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    openModal: openModalReducer,
    closeModal: closeModalReducer,
  },
});

export const uiReducer = uiSlice.reducer;

export const {
  openModal: openModalActionCreator,
  closeModal: closeModalActionCreator,
} = uiSlice.actions;
