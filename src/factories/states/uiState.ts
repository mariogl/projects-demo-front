import { Factory } from "fishery";
import { UiState } from "../../store/features/ui/types";

const uiStateFactory = Factory.define<UiState>(() => ({
  isLoading: true,
  modal: {
    isOpen: true,
    isError: true,
    text: "",
    subtext: "",
  },
}));

export const getUiState = (data?: Partial<UiState>) =>
  uiStateFactory.build(data);
