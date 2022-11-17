import { UserState } from "../types";
import { userInitialState } from "../userSlice";

const logoutUserReducer = (currentUserState: UserState): UserState => ({
  ...userInitialState,
});

export default logoutUserReducer;
