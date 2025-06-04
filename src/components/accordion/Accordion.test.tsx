import { fireEvent, render, screen } from "@testing-library/react";
import Accordion from "./Accordion";
import "@testing-library/jest-dom/jest-globals";
import "@testing-library/jest-dom";

describe("Accordion Component", () => {
  beforeEach(() => {
    render(
      <Accordion title="Title Accordion" onClick={() => {}}>
        <div>children components</div>
      </Accordion>
    );
  });

  test("renders the title", () => {
    const titleAccordion = screen.getByText("Title Accordion");
    expect(titleAccordion).toBeInTheDocument();
  });

  test("does not render children initially", () => {
    const childrenComponents = screen.queryByText("children components");
    expect(childrenComponents).not.toBeInTheDocument();
  });

  test("render children when accordion clicked", () => {
    const titleAccordion = screen.getByText("Title Accordion");
    fireEvent.click(titleAccordion);

    const childrenComponents = screen.getByText("children components");
    expect(childrenComponents).toBeInTheDocument();
  });

  test("children should not be visible when accordion closed", () => {
    const titleAccordion = screen.getByText("Title Accordion");
    fireEvent.click(titleAccordion);

    const childrenComponents = screen.getByText("children components");
    expect(childrenComponents).toBeInTheDocument();

    fireEvent.click(titleAccordion);

    const childrenComponentsQuery = screen.queryByText("children components");
    expect(childrenComponentsQuery).not.toBeInTheDocument();
  });
});
