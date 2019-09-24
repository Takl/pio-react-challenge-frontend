import signIn from "./signIn";
import Axios from "axios";
import { SIGN_IN_PATH } from "../constants/requestPaths";

describe("signIn()", (): void => {
  it("should post to the sign in api path", (): void => {
    const axiosPost = jest.fn();
    Axios.post = axiosPost;

    signIn("test", "test");

    expect(axiosPost).toHaveBeenCalled();
    expect(axiosPost).toHaveBeenCalledWith(
      `${SIGN_IN_PATH}?username=test&password=test`
    );
  });

  it("should return a promise", (): void => {
    expect(signIn("test", "test")).toEqual(expect.any(Promise));
  });
});
