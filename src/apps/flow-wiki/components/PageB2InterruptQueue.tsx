import React from 'react';
import { CodeBlock } from '../../../theme';

interface PageProps {
  onNavigate: (id: string) => void;
}

const PageB2InterruptQueue: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <article className="page fade-in" id="page-b2-interrupt-queue">
      <div className="breadcrumb">心流触发 Wiki · 第二卷 › 深层原子 › <span>B2 · 中断队列</span></div>
      <div className="flex items-center gap-2.5 mb-1.5">
        <div className="level-bar">
          <div className="level-dot on"></div><div className="level-dot on"></div><div className="level-dot"></div>
          <div className="level-dot"></div><div className="level-dot"></div>
        </div>
        <span className="text-xs text-slate-500">难度 2/5 · 第二卷原子 B2</span>
      </div>
      <h1 className="wiki-title">📥 B2 · 中断队列（Interrupt Queue）</h1>
      <p className="wiki-subtitle">给所有"插队想法"一个安全的着陆点，而不是让它们强占主线程</p>

      <div className="callout callout-purple">
        <div className="callout-title">💡 核心定义</div>
        <strong>中断队列</strong>：一个在执行期间专门接收"非当前任务想法"的缓冲区。<br />
        写入动作 &lt; 5 秒，不中断主任务执行流，执行结束后统一处理。
      </div>

      <h2 className="section-heading">🖥️ 操作系统类比：中断处理机制</h2>
      <p className="body-text">
        CPU 在执行主程序时，硬件中断（键盘/网络）会到达。OS 不是立刻处理中断，而是把它放入<strong>中断请求队列（IRQ）</strong>，等当前指令周期完成后再处理。这保证了主程序执行的原子性。<br /><br />
        人类执行任务时的"插队想法"= 硬件中断。中断队列 = IRQ 缓冲区。
        没有这个缓冲区，每个中断都会抢占 CPU（你的注意力），导致上下文切换代价无限累积。
      </p>

      <CodeBlock label="OS ANALOGY · 中断处理">
        <span className="code-cm">// 无中断队列（糟糕的OS设计 = 糟糕的注意力管理）</span><br />
executeMainTask() {'{'}<br />
&nbsp;&nbsp;... 写第三段 ...<br />
&nbsp;&nbsp;← 中断: "我应该查一下那个数据"<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;立刻切换 → 打开浏览器 → 搜索 → 发散<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;主任务: 丢失上下文<br />
{'}'}<br /><br />

<span className="code-cm">// 有中断队列（正确设计）</span><br />
executeMainTask() {'{'}<br />
&nbsp;&nbsp;... 写第三段 ...<br />
&nbsp;&nbsp;← 中断: "我应该查一下那个数据"<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;写入队列: [查: 数据来源] <span className="code-cm">// &lt;5秒</span><br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;继续执行主任务<br />
&nbsp;&nbsp;... 写第三段完成 ...<br />
{'}'}<br />
processInterruptQueue() {'{'}<br />
&nbsp;&nbsp;<span className="code-cm">// 执行结束后处理队列</span><br />
{'}'}
      </CodeBlock>

      <h2 className="section-heading">📝 案例：一次真实的写作中断事件</h2>
      <CodeBlock label="B2 · EXAMPLE · 真实中断场景">
        <span className="code-cm">// 当前任务：写报告第4节"结论"</span><br />
<span className="code-cm">// 执行中，突然出现以下中断——</span><br /><br />

中断 1: "第2节的数据好像有问题"<br />
&nbsp;&nbsp;→ 写入队列: [检查: 第2节数据准确性]<br />
&nbsp;&nbsp;→ 继续写第4节<br /><br />

中断 2: "标题是不是要改一下"<br />
&nbsp;&nbsp;→ 写入队列: [考虑: 标题修改方案]<br />
&nbsp;&nbsp;→ 继续写第4节<br /><br />

中断 3: "这个结论写得不够有力"<br />
&nbsp;&nbsp;→ 写入队列: [修改: 结论段落力度]&nbsp;&nbsp;<br />
&nbsp;&nbsp;→ 继续写第4节<br />
&nbsp;&nbsp;<span className="code-cm">// 注意：这是"审稿模式"的插队，是最常见的心流杀手</span><br /><br />

<span className="code-cm">// 第4节完成后，处理队列：</span><br />
队列[0]: [检查: 第2节数据]&nbsp;&nbsp;&nbsp;&nbsp;→ 评估：值得处理 → 执行<br />
队列[1]: [考虑: 标题修改]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ 评估：暂时不重要 → 丢弃<br />
队列[2]: [修改: 结论力度]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ 评估：进入下一个Session处理
      </CodeBlock>

      <h2 className="section-heading">🔧 中断队列的实现形式</h2>
      <table className="wiki-table">
        <thead><tr><th>形式</th><th>优点</th><th>适合场景</th></tr></thead>
        <tbody>
          <tr><td>📝 纸质便条</td><td>物理动作强化"存档"感；零干扰</td><td>写作、设计、深度思考</td></tr>
          <tr><td>💬 单一聊天窗口（自发）</td><td>随时可搜索；方便复制</td><td>编程、文档</td></tr>
          <tr><td>📋 空白文档顶部</td><td>与任务文件同屏；无需切换</td><td>长文写作</td></tr>
          <tr><td>🗒️ 任务管理器收件箱</td><td>可直接转化为后续任务</td><td>项目型工作</td></tr>
        </tbody>
      </table>

      <div className="callout callout-warn">
        <div className="callout-title">⚠️ 关键约束：队列不是垃圾桶</div>
        中断队列的条目必须在<strong>每次执行 Session 结束后</strong>被处理（决定：执行 / 暂存 / 丢弃）。<br />
        如果队列从不清空，它会变成"焦虑感的储存库"，反而增加认知负担。
      </div>

      <h2 className="section-heading">✅ 自查清单</h2>
      <ul className="checklist">
        <li><span className="icon">☐</span> 我在执行前就准备好了中断队列（纸/文档）？</li>
        <li><span className="icon">☐</span> 每次写入队列的动作 &lt; 5 秒，不展开思考？</li>
        <li><span className="icon">☐</span> Session 结束后，我处理了队列中的每个条目？</li>
        <li><span className="icon">☐</span> 我能区分"真正的阻塞"（需 Lazy Eval）和"插队想法"（进队列）？</li>
      </ul>

      <hr className="wiki-divider" />
      <div className="callout callout-success">
        <div className="callout-title">🎯 下一步</div>
        进入 <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('b3-time-fence'); }}><strong>B3 · 时间围栏</strong></a> —— 用一个有边界的时间容器，给大脑"安全感"，从而完全释放执行力。
      </div>
    </article>
  );
};

export default PageB2InterruptQueue;
