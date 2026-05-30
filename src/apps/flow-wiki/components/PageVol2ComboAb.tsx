import React from 'react';
import { CodeBlock } from '../../../theme';

interface PageProps {
  onNavigate: (id: string) => void;
}

const PageVol2ComboAb: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <article className="page fade-in" id="page-vol2-combo-ab">
      <div className="breadcrumb">心流触发 Wiki · 第二卷 › 深层组合 › <span>跨卷双元组合</span></div>
      <h1 className="wiki-title">🔗 跨卷双元组合（A×B 系列）</h1>
      <p className="wiki-subtitle">A 系列（认知骨架）× B 系列（执行工具）= 完整的行动闭环</p>

      <div className="callout callout-info">
        <div className="callout-title">📌 组合逻辑</div>
        A 系列（A1–A5）负责<strong>认知层</strong>：定义结构、消除阻力、保持专注。<br />
        B 系列（B1–B5）负责<strong>执行工具层</strong>：精确完成态，保护中断、锚定恢复。<br />
        跨卷组合 = 认知 × 工具，产生"系统性执行能力"。
      </div>

      <h2 className="section-heading">组合 A1 × B1：Ontology × 完成态设计</h2>
      <div className="combo-tags">
        <span className="tag tag-onto">A1</span> + <span className="tag tag-new">B1</span>
        <span className="combo-label">= 结构骨架 × 精确出口</span>
      </div>
      <p className="body-text">A1 定义了三元组（对象/动作/状态），B1 把"状态"从模糊感觉变为精确可验证的完成态。两者结合是心流触发系统最坚实的地基。</p>

      <CodeBlock label="A1×B1 · COMBO EXAMPLE · 产品需求文档">
        <span className="code-cm">// A1: Ontology 骨架</span><br />
对象: PRD 第二节"用户故事"<br />
动作: 写<br />
状态: ???&nbsp;&nbsp;<span className="code-cm">// 还不精确</span><br /><br />

<span className="code-cm">// B1: 完成态设计（精确化）</span><br />
状态(L2量化): 用户故事条目 ≥ 5 条<br />
状态(L3功能): 每条包含 As/Want/So-that 格式<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ 验收标准 ≥ 2 条<br /><br />

<span className="code-cm">// 组合结果: 执行时用 L2 判断（5条写完了就停）</span><br />
<span className="code-cm">// 收尾时用 L3 质检（格式和验收标准）</span><br />
<span className="code-cm">// 全程零模糊感</span>
      </CodeBlock>

      <h2 className="section-heading">组合 A2 × B5：Wishful Thinking × MVA</h2>
      <div className="combo-tags">
        <span className="tag tag-wish">A2</span> + <span className="tag tag-new">B5</span>
        <span className="combo-label">= 双重启动引擎</span>
      </div>
      <p className="body-text">Wishful 解除"心理上的条件不满足感"，MVA 解除"身体上的行动惯性"。两者叠加，覆盖了所有启动阻力的来源。</p>

      <CodeBlock label="A2×B5 · COMBO EXAMPLE · 极度拖延的任务">
        <span className="code-cm">// 场景: 已拖延 3 天的周报</span><br /><br />

<span className="code-cm">// Step 1: A2 Wishful（解除心理阻力）</span><br />
假设我已经对项目方向很清晰&nbsp;&nbsp;&nbsp;→ 直接写下来<br />
假设表达不需要很完美&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ 直接写草稿<br />
假设领导不会苛求格式&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ 直接用自然语言写<br /><br />

<span className="code-cm">// Step 2: B5 MVA（解除身体惯性）</span><br />
MVA: 打开周报模板文件，写下今天日期<br />
<span className="code-cm">// 这是物理上最小的动作，执行后立刻进入状态</span><br /><br />

