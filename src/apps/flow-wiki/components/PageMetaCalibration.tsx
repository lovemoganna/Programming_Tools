import React from 'react';
import { CodeBlock } from '../../../theme';

interface PageProps {
  onNavigate?: (id: string) => void;
}

const PageMetaCalibration: React.FC<PageProps> = () => {
  return (
    <article className="page fade-in" id="page-meta-calibration">
      <div className="breadcrumb">心流触发 Wiki · 第二卷 › 元认知层 › <span>系统校准手册</span></div>
      <h1 className="wiki-title">🎛️ 系统校准手册</h1>
      <p className="wiki-subtitle">定期诊断系统健康度，防止方法论僵化</p>

      <div className="callout callout-info">
        <div className="callout-title">📌 为什么需要校准？</div>
        任何执行系统使用 2–4 周后都会出现<strong>局部僵化</strong>：某些步骤变成机械重复、某些工具不再适合当前任务类型、某些习惯产生了新的反模式。<br />
        校准 = 定期用 MECE 原则审视系统，找到需要调整的参数。
      </div>

      <h2 className="section-heading">📋 每周校准表（15分钟）</h2>
      <CodeBlock label="WEEKLY CALIBRATION · 15 分钟">
        <span className="code-cm">// 每周五或周日，花 15 分钟回答以下问题：</span><br /><br />

<span className="code-key">【产出回顾】</span><br />
□ 本周完成了哪些 Session？（数量）<br />
□ 平均每个 Session 的完成质量（1-5分）<br />
□ 最高效的 Session 发生在什么时候？（时段/状态）<br /><br />

<span className="code-key">【工具诊断】</span><br />
□ Ontology 是否花了太长时间？（&gt;5分钟 = 目标太大）<br />
□ Wishful 是否有效降低了阻力？（否 = 假设不够具体）<br />
□ 中断队列积压了多少未处理条目？（&gt;10 = 处理频率不足）<br />
□ 上下文锚点是否准确帮助恢复？（否 = 锚点不够精确）<br /><br />

<span className="code-key">【反模式检测】</span><br />
□ 是否出现"系统崇拜"（花时间完善方法，不产出）？<br />
□ 是否出现"完美主义反弹"（L3 在执行层使用）？<br />
□ 是否出现"队列逃避"（写入队列但从不处理）？<br /><br />

<span className="code-key">【下周调整】</span><br />
需要调整的参数: _______________<br />
具体调整方式: _______________
      </CodeBlock>

      <h2 className="section-heading">📊 系统健康度指标</h2>
      <table className="wiki-table">
        <thead><tr><th>指标</th><th>健康值</th><th>警报值</th><th>干预方式</th></tr></thead>
        <tbody>
          <tr><td>启动时间</td><td>&lt; 5 分钟</td><td>&gt; 15 分钟</td><td>检查 Ontology 是否过度；使用 B5 MVA</td></tr>
          <tr><td>Session 完成率</td><td>&gt; 80%</td><td>&lt; 50%</td><td>缩短时间围栏；降低完成态至 L2</td></tr>
          <tr><td>锚点恢复时间</td><td>&lt; 90 秒</td><td>&gt; 10 分钟</td><td>锚点精度不足；检查字段 [2] 下一动作是否具体</td></tr>
          <tr><td>心流频率</td><td>每周 3+ 次</td><td>每周 0–1 次</td><td>检查能量状态；重新安排任务时段</td></tr>
          <tr><td>队列积压</td><td>&lt; 5 条</td><td>&gt; 20 条</td><td>增加队列处理频率；减少 Session 时长</td></tr>
        </tbody>
      </table>

      <h2 className="section-heading">🔄 系统迭代的正确姿势</h2>
      <p className="body-text">
        校准的目标<strong>不是创造一个新系统</strong>，而是在现有系统中<strong>调整 1–2 个参数</strong>。<br />
        每次校准只改一件事，下周观察效果，形成"校准 → 执行 → 观察 → 再校准"的元闭环。
      </p>

      <div className="callout callout-warn">
        <div className="callout-title">⚠️ 校准的边界</div>
        校准是在方法论<strong>框架内</strong>调整参数，不是质疑框架本身。<br />
        如果校准后仍然感觉系统无效，先检查是否在"低能量时段"使用系统，而不是急于否定方法论。<br />
        大多数"系统失效"的案例，真正的原因是<strong>能量透支</strong>，不是方法问题。
      </div>
    </article>
  );
};

export default PageMetaCalibration;
