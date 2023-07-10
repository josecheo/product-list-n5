import React from "react";
import { render } from "@testing-library/react";
import CartIcon from "@/components/cartIcon";

describe("Button component", () => {
  test("render", () => {
    render(<CartIcon />);
  });
});
