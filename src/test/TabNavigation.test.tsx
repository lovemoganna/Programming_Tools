import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import ExcelPromptsPage from "../apps/excel-prompts/ExcelPromptsPage";
import GitWorkflowPage from "../apps/git-workflow/GitWorkflowPage";
import MeceFrameworkPage from "../apps/mece-framework/MeceFrameworkPage";
import ProgrammingMindsetPage from "../apps/programming-mindset/ProgrammingMindsetPage";
import PythonMecePage from "../apps/python-mece/PythonMecePage";
import DuckdbTutorialPage from "../apps/duckdb-tutorial/DuckdbTutorialPage";
import ContextEngineeringPage from "../apps/context-engineering/ContextEngineeringPage";
import FlowWikiPage from "../apps/flow-wiki/FlowWikiPage";
import SearchModal from "../components/SearchModal";
import PromptModal from "../apps/git-workflow/components/PromptModal";
import { metaPrompts } from "../apps/git-workflow/data/prompts";

const focusableSelector = 'button, [href], input, select, textarea, [tabIndex="0"], [role="checkbox"]';

describe("Keyboard Tab Focus Navigation Paths", () => {
  it("verifies focusable element paths in ExcelPromptsPage", () => {
    render(
      <MemoryRouter>
        <ExcelPromptsPage />
      </MemoryRouter>
    );

    const focusable = document.querySelectorAll(focusableSelector);
    expect(focusable.length).toBeGreaterThan(0);

    // Verify search input is focusable and appears early in tab order
    const searchInput = screen.getByPlaceholderText("搜索关键词...");
    expect(searchInput).toBeInTheDocument();
    expect(Array.from(focusable).indexOf(searchInput)).toBeLessThan(5);
  });

  it("verifies focusable element paths in GitWorkflowPage", () => {
    render(
      <MemoryRouter>
        <GitWorkflowPage />
      </MemoryRouter>
    );

    const focusable = document.querySelectorAll(focusableSelector);
    expect(focusable.length).toBeGreaterThan(0);

    // Verify search input and commit message text area are in tab order
    const textareas = screen.getAllByPlaceholderText("请输入您的 Git 提交信息（第一行为主旨，第三行起为详细说明，中间必须空一行）...");
    expect(textareas.length).toBeGreaterThan(0);
    expect(Array.from(focusable).includes(textareas[0])).toBe(true);
  });

  it("verifies focusable element paths in MeceFrameworkPage", () => {
    render(
      <MemoryRouter>
        <MeceFrameworkPage />
      </MemoryRouter>
    );

    const focusable = document.querySelectorAll(focusableSelector);
    expect(focusable.length).toBeGreaterThan(0);

    // Verify navigation sidebar buttons exist in tab order
    const customFwBtn = screen.getByText("新建自定义框架");
    expect(customFwBtn).toBeInTheDocument();
    expect(Array.from(focusable).includes(customFwBtn)).toBe(true);
  });

  it("verifies focusable element paths in ProgrammingMindsetPage", () => {
    render(
      <MemoryRouter>
        <ProgrammingMindsetPage />
      </MemoryRouter>
    );

    const focusable = document.querySelectorAll(focusableSelector);
    expect(focusable.length).toBeGreaterThan(0);
  });

  it("verifies focusable element paths in PythonMecePage", () => {
    render(
      <MemoryRouter>
        <PythonMecePage />
      </MemoryRouter>
    );

    const focusable = document.querySelectorAll(focusableSelector);
    expect(focusable.length).toBeGreaterThan(0);

    // Search and navigation buttons should be focusable
    const nextBtn = screen.getByText("Next Ticket →");
    expect(Array.from(focusable).includes(nextBtn)).toBe(true);
  });

  it("verifies focusable element paths in DuckdbTutorialPage", async () => {
    render(
      <MemoryRouter>
        <DuckdbTutorialPage />
      </MemoryRouter>
    );

    await screen.findAllByText("SELECT 与字面量");

    const focusable = document.querySelectorAll(focusableSelector);
    expect(focusable.length).toBeGreaterThan(0);

    // Reset and Run Query buttons are focusable in SQL Lab
    const runBtn = screen.getByText("Run Query");
    expect(Array.from(focusable).includes(runBtn)).toBe(true);
  });

  it("verifies focusable element paths in ContextEngineeringPage", () => {
    render(
      <MemoryRouter>
        <ContextEngineeringPage />
      </MemoryRouter>
    );

    const focusable = document.querySelectorAll(focusableSelector);
    expect(focusable.length).toBeGreaterThan(0);

    // Execute button should be in focus order
    const executeBtn = screen.getByText("Execute");
    expect(Array.from(focusable).includes(executeBtn)).toBe(true);
  });

  it("verifies focusable element paths in FlowWikiPage", () => {
    render(
      <MemoryRouter>
        <FlowWikiPage />
      </MemoryRouter>
    );

    const focusable = document.querySelectorAll(focusableSelector);
    expect(focusable.length).toBeGreaterThan(0);
  });

  it("verifies focusable element paths in SearchModal Command Palette", () => {
    render(
      <MemoryRouter>
        <SearchModal isOpen={true} onClose={() => {}} />
      </MemoryRouter>
    );

    const focusable = document.querySelectorAll(focusableSelector);
    expect(focusable.length).toBeGreaterThan(0);

    const searchInput = screen.getByPlaceholderText("键入关键词：工单 ID、函数名或方法论原子...");
    expect(Array.from(focusable).indexOf(searchInput)).toBe(0); // Should be the very first focusable element
  });

  it("verifies focusable element paths in Git PromptModal", () => {
    render(
      <MemoryRouter>
        <PromptModal prompt={metaPrompts[0]} isOpen={true} onClose={() => {}} />
      </MemoryRouter>
    );

    const focusable = document.querySelectorAll(focusableSelector);
    expect(focusable.length).toBeGreaterThan(0);

    // Close button should be early in focus order
    const closeBtn = screen.getByLabelText("关闭");
    expect(Array.from(focusable).includes(closeBtn)).toBe(true);
  });
});
