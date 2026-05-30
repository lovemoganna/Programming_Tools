import { useState } from "react";
import type { PromptModule } from "../data/enlightenmentData";

interface Props {
  module: PromptModule;
}

export default function PromptModuleCard({ module }: Props) {
  const [userInput, setUserInput] = useState("");
  const [promptCopied, setPromptCopied] = useState(false);
  const [fullCopied, setFullCopied] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);

  const handleAIFill = () => {
    const random = module.aiSampleInputs[Math.floor(Math.random() * module.aiSampleInputs.length)];
    setUserInput(random);
  };

  const handleClear = () => {
    setUserInput("");
  };

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(module.systemPrompt);
    setPromptCopied(true);
    setTimeout(() => setPromptCopied(false), 2000);
  };

  const handleCopyFull = () => {
    const full = `【系统提示词】\n${module.systemPrompt}\n\n【用户输入】\n${userInput || "(请填写用户输入)"}`;
    navigator.clipboard.writeText(full);
    setFullCopied(true);
    setTimeout(() => setFullCopied(false), 2000);
  };

  return (
    <div id={`ai-${module.id}`} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:border-slate-300 transition-all duration-300">
      {/* Header */}
      <div className="px-6 py-5 bg-slate-50/50 border-b border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-2xl shadow-sm">
            {module.icon}
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 tracking-tight">{module.title}</h3>
            <div className="flex items-center gap-2 mt-0.5">
              <span className={`text-xs font-black uppercase tracking-widest px-1.5 py-0.5 rounded ${module.bgColor} ${module.color}`}>Meta Module</span>
              <span className="text-xs text-slate-400 font-mono">v4.1.0</span>
            </div>
          </div>
        </div>
        <button
          onClick={() => setShowPrompt(!showPrompt)}
          className={`text-xs font-black uppercase tracking-widest px-3 py-2 rounded-lg border transition-all ${
            showPrompt
              ? "bg-slate-900 text-white border-slate-900 shadow-md"
              : "bg-white text-slate-500 border-slate-200 hover:bg-slate-50"
          }`}
        >
          {showPrompt ? "CLOSE PROMPT" : "VIEW PROMPT"}
        </button>
      </div>

      <div className="p-8">
        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="p-5 rounded-xl border border-slate-100 bg-slate-50/30">
            <div className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">📌 Target Scenario</div>
            <p className="text-base text-slate-600 leading-relaxed font-medium">{module.scenario}</p>
          </div>
          <div className="p-5 rounded-xl border border-rose-100 bg-rose-50/30">
            <div className="text-xs font-black uppercase tracking-widest text-rose-400 mb-2">⚠️ Avoid Misuse</div>
            <p className="text-base text-rose-700 leading-relaxed font-medium">{module.misuse}</p>
          </div>
        </div>

        {/* System Prompt (collapsible) */}
        <div className={`overflow-hidden transition-all duration-500 ${showPrompt ? "max-h-[800px] opacity-100 mb-8" : "max-h-0 opacity-0"}`}>
          <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-inner">
            <div className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white">
              <span className="text-xs font-black uppercase tracking-[0.2em] opacity-50">System Prompt</span>
              <button
                onClick={handleCopyPrompt}
                className="text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded bg-white/10 hover:bg-white/20 transition-colors"
              >
                {promptCopied ? "COPIED" : "COPY RAW"}
              </button>
            </div>
            <pre className="p-8 text-sm leading-relaxed text-slate-300 whitespace-pre-wrap max-h-80 overflow-y-auto font-mono scrollbar-hide" style={{ background: 'var(--color-neutral-900)' }}>
              {module.systemPrompt}
            </pre>
          </div>
        </div>

        {/* Interaction Area */}
        <div className="space-y-8">
          <div className="group/input">
            <div className="flex items-center justify-between mb-4">
              <label htmlFor={`input-${module.id}`} className="text-sm font-black uppercase tracking-widest text-slate-500 group-focus-within/input:text-slate-900 transition-colors">Input Parameters / 输入内容</label>
              <div className="flex gap-4">
                <button onClick={handleAIFill} className="text-xs font-black uppercase tracking-widest text-blue-600 hover:text-blue-700 underline underline-offset-4 decoration-2 decoration-blue-200 transition-all">AI Auto-Fill</button>
                <button onClick={handleClear} disabled={!userInput} className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-rose-500 disabled:opacity-0 transition-all">Clear</button>
              </div>
            </div>
            <textarea
              id={`input-${module.id}`}
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder={module.placeholder}
              rows={4}
              className="w-full text-base text-slate-700 placeholder:text-slate-300 bg-slate-50/50 rounded-2xl border border-slate-200 px-6 py-5 resize-none outline-none focus:bg-white focus:ring-4 focus:ring-slate-100 focus:border-slate-300 transition-all shadow-inner"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            {module.aiSampleInputs.map((sample, i) => (
              <button
                key={i}
                onClick={() => setUserInput(sample)}
                className="text-xs font-bold px-4 py-2 rounded-xl bg-white border border-slate-100 text-slate-400 hover:border-slate-300 hover:text-slate-600 transition-all max-w-[240px] truncate"
              >
                {sample}
              </button>
            ))}
          </div>

          <button
            onClick={handleCopyFull}
            disabled={!userInput}
            className={`w-full py-5 rounded-2xl text-sm font-black uppercase tracking-[0.2em] shadow-xl transition-all active:scale-[0.98] ${
              userInput
                ? `bg-slate-900 text-white hover:bg-slate-800 shadow-slate-200`
                : "bg-slate-100 text-slate-300 shadow-none cursor-not-allowed border border-slate-200"
            }`}
          >
            {fullCopied ? "Prompt Copied to Clipboard!" : "Copy Full Command for AI"}
          </button>
        </div>
      </div>
    </div>
  );
}
