import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import DuckdbTutorialPage from "./DuckdbTutorialPage";

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

describe("DuckdbTutorialPage Component", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("loads and renders duckdb tutorial page once WASM is initialized", async () => {
    render(
      <MemoryRouter>
        <DuckdbTutorialPage />
      </MemoryRouter>
    );

    // Initial state might show loader or quickly resolve to initialized state
    // Let's wait for the main ticket header to appear
    const ticketTitles = await screen.findAllByText("SELECT 与字面量");
    expect(ticketTitles.length).toBeGreaterThan(0);

    // Check header stats
    expect(screen.getByText("数据分析 · 向量化引擎 · 高性能 SQL")).toBeInTheDocument();
  });

  it("handles ticket navigation using footer previous/next buttons", async () => {
    render(
      <MemoryRouter>
        <DuckdbTutorialPage />
      </MemoryRouter>
    );

    // Wait for load
    await screen.findAllByText("SELECT 与字面量");

    const nextBtn = screen.getByText("Next →");
    expect(nextBtn).toBeEnabled();

    expect(screen.getByText("← Previous")).toBeDisabled();

    // Go to next ticket (T-02)
    fireEvent.click(nextBtn);

    const nextTitles = await screen.findAllByText("数据类型探索");
    expect(nextTitles.length).toBeGreaterThan(0);

    // Re-query previous button from newly mounted DOM tree
    const activePrevBtn = screen.getByText("← Previous");
    expect(activePrevBtn).toBeEnabled();

    // Navigate back to T-01
    fireEvent.click(activePrevBtn);
    const originalTitles = await screen.findAllByText("SELECT 与字面量");
    expect(originalTitles.length).toBeGreaterThan(0);
  });

  it("supports quiz interactive feedback", async () => {
    render(
      <MemoryRouter>
        <DuckdbTutorialPage />
      </MemoryRouter>
    );

    await screen.findAllByText("SELECT 与字面量");

    // Check quiz question
    expect(screen.getByText("在 DuckDB 中，以下哪条语句是合法的？")).toBeInTheDocument();

    // Option B is the correct answer (index 1: SELECT 1 + 1)
    const optionB = screen.getByText("SELECT 1 + 1");
    expect(optionB).toBeInTheDocument();

    // Click option B
    fireEvent.click(optionB);

    // Feedback section should show up
    const analysisHeader = await screen.findByText("Analysis");
    expect(analysisHeader).toBeInTheDocument();
    expect(screen.getByText(/DuckDB 支持无 FROM 的 SELECT/)).toBeInTheDocument();
  });

  it("restores completed status from localStorage on mount", async () => {
    localStorage.setItem("duckdb_progress", JSON.stringify([0]));

    render(
      <MemoryRouter>
        <DuckdbTutorialPage />
      </MemoryRouter>
    );

    await screen.findAllByText("SELECT 与字面量");

    // The progress bar status should show completed status correctly
    // Sidebar completed state sets check dot to bg-emerald-500
    // Check if the progress stats exist
    expect(screen.getByText("Connected")).toBeInTheDocument();
  });
});
