import getUserAppointments from "./getUserAppointments";
import Axios from "axios";
import { getUserAppointmentsPath } from "../constants/requestPaths";

describe("getUserAppointments()", (): void => {
  const id = 123;

  it("should post to the sign in api path", (): void => {
    const axiosGet = jest.fn();
    Axios.get = axiosGet;

    getUserAppointments(id);

    expect(axiosGet).toHaveBeenCalled();
    expect(axiosGet).toHaveBeenCalledWith(
      getUserAppointmentsPath(id.toString())
    );
  });

  it("should return a promise", (): void => {
    expect(getUserAppointments(id)).toEqual(expect.any(Promise));
  });
});
