import React from 'react';
import { cn } from '../utils/cn';

interface PageFooterProps {
  title: string;
  description: string;
  icon: string | React.ReactNode;
  tags: string[];
  gradient?: string;
  className?: string;
}

export const PageFooter: React.FC<PageFooterProps> = ({
  title,
  description,
  icon,
  tags,
  gradient = "from-slate-700 to-slate-900",
  className
}) => {
  return (
    <footer className={cn("bg-slate-900 py-8 px-6 text-center text-white/50 border-t border-white/5", className)}>
      <div className="mx-auto max-w-7xl px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-lg shadow-lg", gradient)}>
            {icon}
          </div>
          <span className="text-white font-black tracking-tight text-lg">{title}</span>
        </div>
        <p className="text-white/80 text-xs max-w-lg mx-auto leading-relaxed">
          {description}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-white/50 grayscale">
          {tags.map(tag => <span key={tag}>{tag}</span>)}
        </div>
      </div>
    </footer>
  );
};
