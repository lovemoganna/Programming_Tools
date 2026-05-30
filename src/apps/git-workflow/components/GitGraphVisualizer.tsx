import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from "@/utils/cn";
import { DesignTokens } from "@/theme/design-tokens";

type Scenario = 'revert' | 'rebase' | 'merge' | 'custom';

interface CommitNode {
  id: string;
  label: string;
  branch: string;
  parent: string | null;
  x: number;
  y: number;
}

const DEFAULT_COMMITS: CommitNode[] = [
  { id: 'c1', label: 'C1', branch: 'main', parent: null, x: 80, y: 80 },
  { id: 'c2', label: 'C2', branch: 'main', parent: 'c1', x: 170, y: 80 },
];

const getBranchY = (branchName: string) => {
  if (branchName === 'main') return 80;
  if (branchName === 'dev') return 140;
  if (branchName === 'feature' || branchName.startsWith('feat')) return 195;
  return 230;
};

const getBranchColor = (branchName: string) => {
  if (branchName === 'main') return '#10b981'; // emerald
  if (branchName === 'dev') return '#3b82f6'; // blue
  if (branchName === 'feature' || branchName.startsWith('feat')) return '#a78bfa'; // violet
  return '#f59e0b'; // amber
};

export const GitGraphVisualizer: React.FC = () => {
  const [scenario, setScenario] = useState<Scenario>('revert');
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // Custom scenario state
  const [customInput, setCustomInput] = useState('');
  const [customOutput, setCustomOutput] = useState<string[]>([
    'Git Sandbox v2.0 ready.\n输入命令自定义拓扑 (如: commit, branch dev, checkout dev)\n──────────────────────────────'
  ]);
  const [commits, setCommits] = useState<CommitNode[]>(DEFAULT_COMMITS);
  const [branches, setBranches] = useState<Record<string, string>>({ main: 'c2' });
  const [activeBranch, setActiveBranch] = useState<string>('main');

  const colors = DesignTokens.colors;

  const getGitLogLines = () => {
    if (scenario === 'revert') {
      if (!isPlaying) {
        return [
          "* [3a5e1d3] (HEAD -> main) C3: Other feat",
          "* [e92c04b] C2: Buggy Commit",
          "* [7b1a9f0] C1: Init"
        ];
      } else {
        return [
          "* [f1c9e8d] (HEAD -> main) C2': Revert C2",
          "* [3a5e1d3] C3: Other feat",
          "* [e92c04b] C2: Buggy Commit",
          "* [7b1a9f0] C1: Init"
        ];
      }
    }
    if (scenario === 'rebase') {
      if (!isPlaying) {
        return [
          "* [8d9e2a4] (HEAD -> feature) F2: Add search",
          "* [5c7b3f2] F1: Add filter",
          "| * [3a5e1d3] (main) C2: Fix layout",
          "|/",
          "* [7b1a9f0] C1: Init"
        ];
      } else {
        return [
          "* [f6d7e8b] (HEAD -> feature) F2': Add search",
          "* [a2b3c4d] F1': Add filter",
          "* [3a5e1d3] (main) C2: Fix layout",
          "* [7b1a9f0] C1: Init"
        ];
      }
    }
    if (scenario === 'merge') {
      if (!isPlaying) {
        return [
          "* [3a5e1d3] (HEAD -> main) C3: Update docs",
          "| * [8d9e2a4] (feature) F2: Add search",
          "* | C2: Fix layout",
          "| * [5c7b3f2] F1: Add filter",
          "|/",
          "* [7b1a9f0] C1: Init"
        ];
      } else {
        return [
          "*   [e9c8d7f] (HEAD -> main) M: Merge branch 'feature'",
          "|\\",
          "| * [8d9e2a4] (feature) F2: Add search",
          "* | [3a5e1d3] C3: Update docs",
          "| * [5c7b3f2] F1: Add filter",
          "* | C2: Fix layout",
          "|/",
          "* [7b1a9f0] C1: Init"
        ];
      }
    }
    if (scenario === 'custom') {
      const reversed = [...commits].reverse();
      const lines: string[] = [];
      reversed.forEach((node) => {
        let pointer = '';
        const branchNames = Object.entries(branches)
          .filter(([_, commitId]) => commitId === node.id)
          .map(([name]) => name === activeBranch ? `HEAD -> ${name}` : name);
        if (branchNames.length > 0) {
          pointer = ` (${branchNames.join(', ')})`;
        }
        lines.push(`* [${node.id}]${pointer} ${node.label}: ${node.branch} branch commit`);
      });
      return lines;
    }
    return [];
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleReset = () => {
    setIsPlaying(false);
  };

  const selectScenario = (s: Scenario) => {
    setScenario(s);
    setIsPlaying(false);
  };

  const handleCustomCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;
    setCustomInput('');

    let cleanCmd = trimmed.toLowerCase();
    if (cleanCmd.startsWith('git ')) {
      cleanCmd = cleanCmd.replace('git ', '');
    }

    const parts = cleanCmd.split(' ');
    const action = parts[0];
    const args = parts.slice(1).join(' ');

    if (action === 'clear' || action === 'reset') {
      setCommits(DEFAULT_COMMITS);
      setBranches({ main: 'c2' });
      setActiveBranch('main');
      setCustomOutput([
        'Git Sandbox v2.0 ready.\n输入命令自定义拓扑 (如: commit, branch dev, checkout dev)\n──────────────────────────────'
      ]);
      return;
    }

    if (action === 'commit') {
      if (commits.length >= 6) {
        setCustomOutput(prev => [
          ...prev,
          `› git commit\n⚠️ 沙盒已满: 最多绘制 6 个提交以保持布局整洁。输入 'clear' 重置。`
        ]);
        return;
      }

      const parentId = branches[activeBranch];
      if (!parentId) {
        setCustomOutput(prev => [...prev, `› git commit\n❌ 错误: 找不到当前 HEAD 提交。`]);
        return;
      }

      const nextNum = commits.length + 1;
      const nextId = `c${nextNum}`;
      const nextLabel = `C${nextNum}`;
      const nextX = 80 + 90 * commits.length;
      const nextY = getBranchY(activeBranch);

      const newCommit: CommitNode = {
        id: nextId,
        label: nextLabel,
        branch: activeBranch,
        parent: parentId,
        x: nextX,
        y: nextY
      };

      setCommits(prev => [...prev, newCommit]);
      setBranches(prev => ({ ...prev, [activeBranch]: nextId }));
      setCustomOutput(prev => [
        ...prev,
        `› git commit\n[${activeBranch} ${nextId}] Created commit: ${nextLabel}`
      ]);
      return;
    }

    if (action === 'branch') {
      if (!args) {
        setCustomOutput(prev => [...prev, `› git branch\n❌ 错误: 请指定分支名称！`]);
        return;
      }

      if (branches[args]) {
        setCustomOutput(prev => [...prev, `› git branch ${args}\n❌ 错误: 分支 '${args}' 已存在。`]);
        return;
      }

      const headCommit = branches[activeBranch];
      setBranches(prev => ({ ...prev, [args]: headCommit }));
      setCustomOutput(prev => [
        ...prev,
        `› git branch ${args}\n已在当前 HEAD (${headCommit}) 处创建分支 '${args}'`
      ]);
      return;
    }

    if (action === 'checkout') {
      if (!args) {
        setCustomOutput(prev => [...prev, `› git checkout\n❌ 错误: 请指定分支名称！`]);
        return;
      }

      if (!branches[args]) {
        setCustomOutput(prev => [...prev, `› git checkout ${args}\n❌ 错误: 分支 '${args}' 不存在。`]);
        return;
      }

      setActiveBranch(args);
      setCustomOutput(prev => [...prev, `› git checkout ${args}\n已切换到分支 '${args}'`]);
      return;
    }

    setCustomOutput(prev => [
      ...prev,
      `› git ${cleanCmd}\n❌ 未知指令。可用指令：\n  commit\n  branch <name>\n  checkout <name>\n  clear`
    ]);
  };

  return (
    <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-xl overflow-hidden mt-12 flex flex-col">
      <div className="p-10 lg:p-12 space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 border border-violet-100 text-xs font-bold text-violet-700 uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
              Branch Topology Sandbox
            </div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-2">分支演化可视化沙盒</h2>
            <p className="text-slate-500 font-bold tracking-tight text-lg">交互式模拟 Revert, Rebase, Merge 等 Git 高级操作后的提交树变迁</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2">
          {(['revert', 'rebase', 'merge', 'custom'] as Scenario[]).map((s) => (
            <button
              key={s}
              onClick={() => selectScenario(s)}
              className={cn(
                "px-5 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 border",
                scenario === s
                  ? "bg-slate-900 text-white shadow-xl shadow-slate-900/10 border-violet-500/30 scale-[1.02]"
                  : "text-slate-500 border-slate-100 bg-slate-50 hover:bg-white hover:shadow-md hover:text-slate-800"
              )}
            >
              {s === 'revert' && '⏪ Git Revert (回滚)'}
              {s === 'rebase' && '🌿 Git Rebase (衍合变基)'}
              {s === 'merge' && '🔀 Git Merge (合并)'}
              {s === 'custom' && '⚙️ 自定义拓扑 (Custom Sandbox)'}
            </button>
          ))}
        </div>

        {/* SVG Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Controls & Descriptions (Left 4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">场景说明 Scenario Context</h4>
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-4">
              {scenario === 'revert' && (
                <>
                  <h3 className="text-base font-black text-slate-800">Git Revert</h3>
                  <p className="text-xs leading-relaxed text-slate-500 font-medium">
                    安全撤销某个历史提交（如 C2）的内容。Revert 不会修改原历史记录（保留 C2 存在），而是<strong>追加一个新的反向提交（C2'）</strong>来抵消 C2 的所有修改。适合已推送（Push）到公共分支后的回滚。
                  </p>
                  <ul className="text-xs space-y-1 text-slate-600 list-disc pl-4 font-semibold">
                    <li>不改写 Commit 历史哈希</li>
                    <li>多人协同公共分支推荐</li>
                    <li>回滚痕迹公开透明</li>
                  </ul>
                  <div className="flex gap-3 pt-2">
                    {!isPlaying ? (
                      <button
                        onClick={handlePlay}
                        className="flex-1 bg-violet-600 hover:bg-violet-700 text-white font-black text-xs uppercase tracking-widest py-3 rounded-xl transition-all shadow-md shadow-violet-900/10 active:scale-95"
                      >
                        播放演变 Play
                      </button>
                    ) : (
                      <button
                        onClick={handleReset}
                        className="flex-1 bg-slate-900 hover:bg-slate-800 text-white font-black text-xs uppercase tracking-widest py-3 rounded-xl transition-all active:scale-95"
                      >
                        重置视图 Reset
                      </button>
                    )}
                  </div>
                </>
              )}
              {scenario === 'rebase' && (
                <>
                  <h3 className="text-base font-black text-slate-800">Git Rebase</h3>
                  <p className="text-xs leading-relaxed text-slate-500 font-medium">
                    改变分支的基底。将开发分支（F1, F2）的起始点，<strong>重新对齐到主干的最先端（C2）</strong>。通过复制并重写提交哈希，使得分支提交链完美排布在主干顶端，呈现完全线性的整洁历史。
                  </p>
                  <ul className="text-xs space-y-1 text-slate-600 list-disc pl-4 font-semibold">
                    <li>合并后历史保持单一直线</li>
                    <li>完全擦除中间杂乱的 merge 记录</li>
                    <li>⚠️ 禁止在公共分支上 Rebase（会改写哈希导致冲突）</li>
                  </ul>
                  <div className="flex gap-3 pt-2">
                    {!isPlaying ? (
                      <button
                        onClick={handlePlay}
                        className="flex-1 bg-violet-600 hover:bg-violet-700 text-white font-black text-xs uppercase tracking-widest py-3 rounded-xl transition-all shadow-md shadow-violet-900/10 active:scale-95"
                      >
                        播放演变 Play
                      </button>
                    ) : (
                      <button
                        onClick={handleReset}
                        className="flex-1 bg-slate-900 hover:bg-slate-800 text-white font-black text-xs uppercase tracking-widest py-3 rounded-xl transition-all active:scale-95"
                      >
                        重置视图 Reset
                      </button>
                    )}
                  </div>
                </>
              )}
              {scenario === 'merge' && (
                <>
                  <h3 className="text-base font-black text-slate-800">Git Merge</h3>
                  <p className="text-xs leading-relaxed text-slate-500 font-medium">
                    合并两股历史分支。创建并生成一个<strong>拥有两个父提交节点的合并提交（Merge Commit）</strong>，将主干最新修改与开发分支汇聚一处。即使有冲突，也在该合并提交中统一处理。
                  </p>
                  <ul className="text-xs space-y-1 text-slate-600 list-disc pl-4 font-semibold">
                    <li>完整保留所有开发分支细节与分支轨迹</li>
                    <li>生成专门的 Merge 节点，追溯合并时刻</li>
                    <li>多人协作开发最常用的标准合并方案</li>
                  </ul>
                  <div className="flex gap-3 pt-2">
                    {!isPlaying ? (
                      <button
                        onClick={handlePlay}
                        className="flex-1 bg-violet-600 hover:bg-violet-700 text-white font-black text-xs uppercase tracking-widest py-3 rounded-xl transition-all shadow-md shadow-violet-900/10 active:scale-95"
                      >
                        播放演变 Play
                      </button>
                    ) : (
                      <button
                        onClick={handleReset}
                        className="flex-1 bg-slate-900 hover:bg-slate-800 text-white font-black text-xs uppercase tracking-widest py-3 rounded-xl transition-all active:scale-95"
                      >
                        重置视图 Reset
                      </button>
                    )}
                  </div>
                </>
              )}
              {scenario === 'custom' && (
                <>
                  <h3 className="text-base font-black text-slate-800">自定义分支拓扑</h3>
                  <p className="text-xs leading-relaxed text-slate-500 font-medium">
                    在右侧交互式终端中输入 Git 指令，可以直接追加提交、开辟新分支，实时查看可视化分支提交图树的衍变：
                  </p>
                  <div className="text-xs font-mono bg-slate-950 text-slate-400 p-4 rounded-xl border border-slate-800 space-y-2">
                    <div className="text-white/60 font-bold uppercase tracking-wider">指令手册 Manual:</div>
                    <div>• <code>commit</code> - 追加提交</div>
                    <div>• <code>branch [name]</code> - 创建分支</div>
                    <div>• <code>checkout [name]</code> - 切换分支</div>
                    <div>• <code>clear</code> - 重置沙盒</div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* SVG Viewport (Right 8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            <div className="flex justify-between items-center">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">SVG 拓扑提交图 Viewport</h4>
              <span className="text-xs font-black text-slate-400 uppercase tracking-wider">Dynamic Topology</span>
            </div>

            <div className="bg-slate-900 border border-white/5 rounded-2xl overflow-hidden shadow-2xl flex flex-col min-h-[340px]">
              <div className="p-8 flex-1 relative flex items-center justify-center">
                <div className="absolute top-4 left-6 flex items-center gap-3 z-10">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-rose-500 shadow-[0_0_6px_rgba(244,63,94,0.4)]"></div>
                    <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.4)]"></div>
                  </div>
                  <span className="text-xs font-black text-white/20 uppercase tracking-[0.3em]">Git Graph engine v2.0</span>
                </div>

                <svg width="100%" height="240" viewBox="0 0 600 240" className="w-full h-auto overflow-visible select-none">
                  {/* Defs for arrowheads */}
                  <defs>
                    <marker id="arrow" viewBox="0 0 10 10" refX="15" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 0 L 10 5 L 0 10 z" fill="#475569" />
                    </marker>
                    <marker id="arrow-active" viewBox="0 0 10 10" refX="15" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 0 L 10 5 L 0 10 z" fill="#a78bfa" />
                    </marker>
                  </defs>

                  {/* Scenario 1: Revert SVG */}
                  {scenario === 'revert' && (
                    <>
                      {/* Linear main branch path */}
                      <line x1="80" y1="120" x2="380" y2="120" stroke="#334155" strokeWidth="3" markerEnd="url(#arrow)" />
                      {isPlaying && (
                        <motion.line
                          initial={{ x2: 380 }}
                          animate={{ x2: 480 }}
                          transition={{ duration: 0.8 }}
                          x1="380" y1="120" y2="120" stroke="#a78bfa" strokeWidth="3" markerEnd="url(#arrow-active)"
                        />
                      )}

                      {/* Commit C1 */}
                      <circle cx="80" cy="120" r="10" fill={colors.primary[500]} />
                      <text x="80" y="95" fill="#fff" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">C1</text>
                      <text x="80" y="145" fill="#64748b" fontSize="8" fontWeight="bold" textAnchor="middle">Init</text>

                      {/* Commit C2 */}
                      <circle cx="180" cy="120" r="10" fill={colors.danger[500]} stroke="#fecaca" strokeWidth="2" />
                      <text x="180" y="95" fill="#fff" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">C2</text>
                      <text x="180" y="145" fill="#ef4444" fontSize="8" fontWeight="bold" textAnchor="middle">Buggy Commit</text>

                      {/* Commit C3 */}
                      <circle cx="280" cy="120" r="10" fill={colors.primary[500]} />
                      <text x="280" y="95" fill="#fff" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">C3</text>
                      <text x="280" y="145" fill="#64748b" fontSize="8" fontWeight="bold" textAnchor="middle">Other feat</text>

                      {/* Revert link showing it undoes C2 */}
                      {isPlaying && (
                        <motion.path
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 1 }}
                          transition={{ delay: 1, duration: 1.2 }}
                          d="M 480 100 C 480 30, 180 30, 180 100"
                          fill="none"
                          stroke="#f43f5e"
                          strokeWidth="2"
                          strokeDasharray="4 4"
                          markerEnd="url(#arrow-active)"
                        />
                      )}

                      {/* New Revert Commit C2' */}
                      {isPlaying && (
                        <motion.g
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.6, duration: 0.4 }}
                        >
                          <circle cx="480" cy="120" r="10" fill="#a78bfa" stroke="#c4b5fd" strokeWidth="2" />
                          <text x="480" y="95" fill="#a78bfa" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">C2'</text>
                          <text x="480" y="145" fill="#a78bfa" fontSize="8" fontWeight="bold" textAnchor="middle">Revert C2</text>
                        </motion.g>
                      )}
                    </>
                  )}

                  {/* Scenario 2: Rebase SVG */}
                  {scenario === 'rebase' && (
                    <>
                      {/* Main branch line */}
                      <line x1="80" y1="80" x2="320" y2="80" stroke="#334155" strokeWidth="3" markerEnd="url(#arrow)" />

                      {/* Feature branch line */}
                      {!isPlaying ? (
                        <path d="M 80 80 L 180 160 L 320 160" fill="none" stroke="#64748b" strokeWidth="3" markerEnd="url(#arrow)" />
                      ) : (
                        <motion.path
                          initial={{ d: "M 80 80 L 180 160 L 320 160" }}
                          animate={{ d: "M 200 80 L 300 160 L 440 160" }}
                          transition={{ duration: 1.2, ease: "easeInOut" }}
                          fill="none"
                          stroke="#a78bfa"
                          strokeWidth="3"
                          markerEnd="url(#arrow-active)"
                        />
                      )}

                      {/* Main nodes */}
                      <circle cx="80" cy="80" r="10" fill={colors.primary[500]} />
                      <text x="80" y="55" fill="#fff" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">C1</text>

                      <circle cx="200" cy="80" r="10" fill={colors.primary[500]} />
                      <text x="200" y="55" fill="#fff" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">C2</text>
                      <text x="200" y="105" fill="#64748b" fontSize="8" fontWeight="bold" textAnchor="middle">Main Header</text>

                      {/* Feature nodes before rebase */}
                      {!isPlaying ? (
                        <>
                          <circle cx="180" cy="160" r="10" fill={colors.accent[500]} />
                          <text x="180" y="190" fill="#f59e0b" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">F1</text>

                          <circle cx="280" cy="160" r="10" fill={colors.accent[500]} />
                          <text x="280" y="190" fill="#f59e0b" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">F2</text>
                          <text x="280" y="135" fill="#64748b" fontSize="8" fontWeight="bold" textAnchor="middle">Feature branch</text>
                        </>
                      ) : (
                        <>
                          <motion.circle
                            initial={{ cx: 180, cy: 160 }}
                            animate={{ cx: 300, cy: 160 }}
                            transition={{ duration: 1.2, ease: "easeInOut" }}
                            r="10" fill="#a78bfa"
                          />
                          <motion.text
                            initial={{ x: 180, y: 190 }}
                            animate={{ x: 300, y: 190 }}
                            transition={{ duration: 1.2, ease: "easeInOut" }}
                            fill="#a78bfa" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace"
                          >
                            F1'
                          </motion.text>

                          <motion.circle
                            initial={{ cx: 280, cy: 160 }}
                            animate={{ cx: 400, cy: 160 }}
                            transition={{ duration: 1.2, ease: "easeInOut" }}
                            r="10" fill="#a78bfa"
                          />
                          <motion.text
                            initial={{ x: 280, y: 190 }}
                            animate={{ x: 400, y: 190 }}
                            transition={{ duration: 1.2, ease: "easeInOut" }}
                            fill="#a78bfa" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace"
                          >
                            F2'
                          </motion.text>

                          <motion.text
                            initial={{ x: 280, y: 135 }}
                            animate={{ x: 400, y: 135 }}
                            transition={{ duration: 1.2, ease: "easeInOut" }}
                            fill="#a78bfa" fontSize="8" fontWeight="bold" textAnchor="middle"
                          >
                            Rebased Linear
                          </motion.text>
                        </>
                      )}
                    </>
                  )}

                  {/* Scenario 3: Merge SVG */}
                  {scenario === 'merge' && (
                    <>
                      {/* Main branch line */}
                      <line x1="80" y1="80" x2="320" y2="80" stroke="#334155" strokeWidth="3" markerEnd="url(#arrow)" />
                      {isPlaying && (
                        <motion.line
                          initial={{ x2: 320 }}
                          animate={{ x2: 440 }}
                          transition={{ duration: 0.8 }}
                          x1="320" y1="80" y2="80" stroke="#10b981" strokeWidth="3" markerEnd="url(#arrow-active)"
                        />
                      )}

                      {/* Feature branch line */}
                      <path d="M 80 80 L 180 160 L 300 160" fill="none" stroke="#64748b" strokeWidth="3" />
                      
                      {/* Merge lines converging */}
                      {isPlaying && (
                        <motion.line
                          initial={{ x2: 300, y2: 160 }}
                          animate={{ x2: 440, y2: 80 }}
                          transition={{ delay: 0.5, duration: 0.7 }}
                          x1="300" y1="160" stroke="#10b981" strokeWidth="3"
                        />
                      )}

                      {/* Main nodes */}
                      <circle cx="80" cy="80" r="10" fill={colors.primary[500]} />
                      <text x="80" y="55" fill="#fff" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">C1</text>

                      <circle cx="200" cy="80" r="10" fill={colors.primary[500]} />
                      <text x="200" y="55" fill="#fff" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">C2</text>

                      <circle cx="320" cy="80" r="10" fill={colors.primary[500]} />
                      <text x="320" y="55" fill="#fff" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">C3</text>

                      {/* Feature node */}
                      <circle cx="180" cy="160" r="10" fill={colors.accent[500]} />
                      <text x="180" y="190" fill="#f59e0b" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">F1</text>

                      {/* Feature head */}
                      <circle cx="300" cy="160" r="10" fill={colors.accent[500]} />
                      <text x="300" y="190" fill="#f59e0b" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">F2</text>

                      {/* Merge Node */}
                      {isPlaying && (
                        <motion.g
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1, duration: 0.4 }}
                        >
                          <circle cx="440" cy="80" r="10" fill="#10b981" stroke="#a7f3d0" strokeWidth="2" />
                          <text x="440" y="55" fill="#10b981" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">M</text>
                          <text x="440" y="110" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">Merge Commit</text>
                        </motion.g>
                      )}
                    </>
                  )}

                  {/* Scenario 4: Custom Sandbox SVG */}
                  {scenario === 'custom' && (
                    <>
                      {/* Parent-child links */}
                      {commits.map((node) => {
                        if (!node.parent) return null;
                        const parent = commits.find((p) => p.id === node.parent);
                        if (!parent) return null;

                        return (
                          <path
                            key={`link-${node.id}`}
                            d={`M ${parent.x} ${parent.y} C ${parent.x + 45} ${parent.y}, ${node.x - 45} ${node.y}, ${node.x} ${node.y}`}
                            fill="none"
                            stroke="#475569"
                            strokeWidth="2.5"
                            markerEnd="url(#arrow)"
                          />
                        );
                      })}

                      {/* Commit nodes */}
                      {commits.map((node) => {
                        const isHead = branches[activeBranch] === node.id;
                        const color = getBranchColor(node.branch);
                        return (
                          <g key={`node-${node.id}`}>
                            {isHead && (
                              <circle cx={node.x} cy={node.y} r="14" fill="none" stroke="#60a5fa" strokeWidth="2" strokeDasharray="3 3" />
                            )}
                            <circle cx={node.x} cy={node.y} r="8" fill={color} />
                            <text x={node.x} y={node.y - 18} fill="#fff" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                              {node.label}
                            </text>
                          </g>
                        );
                      })}

                      {/* Branch labels */}
                      {Object.entries(branches).map(([name, commitId]) => {
                        const node = commits.find((c) => c.id === commitId);
                        if (!node) return null;
                        const isCurrentHead = name === activeBranch;
                        return (
                          <g key={`tag-${name}`} transform={`translate(${node.x + 15}, ${node.y - 6})`}>
                            <rect width="45" height="15" rx="3" fill={isCurrentHead ? "#3b82f6" : "#334155"} opacity="0.8" />
                            <text x="22.5" y="11" fill="#fff" fontSize="8" fontWeight="bold" textAnchor="middle">
                              {name.substring(0, 7)}
                            </text>
                          </g>
                        );
                      })}
                    </>
                  )}
                </svg>
              </div>

              {/* Terminal Log Panel */}
              <div className="bg-slate-950 border-t border-white/5 p-6 font-mono text-xs text-slate-300 space-y-3">
                <div className="flex justify-between items-center text-slate-500 uppercase tracking-widest text-xs font-bold pb-2 border-b border-white/5">
                  <span>🖥️ Git Log View (--graph --oneline)</span>
                  <span>Simulated Terminal Output</span>
                </div>
                <div className="whitespace-pre overflow-x-auto text-emerald-400 leading-relaxed font-semibold">
                  {getGitLogLines().join('\n')}
                </div>
              </div>

              {scenario === 'custom' && (
                <div className="bg-slate-950/80 border-t border-white/5 p-5 flex flex-col gap-3 font-mono text-xs text-slate-300">
                  <div className="h-20 overflow-y-auto text-slate-400 whitespace-pre-line leading-relaxed selection:bg-violet-500/20">
                    {customOutput.join('\n')}
                  </div>
                  <div className="flex items-center gap-2 border-t border-white/5 pt-3">
                    <span className="text-violet-400 font-bold select-none">git›</span>
                    <input
                      type="text"
                      value={customInput}
                      onChange={(e) => setCustomInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleCustomCommand(customInput)}
                      className="flex-1 bg-transparent border-none outline-none text-white text-xs placeholder:text-white/10"
                      placeholder="输入 git 命令 (如: commit, branch dev, checkout dev, clear)..."
                      aria-label="Git 命令输入"
                      spellCheck={false}
                    />
                    <button
                      onClick={() => handleCustomCommand(customInput)}
                      className="bg-violet-600 hover:bg-violet-700 text-white text-xs font-black uppercase tracking-widest px-4 py-2 rounded-lg transition-all shadow-md active:scale-95"
                    >
                      Execute
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
