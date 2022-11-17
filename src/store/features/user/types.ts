import { UserStructure } from "../../../types";

export interface UserState extends UserStructure {
  isLoggedIn: boolean;
}
