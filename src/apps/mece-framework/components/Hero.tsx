export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-slate-900 px-6 py-16 text-white">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
      {/* Glow orbs */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-violet-600 rounded-full opacity-10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-64 bg-cyan-500 rounded-full opacity-10 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
          <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 text-white shadow-xl shadow-indigo-500/30 text-3xl">
            M
          </div>
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/15 rounded-full text-xs font-black uppercase tracking-widest text-violet-400 mb-2 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Meta-Prompt Framework · MECE 系统设计
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-none">
              元提示
              <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent ml-3">
                核心框架
              </span>
            </h1>
          </div>
        </div>

        <p className="mx-auto md:mx-0 max-w-2xl text-white/60 text-lg leading-relaxed mb-10">
          精炼、可复用的高质量提示词体系 — 覆盖{" "}
          <strong className="text-white/90 font-medium">创作 · 分析 · 代码 · 学习 · 决策</strong>{" "}
          五大场景，按需组合，高效适配任意 AI 交互需求。
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center md:justify-start gap-10">
          {[
            { value: "8", label: "精选框架", icon: "📦" },
            { value: "5", label: "应用场景", icon: "🎯" },
            { value: "MECE", label: "结构原则", icon: "📐" },
            { value: "100%", label: "可复用模板", icon: "💎" },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <span className="text-xl">{s.icon}</span>
              <div className="text-left">
                <div className="text-2xl font-black text-white">{s.value}</div>
                <div className="text-white/40 text-xs font-bold uppercase tracking-widest">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
