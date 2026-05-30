import React from 'react';
import { cn } from '../utils/cn';

interface SectionHeaderProps {
  title: string;
  description?: string;
  badge?: string;
  className?: string;
  light?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
  badge,
  className,
  light = false,
}) => {
  return (
    <div className={cn("mb-8", className)}>
      <div className="flex items-center gap-2 mb-2">
        <span className={cn("w-1 h-3.5 rounded-full", light ? "bg-white/40" : "bg-slate-900")} />
        <div className={cn("text-xs font-bold uppercase tracking-[0.2em]", light ? "text-white/50" : "text-slate-500")}>
          {badge || "Section"}
        </div>
      </div>
      <h2 className={cn("text-2xl md:text-3xl font-black tracking-tight", light ? "text-white" : "text-slate-900")}>
        {title}
      </h2>
      {description && (
        <p className={cn("mt-4 text-base md:text-lg font-medium leading-relaxed max-w-3xl", light ? "text-white/60" : "text-slate-500")}>
          {description}
        </p>
      )}
    </div>
  );
};

export const MetaTag: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={cn("text-xs font-bold tracking-widest text-slate-500 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm uppercase inline-block", className)}>
    {children}
  </div>
);
