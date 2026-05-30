/**
 * Core Design Components
 * Reusable UI components that follow the design system
 */

import React, { useState } from 'react';
import { cn } from '../../utils/cn';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

// === Tag Component ===
export interface TagProps {
  children: React.ReactNode;
  variant?: 'flow' | 'onto' | 'wish' | 'lazy' | 'exec' | 'new' | 'primary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md';
  className?: string;
}

export const Tag: React.FC<TagProps> = ({
  children,
  variant = 'primary',
  size = 'sm',
  className
}) => {
  const baseClasses = 'inline-flex items-center rounded-full font-bold uppercase tracking-wider';
  
  const sizeClasses = {
    sm: 'px-2.5 py-0.5 text-xs',
    md: 'px-3 py-1 text-xs',
  };
  
  const variantClasses: Record<string, string> = {
    flow: 'bg-[var(--color-tag-flow-bg)] text-[var(--color-tag-flow-text)]',
    onto: 'bg-[var(--color-tag-onto-bg)] text-[var(--color-tag-onto-text)]',
    wish: 'bg-[var(--color-tag-wish-bg)] text-[var(--color-tag-wish-text)]',
    lazy: 'bg-[var(--color-tag-lazy-bg)] text-[var(--color-tag-lazy-text)]',
    exec: 'bg-[var(--color-tag-exec-bg)] text-[var(--color-tag-exec-text)]',
    new: 'bg-[var(--color-tag-new-bg)] text-[var(--color-tag-new-text)]',
    primary: 'bg-[var(--color-primary-100)] text-[var(--color-primary-700)]',
    success: 'bg-[var(--color-success-100)] text-[var(--color-success-700)]',
    warning: 'bg-[var(--color-warning-100)] text-[var(--color-warning-700)]',
    danger: 'bg-[var(--color-danger-100)] text-[var(--color-danger-700)]',
  };
  
  return (
    <span className={cn(baseClasses, sizeClasses[size], variantClasses[variant], className)}>
      {children}
    </span>
  );
};

// === Callout Component ===
export interface CalloutProps {
  children: React.ReactNode;
  type?: 'info' | 'warn' | 'danger' | 'success' | 'purple';
  title?: string;
  className?: string;
}

export const Callout: React.FC<CalloutProps> = ({
  children,
  type = 'info',
  title,
  className
}) => {
  const typeClasses: Record<string, { bg: string; border: string; text: string }> = {
    info: { bg: 'bg-[var(--color-info-50)]', border: 'border-[var(--color-info-500)]', text: 'text-[var(--color-neutral-800)]' },
    warn: { bg: 'bg-[var(--color-warning-50)]', border: 'border-[var(--color-warning-500)]', text: 'text-[var(--color-accent-900)]' },
    danger: { bg: 'bg-[var(--color-danger-50)]', border: 'border-[var(--color-danger-500)]', text: 'text-[var(--color-danger-700)]' },
    success: { bg: 'bg-[var(--color-success-50)]', border: 'border-[var(--color-success-500)]', text: 'text-[var(--color-success-700)]' },
    purple: { bg: 'bg-[var(--color-secondary-50)]', border: 'border-[var(--color-secondary-600)]', text: 'text-[var(--color-secondary-900)]' },
  };
  
  const styles = typeClasses[type];
  
  return (
    <div className={cn('rounded-xl p-5 my-5 text-sm leading-relaxed border-l-4', styles.bg, styles.text, styles.border, className)}>
      {title && (
        <div className="font-bold mb-2 text-xs uppercase tracking-widest opacity-60">
          {title}
        </div>
      )}
      {children}
    </div>
  );
};

// === Card Component ===
export interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'bordered';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  padding = 'md',
  className,
  onClick
}) => {
  const baseClasses = 'rounded-2xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500';
  
  const variantClasses = {
    default: 'bg-white border border-slate-100 shadow-sm',
    elevated: 'bg-white shadow-lg hover:shadow-xl hover:-translate-y-0.5',
    bordered: 'bg-white border-2 border-slate-200',
  };
  
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };
  
  return (
    <div
      className={cn(baseClasses, variantClasses[variant], paddingClasses[padding], className)}
      onClick={onClick}
      onKeyDown={onClick ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      } : undefined}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </div>
  );
};

// === Badge Component ===
export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'sm',
  className
}) => {
  const baseClasses = 'inline-flex items-center rounded-full font-bold uppercase tracking-widest';
  
  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-xs',
  };
  
  const variantClasses: Record<string, string> = {
    primary: 'bg-[var(--color-primary-100)] text-[var(--color-primary-700)]',
    secondary: 'bg-[var(--color-neutral-100)] text-[var(--color-neutral-600)]',
    success: 'bg-[var(--color-success-100)] text-[var(--color-success-700)]',
    warning: 'bg-[var(--color-warning-100)] text-[var(--color-warning-700)]',
    danger: 'bg-[var(--color-danger-100)] text-[var(--color-danger-700)]',
  };
  
  return (
    <span className={cn(baseClasses, sizeClasses[size], variantClasses[variant], className)}>
      {children}
    </span>
  );
};

