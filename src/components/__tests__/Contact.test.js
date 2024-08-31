import { render, screen } from "@testing-library/react";
import Contact  from "../Contact";
import "@testing-library/jest-dom";

it("Should load Contact us component", () => {
    render(<Contact/>);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
});

it("Should load button inside Contact component", () => {
    render(<Contact/>);

    // const button = screen.getByText("Submit");
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
});

it("Should load input box inside Contact component", () => {
    render(<Contact/>);

    const inputbox = screen.getByPlaceholderText("name");
    expect(inputbox).toBeInTheDocument();
});

it("Should load 2 input box inside Contact component", () => {
    render(<Contact/>);

    const inputBoxes = screen.getAllByRole("textbox");
    // console.log(inputBoxes); 
    // it will give us the array of two input box
    expect(inputBoxes.length).toBe(2);
});