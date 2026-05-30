import { describe, it, expect, vi, beforeEach } from 'vitest';
import { StorageUtility, STORAGE_KEYS } from './StorageUtility';

describe('StorageUtility', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
  });

  it('generates knowledge export markdown report correctly', () => {
    localStorage.setItem(STORAGE_KEYS.PYTHON_PROGRESS, JSON.stringify([0, 1]));
    localStorage.setItem(STORAGE_KEYS.DUCKDB_PROGRESS, JSON.stringify([0]));

    const md = StorageUtility.generateKnowledgeExport();

    expect(md).toContain('Programming Tools Hub - 个人知识资产报告');
    expect(md).toContain('🐍 Python 工程化进阶');
    expect(md).toContain('🦆 DuckDB 端侧数据分析');
  });

  it('runs backup export trigger without error', () => {
    const createObjectURLMock = vi.fn().mockReturnValue('blob:http://localhost/test-uuid');
    const revokeObjectURLMock = vi.fn();
    
    // Inject mocks
    global.URL.createObjectURL = createObjectURLMock;
    global.URL.revokeObjectURL = revokeObjectURLMock;

    const clickMock = vi.fn();
    const createElementMock = vi.spyOn(document, 'createElement').mockReturnValue({
      href: '',
      download: '',
      click: clickMock
    } as any);

    StorageUtility.exportBackup();

    expect(createObjectURLMock).toHaveBeenCalled();
    expect(clickMock).toHaveBeenCalled();
    expect(revokeObjectURLMock).toHaveBeenCalled();
    
    createElementMock.mockRestore();
  });
});
