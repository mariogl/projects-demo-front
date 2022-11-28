export interface UiState {
  isLoading: boolean;
  modal: {
    isOpen: boolean;
    isError: boolean;
    text: string;
    subtext: string;
  };
}
