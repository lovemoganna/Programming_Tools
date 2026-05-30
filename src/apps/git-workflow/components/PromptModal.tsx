import { useState, useEffect } from "react";
import { MetaPrompt } from "../data/prompts";

interface PromptModalProps {
  prompt: MetaPrompt | null;
  onClose: () => void;
  // [Issue-01] Add optional isOpen to match testing suite instantiation
  isOpen?: boolean;
}

export default function PromptModal({ prompt, onClose }: PromptModalProps) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"prompt" | "steps">("prompt");

  useEffect(() => {
    if (prompt) {
      document.body.style.overflow = "hidden";
      setActiveTab("prompt");
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [prompt]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!prompt) return null;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Simple markdown-like renderer for prompt text
  const renderPromptText = (text: string) => {
    // Split text by double newlines to separate paragraphs/blocks
    const blocks = text.split(/\n\s*\n/);
    
    return blocks.map((block, i) => {
      const trimmedBlock = block.trim();
      if (!trimmedBlock) return null;

      // Check if it's a heading
      if (trimmedBlock.startsWith("# ")) {
        return (
          <h1 key={i} className="text-lg font-bold text-slate-900 mt-6 mb-3">
            {trimmedBlock.slice(2)}
          </h1>
        );
      }

      // Check if it's a list (contains numbered items or bullet points)
      const lines = block.split("\n");
      const isList = lines.some(line => /^\s*(\d+\.|\*|-)\s+/.test(line));

      if (isList) {
        return (
          <div key={i} className="space-y-2 mt-2 mb-2">
            {lines.map((line, j) => {
              const trimmedLine = line.trim();
              
              // Numbered list item
              if (/^\d+\. /.test(trimmedLine)) {
                const content = trimmedLine.replace(/^\d+\. /, "");
                const num = trimmedLine.match(/^(\d+)\./)?.[1];
                return (
                  <div key={j} className="flex gap-3 items-start mt-2">
                    <span className="font-bold text-slate-800 shrink-0 min-w-[1rem]">{num}.</span>
                    <span className="font-semibold text-slate-800 leading-relaxed">
                      {renderInline(content)}
                    </span>
                  </div>
                );
              }
              
              // Bullet item
              if (trimmedLine.startsWith("* ") || trimmedLine.startsWith("- ")) {
                const content = trimmedLine.slice(2);
                // Indentation level: check if the original line had leading spaces
                const isSubItem = line.startsWith("  ") || line.startsWith("\t") || line.startsWith("    ");
                return (
                  <div key={j} className="flex gap-2.5 items-start mt-1">
                    <span className={isSubItem ? "ml-6 text-slate-400 shrink-0 mt-2 text-xs inline-block transform scale-50" : "ml-2 text-slate-400 shrink-0 mt-1.5 text-xs inline-block transform scale-75"}>
                      {isSubItem ? "○" : "●"}
                    </span>
                    <span className="text-slate-600 text-sm leading-relaxed">
                      {renderInline(content)}
                    </span>
                  </div>
                );
              }

              // Normal text within a list block (fallback)
              return (
                <div key={j} className="text-slate-600 text-sm leading-relaxed ml-6">
                  {renderInline(line)}
                </div>
              );
            })}
          </div>
        );
      }

      // Check if it's a warning block
      if (trimmedBlock.startsWith("⚠️")) {
        return (
          <div
            key={i}
            className="my-5 p-4 bg-amber-50 border border-amber-100 rounded-2xl text-sm text-amber-800 leading-relaxed flex gap-3 items-start animate-fade-in"
          >
            <span className="text-lg shrink-0 mt-0.5">⚠️</span>
            <div>{renderInline(trimmedBlock.replace(/^⚠️\s*/, ""))}</div>
          </div>
        );
      }

      // Default: render as a normal paragraph block
      return (
        <p key={i} className="text-slate-600 text-sm leading-relaxed mb-4 whitespace-pre-line">
          {renderInline(trimmedBlock)}
        </p>
      );
    });
  };

  const renderInline = (text: string) => {
    // Split by backtick code spans and bold markers
    const parts = text.split(/(`[^`]+`|\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("`") && part.endsWith("`")) {
        return (
          <code
            key={i}
            className="px-1.5 py-0.5 bg-slate-100 text-slate-700 rounded font-mono text-xs border border-slate-200"
          >
            {part.slice(1, -1)}
          </code>
        );
      }
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={i} className="font-semibold text-slate-800">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-modal-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`bg-gradient-to-br ${prompt.bgGradient} p-8 pb-10 text-white relative overflow-hidden`}>
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl" />
          
          <div className="relative z-10 flex items-start justify-between">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-4xl shadow-inner">
                {prompt.icon}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs tracking-widest uppercase font-black px-2 py-0.5 bg-white/20 rounded-md">
                    {prompt.module}
                  </span>
                  <span className="text-xs text-white/60 font-mono">
                    {prompt.subtitle}
                  </span>
                </div>
                <h2 className="text-3xl font-bold tracking-tight">{prompt.title}</h2>
                <p className="text-white/70 text-sm mt-1.5">{prompt.scenario}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all shrink-0 -mt-1 hover:rotate-90"
              aria-label="关闭"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Tags */}
          <div className="relative z-10 flex flex-wrap gap-2 mt-6">
            {prompt.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-2 py-1 bg-black/10 text-white/90 rounded border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Tabs */}
          <div className="absolute bottom-0 left-8 flex gap-1 bg-white/10 backdrop-blur-md rounded-t-xl p-1.5">
            <button
              onClick={() => setActiveTab("prompt")}
              className={`px-6 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === "prompt"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
            >
              📋 元提示体
            </button>
            <button
              onClick={() => setActiveTab("steps")}
              className={`px-6 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === "steps"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
            >
              📌 步骤详解
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto bg-slate-50/50">
          {activeTab === "prompt" ? (
            <div className="p-8">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <div className="space-y-4">{renderPromptText(prompt.prompt)}</div>
              </div>
            </div>
          ) : (
            <div className="p-8 space-y-5">
              {prompt.steps.map((step, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:border-slate-300 transition-colors"
                >
                  <div className={`flex items-center gap-3 px-6 py-4 bg-slate-50/50 border-b border-slate-100`}>
                    <div
                      className={`w-8 h-8 rounded-full bg-gradient-to-br ${prompt.bgGradient} flex items-center justify-center shadow-sm text-white`}
                    >
                      <span className="text-xs font-black">{i + 1}</span>
                    </div>
                    <h4 className="font-bold text-slate-800 tracking-tight">{step.title}</h4>
                  </div>
                  <div className="px-6 py-5 space-y-3">
                    {step.items.map((item, j) => (
                      <div key={j} className="flex items-start gap-2.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0" />
                        <span className="text-sm text-slate-600 leading-relaxed">
                          {item.split(/(`[^`]+`)/g).map((part, k) => {
                            if (part.startsWith("`") && part.endsWith("`")) {
                              return (
                                <code
                                  key={k}
                                  className="px-1.5 py-0.5 bg-white text-slate-700 rounded font-mono text-xs border border-slate-200 mx-0.5"
                                >
                                  {part.slice(1, -1)}
                                </code>
                              );
                            }
                            return <span key={k}>{part}</span>;
                          })}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-100 bg-white flex items-center justify-between gap-3">
          <p className="text-xs text-slate-400">
            按 <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-200 rounded text-slate-500 font-mono text-xs">Esc</kbd> 关闭
          </p>
          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-all"
            >
              关闭
            </button>
            <button
              onClick={handleCopy}
              className={`flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-medium transition-all bg-gradient-to-r ${prompt.bgGradient} text-white shadow-md hover:shadow-lg hover:scale-105 active:scale-100`}
            >
              {copied ? (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  已复制到剪贴板！
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  复制元提示体
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
