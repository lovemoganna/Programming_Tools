/**
 * Core Design System Tokens
 * Centralized design variables for ProgrammingTools Hub
 * 
 * Usage:
 * - CSS: var(--design-[token-name])
 * - Tailwind: Use corresponding utility classes
 * - TypeScript: Import from this file
 */

export const DesignTokens = {
  // === Colors ===
  colors: {
    // Primary Brand
    primary: {
      50: '#eef2ff',
      100: '#e0e7ff',
      200: '#c7d2fe',
      300: '#a5b4fc',
      400: '#818cf8',
      500: '#6366f1',  // Main accent
      600: '#4f46e5',
      700: '#4338ca',
      800: '#3730a3',
      900: '#312e81',
    },
    
    // Secondary
    secondary: {
      50: '#f5f3ff',
      100: '#ede9fe',
      200: '#ddd6fe',
      300: '#c4b5fd',
      400: '#a78bfa',
      500: '#8b5cf6',
      600: '#7c3aed',
      700: '#6d28d9',
      800: '#5b21b6',
      900: '#4c1d95',
    },
    
    // Accent (Gold/Amber)
    accent: {
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a',
      300: '#fcd34d',
      400: '#fbbf24',
      500: '#f59e0b',
      600: '#d97706',
      700: '#b45309',
      800: '#92400e',
      900: '#78350f',
    },
    
    // Semantic
    success: {
      50: '#ecfdf5',
      100: '#d1fae5',
      200: '#a7f3d0',
      300: '#6ee7b7',
      400: '#34d399',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d',
    },
    danger: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
    },
    warning: {
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a',
      300: '#fcd34d',
      400: '#fbbf24',
      500: '#f59e0b',
      600: '#d97706',
      700: '#b45309',
    },
    info: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
    },
    
    // Neutral (Slate)
    neutral: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
      950: '#020617',
    },
    
    // Semantic Tag Colors (for wiki/category tags)
    tags: {
      flow: { bg: '#ddd6fe', text: '#5b21b6' },     // Purple - Flow state
      onto: { bg: '#e0f2fe', text: '#0369a1' },     // Blue - Ontology
      wish: { bg: '#fef3c7', text: '#92400e' },      // Yellow - Wishful
      lazy: { bg: '#d1fae5', text: '#065f46' },     // Green - Lazy
      exec: { bg: '#fee2e2', text: '#991b1b' },     // Red - Execution
      new:  { bg: '#fce7f3', text: '#9d174d' },     // Pink - New/V2
    },
  },
  
  // === Typography ===
  typography: {
    fontFamily: {
      sans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      mono: "'JetBrains Mono', 'Fira Code', 'SF Mono', monospace",
      serif: "'Georgia', 'Noto Serif SC', serif",
    },
    fontSize: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',      // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem',  // 36px
      '5xl': '3rem',     // 48px
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    lineHeight: {
      tight: 1.25,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 1.75,
      looser: 1.875,
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0em',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
      'ultra-widest': '0.15em',
    },
  },
  
  // === Spacing ===
  spacing: {
    px: '1px',
    0: '0',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
    2.5: '0.625rem',
    3: '0.75rem',
    3.5: '0.875rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
    36: '9rem',
    40: '10rem',
  },
  
  // === Border Radius ===
  borderRadius: {
    none: '0',
    sm: '0.25rem',
    DEFAULT: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.5rem',
    '3xl': '2rem',
    '4xl': '2.5rem',
    full: '9999px',
  },
  
  // === Shadows ===
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
  },
  
  // === Transitions ===
  transitions: {
    duration: {
      75: '75ms',
      100: '100ms',
      150: '150ms',
      200: '200ms',
      300: '300ms',
      500: '500ms',
      700: '700ms',
      1000: '1000ms',
    },
    easing: {
      DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      linear: 'linear',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    },
  },
  
  // === Gradients ===
  gradients: {
    primary: 'from-indigo-500 to-violet-600',
    secondary: 'from-violet-500 to-cyan-500',
    wiki: 'from-indigo-600 to-purple-700',
    energy: 'from-amber-500 to-orange-600',
    flow: 'from-cyan-500 to-blue-600',
  },
  
  // === Z-Index ===
  zIndex: {
    base: 0,
    dropdown: 1000,
    sticky: 1100,
    fixed: 1200,
    modalBackdrop: 1300,
    modal: 1400,
    popover: 1500,
    tooltip: 1800,
  },

  // === Motion ===
  motion: {
    tap: { scale: 0.95 },
    hover: { scale: 1.02 },
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.05 }
      }
    },
    item: {
      hidden: { opacity: 0, y: 10 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 30 }
      }
    }
  }
} as const;

