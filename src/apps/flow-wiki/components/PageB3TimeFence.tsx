import React from 'react';
import { CodeBlock } from '../../../theme';

interface PageProps {
  onNavigate: (id: string) => void;
}

const PageB3TimeFence: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <article className="page fade-in" id="page-b3-time-fence">
      <div className="breadcrumb">心流触发 Wiki · 第二卷 › 深层原子 › <span>B3 · 时间围栏</span></div>
      <div className="level-header">
        <div className="level-bar">
          <div className="level-dot on"></div><div className="level-dot on"></div><div className="level-dot on"></div>
          <div className="level-dot"></div><div className="level-dot"></div>
        </div>
        <span className="level-text">难度 3/5 · 第二卷原子 B3</span>
      </div>
      <h1 className="wiki-title">⏱️ B3 · 时间围栏（Time Fence）</h1>
      <p className="wiki-subtitle">给执行划定一个有边界的时间容器，让大脑放下"其他事情"的担忧</p>

      <div className="callout callout-purple">
        <div className="callout-title">💡 核心定义</div>
        <strong>时间围栏</strong>：在执行开始前，声明一个固定的结束时刻。在此期间，所有非当前任务的事情被合法地搁置。<br />
        心理机制：大脑不是害怕"不做其他事"，而是害怕"忘记其他事"。时间围栏给了"我知道什么时候会处理它"的保证。
      </div>

      <h2 className="section-heading">🧠 为什么大脑需要时间边界</h2>
      <p className="body-text">
        <strong>蔡格尼克效应（Zeigarnik Effect）</strong>：未完成任务会持续占用大脑工作记忆，直到被处理或被显式"归档"。<br />
        时间围栏相当于对大脑宣布："25分钟后，我会处理其他一切。现在，那些任务已被安全归档。"
        这个声明让大脑<em>释放对其他任务的监控</em>，全部资源集中于当前执行。
      </p>

      <h2 className="section-heading">📐 时间围栏的三个参数</h2>
      <div className="time-fence-grid">
        <div className="time-fence-card time-fence-duration">
          <div className="time-fence-icon">⏰</div>
          <div className="time-fence-label">时长（Duration）</div>
          <div className="time-fence-desc">25 / 45 / 90 分钟<br />不建议超过 90 分钟</div>
        </div>
        <div className="time-fence-card time-fence-signal">
          <div className="time-fence-icon">🔔</div>
          <div className="time-fence-label">信号（Signal）</div>
          <div className="time-fence-desc">计时器铃声<br />物理边界感知</div>
        </div>
        <div className="time-fence-card time-fence-declaration">
          <div className="time-fence-icon">📋</div>
          <div className="time-fence-label">声明（Declaration）</div>
          <div className="time-fence-desc">开始前说出任务<br />结束时说出完成</div>
        </div>
      </div>

      <h2 className="section-heading">📝 案例：一次 45 分钟的编程时间围栏</h2>
      <CodeBlock label="B3 · EXAMPLE · 编程会话">
        <span className="code-cm">// T-2分钟：设置时间围栏</span><br />
任务声明: "实现 UserProfile 组件，45分钟"<br />
计时器: 启动 45:00<br />
通知: 全部静音<br />
浏览器标签: 只保留文档和代码编辑器<br /><br />

<span className="code-cm">// T+0：执行开始</span><br />
<span className="code-cm">// 大脑状态: 所有其他任务已被"归档到45分钟后"</span><br />
<span className="code-cm">// 认知资源: 100% 集中于 UserProfile</span><br /><br />

<span className="code-cm">// T+23：中途想到"还没回那个邮件"</span><br />
<span className="code-cm">// 正确反应:</span><br />
→ 写入中断队列: [邮件回复]<br />
→ 心理确认: "计时器结束后处理"<br />
→ 继续编码<br />
<span className="code-cm">// 错误反应: 打开邮件客户端 → 上下文切换 → 心流断裂</span><br /><br />

<span className="code-cm">// T+45：计时器响</span><br />
完成声明: "UserProfile 组件实现阶段完成"<br />
处理队列: [邮件回复] → 评估 → 执行<br />
休息: 10分钟（物理缓冲，防止认知疲劳）
      </CodeBlock>

      <h2 className="section-heading">📊 时长选择指南</h2>
      <table className="wiki-table">
        <thead><tr><th>时长</th><th>适合状态</th><th>适合任务</th><th>风险</th></tr></thead>
        <tbody>
          <tr><td>15 分钟</td><td>注意力涣散；刚启动</td><td>任何任务的冷启动</td><td>太短，难以进入深度</td></tr>
          <tr><td>25 分钟</td><td>标准执行状态</td><td>单一明确任务</td><td>若任务需要热身，25分钟不够</td></tr>
          <tr><td>45 分钟</td><td>良好专注状态</td><td>中等复杂任务</td><td>—（推荐标准）</td></tr>
          <tr><td>90 分钟</td><td>最佳状态 + 已预热</td><td>深度创作 / 复杂编程</td><td>超时会产生认知债务</td></tr>
          <tr><td>&gt;90 分钟</td><td>❌ 不推荐</td><td>—</td><td>注意力自然周期约 90 分钟</td></tr>
        </tbody>
      </table>

      <div className="callout callout-warn">
        <div className="callout-title">⚠️ 时间围栏的使用误区</div>
        <strong>误区 1</strong>：把时间围栏当成番茄钟（Pomodoro）的替代品。两者不同：时间围栏关注的是"给大脑安全感"，不是强制休息节律。<br />
        <strong>误区 2</strong>：计时器响了必须立刻停止。如果正在心流中，允许延长 10–15 分钟，在自然节点停下来。
      </div>

      <h2 className="section-heading">✅ 自查清单</h2>
      <ul className="checklist">
        <li><span className="icon">☐</span> 我在执行前设置了计时器（物理信号，不是脑中估算）？</li>
        <li><span className="icon">☐</span> 我做了开始声明，明确了任务和时长？</li>
        <li><span className="icon">☐</span> 计时器期间，我把所有插队任务都存入中断队列，不立刻处理？</li>
        <li><span className="icon">☐</span> 计时结束时，我做了完成声明，处理了队列？</li>
      </ul>

      <hr className="wiki-divider" />
      <div className="callout callout-success">
        <div className="callout-title">🎯 下一步</div>
        进入 <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('b4-context-anchor'); }}><strong>B4 · 上下文锚点</strong></a> —— 学习如何在中断后快速恢复执行状态，让"重新进入心流"从 15 分钟缩短到 90 秒。
      </div>
    </article>
  );
};

export default PageB3TimeFence;
