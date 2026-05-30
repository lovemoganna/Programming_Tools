import { useState, useMemo, MouseEvent } from "react";
import type { Framework } from "../data/frameworks";

interface Props {
  framework: Framework;
}

const gradientTextMap: Record<string, string> = {
  violet: "from-violet-600 to-purple-700",
  rose: "from-rose-500 to-pink-600",
  blue: "from-blue-500 to-cyan-600",
  indigo: "from-indigo-600 to-blue-600",
  emerald: "from-emerald-500 to-teal-600",
  orange: "from-orange-500 to-amber-600",
  amber: "from-amber-500 to-yellow-500",
  teal: "from-teal-500 to-cyan-600",
  slate: "from-slate-600 to-gray-700",
  purple: "from-purple-600 to-violet-700",
};

const ringMap: Record<string, string> = {
  violet: "focus:ring-violet-300 border-violet-200 focus:border-violet-400",
  rose: "focus:ring-rose-300 border-rose-200 focus:border-rose-400",
  blue: "focus:ring-blue-300 border-blue-200 focus:border-blue-400",
  indigo: "focus:ring-indigo-300 border-indigo-200 focus:border-indigo-400",
  emerald: "focus:ring-emerald-300 border-emerald-200 focus:border-emerald-400",
  orange: "focus:ring-orange-300 border-orange-200 focus:border-orange-400",
  amber: "focus:ring-amber-300 border-amber-200 focus:border-amber-400",
  teal: "focus:ring-teal-300 border-teal-200 focus:border-teal-400",
  slate: "focus:ring-slate-300 border-slate-200 focus:border-slate-400",
  purple: "focus:ring-purple-300 border-purple-200 focus:border-purple-400",
};

const badgeMap: Record<string, string> = {
  violet: "bg-violet-100 text-violet-700",
  rose: "bg-rose-100 text-rose-700",
  blue: "bg-blue-100 text-blue-700",
  indigo: "bg-indigo-100 text-indigo-700",
  emerald: "bg-emerald-100 text-emerald-700",
  orange: "bg-orange-100 text-orange-700",
  amber: "bg-amber-100 text-amber-700",
  teal: "bg-teal-100 text-teal-700",
  slate: "bg-slate-100 text-slate-700",
  purple: "bg-purple-100 text-purple-700",
};

const btnMap: Record<string, string> = {
  violet: "bg-violet-600 hover:bg-violet-700",
  rose: "bg-rose-500 hover:bg-rose-600",
  blue: "bg-blue-600 hover:bg-blue-700",
  indigo: "bg-indigo-600 hover:bg-indigo-700",
  emerald: "bg-emerald-600 hover:bg-emerald-700",
  orange: "bg-orange-500 hover:bg-orange-600",
  amber: "bg-amber-500 hover:bg-amber-600",
  teal: "bg-teal-600 hover:bg-teal-700",
  slate: "bg-slate-700 hover:bg-slate-800",
  purple: "bg-purple-600 hover:bg-purple-700",
};

function generatePrompt(framework: Framework, values: Record<string, string>): string {
  const lines: string[] = [];
  for (const block of framework.blocks) {
    const val = values[block.key]?.trim();
    if (val) {
      lines.push(`【${block.label}】\n${val}`);
    }
  }
  return lines.join("\n\n");
}