<span className="code-cm">// 结果：</span><br />
<span className="code-cm">// A2 让你相信"可以开始了"</span><br />
<span className="code-cm">// B5 让你的手指开始移动</span><br />
<span className="code-cm">// 组合产生双重启动信号 → 几乎无法不开始</span>
      </CodeBlock>

      <h2 className="section-heading">组合 A5 × B2 × B3：单线程 × 中断队列 × 时间围栏</h2>
      <div className="combo-tags">
        <span className="tag tag-exec">A5</span> + <span className="tag tag-new">B2</span> + <span className="tag tag-new">B3</span>
        <span className="combo-label">= 完整注意力保护套件</span>
      </div>
      <p className="body-text">这三个组件共同构成了<strong>注意力的物理基础设施</strong>：A5 是心智模型（只有一个线程），B2 是中断处理机制，B3 是时间容器。缺一不可。</p>

      <CodeBlock label="A5×B2×B3 · 注意力保护套件 · 完整配置">
        <span className="code-cm">// 执行前设置（3分钟）</span><br />
B3 时间围栏:<br />
&nbsp;&nbsp;时长: 45 分钟<br />
&nbsp;&nbsp;计时器: 已启动<br />
&nbsp;&nbsp;通知: 全部静音<br />
&nbsp;&nbsp;声明: "接下来 45 分钟，唯一任务是完成 X"<br /><br />

B2 中断队列:<br />
&nbsp;&nbsp;位置: 桌面左上角便利贴（物理可见）<br />
&nbsp;&nbsp;状态: 空白，准备接收<br /><br />

A5 单线程声明:<br />
&nbsp;&nbsp;当前线程: 任务 X<br />
&nbsp;&nbsp;其他线程: SUSPENDED（挂起到 45 分钟后）<br /><br />

<span className="code-cm">// 执行中</span><br />
发生中断想法 → B2 写入队列（&lt;5秒）→ 继续执行 A5<br /><br />

<span className="code-cm">// 45 分钟后</span><br />
B3 计时器响 → 完成声明 → 处理 B2 队列
      </CodeBlock>

      <h2 className="section-heading">💡 跨卷双元组合速查</h2>
      <div className="combo-grid">
        <div className="combo-card">
          <h4><span className="tag tag-onto">A1</span> × <span className="tag tag-new">B1</span></h4>
          <p>结构骨架 + 精确完成态。最坚实的执行地基。</p>
          <span className="combo-formula">Ontology × Done-State</span>
        </div>
        <div className="combo-card">
          <h4><span className="tag tag-wish">A2</span> × <span className="tag tag-new">B5</span></h4>
          <p>双重启动引擎。覆盖所有启动阻力来源。</p>
          <span className="combo-formula">Wishful × MVA</span>
        </div>
        <div className="combo-card">
          <h4><span className="tag tag-lazy">A3</span> × <span className="tag tag-new">B2</span></h4>
          <p>Lazy Eval 解决真实阻塞，B2 队列存储伪阻塞。精确区分两类中断。</p>
          <span className="combo-formula">Lazy Eval × 中断队列</span>
        </div>
        <div className="combo-card">
          <h4><span className="tag tag-flow">A4</span> × <span className="tag tag-new">B1</span></h4>
          <p>清晰的完成态让 Feedback 信号更强烈，奖励更真实。</p>
          <span className="combo-formula">Feedback × Done-State</span>
        </div>
        <div className="combo-card">
          <h4><span className="tag tag-exec">A5</span> × <span className="tag tag-new">B4</span></h4>
          <p>单线程执行 + 上下文锚点：让任务跨天延续不丢失心流状态。</p>
          <span className="combo-formula">Single-Thread × Anchor</span>
        </div>
        <div className="combo-card">
          <h4><span className="tag tag-onto">A1</span> × <span className="tag tag-new">B4</span></h4>
          <p>Ontology 是任务开始的坐标，锚点是任务暂停的坐标。两点确定执行轨迹。</p>
          <span className="combo-formula">Ontology × Anchor</span>
        </div>
      </div>

      <hr className="wiki-divider" />
      <div className="callout callout-success">
        <div className="callout-title">🎯 下一步</div>
        进入 <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('vol2-combo-triple'); }}><strong>深层三元组合</strong></a> —— 三个 B 系列原子的组合，以及 A+B 跨卷三元协同。
      </div>
    </article>
  );
};

export default PageVol2ComboAb;
