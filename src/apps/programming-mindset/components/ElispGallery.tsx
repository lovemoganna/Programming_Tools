import { useState } from "react";
import type { ElispExample } from "../data/enlightenmentData";

interface Props {
  examples: ElispExample[];
}

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  "函数式核心": { bg: "bg-violet-50", text: "text-violet-700", border: "border-violet-200" },
  "闭包与状态": { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200" },
  "宏与元编程": { bg: "bg-rose-50", text: "text-rose-700", border: "border-rose-200" },
  "实用工具": { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200" },
  "列表操作": { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200" },
  "交互与 Buffer": { bg: "bg-cyan-50", text: "text-cyan-700", border: "border-cyan-200" },
};

export default function ElispGallery({ examples }: Props) {
  const [activeId, setActiveId] = useState(examples[0]?.id ?? "");
  const [copied, setCopied] = useState(false);

  const active = examples.find((e) => e.id === activeId) ?? examples[0];
  const colorScheme = categoryColors[active.category] ?? { bg: "bg-slate-50", text: "text-slate-700", border: "border-slate-200" };

  const handleCopy = () => {
    navigator.clipboard.writeText(active.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Tab Bar */}
      <div className="flex gap-1 p-2 border-b border-slate-100 bg-slate-50/50 overflow-x-auto scrollbar-hide">
        {examples.map((ex) => (
          <button
            key={ex.id}
            onClick={() => setActiveId(ex.id)}
            className={`flex-shrink-0 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
              activeId === ex.id
                ? "bg-slate-900 text-white shadow-md"
                : "text-slate-400 hover:text-slate-600 hover:bg-white"
            }`}
          >
            {ex.title.split(" ")[0]}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-8 sm:p-10">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-8">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <span className={`text-xs font-black uppercase tracking-widest px-2 py-0.5 rounded border ${colorScheme.bg} ${colorScheme.text} ${colorScheme.border}`}>
                {active.category}
              </span>
              <span className="text-xs font-mono text-slate-300">/ paradigm_v1.el</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{active.title}</h3>
            <p className="text-sm text-slate-500 mt-2 leading-relaxed max-w-2xl">{active.description}</p>
          </div>
          <button
            onClick={handleCopy}
            className="flex-shrink-0 flex items-center justify-center gap-2 text-xs font-black uppercase tracking-widest px-4 py-2.5 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-all shadow-lg active:scale-95"
          >
            {copied ? (
              <>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                COPIED
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                COPY CODE
              </>
            )}
          </button>
        </div>

        {/* Code Block */}
        <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-white/5 mb-8" style={{ background: 'var(--color-neutral-900)' }}>
          <div className="flex items-center justify-between px-5 py-3 border-b border-white/5 bg-white/5">
            <div className="flex gap-2">
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'var(--color-danger-500)' }}></div>
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'var(--color-warning-400)' }}></div>
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'var(--color-success-500)' }}></div>
            </div>
            <span className="text-xs text-white/20 font-mono tracking-widest uppercase">Buffer: {active.id}.el</span>
          </div>
          <pre className="p-6 text-sm leading-relaxed overflow-x-auto font-mono text-blue-100 scrollbar-hide max-h-[400px]">
            <code>{active.code}</code>
          </pre>
        </div>

        {/* Insight & Tags Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className={`lg:col-span-2 rounded-2xl p-6 border transition-colors ${colorScheme.bg} ${colorScheme.border}`}>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/50 flex items-center justify-center text-xl shadow-inner">✨</div>
              <div>
                <div className={`text-xs font-black uppercase tracking-[0.2em] mb-1.5 ${colorScheme.text}`}>核心洞察 / The Core Insight</div>
                <p className="text-sm text-slate-700 leading-relaxed font-medium">{active.insight}</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6">
            <div className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-4">相关术语 / Tags</div>
            <div className="flex flex-wrap gap-2">
              {active.tags.map((tag) => (
                <span key={tag} className="text-xs font-bold px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-500 uppercase tracking-tighter">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
