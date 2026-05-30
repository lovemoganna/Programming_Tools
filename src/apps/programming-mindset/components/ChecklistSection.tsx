import { useState } from "react";

const checks = [
  "我拿到需求时，是否会先想输入输出？",
  "我会不会主动拆步骤？",
  "我是否越来越能看出重复模式？",
  "我调 bug 时，是不是能逐步缩小范围？",
  "我会不会自然想到异常和边界？",
  "我写完后，会不会觉得有些结构值得提炼？",
  "我是不是越来越少依赖「别人的完整答案」？",
];

const top10Signals = [
  "先定义问题，再动手写代码",
  "会把大问题拆成小问题",
  "开始理解抽象和复用",
  "开始重视数据结构选择",
  "调 bug 靠定位，不靠碰运气",
  "会主动考虑边界条件",
  "开始追求代码可读性",
  "不迷信高级写法，优先简单可行",
  "会主动验证结果，不只凭感觉",
  "做完后会复盘，沉淀方法",
];

export default function ChecklistSection() {
  const [checked, setChecked] = useState<boolean[]>(new Array(checks.length).fill(false));

  const toggle = (i: number) => {
    setChecked((prev) => {
      const next = [...prev];
      next[i] = !next[i];
      return next;
    });
  };

  const score = checked.filter(Boolean).length;
  const percentage = Math.round((score / checks.length) * 100);

  const getLabel = () => {
    if (score === 0) return { text: "刚开始探索", color: "text-slate-500", bg: "bg-slate-100" };
    if (score <= 2) return { text: "初见端倪", color: "text-blue-600", bg: "bg-blue-50" };
    if (score <= 4) return { text: "开始开窍", color: "text-violet-600", bg: "bg-violet-50" };
    if (score <= 6) return { text: "明显开窍", color: "text-emerald-600", bg: "bg-emerald-50" };
    return { text: "已经开窍了！", color: "text-amber-600", bg: "bg-amber-50" };
  };

  const label = getLabel();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Self-Check */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h3 className="text-lg font-bold text-slate-800">开窍自测</h3>
            <p className="text-sm text-slate-500 mt-0.5">如果大多数能答「是」，你大概率已经开始开窍了</p>
          </div>
          <div className={`flex flex-col items-center px-4 py-2 rounded-xl ${label.bg}`}>
            <span className={`text-xl font-bold ${label.color}`}>{score}/{checks.length}</span>
            <span className={`text-xs font-medium ${label.color}`}>{label.text}</span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mb-5">
          <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full transition-all duration-500"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </div>

        {/* Checklist */}
        <div className="space-y-4">
          {checks.map((check, i) => (
            <button
              key={i}
              type="button"
              role="checkbox"
              aria-checked={checked[i]}
              onClick={() => toggle(i)}
              className="w-full text-left flex items-start gap-4 cursor-pointer group rounded-xl p-1.5 -m-1.5 outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
            >
              <div
                className={`flex-shrink-0 w-6 h-6 rounded-md border-2 flex items-center justify-center mt-1 transition-all duration-150 ${
                  checked[i]
                    ? "bg-violet-500 border-violet-500"
                    : "border-slate-300 group-hover:border-violet-400"
                }`}
              >
                {checked[i] && (
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <span className={`text-base font-medium leading-relaxed transition-colors ${checked[i] ? "text-slate-400 line-through" : "text-slate-700"}`}>
                {check}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Top 10 Signals */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-slate-800">10 个最典型信号</h3>
          <p className="text-base text-slate-500 mt-1">出现 6 个以上，大概率已经开窍</p>
        </div>

        <div className="space-y-3">
          {top10Signals.map((signal, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors duration-150"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-violet-100 to-indigo-100 flex items-center justify-center">
                <span className="text-sm font-black text-violet-600">{i + 1}</span>
              </div>
              <span className="text-base font-medium text-slate-700">{signal}</span>
            </div>
          ))}
        </div>

        {/* Final Quote */}
        <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-violet-50 to-indigo-50 border border-violet-100">
          <p className="text-lg font-black text-violet-800 text-center leading-relaxed">
            "从「记语法、拼代码」，进化到<br/>
            「理解问题、组织逻辑、控制复杂度」"
          </p>
          <p className="text-sm font-bold text-violet-500 text-center mt-3 uppercase tracking-widest">—— 编程开窍的本质</p>
        </div>
      </div>
    </div>
  );
}
