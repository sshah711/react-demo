import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("contact page test cases", () => {
  it(" should loaded the contact component", () => {
    render(<Contact />);
    const h = screen.getByRole("heading");

    //assertion
    //expect(res).toBe(8);

    expect(h).toBeInTheDocument();
  });

  it(" should loaded button inside the contact component", () => {
    render(<Contact />);
    const btn = screen.getByRole("button");
    //const btn1 = screen.getByText("Submit");
    //assertion

    expect(btn).toBeInTheDocument();
    //expect(btn1).toBeInTheDocument();
  });

  it(" should loaded the placeholder inside contact component", () => {
    render(<Contact />);
    const h = screen.getByPlaceholderText("name");

    //assertion
    //expect(res).toBe(8);

    expect(h).toBeInTheDocument();
  });

  test(" should loaded the 2 inputbox inside contact component", () => {
    render(<Contact />);
    //querying
    const h = screen.getAllByRole("textbox");
    console.log(h.length);
    //assertion
    //expect(res).toBe(8);

    expect(h.length).not.toBe(1);
  });
});
