import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import TextField from "./TextField";

describe("TextField Component", () => {
  it("renders input with label", () => {
    render(<TextField id="task" label="Task Name" />);
    expect(screen.getByLabelText(/task name/i)).toBeInTheDocument();
  });

  it("shows required asterisk when required prop is true", () => {
    render(<TextField label="Title" required />);
    expect(screen.getByText("*")).toHaveClass("text-red");
  });

  it("allows user to type text", async () => {
    render(<TextField placeholder="Enter task" />);
    const input = screen.getByPlaceholderText(/enter task/i);

    await userEvent.type(input, "New Task");
    expect(input).toHaveValue("New Task");
  });

  it("displays error message and applies error styles", () => {
    render(<TextField error="Field is required" />);

    expect(screen.getByText("Field is required")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toHaveClass("border-red");
  });
});
