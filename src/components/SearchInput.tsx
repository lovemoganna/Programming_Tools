import { SearchIcon, XIcon } from "./Icons";
import { cn } from "../utils/cn";

interface SearchInputProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  ariaLabel?: string;
  className?: string;
}

export function SearchInput({
  value,
  onChange,
  placeholder = "搜索...",
  ariaLabel,
  className,
}: SearchInputProps) {
  return (
    <div className={cn("relative flex-1", className)}>
      <SearchIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
      <input
        type="text"
        placeholder={placeholder}
        aria-label={ariaLabel || placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-10 pr-10 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-400 transition-all shadow-sm"
      />
      {value && (
        <button
          onClick={() => onChange("")}
          aria-label="清除搜索"
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50"
        >
          <XIcon className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
