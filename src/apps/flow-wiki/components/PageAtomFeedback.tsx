import React from 'react';
import { CodeBlock } from '../../../theme';

interface PageProps {
  onNavigate: (id: string) => void;
}

const PageAtomFeedback: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <article className="page fade-in" id="page-atom-feedback">
      <div className="breadcrumb">心流触发 Wiki › 原子组件 › <span>A4 · Feedback Loop</span></div>
      <div className="level-header">
        <div className="level-bar">
          <div className="level-dot on"></div><div className="level-dot on"></div>
          <div className="level-dot"></div><div className="level-dot"></div><div className="level-dot"></div>
        </div>
        <span className="level-text">难度 2/5</span>
      </div>
      <h1 className="wiki-title">🔄 A4 · Feedback Loop（即时反馈循环）</h1>
      <p className="wiki-subtitle">让每一个微小完成都产生心理确认，推动下一个动作</p>

      <div className="callout callout-purple">
        <div className="callout-title">💡 核心定义</div>
        <strong>Feedback Loop</strong>：在每个最小动作完成后，立即产生"完成信号"并开始下一个动作。<br />
        核心公式：<code className="inline">执行 → 完成 → 标记 → 微奖励 → 下一动作</code>
      </div>

      <h2 className="section-heading">🧠 神经科学原理</h2>

      <p className="body-text">
        心流状态（Flow State）的神经基础是<strong>多巴胺-奖励回路</strong>的持续激活。
        大脑在"预测奖励"时分泌多巴胺，不是在"获得奖励"时。<br />
        因此，<span className="hl">频繁的小完成 &gt; 偶尔的大完成</span>，在保持动力上更有效。
      </p>

      <div className="pipeline pipeline-compact">
        <div className="pipe-node pipe-node-primary-sm">执行动作</div>
        <div className="pipe-arrow">→</div>
        <div className="pipe-node pipe-node-secondary-sm">感知完成</div>
        <div className="pipe-arrow">→</div>
        <div className="pipe-node pipe-node-purple-sm">标记/确认</div>
        <div className="pipe-arrow">→</div>
        <div className="pipe-node pipe-node-accent-sm">多巴胺↑</div>
        <div className="pipe-arrow">→</div>
        <div className="pipe-node pipe-node-success-sm">下一动作</div>
      </div>

      <h2 className="section-heading">📐 反馈颗粒度设计</h2>

      <p className="body-text">反馈的颗粒度需要与任务匹配。颗粒度太大（反馈太少），动力消失；颗粒度太小（反馈太频），注意力分散：</p>

      <table className="wiki-table">
        <thead>
          <tr><th>任务类型</th><th>推荐反馈单元</th><th>频率</th></tr>
        </thead>
        <tbody>
          <tr><td>写作</td><td>完成一个段落 / 一句完整的话</td><td>每 5–15 分钟</td></tr>
          <tr><td>编程</td><td>完成一个函数 / 一个测试通过</td><td>每 10–30 分钟</td></tr>
          <tr><td>设计</td><td>完成一个组件 / 一个版本截图</td><td>每 15–30 分钟</td></tr>
          <tr><td>分析</td><td>完成一个小结论 / 一个图表</td><td>每 20–40 分钟</td></tr>
        </tbody>
      </table>

      <h2 className="section-heading">📝 案例：极简反馈系统</h2>

      <CodeBlock label="EXAMPLE">
        <span className="code-cm">// 最简单的 Feedback Loop 实现：用纸笔</span><br /><br />

准备: 一张纸 + 笔<br /><br />

执行: 写完文章开头句<br />
完成: ✓ 画一个勾&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-cm">// 物理标记触发大脑"完成感"</span><br />
继续: 写第二句<br /><br />

执行: 写完第二句<br />
完成: ✓ 再画一个勾<br />
继续: 继续下一句<br /><br />

<span className="code-cm">// 5个勾 → 允许自己喝一口咖啡（实体奖励）</span><br /><br />

<span className="code-cm">// 关键：标记动作要即时，不要攒到最后一起打勾</span>
      </CodeBlock>

      <h2 className="section-heading">⚙️ 数字版 Feedback 工具模式</h2>

      <CodeBlock label="DIGITAL PATTERN">
        <span className="code-cm">// 状态机模式（心理模型）</span><br /><br />

State: {'{'}<br />
&nbsp;&nbsp;currentAction: <span className="code-str">"写开头句"</span>,<br />
&nbsp;&nbsp;status: <span className="code-str">"IN_PROGRESS"</span>,<br />
&nbsp;&nbsp;completedCount: <span className="code-val">0</span>,<br />
&nbsp;&nbsp;nextAction: <span className="code-str">"写第一段论点"</span>&nbsp;&nbsp;<span className="code-cm">// 自然浮现，不提前规划</span><br />
{'}'}<br /><br />

<span className="code-cm">// 完成时触发：</span><br />
onComplete() {'{'}<br />
&nbsp;&nbsp;state.completedCount++<br />
&nbsp;&nbsp;state.status = <span className="code-str">"DONE"</span><br />
&nbsp;&nbsp;<span className="code-val">triggerReward</span>()&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-cm">// 微奖励</span><br />
&nbsp;&nbsp;state.currentAction = state.nextAction<br />
&nbsp;&nbsp;state.status = <span className="code-str">"IN_PROGRESS"</span>&nbsp;&nbsp;&nbsp;<span className="code-cm">// 立即进入下一个</span><br />
{'}'}
      </CodeBlock>

      <h2 className="section-heading">✅ 自查清单</h2>
      <ul className="checklist">
        <li><span className="icon">☐</span> 我定义了"完成一个反馈单元"的标准是什么？</li>
        <li><span className="icon">☐</span> 每次完成，我都做了某种标记（物理或数字）？</li>
        <li><span className="icon">☐</span> 标记是即时的（不是攒到最后）？</li>
        <li><span className="icon">☐</span> 下一动作是在当前完成后自然浮现的，不是提前规划的？</li>
      </ul>

      <hr className="wiki-divider" />
      <div className="callout callout-success">
        <div className="callout-title">🎯 下一步</div>
        进入 <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('atom-singlethread'); }}><strong>A5 · Single Thread</strong></a> —— 将注意力锁定为单线程，是心流状态的物理基础。
      </div>
    </article>
  );
};

export default PageAtomFeedback;
