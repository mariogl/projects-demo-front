import mockToken from "../mocks/token";
import decodeToken from "./decodeToken";

describe("Given a decodeToken function", () => {
  describe("When it receives a token with John Doe's data", () => {
    test("Then it should return John Doe's data", () => {
      const expectedUserData = {
        sub: "1234567890",
        name: "John Doe",
      };

      const user = decodeToken(mockToken);

      expect(user).toHaveProperty("name", expectedUserData.name);
      expect(user).toHaveProperty("sub", expectedUserData.sub);
    });
  });
});
