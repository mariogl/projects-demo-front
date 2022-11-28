import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils";
import LoginForm from "./LoginForm";
import { paths } from "../../paths/paths";
jest.setTimeout(500000);
const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));
/* const mockLoginUserApi = jest.fn();
jest.mock("../../hooks/useApi", () => () => ({
  loginUserApi: mockLoginUserApi,
}));
 */
describe("Given a LoginForm component", () => {
  describe("When it's rendered", () => {
    test("Then it should show an input with label 'Your username' and an input with label 'Your password'", () => {
      renderWithProviders(<LoginForm />);

      const usernameInput = screen.queryByLabelText("Your username");
      const passwordInput = screen.queryByLabelText("Your password");

      expect(usernameInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
    });

    test("Then it should show a button with 'Login' inside", () => {
      renderWithProviders(<LoginForm />);

      const loginButton = screen.queryByRole("button", {
        name: /login/i,
      });

      expect(loginButton).toBeInTheDocument();
    });

    describe("And the user enters the username 'luis'", () => {
      test("Then it should show 'luis' inside the username input", async () => {
        const username = "luis";

        renderWithProviders(<LoginForm />);

        const usernameInput = screen.queryByLabelText("Your username")!;

        await userEvent.type(usernameInput, username);

        expect(usernameInput).toHaveValue(username);
      });

      describe("And the user clicks the 'Login' button", () => {
        test("Then it should call navigate with projects list path", async () => {
          const username = "luis";

          renderWithProviders(<LoginForm />);

          const loginButton = screen.queryByRole("button", {
            name: /login/i,
          })!;
          const usernameInput = screen.queryByLabelText("Your username")!;

          await userEvent.type(usernameInput, username);
          await userEvent.click(loginButton);

          expect(mockNavigate).toHaveBeenCalledWith(paths.projectsList);
        });
      });
    });

    describe("And the user enters the password '1234'", () => {
      test("Then it should show '1234' inside the password input", async () => {
        const password = "1234";

        renderWithProviders(<LoginForm />);

        const passwordInput = screen.queryByLabelText("Your password")!;

        await userEvent.type(passwordInput, password);

        expect(passwordInput).toHaveValue(password);
      });
    });

    describe("And the user sends an non-existent username 'marta'", () => {
      test("Then it should not call navigate", async () => {
        const username = "marta";

        renderWithProviders(<LoginForm />);

        const loginButton = screen.queryByRole("button", {
          name: /login/i,
        })!;
        const usernameInput = screen.queryByLabelText("Your username")!;

        await userEvent.type(usernameInput, username);
        await userEvent.click(loginButton);

        expect(mockNavigate).not.toHaveBeenCalled();
      });
    });
  });
});
