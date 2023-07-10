import React from "react";
import { render, fireEvent } from "@testing-library/react";
import AddToCard from "@/components/addToCard";

describe("AddToCard component", () => {
  test("render", () => {
    render(<AddToCard stock={20} productId={4} />);
  });

  test("increments", () => {
    const { getByText } = render(<AddToCard stock={10} productId={1} />);
    const addButton = getByText("+");
    fireEvent.click(addButton);
  });

  test("decrements ", () => {
    const { getByText } = render(<AddToCard stock={10} productId={1} />);
    const addButton = getByText("-");
    fireEvent.click(addButton);
  });
});
