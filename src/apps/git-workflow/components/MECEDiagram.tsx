const modules = [
  {
    id: "M1",
    title: "仓库初始化",
    icon: "🏗️",
    color: "from-violet-500 to-purple-600",
    border: "border-violet-200",
    bg: "bg-violet-50",
    desc: "git init · .gitignore · 首次推送",
  },
  {
    id: "M2",
    title: "日常变更提交",
    icon: "📝",
    color: "from-blue-500 to-cyan-600",
    border: "border-blue-200",
    bg: "bg-blue-50",
    desc: "git add · commit · push",
  },
  {
    id: "M3",
    title: "分支管理",
    icon: "🌿",
    color: "from-green-500 to-emerald-600",
    border: "border-green-200",
    bg: "bg-green-50",
    desc: "branch · merge · rebase",
  },
  {
    id: "M4",
    title: "远程同步",
    icon: "🔄",
    color: "from-orange-500 to-amber-600",
    border: "border-orange-200",
    bg: "bg-orange-50",
    desc: "fetch · pull · 冲突解决",
  },
  {
    id: "M5",
    title: "CI/CD 部署",
    icon: "🚀",
    color: "from-pink-500 to-rose-600",
    border: "border-pink-200",
    bg: "bg-pink-50",
    desc: "GitHub Actions · Pages",
  },
  {
    id: "M6",
    title: "版本回滚",
    icon: "⏪",
    color: "from-red-500 to-orange-600",
    border: "border-red-200",
    bg: "bg-red-50",
    desc: "revert · reset · reflog",
  },
  {
    id: "M7",
    title: "仓库审计",
    icon: "🔍",
    color: "from-teal-500 to-cyan-600",
    border: "border-teal-200",
    bg: "bg-teal-50",
    desc: "tag · release · 健康检查",
  },
];

export default function MECEDiagram() {
  return (
    <div className="bg-slate-50 border-b border-slate-200 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-lg font-bold text-slate-800 mb-1">
            MECE 模块全览
          </h2>
          <p className="text-sm text-slate-500">
            相互独立（Mutually Exclusive）· 完全穷尽（Collectively Exhaustive）
          </p>
        </div>

        {/* Flow diagram */}
        <div className="flex items-center justify-center gap-3 md:gap-0 flex-wrap">
          {modules.map((m, i) => (
            <div key={m.id} className="flex items-center group">
              <div
                className={`flex flex-col items-center gap-2 px-4 py-3 rounded-2xl border ${m.border} bg-white hover:bg-slate-50 transition-colors shadow-sm w-32 md:w-36`}
              >
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${m.color} flex items-center justify-center text-xl text-white shadow-sm group-hover:scale-110 transition-transform`}
                >
                  {m.icon}
                </div>
                <div className="text-center">
                  <div className="text-xs font-bold text-slate-400 font-mono mb-0.5">
                    {m.id}
                  </div>
                  <div className="text-xs font-bold text-slate-700 leading-tight h-8 flex items-center justify-center">
                    {m.title}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5 leading-tight opacity-0 group-hover:opacity-100 transition-opacity h-3">
                    {m.desc.split(' · ')[0]}
                  </div>
                </div>
              </div>
              {i < modules.length - 1 && (
                <div className="hidden md:flex items-center px-1">
                  <div className="w-6 h-px bg-slate-200" />
                  <svg
                    className="w-3 h-3 text-slate-300 -ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5l8 7-8 7V5z" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-6 flex items-center justify-center gap-6 text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-green-400" />
            <span>独立模块，可单独使用</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-blue-400" />
            <span>可自由组合搭配</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-violet-400" />
            <span>点击卡片复制提示体</span>
          </div>
        </div>
      </div>
    </div>
  );
}
