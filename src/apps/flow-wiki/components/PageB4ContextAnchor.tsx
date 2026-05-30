import React from 'react';
import { CodeBlock } from '../../../theme';

interface PageProps {
  onNavigate: (id: string) => void;
}

const PageB4ContextAnchor: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <article className="page fade-in" id="page-b4-context-anchor">
      <div className="breadcrumb">心流触发 Wiki · 第二卷 › 深层原子 › <span>B4 · 上下文锚点</span></div>
      <div className="flex items-center gap-2.5 mb-1.5">
        <div className="level-bar">
          <div className="level-dot on"></div><div className="level-dot on"></div><div className="level-dot on"></div>
          <div className="level-dot on"></div><div className="level-dot"></div>
        </div>
        <span className="text-xs text-slate-500">难度 4/5 · 第二卷原子 B4</span>
      </div>
      <h1 className="wiki-title">⚓ B4 · 上下文锚点（Context Anchor）</h1>
      <p className="wiki-subtitle">在任务结束时埋下一个"起跑线"，让下次启动从这里开始而不是从零</p>

      <div className="callout callout-purple">
        <div className="callout-title">💡 核心定义</div>
        <strong>上下文锚点</strong>：在每次执行 Session 结束时，留下一条能让未来的自己在 &lt; 90 秒内恢复执行状态的记录。<br />
        它不是进度总结，而是一个<em>精确的重启坐标</em>。
      </div>

      <h2 className="section-heading">🖥️ 程序类比：快照与断点</h2>
      <p className="body-text">
        调试器（Debugger）的<strong>断点（Breakpoint）</strong>机制：程序执行到断点时暂停，保存当前完整状态（堆栈、变量、执行位置），下次运行时从断点处精确恢复，不从头开始。<br /><br />
        上下文锚点 = 人类执行任务的断点。在任务暂停时保存"执行快照"，下次从快照恢复，不从头重建上下文。
      </p>

      <h2 className="section-heading">📐 上下文锚点的四个字段</h2>
      <CodeBlock label="ANCHOR TEMPLATE">
        <span className="code-cm">// 每次 Session 结束时，花 2 分钟填写：</span><br /><br />

锚点记录:<br />
&nbsp;&nbsp;[1] 当前位置: ___&nbsp;&nbsp;<span className="code-cm">// 精确到"第几段/哪个函数/哪个步骤"</span><br />
&nbsp;&nbsp;[2] 下一动作: ___&nbsp;&nbsp;<span className="code-cm">// 下次启动时的第一个具体动作</span><br />
&nbsp;&nbsp;[3] 未决问题: ___&nbsp;&nbsp;<span className="code-cm">// 执行中遇到但未解决的阻塞点</span><br />
&nbsp;&nbsp;[4] 当前状态: ___&nbsp;&nbsp;<span className="code-cm">// 任务整体进度（0–100%）</span><br /><br />

<span className="code-cm">// 下次启动时，读一遍锚点，然后直接执行[2]</span><br />
<span className="code-cm">// 预期恢复时间: &lt; 90 秒</span>
      </CodeBlock>

      <h2 className="section-heading">📝 案例：代码编写会话的上下文锚点</h2>
      <CodeBlock label="B4 · EXAMPLE · 代码任务">
        <span className="code-cm">// 任务: 实现用户认证模块</span><br />
<span className="code-cm">// 当前 Session 结束（45分钟后）</span><br /><br />

<span className="code-cm">// ✅ 正确的锚点记录：</span><br />
锚点 · 2024-01-15 · 用户认证模块<br /><br />

[1] 当前位置:<br />
&nbsp;&nbsp;&nbsp;&nbsp;auth.js · 第 47 行 · authenticate() 函数主体已完成<br />
&nbsp;&nbsp;&nbsp;&nbsp;validateToken() 函数刚开始，第 3 行<br /><br />

[2] 下一动作:<br />
&nbsp;&nbsp;&nbsp;&nbsp;实现 validateToken() 的过期时间检查逻辑<br />
&nbsp;&nbsp;&nbsp;&nbsp;参考: JWT文档 exp字段<br /><br />

[3] 未决问题:<br />
&nbsp;&nbsp;&nbsp;&nbsp;- refresh token 的存储方案还没决定（localStorage vs cookie）<br />
&nbsp;&nbsp;&nbsp;&nbsp;- 测试文件还没建<br /><br />

[4] 当前进度: 约 40%<br /><br />

<span className="code-cm">// ❌ 错误的锚点记录（太模糊，无法恢复）</span><br />
锚点: "auth 模块写了一半"<br />
<span className="code-cm">// 下次启动时：需要 10–20 分钟重建上下文</span>
      </CodeBlock>

      <h2 className="section-heading">⚡ 锚点的"最小可行版"（&lt; 30 秒填写）</h2>
      <p className="body-text">如果时间极度紧张，至少记录这一句话：</p>
      <CodeBlock label="MINIMAL ANCHOR">
        <span className="code-cm">// 格式: 下次从 [位置] 开始做 [具体动作]</span><br /><br />

"下次从 auth.js 第47行开始，实现 validateToken 的 exp 检查"<br /><br />

<span className="code-cm">// 这一句话包含了: 位置 + 下一动作</span><br />
<span className="code-cm">// 90秒恢复时间可以实现</span>
      </CodeBlock>

      <h2 className="section-heading">✅ 自查清单</h2>
      <ul className="checklist">
        <li><span className="icon">☐</span> Session 结束时，我记录了精确的当前位置（不是"写了一半"）？</li>
        <li><span className="icon">☐</span> 下次启动的第一个动作是明确的、可立即执行的？</li>
        <li><span className="icon">☐</span> 我记录了当前的未决问题，不让它们在脑中悬挂？</li>
        <li><span className="icon">☐</span> 下次启动时，我先读锚点，再执行，不重新"盘点全局"？</li>
      </ul>

      <hr className="wiki-divider" />
      <div className="callout callout-success">
        <div className="callout-title">🎯 下一步</div>
        进入 <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('b5-minimum-viable-action'); }}><strong>B5 · 最小可行动作</strong></a> —— 当一切都感觉很难时，把任何任务分解到"不可能失败的原子动作"。
      </div>
    </article>
  );
};

export default PageB4ContextAnchor;
