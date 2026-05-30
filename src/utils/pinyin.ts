import { PINYIN_MAP } from "./pinyinData";

/**
 * Converts a Chinese string to its full Pinyin and initial Pinyin equivalents.
 * Non-Chinese characters are lowercased and appended directly.
 */
export function toPinyin(text: string): { full: string; initial: string } {
  let full = "";
  let initial = "";

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const p = PINYIN_MAP[char];
    if (p) {
      full += p.full;
      initial += p.initial;
    } else {
      const lower = char.toLowerCase();
      full += lower;
      initial += lower;
    }
  }

  return { full, initial };
}

/**
 * Checks if a search query matches a given text by direct substring search,
 * full pinyin matching, or pinyin initials matching.
 */
export function matchPinyin(text: string, query: string): boolean {
  const q = query.toLowerCase().trim();
  if (!q) return true;

  const t = text.toLowerCase();
  
  // 1. Direct match (including original Chinese and any substring)
  if (t.includes(q)) return true;

  // 2. Pinyin matching
  const { full, initial } = toPinyin(t);

  return full.includes(q) || initial.includes(q);
}

export interface MatchRange {
  start: number;
  end: number;
}

/**
 * Finds the character indices in the original text that correspond to the matching
 * portion of the query (supports direct substring, pinyin initials, or full pinyin match).
 */
export function findPinyinMatchRange(text: string, query: string): MatchRange | null {
  const q = query.toLowerCase().trim();
  if (!q) return null;

  const t = text.toLowerCase();

  // 1. Direct match
  const directIdx = t.indexOf(q);
  if (directIdx !== -1) {
    return { start: directIdx, end: directIdx + q.length };
  }

  // 2. Initials pinyin match
  let initialPinyinStr = "";
  const initialRanges: { start: number; end: number }[] = [];
  for (let i = 0; i < text.length; i++) {
    const char = t[i];
    const p = toPinyin(char).initial;
    const start = initialPinyinStr.length;
    initialPinyinStr += p;
    const end = initialPinyinStr.length;
    initialRanges.push({ start, end });
  }

  const initialIdx = initialPinyinStr.indexOf(q);
  if (initialIdx !== -1) {
    const matchStart = initialIdx;
    const matchEnd = initialIdx + q.length;
    let first = -1;
    let last = -1;
    for (let i = 0; i < text.length; i++) {
      const overlaps = !(initialRanges[i].end <= matchStart || initialRanges[i].start >= matchEnd);
      if (overlaps) {
        if (first === -1) first = i;
        last = i;
      }
    }
    if (first !== -1 && last !== -1) {
      return { start: first, end: last + 1 };
    }
  }

  // 3. Full pinyin match
  let fullPinyinStr = "";
  const fullRanges: { start: number; end: number }[] = [];
  for (let i = 0; i < text.length; i++) {
    const char = t[i];
    const p = toPinyin(char).full;
    const start = fullPinyinStr.length;
    fullPinyinStr += p;
    const end = fullPinyinStr.length;
    fullRanges.push({ start, end });
  }

  const fullIdx = fullPinyinStr.indexOf(q);
  if (fullIdx !== -1) {
    const matchStart = fullIdx;
    const matchEnd = fullIdx + q.length;
    let first = -1;
    let last = -1;
    for (let i = 0; i < text.length; i++) {
      const overlaps = !(fullRanges[i].end <= matchStart || fullRanges[i].start >= matchEnd);
      if (overlaps) {
        if (first === -1) first = i;
        last = i;
      }
    }
    if (first !== -1 && last !== -1) {
      return { start: first, end: last + 1 };
    }
  }

  return null;
}
