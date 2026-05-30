import { describe, it, expect } from "vitest";
import { toPinyin, matchPinyin, findPinyinMatchRange } from "./pinyin";

describe("pinyin utility", () => {
  describe("toPinyin", () => {
    it("should correctly convert Chinese characters to full and initial pinyin", () => {
      const { full, initial } = toPinyin("心流触发");
      expect(full).toBe("xinliuchufa");
      expect(initial).toBe("xlcf");
    });

    it("should preserve alphanumeric characters and convert to lowercase", () => {
      const { full, initial } = toPinyin("Git工作流123");
      expect(full).toBe("gitgongzuoliu123");
      expect(initial).toBe("gitgzl123");
    });
  });

  describe("matchPinyin", () => {
    it("should match by direct substring", () => {
      expect(matchPinyin("心流触发", "心流")).toBe(true);
      expect(matchPinyin("Git工作流", "git")).toBe(true);
    });

    it("should match by pinyin initials", () => {
      expect(matchPinyin("心流触发", "xlcf")).toBe(true);
      expect(matchPinyin("心流触发", "xl")).toBe(true);
      expect(matchPinyin("心流触发", "cf")).toBe(true);
      expect(matchPinyin("Git工作流", "gitgzl")).toBe(true);
    });

    it("should match by full pinyin", () => {
      expect(matchPinyin("心流触发", "xinliuchufa")).toBe(true);
      expect(matchPinyin("心流触发", "xinliu")).toBe(true);
      expect(matchPinyin("心流触发", "chufa")).toBe(true);
    });

    it("should return false if there is no match", () => {
      expect(matchPinyin("心流触发", "xly")).toBe(false);
      expect(matchPinyin("心流触发", "abc")).toBe(false);
    });

    it("should handle empty or whitespace-only queries", () => {
      expect(matchPinyin("心流触发", "")).toBe(true);
      expect(matchPinyin("心流触发", "   ")).toBe(true);
    });
  });

  describe("findPinyinMatchRange", () => {
    it("should return null for empty queries", () => {
      expect(findPinyinMatchRange("心流触发", "")).toBeNull();
    });

    it("should return direct substring match ranges", () => {
      expect(findPinyinMatchRange("心流触发", "流触")).toEqual({ start: 1, end: 3 });
      expect(findPinyinMatchRange("Git工作流", "git")).toEqual({ start: 0, end: 3 });
    });

    it("should return correct ranges for pinyin initials", () => {
      expect(findPinyinMatchRange("心流触发", "lcf")).toEqual({ start: 1, end: 4 }); // "流触发"
      expect(findPinyinMatchRange("心流触发", "xl")).toEqual({ start: 0, end: 2 }); // "心流"
      expect(findPinyinMatchRange("Git工作流", "gzl")).toEqual({ start: 3, end: 6 }); // "工作流"
    });

    it("should return correct ranges for full pinyin", () => {
      expect(findPinyinMatchRange("心流触发", "liuchu")).toEqual({ start: 1, end: 3 }); // "流触"
      expect(findPinyinMatchRange("心流触发", "xinliu")).toEqual({ start: 0, end: 2 }); // "心流"
      expect(findPinyinMatchRange("心流触发", "chufa")).toEqual({ start: 2, end: 4 }); // "触发"
    });

    it("should return null if no match is found", () => {
      expect(findPinyinMatchRange("心流触发", "xyz")).toBeNull();
    });
  });
});
