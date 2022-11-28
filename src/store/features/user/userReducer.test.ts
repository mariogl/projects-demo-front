import { UserState } from "./types";
import {
  loginActionCreator,
  logoutActionCreator,
  userReducer,
} from "./userSlice";

describe("Given a userReducer reducer", () => {
  describe("When it receives a logged out user", () => {
    const currentUserState: UserState = {
      id: "",
      username: "",
      isLoggedIn: false,
    };

    describe("And a login action with user 'luis'", () => {
      test("Then it should return the user 'luis' logged in", () => {
        const user = {
          id: "3",
          username: "luis",
        };
        const action = loginActionCreator(user);

        const newUserState = userReducer(currentUserState, action);

        expect(newUserState).toHaveProperty("isLoggedIn", true);
        expect(newUserState).toHaveProperty("username", user.username);
        expect(newUserState).toHaveProperty("id", user.id);
      });
    });

    describe("And an unknown action", () => {
      test("Then it should return the logged out user", () => {
        const action = { type: "unknown" };

        const newUserState = userReducer(currentUserState, action);

        expect(newUserState).toHaveProperty("isLoggedIn", false);
        expect(newUserState).toHaveProperty("username", "");
        expect(newUserState).toHaveProperty("id", "");
      });
    });
  });

  describe("When it receives a logged in user 'luis' and a logout action", () => {
    test("Then it should return no user and not logged in", () => {
      const currentUserState: UserState = {
        id: "3",
        username: "luis",
        isLoggedIn: true,
      };
      const action = logoutActionCreator();

      const newUserState = userReducer(currentUserState, action);

      expect(newUserState).toHaveProperty("isLoggedIn", false);
      expect(newUserState).toHaveProperty("username", "");
      expect(newUserState).toHaveProperty("id", "");
    });
  });
});
