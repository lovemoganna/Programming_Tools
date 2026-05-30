import React from 'react';
import { cn } from '../../utils/cn';
import { AICapabilities } from '../../utils/AICapabilityService';

interface ConsoleHeaderProps {
  onClose: () => void;
  caps: AICapabilities | null;
}

export const ConsoleHeader: React.FC<ConsoleHeaderProps> = ({ onClose, caps }) => {
  return (
    <>
      <div className="px-8 py-5 bg-white/5 border-b border-white/5 flex items-center justify-between backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center text-xl shadow-lg shadow-blue-500/20">
            🧠
          </div>
          <div>
            <div className="text-xs font-black text-white/70 uppercase tracking-[0.2em] leading-none mb-1">Simulation Sandbox</div>
            <div className="text-sm font-black text-white tracking-tight">Intelligence Console</div>
          </div>
        </div>
        <button 
          onClick={onClose}
          aria-label="关闭控制台"
          className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
        </button>
      </div>
 
      {caps && (
        <div className="px-8 py-2 bg-blue-500/10 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className={cn("w-1.5 h-1.5 rounded-full animate-pulse", caps.webGPUSupported ? "bg-emerald-500" : "bg-amber-500")} />
            <span className="text-xs font-bold text-white/70 uppercase tracking-widest">
              {caps.webGPUSupported ? `Simulation Active · ${caps.recommendedModel}` : "Simulation Mode"}
            </span>
          </div>
          <div className="text-xs font-bold text-blue-400 uppercase tracking-widest">v4.0.2</div>
        </div>
      )}
    </>
  );
};