// === Step Card Component ===
export interface StepCardProps {
  step: number;
  title: string;
  description: string;
  className?: string;
}

export const StepCard: React.FC<StepCardProps> = ({
  step,
  title,
  description,
  className
}) => {
  return (
    <div className={cn('flex gap-4 p-5 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow', className)}>
      <div className="w-9 h-9 rounded-full bg-[var(--color-primary-600)] text-white flex items-center justify-center font-bold text-sm shrink-0">
        {step}
      </div>
      <div>
        <h4 className="font-bold text-slate-900 mb-1">{title}</h4>
        <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

// === Code Block Component ===
export interface CodeBlockProps {
  children: React.ReactNode;
  label?: string;
  className?: string;
  fontSize?: 'xs' | 'sm' | 'base' | 'lg';
  fontFamily?: 'mono' | 'sans' | 'serif';
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  children,
  label,
  className,
  fontSize = 'sm',
  fontFamily = 'mono'
}) => {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);

  const fontSizeClass = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
  }[fontSize];

  const fontFamilyClass = {
    mono: 'font-mono',
    sans: 'font-sans',
    serif: 'font-serif',
  }[fontFamily];

  // Helper to extract text from ReactNode recursively
  const getTextContent = (node: React.ReactNode): string => {
    if (node === null || node === undefined) return '';
    if (typeof node === 'string' || typeof node === 'number') return node.toString();
    if (Array.isArray(node)) return node.map(getTextContent).join('');
    if (React.isValidElement(node)) {
      if (node.type === 'br') return '\n';
      return getTextContent((node.props as { children?: React.ReactNode }).children);
    }
    return '';
  };

  const textContent = getTextContent(children);
  const isEmpty = !textContent || textContent.trim() === '';

  const fallbackCopy = (text: string): boolean => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      return successful;
    } catch (err) {
      console.error('Fallback copy failed', err);
      document.body.removeChild(textArea);
      return false;
    }
  };

  const handleCopy = async () => {
    if (isEmpty) return;
    
    // Check if modern Clipboard API is available and in secure context
    if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
      try {
        await navigator.clipboard.writeText(textContent);
        setCopied(true);
        setCopyError(false);
        setTimeout(() => setCopied(false), 2000);
        return;
      } catch (err) {
        console.warn('Modern clipboard write failed, trying fallback...', err);
      }
    }
    
    // Fallback path
    const success = fallbackCopy(textContent);
    if (success) {
      setCopied(true);
      setCopyError(false);
      setTimeout(() => setCopied(false), 2000);
    } else {
      setCopyError(true);
      setTimeout(() => setCopyError(false), 3000);
    }
  };

  if (isEmpty) {
    return (
      <div className={cn('rounded-xl border border-dashed border-slate-300 p-6 text-center bg-slate-50', className)}>
        <p className="text-sm text-slate-500 mb-2">代码块内容为空</p>
        <p className="text-xs text-slate-400">请检查数据源，或在此输入有效的代码文本以进行展示。</p>
      </div>
    );
  }

  return (
    <div className={cn('rounded-xl border bg-slate-900 overflow-hidden relative flex flex-col', className)} style={{ borderColor: 'var(--color-neutral-800)' }}>
      {/* Top Header Bar (Issue 02) */}
      <div className="flex items-center justify-between px-4 py-2 border-b" style={{ background: 'var(--color-neutral-800)', borderColor: 'var(--color-neutral-700)' }}>
        <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
          {label || 'Code'}
        </span>
        {/* Copy Button (Issue 01, 03) */}
        <button
          onClick={handleCopy}
          className={cn(
            "inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium font-sans transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-slate-900 focus:ring-indigo-400",
            copied
              ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
              : copyError
              ? "bg-rose-500/10 text-rose-400 border border-rose-500/20"
              : "bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700 hover:text-white"
          )}
          aria-label={copied ? "已复制" : "复制代码"}
          title={copied ? "已复制" : "复制代码"}
        >
          {copied ? (
            <>
              <svg className="w-3.5 h-3.5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>已复制</span>
            </>
          ) : copyError ? (
            <>
              <svg className="w-3.5 h-3.5 text-rose-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
              <span>复制失败，请手动选择复制</span>
            </>
          ) : (
            <>
              <svg className="w-3.5 h-3.5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              <span>复制代码</span>
            </>
          )}
        </button>
      </div>

      {/* Code Area */}
      <div className={cn('leading-relaxed overflow-x-auto', fontFamilyClass, fontSizeClass)} style={{ background: 'var(--color-neutral-900)' }}>
        <SyntaxHighlighter
          language={(label || 'text').toLowerCase()}
          style={oneDark}
          customStyle={{
            margin: 0,
            padding: '1.25rem',
            background: 'transparent',
            fontSize: 'inherit',
            lineHeight: 'inherit',
            fontFamily: 'inherit'
          }}
          codeTagProps={{
            style: { fontFamily: 'inherit' }
          }}
        >
          {textContent}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

// === Checklist Item Component ===
export interface ChecklistItemProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

export const ChecklistItem: React.FC<ChecklistItemProps> = ({
  checked,
  onChange,
  children,
  className
}) => {
  return (
    <label className={cn('flex items-center gap-3 cursor-pointer', className)}>
      <div
        className={cn(
          'w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500',
          checked
            ? 'bg-[var(--color-primary-600)] border-[var(--color-primary-600)] text-white shadow-lg shadow-indigo-600/30'
            : 'border-slate-200 hover:border-indigo-400'
        )}
        onClick={() => onChange(!checked)}
        onKeyDown={(e) => {
          if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            onChange(!checked);
          }
        }}
        role="checkbox"
        aria-checked={checked}
        tabIndex={0}
      >
        {checked && (
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>
      <span className={cn('text-sm', checked ? 'text-slate-400 line-through' : 'text-slate-700')}>
        {children}
      </span>
    </label>
  );
};

// === Comparison Table Component ===
export interface TableColumn {
  key: string;
  header: string;
  align?: 'left' | 'center' | 'right';
}

export interface ComparisonTableProps {
  columns: TableColumn[];
  data: Record<string, string | React.ReactNode>[];
  className?: string;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({
  columns,
  data,
  className
}) => {
  const alignClasses: Record<string, string> = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };
  
  return (
    <div className={cn('rounded-xl overflow-hidden border border-slate-200', className)}>
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-slate-50">
            {columns.map((col) => (
              <th
                key={col.key}
                className={cn(
                  'px-4 py-3 text-left font-bold text-xs uppercase tracking-wider text-slate-500',
                  alignClasses[col.align || 'left']
                )}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className={cn('border-t border-slate-100 hover:bg-slate-50/50 transition-colors', i === data.length - 1 ? 'border-b-0' : '')}>
              {columns.map((col) => (
                <td
                  key={col.key}
                  className={cn('px-4 py-3 text-slate-600', alignClasses[col.align || 'left'])}
                >
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// === Breadcrumb Component ===
export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  className
}) => {
  return (
    <nav className={cn('flex items-center gap-2 text-xs text-slate-500 flex-wrap', className)}>
      {items.map((item, i) => (
        <React.Fragment key={i}>
          {i > 0 && <span className="text-slate-300">/</span>}
          {item.href ? (
            <a href={item.href} className="hover:text-[var(--color-primary-600)] transition-colors">
              {item.label}
            </a>
          ) : (
            <span className="font-semibold text-slate-700">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

// === Progress Bar Component ===
export interface ProgressBarProps {
  value: number; // 0-100
  max?: number;
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'success' | 'warning' | 'danger';
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  showLabel = false,
  size = 'md',
  color = 'primary',
  className
}) => {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  
  const sizeClasses = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3',
  };
  
  const colorClasses: Record<string, string> = {
    primary: 'bg-[var(--color-primary-600)]',
    success: 'bg-[var(--color-success-500)]',
    warning: 'bg-[var(--color-warning-500)]',
    danger: 'bg-[var(--color-danger-500)]',
  };
  
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <div className={cn('flex-1 bg-slate-200 rounded-full overflow-hidden', sizeClasses[size])}>
        <div
          className={cn('h-full rounded-full transition-all duration-300', colorClasses[color])}
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showLabel && (
          <span className="text-xs font-bold text-slate-500 min-w-12 text-right">
          {Math.round(percentage)}%
        </span>
      )}
    </div>
  );
};

// === Empty State Component ===
export interface EmptyStateProps {
  icon?: string;
  title: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  title,
  description,
  action,
  className
}) => {
  return (
    <div className={cn('text-center py-16 px-8', className)}>
      {icon && (
        <div className="text-5xl mb-4 opacity-50">{icon}</div>
      )}
      <h3 className="text-lg font-bold text-slate-700 mb-2">{title}</h3>
      {description && (
        <p className="text-sm text-slate-500 mb-6 max-w-md mx-auto">{description}</p>
      )}
      {action && (
        <button
          onClick={action.onClick}
          className="px-6 py-2.5 bg-[var(--color-primary-600)] text-white rounded-xl font-semibold text-sm hover:opacity-90 transition-colors"
        >
          {action.label}
        </button>
      )}
    </div>
  );
};
