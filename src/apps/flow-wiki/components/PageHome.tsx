import React from 'react';
import { CodeBlock } from '../../../theme';

interface PageProps {
  onNavigate: (id: string) => void;
}

const PageHome: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <article className="page active fade-in" id="page-home">
      <div className="breadcrumb mb-4 text-xs font-black uppercase tracking-widest text-slate-400">心流触发 Wiki › <span className="text-slate-900">首页</span></div>
      
      <section className="space-y-8">
        <h1 className="wiki-title">🌊 心流触发 Wiki</h1>
        <p className="wiki-subtitle">Flow Trigger via Wishful Thinking × Ontology — 从原子到系统的完整学习路径</p>

        <div className="callout callout-info">
          <div className="callout-title">📖 这是什么？</div>
          <div className="text-lg font-medium opacity-90 leading-relaxed">
            本 Wiki 是一个<strong>渐进式学习教程</strong>。它遵循"本体设计 + MECE 原则"，将"心流触发"方法论从最小原子组件开始，逐步组合为完整系统。<br />
            每个页面只聚焦<strong>一个概念或案例</strong>，保证"快速反馈 → 吸收 → 迭代"的学习闭环。
          </div>
        </div>
      </section>

      <section>
        <h2 className="section-heading">📐 学习路径总览</h2>
        <div className="space-y-6">
          <div className="step-card">
            <div className="step-num">1</div>
            <div className="step-body">
              <h4>理解全局 — 看地图再出发</h4>
              <p>先读「全局概览」和「MECE 结构图」，建立整体认知骨架，避免碎片化学习。<br />
              推荐时间：<code className="inline bg-slate-100 px-2 py-0.5 rounded text-sm font-mono">10 分钟</code></p>
            </div>
          </div>

          <div className="step-card">
            <div className="step-num">2</div>
            <div className="step-body">
              <h4>原子组件 A1–A5 — 逐一击破</h4>
              <p>依次学习五个原子概念。每个页面有：定义、底层原理、最小可执行案例、自查清单。<br />
              推荐时间：<code className="inline bg-slate-100 px-2 py-0.5 rounded text-sm font-mono">每个 10–15 分钟</code></p>
            </div>
          </div>

          <div className="step-card">
            <div className="step-num">3</div>
            <div className="step-body">
              <h4>组合模式 L2 → L5 — 指数复杂度</h4>
              <p>将原子组件两两、三三、最终五合一组合，理解"涌现效应"如何产生心流。<br />
              推荐时间：<code className="inline bg-slate-100 px-2 py-0.5 rounded text-sm font-mono">每层 15 分钟</code></p>
            </div>
          </div>

          <div className="step-card">
            <div className="step-num">4</div>
            <div className="step-body">
              <h4>场景实战 — 真实情境验证</h4>
              <p>选择与自己最相关的场景（写作 / 编程 / 决策），在真实任务中执行一次完整 SOP。</p>
            </div>
          </div>

          <div className="step-card step-card-secondary">
            <div className="step-num step-num-secondary">5</div>
            <div className="step-body">
              <h4>第二卷 · 深层原子 B1–B5 — 精化执行工具</h4>
              <p>完成态设计、中断队列、时间围栏、上下文锚点、最小可行动作——让心流从"偶发体验"变为"可重复系统"。<br />
              推荐时间：<code className="inline bg-slate-100 px-2 py-0.5 rounded text-sm font-mono">每个 10–15 分钟</code></p>
            </div>
          </div>

          <div className="step-card step-card-accent">
            <div className="step-num step-num-accent">6</div>
            <div className="step-body">
              <h4>双卷融合系统 + 元认知层 — 系统自维持</h4>
              <p>A+B 跨卷组合、能量管理、系统校准——让执行飞轮持续转动，而不只是一次性的心流冲刺。<br />
              推荐时间：<code className="inline bg-slate-100 px-2 py-0.5 rounded text-sm font-mono">30 分钟</code></p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="section-heading">🎯 核心口诀（预读）</h2>
        <CodeBlock label="心法">
          <div className="space-y-2">
            <div>先定义 → 再假设 → 立即做 → 卡点解 → 小步走</div>
            <div className="pt-4 opacity-50"># Ontology    → 确保方向正确</div>
            <div className="opacity-50"># Wishful     → 解除行动阻力</div>
            <div className="opacity-50"># Lazy Eval   → 降低认知负担</div>
            <div className="opacity-50"># Execution   → 生成真实路径</div>
            <div className="opacity-50"># Feedback    → 形成增强飞轮</div>
          </div>
        </CodeBlock>
      </section>

      <section>
        <h2 className="section-heading">⚡ 快速自测</h2>
        <p className="body-text">在开始学习之前，选择你当前最大的困难：</p>

        <div className="overflow-hidden border border-slate-200 rounded-3xl shadow-sm bg-white">
          <table className="wiki-table w-full m-0 border-none shadow-none">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="p-5 text-left text-xs font-black uppercase tracking-widest text-slate-400">你的困难</th>
                <th className="p-5 text-left text-xs font-black uppercase tracking-widest text-slate-400">推荐先读</th>
                <th className="p-5 text-left text-xs font-black uppercase tracking-widest text-slate-400">核心原子</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-6 text-sm font-bold text-slate-700">🌀 不知道从哪里开始</td>
                <td className="p-6 text-sm font-bold"><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('atom-ontology'); }} className="text-blue-600 hover:underline">A1 · Ontology</a></td>
                <td className="p-6"><span className="tag tag-onto">结构</span></td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-6 text-sm font-bold text-slate-700">😰 想太多，无法行动</td>
                <td className="p-6 text-sm font-bold"><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('atom-wishful'); }} className="text-blue-600 hover:underline">A2 · Wishful Thinking</a></td>
                <td className="p-6"><span className="tag tag-wish">假设</span></td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-6 text-sm font-bold text-slate-700">🔀 边做边规划，注意力散</td>
                <td className="p-6 text-sm font-bold"><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('atom-singlethread'); }} className="text-blue-600 hover:underline">A5 · Single Thread</a></td>
                <td className="p-6"><span className="tag tag-exec">执行</span></td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-6 text-sm font-bold text-slate-700">🧱 遇到阻塞就卡住了</td>
                <td className="p-6 text-sm font-bold"><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('atom-lazy'); }} className="text-blue-600 hover:underline">A3 · Lazy Evaluation</a></td>
                <td className="p-6"><span className="tag tag-lazy">延迟</span></td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-6 text-sm font-bold text-slate-700">😶 做了很多但没有成就感</td>
                <td className="p-6 text-sm font-bold"><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('atom-feedback'); }} className="text-blue-600 hover:underline">A4 · Feedback Loop</a></td>
                <td className="p-6"><span className="tag tag-flow">心流</span></td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-6 text-sm font-bold text-slate-700">🎯 不知道"完成"是什么感觉</td>
                <td className="p-6 text-sm font-bold"><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('b1-completion-state'); }} className="text-blue-600 hover:underline">B1 · 完成态设计</a></td>
                <td className="p-6"><span className="tag tag-new">精确</span></td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-6 text-sm font-bold text-slate-700">💭 脑中想法太多，执行中乱</td>
                <td className="p-6 text-sm font-bold"><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('b2-interrupt-queue'); }} className="text-blue-600 hover:underline">B2 · 中断队列</a></td>
                <td className="p-6"><span className="tag tag-new">保护</span></td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-6 text-sm font-bold text-slate-700">😤 高阻力任务，就是不想开始</td>
                <td className="p-6 text-sm font-bold"><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('b5-minimum-viable-action'); }} className="text-blue-600 hover:underline">B5 · 最小可行动作</a></td>
                <td className="p-6"><span className="tag tag-new">启动</span></td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-6 text-sm font-bold text-slate-700">📅 任务跨天，每次重新启动很慢</td>
                <td className="p-6 text-sm font-bold"><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('b4-context-anchor'); }} className="text-blue-600 hover:underline">B4 · 上下文锚点</a></td>
                <td className="p-6"><span className="tag tag-new">连续</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </article>
  );
};

export default PageHome;
