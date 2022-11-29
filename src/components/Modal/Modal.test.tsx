import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { getMockUiState } from "../../factories/states/uiState";
import renderWithProviders from "../../utils/testUtils";
import Modal from "./Modal";

jest.mock("../../store/hooks", () => ({
  ...jest.requireActual("../../store/hooks"),
  useAppDispatch: () => jest.fn(),
}));

beforeEach(() => {
  jest.useFakeTimers();
  jest.spyOn(global, "clearTimeout");
});

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

describe("Given a Modal component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a button with 'Okay' inside", () => {
      renderWithProviders(<Modal text="" subtext="" />);

      const button = screen.queryByRole("button", { name: /okay/i });

      expect(button).toBeInTheDocument();
    });

    test("Then it should call window.clearTimeout when time runs out", () => {
      renderWithProviders(<Modal text="" subtext="" />);

      expect(clearTimeout).not.toHaveBeenCalled();

      jest.advanceTimersByTime(2000);

      expect(clearTimeout).toHaveBeenCalled();
    });
  });

  describe("When it's rendered with text 'Hi! I'm a modal' and subtext 'bye!'", () => {
    test("Then it should show the texts 'Hi! I'm a modal' and 'bye!'", () => {
      const expectedText = "Hi! I'm a modal";
      const expectedSubtext = "bye!";

      renderWithProviders(
        <Modal text={expectedText} subtext={expectedSubtext} />,
        {
          preloadedState: {
            uiState: getMockUiState(),
          },
        }
      );

      const text = screen.queryByText(expectedText);
      const subtext = screen.queryByText(expectedSubtext);

      expect(text).toBeInTheDocument();
      expect(subtext).toBeInTheDocument();
    });
  });
});
