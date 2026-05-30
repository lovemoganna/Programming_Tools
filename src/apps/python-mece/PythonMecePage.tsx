import React, { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CURRICULUM, Chapter, Ticket } from './data/curriculum';
import { CopyButton } from '../../components/CopyButton';
import { cn } from '../../utils/cn';
import { PageHeader } from "../../components/PageHeader";
import { PageFooter } from "../../components/PageFooter";
import { SectionHeader } from "../../components/SectionHeader";
import { SplitViewLayout } from "../../components/SplitViewLayout";
import { matchPinyin } from "../../utils/pinyin";

const PythonMecePage: React.FC = () => {
  const [curIdx, setCurIdx] = useState(0);
  const [completed, setCompleted] = useState<Set<number>>(new Set());
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [quizState, setQuizState] = useState<{ chosen: number | null; showFeedback: boolean }>({
    chosen: null,
    showFeedback: false,
  });

  const mainContentRef = useRef<HTMLDivElement>(null);

  const allTickets = useMemo(() => {
    const list: { ticket: Ticket; chapter: Chapter; globalIdx: number }[] = [];
    let gi = 0;
    CURRICULUM.forEach(ch => {
      ch.tickets.forEach(t => {
        list.push({ ticket: t, chapter: ch, globalIdx: gi++ });
      });
    });
    return list;
  }, []);

  const current = allTickets[curIdx];

  const filteredChapters = useMemo(() => {
    const q = searchQuery.trim();
    if (!q) return CURRICULUM;
    return CURRICULUM.map(ch => ({
      ...ch,
      tickets: ch.tickets.filter(t => 
        matchPinyin(t.title, q) || 
        matchPinyin(t.id, q) ||
        matchPinyin(t.sub, q)
      )
    })).filter(ch => ch.tickets.length > 0);
  }, [searchQuery]);

  // Load progress
  useEffect(() => {
    const saved = localStorage.getItem('python_mece_progress');
    if (saved) {
      try {
        setCompleted(new Set(JSON.parse(saved)));
      } catch (e) {
        console.error('Failed to load progress', e);
      }
    }
  }, []);

  // Handle Deep Linking via Hash
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('id=')) {
        const id = hash.replace('id=', '');
        const targetIdx = allTickets.findIndex(item => item.ticket.id === id);
        if (targetIdx !== -1) setCurIdx(targetIdx);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, [allTickets]);

  // Save progress
  useEffect(() => {
    localStorage.setItem('python_mece_progress', JSON.stringify(Array.from(completed)));
  }, [completed]);

  useEffect(() => {
    setQuizState({ chosen: null, showFeedback: false });
    if (mainContentRef.current) {
      mainContentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [curIdx]);

  const handleMarkDone = (idx: number) => {
    setCompleted(prev => {
      const next = new Set(prev);
      next.add(idx);
      return next;
    });
  };

  const progress = Math.round((completed.size / allTickets.length) * 100);

  const sidebar = (
    <>
      <div className="p-8 border-b border-slate-100 bg-white/50 backdrop-blur-sm">
        <div className="relative">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          <input
            type="text"
            placeholder="搜索原子工单..."
            aria-label="搜索原子工单"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-sm outline-none focus:ring-4 focus:ring-slate-100 focus:border-slate-300 transition-all placeholder:text-slate-500 font-bold"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto py-6 px-4 space-y-8">
        {filteredChapters.length === 0 ? (
          <div className="text-center py-12 px-4 animate-fade-in" role="status">
            <span className="text-4xl block mb-3 grayscale opacity-30">🔍</span>
            <h4 className="text-sm font-bold text-slate-700 mb-1">未找到匹配工单</h4>
            <p className="text-sm text-slate-500 leading-relaxed max-w-[200px] mx-auto">请尝试使用其他关键字进行搜索</p>
          </div>
        ) : (
          filteredChapters.map((ch) => (
          <div key={ch.id}>
            <div className="px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-slate-500 flex items-center gap-2">
              <span className="opacity-50">{ch.icon}</span> {ch.label}
            </div>
            <div className="mt-3 space-y-2">
              {ch.tickets.map((t) => {
                const globalIdx = allTickets.findIndex(item => item.ticket.id === t.id);
                const isActive = curIdx === globalIdx;
                const isDone = completed.has(globalIdx);
                return (
                  <div
                    key={t.id}
                    onClick={() => setCurIdx(globalIdx)}
                    className={cn(
                      "group flex items-center gap-4 px-4 py-3.5 cursor-pointer transition-all duration-300 rounded-2xl",
                      isActive 
                        ? "bg-slate-900 text-white shadow-xl shadow-blue-950/20 scale-[1.02] border border-blue-500/20" 
                        : "text-slate-500 hover:bg-white hover:text-slate-900 hover:shadow-md hover:shadow-slate-200/50 border border-transparent"
                    )}
                  >
                    <div className={cn(
                      "w-2.5 h-2.5 rounded-full shrink-0 transition-all duration-500",
                      isActive ? "bg-blue-400 scale-125 shadow-[0_0_10px_rgba(96,165,250,0.5)]" : (isDone ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" : "bg-slate-300 group-hover:bg-slate-400")
                    )} />
                    <div className="min-w-0">
                      <div className={cn("text-xs font-black tracking-widest mb-1 transition-colors", isActive ? "text-blue-400" : "text-slate-500")}>{t.id}</div>
                      <div className={cn("text-sm font-black leading-tight truncate transition-colors", isActive ? "text-white" : "text-slate-800")}>
                        {t.title}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )))}
      </div>
      
      <div className="p-8 bg-white/50 border-t border-slate-100 backdrop-blur-sm">
        <div className="flex justify-between text-xs font-black tracking-widest text-slate-400 mb-3">
          <span>CURRICULUM PROGRESS</span>
          <span className="text-emerald-600 font-black">{completed.size}/{allTickets.length}</span>
        </div>

        <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-emerald-500"
            animate={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </>
  );

  return (
    <>
      <SplitViewLayout
      header={
        <PageHeader
          title="Python MECE"
          subtitle="原子路径 · 工程化进阶 · 逻辑图谱"
          description="遵循 MECE 原则设计的 Python 认知工单。从基础语法的物理层面，到函数式与异步编程的逻辑层面，构建无遗漏的工程知识图谱。"
          icon="🐍"
          gradient="from-blue-500 to-indigo-600"
          badgeText="Curriculum v2.0 · Mastery Path"
          stats={[
            { label: "原子工单", value: allTickets.length, icon: "📋" },
            { label: "学习层级", value: "7", icon: "🏛️" },
            { label: "掌握进度", value: `${progress}%`, icon: "📈" },
          ]}
        />
      }
      sidebar={sidebar}
      footer={
        <PageFooter 
          title="Python Engineering Path"
          description="构建无遗漏的 Python 工程知识图谱。从原子语法到复杂系统，掌握结构化编程的终极路径。"
          icon="🐍"
          tags={["Atomic Learning", "MECE Principle", "Pattern Matching", "Async Concurrency"]}
          gradient="from-blue-500 to-indigo-600"
        />
      }
      isSidebarOpen={isSidebarOpen}
      onToggleSidebar={setIsSidebarOpen}
      mainRef={mainContentRef}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current.ticket.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="space-y-8"
        >
          {/* Header */}
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 bg-blue-50 text-blue-600 rounded-lg text-xs font-bold uppercase tracking-widest border border-blue-100">
                {current.ticket.id}
              </span>
              <span className="px-2.5 py-0.5 bg-slate-100 text-slate-500 rounded-lg text-xs font-bold uppercase tracking-widest border border-slate-200">
                {current.chapter.label}
              </span>
              {current.ticket.mece.map(tag => (
                <span key={tag} className="px-2.5 py-0.5 bg-emerald-50 text-emerald-600 rounded-lg text-xs font-bold uppercase tracking-widest border border-emerald-100">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-start justify-between gap-10">
              <div>
                <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-2">
                  {current.ticket.title}
                </h1>
                <p className="text-xl font-bold text-slate-500 tracking-tight leading-tight">
                  {current.ticket.sub}
                </p>
              </div>
              <div className="flex flex-col items-end gap-2 shrink-0">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-3xl border border-slate-100 shadow-inner">
                  {current.chapter.icon}
                </div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Complex: {current.ticket.cx}/5</div>
              </div>
            </div>
          </div>

          {/* Concept Section */}
          <section>
            <SectionHeader title="核心概念" badge="Concept" />
            <div className="bg-slate-50/50 rounded-2xl p-8 border border-slate-100 shadow-inner">
              <div 
                className="text-base md:text-lg text-slate-600 leading-relaxed font-medium concept-content" 
                dangerouslySetInnerHTML={{ __html: current.ticket.concept }} 
              />
            </div>
          </section>

          {/* Code Section */}
          <section>
            <SectionHeader title="代码示例" badge="Code Implementation" />
            <div className="relative group">
              <div className="absolute right-4 top-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                <CopyButton text={current.ticket.code.join('\n')} />
              </div>
              <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-white/5 w-full max-w-full min-w-0">
                <div className="bg-white/5 px-6 py-2.5 border-b border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-rose-500" />
                    <div className="w-2 h-2 rounded-full bg-amber-500" />
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="ml-2 text-xs font-bold uppercase tracking-widest text-slate-500">python-mece-v2.py</span>
                  </div>
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Atomic Sandbox</span>
                </div>
                <div className="p-8 font-mono text-sm leading-relaxed text-slate-300 overflow-x-auto whitespace-pre">
                  {current.ticket.code.map((line, i) => (
                    <div key={i} className={cn(
                      "min-h-[1.5em]",
                      line.startsWith('#') ? "text-slate-500/80" : "text-blue-50/90"
                    )}>
                      {line}
                    </div>
                  ))}
                </div>
                <div className="bg-blue-500/5 p-6 border-t border-white/5">
                  <div className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" /> Output
                  </div>
                  <pre className="text-slate-400 font-mono text-sm leading-relaxed whitespace-pre-wrap">
                    {current.ticket.out}
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* Callout Section */}
          <section>
            <div className={cn(
              "rounded-2xl p-6 border-2 flex gap-4 items-start shadow-sm",
              current.ticket.callout.type === 'info' && "bg-blue-50/50 border-blue-100",
              current.ticket.callout.type === 'warn' && "bg-amber-50/50 border-amber-100",
              current.ticket.callout.type === 'danger' && "bg-rose-50/50 border-rose-100",
              current.ticket.callout.type === 'tip' && "bg-emerald-50/50 border-emerald-100",
            )}>
              <div className="text-3xl shrink-0">{current.ticket.callout.icon}</div>
              <div>
                <h4 className={cn(
                  "text-base font-bold tracking-tight mb-1",
                  current.ticket.callout.type === 'info' && "text-blue-900",
                  current.ticket.callout.type === 'warn' && "text-amber-900",
                  current.ticket.callout.type === 'danger' && "text-rose-900",
                  current.ticket.callout.type === 'tip' && "text-emerald-900",
                )}>
                  {current.ticket.callout.title}
                </h4>
                <div 
                  className="text-sm leading-relaxed font-medium text-slate-700"
                  dangerouslySetInnerHTML={{ __html: current.ticket.callout.body }} 
                />
              </div>
            </div>
          </section>

          {/* Quiz Section */}
          <section>
            <SectionHeader title="原子质检" badge="Knowledge Check" />
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full -mr-16 -mt-16 opacity-50" />
              <div className="relative z-10">
                <div 
                  className="text-lg font-bold text-slate-900 mb-6 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: current.ticket.quiz.q }}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {current.ticket.quiz.opts.map((opt, i) => {
                    const isCorrect = i === current.ticket.quiz.ans;
                    const isChosen = quizState.chosen === i;
                    const showCorrect = quizState.showFeedback && isCorrect;
                    const showWrong = quizState.showFeedback && isChosen && !isCorrect;

                    return (
                      <button
                        key={i}
                        disabled={quizState.showFeedback}
                        onClick={() => setQuizState({ chosen: i, showFeedback: true })}
                        className={cn(
                          "text-left p-4 rounded-xl border-2 transition-all font-bold text-sm flex items-center gap-3 group disabled:opacity-60 disabled:cursor-default",
                          !quizState.showFeedback && "bg-white border-slate-100 text-slate-600 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-700",
                          showCorrect && "bg-emerald-50 border-emerald-500 text-emerald-700",
                          showWrong && "bg-rose-50 border-rose-500 text-rose-700"
                        )}
                      >
                        <span className={cn(
                          "w-6 h-6 rounded-lg bg-slate-100 flex items-center justify-center text-xs font-bold shrink-0 transition-colors",
                          !quizState.showFeedback && "group-hover:bg-blue-500 group-hover:text-white"
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
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className={cn(
                        "mt-6 p-5 rounded-xl border-2 flex gap-4 items-start shadow-inner",
                        quizState.chosen === current.ticket.quiz.ans
                          ? "bg-emerald-50 border-emerald-100 text-emerald-800"
                          : "bg-rose-50 border-rose-100 text-rose-800"
                      )}
                    >
                      <div className="text-xl shrink-0">{quizState.chosen === current.ticket.quiz.ans ? '✅' : '❌'}</div>
                      <div>
                        <div className="font-bold uppercase tracking-widest text-xs mb-1">
                          {quizState.chosen === current.ticket.quiz.ans ? 'Correct Analysis' : 'Incorrect Analysis'}
                        </div>
                        <div 
                          className="text-sm font-medium leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: current.ticket.quiz.ex }}
                        />
                      </div>

                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </section>

          {/* Footer Navigation */}
          <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-6 pb-24 lg:pb-8">
            <button
              disabled={curIdx === 0}
              onClick={() => setCurIdx(curIdx - 1)}
              className="w-full sm:w-auto px-6 py-3 rounded-xl border-2 border-slate-100 text-slate-400 font-bold text-sm tracking-wider enabled:hover:bg-slate-50 enabled:hover:border-slate-200 enabled:hover:text-slate-600 disabled:opacity-40 disabled:pointer-events-none disabled:cursor-not-allowed transition-all"
            >
              ← Previous
            </button>

            <div className="flex flex-col items-center gap-1.5">
              <button
                onClick={() => handleMarkDone(curIdx)}
                disabled={completed.has(curIdx)}
                className={cn(
                  "px-8 py-3 rounded-xl font-bold text-sm tracking-wider transition-all",
                  completed.has(curIdx) 
                    ? "bg-emerald-100 text-emerald-700 border-2 border-emerald-200 cursor-default" 
                    : "bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-900/10 active:scale-95"
                )}
              >
                {completed.has(curIdx) ? "✓ Mastered" : "Mark as Mastered"}
              </button>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                Step {curIdx + 1} of {allTickets.length}
              </div>
            </div>
            <button
              disabled={curIdx === allTickets.length - 1}
              onClick={() => {
                handleMarkDone(curIdx);
                setCurIdx(curIdx + 1);
              }}
              className="w-full sm:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-sm tracking-wider enabled:hover:opacity-90 enabled:active:scale-95 shadow-lg shadow-blue-600/10 disabled:opacity-30 disabled:pointer-events-none disabled:cursor-not-allowed transition-all"
            >
              Next Ticket →
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
      </SplitViewLayout>
    </>
  );
};

export default PythonMecePage;
