import Axios from "axios";
import { SIGN_IN_PATH } from "../constants/requestPaths";

const signIn = async (
  username: string,
  password: string
): Promise<UserInterface> => {
  return await Axios.get(
    `${SIGN_IN_PATH}?username=${username}&password=${password}`
  ).then((response): UserInterface => response.data);
};

export default signIn;
