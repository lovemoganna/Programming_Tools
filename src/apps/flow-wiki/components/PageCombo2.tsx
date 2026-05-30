import React from 'react';
import { CodeBlock } from '../../../theme';

interface PageProps {
  onNavigate: (id: string) => void;
}

const PageCombo2: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <article className="page fade-in" id="page-combo-2">
      <div className="breadcrumb">心流触发 Wiki › 组合模式 › <span>L2 · 双元组合</span></div>
      <h1 className="wiki-title">🔗 L2 · 双元组合模式</h1>
      <p className="wiki-subtitle">C(5,2) = 10 种组合 · 本节聚焦最高价值的 3 种</p>

      <div className="callout callout-info">
        <div className="callout-title">📌 组合的意义</div>
        单个原子组件可以独立使用，但两个组件组合时会产生"<strong>1+1 &gt; 2</strong>"的涌现效应。<br />
        理解双元组合，是掌握完整系统的关键桥梁。
      </div>

      <h2 className="section-heading">组合 1：Ontology × Wishful（最常用）</h2>
      <div className="mb-2.5">
        <span className="tag tag-onto">A1</span> + <span className="tag tag-wish">A2</span>
        <span className="combo-formula inline-block ml-2.5">Ontology × Wishful = 零阻力启动</span>
      </div>

      <p className="body-text">先用 Ontology 明确"对象-动作-状态"，再用 Wishful Thinking 假设条件满足，立刻写出执行路径。这个组合解决最核心的问题：<strong>如何从零开始行动。</strong></p>

      <CodeBlock label="COMBO 1 · EXAMPLE">
        <span className="code-cm">// 任务：写一篇产品分析报告</span><br /><br />

<span className="code-cm">// Step 1: Ontology</span><br />
对象: 产品分析报告 - 第一节<br />
动作: 写<br />
状态: 300字草稿完成<br /><br />

<span className="code-cm">// Step 2: Wishful Thinking（在 Ontology 骨架上）</span><br />
假设我已经对产品很了解&nbsp;&nbsp;&nbsp;→ 直接写产品定位段<br />
假设已经有用户数据&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ 直接写核心用户描述<br />
假设已经思路已经清晰&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ 按逻辑顺序写下来<br /><br />

<span className="code-cm">// 涌现效应：不再需要"准备好了才开始"</span><br />
<span className="code-cm">// 执行开始时间：T+0（立刻）</span>
      </CodeBlock>

      <h2 className="section-heading">组合 2：Single Thread × Feedback（专注飞轮）</h2>
      <div className="mb-2.5">
        <span className="tag tag-exec">A5</span> + <span className="tag tag-flow">A4</span>
        <span className="combo-formula inline-block ml-2.5">专注 × 完成感 = 心流飞轮</span>
      </div>

      <p className="body-text">单线程执行确保深度，即时反馈确保动力。两者结合形成<strong>自我增强的心流飞轮</strong>：专注产出完成，完成触发奖励，奖励强化专注。</p>

      <CodeBlock label="COMBO 2 · FLYWHEEL">
        <span className="code-cm">// 心流飞轮的运转方式：</span><br /><br />

→ 单线程执行（A5）<br />
&nbsp;&nbsp;&nbsp;&nbsp;↓ 深度专注，不被打断<br />
→ 完成最小单元<br />
&nbsp;&nbsp;&nbsp;&nbsp;↓<br />
→ 即时反馈（A4）：✓ 标记<br />
&nbsp;&nbsp;&nbsp;&nbsp;↓ 多巴胺↑<br />
→ 自然进入下一单元<br />
&nbsp;&nbsp;&nbsp;&nbsp;↓ 上下文切换成本 = 0<br />
→ 再次单线程执行（A5）<br />
&nbsp;&nbsp;&nbsp;&nbsp;↓<br />
→ ...（飞轮持续转动）<br /><br />

