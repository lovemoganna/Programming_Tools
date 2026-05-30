import React from 'react';
import { CodeBlock } from '../../../theme';

interface PageProps {
  onNavigate: (id: string) => void;
}

const PageAtomLazy: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <article className="page fade-in" id="page-atom-lazy">
      <div className="breadcrumb">心流触发 Wiki › 原子组件 › <span>A3 · Lazy Evaluation</span></div>
      <div className="flex items-center gap-2.5 mb-1.5">
        <div className="level-bar">
          <div className="level-dot on"></div><div className="level-dot on"></div><div className="level-dot on"></div>
          <div className="level-dot"></div><div className="level-dot"></div>
        </div>
        <span className="text-xs text-slate-500">难度 3/5</span>
      </div>
      <h1 className="wiki-title">⏳ A3 · Lazy Evaluation（惰性求值）</h1>
      <p className="wiki-subtitle">不要提前解决还没发生的问题</p>

      <div className="callout callout-purple">
        <div className="callout-title">💡 核心定义</div>
        <strong>Lazy Evaluation（惰性求值）</strong>：只在"真正需要某个值"时才计算它，而不是提前算好所有可能的值。<br />
        在心流触发中：<em>只在遇到真实阻塞时，才解决这个阻塞点，不扩展边界。</em>
      </div>

      <h2 className="section-heading">封装编程原理类比</h2>

      <CodeBlock label="FUNCTIONAL PROGRAMMING">
        <span className="code-cm">// Eager Evaluation（急性求值）— 提前计算所有分支</span><br />
<span className="code-kw">const</span> result = [1,2,3,4,5,6,7,8,9,10]<br />
&nbsp;&nbsp;.map(x =&gt; x * x)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-cm">// 全部计算</span><br />
&nbsp;&nbsp;.filter(x =&gt; x &gt; 25)&nbsp;&nbsp;<span className="code-cm">// 全部过滤</span><br />
&nbsp;&nbsp;.slice(0, 3)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-cm">// 只取前三个</span><br /><br />

<span className="code-cm">// Lazy Evaluation — 只在需要时计算</span><br />
<span className="code-cm">// 等价于：只有真正访问结果时，才触发计算链</span><br />
<span className="code-kw">const</span> lazyResult = take(3, filter(x =&gt; x &gt; 25, map(x =&gt; x*x, range(1,∞))))<br />
<span className="code-cm">// 执行时只计算到找到3个为止，停止！</span><br /><br />

<span className="code-cm">// 心流类比：不要提前规划所有步骤，只在需要下一步时，才想下一步</span>
      </CodeBlock>

      <h2 className="section-heading">🔄 触发条件 vs 不触发条件</h2>

      <table className="wiki-table">
        <thead>
          <tr><th>情况</th><th>触发 Lazy Eval？</th><th>正确动作</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>执行中遇到信息缺失</td>
            <td>✅ 是</td>
            <td>仅解决这一个信息缺口，不扩展</td>
          </tr>
          <tr>
            <td>执行中遇到技术阻塞</td>
            <td>✅ 是</td>
            <td>仅解决这一个技术点</td>
          </tr>
          <tr>
            <td>"我想想接下来怎么做"</td>
            <td>❌ 否</td>
            <td>回到当前步骤，先完成再说</td>
          </tr>
          <tr>
            <td>"这个问题可能之后会遇到…"</td>
            <td>❌ 否</td>
            <td>忽略，未来遇到再处理</td>
          </tr>
          <tr>
            <td>"我对某个概念不太确定"</td>
            <td>❌ 否</td>
            <td>先用"最好的猜测"执行，完成后复查</td>
          </tr>
        </tbody>
      </table>

      <h2 className="section-heading">📝 案例：文章写作中的阻塞</h2>

      <CodeBlock label="EXAMPLE">
        <span className="code-cm">// 场景：写文章第二段时，发现需要一个统计数据</span><br /><br />

<span className="code-cm">// ❌ 错误：Eager 模式</span><br />
停下来搜索数据 → 发现相关话题 → 继续深入阅读<br />
→ 思路转移 → 40分钟后回来 → 失去心流<br /><br />

<span className="code-cm">// ✅ 正确：Lazy Eval 模式</span><br />
遇到阻塞: 需要一个统计数据<br />
&nbsp;&nbsp;&nbsp;&nbsp;↓<br />
最小解决: 写"[数据占位符 - 稍后补充]"<br />
&nbsp;&nbsp;&nbsp;&nbsp;↓<br />
继续执行: 回到第二段写作<br />
&nbsp;&nbsp;&nbsp;&nbsp;↓<br />
完成后: 集中处理所有占位符<br /><br />

<span className="code-cm">// 关键：解决阻塞的范围 = 恰好够继续执行的最小量</span>
      </CodeBlock>

      <h2 className="section-heading">⚖️ Lazy 的边界：避免"懒到不作为"</h2>

      <div className="callout callout-warn">
        <div className="callout-title">⚠️ 重要区分</div>
        <strong>Lazy Evaluation ≠ 逃避问题</strong><br />
        它是"<em>延迟到必须处理时再处理</em>"，而不是"<em>永远不处理</em>"。<br />
        每次 Lazy 跳过的问题，<strong>必须记录</strong>（用占位符、TODO 标记），并在执行单元完成后统一处理。
      </div>

      <h2 className="section-heading">✅ 自查清单</h2>
      <ul className="checklist">
        <li><span className="icon">☐</span> 我只解决了当前的阻塞点，没有扩展？</li>
        <li><span className="icon">☐</span> 我用占位符记录了跳过的问题？</li>
        <li><span className="icon">☐</span> 解决阻塞后，我立刻回到主执行线了吗？</li>
        <li><span className="icon">☐</span> 我没有因为"未来可能的问题"而停下来思考？</li>
      </ul>

      <hr className="wiki-divider" />
      <div className="callout callout-success">
        <div className="callout-title">🎯 下一步</div>
        进入 <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('atom-feedback'); }}><strong>A4 · Feedback Loop</strong></a> —— 让每个完成的动作都产生即时奖励，形成自我增强的推进力。
      </div>
    </article>
  );
};

export default PageAtomLazy;
