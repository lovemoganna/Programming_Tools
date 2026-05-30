import React from 'react';
import { CodeBlock } from '../../../theme';

interface PageProps {
  onNavigate: (id: string) => void;
}

const PageCombo3: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <article className="page fade-in" id="page-combo-3">
      <div className="breadcrumb">心流触发 Wiki › 组合模式 › <span>L3 · 三元组合</span></div>
      <h1 className="wiki-title">🔗 L3 · 三元组合模式</h1>
      <p className="wiki-subtitle">C(5,3) = 10 种组合 · 精选最高价值的 2 种完整案例</p>

      <h2 className="section-heading">核心三元组 1：Ontology × Wishful × Single Thread</h2>
      <div className="mb-2.5">
        <span className="tag tag-onto">A1</span> + <span className="tag tag-wish">A2</span> + <span className="tag tag-exec">A5</span>
        <span className="combo-formula inline-block ml-2.5">= 零启动阻力 · 深度专注系统</span>
      </div>

      <p className="body-text">这是最适合"知道要做什么，但容易分心"的人。三个组件分别负责：<strong>确定方向 → 消除阻力 → 锁定注意力</strong>。</p>

      <CodeBlock label="COMBO EXAMPLE · 25分钟写作冲刺">
        <span className="code-cm">// === 准备阶段（5分钟）===</span><br /><br />

<span className="code-cm">// A1: Ontology</span><br />
对象: 文章第二段<br />
动作: 写<br />
状态: 250字完整段落<br /><br />

<span className="code-cm">// A2: Wishful Thinking</span><br />
假设论点已清晰 → 直接写论点句<br />
假设例子已准备好 → 直接举例<br />
假设语言流畅 → 直接写出来<br /><br />

<span className="code-cm">// A5: 单线程声明</span><br />
当前唯一任务: 写文章第二段<br />
中断队列: 准备好（纸笔放旁边）<br />
时间围栏: 25分钟（计时器启动）<br /><br />

<span className="code-cm">// === 执行阶段（25分钟）===</span><br />
执行: 按 Wishful 路径第一步开始<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;任何插队想法 → 写入中断队列<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;任何"以后怎么做" → 不处理<br /><br />

<span className="code-cm">// 涌现效应：</span><br />
<span className="code-cm">// 时间感减弱 + 输出连续 + 决策压力为零</span>
      </CodeBlock>

      <h2 className="section-heading">核心三元组 2：Wishful × Lazy Eval × Feedback</h2>
      <div className="mb-2.5">
        <span className="tag tag-wish">A2</span> + <span className="tag tag-lazy">A3</span> + <span className="tag tag-flow">A4</span>
        <span className="combo-formula inline-block ml-2.5">= 全程无焦虑执行引擎</span>
      </div>

      <p className="body-text">这是最适合"任务模糊、信息不全"情况的三元组。三个组件分别负责：<strong>解除启动阻力 → 解除执行阻塞 → 持续补充动力</strong>。覆盖执行全生命周期的焦虑来源。</p>

      <CodeBlock label="COMBO EXAMPLE · 模糊项目开工">
        <span className="code-cm">// 场景：需要分析竞品，但不知道分析什么维度</span><br /><br />

<span className="code-cm">// A2: Wishful Thinking（解除启动阻力）</span><br />
假设我知道所有分析维度 → 直接开始写<br />
假设资料充足&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ 直接写第一个维度<br /><br />

<span className="code-cm">// 立即开始执行：</span><br />
动作: 写"产品定位"维度分析（随意开始）<br /><br />

<span className="code-cm">// 遇到阻塞（触发 A3: Lazy Eval）：</span><br />
阻塞: 不知道竞品用户规模数据<br />
最小解决: 写"[待补充：用户规模数据]"<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;继续写下一句话<br /><br />

<span className="code-cm">// 完成"产品定位"维度（触发 A4: Feedback）：</span><br />
标记: ✓ 产品定位完成<br />
感受: 小小的成就感<br />
继续: 自然进入下一维度"核心功能"<br /><br />

<span className="code-cm">// 3小时后：</span><br />
<span className="code-cm">// 产出：5个维度的分析草稿</span><br />
<span className="code-cm">// 感受：高效 + 满足感 + 不疲惫</span>
      </CodeBlock>

      <h2 className="section-heading">⚙️ 三元组速查表</h2>
      <table className="wiki-table">
        <thead>
          <tr><th>三元组合</th><th>解决什么问题</th><th>最佳场景</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><span className="tag tag-onto">A1</span>+<span className="tag tag-wish">A2</span>+<span className="tag tag-exec">A5</span></td>
            <td>零阻力启动 + 深度专注</td>
            <td>清晰任务 · 容易分心的人</td>
          </tr>
          <tr>
            <td><span className="tag tag-wish">A2</span>+<span className="tag tag-lazy">A3</span>+<span className="tag tag-flow text-xs">A4</span></td>
            <td>全程无焦虑 · 持续动力</td>
            <td>模糊任务 · 信息不全</td>
          </tr>
          <tr>
            <td><span className="tag tag-onto">A1</span>+<span className="tag tag-lazy">A3</span>+<span className="tag tag-flow text-xs">A4</span></td>
            <td>大任务分解 + 持续推进</td>
            <td>长周期项目 · 里程碑管理</td>
          </tr>
          <tr>
            <td><span className="tag tag-onto">A1</span>+<span className="tag tag-wish">A2</span>+<span className="tag tag-lazy">A3</span></td>
            <td>明确方向 · 灵活路径</td>
            <td>研究型任务 · 探索型工作</td>
          </tr>
          <tr>
            <td><span className="tag tag-onto">A1</span>+<span className="tag tag-flow text-xs">A4</span>+<span className="tag tag-exec">A5</span></td>
            <td>单点极致聚焦</td>
            <td>高强度短冲刺 · 深度工作</td>
          </tr>
        </tbody>
      </table>

      <hr className="wiki-divider" />
      <div className="callout callout-success">
        <div className="callout-title">🎯 下一步</div>
        进入 <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('combo-full'); }}><strong>L5 · 完整系统</strong></a> —— 五个原子的完整整合，理解"心流涌现"的完整机制。
      </div>
    </article>
  );
};

export default PageCombo3;
