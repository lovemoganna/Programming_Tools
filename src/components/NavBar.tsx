import { Link, useLocation } from "react-router-dom";
import { cn } from "../utils/cn";
import { useState, useEffect } from "react";
import SearchModal from "./SearchModal";
import { StorageUtility } from "../utils/StorageUtility";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/excel", label: "Excel" },
  { path: "/git", label: "Git" },
  { path: "/mece", label: "Framework" },
  { path: "/mindset", label: "Mindset" },
  { path: "/python", label: "Python" },
  { path: "/duckdb", label: "DuckDB" },
  { path: "/ce", label: "Context" },
  { path: "/wiki", label: "Wiki" },
];

export default function NavBar() {
  const location = useLocation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    // Use capture phase (true) to intercept Ctrl+K event before any inner elements suppress it
    window.addEventListener("keydown", handleKeyDown, true);
    return () => window.removeEventListener("keydown", handleKeyDown, true);
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full bg-slate-50/80 backdrop-blur-xl border-b border-slate-200/60 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group shrink-0 mr-8">
          <div className="w-8 h-8 rounded-xl bg-slate-900 flex items-center justify-center text-white font-black group-hover:rotate-12 transition-all shadow-lg shadow-slate-900/10">
            P
          </div>
          <span className="font-black text-slate-900 tracking-tighter hidden lg:block uppercase text-sm">Tools Hub</span>
        </Link>

        {/* Search Trigger Button */}
        <button
          onClick={() => setIsSearchOpen(true)}
          className="hidden md:flex items-center gap-3 px-4 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl text-slate-400 hover:text-slate-600 transition-all mr-6 min-w-[200px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2"
        >
          <span className="text-xs font-bold uppercase tracking-widest">Search Tools...</span>
          <kbd className="ml-auto px-1.5 py-0.5 rounded bg-white border border-slate-200 text-xs font-black shadow-sm">⌘K</kbd>
        </button>

        {/* Export Knowledge Report Button */}
        <button
          onClick={() => StorageUtility.exportAsMarkdown()}
          className="hidden md:flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl text-emerald-600 hover:text-emerald-700 font-black text-xs uppercase tracking-wider transition-all mr-4 shrink-0 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          title="导出个人知识资产报告"
        >
          <span>💾</span>
          <span>Export</span>
        </button>

        {/* Mobile Search Icon */}
        <button
          onClick={() => setIsSearchOpen(true)}
          className="flex md:hidden items-center justify-center w-9 h-9 bg-slate-50 rounded-lg text-slate-400 mr-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
          aria-label="Search"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>

        {/* Mobile Export Icon */}
        <button
          onClick={() => StorageUtility.exportAsMarkdown()}
          className="flex md:hidden items-center justify-center w-9 h-9 bg-emerald-50 border border-emerald-100 rounded-lg text-emerald-600 mr-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          aria-label="Export Knowledge"
          title="导出个人知识资产报告"
        >
          <span>💾</span>
        </button>

        {/* Scrollable Nav Area with Fading Masks */}
        <div className="flex-1 overflow-hidden relative flex items-center justify-end mr-2">
          {/* Left mask for indicating scrollable content on left */}
          <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-slate-50 to-transparent pointer-events-none z-10" />
          
          <div className="w-full flex items-center justify-end overflow-x-auto scrollbar-hide px-4">
            <div className="flex items-center gap-1.5 p-1 bg-slate-50/50 rounded-xl border border-slate-100">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={cn(
                      "px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-widest transition-all duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-1",
                      isActive
                        ? "bg-slate-900 text-white shadow-lg shadow-slate-900/10"
                        : "text-slate-400 hover:text-slate-900 hover:bg-slate-100"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
          
          {/* Right mask for indicating scrollable content on right */}
          <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-slate-50 to-transparent pointer-events-none z-10" />
        </div>
      </div>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </nav>
  );
}
