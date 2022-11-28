import { UserState } from "../types";
import { userInitialState } from "../userSlice";

const logoutUserReducer = (): UserState => ({
  ...userInitialState,
});

export default logoutUserReducer;
