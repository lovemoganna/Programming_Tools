import React from 'react';
import { CodeBlock } from '../../../theme';

interface PageProps {
  onNavigate: (id: string) => void;
}

const PageAtomWishful: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <article className="page fade-in" id="page-atom-wishful">
      <div className="breadcrumb">心流触发 Wiki › 原子组件 › <span>A2 · Wishful Thinking</span></div>
      <div className="level-header">
        <div className="level-bar">
          <div className="level-dot on"></div><div className="level-dot on"></div>
          <div className="level-dot"></div><div className="level-dot"></div><div className="level-dot"></div>
        </div>
        <span className="level-text">难度 2/5</span>
      </div>
      <h1 className="wiki-title">✨ A2 · Wishful Thinking（美好假设）</h1>
      <p className="wiki-subtitle">先定义接口，再实现细节 — 解除行动阻力的核心技术</p>

      <div className="callout callout-purple">
        <div className="callout-title">💡 核心定义</div>
        <strong>Wishful Thinking</strong>：假设所有能力、资源、条件均已满足，写出"如果都没问题，我会怎么做"的执行路径。<br />
        关键约束：<em>禁止考虑实现难度</em>。
      </div>

      <h2 className="section-heading">🔌 编程类比：接口先行</h2>

      <p className="body-text">Wishful Thinking 直接源于软件工程的 <strong>"Top-Down Design"</strong> 和 <strong>"接口先行（Interface First）"</strong>原则：</p>

      <CodeBlock label="CODING ANALOGY">
        <span className="code-cm">// Wishful Thinking 在代码中的样子：</span><br /><br />

<span className="code-cm">// 第一步：先"假设"子函数存在，写主逻辑</span><br />
<span className="code-kw">function</span> <span className="code-val">publishArticle</span>(draft) {'{'}<br />
&nbsp;&nbsp;<span className="code-kw">const</span> polished = <span className="code-val">polish</span>(draft);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-cm">// 假设polish已实现</span><br />
&nbsp;&nbsp;<span className="code-kw">const</span> seoReady = <span className="code-val">addSEO</span>(polished);&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-cm">// 假设addSEO已实现</span><br />
&nbsp;&nbsp;<span className="code-kw">return</span> <span className="code-val">upload</span>(seoReady);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-cm">// 假设upload已实现</span><br />
{'}'}<br /><br />

<span className="code-cm">// 第二步：再逐个实现子函数</span><br />
<span className="code-cm">// → 这就是Wishful Thinking的执行方式</span>
      </CodeBlock>

      <h2 className="section-heading">📝 案例：模糊写作任务</h2>

      <p className="body-text">场景：需要写一篇文章，但资料不全、思路不清、时间有限。</p>

      <div className="two-col">
        <div>
          <h3 className="sub-heading">❌ 传统思维</h3>
          <div className="code-block code-block-sm">
资料不齐 → 等待收集完<br />
思路不清 → 继续思考规划<br />
时间有限 → 焦虑 → 不动<br />
<span className="code-cm">// 结果：停滞</span>
          </div>
        </div>
        <div>
          <h3 className="sub-heading">✅ Wishful Thinking</h3>
          <div className="code-block code-block-sm">
假设资料齐全 → 直接写第一段<br />
假设思路清晰 → 直接组织结构<br />
假设时间充足 → 专注当前动作<br />
<span className="code-cm">// 结果：立刻行动</span>
          </div>
        </div>
      </div>

      <h2 className="section-heading">📋 标准 Wishful Thinking 模板</h2>

      <CodeBlock label="TEMPLATE">
        <span className="code-cm">// 填写格式：</span><br />
<span className="code-cm">// 假设 [条件已满足] → 我会 [具体动作]</span><br /><br />

假设思路已清晰      → 我会直接写开头句<br />
假设材料已整理好    → 我会直接搭建文章骨架<br />
假设知道如何表达    → 我会直接把想法写出来<br /><br />

<span className="code-cm">// 禁止写：</span><br />
假设思路清晰 → 我会好好规划 ❌  <span className="code-cm">// "好好规划"不是具体动作</span>
      </CodeBlock>

      <h2 className="section-heading">🧠 为什么要它有效？</h2>

      <p className="body-text">
        <strong>预加载（Preloading）原理</strong>：大脑在实际行动前，会先在内部"模拟执行"一遍。
        Wishful Thinking 通过"假设条件满足"，<span className="hl">让大脑跳过焦虑性评估阶段，直接进入执行模拟</span>，
        从而降低启动阻力。
      </p>

      <p className="body-text">
        <strong>心理学依据</strong>：研究者 Gerald Jay Sussman 在 SICP 中提出这一编程哲学。
        行为科学中，"实施意图（Implementation Intention）"研究表明，
        预先设想"如果 X 发生，我会做 Y"可将任务完成率提升 <strong>2-3 倍</strong>。
      </p>

      <div className="callout callout-warn">
        <div className="callout-title">⚠️ 常见误用</div>
        Wishful Thinking ≠ 白日梦<br />
        白日梦：假设结果已经发生（"假设文章已经写好了…"）<br />
        Wishful Thinking：假设<strong>能力和条件</strong>已满足，但仍需要<strong>你去执行</strong>。
      </div>

      <h2 className="section-heading">✅ 自查清单</h2>
      <ul className="checklist">
        <li><span className="icon">☐</span> 我是否写出了"如果条件满足，我会做的具体动作"？</li>
        <li><span className="icon">☐</span> 动作是具体可执行的，不是"计划"或"思考"？</li>
        <li><span className="icon">☐</span> 我没有考虑实现难度？</li>
        <li><span className="icon">☐</span> 整个 Wishful 路径在 2 分钟内能写完？</li>
      </ul>

      <hr className="wiki-divider" />
      <div className="callout callout-success">
        <div className="callout-title">🎯 下一步</div>
        进入 <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('atom-lazy'); }}><strong>A3 · Lazy Evaluation</strong></a> —— 学习如何在执行遇到阻塞时，用最小代价解决阻塞点。
      </div>
    </article>
  );
};

export default PageAtomWishful;
