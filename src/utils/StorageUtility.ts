/**
 * Utility for global local storage management
 * Supports export/import of all app progress
 */

import { CURRICULUM as pythonCurriculum } from "../apps/python-mece/data/curriculum";
import { DUCKDB_TICKETS as duckdbTickets } from "../apps/duckdb-tutorial/data/tickets";
import { TICKETS as ceTickets } from "../apps/context-engineering/data/tickets";
import { categories as excelCategories } from "../apps/excel-prompts/data/prompts";

/**
 * Core Storage Keys
 */
export const STORAGE_KEYS = {
  PYTHON_PROGRESS: "python_mece_progress",
  DUCKDB_PROGRESS: "duckdb_tutorial_progress",
  CONTEXT_PROGRESS: "ce_engineering_progress",
  MECE_PROGRESS: "mece_framework_progress",
  APP_THEME: "core_theme_preference",
  GIT_COMMIT_MSG: "git_commit_validator_msg"
};

export const StorageUtility = {
  /**
   * Generates a comprehensive Markdown report of all mastered content
   */
  generateKnowledgeExport: (): string => {
    let md = `# Programming Tools Hub - 个人知识资产报告\n`;
    md += `> 生成日期: ${new Date().toLocaleString()}\n\n`;

    // 1. Python Progress
    const pySaved = localStorage.getItem(STORAGE_KEYS.PYTHON_PROGRESS);
    if (pySaved) {
      const completedIds = JSON.parse(pySaved) as number[];
      if (completedIds.length > 0) {
        md += `## 🐍 Python 工程化进阶\n`;
        md += `**掌握程度**: ${completedIds.length} / 21 原子工单\n\n`;
        
        const allTickets: any[] = [];
        pythonCurriculum.forEach(ch => ch.tickets.forEach(t => allTickets.push(t)));
        
        completedIds.forEach(idx => {
          const t = allTickets[idx];
          if (t) md += `- [x] **${t.id}**: ${t.title} (${t.sub})\n`;
        });
        md += `\n`;
      }
    }

    // 2. DuckDB Progress
    const duckSaved = localStorage.getItem(STORAGE_KEYS.DUCKDB_PROGRESS);
    if (duckSaved) {
      const completedIds = JSON.parse(duckSaved) as number[];
      if (completedIds.length > 0) {
        md += `## 🦆 DuckDB 端侧数据分析\n`;
        md += `**实战进度**: ${completedIds.length} / ${duckdbTickets.length} 核心关卡\n\n`;
        completedIds.forEach(idx => {
          const t = duckdbTickets[idx];
          if (t) md += `- [x] **${t.id}**: ${t.title}\n`;
        });
        md += `\n`;
      }
    }

    // 3. Context Engineering
    const ceSaved = localStorage.getItem(STORAGE_KEYS.CONTEXT_PROGRESS);
    if (ceSaved) {
      const completedIds = JSON.parse(ceSaved) as number[];
      if (completedIds.length > 0) {
        md += `## ⚙️ 上下文工程 (Context v4)\n`;
        md += `**模式掌握**: ${completedIds.length} / ${ceTickets.length} 种元提示模式\n\n`;
        completedIds.forEach(idx => {
          const t = ceTickets[idx];
          if (t) md += `- [x] **${t.id}**: ${t.title} (${t.tag})\n`;
        });
        md += `\n`;
      }
    }

    md += `---\n*此报告由 Programming Tools Hub 自动生成。保持原子化思考，持续进化。*`;
    return md;
  },

  exportAsMarkdown: () => {
    const content = StorageUtility.generateKnowledgeExport();
    const blob = new Blob([content], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `my-knowledge-assets-${new Date().toISOString().split('T')[0]}.md`;
    link.click();
    URL.revokeObjectURL(url);
  },

  exportBackup: () => {
    const data: Record<string, string | null> = {};
    Object.values(STORAGE_KEYS).forEach(key => {
      data[key] = localStorage.getItem(key);
    });

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `programming-tools-backup-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
  }
};
