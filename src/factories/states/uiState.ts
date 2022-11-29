import { Factory } from "fishery";
import { UiState } from "../../store/features/ui/types";

const uiStateFactory = Factory.define<UiState>(() => ({
  isLoading: true,
  modal: {
    isOpen: true,
    type: "registerOk",
  },
}));

export const getMockUiState = (data?: Partial<UiState>) =>
  uiStateFactory.build(data);
