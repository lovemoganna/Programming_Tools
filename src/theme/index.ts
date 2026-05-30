/**
 * Core Design System
 * Centralized design tokens and components for ProgrammingTools Hub
 */

// Design Tokens
export {
  DesignTokens,
  CSSVariablesString,
  type DesignColorPalette,
  type DesignGradient,
  type DesignTagType,
} from './design-tokens';

// Design Components
export {
  Tag,
  Callout,
  Card,
  Badge,
  StepCard,
  CodeBlock,
  ChecklistItem,
  ComparisonTable,
  Breadcrumb,
  ProgressBar,
  EmptyState,
  type TagProps,
  type CalloutProps,
  type CardProps,
  type BadgeProps,
  type StepCardProps,
  type CodeBlockProps,
  type ChecklistItemProps,
  type ComparisonTableProps,
  type TableColumn,
  type BreadcrumbProps,
  type BreadcrumbItem,
  type ProgressBarProps,
  type EmptyStateProps,
} from './components';

// Pre-defined gradients
export const Gradients = {
  primary: 'from-indigo-500 to-violet-600',
  secondary: 'from-violet-500 to-cyan-500',
  wiki: 'from-indigo-600 to-purple-700',
  energy: 'from-amber-500 to-orange-600',
  flow: 'from-cyan-500 to-blue-600',
} as const;

// Tag variant presets
export const TagVariants = {
  flow: { bg: '#ddd6fe', text: '#5b21b6' },
  onto: { bg: '#e0f2fe', text: '#0369a1' },
  wish: { bg: '#fef3c7', text: '#92400e' },
  lazy: { bg: '#d1fae5', text: '#065f46' },
  exec: { bg: '#fee2e2', text: '#991b1b' },
  new: { bg: '#fce7f3', text: '#9d174d' },
} as const;
