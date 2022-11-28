import { rest } from "msw";
import { apiEndpoints } from "../paths/paths";
import mockToken from "./token";

export const handlers = [
  rest.post(
    process.env.REACT_APP_API_URL + apiEndpoints.loginUser,
    async (req, res, ctx) => {
      const { username } = await req.json();
      if (username === "luis") {
        return res(ctx.status(200), ctx.json({ token: mockToken }));
      } else {
        return res(ctx.status(401));
      }
    }
  ),
];
