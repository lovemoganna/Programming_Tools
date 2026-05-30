import { useState } from "react";
import { categories } from "../data/frameworks";

const CHEAT_CONTENT = `
# 元提示框架速查表 · Meta-Prompt Cheat Sheet

## 框架选择指南
| 场景 | 推荐框架 | 核心优势 |
|------|---------|---------|
| 内容创作 / 文案 | RST 框架 | 角色×场景×任务，风格稳定 |
| 营销文案 / 转化 | AIDA 框架 | 注意力漏斗，情绪驱动 |
| 复杂推理 / 决策 | CoT 框架 | 显式推理链，结论可验证 |
| 结构分析 / 报告 | MECE 框架 | 不重不漏，结构清晰 |
| 代码生成 / 架构 | SPEC 框架 | 规格+模式+边界+验收 |
| Bug 修复 / 调试 | BFS 框架 | 定位+修复+防护三位一体 |
| 概念学习 / 教学 | 费曼框架 | 简化+类比+自测 |
| 研究调研 / 评估 | PICO 框架 | 问题+干预+对比+结果 |
| 商业汇报 / 说服 | SCQA 框架 | 情境冲突问题解答 |
| 万能精控输出 | CRAFT 框架 | 背景+角色+行动+格式+语气 |

## 6 大黄金原则
1. 🎯 具体性 — 数字替代形容词
2. 🔒 约束性 — 明确「不要什么」
3. 🔁 可迭代 — 用{{变量}}标注复用点
4. ✅ 可验证 — 末尾加自检标准
5. 🧩 模块化 — 复杂任务拆子提示
6. 📐 格式化 — 显式指定输出结构

## 通用提示词模板（CRAFT）
【背景 Context】
[描述你的身份、任务背景、使用场景]

【角色 Role】
[赋予 AI 专家身份 + 年限 + 风格特征]

【行动 Action】
[精确描述任务动作 + 输出数量 + 关键要求]

【格式 Format】
[表格/列表/Markdown/JSON + 字数限制]

【语气 Tone】
[专业/轻松/严谨 + 反例约束]
`.trim();

export default function CheatSheet() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(CHEAT_CONTENT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Build quick reference table
  const allFrameworks = categories.flatMap((c) => c.frameworks);

  return (
    <section className="py-16 px-6 bg-slate-900 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-400">
          快速参考
        </div>
        <div className="flex items-start justify-between mb-8 flex-wrap gap-4">
          <div>
            <h2 className="text-2xl font-bold mb-2">框架选择速查表</h2>
            <p className="text-slate-400 text-sm">根据你的任务类型，快速定位最合适的框架</p>
          </div>
          <button
            onClick={handleCopy}
            className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all ${
              copied
                ? "bg-emerald-500 text-white"
                : "bg-white/10 text-white hover:bg-white/20 border border-white/10"
            }`}
          >
            {copied ? (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                已复制速查表
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                复制速查表
              </>
            )}
          </button>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/5 border-b border-white/10">
                <th className="px-6 py-4 text-left text-xs font-black text-slate-500 uppercase tracking-[0.2em]">框架框架 / Framework</th>
                <th className="px-6 py-4 text-left text-xs font-black text-slate-500 uppercase tracking-[0.2em]">结构要素 / Blocks</th>
                <th className="px-6 py-4 text-left text-xs font-black text-slate-500 uppercase tracking-[0.2em] hidden md:table-cell">核心场景 / Scenario</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {allFrameworks.map((fw) => (
                <tr
                  key={fw.id}
                  className="group hover:bg-white/[0.03] transition-colors"
                >
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                        {fw.icon}
                      </div>
                      <div>
                        <div className="font-bold text-slate-200 group-hover:text-white transition-colors">{fw.name}</div>
                        <div className="text-xs font-mono text-slate-500 uppercase tracking-tighter">{fw.nameEn}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-wrap gap-1.5">
                      {fw.blocks.map((b) => (
                        <span
                          key={b.key}
                          className="rounded-md bg-white/5 border border-white/5 px-2 py-0.5 text-xs font-bold text-slate-400 group-hover:text-slate-200 transition-colors"
                        >
                          {b.label}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-5 hidden md:table-cell">
                    <span className="text-xs text-slate-500 italic leading-relaxed">
                      {fw.scene}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer note */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none" />
          
          <h3 className="font-black text-lg mb-6 flex items-center gap-3 relative z-10">
            <span className="w-8 h-8 rounded-lg bg-yellow-500/20 text-yellow-500 flex items-center justify-center text-sm shadow-inner">🏆</span> 
            终极提示词公式 / The Ultimate Formula
          </h3>
          <div className="font-mono text-sm text-slate-400 bg-black/40 rounded-xl p-6 leading-loose border border-white/5 relative z-10 shadow-2xl">
            <span className="text-violet-400 font-bold">【角色】</span>你是一位 {"{专家身份 + 核心能力 + 风格}"} ... <br />
            <span className="text-cyan-400 font-bold">【背景】</span>{"{当前情境 + 目标受众 + 解决什么痛点}"} <br />
            <span className="text-emerald-400 font-bold">【任务】</span>请 {"{具体动作 + 输出数量 + 核心交付物}"} ... <br />
            <span className="text-amber-400 font-bold">【格式】</span>输出为 {"{Markdown/表格 + 结构要求 + 限制}"} <br />
            <span className="text-rose-400 font-bold">【约束】</span>不要 {"{负向限制}"} ，务必确保 {"{自检标准}"}
          </div>
        </div>
      </div>
    </section>
  );
}
