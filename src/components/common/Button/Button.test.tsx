import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import Button from "./Button";

describe("Button Component", () => {
  it("renders children correctly", () => {
    render(<Button>Click Me</Button>);
    expect(
      screen.getByRole("button", { name: /click me/i }),
    ).toBeInTheDocument();
  });

  it("applies primary variant classes by default", () => {
    render(<Button>Default</Button>);
    const btn = screen.getByRole("button");
    expect(btn).toHaveClass("bg-main-purple"); 
  });

  it("applies destructive variant classes when provided", () => {
    render(<Button variant="destructive">Delete</Button>);
    const btn = screen.getByRole("button");
    expect(btn).toHaveClass("bg-red");
  });

  it("fires onClick event when clicked", async () => {
    const handleClick = vi.fn(); 
    render(<Button onClick={handleClick}>Click</Button>);

    await userEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("is disabled and does not fire onClick when isDisabled is true", async () => {
    const handleClick = vi.fn();
    render(
      <Button isDisabled onClick={handleClick}>
        Disabled
      </Button>,
    );

    const btn = screen.getByRole("button");
    expect(btn).toBeDisabled();

    await userEvent.click(btn);
    expect(handleClick).not.toHaveBeenCalled();
  });
});