export default function PromptBuilder({ framework }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [values, setValues] = useState<Record<string, string>>({});
  const [history, setHistory] = useState<Array<{ id: number; data: Record<string, string>; time: string }>>([]);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"build" | "tips" | "history">("build");

  const c = framework.color;

  const handleChange = (key: string, val: string) => {
    setValues((prev) => ({ ...prev, [key]: val }));
  };

  const loadExample = (e: MouseEvent) => {
    e.stopPropagation();
    setValues(framework.example);
  };

  const clearAll = (e: MouseEvent) => {
    e.stopPropagation();
    setValues({});
  };

  const saveToHistory = (e: MouseEvent) => {
    e.stopPropagation();
    if (Object.keys(values).length === 0) return;
    const entry = {
      id: Date.now(),
      data: { ...values },
      time: new Date().toLocaleTimeString()
    };
    setHistory(prev => [entry, ...prev].slice(0, 10)); // Keep last 10
  };

  const restoreHistory = (data: Record<string, string>) => {
    setValues(data);
    setActiveTab("build");
  };

  const prompt = generatePrompt(framework, values);
  
  // Rough Token Estimation: ~0.75 words per token or ~4 chars per token for EN, ~1 char for CN
  const estimateTokens = (text: string) => {
    if (!text) return 0;
    const chineseChars = text.match(/[\u4e00-\u9fa5]/g)?.length || 0;
    const otherChars = text.length - chineseChars;
    return Math.ceil(chineseChars + otherChars / 4);
  };
  const tokenCount = useMemo(() => estimateTokens(prompt), [prompt]);

  const filled = framework.blocks.filter((b) => values[b.key]?.trim()).length;
  const required = framework.blocks.filter((b) => b.required).length;
  const requiredFilled = framework.blocks.filter((b) => b.required && values[b.key]?.trim()).length;
  const canGenerate = requiredFilled === required;

  const handleCopy = async (e: MouseEvent) => {
    e.stopPropagation();
    if (!prompt) return;
    await navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`group rounded-2xl border transition-all duration-300 overflow-hidden ${
      isExpanded 
        ? "border-slate-300 shadow-xl ring-4 ring-slate-50" 
        : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-md"
    }`}>
      {/* Header - Always Visible */}
      <button 
        type="button"
        aria-expanded={isExpanded}
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-full text-left cursor-pointer p-6 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-t-2xl ${
          isExpanded ? `bg-gradient-to-br ${gradientTextMap[c]} text-white` : "bg-white hover:bg-slate-50 rounded-b-2xl"
        }`}
      >
        <div className="flex items-start justify-between">
          <div className="flex gap-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-sm transition-transform group-hover:scale-105 ${
              isExpanded ? "bg-white/20 backdrop-blur-md" : `bg-gradient-to-br ${gradientTextMap[c]} text-white`
            }`}>
              {framework.icon}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className={`text-xs font-black uppercase tracking-widest px-1.5 py-0.5 rounded ${
                  isExpanded ? "bg-white/20 text-white" : badgeMap[c]
                }`}>
                  {framework.nameEn}
                </span>
                <span className={`text-xs font-mono ${isExpanded ? "text-white/60" : "text-slate-400"}`}>
                  {framework.id}
                </span>
              </div>
              <h3 className={`text-lg font-bold leading-tight ${isExpanded ? "text-white" : "text-slate-900"}`}>
                {framework.name}
              </h3>
              <p className={`text-xs mt-1 leading-relaxed ${isExpanded ? "text-white/80" : "text-slate-500"}`}>
                {framework.tagline}
              </p>
            </div>
          </div>
          
          <div className="flex flex-col items-end gap-2">
            {!isExpanded && (
              <div className="px-2.5 py-1 rounded-lg bg-slate-100 text-xs font-bold text-slate-500 uppercase tracking-tighter">
                {framework.scene.split('，')[0]}
              </div>
            )}
            <div className={`transition-transform duration-300 ${isExpanded ? "rotate-180 text-white" : "text-slate-300"}`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Mini progress when collapsed */}
        {!isExpanded && filled > 0 && (
          <div className="mt-4 flex items-center gap-2">
            <div className="flex-1 h-1 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className={`h-full bg-gradient-to-r ${gradientTextMap[c]} transition-all duration-500`}
                style={{ width: `${(filled / framework.blocks.length) * 100}%` }}
              />
            </div>
            <span className="text-xs font-bold text-slate-400">{filled}/{framework.blocks.length}</span>
          </div>
        )}
      </button>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="animate-in fade-in slide-in-from-top-2 duration-300">
          {/* Tabs */}
          <div className="flex gap-1 p-1.5 bg-slate-100/50 border-y border-slate-200">
            {(["build", "tips", "history"] as const).map((tab) => (
              <button
                key={tab}
                onClick={(e) => { e.stopPropagation(); setActiveTab(tab); }}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                  activeTab === tab
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-500 hover:text-slate-700 hover:bg-white/50"
                }`}
              >
                {tab === "build" ? "🛠️ 构建模式" : tab === "tips" ? "💡 核心技巧" : "🕒 历史版本"}
              </button>
            ))}
          </div>

          <div className="p-8">
            {activeTab === "tips" ? (
              <div className="space-y-4">
                {framework.tips.map((tip, i) => (
                  <div key={i} className="flex gap-4 group/tip">
                    <div className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-black text-white bg-gradient-to-br ${gradientTextMap[c]} shadow-sm group-hover/tip:scale-110 transition-transform`}>
                      {i + 1}
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed font-medium">{tip}</p>
                  </div>
                ))}
              </div>
            ) : activeTab === "history" ? (
              <div className="space-y-4">
                {history.length === 0 ? (
                  <div className="py-12 text-center text-slate-400">
                    <div className="text-3xl mb-2">🕒</div>
                    <p className="text-xs">暂无历史记录，点击构建模式下的「保存当前版本」即可记录</p>
                  </div>
                ) : (
                  history.map((entry) => (
                    <div key={entry.id} className="flex items-center justify-between p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                      <div>
                        <div className="text-xs font-black text-slate-400 uppercase tracking-widest">{entry.time}</div>
                        <div className="text-sm font-bold text-slate-700 mt-1 truncate max-w-xs">
                          {Object.values(entry.data)[0]?.slice(0, 30)}...
                        </div>
                      </div>
                      <button
                        onClick={() => restoreHistory(entry.data)}
                        className="px-3 py-1.5 text-xs font-black uppercase tracking-widest rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-all"
                      >
                        Restore
                      </button>
                    </div>
                  ))
                )}
              </div>
            ) : (
              <div className="space-y-6">
                {/* Actions */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className={`h-2 w-2 rounded-full ${canGenerate ? "bg-emerald-500 animate-pulse" : "bg-slate-300"}`} />
                    <span className="text-xs font-bold text-slate-600">
                      进度：{filled}/{framework.blocks.length}
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <button onClick={saveToHistory} className="text-xs font-bold text-slate-400 hover:text-emerald-600 transition-colors">保存当前版本</button>
                    <button onClick={loadExample} className="text-xs font-bold text-slate-400 hover:text-blue-600 transition-colors">载入示例内容</button>
                    <button onClick={clearAll} className="text-xs font-bold text-slate-400 hover:text-red-500 transition-colors">清空画布</button>
                  </div>
                </div>

                {/* Form */}
                <div className="space-y-6">
                  {framework.blocks.map((block) => (
                    <div key={block.key} className="group/field">
                      <div className="flex items-center justify-between mb-2">
                        <label htmlFor={`field-${framework.id}-${block.key}`} className="text-xs font-black uppercase tracking-wider text-slate-500 group-focus-within/field:text-slate-900 transition-colors">
                          {block.label}
                        </label>
                        {block.required && <span className="text-xs font-bold text-rose-400">REQUIRED</span>}
                      </div>
                      <textarea
                        id={`field-${framework.id}-${block.key}`}
                        value={values[block.key] || ""}
                        onChange={(e) => handleChange(block.key, e.target.value)}
                        placeholder={block.placeholder}
                        rows={3}
                        className={`w-full resize-none rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-700 placeholder-slate-300 outline-none transition-all focus:bg-white focus:ring-4 focus:shadow-inner ${ringMap[c]}`}
                      />
                      <p className="mt-2 text-xs text-slate-400 leading-normal opacity-0 group-focus-within/field:opacity-100 transition-opacity">
                        {block.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Output */}
                {prompt && (
                  <div className="mt-10 animate-in zoom-in-95 duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <h4 className="text-xs font-black uppercase tracking-widest text-slate-900">生成的元提示体</h4>
                        <div className="px-2 py-0.5 rounded-full bg-slate-100 text-xs font-mono text-slate-500 border border-slate-200">
                          {framework.id}
                        </div>
                      </div>
                      <button
                        onClick={handleCopy}
                        className={`inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold text-white shadow-lg transition-all active:scale-95 ${
                          copied ? "bg-emerald-500 shadow-emerald-200" : `${btnMap[c]} shadow-slate-200`
                        }`}
                      >
                        {copied ? "已复制到剪贴板" : "复制完整提示词"}
                      </button>
                    </div>
                    <pre className="bg-slate-900 text-slate-200 rounded-2xl p-6 text-sm leading-relaxed whitespace-pre-wrap font-mono shadow-inner border border-white/5 max-h-80 overflow-auto scrollbar-hide">
                      {prompt}
                    </pre>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
