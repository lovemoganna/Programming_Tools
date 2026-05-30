import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";
import { PageFooter } from "../components/PageFooter";
import { DesignTokens } from "../theme/design-tokens";
import { StorageUtility } from "../utils/StorageUtility";
import { getPerformanceMetrics, type PerformanceReport } from "../utils/performanceMonitor";

const tools = [
  {
    id: "excel",
    title: "Excel AI 提示词",
    desc: "高效数据处理与分析，覆盖清洗、公式、透视、VBA 等全场景",
    icon: "📊",
    color: "from-emerald-500 to-teal-600",
    path: "/excel",
    badge: "Expertise"
  },
  {
    id: "git",
    title: "Git 全流程元提示",
    desc: "基于 MECE 原则的 Git 工作流闭环，覆盖从初始化到审计全流程",
    icon: "🔀",
    color: "from-violet-500 to-indigo-600",
    path: "/git",
    badge: "Workflow"
  },
  {
    id: "mece",
    title: "元提示框架",
    desc: "精炼、可复用的高质量提示词体系，适配创作、分析、代码等五大场景",
    icon: "🛠️",
    color: "from-violet-500 to-cyan-500",
    path: "/mece",
    badge: "Methodology"
  },
  {
    id: "mindset",
    title: "编程开窍指南",
    desc: "建立模型化思维，理解编程本质，含 Elisp 范式与 AI 强化模块",
    icon: "λ",
    color: "from-indigo-500 to-violet-600",
    path: "/mindset",
    badge: "Evolution"
  },
  {
    id: "python",
    title: "Python MECE 路径",
    desc: "原子级学习工单，覆盖从基础语法到异步编程的 21 个核心概念",
    icon: "🐍",
    color: "from-blue-500 to-indigo-600",
    path: "/python",
    badge: "Mastery"
  },
  {
    id: "duckdb",
    title: "DuckDB 交互教程",
    desc: "在浏览器中直接运行 SQL，掌握向量化执行引擎与现代 OLAP 分析",
    icon: "🦆",
    color: "from-yellow-400 to-orange-500",
    path: "/duckdb",
    badge: "Interactive"
  },
  {
    id: "ce",
    title: "上下文工程 v4",
    desc: "闭环元提示体深度扩展，掌握 9 种微模式与 17 维度设计闭环",
    icon: "⚙️",
    color: "from-cyan-400 to-blue-600",
    path: "/ce",
    badge: "Engineering"
  },
  {
    id: "wiki",
    title: "心流触发 Wiki",
    desc: "基于 Wishful Thinking 与 Ontology 的心流触发 system，覆盖从启动到收尾的全流程。",
    icon: "🌊",
    color: "from-blue-600 to-indigo-700",
    path: "/wiki",
    badge: "V2.0"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  },
};

