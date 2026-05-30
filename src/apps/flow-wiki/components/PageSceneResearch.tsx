import React from 'react';
import { CodeBlock } from '../../../theme';

interface PageProps {
  onNavigate?: (id: string) => void;
}

const PageSceneResearch: React.FC<PageProps> = () => {
  return (
    <article className="page fade-in" id="page-scene-research">
      <div className="breadcrumb">心流触发 Wiki · 第二卷 › 深层场景 › <span>场景：研究综述</span></div>
      <h1 className="wiki-title">🔭 场景：研究综述</h1>
      <p className="wiki-subtitle">信息量巨大、方向模糊——最需要 Ontology+Lazy Eval 的场景</p>

      <div className="callout callout-info">
        <div className="callout-title">📌 适用范围</div>
        文献综述 · 市场调研报告 · 竞品分析 · 学习笔记整理 · 知识库建设<br />
        <strong>核心挑战</strong>：信息量远超执行容量，容易陷入"只读不写"的信息消费漩涡。
      </div>

      <h2 className="section-heading">🎯 研究综述的核心陷阱</h2>
      <div className="two-col">
        <div className="callout callout-danger">
          <div className="callout-title">❌ 陷阱：无限收集</div>
          先读完所有资料再开始写 → 资料越读越多 → 永远无法开始写 → 产出为零
        </div>
        <div className="callout callout-success">
          <div className="callout-title">✅ 正确：先写骨架再填肉</div>
          用 Ontology 定义综述骨架 → Wishful 假设信息已足够 → 开始写 → Lazy 按需查资料
        </div>
      </div>

      <h2 className="section-heading">📋 研究综述执行卡（V2版）</h2>
      <CodeBlock label="SCENE · 研究综述 · V2 执行卡">
        <span className="code-cm">// ── 准备层 ────────────────────────────────</span><br /><br />

A1 Ontology:<br />
&nbsp;&nbsp;对象: 竞品分析报告 · 第2节"核心功能对比"<br />
&nbsp;&nbsp;动作: 写<br />
&nbsp;&nbsp;状态: 三个竞品 × 四个维度的对比表格完成<br /><br />

B1 完成态(L2): 表格 12 个格子全部填写（允许有[待查]）<br />
B1 完成态(L3): 每格≥1句评价 + 每行有结论句<br /><br />

A2 Wishful:<br />
&nbsp;&nbsp;假设我已阅读所有竞品文档 → 直接写我的判断<br />
&nbsp;&nbsp;假设数据不需要100%精确&nbsp;&nbsp;→ 直接填写当前认知<br /><br />

B3 时间围栏: 45 分钟<br />
B2 中断队列: 准备好<br /><br />

<span className="code-cm">// ── 执行层 ────────────────────────────────</span><br /><br />

执行: 开始填写表格第一行（竞品A）<br />
&nbsp;&nbsp;维度1 "价格": 填写 → 完成<br />
&nbsp;&nbsp;维度2 "集成能力": 不确定具体数字<br />
&nbsp;&nbsp;&nbsp;&nbsp;→ A3 Lazy Eval: 写[待查: 竞品A API数量]<br />
&nbsp;&nbsp;&nbsp;&nbsp;→ 继续填写维度3<br />
&nbsp;&nbsp;维度3 "用户界面": 有主观判断 → 直接写<br />
&nbsp;&nbsp;维度4 "性能": 只知道大概 → 写大概值<br /><br />

完成竞品A一行 → A4: ✓ 标记 → 继续竞品B<br /><br />

<span className="code-cm">// ── 收尾层 ────────────────────────────────</span><br /><br />

B4 锚点: "完成了竞品A/B两行，下次从竞品C开始"<br />
B2 队列处理:<br />
&nbsp;&nbsp;[待查: 竞品A API数量] → 统一查询（5分钟搞定）<br />
&nbsp;&nbsp;[考虑: 加第5个维度] → 暂存，下个Session决定
      </CodeBlock>

      <h2 className="section-heading">🔑 研究综述的特殊原则</h2>
      <ul className="checklist">
        <li><span className="icon">✍️</span><strong>先写观点，再找证据</strong>：用 Wishful 假设你已经知道答案，写出你的判断，再用 Lazy Eval 按需补充引用。</li>
        <li><span className="icon">📦</span><strong>信息框（[待查]占位符）优先于完整性</strong>：一个有 20% 占位符的完整草稿，比 0% 占位符的 20% 草稿更有价值。</li>
        <li><span className="icon">🎯</span><strong>Ontology 约束信息收集范围</strong>：每次 Lazy Eval 查资料时，查完立刻回到 Ontology 定义的范围内，不展开。</li>
      </ul>
    </article>
  );
};

export default PageSceneResearch;