<span className="code-cm">// 时间感减弱 = 心流特征之一</span><br />
<span className="code-cm">// 这个飞轮可以持续 60–120 分钟</span>
      </CodeBlock>

      <h2 className="section-heading">组合 3：Wishful × Lazy Eval（阻力消除器）</h2>
      <div className="mb-2.5">
        <span className="tag tag-wish">A2</span> + <span className="tag tag-lazy">A3</span>
        <span className="combo-formula inline-block ml-2.5">假设完备 × 按需解决 = 零焦虑执行</span>
      </div>

      <p className="body-text">Wishful 在开始时假设所有条件满足（消除启动阻力），Lazy Eval 在执行中处理实际阻塞（不扩展问题）。两者覆盖了执行全程的焦虑来源。</p>

      <CodeBlock label="COMBO 3 · EXAMPLE">
        <span className="code-cm">// 场景：写代码时不确定某个 API 的用法</span><br /><br />

<span className="code-cm">// Wishful（启动时）：</span><br />
假设我知道所有 API 用法 → 直接写出理想实现<br />
<span className="code-cm">// → 先写出"应该是什么样"的伪代码</span><br /><br />

<span className="code-cm">// Lazy Eval（遇到真实阻塞时）：</span><br />
阻塞: fetch API 的 headers 格式不确定<br />
最小解决: 查一下这一个参数 → 继续<br />
<span className="code-cm">// → 不展开查"HTTP请求最佳实践"整个话题</span><br /><br />

<span className="code-cm">// 涌现效应：执行中焦虑几乎为零</span>
      </CodeBlock>

      <h2 className="section-heading">📊 其余 7 种双元组合（速查）</h2>
      <div className="combo-grid">
        <div className="combo-card">
          <h4><span className="tag tag-onto">A1</span> × <span className="tag tag-lazy">A3</span></h4>
          <p>先明确完成态，再按需填充路径。适合任务范围模糊的情况。</p>
          <span className="combo-formula">结构骨架 × 按需填充</span>
        </div>
        <div className="combo-card">
          <h4><span className="tag tag-onto">A1</span> × <span className="tag tag-flow">A4</span></h4>
          <p>把大目标的完成态拆分为多个可反馈的小里程碑。</p>
          <span className="combo-formula">分解目标 × 里程碑反馈</span>
        </div>
        <div className="combo-card">
          <h4><span className="tag tag-onto">A1</span> × <span className="tag tag-exec">A5</span></h4>
          <p>明确当前唯一任务单元，锁定注意力。是 Single Thread 的前提。</p>
          <span className="combo-formula">单点目标 × 专注锁定</span>
        </div>
        <div className="combo-card">
          <h4><span className="tag tag-wish">A2</span> × <span className="tag tag-flow">A4</span></h4>
          <p>用理想路径做参考，每步完成后对比理想进度，产生成就感。</p>
          <span className="combo-formula">理想路径 × 进度确认</span>
        </div>
        <div className="combo-card">
          <h4><span className="tag tag-wish">A2</span> × <span className="tag tag-exec">A5</span></h4>
          <p>将 Wishful 路径的第一步设为唯一执行任务，防止路径过多分散。</p>
          <span className="combo-formula">路径首步 × 单线执行</span>
        </div>
        <div className="combo-card">
          <h4><span className="tag tag-lazy">A3</span> × <span className="tag tag-flow">A4</span></h4>
          <p>每次 Lazy 解决一个阻塞后，立即标记完成，维持动力。</p>
          <span className="combo-formula">阻塞解决 × 即时奖励</span>
        </div>
        <div className="combo-card">
          <h4><span className="tag tag-lazy">A3</span> × <span className="tag tag-exec">A5</span></h4>
          <p>Lazy 触发时不切换主线程，用最小动作解决后立即返回。</p>
          <span className="combo-formula">最小中断 × 快速恢复</span>
        </div>
      </div>

      <hr className="wiki-divider" />
      <div className="callout callout-success">
        <div className="callout-title">🎯 下一步</div>
        进入 <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('combo-3'); }}><strong>L3 · 三元组合</strong></a> —— 三个组件协作，开始逼近真实心流体验。
      </div>
    </article>
  );
};

export default PageCombo2;
