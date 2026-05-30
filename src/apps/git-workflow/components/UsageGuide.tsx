export default function UsageGuide() {
  const steps = [
    {
      step: "01",
      icon: "🎯",
      title: "选择场景",
      desc: "根据当前需求，找到对应的 Git 操作模块（M1~M7）",
    },
    {
      step: "02",
      icon: "📋",
      title: "复制提示体",
      desc: "点击卡片或「复制元提示体」按钮，获取完整提示内容",
    },
    {
      step: "03",
      icon: "⚙️",
      title: "填写变量",
      desc: "将 <REPO_URL>、<REPO_NAME>、<USERNAME> 等占位符替换为实际值",
    },
    {
      step: "04",
      icon: "🤖",
      title: "粘贴到 AI",
      desc: "粘贴到 Cursor / Claude / GPT 等工具，由 AI 自动执行操作",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-14 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold mb-2">如何使用这套元提示体系</h2>
          <p className="text-white/60 text-sm">4 步完成 Git 全流程 AI 辅助操作</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s) => (
            <div
              key={s.step}
              className="relative bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors"
            >
              <div className="text-4xl font-black text-white/10 absolute top-4 right-4 font-mono">
                {s.step}
              </div>
              <div className="text-3xl mb-3">{s.icon}</div>
              <h3 className="text-white font-bold mb-1.5">{s.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Tips */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              icon: "💡",
              title: "组合使用",
              desc: "M2（提交）+ M4（同步）是最常用的日常组合",
              color: "border-yellow-500/30 bg-yellow-500/10",
            },
            {
              icon: "🔒",
              title: "安全操作",
              desc: "M6 回滚时优先用 revert，避免使用 --force 破坏历史",
              color: "border-red-500/30 bg-red-500/10",
            },
            {
              icon: "🔁",
              title: "闭环验证",
              desc: "每个模块末尾都有验证步骤，确保操作结果可审计",
              color: "border-green-500/30 bg-green-500/10",
            },
          ].map((tip) => (
            <div
              key={tip.title}
              className={`rounded-xl border p-4 ${tip.color}`}
            >
              <div className="flex items-start gap-3">
                <span className="text-xl">{tip.icon}</span>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">
                    {tip.title}
                  </h4>
                  <p className="text-white/60 text-xs leading-relaxed">
                    {tip.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
