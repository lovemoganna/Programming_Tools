import React from 'react';
import { CodeBlock } from '../../../theme';

interface PageProps {
  onNavigate?: (id: string) => void;
}

const PageMetaEnergy: React.FC<PageProps> = () => {
  return (
    <article className="page fade-in" id="page-meta-energy">
      <div className="breadcrumb">心流触发 Wiki · 第二卷 › 元认知层 › <span>能量管理与心流</span></div>
      <h1 className="wiki-title">⚡ 能量管理与心流</h1>
      <p className="wiki-subtitle">心流技巧只是杠杆，能量状态才是支点</p>

      <div className="callout callout-purple">
        <div className="callout-title">💡 核心命题</div>
        所有心流触发技巧（A+B 系列）都有一个前提：<strong>存在可以被调动的认知能量</strong>。<br />
        能量不足时，技巧会失效。因此能量管理是心流系统的"基础设施层"，位于所有原子组件之下。
      </div>

      <h2 className="section-heading">📊 能量-心流关系模型</h2>
      <table className="wiki-table">
        <thead><tr><th>能量状态</th><th>心流可达性</th><th>推荐策略</th></tr></thead>
        <tbody>
          <tr>
            <td>🔋🔋🔋 高能量（早上/休息后）</td>
            <td>容易触发，可维持 90 分钟</td>
            <td>安排最重要/最复杂的任务</td>
          </tr>
          <tr>
            <td>🔋🔋 中等能量（午后）</td>
            <td>需要 B5 MVA 协助启动</td>
            <td>安排中等难度任务；避免创作型工作</td>
          </tr>
          <tr>
            <td>🔋 低能量（疲惫时）</td>
            <td>很难触发深度心流</td>
            <td>只做 L2 量化完成态的简单任务；或休息</td>
          </tr>
          <tr>
            <td>🪫 耗尽（睡眠不足/极度压力）</td>
            <td>❌ 不要尝试触发心流</td>
            <td>先解决生理需求；所有技巧此时无效</td>
          </tr>
        </tbody>
      </table>

      <h2 className="section-heading">🔋 能量补充的最小有效方案</h2>
      <div className="combo-grid">
        <div className="combo-card">
          <h4>😴 睡眠（核心）</h4>
          <p>7–8小时睡眠是认知能量最强的来源。无可替代。熬夜后任何心流技巧效果减半。</p>
          <span className="combo-formula">不可替代 · 优先级 #1</span>
        </div>
        <div className="combo-card">
          <h4>🏃 短暂运动</h4>
          <p>执行 Session 之间：5分钟快走或10次深蹲。BDNF（脑源性神经营养因子）短暂提升，专注力增加。</p>
          <span className="combo-formula">Session 间 · 5分钟</span>
        </div>
        <div className="combo-card">
          <h4>🌬️ 生理性叹气</h4>
          <p>双吸气（鼻子两次快速吸气）+ 慢慢呼气。60秒内降低皮质醇，适合焦虑导致的能量耗散。</p>
          <span className="combo-formula">即时生效 · &lt;60秒</span>
        </div>
        <div className="combo-card">
          <h4>🧠 认知切换休息</h4>
          <p>Session 结束后 10 分钟：完全不思考任务相关内容（不是刷手机）。发呆/喝水/窗外凝视。</p>
          <span className="combo-formula">Session 后 · 10分钟</span>
        </div>
      </div>

      <h2 className="section-heading">🗓️ 日程设计原则（与心流系统配合）</h2>
      <CodeBlock label="ENERGY-AWARE SCHEDULE">
        <span className="code-cm">// 理想的能量-任务匹配日程：</span><br /><br />

07:00–09:00&nbsp;&nbsp;【高能量 · 深度工作】<br />
&nbsp;&nbsp;→ V2 完整系统 · 90分钟围栏<br />
&nbsp;&nbsp;→ 最重要的创作/分析/编程任务<br /><br />

09:30–10:30&nbsp;&nbsp;【高能量尾段 · 中等复杂】<br />
&nbsp;&nbsp;→ 会议准备 / 核心邮件 / 决策<br /><br />

12:30–14:00&nbsp;&nbsp;【午后低谷】<br />
&nbsp;&nbsp;→ 不安排心流要求高的任务<br />
&nbsp;&nbsp;→ 简单整理 / 会议 / 机械任务<br /><br />

14:30–16:30&nbsp;&nbsp;【下午回升 · 中等能量】<br />
&nbsp;&nbsp;→ 45分钟围栏 · 中等任务<br />
&nbsp;&nbsp;→ 适合执行已规划好的任务（不需要创造）<br /><br />

17:00–18:00&nbsp;&nbsp;【收尾时段】<br />
&nbsp;&nbsp;→ 处理队列 / 写明日锚点 / 低能量任务<br /><br />

<span className="code-cm">// 核心原则: 把心流 Session 放在能量峰值时段</span><br />
<span className="code-cm">// 不要在低能量时段强行触发心流</span>
      </CodeBlock>
    </article>
  );
};

export default PageMetaEnergy;
