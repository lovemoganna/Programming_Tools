import React from 'react';

interface PageProps {
  onNavigate?: (id: string) => void;
}

const PageMece: React.FC<PageProps> = () => {
  return (
    <article className="page fade-in" id="page-mece">
      <div className="breadcrumb mb-4 text-xs font-black uppercase tracking-widest text-slate-400">心流触发 Wiki › <span className="text-slate-900">MECE 结构图</span></div>
      
      <section className="space-y-8">
        <h1 className="wiki-title">🔲 MECE 结构分析</h1>
        <p className="wiki-subtitle">相互独立、完全穷尽 — 拆解方法论的完整维度</p>

        <div className="callout callout-info">
          <div className="callout-title">📌 什么是 MECE？</div>
          <div className="text-lg font-medium opacity-90 leading-relaxed">
            <strong>Mutually Exclusive, Collectively Exhaustive</strong>（相互独立，完全穷尽）<br />
            确保拆解的各个维度<strong>不重叠、不遗漏</strong>。这是本体设计（Ontology）的核心工具。
          </div>
        </div>
      </section>

      <section>
        <h2 className="section-heading">🗂️ 维度一：组件分类（按功能）</h2>
        <div className="mece-grid bg-slate-100 border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
          <div className="grid grid-cols-2">
            <div className="mece-cell mece-header bg-slate-50 p-4 text-center border-b border-r border-slate-200 text-xs font-black uppercase tracking-widest text-slate-400">认知层（理解）</div>
            <div className="mece-cell mece-header bg-slate-50 p-4 text-center border-b border-slate-200 text-xs font-black uppercase tracking-widest text-slate-400">执行层（行动）</div>
            <div className="mece-cell bg-white p-8 border-r border-slate-200 space-y-6">
              <div>
                <strong className="text-blue-600 block mb-1">A1 · Ontology</strong>
                <p className="text-sm font-medium text-slate-500 leading-relaxed">定义世界结构，建立认知骨架</p>
              </div>
              <div>
                <strong className="text-blue-600 block mb-1">A2 · Wishful Thinking</strong>
                <p className="text-sm font-medium text-slate-500 leading-relaxed">建立理想执行路径，解除阻力</p>
              </div>
            </div>
            <div className="mece-cell bg-white p-8 space-y-6">
              <div>
                <strong className="text-emerald-600 block mb-1">A3 · Lazy Evaluation</strong>
                <p className="text-sm font-medium text-slate-500 leading-relaxed">按需决策，减少前期规划</p>
              </div>
              <div>
                <strong className="text-emerald-600 block mb-1">A4 · Feedback Loop</strong>
                <p className="text-sm font-medium text-slate-500 leading-relaxed">完成标记，形成增强循环</p>
              </div>
              <div>
                <strong className="text-emerald-600 block mb-1">A5 · Single Thread</strong>
                <p className="text-sm font-medium text-slate-500 leading-relaxed">禁止多线程，保护注意力</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="section-heading">⏱️ 维度二：时间轴分布</h2>
        <div className="canvas-wrapper">
          <canvas id="timelineCanvas" width="760" height="120" className="canvas-full"></canvas>
        </div>
      </section>

      <section>
        <h2 className="section-heading">🔄 维度三：输入 / 输出矩阵</h2>
        <div className="overflow-hidden border border-slate-200 rounded-3xl shadow-sm bg-white">
          <table className="wiki-table w-full m-0 border-none shadow-none">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="p-5 text-left text-xs font-black uppercase tracking-widest text-slate-400">组件</th>
                <th className="p-5 text-left text-xs font-black uppercase tracking-widest text-slate-400">输入（需要什么）</th>
                <th className="p-5 text-left text-xs font-black uppercase tracking-widest text-slate-400">输出（产生什么）</th>
                <th className="p-5 text-left text-xs font-black uppercase tracking-widest text-slate-400">消耗认知资源</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-6"><span className="tag tag-onto">A1 Ontology</span></td>
                <td className="p-6 text-sm font-bold text-slate-700">模糊目标</td>
                <td className="p-6 text-sm font-bold text-slate-600">结构化的对象/动作/状态</td>
                <td className="p-6 text-sm font-black text-amber-500">⬤⬤◯◯◯ 中</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-6"><span className="tag tag-wish">A2 Wishful</span></td>
                <td className="p-6 text-sm font-bold text-slate-700">Ontology 结果</td>
                <td className="p-6 text-sm font-bold text-slate-600">理想执行路径（无约束版）</td>
                <td className="p-6 text-sm font-black text-emerald-500">⬤◯◯◯◯ 低</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-6"><span className="tag tag-lazy">A3 Lazy Eval</span></td>
                <td className="p-6 text-sm font-bold text-slate-700">执行中的阻塞点</td>
                <td className="p-6 text-sm font-bold text-slate-600">最小解决方案</td>
                <td className="p-6 text-sm font-black text-emerald-500">⬤◯◯◯◯ 低</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-6"><span className="tag tag-flow">A4 Feedback</span></td>
                <td className="p-6 text-sm font-bold text-slate-700">完成的最小动作</td>
                <td className="p-6 text-sm font-bold text-slate-600">多巴胺触发 + 动力延续</td>
                <td className="p-6 text-sm font-black text-emerald-500">⬤◯◯◯◯ 极低</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-6"><span className="tag tag-exec">A5 Single Thread</span></td>
                <td className="p-6 text-sm font-bold text-slate-700">注意力</td>
                <td className="p-6 text-sm font-bold text-slate-600">深度专注状态</td>
                <td className="p-6 text-sm font-black text-rose-500">⬤⬤⬤◯◯ 需自律</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="section-heading text-rose-600">🚫 维度四：禁止行为（完全穷尽）</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="callout callout-danger">
            <div className="callout-title">❌ 认知层禁止</div>
            <ul className="text-lg font-medium space-y-2 opacity-90">
              <li>• 过度推演未来路径</li>
              <li>• 收集多余信息</li>
              <li>• 追求完美计划</li>
            </ul>
          </div>
          <div className="callout callout-danger">
            <div className="callout-title">❌ 执行层禁止</div>
            <ul className="text-lg font-medium space-y-2 opacity-90">
              <li>• 多线程并行任务</li>
              <li>• 频繁切换上下文</li>
              <li>• 未完成前反复优化</li>
            </ul>
          </div>
          <div className="callout callout-warn">
            <div className="callout-title">⚠️ 情绪层禁止</div>
            <ul className="text-lg font-medium space-y-2 opacity-90">
              <li>• 分析自我焦虑状态</li>
              <li>• 解释情绪来源</li>
              <li>• 扩展无关话题</li>
            </ul>
          </div>
          <div className="callout callout-warn">
            <div className="callout-title">⚠️ 信息层禁止</div>
            <ul className="text-lg font-medium space-y-2 opacity-90">
              <li>• 执行中大量查资料</li>
              <li>• 信息过载状态下行动</li>
              <li>• 扩展问题边界</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
};

export default PageMece;
