import React, { useState, useEffect, useRef } from 'react';
import * as duckdb from '@duckdb/duckdb-wasm';
import { motion, AnimatePresence } from 'framer-motion';
import { DUCKDB_TICKETS } from './data/tickets';
import { cn } from '../../utils/cn';
import { CopyButton } from '../../components/CopyButton';
import { PageHeader } from "../../components/PageHeader";
import { PageFooter } from "../../components/PageFooter";
import { SectionHeader } from "../../components/SectionHeader";
import { SplitViewLayout } from "../../components/SplitViewLayout";
import { STORAGE_KEYS } from "../../utils/StorageUtility";

const DuckdbTutorialPage: React.FC = () => {
  const [currentTicketIdx, setCurrentTicketIdx] = useState(0);
  const [completed, setCompleted] = useState<Set<number>>(new Set());
  // ... rest

  // Load progress
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.DUCKDB_PROGRESS);
    if (saved) {
      try {
        setCompleted(new Set(JSON.parse(saved)));
      } catch (e) {
        console.error('Failed to load progress', e);
      }
    }
  }, []);

  // Save progress
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.DUCKDB_PROGRESS, JSON.stringify(Array.from(completed)));
  }, [completed]);

  // Load query history
  useEffect(() => {
    const savedHistory = localStorage.getItem('duckdb_query_history');
    if (savedHistory) {
      try {
        setHistory(JSON.parse(savedHistory));
      } catch (e) {
        console.error('Failed to load query history', e);
      }
    }
  }, []);
  const [db, setDb] = useState<duckdb.AsyncDuckDB | null>(null);
  const [conn, setConn] = useState<duckdb.AsyncDuckDBConnection | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isExecuting, setIsExecuting] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [queryResult, setQueryResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [sql, setSql] = useState('');
  const [quizState, setQuizState] = useState<{ chosen: number | null; showFeedback: boolean }>({
    chosen: null,
    showFeedback: false,
  });
  const [tablesMetadata, setTablesMetadata] = useState<Record<string, { columnName: string, dataType: string }[]>>({});
  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState<number>(-1);
  const [draft, setDraft] = useState('');

  const mainContentRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const currentTicket = DUCKDB_TICKETS[currentTicketIdx];

  const insertTextAtCursor = (text: string) => {
    const textarea = textareaRef.current;
    if (!textarea) {
      setSql(prev => prev + text);
      return;
    }

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const currentVal = textarea.value;

    const newVal = currentVal.substring(0, start) + text + currentVal.substring(end);
    setSql(newVal);

    setTimeout(() => {
      textarea.focus();
      textarea.selectionStart = textarea.selectionEnd = start + text.length;
    }, 0);
  };

  const refreshMetadata = async (connection: duckdb.AsyncDuckDBConnection | null) => {
    if (!connection) return;
    try {
      const res = await connection.query(`
        SELECT table_name, column_name, data_type 
        FROM information_schema.columns 
        WHERE table_schema = 'main'
        ORDER BY table_name, ordinal_position;
      `);
      const meta: Record<string, { columnName: string, dataType: string }[]> = {};
      for (let i = 0; i < res.numRows; i++) {
        const tName = String(res.getChild('table_name')?.get(i));
        const cName = String(res.getChild('column_name')?.get(i));
        const dType = String(res.getChild('data_type')?.get(i));
        if (!meta[tName]) {
          meta[tName] = [];
        }
        meta[tName].push({ columnName: cName, dataType: dType });
      }
      setTablesMetadata(meta);
    } catch (e) {
      console.error('Failed to fetch table metadata', e);
    }
  };

  const loadAllSamples = async () => {
    if (!conn) return;
    setIsExecuting(true);
    setError(null);
    try {
      const initSql = `
CREATE TABLE IF NOT EXISTS products (
  id INTEGER PRIMARY KEY,
  name VARCHAR NOT NULL,
  price DOUBLE,
  in_stock BOOLEAN DEFAULT TRUE
);
INSERT OR IGNORE INTO products VALUES
  (1, '橡皮鸭', 29.9, TRUE),
  (2, '羽绒被', 399.0, TRUE),
  (3, '鸭绒枕', 199.5, FALSE),
  (4, '小黄鸭玩具', 59.0, TRUE);

CREATE TABLE IF NOT EXISTS orders (
  id INTEGER PRIMARY KEY,
  customer VARCHAR,
  amount DOUBLE,
  category VARCHAR
);
INSERT OR IGNORE INTO orders VALUES
  (1,'Alice',120.0,'电子'),(2,'Bob',340.5,'服装'),
  (3,'Alice',88.0,'食品'),(4,'Charlie',560.0,'电子'),
  (5,'Bob',200.0,'电子'),(6,'Alice',75.0,'服装'),
  (7,'Dave',430.0,'食品'),(8,'Charlie',150.0,'服装');

CREATE TABLE IF NOT EXISTS students (
  name VARCHAR PRIMARY KEY,
  score DOUBLE,
  grade VARCHAR
);
INSERT OR IGNORE INTO students VALUES
  ('小明',92.5,'A'),('小红',NULL,'B'),('小刚',78.0,'B'),
  ('小美',92.5,'A'),('小李',65.0,'C'),('小华',88.5,'A'),
  ('小强',55.0,'C'),('小雪',95.0,'A');

CREATE TABLE IF NOT EXISTS web_logs (
  ip VARCHAR, 
  user_id VARCHAR, 
  accessed_at TIMESTAMP, 
  page VARCHAR, 
  response_code INTEGER
);
INSERT INTO web_logs VALUES 
  ('192.168.1.10', 'U1001', '2026-05-25 10:00:00', '/home', 200),
  ('192.168.1.11', 'U1002', '2026-05-25 10:05:00', '/login', 200),
  ('192.168.1.10', 'U1001', '2026-05-25 10:06:00', '/dashboard', 200),
  ('10.0.0.5', NULL, '2026-05-25 10:10:00', '/admin', 403),
  ('192.168.1.12', 'U1003', '2026-05-25 10:15:00', '/products', 404),
  ('10.0.0.5', NULL, '2026-05-25 10:16:00', '/login', 200);
      `;
      const stmts = initSql.split(';').map(s => s.trim()).filter(s => s.length > 0);
      for (const stmt of stmts) {
        await conn.query(stmt + ';');
      }
      await refreshMetadata(conn);
      alert("全套样本数据集（products, orders, students, web_logs）已成功载入内存！");
    } catch (err: any) {
      console.error(err);
      setError(err.message || '加载样本数据集失败');
    } finally {
      setIsExecuting(false);
    }
  };

  useEffect(() => {
    const init = async () => {
      let activeDb: any = null;
      let activeWorker: any = null;
      let activeWorkerUrl: any = null;

      const tryLoad = async (useMvpFallback = false) => {
        const JSDELIVR_BUNDLES = duckdb.getJsDelivrBundles();
        // // [WASM-Fallback-Fix] Fall back directly to the single-threaded MVP bundle if requested or if multi-threaded fails
        const bundle = useMvpFallback ? JSDELIVR_BUNDLES.mvp : await duckdb.selectBundle(JSDELIVR_BUNDLES);
        
        activeWorkerUrl = URL.createObjectURL(
          new Blob([`importScripts("${bundle.mainWorker}");`], { type: 'text/javascript' })
        );
        
        activeWorker = new Worker(activeWorkerUrl);
        const logger = new duckdb.ConsoleLogger();
        activeDb = new duckdb.AsyncDuckDB(logger, activeWorker);
        
        // Handle optional pthreadWorker depending on bundle compilation
        const pthreadWorker = (bundle && 'pthreadWorker' in bundle) ? (bundle as any).pthreadWorker : undefined;
        await activeDb.instantiate(bundle.mainModule, pthreadWorker);
        URL.revokeObjectURL(activeWorkerUrl);
        activeWorkerUrl = null;
        
        const connection = await activeDb.connect();
        setDb(activeDb);
        setConn(connection);
        setIsLoading(false);
        await refreshMetadata(connection);
      };

      try {
        // Attempt load with an 8-second timeout. If it hangs or fails, fall back to MVP bundle.
        const loadWithTimeout = async () => {
          let timeoutId: any;
          const timeoutPromise = new Promise((_, reject) => {
            timeoutId = setTimeout(() => reject(new Error("Timeout")), 8000);
          });
          try {
            await Promise.race([tryLoad(false), timeoutPromise]);
            clearTimeout(timeoutId);
          } catch (e) {
            clearTimeout(timeoutId);
            throw e;
          }
        };

        await loadWithTimeout();
      } catch (err) {
        console.warn('Primary DuckDB WASM load failed or timed out, trying single-threaded MVP fallback...', err);
        // Clean up primary attempt stubs
        if (activeDb) {
          try { await activeDb.terminate(); } catch {}
        }
        if (activeWorker) {
          try { activeWorker.terminate(); } catch {}
        }
        if (activeWorkerUrl) {
          try { URL.revokeObjectURL(activeWorkerUrl); } catch {}
        }

        // Retry with MVP bundle
        try {
          await tryLoad(true);
        } catch (fallbackErr) {
          console.error('DuckDB MVP fallback failed:', fallbackErr);
          setError('引擎加载失败，请刷新页面重试');
          setIsLoading(false);
        }
      }
    };

    init();

    return () => {
      if (conn) conn.close();
      if (db) db.terminate();
    };
  }, []);

  useEffect(() => {
    setSql(currentTicket.defaultSQL);
    setQueryResult(null);
    setError(null);
    setQuizState({ chosen: null, showFeedback: false });
    setHistoryIdx(-1);
    if (mainContentRef.current) {
      mainContentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentTicketIdx]);

  // Handle Deep Linking via Hash
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('id=')) {
        const id = hash.replace('id=', '');
        const targetIdx = DUCKDB_TICKETS.findIndex(t => t.id === id);
        if (targetIdx !== -1) setCurrentTicketIdx(targetIdx);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const textarea = e.currentTarget;
    const currentVal = textarea.value;
    const isFirstLine = !currentVal.substring(0, textarea.selectionStart).includes('\n');
    const isLastLine = !currentVal.substring(textarea.selectionEnd).includes('\n');

    if (e.key === 'ArrowUp' && isFirstLine) {
      if (history.length === 0) return;
      e.preventDefault();

      let nextIdx = historyIdx;
      if (historyIdx === -1) {
        setDraft(currentVal);
        nextIdx = history.length - 1;
      } else if (historyIdx > 0) {
        nextIdx = historyIdx - 1;
      } else {
        return;
      }

      setHistoryIdx(nextIdx);
      setSql(history[nextIdx]);
      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd = history[nextIdx].length;
      }, 0);
    } else if (e.key === 'ArrowDown' && isLastLine) {
      if (historyIdx === -1) return;
      e.preventDefault();

      let nextIdx = historyIdx + 1;
      if (nextIdx >= history.length) {
        setHistoryIdx(-1);
        setSql(draft);
        setTimeout(() => {
          textarea.selectionStart = textarea.selectionEnd = draft.length;
        }, 0);
      } else {
        setHistoryIdx(nextIdx);
        setSql(history[nextIdx]);
        setTimeout(() => {
          textarea.selectionStart = textarea.selectionEnd = history[nextIdx].length;
        }, 0);
      }
    }
  };

  const executeSQL = async () => {
    if (!conn) return;
    setIsExecuting(true);
    setError(null);
    try {
      const stmts = sql.split(';').map(s => s.trim()).filter(s => s.length > 0);
      let lastResult = null;
      for (const stmt of stmts) {
        lastResult = await conn.query(stmt + ';');
      }
      setQueryResult(lastResult);
      setCompleted(prev => {
        const next = new Set(prev);
        next.add(currentTicketIdx);
        return next;
      });
      await refreshMetadata(conn);

      const trimmedQuery = sql.trim();
      if (trimmedQuery) {
        setHistory(prev => {
          const filtered = prev.filter(q => q !== trimmedQuery);
          const next = [...filtered, trimmedQuery];
          localStorage.setItem('duckdb_query_history', JSON.stringify(next));
          return next;
        });
        setHistoryIdx(-1);
      }
    } catch (err: any) {
      console.error('SQL Execution failed:', err);
      setError(err.message || '查询执行失败');
    } finally {
      setIsExecuting(false);
    }
  };


  const renderResultTable = () => {
    if (!queryResult) return null;
    if (queryResult.numRows === 0) {
      return (
        <div className="bg-blue-50 text-blue-600 border border-blue-100 p-6 rounded-2xl text-base flex items-center gap-4 mt-8 shadow-sm">
          <span className="text-2xl">ℹ️</span> 查询执行成功，无返回行（可能是 DDL/DML）
        </div>
      );
    }

    const fields = queryResult.schema.fields;
    const rows: any[] = [];
    for (let i = 0; i < queryResult.numRows; i++) {
      const row: any = {};
      fields.forEach((f: any) => {
        row[f.name] = queryResult.getChild(f.name)?.get(i);
      });
      rows.push(row);
    }

    return (
      <div className="mt-10">
        <div className="bg-emerald-50 text-emerald-600 border border-emerald-100 p-4 rounded-xl text-xs font-black uppercase tracking-widest flex items-center gap-3 mb-4">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          Query Executed Successfully
        </div>
        <div className="overflow-x-auto border border-slate-200 rounded-2xl bg-white shadow-xl">
          <table className="w-full text-sm font-mono border-collapse text-slate-700">
            <thead>
              <tr className="bg-slate-50 text-slate-900 border-b border-slate-200">
                {fields.map((f: any) => (
                  <th key={f.name} className="p-5 text-left whitespace-nowrap font-black uppercase tracking-tighter">
                    {f.name}
                    <span className="ml-2 text-xs text-slate-400 font-bold lowercase">{f.type.toString()}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="hover:bg-slate-50 border-b border-slate-100 last:border-none transition-colors">
                  {fields.map((f: any) => {
                    const val = row[f.name];
                    let display = String(val);
                    let color = 'text-blue-600';
                    if (val === null || val === undefined) {
                      display = 'NULL';
                      color = 'text-slate-400 italic font-medium';
                    } else if (typeof val === 'number' || typeof val === 'bigint') {
                      color = 'text-indigo-600 font-bold';
                    } else if (typeof val === 'boolean') {
                      display = val ? 'TRUE' : 'FALSE';
                      color = val ? 'text-emerald-600 font-black' : 'text-rose-600 font-black';
                    }
                    return (
                      <td key={f.name} className={cn("p-5 whitespace-nowrap", color)}>
                        {display}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-xs font-black text-slate-400 mt-4 text-right uppercase tracking-widest">
          Result: {rows.length} rows returned
        </div>
      </div>
    );
  };

  if (isLoading) {
    return (
      <div className="h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-9xl mb-8 drop-shadow-2xl"
        >
          🦆
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4 max-w-md"
        >
          <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase">DuckDB Engine</h2>
          <p className="text-slate-500 font-medium leading-relaxed">
            正在初始化端侧向量化引擎... <br />
            基于 WASM 的全性能 SQL 环境即将就绪。
          </p>
          <div className="pt-4">
            <div className="w-64 h-1.5 bg-slate-200 rounded-full overflow-hidden mx-auto border border-slate-100 shadow-inner">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="h-full bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400"
              />
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  if (error && error.includes('引擎加载失败')) {
    return (
      <div className="h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
        <div className="w-24 h-24 rounded-3xl bg-rose-50 flex items-center justify-center text-5xl mb-8 border border-rose-100 shadow-inner">
          ⚠️
        </div>
        <h2 className="text-3xl font-black text-slate-900 mb-3">WASM 引擎启动中断</h2>
        <p className="text-slate-500 max-w-sm mx-auto mb-10 leading-relaxed font-medium">
          很抱歉，初始化 DuckDB 运行时环境时遇到技术障碍。这通常由于浏览器兼容性或网络拦截导致。
        </p>
        <div className="flex gap-4">
          <button 
            onClick={() => window.location.reload()}
            className="px-8 py-3.5 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20 active:scale-95"
          >
            强制刷新页面
          </button>
          <a 
            href="/"
            className="px-8 py-3.5 bg-white border border-slate-200 text-slate-600 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-50 transition-all active:scale-95"
          >
            返回首页
          </a>
        </div>
      </div>
    );
  }

  const sidebar = (
    <>
      <div className="p-8 border-b border-slate-100 bg-white/50 backdrop-blur-sm flex flex-col items-center justify-center text-center">
        <div className="text-xs text-slate-400 font-black uppercase tracking-[0.3em] mb-4">Initializing WASM Instance...</div>
        <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-yellow-500 to-orange-500"
            animate={{ 
              x: isLoading ? ["-100%", "100%"] : "0%" 
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.5, 
              ease: "linear" 
            }}
            style={{ width: isLoading ? '40%' : '100%' }}
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
        {DUCKDB_TICKETS.map((t, i) => {
          const isActive = currentTicketIdx === i;
          const isDone = completed.has(i);
          return (
            <button
              key={t.id}
              onClick={() => setCurrentTicketIdx(i)}
              className={cn(
                "w-full flex items-start gap-4 p-4 text-left transition-all duration-300 rounded-2xl group",
                isActive 
                  ? "bg-slate-900 text-white shadow-xl shadow-orange-950/20 scale-[1.02] border border-orange-500/20" 
                  : "text-slate-500 hover:bg-white hover:text-slate-900 hover:shadow-md hover:shadow-slate-200/50 border border-transparent"
              )}
            >
              <div className={cn(
                "w-2.5 h-2.5 rounded-full mt-1.5 shrink-0 transition-all duration-500",
                isActive ? "bg-yellow-400 scale-125 shadow-[0_0_10px_rgba(250,204,21,0.5)]" : (isDone ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" : "bg-slate-300 group-hover:bg-slate-400")
              )} />
              <div className="min-w-0">
                <div className={cn("text-xs font-black tracking-[0.2em] mb-1 uppercase transition-colors", isActive ? "text-yellow-400" : "text-slate-500")}>{t.id}</div>
                <div className={cn("text-sm font-black leading-tight truncate transition-colors", isActive ? "text-white" : "text-slate-800")}>{t.title}</div>
              </div>
            </button>
          );
        })}
      </div>
    </>
  );

  return (
    <>
      <SplitViewLayout
      header={
        <PageHeader
          title="DuckDB"
          subtitle="数据分析 · 向量化引擎 · 高性能 SQL"
          description="在浏览器中直接运行高性能 SQL，掌握现代数据栈的核心工具。通过向量化执行与 WASM 引擎，释放端侧极致查询潜力。"
          icon="🦆"
          gradient="from-yellow-400 to-orange-500"
          badgeText="Interactive Tutorial · SQL Engine v1.2"
          stats={[
            { label: "实战工单", value: DUCKDB_TICKETS.length, icon: "🎫" },
            { label: "核心关卡", value: "4", icon: "⚔️" },
            { label: "分析场景", value: "12+", icon: "📊" },
          ]}
        />
      }
      sidebar={sidebar}
      footer={
        <PageFooter 
          title="DuckDB Analytics Hub"
          description="掌握现代数据栈的核心工具，在端侧释放极致的查询性能。"
          icon="🦆"
          tags={["Analytical SQL", "WASM Engine", "OLAP Optimization", "Vectorized Execution"]}
          gradient="from-yellow-400 to-orange-500"
        />
      }
      isSidebarOpen={isSidebarOpen}
      onToggleSidebar={setIsSidebarOpen}
      mainRef={mainContentRef}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentTicket.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="space-y-16"
        >
          {/* Lesson Hero */}
          <div className="relative p-10 rounded-3xl border border-slate-100 overflow-hidden shadow-xl bg-white group">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-slate-50 rounded-full -mr-24 -mt-24 blur-3xl opacity-50 pointer-events-none group-hover:scale-110 transition-transform duration-700" />
            <div className="relative z-10">
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 leading-tight">Current Path</h2>
                    <div className="h-px bg-slate-100 flex-1" />
                  </div>
                  <h1 className="text-4xl font-black text-slate-900 leading-tight mb-3 tracking-tight">{currentTicket.title}</h1>
                  <p className="text-lg font-bold text-slate-400 leading-relaxed max-w-2xl">{currentTicket.desc}</p>
                </div>
                <div className="w-20 h-20 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-5xl shadow-inner shrink-0 rotate-3 group-hover:rotate-0 transition-transform">
                  {currentTicket.emoji}
                </div>
              </div>
            </div>
          </div>

          {/* SQL Editor Area with Navigator */}
          <section>
            <SectionHeader title="SQL 实验室与结构树" badge="Interactive OLAP Client" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Schema & Dataset Navigator (4 cols) */}
              <div className="lg:col-span-4 space-y-4">
                <div className="bg-slate-900 border border-white/5 rounded-3xl p-6 shadow-2xl flex flex-col space-y-6">
                  <div>
                    <h3 className="text-sm font-black text-white uppercase tracking-wider mb-1">数据库资源浏览器</h3>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">DuckDB Catalog Explorer</p>
                  </div>

                  <button
                    onClick={loadAllSamples}
                    disabled={isLoading || isExecuting}
                    className="w-full py-3 bg-yellow-500 hover:bg-yellow-400 disabled:opacity-50 text-black rounded-xl text-xs font-black uppercase tracking-widest transition-all active:scale-95 flex items-center justify-center gap-2"
                  >
                    ⚡ 一键载入全套样本表
                  </button>

                  <div className="space-y-4">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest border-b border-white/5 pb-2">活动数据库表 Active Tables</h4>
                    {Object.keys(tablesMetadata).length === 0 ? (
                      <div className="text-xs text-slate-500 italic py-4">
                        暂无活动表。您可以直接在右侧编写 CREATE TABLE 运行，或点击上方按钮一键载入内置样本表。
                      </div>
                    ) : (
                      <div className="space-y-3 font-mono text-xs max-h-[300px] overflow-y-auto">
                        {Object.entries(tablesMetadata).map(([tName, columns]) => (
                          <div key={tName} className="space-y-1.5 p-3 bg-white/5 rounded-xl border border-white/5 hover:border-yellow-500/20 transition-all">
                            <button
                              onClick={() => setSql(`SELECT * FROM ${tName} LIMIT 10;`)}
                              className="text-left w-full font-bold text-yellow-400 hover:underline flex items-center gap-1.5"
                              title="点击生成查询模板"
                            >
                              <span>📊</span>
                              <span>{tName}</span>
                              <span className="text-xs text-slate-500 font-bold ml-auto font-sans bg-white/5 px-1 py-0.2 rounded">({columns.length} cols)</span>
                            </button>
                            <div className="pl-5 space-y-1 text-slate-400 text-xs border-l border-white/10 ml-2">
                              {columns.map(col => (
                                <div 
                                  key={col.columnName} 
                                  onDoubleClick={() => insertTextAtCursor(col.columnName)}
                                  className="flex justify-between items-center cursor-pointer hover:bg-white/5 hover:text-yellow-400 px-1.5 py-0.5 rounded transition-all group"
                                  title="双击插入字段名到 SQL 编辑器光标处"
                                >
                                  <span className="font-bold">{col.columnName}</span>
                                  <span className="text-slate-500 font-bold group-hover:text-yellow-500/80 transition-colors">{col.dataType.toLowerCase()}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest border-b border-white/5 pb-2">极速 Parquet 读取模板</h4>
                    <button
                      onClick={() => setSql(`-- 🦆 DuckDB 极速读取远程 Parquet 样例
SELECT * 
FROM read_parquet('https://datasets.clickhouse.com/cell_towers.parquet') 
LIMIT 5;`)}
                      className="text-left w-full p-3 bg-white/5 rounded-xl border border-white/5 hover:border-yellow-500/20 text-slate-450 hover:text-white transition-colors block"
                    >
                      <div className="font-bold text-xs text-yellow-400 mb-1">📖 Parquet 远程联查</div>
                      <div className="text-xs leading-relaxed text-slate-550">不经过数据库，直接对远程 S3/HTTP Parquet 文件进行过滤分析。</div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: SQL Terminal Editor (8 cols) */}
              <div className="lg:col-span-8 bg-slate-900 border border-white/5 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
                <div className="px-6 py-4 bg-slate-950/40 border-b border-white/5 flex justify-between items-center backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <span className="bg-yellow-500/10 text-yellow-500 text-xs font-bold px-2.5 py-0.5 rounded-md uppercase tracking-widest border border-yellow-500/20">
                      {currentTicket.id}
                    </span>
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-white/5 text-white/30 uppercase tracking-widest border border-white/5">
                      OLAP SESSION
                    </span>
                  </div>
                  <CopyButton text={sql} />
                </div>
                
                <div className="p-1">
                  <textarea
                    ref={textareaRef}
                    value={sql}
                    onChange={(e) => {
                      setSql(e.target.value);
                      setHistoryIdx(-1);
                    }}
                    onKeyDown={handleKeyDown}
                    className="w-full bg-transparent p-8 font-mono text-base text-yellow-100/90 outline-none min-h-[220px] resize-none selection:bg-yellow-500/30"
                    placeholder="输入 SQL 查询..."
                    spellCheck={false}
                  />
                </div>

                <div className="px-6 py-4 bg-slate-950/60 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-slate-500">
                    <span className="flex items-center gap-2">
                      <span className={cn("w-1.5 h-1.5 rounded-full", isLoading ? "bg-slate-700" : "bg-emerald-500")} />
                      {isLoading ? 'Booting...' : 'Connected'}
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setSql(currentTicket.defaultSQL)}
                      className="text-xs font-bold uppercase tracking-widest px-4 py-2 border border-white/10 rounded-lg text-slate-400 hover:text-white transition-all"
                    >
                      Reset
                    </button>
                    <button
                      onClick={executeSQL}
                      disabled={isLoading || isExecuting}
                      className="bg-yellow-500 text-black text-xs font-bold uppercase tracking-widest px-6 py-2 rounded-lg hover:bg-yellow-400 shadow-lg shadow-yellow-500/20 disabled:opacity-50 transition-all flex items-center gap-2"
                    >
                      {isExecuting ? 'Running...' : 'Run Query'}
                      <span className="text-base">⚡</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Section */}
            {error && (
              <div className="mt-6 bg-rose-50/50 border-2 border-rose-100 p-6 rounded-2xl text-rose-800 font-bold text-sm flex items-center gap-3">
                <span className="text-xl">⚠️</span> {error}
              </div>
            )}

            {renderResultTable()}
          </section>

          {/* Knowledge & Quiz */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <section>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">知识要点</span>
                <div className="h-px bg-slate-100 flex-1" />
              </div>
              <div className="bg-slate-50/50 rounded-2xl p-8 border border-slate-100 shadow-inner h-full">
                <div className="text-xs font-bold text-indigo-400 tracking-widest uppercase mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" /> Pattern Notes
                </div>
                <div className="text-base text-slate-600 leading-relaxed font-medium knowledge-body" dangerouslySetInnerHTML={{ __html: currentTicket.knowledge }} />
              </div>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">能力质检</span>
                <div className="h-px bg-slate-100 flex-1" />
              </div>
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full -mr-16 -mt-16 opacity-50" />
                <div className="relative z-10">
                  <div className="text-lg font-bold text-slate-900 mb-6 leading-relaxed">
                    {currentTicket.quiz.q}
                  </div>
                  <div className="space-y-3">
                    {currentTicket.quiz.options.map((opt, i) => {
                      const isCorrect = i === currentTicket.quiz.answer;
                      const isChosen = quizState.chosen === i;
                      const showCorrect = quizState.showFeedback && isCorrect;
                      const showWrong = quizState.showFeedback && isChosen && !isCorrect;

                      return (
                        <button
                          key={i}
                          disabled={quizState.showFeedback}
                          onClick={() => setQuizState({ chosen: i, showFeedback: true })}
                          className={cn(
                            "w-full text-left p-4 rounded-xl border-2 transition-all font-bold text-sm flex items-center gap-4 group",
                            !quizState.showFeedback && "bg-white border-slate-50 text-slate-600 hover:border-yellow-500 hover:bg-yellow-50/50",
                            showCorrect && "bg-emerald-50 border-emerald-500 text-emerald-800",
                            showWrong && "bg-rose-50 border-rose-500 text-rose-800"
                          )}
                        >
                          <span className={cn(
                            "w-6 h-6 rounded-lg bg-slate-100 flex items-center justify-center text-xs font-bold transition-colors shrink-0",
                            !quizState.showFeedback && "group-hover:bg-yellow-500"
                          )}>
                            {String.fromCharCode(65 + i)}
                          </span>
                          {opt}
                        </button>
                      );
                    })}
                  </div>

                  <AnimatePresence>
                    {quizState.showFeedback && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={cn(
                          "mt-6 p-6 rounded-xl border-2 flex gap-4 items-start shadow-inner",
                          quizState.chosen === currentTicket.quiz.answer
                            ? "bg-emerald-50 border-emerald-100 text-emerald-800"
                            : "bg-rose-50 border-rose-100 text-rose-800"
                        )}
                      >
                        <div className="text-2xl shrink-0">{quizState.chosen === currentTicket.quiz.answer ? '✅' : '❌'}</div>
                        <div>
                          <div className="font-bold uppercase tracking-widest text-xs mb-1">
                            Analysis
                          </div>
                          <div className="text-sm font-medium leading-relaxed">{currentTicket.quiz.explain}</div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </section>
          </div>

          {/* Footer Navigation */}
          <div className="pt-8 border-t border-slate-100 flex justify-between items-center pb-24 lg:pb-8">
            <button
              disabled={currentTicketIdx === 0}
              onClick={() => setCurrentTicketIdx(currentTicketIdx - 1)}
              className="text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-xl border-2 border-slate-100 text-slate-400 hover:text-slate-600 hover:bg-slate-50 disabled:opacity-30 transition-all flex items-center gap-2"
            >
              ← Previous
            </button>
            <div className="px-4 py-2 rounded-full bg-slate-100 text-xs font-bold text-slate-500 uppercase tracking-widest border border-slate-200">
              Step {currentTicketIdx + 1} of {DUCKDB_TICKETS.length}
            </div>
            <button
              disabled={currentTicketIdx === DUCKDB_TICKETS.length - 1}
              onClick={() => setCurrentTicketIdx(currentTicketIdx + 1)}
              className="text-xs font-bold uppercase tracking-widest px-8 py-3 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 text-black hover:opacity-90 shadow-lg shadow-yellow-500/20 disabled:opacity-30 transition-all flex items-center gap-2"
            >
              Next →
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
      </SplitViewLayout>
    </>
  );
};

export default DuckdbTutorialPage;
