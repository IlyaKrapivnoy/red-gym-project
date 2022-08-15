import React from "react";
import { render } from "@testing-library/react";
import Home from "../../pages";

describe("Test Home", () => {
  it("Home snapshot", () => {
    const view = render(<Home />);
    expect(view).toMatchSnapshot();
  });
});
