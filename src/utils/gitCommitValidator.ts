export interface ValidationReport {
  isValid: boolean;
  score: number;
  errors: string[];
  warnings: string[];
  parsed?: {
    type: string;
    scope?: string;
    isBreaking: boolean;
    subject: string;
  };
}

export function validateCommitMessage(message: string): ValidationReport {
  const errors: string[] = [];
  const warnings: string[] = [];
  
  if (!message.trim()) {
    return { isValid: false, score: 0, errors: [], warnings: [] };
  }

  const lines = message.split('\n');
  const header = lines[0];

  const pattern = /^([a-z0-9\-]+)(?:\(([^)]+)\))?(!)?:\s+(.+)$/;
  const match = header.match(pattern);

  if (!match) {
    errors.push("格式错误：必须符合 '<type>(<scope>): <subject>' 格式 (括号和范围可选)");
    return { isValid: false, score: 10, errors, warnings };
  }

  const [, type, scope, breaking, subject] = match;
  
  const validTypes = ["feat", "fix", "docs", "style", "refactor", "test", "chore", "ci", "perf", "revert", "build", "merge"];
  if (!validTypes.includes(type)) {
    errors.push(`未知类型：'${type}'。推荐使用: feat, fix, docs, refactor, style, test, chore, ci 等`);
  }

  if (header.length > 72) {
    errors.push(`标题过长：首行长度为 ${header.length} 个字符。Git 规范要求首行不超过 72 个字符`);
  } else if (header.length > 50) {
    warnings.push(`标题略长：首行长度为 ${header.length} 个字符。推荐保持在 50 个字符以内以获得最佳可读性`);
  }

  if (subject && /^[A-Z]/.test(subject)) {
    warnings.push("主旨首字母大写：规范建议使用小写字母开头，如 'feat: add auth' 而非 'feat: Add auth'");
  }

  if (subject && (subject.endsWith('.') || subject.endsWith('。'))) {
    warnings.push("不要以句号结尾：主旨行是命令式句式，不应带有末尾句点");
  }

  if (lines.length > 1) {
    if (lines[1].trim() !== "") {
      errors.push("空行缺失：提交主旨（首行）与正文（第三行）之间必须保留一个空行");
    }
  }

  let score = 100;
  score -= errors.length * 20;
  score -= warnings.length * 10;
  score = Math.max(0, score);

  return {
    isValid: errors.length === 0,
    score,
    errors,
    warnings,
    parsed: {
      type,
      scope: scope || undefined,
      isBreaking: !!breaking,
      subject
    }
  };
}
