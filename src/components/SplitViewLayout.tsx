import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../utils/cn';

interface SplitViewLayoutProps {
  header: React.ReactNode;
  sidebar: React.ReactNode;
  footer: React.ReactNode;
  children: React.ReactNode;
  isSidebarOpen?: boolean;
  onToggleSidebar?: (open: boolean) => void;
  mainRef?: React.RefObject<HTMLDivElement | null>;
  className?: string;
  mainClassName?: string;
  sidebarPosition?: 'left' | 'right';
  sidebarWidth?: number;
}

/**
 * A reusable layout for pages with a fixed header/footer and a split sidebar/main content area.
 * Handles mobile screens by converting the sidebar into a drawer with an overlay.
 */
export const SplitViewLayout: React.FC<SplitViewLayoutProps> = ({
  header,
  sidebar,
  footer,
  children,
  isSidebarOpen: externalOpen,
  onToggleSidebar,
  mainRef,
  className,
  mainClassName,
  sidebarPosition = 'right',
  sidebarWidth = 320
}) => {
  const [internalOpen, setInternalOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  
  // Detect mobile screen
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (mobile && externalOpen === undefined) {
        setInternalOpen(false); // Default to closed on mobile
      }
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [externalOpen]);

  const isOpen = externalOpen !== undefined ? externalOpen : internalOpen;
  const toggle = () => {
    const next = !isOpen;
    if (onToggleSidebar) onToggleSidebar(next);
    else setInternalOpen(next);
  };

  return (
    <div className={cn("min-h-screen bg-slate-50 flex flex-col lg:px-4 lg:py-6", className)}>
      <div className="flex-1 max-w-7xl w-full mx-auto flex flex-col overflow-hidden border border-slate-200/80 shadow-2xl relative bg-white lg:rounded-3xl">
        {header}
        <div className={cn("flex-1 flex overflow-hidden relative", sidebarPosition === 'right' ? "flex-row-reverse" : "flex-row")}>
        {/* Mobile Overlay */}
        <AnimatePresence>
          {isMobile && isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggle}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px] z-30"
            />
          )}
        </AnimatePresence>

        {/* Sidebar Container */}
        <motion.aside
          initial={false}
          animate={{ 
            width: isOpen ? sidebarWidth : 0, 
            opacity: (isMobile && !isOpen) ? 0 : 1,
            x: (isMobile && !isOpen) ? (sidebarPosition === 'right' ? sidebarWidth : -sidebarWidth) : 0
          }}
          // // [Layout-Perf-Fix] Use smooth ease-in-out tween to avoid spring jitter layout thrashing
          transition={{ type: "tween", ease: "easeInOut", duration: 0.25 }}
          className={cn(
            "flex-shrink-0 bg-slate-50/50 overflow-hidden flex flex-col h-full",
            sidebarPosition === 'right' ? "border-l border-slate-100" : "border-r border-slate-100",
            isMobile ? (sidebarPosition === 'right' ? "absolute inset-y-0 right-0 z-40 bg-white" : "absolute inset-y-0 left-0 z-40 bg-white") : "relative"
          )}
        >
          {/* Inner wrapper to maintain constant width during collapse animation */}
          <div 
            style={{ width: sidebarWidth }} 
            className="h-full flex flex-col"
            onClick={(e) => {
              if (isMobile) {
                const target = e.target as HTMLElement;
                const isLink = target.tagName === 'A' || target.closest('a');
                if (isLink) {
                  setInternalOpen(false);
                  if (onToggleSidebar) onToggleSidebar(false);
                }
              }
            }}
          >
            {sidebar}
          </div>
        </motion.aside>

        {/* Main Content Area */}
        {/* // [1] 将 toggle button 的定位容器设为非滚动容器，以防滚动时 toggle 按钮消失 */}
        {/* // [3] 增加 min-w-0 并在 main 和其父容器上应用，防止宽内容引起布局溢出 */}
        <div className="flex-1 bg-white relative flex flex-col min-w-0 overflow-hidden">
          {/* Sidebar Toggle Button */}
          <div className={cn("absolute z-20", sidebarPosition === 'right' ? "top-4 right-4 md:top-8 md:right-8" : "top-4 left-4 md:top-8 md:left-8")}>
            <button
              onClick={toggle}
              className="p-2.5 md:p-3 bg-white border border-slate-200 rounded-xl text-slate-400 hover:text-slate-900 hover:border-slate-300 shadow-md transition-all active:scale-95 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2"
              aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={isOpen && isMobile ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>

          <main 
            ref={mainRef}
            className={cn("flex-1 overflow-y-auto scroll-smooth min-w-0", mainClassName)}
          >
            <div className="max-w-7xl w-full mx-auto px-4 py-8 md:px-8 md:py-12 lg:px-12 space-y-8 md:space-y-12">
              {children}
            </div>
            {footer}
          </main>
        </div>
        </div>
      </div>
    </div>
  );
};
