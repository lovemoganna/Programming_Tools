import { categories as excelCategories } from "../apps/excel-prompts/data/prompts";
import { metaPrompts as gitPrompts } from "../apps/git-workflow/data/prompts";
import { categories as meceCategories } from "../apps/mece-framework/data/frameworks";
import { signals, elispExamples, promptModules } from "../apps/programming-mindset/data/enlightenmentData";
import { CURRICULUM as pythonCurriculum } from "../apps/python-mece/data/curriculum";
import { DUCKDB_TICKETS as duckdbTickets } from "../apps/duckdb-tutorial/data/tickets";
import { TICKETS as ceTickets } from "../apps/context-engineering/data/tickets";
import { wikiPages as wikiContentPages } from "../apps/flow-wiki/data/wikiContent";
import { matchPinyin } from "./pinyin";

import { HubBaseItem } from "./data-schemas";

export interface SearchEntry extends HubBaseItem {
  type: "Excel" | "Git" | "Framework" | "Mindset" | "Python" | "DuckDB" | "Context" | "Wiki";
  path: string;
  hash?: string;
  icon: string;
}

export function buildSearchIndex(): SearchEntry[] {
  const index: SearchEntry[] = [];

  // 1. Excel Prompts
  excelCategories.forEach(cat => {
    cat.prompts.forEach(p => {
      index.push({
        id: p.id,
        title: p.title,
        subtitle: p.scenario,
        type: "Excel",
        path: "/excel",
        hash: `category=${cat.id}&id=${p.id}`,
        tags: p.tags,
        content: p.prompt,
        icon: cat.icon
      });
    });
  });

  // 2. Git Prompts
  gitPrompts.forEach(p => {
    index.push({
      id: p.id,
      title: p.title,
      subtitle: p.subtitle,
      type: "Git",
      path: "/git",
      hash: `id=${p.id}`,
      tags: p.tags,
      content: p.prompt,
      icon: p.icon
    });
  });

  // 3. Mece Frameworks
  meceCategories.forEach(cat => {
    cat.frameworks.forEach(fw => {
      index.push({
        id: fw.id,
        title: fw.name,
        subtitle: fw.tagline,
        type: "Framework",
        path: "/mece",
        hash: `id=${fw.id}`,
        tags: [fw.nameEn, fw.scene],
        content: fw.blocks.map(b => b.label).join(" "),
        icon: fw.icon
      });
    });
  });

  // 4. Programming Mindset
  signals.forEach(s => {
    index.push({
      id: `mindset-signal-${s.id}`,
      title: s.title,
      subtitle: s.description,
      type: "Mindset",
      path: "/mindset",
      hash: `type=signal&id=${s.id}`,
      tags: ["开窍信号", "思维"],
      content: `${s.before} ${s.after}`,
      icon: s.icon
    });
  });
  elispExamples.forEach(ex => {
    index.push({
      id: ex.id,
      title: ex.title,
      subtitle: ex.description,
      type: "Mindset",
      path: "/mindset",
      hash: `type=elisp&id=${ex.id}`,
      tags: ex.tags,
      content: ex.code,
      icon: "λ"
    });
  });
  promptModules.forEach(m => {
    index.push({
      id: m.id,
      title: m.title,
      subtitle: m.scenario,
      type: "Mindset",
      path: "/mindset",
      hash: `type=ai&id=${m.id}`,
      tags: ["AI Module"],
      content: m.systemPrompt,
      icon: m.icon
    });
  });

  // 5. Python MECE
  pythonCurriculum.forEach(ch => {
    ch.tickets.forEach(t => {
      index.push({
        id: t.id,
        title: t.title,
        subtitle: t.sub,
        type: "Python",
        path: "/python",
        hash: `id=${t.id}`,
        tags: t.mece,
        content: t.concept,
        icon: "🐍"
      });
    });
  });

  // 6. DuckDB
  duckdbTickets.forEach(t => {
    index.push({
      id: t.id,
      title: t.title,
      subtitle: t.desc,
      type: "DuckDB",
      path: "/duckdb",
      hash: `id=${t.id}`,
      tags: t.concepts,
      content: t.knowledge,
      icon: t.emoji
    });
  });

  // 7. Context Engineering
  ceTickets.forEach(t => {
    index.push({
      id: t.id,
      title: t.title,
      subtitle: t.tag,
      type: "Context",
      path: "/ce",
      hash: `id=${t.id}`,
      tags: t.toon.f,
      content: t.concept,
      icon: t.icon
    });
  });

  // 8. Flow Wiki
  wikiContentPages.forEach(p => {
    index.push({
      id: p.id,
      title: p.title,
      subtitle: p.subtitle,
      type: "Wiki",
      path: "/wiki",
      hash: `id=${p.id}`,
      tags: p.tags,
      content: p.content,
      icon: "🌊"
    });
  });

  return index;
}

export function searchIndex(query: string, index: SearchEntry[]): SearchEntry[] {
  const q = query.trim();
  if (!q) return [];

  return index.filter(item => 
    matchPinyin(item.title, q) ||
    matchPinyin(item.subtitle, q) ||
    item.tags.some(t => matchPinyin(t, q)) ||
    matchPinyin(item.content, q)
  ).slice(0, 10); // Limit to top 10 results
}
