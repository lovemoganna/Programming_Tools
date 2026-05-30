/**
 * Shared Data Schemas for Programming Tools Hub
 * 
 * To ensure consistency across all sub-apps, all primary content data structures 
 * should align with or inherit from these standardized interfaces.
 */

/**
 * Base representation of any searchable/indexable knowledge item in the hub.
 */
export interface HubBaseItem {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  tags: string[];
  icon?: string;
}

/**
 * Excel Prompt entry format
 */
export interface ExcelPromptSchema extends HubBaseItem {
  difficulty: "基础" | "进阶" | "专家";
  output: string;
}

/**
 * Git Meta Prompt entry format
 */
export interface GitPromptSchema extends HubBaseItem {
  module: string;
  moduleNumber: number;
  color: string;
  bgGradient: string;
  badgeColor: string;
  steps: {
    title: string;
    items: string[];
  }[];
}

/**
 * General Category wrapper used by prompts or frameworks
 */
export interface HubCategorySchema<T extends HubBaseItem> {
  id: string;
  name: string;
  icon: string;
  color: string;
  bgColor: string;
  borderColor: string;
  description: string;
  items: T[];
}
