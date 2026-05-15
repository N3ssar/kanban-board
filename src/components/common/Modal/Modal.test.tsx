import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Modal from "./Modal";

describe("Modal Component", () => {
  // دالة مساعدة عشان نرندر المودال المفتوح دايماً
  const renderOpenModal = (props = {}) => {
    return render(
      <Modal isOpen={true} onClose={vi.fn()} title="Test Modal" {...props}>
        <p>Modal Content</p>
      </Modal>,
    );
  };

  it("renders title and content when open", () => {
    renderOpenModal();

    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByText("Test Modal")).toBeInTheDocument();
    expect(screen.getByText("Modal Content")).toBeInTheDocument();
  });

  it("renders description if provided", () => {
    renderOpenModal({ description: "This is a test description" });
    expect(screen.getByText("This is a test description")).toBeInTheDocument();
  });

  it("does not render when isOpen is false", () => {
    render(
      <Modal isOpen={false} onClose={vi.fn()} title="Closed">
        <div>Dummy Content</div> 
      </Modal>,
    );
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
