import { render, screen } from "@testing-library/react";
import Card from "./Card";
import "@testing-library/jest-dom/jest-globals";
import "@testing-library/jest-dom";

describe("Card Component", () => {
  beforeEach(() => {
    render(
      <Card>
        <div>children components</div>
      </Card>
    );
  });

  test("children rendered inside card", () => {
    const childrenComponents = screen.getByText("children components");
    expect(childrenComponents).toBeInTheDocument();
  });
});
