export default function Footer() {
  return (
    <footer className="bg-slate-900 py-20 px-6 border-t border-white/5">
      <div className="max-w-[85%] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <div className="flex items-center gap-3">
          <span className="text-xl">🔀</span>
          <span>
            <strong className="text-white/80">Git 全流程元提示体系</strong>
            <span className="mx-2">·</span>
            基于 MECE 原则设计
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="text-white/80">Vibe Coding</span>
            <span>×</span>
            <span className="text-white/80">Cursor</span>
            <span>×</span>
            <span className="text-white/80">Git</span>
          </span>
          <span>·</span>
          <span>7 模块 · 28+ 步骤 · 50+ 命令</span>
        </div>
      </div>
    </footer>
  );
}
