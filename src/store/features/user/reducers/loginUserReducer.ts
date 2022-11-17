import { PayloadAction } from "@reduxjs/toolkit";
import { UserStructure } from "../../../../types";
import { UserState } from "../types";

const loginUserReducer = (
  currentUserState: UserState,
  action: PayloadAction<UserStructure>
): UserState => ({
  isLoggedIn: true,
  id: action.payload.id,
  username: action.payload.username,
});

export default loginUserReducer;
