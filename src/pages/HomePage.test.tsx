import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import HomePage from "./HomePage";

describe("HomePage Component", () => {
  it("renders correctly with hero elements and navigation", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    // Check header text
    expect(screen.getAllByText("Programming Tools Hub").length).toBeGreaterThan(0);
    
    // Check main call to actions
    expect(screen.getByText("Excel AI 提示词")).toBeInTheDocument();
    expect(screen.getByText("Git 全流程元提示")).toBeInTheDocument();
  });
});
