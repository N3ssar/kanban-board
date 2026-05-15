import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import Dropdown from "./Dropdown";

describe("Dropdown Component", () => {
const mockItems = [
  { id: "1", label: "Edit", onClick: vi.fn() },
  { id: "2", label: "Delete", onClick: vi.fn(), className: "text-red" },
];

  it("renders trigger button", () => {
    render(<Dropdown trigger={<button>Options</button>} items={mockItems} />);
    expect(
      screen.getByRole("button", { name: /options/i }),
    ).toBeInTheDocument();
  });

  it("opens menu and displays items when trigger is clicked", async () => {
    render(<Dropdown trigger={<button>Options</button>} items={mockItems} />);

    expect(
      screen.queryByRole("menuitem", { name: /edit/i }),
    ).not.toBeInTheDocument();

    await userEvent.click(screen.getByRole("button", { name: /options/i }));

    expect(screen.getByRole("menuitem", { name: /edit/i })).toBeInTheDocument();
    expect(
      screen.getByRole("menuitem", { name: /delete/i }),
    ).toBeInTheDocument();
  });

  it("fires onClick for the correct item", async () => {
    render(<Dropdown trigger={<button>Options</button>} items={mockItems} />);

    await userEvent.click(screen.getByRole("button", { name: /options/i })); 
    await userEvent.click(screen.getByRole("menuitem", { name: /delete/i })); 

    expect(mockItems[1].onClick).toHaveBeenCalledTimes(1);
    expect(mockItems[0].onClick).not.toHaveBeenCalled();
  });
});
