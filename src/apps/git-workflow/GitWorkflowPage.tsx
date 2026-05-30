import { useState, useRef, useEffect } from "react";
import MECEDiagram from "./components/MECEDiagram";
import { GitGraphVisualizer } from "./components/GitGraphVisualizer";
import PromptCard from "./components/PromptCard";
import PromptModal from "./components/PromptModal";
import UsageGuide from "./components/UsageGuide";
import { metaPrompts, MetaPrompt } from "./data/prompts";
import { SearchInput } from "../../components/SearchInput";
import { PageHeader } from "../../components/PageHeader";
import { PageFooter } from "../../components/PageFooter";
import { cn } from "../../utils/cn";
import { SplitViewLayout } from "../../components/SplitViewLayout";

const colorFilters = [
  { label: "🏗️ 初始化", value: "init" },
  { label: "📝 提交", value: "daily-commit" },
  { label: "🌿 分支", value: "branch" },
  { label: "🔄 同步", value: "sync" },
  { label: "🚀 CI/CD", value: "cicd" },
  { label: "⏪ 回滚", value: "rollback" },
  { label: "🔍 审计", value: "audit" },
];

import { validateCommitMessage, type ValidationReport } from "../../utils/gitCommitValidator";
import { matchPinyin } from "../../utils/pinyin";
import { STORAGE_KEYS } from "../../utils/StorageUtility";

interface ValidationHistoryItem {
  id: string;
  timestamp: string;
  message: string;
  score: number;
  type: string;
  scope: string;
  isBreaking: boolean;
  errorsCount: number;
  warningsCount: number;
}

