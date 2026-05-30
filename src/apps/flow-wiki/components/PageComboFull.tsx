import React from 'react';
import { CodeBlock } from '../../../theme';

interface PageProps {
  onNavigate: (id: string) => void;
}

const PageComboFull: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <article className="page fade-in" id="page-combo-full">
      <div className="breadcrumb">心流触发 Wiki › 组合模式 › <span>L5 · 完整系统</span></div>
      <div className="mb-2.5"><span className="tag tag-new">BOSS LEVEL</span></div>
      <h1 className="wiki-title">🌐 L5 · 完整心流触发系统</h1>
      <p className="wiki-subtitle">五个原子的完整整合 — 心流状态的涌现机制</p>

      <blockquote className="wiki-quote">
        心流不是目标，而是五个组件协同运作时的<strong>自然涌现结果</strong>。<br />
        就像水在特定温度和压力下自然变成蒸汽，心流在特定认知条件下自然出现。
      </blockquote>

      <h2 className="section-heading">🏗️ 完整系统架构</h2>

      <CodeBlock label="FULL SYSTEM ARCHITECTURE">
        <span className="code-cm">// ════════════════════════════════════════</span><br />
<span className="code-cm">// 心流触发系统 v1.0</span><br />
<span className="code-cm">// ════════════════════════════════════════</span><br /><br />

<span className="code-cm">// Layer 0: 前置条件（执行前，2–5分钟）</span><br />
<span className="code-kw">init</span>() {'{'}<br />
&nbsp;&nbsp;ontology&nbsp;&nbsp;&nbsp;&nbsp;= <span className="code-val">define</span>(object, action, doneState)&nbsp;&nbsp;<span className="code-cm">// A1</span><br />
&nbsp;&nbsp;wishful&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= <span className="code-val">assumeAllConditions</span>(ontology)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-cm">// A2</span><br />
&nbsp;&nbsp;singleThread = <span className="code-val">lockFocus</span>(ontology.firstStep)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-cm">// A5</span><br />
{'}'}<br /><br />

<span className="code-cm">// Layer 1: 执行循环（核心心流区间）</span><br />
<span className="code-kw">while</span> (!isComplete) {'{'}<br />
&nbsp;&nbsp;execute(currentStep)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-cm">// A5: 单线程执行</span><br /><br />

&nbsp;&nbsp;<span className="code-kw">if</span> (blocked) {'{'}<br />
&nbsp;&nbsp;&nbsp;&nbsp;resolve(minimalFix)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-cm">// A3: Lazy Eval</span><br />
&nbsp;&nbsp;&nbsp;&nbsp;resume()<br />
&nbsp;&nbsp;{'}'}<br /><br />

&nbsp;&nbsp;<span className="code-kw">if</span> (stepComplete) {'{'}<br />
&nbsp;&nbsp;&nbsp;&nbsp;mark()&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-cm">// A4: 即时标记</span><br />
&nbsp;&nbsp;&nbsp;&nbsp;reward()&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-cm">// A4: 微奖励</span><br />
&nbsp;&nbsp;&nbsp;&nbsp;currentStep = <span className="code-val">nextNatural</span>()&nbsp;&nbsp;<span className="code-cm">// 自然浮现</span><br />
&nbsp;&nbsp;{'}'}<br />
{'}'}<br /><br />

<span className="code-cm">// Layer 2: 系统涌现（无需主动追求）</span><br />
<span className="code-cm">// timeDistortion = true&nbsp;&nbsp;&nbsp;&nbsp;// 时间感减弱</span><br />
<span className="code-cm">// continuousOutput = true&nbsp;&nbsp;// 输出连续</span><br />
<span className="code-cm">// decisionStress = 0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// 决策压力归零</span><br />
<span className="code-cm">// selfConsciousness = low&nbsp;&nbsp;// 自我意识减弱</span>
      </CodeBlock>

      <h2 className="section-heading">📋 完整 SOP — 一次真实的心流会话</h2>

      <div className="step-card">
        <div className="step-num">准</div>
        <div className="step-body">
          <h4>准备阶段（3分钟）</h4>
          <p>
            1. 用 Ontology 写出：对象 / 动作 / 完成态<br />
            2. 用 Wishful Thinking 写出假设执行路径（3–5行即可）<br />
            3. 准备中断队列（纸/便条文档）<br />
            4. 设置时间围栏（25–90分钟计时器）<br />
            5. 关闭通知、浏览器、社交媒体
          </p>
        </div>
      </div>

      <div className="step-card">
        <div className="step-num">执</div>
        <div className="step-body">
          <h4>执行阶段（时间围栏内）</h4>
          <p>
            1. 单线程执行 Wishful 路径第一步<br />
            2. 插队想法 → 写入中断队列 → 继续执行<br />
            3. 遇阻塞 → 最小解决 → 继续执行（Lazy Eval）<br />
            4. 完成最小单元 → 标记 ✓ → 进入下一单元（Feedback）<br />
            5. 重复 1–4，直到时间围栏到期
          </p>
        </div>
      </div>

      <div className="step-card">
        <div className="step-num">收</div>
        <div className="step-body">
          <h4>收尾阶段（5分钟）</h4>
          <p>
            1. 发出完成声明（显式终止当前心流会话）<br />
            2. 处理中断队列中的记录（决定是否需要跟进）<br />
            3. 处理 Lazy Eval 产生的占位符<br />
            4. 记录今日产出（强化 Feedback 回路）
          </p>
        </div>
      </div>

      <h2 className="section-heading">📊 心流状态的可观测指标</h2>

      <table className="wiki-table">
        <thead>
          <tr><th>指标</th><th>未进入心流</th><th>心流状态</th></tr>
        </thead>
        <tbody>
          <tr><td>时间感</td><td>频繁看时间</td><td>时间感减弱，"怎么过了这么久"</td></tr>
          <tr><td>注意力</td><td>频繁分心</td><td>注意力自动收敛</td></tr>
          <tr><td>决策压力</td><td>不断评估选项</td><td>自然知道下一步</td></tr>
          <tr><td>输出</td><td>断断续续</td><td>连续稳定产出</td></tr>
          <tr><td>自我意识</td><td>反复自我评价</td><td>忘我状态</td></tr>
          <tr><td>疲劳感</td><td>开始前就累</td><td>完成后才感到满足疲惫</td></tr>
        </tbody>
      </table>

      <hr className="wiki-divider" />
      <div className="callout callout-success">
        <div className="callout-title">🎯 下一步：场景实战</div>
        选择一个真实场景开始验证：
        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('scene-write'); }}>✍️ 写作心流</a> ·
        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('scene-code'); }}>💻 编程心流</a> ·
        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('scene-decide'); }}>⚡ 模糊决策</a>
      </div>
    </article>
  );
};

export default PageComboFull;
