import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import { Message } from './useIntelligence';
import { LLMProgress } from '../../utils/LLMService';

interface MessageListProps {
  messages: Message[];
  isThinking: boolean;
  isReady: boolean;
  isInitializing: boolean;
  initProgress: LLMProgress | null;
  initializeAI: () => void;
  scrollRef: React.RefObject<HTMLDivElement | null>;
  expertType?: string;
  setInput?: (val: string) => void;
}

const PRESET_CHIPS: Record<string, { label: string; prompt: string }[]> = {
  default: [
    { label: "💡 解释原理", prompt: "请向我解释当前模块的设计思想与核心工作流。" },
    { label: "🔍 审计结构", prompt: "请帮我审计当前页面的功能模块，指出是否有不符合 MECE 的地方。" },
    { label: "🛠️ 建议改进", prompt: "请针对当前页面的应用场景，提出 3 个最优先的优化或功能迭代方案。" }
  ],
  python: [
    { label: "🐍 审计代码", prompt: "请帮我审计当前工单的 Python 代码，检查是否存在对象生命周期、可变默认参数等常见逻辑漏洞。" },
    { label: "🛡️ 检查边界", prompt: "这段 Python 代码在输入为空、类型不匹配或异常网络波动时，会有什么表现？如何设计边界保护？" },
    { label: "🧩 重构抽象", prompt: "如何利用 mapcar / seq-filter 或 Python 对应的推导式，重构这段命令式循环代码以提升清晰度？" }
  ],
  sql: [
    { label: "📊 优化窗口", prompt: "在 DuckDB 中，如何优化 OVER (PARTITION BY ... ORDER BY ...) 窗口函数的执行性能？" },
    { label: "🌐 远程查询", prompt: "如何利用 Projection Pushdown 和 Predicate Pushdown，优化针对远程 S3/HTTPS Parquet 文件的查询？" },
    { label: "⏱️ 执行顺序", prompt: "请详细说明 FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY 在引擎层面的逻辑和物理执行顺序。" }
  ],
  prompt: [
    { label: "📐 校验 MECE", prompt: "请校验我当前输入的提示词（或页面上下文），检查它的输入与输出结构是否做到了相互独立、完全穷尽。" },
    { label: "🎭 优化角色", prompt: "根据我当前的任务，如何使用更具体、带年限和特定风格偏好的 Role 描述，来约束 AI 的输出？" },
    { label: "🛡️ 增加防线", prompt: "如何为我当前的元提示词（Metaprompt）增加针对 happy path 之外异常输入的防御性约束规则？" }
  ],
  excel: [
    { label: "⚡ 优化 LET", prompt: "我需要重构一个嵌套了多层 VLOOKUP 且计算缓慢的公式，请展示如何使用 LET 声明局部变量来提升性能。" },
    { label: "🚀 设计 LAMBDA", prompt: "请演示如何使用 LAMBDA 编写一个不带宏的自定义函数，并在 Excel 名称管理器中注册为全局可用。" },
    { label: "🔄 MAP 迭代", prompt: "请展示如何使用 MAP 配合 LAMBDA 对一个多行多列区域进行动态数组逐行处理（Spill 溢出公式）。" }
  ],
  git: [
    { label: "📝 写 Commit", prompt: "请基于当前变更内容，为我起草符合 Conventional Commits 规范 of Git 提交日志。" },
    { label: "🌿 分支流程", prompt: "我们团队需要并行开发新功能与热修复，请为我们设计规范的 Git 分支切出、同步及合并 SOP。" },
    { label: "⏪ 故障回滚", prompt: "当我们推送到远程的主干分支代码出现严重线上事故时，如何安全地进行 revert 或 reset？请列出具体步骤。" }
  ],
  wiki: [
    { label: "🌊 心流原理", prompt: "请向我解释 A1 本体定义与 A2 愿望思考，是如何在写作与编程场景中帮助跨越启动摩擦力的？" },
    { label: "📥 中断队列", prompt: "当工作频繁受到打断时，应该如何使用 B2 中断队列暂存任务？如何用 B4 锚点快速恢复当前的工作记忆？" },
    { label: "🔬 心流诊断", prompt: "我经常在任务前过度准备或并发执行多任务，导致无法进入专注状态。请帮我诊断并给出具体纠偏指南。" }
  ]
};

