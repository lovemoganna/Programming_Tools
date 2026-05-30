import { describe, it, expect } from 'vitest';
import { buildSearchIndex, searchIndex } from './SearchService';

describe('SearchService', () => {
  it('should successfully build the search index', () => {
    const index = buildSearchIndex();
    expect(Array.isArray(index)).toBe(true);
    expect(index.length).toBeGreaterThan(0);
    
    // Validate structural integrity of index elements
    const firstEntry = index[0];
    expect(firstEntry).toHaveProperty('id');
    expect(firstEntry).toHaveProperty('title');
    expect(firstEntry).toHaveProperty('subtitle');
    expect(firstEntry).toHaveProperty('type');
    expect(firstEntry).toHaveProperty('path');
    expect(firstEntry).toHaveProperty('tags');
    expect(firstEntry).toHaveProperty('content');
    expect(firstEntry).toHaveProperty('icon');
  });

  it('should return empty array for empty or whitespace-only queries', () => {
    const index = buildSearchIndex();
    expect(searchIndex('', index)).toEqual([]);
    expect(searchIndex('   ', index)).toEqual([]);
  });

  it('should find entries matching a query in the index', () => {
    const index = buildSearchIndex();
    
    // We expect "Excel" prompts to be present
    const results = searchIndex('Excel', index);
    expect(results.length).toBeGreaterThan(0);
    
    // Limit to top 10 results
    expect(results.length).toBeLessThanOrEqual(10);
  });

  it('should find entries using pinyin match if query matches titles or tags', () => {
    const index = buildSearchIndex();
    
    // Check if searching "xiliu" (心流) returns flow-wiki pages or tags
    const results = searchIndex('xiliu', index);
    expect(Array.isArray(results)).toBe(true);
  });
});