export default function HomePage() {
  const [perf, setPerf] = useState<PerformanceReport | null>(null);

  useEffect(() => {
    getPerformanceMetrics().then(res => setPerf(res));
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Hero */}
      <header className="relative bg-slate-900 pt-32 pb-24 px-6 overflow-hidden">
        {perf && (perf.tti > 1500 || perf.fcp > 800 || perf.isWhiteScreenCrashed) && (
          <div className="max-w-4xl mx-auto mb-8 bg-rose-500/15 border border-rose-500/30 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 backdrop-blur-md relative z-20">
            <div className="flex items-center gap-3 text-left">
              <span className="text-2xl shrink-0">⚠️</span>
              <div>
                <h4 className="text-sm font-black text-rose-300">性能诊断警报 (Performance Alert)</h4>
                <p className="text-xs text-rose-300/70 font-medium mt-0.5">
                  TTI ({perf.tti}ms) 或 FCP ({perf.fcp}ms) 超过推荐阈值，为了获得最佳流畅度，建议重置系统缓存。
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                localStorage.clear();
                window.location.reload();
              }}
              className="bg-rose-500 text-white text-xs font-black uppercase tracking-widest px-4 py-2.5 rounded-xl hover:bg-rose-400 transition-all whitespace-nowrap active:scale-95 shadow-lg shadow-rose-950/20"
            >
              一键重置 Cache
            </button>
          </div>
        )}

        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] -ml-24 -mb-24" />
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white/80 text-xs font-black uppercase tracking-[0.3em] mb-12 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_var(--color-info-500)]" />
            Programming Tools Hub
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black text-white leading-[0.9] mb-8 tracking-tighter"
          >
            工具驱动 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">思维开窍</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium mb-12"
          >
            集成式编程提效与思维进化平台。基于 <strong className="text-white/80">MECE 原子化</strong> 设计，通过结构化元提示体（Meta-Prompts）赋能开发者。
          </motion.p>

          {perf && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex flex-wrap items-center justify-center gap-6 md:gap-8 px-6 py-3 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md max-w-2xl mx-auto mb-12 text-left text-xs font-mono text-white/80"
            >
              <div className="flex items-center gap-2">
                <span className="text-white/40">FCP:</span>
                <span className="text-emerald-400 font-bold">{perf.fcp}ms</span>
              </div>
              <div className="h-4 w-px bg-white/10 hidden md:block" />
              <div className="flex items-center gap-2">
                <span className="text-white/40">TTI:</span>
                <span className="text-emerald-400 font-bold">{perf.tti}ms</span>
              </div>
              <div className="h-4 w-px bg-white/10 hidden md:block" />
              <div className="flex items-center gap-2">
                <span className="text-white/40">白屏监测:</span>
                {perf.isWhiteScreenCrashed ? (
                  <span className="text-rose-400 font-bold">⚠️ 异常 CRASH</span>
                ) : (
                  <span className="text-emerald-400 font-bold">🟢 安全 HEALTHY</span>
                )}
              </div>
              <div className="h-4 w-px bg-white/10 hidden md:block" />
              <div className="flex items-center gap-2">
                <span className="text-white/40">性能评级:</span>
                <span className={cn(
                  "font-bold uppercase px-2 py-0.5 rounded text-xs",
                  perf.status === "Excellent" && "bg-emerald-500/20 text-emerald-300",
                  perf.status === "Good" && "bg-amber-500/20 text-amber-300",
                  perf.status === "Slow" && "bg-rose-500/20 text-rose-300"
                )}>
                  {perf.status}
                </span>
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 text-xs font-black uppercase tracking-widest text-white/20"
          >
            <span>Structural Logic</span>
            <span className="w-1 h-1 rounded-full bg-current mt-1.5 opacity-50" />
            <span>AI Augmented</span>
            <span className="w-1 h-1 rounded-full bg-current mt-1.5 opacity-50" />
            <span>Complexity Control</span>
          </motion.div>
        </div>
      </header>

      {/* Grid */}
      <main className="max-w-7xl mx-auto px-6 py-24 flex-1 w-full">
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px bg-slate-200 flex-1" />
          <h2 className="text-xs font-black uppercase tracking-[0.5em] text-slate-400">Core Modules</h2>
          <div className="h-px bg-slate-200 flex-1" />
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {tools.map((tool) => (
            <motion.div key={tool.id} variants={itemVariants}>
              <Link to={tool.path} className="block rounded-[2.5rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50">
                <motion.div
                  whileHover={DesignTokens.motion.hover}
                  whileTap={DesignTokens.motion.tap}
                  className="group relative block bg-white rounded-[2.5rem] border border-slate-100 p-10 shadow-sm hover:shadow-2xl transition-all duration-500 h-full overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full -mr-16 -mt-16 opacity-50 group-hover:scale-150 transition-transform duration-700" />
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-8">
                      <div className={cn("w-16 h-16 rounded-[1.25rem] bg-gradient-to-br flex items-center justify-center text-3xl shadow-lg text-white group-hover:rotate-6 transition-transform duration-500", tool.color)}>
                        {tool.icon}
                      </div>
                      <span className="text-xs font-black uppercase tracking-widest bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg border border-slate-200 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-all">
                        {tool.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors">{tool.title}</h3>
                    <p className="text-slate-500 leading-relaxed text-lg font-medium mb-10 min-h-[3rem]">
                      {tool.desc}
                    </p>

                    <div className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-slate-500 group-hover:text-slate-900 transition-all">
                      Launch Module
                      <svg className="w-4 h-4 translate-x-0 group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}

          {/* Asset Export Card */}
          <motion.div variants={itemVariants}>
            <button
              onClick={() => StorageUtility.exportAsMarkdown()}
              className="w-full text-left group relative block bg-slate-900 rounded-[2.5rem] border border-slate-800 p-10 shadow-xl hover:shadow-emerald-900/20 transition-all duration-500 h-full overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -mr-24 -mt-24 blur-3xl group-hover:scale-150 transition-transform duration-700" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-16 h-16 rounded-[1.25rem] bg-emerald-500 flex items-center justify-center text-3xl shadow-lg shadow-emerald-500/20 text-white group-hover:rotate-12 transition-transform duration-500">
                    💾
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest bg-emerald-500/10 text-emerald-400 px-3 py-1.5 rounded-lg border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                    Data Asset
                  </span>
                </div>

                <h3 className="text-2xl font-black text-white mb-4 tracking-tight">知识资产导出</h3>
                <p className="text-white/70 leading-relaxed text-lg font-medium mb-10 min-h-[3rem]">
                  一键生成个人学习周报与提示词资产。支持导出为 Markdown 格式，随时分发至生产环境。
                </p>

                <div className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-emerald-400 group-hover:text-emerald-300 transition-all">
                  Generate Report
                  <svg className="w-4 h-4 translate-y-0 group-hover:translate-y-1 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 16v1a2 2 0 002 2h12a2 2 0 002 -2v-1M7 10l5 5l5 -5M12 15V3" />
                  </svg>
                </div>
              </div>
            </button>
          </motion.div>
        </motion.div>
      </main>

      <PageFooter 
        title="Programming Tools Hub"
        description="重新定义开发者与 AI 的协作范式。致力于通过 MECE 方法论，将混沌的需求转化为精确的工程语言。"
        icon="P"
        tags={["Vibe Coding", "Meta-Prompting", "Atomic Learning", "Engineering Consistency"]}
        gradient="from-slate-800 to-slate-900"
      />
    </div>
  );
}
