import { describe, it, expect } from 'vitest';
import { cn } from './cn';

describe('cn utility', () => {
  it('should join classnames correctly', () => {
    expect(cn('class1', 'class2')).toBe('class1 class2');
  });

  it('should ignore falsy values', () => {
    expect(cn('class1', null, undefined, false, 'class2')).toBe('class1 class2');
  });

  it('should merge tailwind classes and resolve conflicts', () => {
    // px-2 and px-4 conflict, px-4 should win
    expect(cn('px-2 py-1', 'px-4')).toBe('py-1 px-4');
    
    // text-red-500 and text-blue-500 conflict, text-blue-500 should win
    expect(cn('text-red-500 text-sm', 'text-blue-500')).toBe('text-sm text-blue-500');
  });
});
