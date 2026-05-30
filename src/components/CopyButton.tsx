import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { DesignTokens } from "@/theme/design-tokens";

interface CopyButtonProps {
  text: string;
  className?: string;
}

export function CopyButton({ text, className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <motion.button
      whileHover={DesignTokens.motion.hover}
      whileTap={DesignTokens.motion.tap}
      onClick={handleCopy}
      className={cn(
        "inline-flex items-center justify-center min-w-[105px] gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2",
        copied
          ? "bg-emerald-50 text-emerald-600 border border-emerald-100 shadow-sm shadow-emerald-500/10"
          : "bg-slate-100 text-slate-700 hover:bg-slate-900 hover:text-white border border-transparent hover:shadow-lg hover:shadow-slate-900/10",
        className
      )}
    >
      {copied ? (
        <>
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          已复制
        </>
      ) : (
        <>
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
          复制代码
        </>
      )}
    </motion.button>
  );
}
