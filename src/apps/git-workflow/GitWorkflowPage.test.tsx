import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import GitWorkflowPage from "./GitWorkflowPage";

describe("GitWorkflowPage Component", () => {
  it("renders the page title and conventional commits reference card", () => {
    render(
      <MemoryRouter>
        <GitWorkflowPage />
      </MemoryRouter>
    );

    // Check title in Header
    expect(screen.getByText("Git 全流程")).toBeInTheDocument();
    
    // Check Conventional Commits Reference title
    expect(screen.getByText("Conventional Commits 快速参考")).toBeInTheDocument();
  });

  it("renders the interactive Commit Message Validator section and processes inputs", () => {
    render(
      <MemoryRouter>
        <GitWorkflowPage />
      </MemoryRouter>
    );

    // Check Validator title
    expect(screen.getByText("Git 提交规范质检沙盒")).toBeInTheDocument();

    // Find commit message textarea
    const textareas = screen.getAllByPlaceholderText("请输入您的 Git 提交信息（第一行为主旨，第三行起为详细说明，中间必须空一行）...") as HTMLTextAreaElement[];
    expect(textareas.length).toBeGreaterThan(0);
    const textarea = textareas[0];

    // Trigger input validation: a valid format
    fireEvent.change(textarea, { target: { value: "feat(auth): add OAuth2 provider" } });
    
    // Check score board
    expect(screen.getByText("100")).toBeInTheDocument();
    expect(screen.getByText("完美符合")).toBeInTheDocument();

    // Trigger input validation: an invalid format
    fireEvent.change(textarea, { target: { value: "feat add login page" } });

    // Check updated score board and error notifications
    expect(screen.getByText("10")).toBeInTheDocument();
    expect(screen.getByText("验证未通过")).toBeInTheDocument();
    expect(screen.getByText(/格式错误：必须符合/)).toBeInTheDocument();
  });

  it("loads presets correctly and updates the score", () => {
    render(
      <MemoryRouter>
        <GitWorkflowPage />
      </MemoryRouter>
    );

    // Click "⚠️ 标点/大小写警告" preset button
    const warningBtn = screen.getByText("⚠️ 标点/大小写警告");
    fireEvent.click(warningBtn);

    // Verify warnings display
    expect(screen.getByText("80")).toBeInTheDocument();
    expect(screen.getByText("建议优化")).toBeInTheDocument();
    expect(screen.getByText(/主旨首字母大写：/)).toBeInTheDocument();
    expect(screen.getByText(/不要以句号结尾：/)).toBeInTheDocument();
  });

  it("restores commit message from localStorage on mount", () => {
    localStorage.setItem("git_commit_validator_msg", "feat(test): message from localstorage");
    
    render(
      <MemoryRouter>
        <GitWorkflowPage />
      </MemoryRouter>
    );

    expect(screen.getByText("100")).toBeInTheDocument();
    const textarea = screen.getByPlaceholderText("请输入您的 Git 提交信息（第一行为主旨，第三行起为详细说明，中间必须空一行）...") as HTMLTextAreaElement;
    expect(textarea.value).toBe("feat(test): message from localstorage");
  });
});
