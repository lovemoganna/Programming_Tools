import React from 'react';
import { CodeBlock } from '../../../theme';

interface PageProps {
  onNavigate?: (id: string) => void;
}

const PageSceneWrite: React.FC<PageProps> = () => {
  return (
    <article className="page fade-in" id="page-scene-write">
      <div className="breadcrumb">心流触发 Wiki › 应用场景 › <span>写作心流</span></div>
      <h1 className="wiki-title">✍️ 场景：写作心流</h1>
      <p className="wiki-subtitle">将完整系统应用于知识写作 / 内容创作</p>

      <div className="callout callout-info">
        <div className="callout-title">📌 适用写作类型</div>
        文章 · 报告 · 邮件 · 文档 · 脚本 · 策划书 · 读书笔记<br />
        <strong>不适用</strong>：需要大量引用验证的学术论文（精确性要求过高，不适合 Wishful 模式）
      </div>

      <h2 className="section-heading">📋 写作心流标准卡（可复制使用）</h2>

      <CodeBlock label="WRITING FLOW CARD">
        <span className="code-cm">// ── 准备（&lt;3分钟）──────────────────</span><br /><br />

对象: [具体到哪一段/哪一页]<br />
动作: 写<br />
状态: [字数目标或段落完成]<br /><br />

假设思路清晰 → 直接写开头句<br />
假设例子充足 → 直接举例说明<br />
假设表达流畅 → 直接写出来（不修改）<br /><br />

当前唯一任务: [段落名称]<br />
时间围栏: 25分钟<br /><br />

<span className="code-cm">// ── 执行规则 ─────────────────────────</span><br /><br />

✓ 先写，不改（一稿原则）<br />
✓ 不确定的数据 → [待查：xx]<br />
✓ 卡住的表达  → [待改：xx]<br />
✓ 新想法      → 写入中断队列<br /><br />

<span className="code-cm">// ── 完成动作 ─────────────────────────</span><br />
段落完成 → ✓ 标记 → 休息30秒 → 进入下一段
      </CodeBlock>

      <h2 className="section-heading">🎬 完整案例：1500字文章（90分钟）</h2>

      <div className="step-card">
        <div className="step-num step-num-info">0'</div>
        <div className="step-body">
          <h4>T+0：Ontology + Wishful（3分钟）</h4>
          <p>
            对象：文章骨架（标题 + 3个主要论点）<br />
            Wishful：假设思路清晰 → 直接写出3个论点（不管好不好）<br />
            产出：一个粗略骨架，30–50字
          </p>
        </div>
      </div>

      <div className="step-card">
        <div className="step-num step-num-primary">5'</div>
        <div className="step-body">
          <h4>T+5：锁定第一段，启动飞轮</h4>
          <p>
            对象：引言段<br />
            Wishful：假设读者已知背景 → 直接写核心问题<br />
            执行：写出第一句话（这是最关键的启动动作）<br />
            完成：✓ 标记引言段
          </p>
        </div>
      </div>

      <div className="step-card">
        <div className="step-num step-num-secondary">25'</div>
        <div className="step-body">
          <h4>T+25：飞轮全速运转</h4>
          <p>
            此时：你已经完成引言 + 论点一<br />
            状态：开始感受到时间感减弱<br />
            继续：自然进入论点二（不需要重新 Wishful）<br />
            Lazy Eval：遇到"需要引用数据" → [待查] → 继续
          </p>
        </div>
      </div>

      <div className="step-card">
        <div className="step-num step-num-success">85'</div>
        <div className="step-body">
          <h4>T+85：收尾</h4>
          <p>
            产出：1500字草稿<br />
            处理：所有 [待查] 和 [待改] 标记<br />
            声明："草稿写作阶段完成。"（显式终止）<br />
            下一 Session：进入修改阶段（另开一个心流 Session）
          </p>
        </div>
      </div>

      <div className="callout callout-warn">
        <div className="callout-title">⚠️ 写作心流最常见的失败模式</div>
        边写边改 → 从"写"模式切换到"审稿"模式 → 心流中断<br />
        <strong>解决方案：</strong>写作阶段禁止修改。把所有"这里写得不好"的感受写入中断队列，完成后再处理。
      </div>
    </article>
  );
};

export default PageSceneWrite;
