import { useState } from "react";
import { difficultyConfig, type Category, type Prompt } from "../data/prompts";
import { cn } from "@/utils/cn";
import { SparkleIcon, CheckIcon, CopyIcon } from "@/components/Icons";

interface ExcelPromptCardProps {
  prompt: Prompt;
  category: Category;
}

export default function ExcelPromptCard({ prompt, category }: ExcelPromptCardProps) {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const diff = difficultyConfig[prompt.difficulty];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt.prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <div id={`prompt-${prompt.id}`} className={cn(
      "relative flex flex-col rounded-2xl border bg-white shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden group",
      category.borderColor
    )}>
      {/* Top accent */}
      <div className={cn("h-1 w-full bg-slate-200", category.bgColor.replace("-50", "-300"))} />

      <div className="flex flex-col flex-1 p-5">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-2 min-w-0">
            <span className="text-2xl flex-shrink-0">{category.icon}</span>
            <h3 className="font-black text-slate-800 text-lg leading-tight tracking-tight">{prompt.title}</h3>
          </div>
          <span className={cn(
            "flex-shrink-0 text-xs font-black uppercase tracking-widest px-2 py-0.5 rounded-lg border",
            diff.color, diff.bg, diff.border
          )}>
            {prompt.difficulty}
          </span>
        </div>

        {/* Scenario */}
        <p className="text-base text-slate-500 mb-4 leading-relaxed font-medium">{prompt.scenario}</p>

        {/* Prompt body */}
        <div className={cn("relative rounded-xl border p-5 mb-4 flex-1", category.bgColor, category.borderColor)}>
          <p className={cn(
            "text-base leading-relaxed font-mono whitespace-pre-wrap",
            category.color,
            !expanded && "line-clamp-4"
          )}>
            {prompt.prompt}
          </p>
          {!expanded && (
            <div className="absolute bottom-0 left-0 right-0 h-10 rounded-b-xl bg-gradient-to-t from-white/50 to-transparent pointer-events-none" />
          )}
        </div>

        {/* Expand toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className={cn(
            "text-sm font-bold mb-4 self-start transition-opacity hover:opacity-70",
            category.color
          )}
        >
          {expanded ? "收起 ▲" : "展开完整提示词 ▼"}
        </button>

        {/* Output hint */}
        <div className="flex items-start gap-2 mb-5">
          <SparkleIcon className={cn("w-4 h-4 mt-1 flex-shrink-0", category.color)} />
          <p className="text-sm text-slate-500 leading-relaxed font-medium">
            <span className="font-bold text-slate-700">预期输出：</span>{prompt.output}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {prompt.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 border border-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Copy button */}
        <button
          onClick={handleCopy}
          className={cn(
            "w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200",
            copied
              ? "bg-emerald-500 text-white"
              : cn(category.bgColor, category.color, "border", category.borderColor, "hover:brightness-95")
          )}
        >
          {copied ? (
            <>
              <CheckIcon className="w-4 h-4" />
              已复制！
            </>
          ) : (
            <>
              <CopyIcon className="w-4 h-4" />
              复制提示词
            </>
          )}
        </button>
      </div>
    </div>
  );
}