const EXPERT_NAMES: Record<string, string> = {
  default: "端侧智能助手",
  python: "Python 研发专家",
  sql: "SQL 数据库专家",
  prompt: "提示词工程专家",
  excel: "Excel 数据专家",
  git: "Git 工作流专家",
  wiki: "心流方法论专家"
};

export const MessageList: React.FC<MessageListProps> = ({
  messages,
  isThinking,
  isReady,
  isInitializing,
  initProgress,
  initializeAI,
  scrollRef,
  expertType = 'default',
  setInput
}) => {
  const chips = PRESET_CHIPS[expertType] || PRESET_CHIPS.default;
  const expertName = EXPERT_NAMES[expertType] || EXPERT_NAMES.default;

  return (
    <div 
      ref={scrollRef}
      className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide flex flex-col"
    >
      {!isReady && !isInitializing && (
        <div className="my-auto flex flex-col items-center justify-center text-center p-6">
          <div className="text-5xl mb-6 grayscale opacity-40">🧬</div>
          <h3 className="text-sm font-black text-white uppercase tracking-widest mb-4">Simulation Standby</h3>
          <button 
            onClick={initializeAI}
            aria-label="启动模拟智能引擎"
            className="px-8 py-3 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-500 shadow-xl shadow-blue-900/40 transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          >
            Activate Sandbox AI
          </button>
          <p className="mt-6 text-xs text-white/60 font-bold max-w-[200px] leading-relaxed uppercase tracking-widest">
            Simulated On-Device AI <br />
            No VRAM allocation needed
          </p>
        </div>
      )}

      {isInitializing && (
        <div className="my-auto flex flex-col items-center justify-center text-center p-6">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="text-5xl mb-6"
          >
            ⌛
          </motion.div>
          <div className="text-xs font-black text-blue-400 uppercase tracking-[0.3em] mb-4">{initProgress?.text || "Initializing..."}</div>
          <div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden border border-white/5">
            <motion.div 
              className="h-full bg-blue-500"
              animate={{ width: `${(initProgress?.progress || 0) * 100}%` }}
            />
          </div>
        </div>
      )}

      {isReady && messages.length === 0 && (
        <div className="my-auto flex flex-col items-center justify-center p-4">
          <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-xl mb-4">
            🤖
          </div>
          <h4 className="text-sm font-bold text-white mb-1">{expertName}</h4>
          <p className="text-xs text-slate-400 text-center mb-6 max-w-[240px] leading-relaxed">
            端侧大模型就绪。点击下方快捷指令或在底部直接向我提问：
          </p>
          <div className="w-full space-y-2">
            {chips.map((chip, idx) => (
              <button
                key={idx}
                onClick={() => setInput && setInput(chip.prompt)}
                className="w-full text-left p-3 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                {chip.label}
              </button>
            ))}
          </div>
        </div>
      )}
      
      {messages.map((m, i) => (
        <div key={i} className={cn(
          "flex flex-col gap-2 max-w-[90%]",
          m.role === 'user' ? "ml-auto items-end" : "mr-auto items-start"
        )}>
          <div className={cn(
            "px-5 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap",
            m.role === 'user' 
              ? "bg-blue-600 text-white font-medium shadow-lg shadow-blue-600/20" 
              : "bg-white/5 text-slate-300 border border-white/5"
          )}>
            {m.content}
          </div>
        </div>
      ))}
      
      {isThinking && (
        <div className="flex gap-2 p-2">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      )}
    </div>
  );
};
