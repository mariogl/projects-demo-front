import { createSlice } from "@reduxjs/toolkit";
import loginUserReducer from "./reducers/loginUserReducer";
import logoutUserReducer from "./reducers/logoutUserReducer";
import { UserState } from "./types";

export const userInitialState: UserState = {
  isLoggedIn: false,
  id: "",
  username: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    login: loginUserReducer,
    logout: logoutUserReducer,
  },
});

export const userReducer = userSlice.reducer;

export const { login: loginActionCreator, logout: logoutActionCreator } =
  userSlice.actions;