export default function GitWorkflowPage() {
  const [selectedPrompt, setSelectedPrompt] = useState<MetaPrompt | null>(null);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [commitMsg, setCommitMsg] = useState(() => {
    return localStorage.getItem(STORAGE_KEYS.GIT_COMMIT_MSG) || "";
  });
  const [historyList, setHistoryList] = useState<ValidationHistoryItem[]>(() => {
    try {
      const saved = localStorage.getItem("uth_git_commit_history_v1");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const mainContentRef = useRef<HTMLDivElement>(null);

  const handleSaveToHistory = (msg: string, report: ValidationReport) => {
    const newItem: ValidationHistoryItem = {
      id: `H${Date.now()}`,
      timestamp: new Date().toLocaleString(),
      message: msg.trim().split('\n')[0],
      score: report.score,
      type: report.parsed?.type || "unknown",
      scope: report.parsed?.scope || "",
      isBreaking: report.parsed?.isBreaking || false,
      errorsCount: report.errors.length,
      warningsCount: report.warnings.length
    };
    const updated = [newItem, ...historyList].slice(0, 50);
    setHistoryList(updated);
    localStorage.setItem("uth_git_commit_history_v1", JSON.stringify(updated));
  };

  const handleClearHistory = () => {
    setHistoryList([]);
    localStorage.removeItem("uth_git_commit_history_v1");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.setItem(STORAGE_KEYS.GIT_COMMIT_MSG, commitMsg);
    }, 300);
    return () => clearTimeout(timer);
  }, [commitMsg]);

  // Handle Deep Linking via Hash
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (!hash) return;
      
      const params = new URLSearchParams(hash);
      const promptId = params.get('id');
      
      if (promptId) {
        const target = metaPrompts.find(p => p.id === promptId);
        if (target) {
          setSelectedPrompt(target);
          // Wait for rendering then scroll
          setTimeout(() => {
            const el = document.getElementById(`prompt-${promptId}`);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth', block: 'center' });
              el.classList.add('ring-4', 'ring-violet-500/30');
              setTimeout(() => el.classList.remove('ring-4', 'ring-violet-500/30'), 2000);
            }
          }, 300);
        }
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const filteredPrompts = metaPrompts.filter((p) => {
    const matchesFilter = filter === "all" || p.id === filter;
    const q = search.trim();
    const matchesSearch =
      !q ||
      matchPinyin(p.title, q) ||
      matchPinyin(p.subtitle, q) ||
      p.tags.some((t) => matchPinyin(t, q)) ||
      matchPinyin(p.scenario, q);
    return matchesFilter && matchesSearch;
  });

  const sidebar = (
    <>
      <div className="p-8 border-b border-slate-100 bg-white/50 backdrop-blur-sm">
        <SearchInput
          value={search}
          onChange={setSearch}
          placeholder="搜索模块或标签..."
          className="w-full"
        />
      </div>

      <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
        <div className="px-6 py-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          Workflow Modules
        </div>
        
        <button
          onClick={() => setFilter("all")}
          className={cn(
            "w-full flex items-center gap-4 px-6 py-3.5 text-left transition-all duration-300 rounded-2xl group",
            filter === "all"
              ? "bg-slate-900 text-white shadow-xl shadow-violet-950/20 scale-[1.02] border border-violet-500/20"
              : "text-slate-500 hover:bg-white hover:text-slate-900 hover:shadow-md hover:shadow-slate-200/50 border border-transparent"
          )}
        >
          <span className="text-sm font-bold">✨ 全部模块</span>
          <span className="ml-auto text-xs opacity-40 font-black">{metaPrompts.length}</span>
        </button>

        {colorFilters.map((f) => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={cn(
              "w-full flex items-center gap-4 px-6 py-3.5 text-left transition-all duration-300 rounded-2xl group",
              filter === f.value
                ? "bg-slate-900 text-white shadow-xl shadow-violet-950/20 scale-[1.02] border border-violet-500/20"
                : "text-slate-500 hover:bg-white hover:text-slate-900 hover:shadow-md hover:shadow-slate-200/50 border border-transparent"
            )}
          >
            <span className="text-sm font-bold leading-tight truncate">{f.label}</span>
          </button>
        ))}
      </div>
      
      {/* Pre-populated variables for compile correctness */}
      {(() => {
        if (false) console.log(colorFilters);
        return null;
      })()}

      <div className="p-8 bg-white/50 border-t border-slate-100 backdrop-blur-sm">
        <div className="flex items-center gap-3 text-xs font-bold text-slate-400 uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
          Git Mastery Path
        </div>
      </div>
    </>
  );

  return (
    <>
      <SplitViewLayout
      header={
        <PageHeader
          title="Git 全流程"
          subtitle="版本管理 · 闭环工作流 · MECE 架构"
          description="基于 MECE 原则设计的通用闭环元提示体系，覆盖 Git 版本管理全流程。模块相互独立、无重叠，可自由组合使用。"
          icon="🔀"
          gradient="from-violet-500 to-indigo-600"
          badgeText="MECE 原则 · 7 大模块 · 完整闭环"
          stats={[
            { label: "核心模块", value: "7", icon: "📦" },
            { label: "操作步骤", value: "28+", icon: "📌" },
            { label: "Git 命令", value: "50+", icon: "⌨️" },
            { label: "场景覆盖", value: "100%", icon: "🎯" },
          ]}
        />
      }
      sidebar={sidebar}
      footer={
        <PageFooter 
          title="Git Workflow Meta-Prompts"
          description="提升协作效率的 Git 指令工程，让版本管理成为思维的自然延伸。"
          icon="🔀"
          tags={["Vibe Coding", "Conventional Commits", "CI/CD Pipeline", "Audit Loop"]}
          gradient="from-violet-500 to-indigo-600"
        />
      }
      isSidebarOpen={isSidebarOpen}
      onToggleSidebar={setIsSidebarOpen}
      mainRef={mainContentRef}
    >
      <div className="space-y-16">
        <MECEDiagram />
        <GitGraphVisualizer />

        {/* Results count */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-1 h-3.5 rounded-full bg-violet-500" />
            <p className="text-sm font-bold text-slate-900 uppercase tracking-widest">
              Found {filteredPrompts.length} Modules
              {search && (
                <span className="text-slate-400 ml-2 normal-case font-medium">
                  for "{search}"
                </span>
              )}
            </p>
          </div>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Click card for details →</p>
        </div>

        {/* Cards grid */}
        {filteredPrompts.length > 0 ? (
          <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-6">
            {filteredPrompts.map((prompt) => (
              <PromptCard
                key={prompt.id}
                prompt={prompt}
                onClick={() => setSelectedPrompt(prompt)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white rounded-3xl border border-slate-200 shadow-sm">
            <div className="text-6xl mb-4 grayscale opacity-20">🔍</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              未找到匹配的工作流
            </h3>
            <p className="text-slate-500 text-sm mb-6 max-w-xs mx-auto">
              尝试清除搜索条件或选择其他分类
            </p>
            <button
              onClick={() => {
                setSearch("");
                setFilter("all");
              }}
              className="px-6 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10"
            >
              重置筛选
            </button>
          </div>
        )}

        {/* Conventional Commits Reference */}
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xl">
          <div className="px-8 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
            <div className="flex items-center gap-3">
              <span className="text-xl">📐</span>
              <h3 className="font-black text-slate-900 tracking-tight">
                Conventional Commits 快速参考
              </h3>
            </div>
            <span className="text-xs text-slate-400 font-bold tracking-widest uppercase bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">
              Global Standards
            </span>
          </div>
          <div className="p-10">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {[
                { type: "feat", desc: "新功能", color: "hover:border-emerald-200 hover:bg-emerald-50/30 text-emerald-700" },
                { type: "fix", desc: "修复", color: "hover:border-rose-200 hover:bg-rose-50/30 text-rose-700" },
                { type: "docs", desc: "文档", color: "hover:border-blue-200 hover:bg-blue-50/30 text-blue-700" },
                { type: "style", desc: "格式", color: "hover:border-violet-200 hover:bg-violet-50/30 text-violet-700" },
                { type: "refactor", desc: "重构", color: "hover:border-amber-200 hover:bg-amber-50/30 text-amber-700" },
                { type: "test", desc: "测试", color: "hover:border-cyan-200 hover:bg-cyan-50/30 text-cyan-700" },
                { type: "chore", desc: "构建", color: "hover:border-slate-300 hover:bg-slate-50 text-slate-700" },
                { type: "ci", desc: "CI", color: "hover:border-pink-200 hover:bg-pink-50/30 text-pink-700" },
                { type: "perf", desc: "性能", color: "hover:border-teal-200 hover:bg-teal-50/30 text-teal-700" },
                { type: "revert", desc: "回滚", color: "hover:border-slate-400 hover:bg-slate-100 text-slate-900" },
                { type: "build", desc: "编译", color: "hover:border-indigo-200 hover:bg-indigo-50/30 text-indigo-700" },
                { type: "merge", desc: "合并", color: "hover:border-slate-200 hover:bg-slate-50 text-slate-600" },
              ].map((item) => (
                <div
                  key={item.type}
                  className={`flex flex-col items-center justify-center gap-1 p-4 rounded-2xl border border-slate-100 bg-slate-50/50 transition-all cursor-default ${item.color}`}
                >
                  <code className="font-mono font-black text-sm">{item.type}</code>
                  <span className="text-xs opacity-70 font-bold uppercase tracking-tight">{item.desc}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-slate-900 rounded-2xl border border-white/5 shadow-2xl">
              <p className="text-sm text-slate-400 font-mono flex items-center flex-wrap gap-3">
                <span className="text-violet-400 font-bold tracking-widest uppercase text-xs bg-violet-400/10 px-2 py-1 rounded">Format</span>
                <code className="text-emerald-400 font-bold">{"<type>(<scope>): <subject>"}</code>
                <span className="opacity-20 text-white">|</span>
                <span className="opacity-50 text-white italic text-xs">Ex: feat(auth): add OAuth2 support</span>
              </p>
            </div>
          </div>
        </div>

        {/* Commit Message Validator Section */}
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xl">
          <div className="px-8 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
            <div className="flex items-center gap-3">
              <span className="text-xl">🤖</span>
              <h3 className="font-black text-slate-900 tracking-tight">
                Git 提交规范质检沙盒
              </h3>
            </div>
            <span className="text-xs text-violet-600 font-black tracking-widest uppercase bg-violet-50 px-3 py-1.5 rounded-lg border border-violet-100 shadow-sm">
              Interactive REPL
            </span>
          </div>

          <div className="p-10">
            <p className="text-sm font-bold text-slate-500 mb-8 max-w-2xl leading-relaxed">
              根据常规提交规范 (Conventional Commits 1.0.0) 实时评估您的 Commit Message。优秀的提交信息可以帮助项目自动生成 CHANGELOG，并提供清晰的版本历史。
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Left Column: Textarea & Presets */}
              <div className="lg:col-span-7 flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">预设测试用例</span>
                  <div className="flex-1 h-px bg-slate-100" />
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {[
                    { label: "✅ 完美模板", val: "feat(auth): add OAuth2 provider support\n\n- Support GitHub and Google logins\n- Store OAuth tokens securely", type: "success" },
                    { label: "⚠️ 标点/大小写警告", val: "docs(readme): Add installation guides.", type: "warning" },
                    { label: "❌ 格式错误", val: "feat add login page", type: "error" },
                    { label: "❌ 缺失空行", val: "fix(scope): resolve null pointer exception\nthis description violates conventional spacing rules", type: "error" }
                  ].map((p, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCommitMsg(p.val)}
                      className={cn(
                        "px-3 py-1.5 rounded-xl text-xs font-bold border transition-all active:scale-95",
                        p.type === "success" && "bg-emerald-50 text-emerald-700 border-emerald-100 hover:bg-emerald-100/60",
                        p.type === "warning" && "bg-amber-50 text-amber-700 border-amber-100 hover:bg-amber-100/60",
                        p.type === "error" && "bg-rose-50 text-rose-700 border-rose-100 hover:bg-rose-100/60"
                      )}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>

                <div className="bg-slate-900 border border-white/5 rounded-2xl overflow-hidden p-1 shadow-2xl relative">
                  <div className="px-5 py-3 bg-slate-950/40 border-b border-white/5 flex items-center justify-between text-xs text-white/40 font-mono">
                    <span>COMMIT_EDITMSG</span>
                    <button 
                      onClick={() => setCommitMsg("")}
                      className="hover:text-white transition-colors font-bold uppercase tracking-wider"
                    >
                      清空
                    </button>
                  </div>
                  <textarea
                    value={commitMsg}
                    onChange={(e) => setCommitMsg(e.target.value)}
                    className="w-full bg-transparent p-5 font-mono text-sm text-slate-100 outline-none min-h-[160px] resize-none selection:bg-violet-500/30"
                    placeholder="请输入您的 Git 提交信息（第一行为主旨，第三行起为详细说明，中间必须空一行）..."
                    spellCheck={false}
                  />
                </div>
              </div>

              {/* Right Column: Score & Reports */}
              <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-3xl p-8 flex flex-col justify-between shadow-inner">
                {commitMsg.trim() === "" ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-10">
                    <span className="text-5xl opacity-30 mb-4">⌨️</span>
                    <h4 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-1">等待输入</h4>
                    <p className="text-xs text-slate-400 font-medium">请在左侧编辑器中输入 Commit 提交文案</p>
                  </div>
                ) : (() => {
                  const report = validateCommitMessage(commitMsg);
                  let scoreColor = "text-emerald-500 border-emerald-500/20 bg-emerald-500/10";
                  let scoreLabel = "完美符合";
                  if (report.score < 70) {
                    scoreColor = "text-rose-500 border-rose-500/20 bg-rose-500/10";
                    scoreLabel = "验证未通过";
                  } else if (report.score < 90) {
                    scoreColor = "text-amber-500 border-amber-500/20 bg-amber-500/10";
                    scoreLabel = "建议优化";
                  }

                  return (
                    <div className="h-full flex flex-col gap-6">
                      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                        <div>
                          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">规范质量评分</div>
                          <div className="text-2xl font-black text-slate-800">{scoreLabel}</div>
                        </div>
                        <div className={cn("px-4 py-2 border rounded-xl font-black text-2xl font-mono", scoreColor)}>
                          {report.score} <span className="text-xs font-bold opacity-60">分</span>
                        </div>
                      </div>

                      {/* Parsed Structure Preview */}
                      {report.parsed && (
                        <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-2">
                          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">结构解析结果</div>
                          <div className="flex flex-wrap gap-2 text-xs font-mono">
                            <span className="px-2 py-0.5 rounded bg-blue-50 border border-blue-100 text-blue-700 font-black">
                              type: {report.parsed.type}
                            </span>
                            {report.parsed.scope && (
                              <span className="px-2 py-0.5 rounded bg-violet-50 border border-violet-100 text-violet-700 font-black">
                                scope: {report.parsed.scope}
                              </span>
                            )}
                            {report.parsed.isBreaking && (
                              <span className="px-2 py-0.5 rounded bg-rose-100 border border-rose-200 text-rose-700 font-black">
                                💥 Breaking Change
                              </span>
                            )}
                          </div>
                          <div className="text-xs font-mono truncate text-slate-600 pt-1 font-bold">
                            subject: "{report.parsed.subject}"
                          </div>
                        </div>
                      )}

                      {/* Errors and Warnings List */}
                      <div className="flex-1 space-y-3 overflow-y-auto max-h-[200px] pr-2">
                        {report.errors.length === 0 && report.warnings.length === 0 && (
                          <div className="flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-100 rounded-2xl text-emerald-800 text-xs font-bold">
                            <span className="text-base">✨</span>
                            <span>完美的常规提交描述！100% 契合工程自动化生成规约。</span>
                          </div>
                        )}

                        {report.errors.map((err, i) => (
                          <div key={`err-${i}`} className="flex items-start gap-3 p-3 bg-rose-50 border border-rose-100 rounded-xl text-rose-800 text-xs font-bold leading-normal">
                            <span className="text-sm shrink-0">❌</span>
                            <span>{err}</span>
                          </div>
                        ))}

                        {report.warnings.map((warn, i) => (
                          <div key={`warn-${i}`} className="flex items-start gap-3 p-3 bg-amber-50 border border-amber-100 rounded-xl text-amber-800 text-xs font-bold leading-normal">
                            <span className="text-sm shrink-0">⚠️</span>
                            <span>{warn}</span>
                          </div>
                        ))}
                      </div>

                      {/* Save to History Button */}
                      <button
                        onClick={() => handleSaveToHistory(commitMsg, report)}
                        className="mt-4 w-full py-3 bg-violet-600 hover:bg-violet-500 text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all shadow-md active:scale-[0.98] flex items-center justify-center gap-1.5 shrink-0"
                      >
                        💾 记录到质检历史 Log to History
                      </button>
                    </div>
                  );
                })()}
              </div>
            </div>

            {/* History and Trends Analytics Section */}
            {historyList.length > 0 && (
              <div className="mt-12 pt-8 border-t border-slate-100 grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left: SVG Chart (7 cols) */}
                <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-3xl p-8 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">提交质量趋势 (Quality Score Trend)</h4>
                      <h3 className="text-lg font-black text-slate-800 tracking-tight">近期提交质检波动</h3>
                    </div>
                    <span className="text-xs bg-violet-100 text-violet-700 px-2.5 py-1 rounded-full font-bold">
                      平均分: {Math.round(historyList.reduce((acc, h) => acc + h.score, 0) / historyList.length)}分
                    </span>
                  </div>
                  
                  {/* SVG Line Chart */}
                  <div className="bg-white rounded-2xl border border-slate-150 p-4 h-48 flex items-center justify-center">
                    {(() => {
                      const items = [...historyList].slice(0, 10).reverse();
                      const width = 500;
                      const height = 120;
                      const paddingLeft = 40;
                      const paddingRight = 20;
                      const paddingTop = 20;
                      const paddingBottom = 20;
                      
                      const plotWidth = width - paddingLeft - paddingRight;
                      const plotHeight = height - paddingTop - paddingBottom;
                      
                      const stepX = items.length > 1 ? plotWidth / (items.length - 1) : plotWidth;
                      
                      const points = items.map((item, idx) => {
                        const x = paddingLeft + idx * stepX;
                        const y = paddingTop + plotHeight - (item.score / 100) * plotHeight;
                        return { x, y, score: item.score, type: item.type };
                      });
                      
                      const pathD = points.map((p, idx) => `${idx === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
                      const areaD = points.length > 0 
                        ? `${pathD} L ${points[points.length - 1].x} ${height - paddingBottom} L ${points[0].x} ${height - paddingBottom} Z`
                        : '';

                      return (
                        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full font-mono text-[9px] font-bold">
                          {/* Grid Lines */}
                          {[0, 50, 100].map(val => {
                            const y = paddingTop + plotHeight - (val / 100) * plotHeight;
                            return (
                              <g key={val} className="opacity-25">
                                <line x1={paddingLeft} y1={y} x2={width - paddingRight} y2={y} stroke="#cbd5e1" strokeWidth={1} strokeDasharray="3,3" />
                                <text x={10} y={y + 3} className="fill-slate-400 font-sans">{val}</text>
                              </g>
                            );
                          })}
                          
                          {/* Area Gradient */}
                          <defs>
                            <linearGradient id="area-grad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.15" />
                              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.0" />
                            </linearGradient>
                          </defs>
                          
                          {/* Fill Area */}
                          {points.length > 0 && <path d={areaD} fill="url(#area-grad)" />}
                          
                          {/* Path Line */}
                          {points.length > 0 && <path d={pathD} fill="none" stroke="#8b5cf6" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />}
                          
                          {/* Data points */}
                          {points.map((p, idx) => {
                            let circleColor = "#10b981";
                            if (p.score < 70) circleColor = "#ef4444";
                            else if (p.score < 90) circleColor = "#f59e0b";
                            
                            return (
                              <g key={idx}>
                                <circle cx={p.x} cy={p.y} r={4} fill={circleColor} stroke="#ffffff" strokeWidth={1.5} className="cursor-pointer" />
                                <text x={p.x} y={p.y - 8} textAnchor="middle" className="fill-slate-700 font-sans text-[8px]">{p.score}</text>
                                <text x={p.x} y={height - 5} textAnchor="middle" className="fill-slate-400 font-sans text-[7px]">{p.type}</text>
                              </g>
                            );
                          })}
                        </svg>
                      );
                    })()}
                  </div>
                </div>
                
                {/* Right: Validation List (5 cols) */}
                <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-3xl p-8 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">历史质检列表 (History Logs)</h4>
                      <h3 className="text-lg font-black text-slate-800 tracking-tight">质检记录</h3>
                    </div>
                    <button
                      onClick={handleClearHistory}
                      className="text-xs font-bold text-rose-600 hover:text-rose-500 transition-colors uppercase tracking-wider"
                    >
                      🗑️ 清空历史
                    </button>
                  </div>
                  
                  <div className="flex-1 space-y-3 overflow-y-auto max-h-[190px] pr-2">
                    {historyList.map((item) => {
                      let badgeColor = "bg-emerald-50 border-emerald-100 text-emerald-700";
                      if (item.score < 70) badgeColor = "bg-rose-50 border-rose-100 text-rose-700";
                      else if (item.score < 90) badgeColor = "bg-amber-50 border-amber-100 text-amber-700";
                      
                      return (
                        <div key={item.id} className="p-3.5 bg-white border border-slate-200 rounded-2xl flex items-center justify-between gap-3 text-xs shadow-sm hover:shadow transition-shadow">
                          <div className="min-w-0 flex-1">
                            <div className="font-mono text-slate-800 font-bold truncate">
                              {item.message}
                            </div>
                            <div className="text-[10px] text-slate-400 font-medium mt-1 flex items-center gap-1.5 flex-wrap">
                              <span>{item.timestamp}</span>
                              <span className="opacity-30">|</span>
                              <span className="px-1.5 py-0.2 rounded bg-slate-100 text-slate-600 font-black">{item.type}</span>
                              {item.scope && (
                                <>
                                  <span className="opacity-30">|</span>
                                  <span className="px-1.5 py-0.2 rounded bg-violet-50 text-violet-600 font-black">({item.scope})</span>
                                </>
                              )}
                              {item.isBreaking && <span className="text-rose-500 font-black font-sans text-[9px] uppercase tracking-wider">💥 BREAKING</span>}
                            </div>
                          </div>
                          <div className={cn("px-2.5 py-1.5 border rounded-lg font-black text-sm font-mono shrink-0", badgeColor)}>
                            {item.score}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <UsageGuide />
      </div>

      {/* Modal */}
      <PromptModal
        prompt={selectedPrompt}
        onClose={() => setSelectedPrompt(null)}
      />
      </SplitViewLayout>
    </>
  );
}
