import React from 'react';
import { CodeBlock } from '../../../theme';

interface PageProps {
  onNavigate?: (id: string) => void;
}

const PageSceneCode: React.FC<PageProps> = () => {
  return (
    <article className="page fade-in" id="page-scene-code">
      <div className="breadcrumb">心流触发 Wiki › 应用场景 › <span>编程心流</span></div>
      <h1 className="wiki-title">💻 场景：编程心流</h1>
      <p className="wiki-subtitle">将完整系统应用于软件开发 / 技术实现</p>

      <h2 className="section-heading">📋 编程心流标准卡</h2>

      <CodeBlock label="CODING FLOW CARD">
<span className="code-cm">// ── 准备（&lt;3分钟）──────────────────</span><br /><br />

对象: [函数名 / 组件名 / 功能模块]<br />
动作: 实现<br />
状态: [测试可通过 / 功能可演示]<br /><br />

假设我知道所有 API  → 直接写理想实现（伪代码也行）<br />
假设数据结构已定&nbsp;&nbsp;&nbsp;&nbsp;→ 直接操作数据<br />
假设边界case已处理&nbsp;&nbsp;→ 先写主流程<br /><br />

当前唯一任务: [单一函数或组件]<br />
时间围栏: 25–45分钟<br /><br />

<span className="code-cm">// ── 执行规则 ─────────────────────────</span><br /><br />

✓ 先写主逻辑，边界case用 TODO 标记<br />
✓ API不确定 → 写注释[待查] → 继续<br />
✓ 性能优化想法 → 写入中断队列<br />
✓ 测试通过 → ✓ 标记 → 进入下一函数
      </CodeBlock>

      <h2 className="section-heading">🎬 完整案例：实现用户认证模块</h2>

      <CodeBlock label="REAL CODING EXAMPLE">
<span className="code-cm">// T+0: Ontology</span><br />
对象: authenticate(user, password) 函数<br />
动作: 实现<br />
状态: 单元测试通过，能正确返回 token 或 error<br /><br />

<span className="code-cm">// T+1: Wishful Thinking</span><br />
<span className="code-cm">// 假设 hashPassword, findUser, generateToken 都已存在</span><br />
<span className="code-kw">async function</span> <span className="code-val">authenticate</span>(user, password) {'{'}<br />
&nbsp;&nbsp;<span className="code-kw">const</span> found = <span className="code-kw">await</span> <span className="code-val">findUser</span>(user)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-cm">// 假设存在</span><br />
&nbsp;&nbsp;<span className="code-kw">if</span> (!found) <span className="code-kw">throw</span> <span className="code-kw">new</span> Error(<span className="code-str">'Not found'</span>)<br />
&nbsp;&nbsp;<span className="code-kw">const</span> valid = <span className="code-val">hashPassword</span>(password)&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-cm">// 假设存在</span><br />
&nbsp;&nbsp;<span className="code-kw">return</span> <span className="code-val">generateToken</span>(found)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-cm">// 假设存在</span><br />
{'}'}<br /><br />

<span className="code-cm">// T+5: 开始实现 findUser（Lazy Eval驱动）</span><br />
<span className="code-cm">// 只在"需要用到时"才去实现子函数</span><br />
<span className="code-kw">async function</span> <span className="code-val">findUser</span>(email) {'{'}<br />
&nbsp;&nbsp;<span className="code-cm">// TODO: 这里用 DB.query，具体语法待查</span><br />
&nbsp;&nbsp;<span className="code-kw">return</span> db.users.findOne({'{'} email {'}'})<br />
{'}'}<br /><br />

<span className="code-cm">// T+25: authenticate 测试通过 → ✓ 标记</span><br />
<span className="code-cm">// → 自然进入下一个函数 refreshToken</span>
      </CodeBlock>

      <h2 className="section-heading">🔧 编程特有的 Lazy Eval 触发条件</h2>

      <table className="wiki-table">
        <thead>
          <tr><th>阻塞类型</th><th>Lazy Eval 最小解决方案</th></tr>
        </thead>
        <tbody>
          <tr><td>不确定 API 参数</td><td>写占位注释 // [查: API名称] → 继续</td></tr>
          <tr><td>不确定数据结构</td><td>假设理想结构，用 any 类型 → 后续补强类型</td></tr>
          <tr><td>性能优化机会</td><td>写 // [TODO: optimize] → 加入中断队列</td></tr>
          <tr><td>边界 case</td><td>写 // [TODO: handle edge] → 先完成主流程</td></tr>
          <tr><td>测试报错</td><td>只修复当前报错，不重构架构</td></tr>
        </tbody>
      </table>

      <div className="callout callout-warn">
        <div className="callout-title">⚠️ 编程心流的特殊风险</div>
        <strong>过早优化（Premature Optimization）</strong> 是编程中最常见的心流杀手。<br />
        发现可以优化的地方 → 立刻去优化 → 上下文切换 → 失去原有思路<br />
        <strong>解决方案：</strong>所有优化想法写入中断队列，当前 Session 结束后统一评估是否值得做。
      </div>
    </article>
  );
};

export default PageSceneCode;
