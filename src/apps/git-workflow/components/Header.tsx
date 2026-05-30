export default function Header() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/15 rounded-full text-sm text-white/80 mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span>MECE 原则 · 7 大模块 · 完整闭环</span>
        </div>

        {/* Title */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-3xl shadow-xl shadow-indigo-500/30">
            🔀
          </div>
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-none">
              Git 全流程
              <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent ml-3">
                元提示体
              </span>
            </h1>
            <p className="text-white/50 font-mono text-sm mt-1">
              Vibe Coding · Meta-Prompt System for Git Workflow
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-white/65 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
          基于 <strong className="text-white/90">MECE 原则</strong> 设计的通用闭环元提示体系，覆盖 Git 版本管理全流程。
          每个模块<strong className="text-white/90">相互独立、无重叠</strong>，可单独使用也可自由组合，
          直接粘贴到 Cursor / Claude / GPT 等 AI 工具即可使用。
        </p>

        {/* Stats */}
        <div className="flex items-center justify-center gap-8 flex-wrap">
          {[
            { label: "核心模块", value: "7", icon: "📦" },
            { label: "操作步骤", value: "28+", icon: "📌" },
            { label: "Git 命令", value: "50+", icon: "⌨️" },
            { label: "覆盖场景", value: "全流程", icon: "🎯" },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-2">
              <span className="text-xl">{stat.icon}</span>
              <div className="text-left">
                <div className="text-2xl font-black text-white">{stat.value}</div>
                <div className="text-white/50 text-xs">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* MECE diagram */}
        <div className="mt-10 flex items-center justify-center gap-3 flex-wrap">
          {["M1 初始化", "M2 提交", "M3 分支", "M4 同步", "M5 部署", "M6 回滚", "M7 审计"].map(
            (m, i) => (
              <div key={m} className="flex items-center gap-2">
                <div className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-xs font-mono text-white/80 backdrop-blur-sm hover:bg-white/15 transition-colors cursor-default">
                  {m}
                </div>
                {i < 6 && (
                  <svg className="w-3 h-3 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </header>
  );
}