// CSS Variables string for injecting into :root
export const CSSVariablesString = `
  /* === Colors === */
  --color-primary-50: ${DesignTokens.colors.primary[50]};
  --color-primary-100: ${DesignTokens.colors.primary[100]};
  --color-primary-200: ${DesignTokens.colors.primary[200]};
  --color-primary-300: ${DesignTokens.colors.primary[300]};
  --color-primary-400: ${DesignTokens.colors.primary[400]};
  --color-primary-500: ${DesignTokens.colors.primary[500]};
  --color-primary-600: ${DesignTokens.colors.primary[600]};
  --color-primary-700: ${DesignTokens.colors.primary[700]};
  --color-primary-800: ${DesignTokens.colors.primary[800]};
  --color-primary-900: ${DesignTokens.colors.primary[900]};
  
  --color-secondary-500: ${DesignTokens.colors.secondary[500]};
  --color-secondary-600: ${DesignTokens.colors.secondary[600]};
  
  --color-accent-500: ${DesignTokens.colors.accent[500]};
  --color-accent-600: ${DesignTokens.colors.accent[600]};
  
  --color-success-500: ${DesignTokens.colors.success[500]};
  --color-danger-500: ${DesignTokens.colors.danger[500]};
  --color-warning-500: ${DesignTokens.colors.warning[500]};
  --color-info-500: ${DesignTokens.colors.info[500]};
  
  --color-neutral-50: ${DesignTokens.colors.neutral[50]};
  --color-neutral-100: ${DesignTokens.colors.neutral[100]};
  --color-neutral-200: ${DesignTokens.colors.neutral[200]};
  --color-neutral-300: ${DesignTokens.colors.neutral[300]};
  --color-neutral-400: ${DesignTokens.colors.neutral[400]};
  --color-neutral-500: ${DesignTokens.colors.neutral[500]};
  --color-neutral-600: ${DesignTokens.colors.neutral[600]};
  --color-neutral-700: ${DesignTokens.colors.neutral[700]};
  --color-neutral-800: ${DesignTokens.colors.neutral[800]};
  --color-neutral-900: ${DesignTokens.colors.neutral[900]};
  --color-neutral-950: ${DesignTokens.colors.neutral[950]};
  
  /* === Semantic Colors === */
  --color-tag-flow-bg: ${DesignTokens.colors.tags.flow.bg};
  --color-tag-flow-text: ${DesignTokens.colors.tags.flow.text};
  --color-tag-onto-bg: ${DesignTokens.colors.tags.onto.bg};
  --color-tag-onto-text: ${DesignTokens.colors.tags.onto.text};
  --color-tag-wish-bg: ${DesignTokens.colors.tags.wish.bg};
  --color-tag-wish-text: ${DesignTokens.colors.tags.wish.text};
  --color-tag-lazy-bg: ${DesignTokens.colors.tags.lazy.bg};
  --color-tag-lazy-text: ${DesignTokens.colors.tags.lazy.text};
  --color-tag-exec-bg: ${DesignTokens.colors.tags.exec.bg};
  --color-tag-exec-text: ${DesignTokens.colors.tags.exec.text};
  --color-tag-new-bg: ${DesignTokens.colors.tags.new.bg};
  --color-tag-new-text: ${DesignTokens.colors.tags.new.text};
  
  /* === Typography === */
  --font-sans: ${DesignTokens.typography.fontFamily.sans};
  --font-mono: ${DesignTokens.typography.fontFamily.mono};
  --font-serif: ${DesignTokens.typography.fontFamily.serif};
  
  /* === Shadows === */
  --shadow-sm: ${DesignTokens.shadows.sm};
  --shadow-default: ${DesignTokens.shadows.DEFAULT};
  --shadow-md: ${DesignTokens.shadows.md};
  --shadow-lg: ${DesignTokens.shadows.lg};
  --shadow-xl: ${DesignTokens.shadows.xl};
  --shadow-2xl: ${DesignTokens.shadows['2xl']};
`;

// Type exports for TypeScript
export type DesignColorPalette = typeof DesignTokens.colors;
export type DesignGradient = keyof typeof DesignTokens.gradients;
export type DesignTagType = keyof typeof DesignTokens.colors.tags;
