import React from 'react';
import { CodeBlock } from '../../../theme';

interface PageProps {
  onNavigate?: (id: string) => void;
}

const PageSop: React.FC<PageProps> = () => {
  return (
    <article className="page fade-in" id="page-sop">
      <div className="breadcrumb">心流触发 Wiki › 参考 › <span>标准 SOP 速查</span></div>
      <h1 className="wiki-title">📋 标准 SOP 速查</h1>
      <p className="wiki-subtitle">复制此卡片到你的笔记系统，随时参考</p>

      <CodeBlock label="SOP · 心流触发 v1.0">
<span className="code-key">【Step 1 · Ontology】</span>  2分钟<br />
&nbsp;&nbsp;对象: _______________（具体名词）<br />
&nbsp;&nbsp;动作: _______________（原子动词）<br />
&nbsp;&nbsp;状态: _______________（可验证完成态）<br /><br />

<span className="code-key">【Step 2 · Wishful Thinking】</span>  1分钟<br />
&nbsp;&nbsp;假设 _______________ → 直接 _______________<br />
&nbsp;&nbsp;假设 _______________ → 直接 _______________<br /><br />

<span className="code-key">【Step 3 · 准备工具】</span><br />
&nbsp;&nbsp;□ 中断队列（纸/便条文档）<br />
&nbsp;&nbsp;□ 时间围栏（计时器 ___ 分钟）<br />
&nbsp;&nbsp;□ 通知已关闭<br /><br />

<span className="code-key">【Step 4 · 执行循环】</span><br />
&nbsp;&nbsp;→ 单线程执行<br />
&nbsp;&nbsp;→ 插队想法 → 中断队列<br />
&nbsp;&nbsp;→ 阻塞 → 最小解决 → 继续（Lazy Eval）<br />
&nbsp;&nbsp;→ 完成 → ✓ 标记 → 继续（Feedback）<br /><br />

<span className="code-key">【Step 5 · 收尾】</span><br />
&nbsp;&nbsp;□ 完成声明："___ 完成。"<br />
&nbsp;&nbsp;□ 处理中断队列<br />
&nbsp;&nbsp;□ 处理占位符<br /><br />

<span className="code-cm">──────────────────────────────────</span><br />
<span className="code-cm">口诀：先定义 → 再假设 → 立即做 → 卡点解 → 小步走</span>
      </CodeBlock>

      <h2 className="section-heading">⏱️ 不同时间块的配置建议</h2>
      <table className="wiki-table">
        <thead><tr><th>时间块</th><th>适合任务</th><th>反馈颗粒度</th><th>Wishful 深度</th></tr></thead>
        <tbody>
          <tr><td>15–25 分钟</td><td>单一小任务 · 快速启动</td><td>每个段落/函数</td><td>1–2条假设</td></tr>
          <tr><td>45–60 分钟</td><td>中等复杂任务</td><td>每个章节/模块</td><td>3–5条假设</td></tr>
          <tr><td>90 分钟</td><td>深度工作 · 复杂项目</td><td>每个里程碑</td><td>5–7条假设</td></tr>
          <tr><td>90分钟以上</td><td>❌ 不建议单次超过90分钟</td><td>—</td><td>拆分为多Session</td></tr>
        </tbody>
      </table>

      <h2 className="section-heading">🔄 恢复心流：中断后如何重新进入</h2>
      <div className="callout callout-info">
        <div className="callout-title">💡 中断恢复 SOP</div>
        1. 花 60 秒重读 Ontology（对象/动作/状态）<br />
        2. 看上一个完成标记，确认完成了什么<br />
        3. 重新声明当前唯一任务<br />
        4. 在 Wishful 假设下执行第一个动作（哪怕很小）<br />
        <em>通常在 3–5 分钟内重新进入心流状态</em>
      </div>
    </article>
  );
};

export default PageSop;
