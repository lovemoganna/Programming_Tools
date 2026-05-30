import { meceMatrix, qualityPrinciples } from "../data/frameworks";



const iconBgMap: Record<string, string> = {
  blue: "bg-blue-100 text-blue-600",
  rose: "bg-rose-100 text-rose-600",
  emerald: "bg-emerald-100 text-emerald-600",
  violet: "bg-violet-100 text-violet-600",
  amber: "bg-amber-100 text-amber-600",
  teal: "bg-teal-100 text-teal-600",
};

export default function MeceOverview() {
  return (
    <section className="py-16 px-6 bg-slate-50">
      <div className="mx-auto max-w-7xl">
        {/* MECE Matrix */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1 h-4 bg-slate-900 rounded-full" />
            <div className="text-xs font-black uppercase tracking-widest text-slate-400">
              系统架构
            </div>
          </div>
          <h2 className="text-3xl font-black text-slate-900 mb-2">
            MECE 四维分析矩阵
          </h2>
          <p className="text-slate-500 mb-10 max-w-2xl leading-relaxed">
            提示词质量由四个相互独立、完全穷尽的维度共同决定。理解矩阵，选择框架。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {meceMatrix.map((item, i) => (
              <div
                key={item.dimension}
                className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-md transition-shadow group"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 text-white text-sm font-black shadow-lg shadow-slate-900/10 group-hover:scale-110 transition-transform">
                    {i + 1}
                  </div>
                  <h3 className="font-bold text-slate-800">{item.dimension}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.values.map((v) => (
                    <span
                      key={v}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-slate-50 border border-slate-200 px-2.5 py-1 text-xs font-bold text-slate-500 hover:bg-white hover:border-slate-300 transition-colors"
                    >
                      <span className="h-1 w-1 rounded-full bg-slate-400" />
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Principles */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1 h-4 bg-slate-900 rounded-full" />
            <div className="text-xs font-black uppercase tracking-widest text-slate-400">
              品质准则
            </div>
          </div>
          <h2 className="text-3xl font-black text-slate-900 mb-2">
            6 大高质量提示词原则
          </h2>
          <p className="text-slate-500 mb-10 max-w-2xl leading-relaxed">
            无论使用哪种框架，遵循这六条原则都能显著提升输出质量。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {qualityPrinciples.map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-all hover:-translate-y-1 group"
              >
                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl text-2xl shadow-sm ${iconBgMap[p.color]} group-hover:scale-110 transition-transform`}>
                  {p.icon}
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <h3 className="font-black text-slate-800">{p.title}</h3>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter">{p.subtitle}</span>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
