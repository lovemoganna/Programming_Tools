import React from 'react';
import { CodeBlock } from '../../../theme';

interface PageProps {
  onNavigate: (id: string) => void;
}

const PageB1CompletionState: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <article className="page fade-in" id="page-b1-completion-state">
      <div className="breadcrumb">心流触发 Wiki · 第二卷 › 深层原子 › <span>B1 · 完成态设计</span></div>
      <div className="flex items-center gap-2.5 mb-1.5">
        <div className="level-bar">
          <div className="level-dot on"></div><div className="level-dot on"></div><div className="level-dot on"></div>
          <div className="level-dot"></div><div className="level-dot"></div>
        </div>
        <span className="text-xs text-slate-500">难度 3/5 · 第二卷原子 B1</span>
      </div>
      <h1 className="wiki-title">🎯 B1 · 完成态设计（Done-State Design）</h1>
      <p className="wiki-subtitle">「完成」不是感觉，而是一个可验证的系统状态</p>

      <div className="callout callout-purple">
        <div className="callout-title">💡 核心定义</div>
        <strong>完成态（Done State）</strong>：一个任务的"完成"必须在执行前就被精确定义，且由第三方可独立验证。<br />
        它是 A1·Ontology 中"状态（Done）"字段的深化版，专门研究<em>如何把模糊的完成感转化为精确的完成态</em>。
      </div>

      <h2 className="section-heading">🔬 为什么"感觉完成了"不够</h2>
      <p className="body-text">
        人类大脑对"完成"的判断极易被<strong>情绪状态</strong>污染：疲惫时觉得"差不多了"，焦虑时觉得"还不够好"。<br />
        这两种偏差都会打破心流：前者导致产出不足，后者导致永远无法进入下一步。
      </p>
      <p className="body-text">
        软件工程早就解决了这个问题：<code className="inline">Definition of Done（DoD）</code>。在迭代开始前写好验收标准，完成时对照检查，不靠感觉。
      </p>

      <h2 className="section-heading">📐 完成态的三个层级</h2>
      <table className="wiki-table">
        <thead><tr><th>层级</th><th>名称</th><th>定义方式</th><th>示例</th></tr></thead>
        <tbody>
          <tr>
            <td>L1</td>
            <td><strong>存在性完成</strong></td>
            <td>产出物存在即完成</td>
            <td>"草稿文件已存在"</td>
          </tr>
          <tr>
            <td>L2</td>
            <td><strong>量化完成</strong></td>
            <td>满足数量/尺寸标准</td>
            <td>"草稿字数 ≥ 300"</td>
          </tr>
          <tr>
            <td>L3</td>
            <td><strong>功能性完成</strong></td>
            <td>满足特定功能标准</td>
            <td>"草稿包含：论点句 + 2个例子 + 过渡句"</td>
          </tr>
        </tbody>
      </table>

      <div className="callout callout-info">
        <div className="callout-title">📌 心流触发中的推荐层级</div>
        执行阶段用 <strong>L2 量化完成</strong>（快速判断，不卡顿）；<br />
        收尾阶段用 <strong>L3 功能性完成</strong>（质量把关）。<br />
        切忌在执行中用 L3，否则完美主义会吃掉心流。
      </div>

      <h2 className="section-heading">📝 案例：文章段落的完成态设计</h2>
      <CodeBlock label="B1 · EXAMPLE · 文章写作">
        <span className="code-cm">// ❌ 模糊完成态（产生焦虑循环）</span><br />
完成态: "把第二段写好"<br /><br />

<span className="code-cm">// ✅ L2 量化完成态（执行时用）</span><br />
完成态: 第二段字数 ≥ 180 字，且已写完<br /><br />

<span className="code-cm">// ✅ L3 功能性完成态（收尾时用）</span><br />
完成态:<br />
&nbsp;&nbsp;□ 论点句存在（1句）<br />
&nbsp;&nbsp;□ 支撑例子 ≥ 2个<br />
&nbsp;&nbsp;□ 段落末尾有过渡句<br />
&nbsp;&nbsp;□ 没有【待查】占位符<br /><br />

<span className="code-cm">// 执行时的判断顺序：</span><br />
<span className="code-cm">// 1. 先满足 L2（字数到了 → 可以标记完成）</span><br />
<span className="code-cm">// 2. 收尾时检查 L3（质检，不是执行时的障碍）</span>
      </CodeBlock>

      <h2 className="section-heading">🧩 底层原理：完成态作为"退出条件"</h2>
      <p className="body-text">
        在计算机科学中，任何循环都必须有<strong>退出条件（Exit Condition）</strong>，否则就是死循环。
        人类执行任务时，没有明确完成态 = 认知死循环：不断审查、不断修改、永远不退出。
      </p>
      <CodeBlock label="MENTAL MODEL · 循环类比">
        <span className="code-cm">// 没有完成态 → 死循环</span><br />
<span className="code-kw">while</span> (true) {'{'}<br />
&nbsp;&nbsp;write()<br />
&nbsp;&nbsp;review()&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-cm">// 永远觉得不够好</span><br />
&nbsp;&nbsp;revise()<br />
&nbsp;&nbsp;<span className="code-cm">// 从不退出</span><br />
{'}'}<br /><br />

<span className="code-cm">// 有完成态 → 正常循环</span><br />
<span className="code-kw">while</span> (wordCount &lt; <span className="code-val">180</span>) {'{'}
&nbsp;&nbsp;write()<br />
{'}'}<br />
<span className="code-cm">// 退出！进入下一个任务单元</span>
      </CodeBlock>

      <h2 className="section-heading">✅ 自查清单</h2>
      <ul className="checklist">
        <li><span className="icon">☐</span> 执行前，我写出了一个具体的完成态（不是"写好"、"完善"）？</li>
        <li><span className="icon">☐</span> 完成态是量化的，或有具体的结构要求？</li>
        <li><span className="icon">☐</span> 我在执行时用 L2 判断，不用 L3 卡住自己？</li>
        <li><span className="icon">☐</span> 完成态让我知道"什么时候可以停下来"？</li>
      </ul>

      <hr className="wiki-divider" />
      <div className="callout callout-success">
        <div className="callout-title">🎯 下一步</div>
        进入 <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('b2-interrupt-queue'); }}><strong>B2 · 中断队列</strong></a> —— 学习如何用一个极简工具保护单线程，让插队的想法"安全着陆"而不打断心流。
      </div>
    </article>
  );
};

export default PageB1CompletionState;
