import React from 'react';
import { CodeBlock } from '../../../theme';

interface PageProps {
  onNavigate: (id: string) => void;
}

const PageAtomOntology: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <article className="page fade-in" id="page-atom-ontology">
      <div className="breadcrumb">心流触发 Wiki › 原子组件 › <span>A1 · Ontology</span></div>
      <div className="level-header">
        <div className="level-bar">
          <div className="level-dot on"></div><div className="level-dot on"></div>
          <div className="level-dot"></div><div className="level-dot"></div><div className="level-dot"></div>
        </div>
        <span className="level-text">难度 2/5</span>
      </div>
      <h1 className="wiki-title">🧱 A1 · Ontology 本体建模</h1>
      <p className="wiki-subtitle">用最小结构骨架定义"你正在对付的世界"</p>

      <div className="callout callout-purple">
        <div className="callout-title">💡 核心定义</div>
        <strong>Ontology（本体）</strong>是对"某个领域中存在什么"的形式化描述。<br />
        在心流触发中，它回答一个问题：<em>「我正在对付的世界里，有哪些对象？它们之间什么关系？」</em>
      </div>

      <h2 className="section-heading">🎯 最小 Ontology 三元组</h2>
      <p className="body-text">无论任务多复杂，都只需要识别 3 个元素：</p>

      <div className="onto-triplet-grid">
        <div className="onto-triplet-card onto-triplet-what">
          <div className="onto-triplet-icon">📦</div>
          <div className="onto-triplet-label">对象（What）</div>
          <div className="onto-triplet-desc">操作对象是什么？<br />一个具体名词</div>
        </div>
        <div className="onto-triplet-card onto-triplet-do">
          <div className="onto-triplet-icon">⚡</div>
          <div className="onto-triplet-label">动作（Do）</div>
          <div className="onto-triplet-desc">要对它做什么？<br />一个具体动词</div>
        </div>
        <div className="onto-triplet-card onto-triplet-done">
          <div className="onto-triplet-icon">✅</div>
          <div className="onto-triplet-label">完成态（Done）</div>
          <div className="onto-triplet-desc">完成是什么样子？<br />一个可验证状态</div>
        </div>
      </div>

      <h2 className="section-heading">📝 案例一：文章写作</h2>
      <p className="body-text">场景：你打算写一篇关于远程工作的文章，但不知从何开始。</p>

      <CodeBlock label="EXAMPLE 01">
        <span className="code-cm">// ❌ 错误：目标描述（过程导向，产生焦虑）</span>
目标: 写一篇很好的关于远程工作的深度文章

<span className="code-cm">// ✅ 正确：Ontology 三元组（状态导向，触发行动）</span>
对象: 文章第一段  <span className="code-cm">// 具体化！不是"文章"</span>
动作: 写          <span className="code-cm">// 原子动作</span>
状态: 150字草稿已完成  <span className="code-cm">// 可验证！</span>
      </CodeBlock>

      <div className="callout callout-warn">
        <div className="callout-title">⚠️ 关键陷阱</div>
        "写一篇文章"不是 Ontology，它是<strong>模糊意图</strong>。<br />
        Ontology 必须具体到"<strong>哪个对象的哪个部分，完成后是什么可见状态</strong>"。
      </div>

      <h2 className="section-heading">💻 案例二：编程任务</h2>

      <CodeBlock label="EXAMPLE 02">
        <span className="code-cm">// 场景：开发用户登录功能</span>

<span className="code-cm">// ❌ 错误</span>
目标: 做好登录系统

<span className="code-cm">// ✅ 正确 · Ontology 三元组</span>
对象: LoginForm 组件
动作: 实现
状态: 表单可提交 + 校验通过 + 显示错误信息

<span className="code-cm">// 注意：状态要"可验证"，不要写"做好"、"完善"这类词</span>
      </CodeBlock>

      <h2 className="section-heading">🧩 底层原理：为什么 Ontology 有效？</h2>

      <p className="body-text">
        <strong>认知科学角度</strong>：模糊目标激活大脑的"威胁感知"系统（杏仁核），产生焦虑。
        而具体化的状态描述激活"奖励预测"回路，触发多巴胺分泌，推动行动。
      </p>
      <p className="body-text">
        <strong>计算机科学类比</strong>：Ontology 等价于程序中的 <code className="inline">类型定义（Type Definition）</code>。<br />
        在执行前先定义"输入类型"和"输出类型"，编译器（大脑）就知道如何处理。<br />
        没有类型定义的程序 = 运行时错误不断。
      </p>

      <h2 className="section-heading">✅ 自查清单</h2>
      <ul className="checklist">
        <li><span className="icon">☐</span> 对象是具体的名词，不是抽象概念吗？</li>
        <li><span className="icon">☐</span> 动作是原子操作（不可再拆分）吗？</li>
        <li><span className="icon">☐</span> 完成态是可以验证的吗（别人也能判断）？</li>
        <li><span className="icon">☐</span> 三元组在 30 秒内能读完并理解吗？</li>
      </ul>

      <hr className="wiki-divider" />
      <div className="callout callout-success">
        <div className="callout-title">🎯 下一步</div>
        掌握 A1 后，进入 <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('atom-wishful'); }}><strong>A2 · Wishful Thinking</strong></a> —— 在 Ontology 骨架上，假设所有条件都已满足，写出理想执行路径。
      </div>
    </article>
  );
};

export default PageAtomOntology;
