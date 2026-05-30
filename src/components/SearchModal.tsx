import { useState, useEffect, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { buildSearchIndex, searchIndex, SearchEntry } from "../utils/SearchService";
import { motion, AnimatePresence } from "framer-motion";
import { findPinyinMatchRange } from "../utils/pinyin";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

function highlightText(text: string, query: string, active: boolean) {
  const trimmed = query.trim();
  if (!trimmed) return text;

  const range = findPinyinMatchRange(text, trimmed);
  if (!range) return text;

  const before = text.substring(0, range.start);
  const match = text.substring(range.start, range.end);
  const after = text.substring(range.end);

  return (
    <>
      {before}
      <span
        className={
          active
            ? "bg-yellow-400 text-slate-950 px-0.5 rounded font-black shadow-sm"
            : "bg-yellow-200 text-slate-900 px-0.5 rounded font-bold"
        }
      >
        {match}
      </span>
      {after}
    </>
  );
}

export default function SearchModal({ isOpen, onClose }: Props) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();
  const index = useMemo(() => buildSearchIndex(), []);
  const results = useMemo(() => searchIndex(query, index), [query, index]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    // // [Issue-02-Fix] Only bind event listener if the SearchModal is active
    if (!isOpen) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (results.length || 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + (results.length || 1)) % (results.length || 1));
      } else if (e.key === "Enter" && results[selectedIndex]) {
        e.preventDefault();
        handleSelect(results[selectedIndex]);
      } else if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "Tab") {
        // Trap focus to the search input inside search modal
        if (inputRef.current && document.activeElement !== inputRef.current) {
          inputRef.current.focus();
          e.preventDefault();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, results, selectedIndex]);

  useEffect(() => {
    if (results.length > 0) {
      const activeEl = document.getElementById(`search-item-${selectedIndex}`);
      if (activeEl) {
        activeEl.scrollIntoView({
          behavior: "auto",
          block: "nearest"
        });
      }
    }
  }, [selectedIndex, results]);

  const handleSelect = (item: SearchEntry) => {
    const targetPath = item.hash ? `${item.path}#${item.hash}` : item.path;
    navigate(targetPath);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[12vh] px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/20 backdrop-blur-[2px]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -10 }}
            className="relative w-full max-w-2xl bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_32px_64px_-12px_rgba(0,0,0,0.15)] border border-slate-200 overflow-hidden flex flex-col"
          >
            <div className="flex items-center px-6 py-5 border-b border-slate-100 bg-white/50">
              {/* // [Issue-03] Associated label for accessibility */}
              <label htmlFor="global-search-input" className="sr-only">全局搜索</label>
              <span className="text-xl mr-4 opacity-50">🔍</span>
              <input
                id="global-search-input"
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="键入关键词：工单 ID、函数名或方法论原子..."
                aria-label="全局搜索"
                role="combobox"
                aria-expanded={isOpen}
                aria-autocomplete="list"
                aria-controls="search-results-list"
                aria-activedescendant={results.length > 0 ? `search-item-${selectedIndex}` : undefined}
                className="flex-1 bg-transparent border-none outline-none text-xl font-medium text-slate-900 placeholder:text-slate-300"
              />
              <div className="flex items-center gap-2 ml-4">
                <kbd className="px-2 py-1 rounded bg-slate-100 border border-slate-200 text-xs font-black text-slate-400 shadow-sm uppercase tracking-widest">ESC</kbd>
              </div>
            </div>

            <div className="max-h-[50vh] overflow-y-auto p-3 scrollbar-hide">
              {!query ? (
                <div className="py-16 text-center">
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ repeat: Infinity, duration: 4 }}
                    className="text-6xl mb-8 grayscale opacity-20 inline-block"
                  >
                    ⌨️
                  </motion.div>
                  <div className="text-base font-black text-slate-900 uppercase tracking-[0.3em] mb-3">Command Palette</div>
                  <p className="text-slate-400 text-sm font-medium max-w-xs mx-auto leading-relaxed">
                    输入关键词开启跨模块秒级直达 <br />
                    支持：工单 ID、函数名或方法论原子
                  </p>
                </div>
              ) : results.length > 0 ? (
                <div id="search-results-list" role="listbox" className="space-y-1.5">
                  {results.map((item, i) => (
                    <button
                      key={`${item.type}-${item.id}`}
                      id={`search-item-${i}`}
                      tabIndex={-1}
                      role="option"
                      aria-selected={i === selectedIndex}
                      onMouseEnter={() => setSelectedIndex(i)}
                      onClick={() => handleSelect(item)}
                      className={cn(
                        "w-full flex items-center gap-4 p-3.5 rounded-xl text-left transition-all duration-200 group",
                        i === selectedIndex 
                          ? "bg-slate-900 text-white shadow-xl shadow-slate-900/10 scale-[1.01]" 
                          : "hover:bg-slate-50"
                      )}
                    >
                      <div className={cn(
                        "w-11 h-11 rounded-lg flex items-center justify-center text-xl shadow-sm shrink-0 transition-transform duration-300",
                        i === selectedIndex ? "bg-white/10 rotate-3 scale-110" : "bg-slate-100"
                      )}>
                        {item.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={cn(
                            "text-xs font-black uppercase tracking-[0.15em] px-2 py-0.5 rounded-md transition-colors",
                            i === selectedIndex ? "bg-white/15 text-white" : "bg-slate-100 text-slate-500"
                          )}>
                            {item.type}
                          </span>
                          <h4 className="font-bold text-base truncate tracking-tight">{highlightText(item.title, query, i === selectedIndex)}</h4>
                        </div>
                        <p className={cn(
                          "text-xs truncate font-medium",
                          i === selectedIndex ? "text-slate-200" : "text-slate-400"
                        )}>
                          {highlightText(item.subtitle, query, i === selectedIndex)}
                        </p>
                      </div>
                      <div className={cn(
                        "flex items-center gap-1.5 transition-opacity duration-300",
                        i === selectedIndex ? "opacity-100" : "opacity-0"
                      )}>
                        <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-xs font-black border border-white/10">ENTER</kbd>
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="py-20 text-center">
                  <div className="text-5xl mb-6 opacity-10">🚫</div>
                  <h3 className="text-lg font-black text-slate-900 uppercase tracking-widest mb-2">无匹配结果</h3>
                  <p className="text-slate-400 text-sm font-medium">尝试搜索其他关键词，如 "Python" 或 "XLOOKUP"</p>
                </div>
              )}
            </div>

            <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
              {/* // [Issue-02] Make footer navigation actions wrap on small screen sizes */}
              <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs font-black text-slate-300 uppercase tracking-widest">
                <span className="flex items-center gap-2"><span className="text-base opacity-50">↑↓</span> Navigate</span>
                <span className="flex items-center gap-2"><span className="text-base opacity-50">↵</span> Select</span>
                <span className="flex items-center gap-2"><span className="text-base opacity-50">⎋</span> Close</span>
              </div>
              <div className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] opacity-40 hidden md:block">
                Index v2.1 · 8 Modules Linked
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

// Utility class helper needed since we are in a new file
function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
