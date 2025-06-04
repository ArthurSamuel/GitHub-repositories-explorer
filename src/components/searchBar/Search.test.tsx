import { fireEvent, render, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/jest-globals";
import "@testing-library/jest-dom";

describe("Card Component", () => {
  const handleClick = jest.fn();

  beforeEach(() => {
    render(<SearchBar onClick={handleClick} disableButton={false} />);
  });

  test("button should be disable initialy", async () => {
    const btn = screen.getByTestId("search-button");
    expect(btn).toBeDisabled();
  });

  test("user can type into input field and button should be click able", async () => {
    const user = userEvent.setup();
    const input = screen.getByPlaceholderText("Enter Username");

    await user.type(input, "arth");
    expect(input).toHaveValue("arth");

    const btn = screen.getByTestId("search-button");
    expect(btn).toBeEnabled();

    fireEvent.click(btn);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
