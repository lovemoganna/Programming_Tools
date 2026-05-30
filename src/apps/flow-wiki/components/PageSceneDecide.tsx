import React from 'react';
import { CodeBlock } from '../../../theme';

interface PageProps {
  onNavigate?: (id: string) => void;
}

const PageSceneDecide: React.FC<PageProps> = () => {
  return (
    <article className="page fade-in" id="page-scene-decide">
      <div className="breadcrumb">心流触发 Wiki › 应用场景 › <span>模糊决策</span></div>
      <h1 className="wiki-title">⚡ 场景：模糊决策</h1>
      <p className="wiki-subtitle">在信息不完整时，用心流触发系统推进思考</p>

      <div className="callout callout-danger">
        <div className="callout-title">❌ 不适用场景提醒</div>
        本方法不适用于<strong>高风险决策</strong>（金融交易、手术、法律）。<br />
        适用范围：职业方向探索 · 项目方案选择 · 工作优先级排序 · 个人规划
      </div>

      <h2 className="section-heading">📋 模糊决策标准卡</h2>

      <CodeBlock label="DECISION FLOW CARD">
        <span className="code-cm">// ── 准备 ──────────────────────────</span><br /><br />

对象: [需要做的决策，一个]<br />
动作: 草拟初步结论<br />
状态: 写出一个可行的 Option A（不是最优解）<br /><br />

假设信息已经足够&nbsp;&nbsp;→ 直接写出当前最倾向的方向<br />
假设方向大致对&nbsp;&nbsp;&nbsp;&nbsp;→ 直接列出执行步骤<br />
假设没有完美方案&nbsp;&nbsp;→ 选择当前最好的，可以迭代<br /><br />

<span className="code-cm">// ── 执行规则 ─────────────────────────</span><br /><br />

✓ 先写出 Option A（你的直觉倾向）<br />
✓ 不允许同时写多个选项（单线程）<br />
✓ 不确定的前提 → [假设：xx] → 继续推导<br />
✓ 完成一个维度分析 → ✓ 标记 → 继续<br /><br />

<span className="code-cm">// ── 关键原则 ─────────────────────────</span><br /><br />

决策的质量 = 在给定信息下的最优解<br />
不是 = 等到所有信息都完整后的解
      </CodeBlock>

      <h2 className="section-heading">🎬 完整案例：职业方向探索（45分钟）</h2>

      <CodeBlock label="EXAMPLE · 职业决策">
        <span className="code-cm">// 场景：纠结要不要转做产品经理</span><br /><br />

<span className="code-cm">// T+0: Ontology</span><br />
对象: 转型产品经理的可行性<br />
动作: 草拟初步判断<br />
状态: 写出一个3条以内的理由支持/反对<br /><br />

<span className="code-cm">// T+2: Wishful Thinking</span><br />
假设我已经了解PM工作内容 → 直接写我的判断<br />
假设我知道自己的核心能力 → 直接对比岗位要求<br />
<span className="code-cm">// 不等待"充分了解"再开始</span><br /><br />

<span className="code-cm">// T+5: 执行 — 写出 Option A</span><br />
初步结论: 可以尝试，但需要补足 [用户研究] 技能<br /><br />

支持理由:<br />
&nbsp;&nbsp;1. 当前具备逻辑思维 + 跨团队协作能力<br />
&nbsp;&nbsp;2. 对产品有天然兴趣（Wishful 假设）<br /><br />

<span className="code-cm">// 遇到阻塞（Lazy Eval）:</span><br />
阻塞: 不知道PM薪资对比<br />
最小解决: 写 [待查：PM vs 当前薪资水平] → 继续<br /><br />

<span className="code-cm">// T+20: ✓ 标记"可行性分析完成"</span><br />
<span className="code-cm">// 自然进入下一维度："转型路径"</span><br /><br />

<span className="code-cm">// T+45: 产出</span><br />
<span className="code-cm">// 一份 3–4 个维度的粗略决策草稿</span><br />
<span className="code-cm">// 可以拿去和朋友/导师讨论，快速迭代</span>
      </CodeBlock>

      <div className="callout callout-info">
        <div className="callout-title">💡 关键洞察</div>
        模糊决策中，心流触发系统的作用不是"得出最优解"，而是：<br />
        <strong>将"思维卡顿"转化为"可讨论的草稿"</strong>。<br />
        草稿是思维的外化，外化后才能迭代。等待完美方案 = 永远不开始迭代。
      </div>
    </article>
  );
};

export default PageSceneDecide;
