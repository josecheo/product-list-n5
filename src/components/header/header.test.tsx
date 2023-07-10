import React from "react";
import { render } from "@testing-library/react";
import Header from "@/components/header";

describe("header component", () => {
  test("render", () => {
    render(<Header />);
  });
});
