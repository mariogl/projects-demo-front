import jwtDecode from "jwt-decode";
import { UserStructure } from "../types";

const decodeToken = (token: string): UserStructure =>
  jwtDecode<UserStructure>(token);

export default decodeToken;
