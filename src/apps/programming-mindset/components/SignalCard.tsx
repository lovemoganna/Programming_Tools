import { useState } from "react";
import type { Signal } from "../data/enlightenmentData";

interface Props {
  signal: Signal;
  index: number;
}

export default function SignalCard({ signal, index }: Props) {
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(signal.elisp.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div id={`signal-${signal.id}`} className={`group bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
      expanded ? "border-slate-300 shadow-xl" : "border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md"
    }`}>
      {/* Header */}
      <button
        type="button"
        aria-expanded={expanded}
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left flex items-start gap-5 p-6 cursor-pointer select-none outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-t-2xl"
      >
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-3xl shadow-inner group-hover:scale-110 transition-transform">
          {signal.icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-xs font-black uppercase tracking-widest text-violet-500 bg-violet-50 px-2 py-0.5 rounded">
              SIGNAL {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <h3 className="text-lg font-bold text-slate-900 leading-tight">
            {signal.title}
          </h3>
          <p className="text-sm text-slate-500 mt-1.5 leading-relaxed">{signal.description}</p>
        </div>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center transition-all duration-300 ${
          expanded ? "bg-slate-900 text-white rotate-180" : "bg-white text-slate-400"
        }`}>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* Comparison Grid */}
      <div className="px-6 pb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="relative p-5 rounded-xl border border-slate-100 bg-slate-50/50">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-slate-400"></div>
            <span className="text-xs font-black uppercase tracking-widest text-slate-400">Before / 没开窍时</span>
          </div>
          <p className="text-base text-slate-500 leading-relaxed font-medium">{signal.before}</p>
        </div>
        <div className="relative p-5 rounded-xl border border-blue-100 bg-blue-50/30">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            <span className="text-xs font-black uppercase tracking-widest text-blue-600">After / 开窍之后</span>
          </div>
          <p className="text-base text-slate-700 leading-relaxed font-bold">{signal.after}</p>
        </div>
      </div>

      {/* Expandable Content */}
      <div className={`transition-all duration-500 ${expanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-6 py-8 border-t border-slate-100 bg-slate-50/30">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-violet-400 animate-pulse"></span>
              <h4 className="text-xs font-black uppercase tracking-widest text-slate-900">Emacs Lisp 范式演示</h4>
            </div>
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 text-xs font-black uppercase tracking-widest px-3 py-2 rounded-lg bg-white border border-slate-200 text-slate-500 hover:text-slate-900 transition-all active:scale-95 shadow-sm"
            >
              {copied ? "COPIED" : "COPY CODE"}
            </button>
          </div>

          {/* Code Block */}
          <div className="rounded-xl overflow-hidden shadow-2xl border border-white/5 mb-6" style={{ background: 'var(--color-neutral-900)' }}>
            <div className="px-4 py-2 border-b border-white/5 flex items-center justify-between">
              <span className="text-xs font-mono text-white/30 tracking-widest uppercase">{signal.elisp.title}</span>
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-white/10"></div>
                <div className="w-2 h-2 rounded-full bg-white/10"></div>
              </div>
            </div>
            <pre className="p-6 text-sm leading-relaxed overflow-x-auto font-mono text-blue-100 scrollbar-hide">
              <code>{signal.elisp.code}</code>
            </pre>
          </div>

          {/* Explanation */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-50 text-amber-500 flex items-center justify-center text-lg shadow-inner">💡</div>
              <div>
                <div className="text-xs font-black uppercase tracking-widest text-amber-600 mb-1.5">核心洞察 / Insight</div>
                <p className="text-base text-slate-600 leading-relaxed font-medium">
                  {signal.elisp.explanation}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
