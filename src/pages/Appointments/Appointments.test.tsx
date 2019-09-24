import React from "react";
import Appointments from "./Appointments";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route } from "react-router-dom";
import { subTestidInit } from "../../utils";

const mockContext = jest.fn();
jest.mock("../../App", (): any => ({
  UserContext: {
    Consumer: (props: any): any => props.children(mockContext())
  }
}));

const testid = "Appointments";
const subTestid = subTestidInit(testid);

describe("Appointments", (): void => {
  beforeEach((): void => {
    jest.clearAllMocks();
  });

  describe("when a user isn't signed in", (): void => {
    it("should redirect user to '/'", (): void => {
      mockContext.mockReturnValue(null);

      const { container } = render(
        <MemoryRouter initialEntries={["/appointments"]}>
          <Route exact path="/appointments" component={Appointments} />
          <Route
            exact
            path="/"
            render={(): JSX.Element => <div>Redirected!</div>}
          />
        </MemoryRouter>
      );

      expect(container).toHaveTextContent("Redirected!");
    });
  });

  describe("when a user is signed in", (): void => {
    it("should render a list of the user's appointments", (): void => {
      mockContext.mockReturnValue({ id: 1234 });
      const onLoginFormSubmit = jest.fn();

      const { getByTestId } = render(
        <MemoryRouter initialEntries={["/"]}>
          <Route
            path="/"
            render={(props): JSX.Element => (
              <Appointments
                {...props}
                loginSubmissionErrors={false}
                onLoginFormSubmit={onLoginFormSubmit}
              />
            )}
          />
        </MemoryRouter>
      );

      expect(getByTestId(subTestid("UsernameInput"))).toBeInTheDocument();
      expect(getByTestId(subTestid("PasswordInput"))).toBeInTheDocument();
      expect(getByTestId(subTestid("SubmitButton"))).toBeInTheDocument();
    });

    it("should display an error message if 'loginSubmissionErrors' is true", (): void => {
      mockContext.mockReturnValue(null);
      const onLoginFormSubmit = jest.fn();

      const { container } = render(
        <MemoryRouter initialEntries={["/"]}>
          <Route
            path="/"
            render={(props): JSX.Element => (
              <Appointments
                {...props}
                loginSubmissionErrors={true}
                onLoginFormSubmit={onLoginFormSubmit}
              />
            )}
          />
        </MemoryRouter>
      );

      expect(container).toHaveTextContent(
        "Your username or password is incorrect."
      );
    });

    it("should not call onLoginFormSubmit if either input is empty", (): void => {
      mockContext.mockReturnValue(null);
      const onLoginFormSubmit = jest.fn();

      const { getByTestId } = render(
        <MemoryRouter initialEntries={["/"]}>
          <Route
            path="/"
            render={(props): JSX.Element => (
              <Appointments
                {...props}
                loginSubmissionErrors={false}
                onLoginFormSubmit={onLoginFormSubmit}
              />
            )}
          />
        </MemoryRouter>
      );

      fireEvent.change(getByTestId(subTestid("UsernameInput")), {
        target: { value: "test" }
      });
      fireEvent.click(getByTestId(subTestid("SubmitButton")));

      expect(onLoginFormSubmit).not.toHaveBeenCalled();

      fireEvent.change(getByTestId(subTestid("UsernameInput")), {
        target: { value: "" }
      });
      fireEvent.change(getByTestId(subTestid("PasswordInput")), {
        target: { value: "test" }
      });
      fireEvent.click(getByTestId(subTestid("SubmitButton")));

      expect(onLoginFormSubmit).not.toHaveBeenCalled();
    });

    it("should call onLoginFormSubmit with the username and password if both inputs are valid", (): void => {
      mockContext.mockReturnValue(null);
      const onLoginFormSubmit = jest.fn();
      const username = "testy";
      const password = "Mctesterson";

      const { getByTestId } = render(
        <MemoryRouter initialEntries={["/"]}>
          <Route
            path="/"
            render={(props): JSX.Element => (
              <Appointments
                {...props}
                loginSubmissionErrors={false}
                onLoginFormSubmit={onLoginFormSubmit}
              />
            )}
          />
        </MemoryRouter>
      );

      fireEvent.change(getByTestId(subTestid("UsernameInput")), {
        target: { value: username }
      });
      fireEvent.change(getByTestId(subTestid("PasswordInput")), {
        target: { value: password }
      });
      fireEvent.click(getByTestId(subTestid("SubmitButton")));

      expect(onLoginFormSubmit).toHaveBeenCalledTimes(1);
      expect(onLoginFormSubmit).toHaveBeenCalledWith({ username, password });
    });
  });
});
