import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import PythonMecePage from "./PythonMecePage";

// Isolated localStorage mock to prevent async test pollution
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => { store[key] = value; },
    clear: () => { store = {}; },
    removeItem: (key: string) => { delete store[key]; }
  };
})();
Object.defineProperty(window, "localStorage", { value: localStorageMock });

describe("PythonMecePage Component", () => {
  beforeEach(() => {
    localStorage.clear();
    window.location.hash = "";
  });

  it("renders python mece page with header, footer, and sidebar", () => {
    render(
      <MemoryRouter>
        <PythonMecePage />
      </MemoryRouter>
    );

    // Check title in Header
    expect(screen.getByText("Python MECE")).toBeInTheDocument();
    expect(screen.getByText("原子路径 · 工程化进阶 · 逻辑图谱")).toBeInTheDocument();

    // Check initial ticket rendering (PY-001 variables binding)
    expect(screen.getAllByText("变量绑定").length).toBeGreaterThan(0);
    expect(screen.getByText("动态类型与对象身份")).toBeInTheDocument();
  });

  it("handles ticket navigation correctly using footer buttons", async () => {
    render(
      <MemoryRouter>
        <PythonMecePage />
      </MemoryRouter>
    );

    // Initial page shows PY-001 variables binding, Next button should be enabled
    const nextBtn = screen.getByText("Next Ticket →");
    expect(nextBtn).toBeEnabled();

    expect(screen.getByText("← Previous")).toBeDisabled();

    // Click Next
    fireEvent.click(nextBtn);

    // Wait for the next ticket to render
    const sliceSubtitle = await screen.findByText("索引、切片与不可变性");
    expect(sliceSubtitle).toBeInTheDocument();
    
    // Re-query ← Previous from the newly mounted tree
    const activePrevBtn = screen.getByText("← Previous");
    expect(activePrevBtn).toBeEnabled();

    // Click Previous
    fireEvent.click(activePrevBtn);
    
    // Wait for the first ticket to render back
    const varSubtitle = await screen.findByText("动态类型与对象身份");
    expect(varSubtitle).toBeInTheDocument();
  });

  it("manages learning progress status and updates localstorage", async () => {
    render(
      <MemoryRouter>
        <PythonMecePage />
      </MemoryRouter>
    );

    // Find Mark as Mastered button
    const masterBtn = screen.getByRole("button", { name: "Mark as Mastered" });
    expect(masterBtn).toBeInTheDocument();

    // Click Mastered
    fireEvent.click(masterBtn);

    // Wait for the button text to update
    const masteredBtn = await screen.findByText("✓ Mastered");
    expect(masteredBtn).toBeInTheDocument();

    // Progress bar updates
    expect(localStorage.getItem("python_mece_progress")).toContain("0");
  });

  it("loads completed state from localStorage on mount", () => {
    localStorage.setItem("python_mece_progress", JSON.stringify([0, 1]));

    render(
      <MemoryRouter>
        <PythonMecePage />
      </MemoryRouter>
    );

    // Check Mastered button
    expect(screen.getByText("✓ Mastered")).toBeInTheDocument();
  });

  it("filters tickets when searching in sidebar", async () => {
    render(
      <MemoryRouter>
        <PythonMecePage />
      </MemoryRouter>
    );

    // Find search input
    const searchInput = screen.getByPlaceholderText("搜索原子工单...");
    expect(searchInput).toBeInTheDocument();

    // Before search, "变量绑定" appears in both sidebar and main content
    expect(screen.getAllByText("变量绑定").length).toBe(2);

    // Search for "切片"
    fireEvent.change(searchInput, { target: { value: "切片" } });

    // Wait and verify search filtering updates the DOM
    const sliceSidebar = await screen.findAllByText("字符串切片");
    expect(sliceSidebar.length).toBeGreaterThan(0);

    // Unmatched ticket "变量绑定" should be hidden in sidebar, only visible in main content title
    expect(screen.getAllByText("变量绑定").length).toBe(1);
  });
});
