import { ModalType } from "../../../components/ModalComposer/ModalComposer";

export interface UiState {
  isLoading: boolean;
  modal: {
    isOpen: boolean;
    type: ModalType | null;
  };
}
