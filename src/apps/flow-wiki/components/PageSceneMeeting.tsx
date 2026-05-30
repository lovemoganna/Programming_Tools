import React from 'react';
import { CodeBlock } from '../../../theme';

interface PageProps {
  onNavigate?: (id: string) => void;
}

const PageSceneMeeting: React.FC<PageProps> = () => {
  return (
    <article className="page fade-in" id="page-scene-meeting">
      <div className="breadcrumb">心流触发 Wiki · 第二卷 › 深层场景 › <span>场景：会议准备</span></div>
      <h1 className="wiki-title">🗣️ 场景：会议准备</h1>
      <p className="wiki-subtitle">时间紧，信息多、压力大——用 MVA + 时间围栏快速产出</p>

      <div className="callout callout-warn">
        <div className="callout-title">⚠️ 场景特殊性</div>
        会议准备往往在最后 30–60 分钟进行，此时焦虑感最高，最容易触发"过度规划但不产出"的反模式。<br />
        解法：<strong>压缩准备时间 = 强制使用 MVA + Wishful + 极小完成态</strong>。
      </div>

      <h2 className="section-heading">📐 会议准备的 Ontology 模板</h2>
      <CodeBlock label="SCENE · 会议准备 · Ontology 模板">
        <span className="code-cm">// 不同会议类型的标准 Ontology</span><br /><br />

<span className="code-cm">// 类型1: 汇报会议</span><br />
对象: 汇报提纲<br />
动作: 写<br />
B1完成态: 包含「背景/进展/问题/请求」4个模块，每模块≥1句<br /><br />

<span className="code-cm">// 类型2: 讨论会议</span><br />
对象: 讨论议题清单<br />
动作: 整理<br />
B1完成态: ≥3个具体问题，每个问题有1句背景说明<br /><br />

<span className="code-cm">// 类型3: 客户沟通</span><br />
对象: 关键信息卡片<br />
动作: 准备<br />
B1完成态: 包含「我方立场 + 预期对方问题×3 + 底线」<br /><br />

<span className="code-cm">// 通用 Wishful:</span><br />
假设我对内容很熟悉&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ 直接写要点（不要完整句子）<br />
假设对方会认真听&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ 直接表达核心观点<br />
假设准备时间足够&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ 按优先级逐项完成
      </CodeBlock>

      <h2 className="section-heading">⏱️ 30 分钟极速准备协议</h2>
      <div className="step-card">
        <div className="step-num step-num-danger">0'</div>
        <div className="step-body">
          <h4>T+0：B5 MVA 冷启动（1分钟）</h4>
          <p>MVA：打开新文档，写下会议名称和时间。<br />
          不要想内容，只做这一个动作，多巴胺触发，阻力下降。</p>
        </div>
      </div>
      <div className="step-card">
        <div className="step-num step-num-accent">1'</div>
        <div className="step-body">
          <h4>T+1：A1+B1 定结构（2分钟）</h4>
          <p>选择对应会议类型的 Ontology 模板，确定完成态（如"4个模块，每模块1句"）。<br />
          B3：设置 25 分钟时间围栏。</p>
        </div>
      </div>
      <div className="step-card">
        <div className="step-num step-num-primary">3'</div>
        <div className="step-body">
          <h4>T+3：A2 Wishful + 立刻执行（20分钟）</h4>
          <p>假设所有信息已在脑中 → 开始写第一个模块（不管质量，先有再好）。<br />
          遇到"这里不确定" → A3 Lazy：写【？】占位符，继续下一模块。<br />
          完成每个模块 → A4：✓ 标记。</p>
        </div>
      </div>
      <div className="step-card">
        <div className="step-num step-num-success">25'</div>
        <div className="step-body">
          <h4>T+25：质检 + B2 队列处理（5分钟）</h4>
          <p>B1 L3 质检：对照完成态标准逐项检查。<br />
          处理【？】占位符：填写、或接受"不知道"作为答案。<br />
          完成声明："会议准备完成。"</p>
        </div>
      </div>

      <div className="callout callout-info">
        <div className="callout-title">💡 关键洞察：不完美的准备优于完美的焦虑</div>
        一份有 3 个【？】的完整提纲，比一份在脑中反复推演但没写出来的"完美方案"，在会议中更有价值。<br />
        写出来的东西可以被快速修改；脑中的东西在压力下会崩溃。
      </div>
    </article>
  );
};

export default PageSceneMeeting;
