import { describe, it, expect } from 'vitest';
import { hexToRgba } from './theme-utils';

describe('theme-utils', () => {
  describe('hexToRgba', () => {
    it('should convert shorthand hex to RGBA correctly', () => {
      expect(hexToRgba('#fff', 0.5)).toBe('rgba(255, 255, 255, 0.5)');
      expect(hexToRgba('#000', 1)).toBe('rgba(0, 0, 0, 1)');
      expect(hexToRgba('#abc', 0.25)).toBe('rgba(170, 187, 204, 0.25)');
    });

    it('should convert full hex to RGBA correctly', () => {
      expect(hexToRgba('#ffffff', 0.5)).toBe('rgba(255, 255, 255, 0.5)');
      expect(hexToRgba('#000000', 1)).toBe('rgba(0, 0, 0, 1)');
      expect(hexToRgba('#ff0055', 0.8)).toBe('rgba(255, 0, 85, 0.8)');
    });
  });
});
