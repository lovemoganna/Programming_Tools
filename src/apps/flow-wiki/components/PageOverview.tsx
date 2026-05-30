import React from 'react';

interface PageProps {
  onNavigate?: (id: string) => void;
}

const PageOverview: React.FC<PageProps> = () => {
  return (
    <article className="page fade-in" id="page-overview">
      <div className="breadcrumb mb-4 text-xs font-black uppercase tracking-widest text-slate-400">心流触发 Wiki › <span className="text-slate-900">全局概览</span></div>
      
      <section className="space-y-8">
        <h1 className="wiki-title">🗺️ 全局概览</h1>
        <p className="wiki-subtitle">在深入细节之前，先建立整体认知地图</p>

        <div className="callout callout-purple">
          <div className="callout-title">🧭 核心思想</div>
          <div className="text-lg font-medium opacity-90 leading-relaxed">
            用 <strong>Ontology 保证方向正确</strong>，用 <strong>Wishful Thinking 解除行动阻力</strong>，
            用 <strong>Lazy Evaluation 降低认知负担</strong>，用 <strong>Execution 生成真实路径</strong>。<br />
            最终实现：<em>在不确定中持续推进，而不是在确定前停滞。</em>
          </div>
        </div>
      </section>

      <section>
        <h2 className="section-heading">🔁 系统管线（Core Pipeline）</h2>
        <p className="body-text">整个方法论是一条"触发 → 执行 → 反馈"的增强循环：</p>

        <div className="pipeline">
          <div className="pipe-node pipe-node-primary">🧱 Ontology<br /><small className="pipe-subtitle">定义结构</small></div>
          <div className="pipe-arrow">→</div>
          <div className="pipe-node pipe-node-secondary">✨ Wishful<br /><small className="pipe-subtitle">假设接口</small></div>
          <div className="pipe-arrow">→</div>
          <div className="pipe-node pipe-node-info">🧵 Single Thread<br /><small className="pipe-subtitle">单线执行</small></div>
          <div className="pipe-arrow">→</div>
          <div className="pipe-node pipe-node-success">⏳ Lazy Eval<br /><small className="pipe-subtitle">按需决策</small></div>
          <div className="pipe-arrow">→</div>
          <div className="pipe-node pipe-node-accent">🔄 Feedback<br /><small className="pipe-subtitle">即时闭环</small></div>
        </div>
      </section>

      <section>
        <h2 className="section-heading">📦 五个原子组件</h2>

        <div className="overflow-hidden border border-slate-200 rounded-3xl shadow-sm bg-white">
          <table className="wiki-table w-full m-0 border-none shadow-none">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="p-5 text-left text-xs font-black uppercase tracking-widest text-slate-400">#</th>
                <th className="p-5 text-left text-xs font-black uppercase tracking-widest text-slate-400">名称</th>
                <th className="p-5 text-left text-xs font-black uppercase tracking-widest text-slate-400">核心问题</th>
                <th className="p-5 text-left text-xs font-black uppercase tracking-widest text-slate-400">关键动作</th>
                <th className="p-5 text-left text-xs font-black uppercase tracking-widest text-slate-400">复杂度</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-6 text-sm font-black text-slate-400">A1</td>
                <td className="p-6 text-sm font-black text-slate-900">Ontology 本体</td>
                <td className="p-6 text-sm font-bold text-slate-600">世界结构是什么？</td>
                <td className="p-6 text-sm font-bold text-slate-600">定义对象、动作、状态</td>
                <td className="p-6"><span className="text-blue-600 font-mono">●●○○○</span></td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-6 text-sm font-black text-slate-400">A2</td>
                <td className="p-6 text-sm font-black text-slate-900">Wishful Thinking</td>
                <td className="p-6 text-sm font-bold text-slate-600">如果条件都满足，我会怎么做？</td>
                <td className="p-6 text-sm font-bold text-slate-600">写出理想执行路径</td>
                <td className="p-6"><span className="text-blue-600 font-mono">●●○○○</span></td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-6 text-sm font-black text-slate-400">A3</td>
                <td className="p-6 text-sm font-black text-slate-900">Lazy Evaluation</td>
                <td className="p-6 text-sm font-bold text-slate-600">现在必须决定吗？</td>
                <td className="p-6 text-sm font-bold text-slate-600">仅在阻塞时决策</td>
                <td className="p-6"><span className="text-amber-500 font-mono">●●●○○</span></td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-6 text-sm font-black text-slate-400">A4</td>
                <td className="p-6 text-sm font-black text-slate-900">Feedback Loop</td>
                <td className="p-6 text-sm font-bold text-slate-600">我完成了什么？</td>
                <td className="p-6 text-sm font-bold text-slate-600">标记 + 微奖励 + 继续</td>
                <td className="p-6"><span className="text-blue-600 font-mono">●●○○○</span></td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-6 text-sm font-black text-slate-400">A5</td>
                <td className="p-6 text-sm font-black text-slate-900">Single Thread</td>
                <td className="p-6 text-sm font-bold text-slate-600">我现在只做什么？</td>
                <td className="p-6 text-sm font-bold text-slate-600">禁止跳跃 + 禁止并行</td>
                <td className="p-6"><span className="text-amber-500 font-mono">●●●○○</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="section-heading">🏗️ 组合层级 (Complexity Ladder)</h2>
        <p className="body-text">从单个原子到完整系统，复杂度呈<strong>指数增长</strong>，但掌握路径是线性的：</p>

        <div className="canvas-wrapper">
          <canvas id="complexityCanvas" width="760" height="230" className="canvas-full"></canvas>
        </div>

        <div className="space-y-4 bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-inner">
          <div className="ladder-row">
            <div className="ladder-label">L1 原子</div>
            <div className="ladder-bar ladder-l1">5 个独立组件 · C(5,1) = 5 种情况</div>
          </div>
          <div className="ladder-row">
            <div className="ladder-label">L2 双元</div>
            <div className="ladder-bar ladder-l2">两两组合 · C(5,2) = 10 种情况</div>
          </div>
          <div className="ladder-row">
            <div className="ladder-label">L3 三元</div>
            <div className="ladder-bar ladder-l3">三元组合 · C(5,3) = 10 种情况</div>
          </div>
          <div className="ladder-row">
            <div className="ladder-label">L4 四元</div>
            <div className="ladder-bar ladder-l4">四元组合 · C(5,4) = 5 种情况</div>
          </div>
          <div className="ladder-row">
            <div className="ladder-label">L5 完整</div>
            <div className="ladder-bar ladder-l5">全系统 · 1 种情况 · 心流状态涌现</div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="section-heading">🎯 适用场景</h2>
        <div className="flex flex-wrap gap-2">
          <div className="scenario-badge sb-high">✅ 高适用：写作 / 编码 / 设计 / 分析</div>
          <div className="scenario-badge sb-high">✅ 高适用：模糊起点 · 需要快速进入专注</div>
          <div className="scenario-badge sb-mid">⚠️ 中适用：日常执行 · 模糊目标探索</div>
          <div className="scenario-badge sb-low">❌ 不适用：高风险决策 · 合规强制流程</div>
        </div>
      </section>
    </article>
  );
};

export default PageOverview;
