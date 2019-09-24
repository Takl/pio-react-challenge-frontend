import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header";
import { subTestidInit } from "../../utils";
import { MemoryRouter } from "react-router";

const testid = "Header";
const subTestid = subTestidInit(testid);

describe("Header", () => {
  it("renders a text logo", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(getByTestId(subTestid("Logo"))).toHaveTextContent("Taql");
  });

  it("renders a appointments link", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(getByTestId(subTestid("Links"))).toHaveTextContent("Appointments");
  });
});
