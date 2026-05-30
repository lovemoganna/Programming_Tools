import { useState } from "react";
import { MetaPrompt } from "../data/prompts";

interface PromptCardProps {
  prompt: MetaPrompt;
  onClick: () => void;
}

export default function PromptCard({ prompt, onClick }: PromptCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    await navigator.clipboard.writeText(prompt.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id={`prompt-${prompt.id}`}
      onClick={onClick}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      tabIndex={0}
      role="button"
      aria-label={`查看 ${prompt.title} 提示词`}
      className="group relative bg-white rounded-2xl border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 transition-all duration-200 cursor-pointer overflow-hidden"
    >
      {/* Top gradient bar */}
      <div className={`h-1 w-full bg-gradient-to-r ${prompt.bgGradient} opacity-80 group-hover:opacity-100 transition-opacity`} />

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-center gap-3.5">
            <div
              className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${prompt.bgGradient} flex items-center justify-center text-2xl text-white shadow-sm group-hover:scale-110 transition-transform duration-500`}
            >
              {prompt.icon}
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span
                  className={`text-xs uppercase tracking-widest font-black px-1.5 py-0.5 rounded bg-slate-50 border ${prompt.badgeColor}`}
                >
                  {prompt.module}
                </span>
                <span className="text-xs text-slate-400 font-mono truncate">
                  {prompt.subtitle}
                </span>
              </div>
              <h3 className="text-slate-900 font-bold text-lg leading-tight truncate">
                {prompt.title}
              </h3>
            </div>
          </div>

          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-slate-900 border border-slate-100 transition-all duration-200 shrink-0"
          >
            {copied ? (
              <>
                <svg className="w-3.5 h-3.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-green-600">已复制</span>
              </>
            ) : (
              <>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span>复制</span>
              </>
            )}
          </button>
        </div>

        {/* Scenario */}
        <p className="text-sm text-slate-500 mb-5 leading-relaxed line-clamp-2 h-10">
          {prompt.scenario}
        </p>

        {/* Steps preview */}
        <div className="space-y-2.5 mb-6">
          {prompt.steps.slice(0, 3).map((step, i) => (
            <div key={i} className="flex items-center gap-3">
              <div
                className={`w-5 h-5 rounded-full bg-gradient-to-br ${prompt.bgGradient} flex items-center justify-center shrink-0 shadow-sm`}
              >
                <span className="text-white text-xs font-black">{i + 1}</span>
              </div>
              <span className="text-sm text-slate-600 font-medium truncate">{step.title}</span>
            </div>
          ))}
          {prompt.steps.length > 3 && (
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200">
                <span className="text-slate-400 text-xs font-bold">+{prompt.steps.length - 3}</span>
              </div>
              <span className="text-xs text-slate-400">查看其余 {prompt.steps.length - 3} 个步骤...</span>
            </div>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 h-12 content-start overflow-hidden">
          {prompt.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-2 py-0.5 bg-slate-50 text-slate-400 border border-slate-200 rounded-md hover:border-slate-300 transition-colors"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs text-slate-400">{prompt.steps.length} 个操作步骤</span>
          <span className="text-xs text-slate-400 group-hover:text-slate-600 transition-colors flex items-center gap-1">
            查看详情
            <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
