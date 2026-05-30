import { describe, it, expect } from "vitest";
import { validateCommitMessage } from "./gitCommitValidator";

describe("validateCommitMessage", () => {
  it("should return invalid and 0 score for empty messages", () => {
    const report = validateCommitMessage("");
    expect(report.isValid).toBe(false);
    expect(report.score).toBe(0);
  });

  it("should validate a perfect conventional commit message", () => {
    const message = "feat(auth): add OAuth2 provider support\n\n- Support GitHub login\n- Secure token storage";
    const report = validateCommitMessage(message);
    expect(report.isValid).toBe(true);
    expect(report.score).toBe(100);
    expect(report.errors).toHaveLength(0);
    expect(report.warnings).toHaveLength(0);
    expect(report.parsed).toEqual({
      type: "feat",
      scope: "auth",
      isBreaking: false,
      subject: "add OAuth2 provider support"
    });
  });

  it("should handle breaking changes marked with !", () => {
    const message = "feat(auth)!: remove legacy password login";
    const report = validateCommitMessage(message);
    expect(report.isValid).toBe(true);
    expect(report.parsed?.isBreaking).toBe(true);
  });

  it("should catch unknown commit types", () => {
    const report = validateCommitMessage("invalidtype(scope): test message");
    expect(report.isValid).toBe(false);
    expect(report.errors).toContain("未知类型：'invalidtype'。推荐使用: feat, fix, docs, refactor, style, test, chore, ci 等");
  });

  it("should catch invalid overall formats", () => {
    const report = validateCommitMessage("feat add login page");
    expect(report.isValid).toBe(false);
    expect(report.errors[0]).toContain("格式错误：必须符合 '<type>(<scope>): <subject>' 格式");
    expect(report.score).toBe(10);
  });

  it("should warn about capitalized subject", () => {
    const report = validateCommitMessage("feat(auth): Add login page");
    expect(report.isValid).toBe(true);
    expect(report.warnings).toContain("主旨首字母大写：规范建议使用小写字母开头，如 'feat: add auth' 而非 'feat: Add auth'");
    expect(report.score).toBe(90); // 100 - 10
  });

  it("should warn about ending with a period", () => {
    const report = validateCommitMessage("feat(auth): add login page.");
    expect(report.isValid).toBe(true);
    expect(report.warnings).toContain("不要以句号结尾：主旨行是命令式句式，不应带有末尾句点");
    expect(report.score).toBe(90);
  });

  it("should warn about subjects over 50 characters and error over 72 characters", () => {
    const long55 = "feat(auth): " + "a".repeat(43); // 12 + 43 = 55 chars
    const reportWarning = validateCommitMessage(long55);
    expect(reportWarning.isValid).toBe(true);
    expect(reportWarning.warnings[0]).toContain("标题略长");
    expect(reportWarning.score).toBe(90);

    const long75 = "feat(auth): " + "a".repeat(63); // 12 + 63 = 75 chars
    const reportError = validateCommitMessage(long75);
    expect(reportError.isValid).toBe(false);
    expect(reportError.errors[0]).toContain("标题过长");
    expect(reportError.score).toBe(80); // 100 - 20
  });

  it("should check for missing blank line before description body", () => {
    const message = "fix(scope): resolve null pointer exception\nthis description violates conventional spacing rules";
    const report = validateCommitMessage(message);
    expect(report.isValid).toBe(false);
    expect(report.errors).toContain("空行缺失：提交主旨（首行）与正文（第三行）之间必须保留一个空行");
  });
});
