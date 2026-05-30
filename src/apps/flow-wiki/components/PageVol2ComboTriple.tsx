import React from 'react';
import { CodeBlock } from '../../../theme';

interface PageProps {
  onNavigate: (id: string) => void;
}

const PageVol2ComboTriple: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <article className="page fade-in" id="page-vol2-combo-triple">
      <div className="breadcrumb">心流触发 Wiki · 第二卷 › 深层组合 › <span>深层三元组合</span></div>
      <h1 className="wiki-title">🔗 深层三元组合（B 系列 + 跨卷）</h1>
      <p className="wiki-subtitle">三个工具协同，覆盖执行的完整生命周期</p>

      <h2 className="section-heading">三元组 1：B2 × B3 × B4（执行保护三件套）</h2>
      <div className="mb-2.5">
        <span className="tag tag-new">B2 中断队列</span> + <span className="tag tag-new">B3 时间围栏</span> + <span className="tag tag-new">B4 上下文锚点</span>
      </div>
      <p className="body-text">这三个工具覆盖了执行的<strong>完整时间轴</strong>：B3 定义"这一次执行的边界"，B2 在执行中保护专注，B4 在执行结束时保存状态。三者合一，让执行变成可持续的系统，而不是一次性的冲刺。</p>

      <CodeBlock label="B2×B3×B4 · 执行保护三件套 · 完整协议">
        <span className="code-cm">// === 执行前（B3 时间围栏启动）===</span><br />
B4 读取上次锚点:<br />
&nbsp;&nbsp;"上次停在第3章第2节，下一步写 3.2.1 标题+定义句"<br />
B3 设置时间围栏: 45 分钟<br />
B2 清空中断队列，备用<br /><br />

<span className="code-cm">// === 执行中（B2 持续运行）===</span><br />
写 3.2.1 → 完成<br />
写 3.2.2 → 中途想到"要不要加一个图表"<br />
&nbsp;&nbsp;→ B2: 写入[考虑: 3.2 图表] → 继续写<br /><br />

<span className="code-cm">// === 执行结束（B3 信号 + B4 记录）===</span><br />
B3: 45分钟计时器响<br />
B4: 写锚点<br />
&nbsp;&nbsp;[1] 当前位置: 第3章3.2.3，已完成开头段<br />
&nbsp;&nbsp;[2] 下一动作: 写3.2.3的第二段（论证部分）<br />
&nbsp;&nbsp;[3] 未决问题: [考虑: 3.2图表]是否需要<br />
&nbsp;&nbsp;[4] 进度: 约 55%<br />
B2: 处理队列<br />
&nbsp;&nbsp;[考虑: 3.2图表] → 决定: 进入下一个Session再看<br /><br />

<span className="code-cm">// 下次启动: 读 B4 锚点 → 90秒恢复 → 继续执行</span>
      </CodeBlock>

      <h2 className="section-heading">三元组 2：A1 × B1 × B5（启动精确三件套）</h2>
      <div className="mb-2.5">
        <span className="tag tag-onto">A1 Ontology</span> + <span className="tag tag-new">B1 完成态</span> + <span className="tag tag-new">B5 MVA</span>
      </div>
      <p className="body-text">这是<strong>任务启动阶段</strong>的最强组合，专门对付"想很久但迟迟不动"的情况。</p>

      <CodeBlock label="A1×B1×B5 · 启动精确三件套 · 案例">
        <span className="code-cm">// 场景: 需要设计一个新项目的数据库 Schema</span><br />
<span className="code-cm">// 障碍: 感觉太复杂，不知从何入手</span><br /><br />

<span className="code-cm">// Step 1: A1 Ontology（明确世界结构）</span><br />
对象: 用户表（users）的字段设计<br />
动作: 设计并写出 SQL 建表语句<br />
状态: [待精确化]<br /><br />

<span className="code-cm">// Step 2: B1 完成态设计（精确出口）</span><br />
L2 完成态: users 表建表语句已写完，字段 ≥ 6 个<br />
L3 完成态: 包含 id, email, password_hash, created_at<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ 至少一个业务字段 + NOT NULL 约束已设置<br /><br />

<span className="code-cm">// Step 3: B5 MVA（触发第一个动作）</span><br />
MVA: 打开代码编辑器，新建文件 schema.sql<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;输入第一行: CREATE TABLE users (<br /><br />

<span className="code-cm">// 结果:</span><br />
A1 → 知道在对付什么（users表）<br />
B1 → 知道什么时候可以停（6个字段）<br />
B5 → 知道现在怎么动（打开文件，输入第一行）<br />
<span className="code-cm">// 三个问题全部回答 → 立即开始，无焦虑</span>
      </CodeBlock>

      <h2 className="section-heading">三元组 3：A2 × A4 × B4（跨日持续动力三件套）</h2>
      <div className="mb-2.5">
        <span className="tag tag-wish">A2 Wishful</span> + <span className="tag tag-flow">A4 Feedback</span> + <span className="tag tag-new">B4 锚点</span>
      </div>
      <p className="body-text">适合<strong>持续多天的长项目</strong>。每天用 Wishful 重新启动假设，用 Feedback 保持当日动力，用锚点保存状态给明天的自己。</p>

      <CodeBlock label="A2×A4×B4 · 跨日持续动力 · 3天项目示例">
        <span className="code-cm">// Day 1 早上</span><br />
A2 Wishful: "假设我已经对项目方向很清晰 → 直接开始第一章"<br />
执行 → 完成第一章 → A4: ✓ 标记<br />
B4 锚点: "下次从第二章开始，先写章节标题和核心论点句"<br /><br />

<span className="code-cm">// Day 2 早上（从锚点恢复）</span><br />
读 B4 锚点 → 90秒恢复上下文<br />
A2 Wishful: "假设昨天的工作成果是好的 → 直接在此基础上继续"<br />
执行 → 完成第二章 → A4: ✓ 标记<br />
B4 锚点: "下次从第三章开始，论点已在脑中，直接写"<br /><br />

<span className="code-cm">// Day 3 早上</span><br />
读 B4 锚点 → 立刻执行<br />
A4 回顾: 2天已完成 2/3 → 成就感触发 → 动力最高峰<br />
执行 → 完成第三章 → 项目收尾<br /><br />

<span className="code-cm">// 关键: 锚点保证连续性，Wishful 每天重置阻力，Feedback 保持情绪势能</span>
      </CodeBlock>

      <hr className="wiki-divider" />
      <div className="callout callout-success">
        <div className="callout-title">🎯 下一步</div>
        进入 <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('vol2-system'); }}><strong>双卷融合系统</strong></a> —— 将 A 系列（5个）+ B 系列（5个）全部整合，构建完整的第二代心流触发系统。
      </div>
    </article>
  );
};

export default PageVol2ComboTriple;
