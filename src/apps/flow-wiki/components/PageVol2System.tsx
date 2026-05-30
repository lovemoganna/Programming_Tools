import React from 'react';
import { CodeBlock } from '../../../theme';

interface PageProps {
  onNavigate: (id: string) => void;
}

const PageVol2System: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <article className="page fade-in" id="page-vol2-system">
      <div className="breadcrumb">心流触发 Wiki · 第二卷 › 深层组合 › <span>双卷融合系统</span></div>
      <div className="mb-2.5"><span className="tag tag-new">V2 SYSTEM</span></div>
      <h1 className="wiki-title">🌐 双卷融合系统（A+B 全整合）</h1>
      <p className="wiki-subtitle">10 个原子组件的完整协作 — 从模糊意图到持续产出的系统性解决方案</p>

      <blockquote className="wiki-quote">
        第一卷（A 系列）解决了"如何开始和执行"。<br />
        第二卷（B 系列）解决了"如何持续、如何恢复、如何精确"。<br />
        两卷融合，构成一个<strong>自维持的执行系统</strong>，而不只是一次性的心流触发技巧。
      </blockquote>

      <h2 className="section-heading">🏗️ 双卷系统架构图</h2>
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-4 overflow-x-auto shadow-inner">
        <canvas id="complexityCanvasVol2" width="760" height="230" className="w-full max-w-[760px] block"></canvas>
      </div>
      <CodeBlock label="V2 SYSTEM ARCHITECTURE">
        <span className="code-cm">// ════════════════════════════════════════════════</span><br />
<span className="code-cm">// 心流触发系统 v2.0（A+B 双卷融合）</span><br />
<span className="code-cm">// ════════════════════════════════════════════════</span><br /><br />

<span className="code-cm">// ── 层 0: 任务接收（&lt;1分钟）──────────────────────</span><br />
receive(task) {'{'}<br />
&nbsp;&nbsp;<span className="code-kw">if</span> (isBlocked || isHighResistance) {'{'}<br />
&nbsp;&nbsp;&nbsp;&nbsp;MVA = <span className="code-val">decompose</span>(task)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-cm">// B5: 找最小可行动作</span><br />
&nbsp;&nbsp;{'}'}<br />
{'}'}<br /><br />

<span className="code-cm">// ── 层 1: 执行前准备（2–5分钟）─────────────────</span><br />
prepare() {'{'}<br />
&nbsp;&nbsp;<span className="code-cm">// A 系列: 认知层</span><br />
&nbsp;&nbsp;ontology&nbsp;&nbsp;&nbsp;&nbsp;= <span className="code-val">define</span>(object, action, doneState)&nbsp;&nbsp;<span className="code-cm">// A1</span><br />
&nbsp;&nbsp;doneState&nbsp;&nbsp;&nbsp;= <span className="code-val">preciseDone</span>(L2, L3)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-cm">// B1 精确化</span><br />
&nbsp;&nbsp;wishful&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= <span className="code-val">assumeAllConditions</span>()&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-cm">// A2</span><br /><br />

&nbsp;&nbsp;<span className="code-cm">// B 系列: 工具层</span><br />
&nbsp;&nbsp;anchor&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= <span className="code-val">readLastAnchor</span>()&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-cm">// B4 读取锚点</span><br />
&nbsp;&nbsp;timeFence&nbsp;&nbsp;&nbsp;= <span className="code-val">startTimer</span>(duration)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-cm">// B3 时间围栏</span><br />
&nbsp;&nbsp;interruptQ&nbsp;&nbsp;= <span className="code-val">clearQueue</span>()&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-cm">// B2 清空队列</span><br />
&nbsp;&nbsp;singleThread = <span className="code-val">lockFocus</span>(firstStep)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-cm">// A5 单线程</span><br />
{'}'}<br /><br />

<span className="code-cm">// ── 层 2: 执行循环（核心心流区间）─────────────</span><br />
<span className="code-kw">while</span> (!isSessionEnd) {'{'}<br />
&nbsp;&nbsp;execute(currentStep)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-cm">// A5: 单线程</span><br /><br />

&nbsp;&nbsp;<span className="code-kw">if</span> (interruptThought) {'{'}<br />
&nbsp;&nbsp;&nbsp;&nbsp;interruptQ.<span className="code-val">push</span>(thought)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-cm">// B2: 5秒存入队列</span><br />
&nbsp;&nbsp;&nbsp;&nbsp;resume()<br />
&nbsp;&nbsp;{'}'}<br />
&nbsp;&nbsp;<span className="code-kw">if</span> (realBlock) {'{'}<br />
&nbsp;&nbsp;&nbsp;&nbsp;resolve(<span className="code-val">minimalFix</span>())&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-cm">// A3: Lazy Eval</span><br />
&nbsp;&nbsp;{'}'}<br />
&nbsp;&nbsp;<span className="code-kw">if</span> (<span className="code-val">meetsDoneState</span>(L2)) {'{'}<br />
&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-val">mark</span>(); <span className="code-val">reward</span>()&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-cm">// A4: Feedback</span><br />
&nbsp;&nbsp;&nbsp;&nbsp;currentStep = <span className="code-val">nextNatural</span>()<br />
&nbsp;&nbsp;{'}'}<br />
{'}'}<br /><br />

