import React from 'react';
import { cn } from '../utils/cn';

interface PageHeaderProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  description: string;
  icon: string;
  gradient: string;
  badgeText: string;
  stats?: { label: string; value: string | number; icon: string }[];
  className?: string;
  children?: React.ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  description,
  icon,
  gradient,
  badgeText,
  stats,
  className,
  children
}) => {
  return (
    <header className={cn("relative overflow-hidden bg-slate-900 text-white", className)}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className={cn("absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl opacity-30", gradient.split(' ')[1])}></div>
        <div className={cn("absolute -bottom-24 -left-24 w-64 h-64 rounded-full blur-3xl opacity-20", gradient.split(' ')[1])}></div>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-6 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
          <div className={cn("flex items-center justify-center w-12 h-12 rounded-xl text-white shadow-xl text-2xl shrink-0", gradient)}>
            {icon}
          </div>
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/15 rounded-full text-xs font-bold uppercase tracking-widest text-white/80 mb-2 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse opacity-70" />
              {badgeText}
            </div>
            <h1 className="text-xl md:text-2xl font-black tracking-tight leading-none">
              {title}
              {subtitle && (
                <span className={cn("bg-clip-text text-transparent ml-3", gradient.replace('from-', 'to-'))}>
                  {subtitle}
                </span>
              )}
            </h1>
          </div>
        </div>

        <p className="text-white/60 text-xs md:text-sm max-w-2xl leading-relaxed mb-6 mx-auto md:mx-0">
          {description}
        </p>

        {stats && (
          <div className="flex flex-wrap justify-center md:justify-start gap-10">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <span className="text-xl">{stat.icon}</span>
                <div className="text-left">
                  <div className="text-xl font-black text-white">{stat.value}</div>
                  <div className="text-white/40 text-xs font-bold uppercase tracking-widest">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {children && <div className="mt-8">{children}</div>}
      </div>
    </header>
  );
};
