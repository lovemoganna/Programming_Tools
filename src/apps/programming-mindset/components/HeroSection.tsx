export default function HeroSection() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-8 py-16 sm:px-14 sm:py-20 mb-12">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full -mr-40 -mt-40 blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full -ml-40 -mb-40 blur-[100px]"></div>
        {/* Subtle Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`, backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
          <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-600 text-white shadow-xl shadow-violet-500/30 text-3xl">
            λ
          </div>
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/15 rounded-full text-xs font-black uppercase tracking-widest text-violet-400 mb-2 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Mindset Evolution · 编程开窍指南
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-none">
              思维跃迁
              <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent ml-3">
                从招式到模型
              </span>
            </h1>
          </div>
        </div>

        <p className="mx-auto md:mx-0 max-w-2xl text-white/60 text-lg leading-relaxed mb-10">
          编程开窍不是学会了某种语言，而是脑子里建立了<strong className="text-white/90 font-medium">解决问题的心理模型</strong>。
          从「记语法、拼代码」进化到「理解本质、组织逻辑、控制复杂度」。
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center md:justify-start gap-10">
          {[
            { num: "20", label: "开窍信号", icon: "📡" },
            { num: "06", label: "核心范式", icon: "🏗️" },
            { num: "06", label: "强化模块", icon: "🧠" },
            { num: "MECE", label: "分析准则", icon: "📐" },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-3">
              <span className="text-xl">{stat.icon}</span>
              <div className="text-left">
                <div className="text-2xl font-black text-white">{stat.num}</div>
                <div className="text-white/40 text-xs font-bold uppercase tracking-widest">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lisp code decoration - Simplified */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block opacity-20 select-none pointer-events-none">
        <pre className="text-xs font-mono text-violet-400/60 leading-tight border-l border-white/10 pl-4">
{`(defun enlighten (dev)
  (unless (has-model-p dev)
    (set-mindset dev 'architect))
  dev)`}
        </pre>
      </div>
    </div>
  );
}

