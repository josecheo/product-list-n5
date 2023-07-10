import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "@/components/button";

describe("Button component", () => {
  test("render", () => {
    render(<Button title="Click me" handleClick={() => {}} />);
  });

  test("click", () => {
    const handleClickMock = jest.fn();
    const { getByText } = render(
      <Button title="Click me" handleClick={handleClickMock} />
    );
    const button = getByText("Click me");
    fireEvent.click(button);
    expect(handleClickMock).toHaveBeenCalledTimes(1);
  });

});