<span className="code-cm">// ── 层 3: 执行后收尾（3–5分钟）─────────────────</span><br />
conclude() {'{'}<br />
&nbsp;&nbsp;<span className="code-val">declare</span>(<span className="code-str">"Session 完成"</span>)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-cm">// A5: 完成声明</span><br />
&nbsp;&nbsp;<span className="code-val">checkL3DoneState</span>()&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-cm">// B1: 质检</span><br />
&nbsp;&nbsp;anchor = <span className="code-val">writeAnchor</span>(pos, next, issues, %)&nbsp;<span className="code-cm">// B4: 写锚点</span><br />
&nbsp;&nbsp;<span className="code-val">processQueue</span>(interruptQ)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-cm">// B2: 处理队列</span><br />
{'}'}<br /><br />

<span className="code-cm">// ── 层 4: 系统涌现（自动产生）───────────────────</span><br />
<span className="code-cm">// timeDistortion = true&nbsp;&nbsp;&nbsp;&nbsp;// 时间感减弱</span><br />
<span className="code-cm">// continuousOutput = true&nbsp;&nbsp;// 跨天连续性</span><br />
<span className="code-cm">// recoveryTime = &lt;90s&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// 中断后快速恢复</span><br />
<span className="code-cm">// resistanceDecay = true&nbsp;&nbsp;&nbsp;// 阻力随执行降低</span>
      </CodeBlock>

      <h2 className="section-heading">📋 V2 完整执行卡（复制使用）</h2>
      <CodeBlock label="V2 EXECUTION CARD">
        <span className="code-key">【启动前 · 读锚点】</span>  &lt;90秒<br />
&nbsp;&nbsp;上次位置: _______________<br />
&nbsp;&nbsp;下一动作: _______________<br /><br />

<span className="code-key">【准备层 · 5分钟】</span><br />
&nbsp;&nbsp;A1 对象: ___&nbsp;&nbsp;动作: ___<br />
&nbsp;&nbsp;B1 完成态(L2): _______________<br />
&nbsp;&nbsp;A2 假设___________→直接___________<br />
&nbsp;&nbsp;B5 MVA(如需): _______________<br />
&nbsp;&nbsp;B3 时间围栏: ___ 分钟 [计时器已启动]<br />
&nbsp;&nbsp;B2 中断队列: 已准备<br /><br />

<span className="code-key">【执行层】</span><br />
&nbsp;&nbsp;A5: 当前唯一线程 = _______________<br />
&nbsp;&nbsp;插队想法 → B2 队列（&lt;5秒）<br />
&nbsp;&nbsp;真实阻塞 → A3 最小解决 → 继续<br />
&nbsp;&nbsp;完成单元 → A4: ✓ 标记<br /><br />

<span className="code-key">【收尾层 · 5分钟】</span><br />
&nbsp;&nbsp;完成声明: "___ 完成"<br />
&nbsp;&nbsp;B1 L3 质检: □□□<br />
&nbsp;&nbsp;B4 写锚点: 位置/下一步/未决/进度%<br />
&nbsp;&nbsp;B2 处理队列: 执行/暂存/丢弃<br /><br />

<span className="code-cm">─────────────────────────────────────</span><br />
<span className="code-cm">口诀 V2: 读锚→定结构→假设→围栏→单线→队列→完成→质检→写锚</span>
      </CodeBlock>

      <h2 className="section-heading">📊 V1 vs V2 系统对比</h2>
      <table className="wiki-table">
        <thead><tr><th>维度</th><th>V1（A系列）</th><th>V2（A+B融合）</th></tr></thead>
        <tbody>
          <tr><td>启动阻力</td><td>Wishful 解除心理阻力</td><td>+ MVA 解除身体惯性</td></tr>
          <tr><td>完成判断</td><td>模糊状态感知</td><td>精确 L2/L3 完成态</td></tr>
          <tr><td>中断处理</td><td>心智压制</td><td>B2 队列机制化存储</td></tr>
          <tr><td>专注保护</td><td>意志力</td><td>B3 时间围栏 + B2 队列</td></tr>
          <tr><td>跨天连续性</td><td>依赖记忆</td><td>B4 锚点精确恢复</td></tr>
          <tr><td>系统持续性</td><td>单次心流冲刺</td><td>自维持执行飞轮</td></tr>
        </tbody>
      </table>

      <hr className="wiki-divider" />
      <div className="callout callout-success">
        <div className="callout-title">🎯 下一步：深层场景实战</div>
        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('scene-research'); }}>🔭 研究综述场景</a> ·
        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('scene-meeting'); }}>🗣️ 会议准备场景</a> ·
        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('scene-stuck'); }}>🧱 彻底卡住了</a>
      </div>
    </article>
  );
};

export default PageVol2System;
