import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils";
import TextField from "./TextField";

describe("Given a TextField component", () => {
  describe("When it's rendered with a label 'Test input' and without type", () => {
    test("Then it should show a type text input with a label 'Test input'", () => {
      const labelText = "Test input";

      renderWithProviders(<TextField label={labelText} id="text" />);

      const label = screen.queryByText(labelText);
      const input = screen.queryByLabelText(labelText);

      expect(input).toHaveProperty("type", "text");
      expect(label).toBeInTheDocument();
    });
  });

  describe("When it's rendered with a type 'date'", () => {
    test("Then it should show a type date input", () => {
      const labelText = "Test input";

      renderWithProviders(
        <TextField label={labelText} type="date" id="text" />
      );

      const input = screen.queryByLabelText(labelText);

      expect(input).toHaveProperty("type", "date");
    });
  });

  describe("When it's rendered with a caption 'Subtext'", () => {
    test("Then it should show the text 'Subtext'", () => {
      const labelText = "Test input";
      const captionText = "Subtext";

      renderWithProviders(
        <TextField label={labelText} caption={captionText} />
      );

      const caption = screen.queryByText(captionText);

      expect(caption).toBeInTheDocument();
    });
  });
});
