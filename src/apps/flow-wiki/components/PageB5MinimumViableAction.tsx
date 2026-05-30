import React from 'react';
import { CodeBlock } from '../../../theme';

interface PageProps {
  onNavigate: (id: string) => void;
}

const PageB5MinimumViableAction: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <article className="page fade-in" id="page-b5-minimum-viable-action">
      <div className="breadcrumb">心流触发 Wiki · 第二卷 › 深层原子 › <span>B5 · 最小可行动作</span></div>
      <div className="flex items-center gap-2.5 mb-1.5">
        <div className="level-bar">
          <div className="level-dot on"></div><div className="level-dot on"></div><div className="level-dot on"></div>
          <div className="level-dot on"></div><div className="level-dot on"></div>
        </div>
        <span className="text-xs text-slate-500">难度 5/5 · 第二卷原子 B5</span>
      </div>
      <h1 className="wiki-title">🔬 B5 · 最小可行动作（MVA）</h1>
      <p className="wiki-subtitle">找到那个小到"不可能失败"的第一步，然后只做这一步</p>

      <div className="callout callout-purple">
        <div className="callout-title">💡 核心定义</div>
        <strong>最小可行动作（Minimum Viable Action，MVA）</strong>：将任务分解到<em>执行阻力为零</em>的最小单元。<br />
        判断标准：如果你做这个动作时感到"这也太简单了"，那它就是正确的 MVA。
      </div>

      <h2 className="section-heading">🧬 MVA 的生物学原理</h2>
      <p className="body-text">
        <strong>行为激活理论（Behavioral Activation Theory）</strong>：行动产生动力，而不是动力产生行动。
        等待"有状态"再开始是一个错误的因果模型。<br /><br />
        MVA 的作用是绕过"需要动力才能行动"的假设，用极小的行动触发真实的动力分泌。<br /><br />
        生理机制：完成任何动作（哪怕极小）都会触发多巴胺轻微分泌。这个分泌会降低下一个动作的启动阻力。
        MVA 就是利用这个<strong>多巴胺滚雪球效应</strong>的第一粒雪。
      </p>

      <h2 className="section-heading">📐 MVA 分解法则：三次细化</h2>
      <CodeBlock label="MVA DECOMPOSITION · 三次细化">
        <span className="code-cm">// 原始任务（太大，有阻力）</span><br />
任务: 写一篇关于时间管理的文章<br /><br />

<span className="code-cm">// 第一次细化（还有阻力）</span><br />
→ 写文章的第一段<br /><br />

<span className="code-cm">// 第二次细化（减少阻力）</span><br />
→ 写第一段的开头句<br /><br />

<span className="code-cm">// 第三次细化（MVA · 阻力≈0）</span><br />
→ 在空白文档里，打出文章标题，然后空一行<br /><br />

<span className="code-cm">// 判断标准: "这个我真的可以在 30 秒内完成"</span><br />
<span className="code-cm">// → 是 → 这就是你的 MVA</span><br />
<span className="code-cm">// → 否 → 继续细化</span>
      </CodeBlock>

      <h2 className="section-heading">📝 案例：面对一项让你抗拒的任务</h2>
      <CodeBlock label="B5 · EXAMPLE · 高阻力任务启动">
        <span className="code-cm">// 场景：需要整理一份拖了两周的财务报表</span><br />
<span className="code-cm">// 启动阻力: 极高（拖延感 + 焦虑感累积）</span><br /><br />

<span className="code-cm">// 错误思维：</span><br />
"我要先整理思路，理清所有数据来源，做好分类框架……"<br />
→ 认知负荷立刻超载 → 继续拖延<br /><br />

<span className="code-cm">// MVA 思维：</span><br />
问自己: "我现在能做的最小的、绝对不会失败的一步是什么？"<br /><br />

MVA: 打开那个财务文件夹，看一眼里面有多少文件<br />
<span className="code-cm">// 不需要处理，只需要"看一眼"</span><br />
<span className="code-cm">// 阻力: 接近零</span><br /><br />

执行 MVA → 文件夹打开了<br />
→ 多巴胺轻微分泌 → 阻力下降<br /><br />

自然浮现的下一个 MVA:<br />
&nbsp;&nbsp;"把这些文件按月份拖进不同文件夹"<br />
&nbsp;&nbsp;<span className="code-cm">// 不需要规划，MVA 结束后下一步自然出现</span><br /><br />

执行 → 完成 → 继续 ...<br /><br />

<span className="code-cm">// 30 分钟后: 报表整理完成 50%</span><br />
<span className="code-cm">// 感受: 从"极度抗拒"到"有点投入"</span>
      </CodeBlock>

      <h2 className="section-heading">🔗 MVA 与 Wishful Thinking 的关系</h2>
      <p className="body-text">
        两者解决的都是"启动阻力"，但机制不同：
      </p>
      <table className="wiki-table">
        <thead><tr><th>工具</th><th>机制</th><th>适用时机</th></tr></thead>
        <tbody>
          <tr>
            <td><span className="tag tag-wish">A2 Wishful</span></td>
            <td>假设条件满足，消除"不够准备好"的焦虑</td>
            <td>任务明确，但心理上认为条件不具备</td>
          </tr>
          <tr>
            <td><span className="tag tag-new">B5 MVA</span></td>
            <td>把第一步缩小到"不可能失败"，消除惯性</td>
            <td>任务明确，但身体/心理有强烈的抗拒感</td>
          </tr>
        </tbody>
      </table>
      <p className="body-text">实战中两者可以叠加：先用 Wishful 解除心理阻力，再用 MVA 触发第一个身体动作。</p>

      <h2 className="section-heading">✅ 自查清单</h2>
      <ul className="checklist">
        <li><span className="icon">☐</span> 我问了自己"最小的一步是什么"，而不是直接规划全部？</li>
        <li><span className="icon">☐</span> 我的 MVA 能在 30 秒内完成（哪怕是"打开文件夹"）？</li>
        <li><span className="icon">☐</span> 执行 MVA 后，我让下一步自然浮现，不强行规划？</li>
        <li><span className="icon">☐</span> 我用 MVA 作为高阻力任务的固定启动协议？</li>
      </ul>

      <hr className="wiki-divider" />
      <div className="callout callout-success">
        <div className="callout-title">🎯 下一步</div>
        五个深层原子 B1–B5 全部掌握！进入 <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('vol2-combo-ab'); }}><strong>跨卷双元组合</strong></a> —— A 系列与 B 系列的跨卷协作产生更强大的组合效应。
      </div>
    </article>
  );
};

export default PageB5MinimumViableAction;
