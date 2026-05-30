import React from 'react';
import { CodeBlock } from '../../../theme';

interface PageProps {
  onNavigate: (id: string) => void;
}

const PageAtomSingleThread: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <article className="page fade-in" id="page-atom-singlethread">
      <div className="breadcrumb">心流触发 Wiki › 原子组件 › <span>A5 · Single Thread</span></div>
      <div className="level-header">
        <div className="level-bar">
          <div className="level-dot on"></div><div className="level-dot on"></div><div className="level-dot on"></div>
          <div className="level-dot"></div><div className="level-dot"></div>
        </div>
        <span className="level-text">难度 3/5</span>
      </div>
      <h1 className="wiki-title">🧵 A5 · Single Thread（单线程执行）</h1>
      <p className="wiki-subtitle">当前 = 唯一线程，未来 = 未加载</p>

      <div className="callout callout-purple">
        <div className="callout-title">💡 核心定义</div>
        <strong>Single Thread</strong>：在任意时刻，只允许一个任务在认知资源中"运行"。<br />
        心智模型：<code className="inline">当前 = 唯一线程 / 未来 = 未加载 / 过去 = 已归档</code>
      </div>

      <h2 className="section-heading">🖥️ CPU 线程模型类比</h2>

      <CodeBlock label="OS / CPU ANALOGY">
        <span className="code-cm">// 多线程（错误的心流状态）</span><br />
Thread_1: 写文章第一段<br />
Thread_2: 思考文章结尾怎么写<br />
Thread_3: 担心截止日期<br />
Thread_4: 想要查一个资料<br />
<span className="code-cm">// → 上下文切换（Context Switch）极高 → 认知资源耗尽 → 焦虑</span><br /><br />

<span className="code-cm">// 单线程（正确的心流状态）</span><br />
Thread_1: 写文章第一段&nbsp;&nbsp;<span className="code-cm">// 唯一运行的线程</span><br />
<span className="code-cm">// Thread_2,3,4: SUSPENDED&nbsp;&nbsp;→ 挂起，不占用资源</span><br />
<span className="code-cm">// → 0 上下文切换 → 深度专注 → 心流涌现</span>
      </CodeBlock>

      <h2 className="section-heading">📝 案例：写作中的单线程执行</h2>

      <CodeBlock label="EXAMPLE">
        <span className="code-cm">// 场景：写文章时脑中出现多个"插队任务"</span><br /><br />

当前任务: 写第一段论点句<br /><br />

❌ 多线程错误反应：<br />
&nbsp;&nbsp;"这个论点要有数据支持" → 停下来搜索<br />
&nbsp;&nbsp;"第三段应该讲什么"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ 开始规划<br />
&nbsp;&nbsp;"标题是不是要改一下"&nbsp;&nbsp;&nbsp;→ 切换到标题<br /><br />

✅ 单线程正确反应：<br />
&nbsp;&nbsp;"这个论点要有数据支持" → [TODO: 数据] → 继续写<br />
&nbsp;&nbsp;"第三段应该讲什么"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ 记录到待处理列表 → 继续写<br />
&nbsp;&nbsp;"标题是不是要改一下"&nbsp;&nbsp;&nbsp;→ 记录 → 继续写<br /><br />

<span className="code-cm">// 关键工具：一个"中断队列"</span><br />
<span className="code-cm">// 所有插队想法写入队列，执行完当前单元再处理</span>
      </CodeBlock>

      <h2 className="section-heading">🛡️ 保护单线程的三个实操工具</h2>

      <div className="step-card">
        <div className="step-num step-num-primary">1</div>
        <div className="step-body">
          <h4>中断队列（Interrupt Queue）</h4>
          <p>准备一张便条纸/空白文档。所有打断当前任务的想法，立即写入队列，不执行。这个动作 &lt; 5秒，不会打断心流，但清空了大脑的"工作内存"。</p>
        </div>
      </div>

      <div className="step-card">
        <div className="step-num step-num-secondary">2</div>
        <div className="step-body">
          <h4>时间围栏（Time Fence）</h4>
          <p>给当前任务设定一个结束时间点（如"25分钟后"），在此期间无论如何不允许切换任务。时间围栏给大脑一个"安全感"——你不是在忽略其他事，只是在合适时间再处理。</p>
        </div>
      </div>

      <div className="step-card">
        <div className="step-num step-num-info">3</div>
        <div className="step-body">
          <h4>完成声明（Completion Declaration）</h4>
          <p>完成当前任务后，大声（或默念）说出："[任务名] 完成。"这是一个显式的线程终止信号，告诉大脑可以切换了。没有这个信号，大脑会继续在后台保持"未完成任务"的激活状态（蔡格尼克效应）。</p>
        </div>
      </div>

      <h2 className="section-heading">✅ 自查清单</h2>
      <ul className="checklist">
        <li><span className="icon">☐</span> 我有一个中断队列，用于存放所有打岔的想法？</li>
        <li><span className="icon">☐</span> 我在执行期间没有切换任务（包括查资料、回消息）？</li>
        <li><span className="icon">☐</span> 完成后我做了显式的"完成声明"？</li>
        <li><span className="icon">☐</span> 我能区分"真正的阻塞"（需要 Lazy Eval）和"伪阻塞"（想法插队）？</li>
      </ul>

      <hr className="wiki-divider" />
      <div className="callout callout-success">
        <div className="callout-title">🎯 下一步</div>
        五个原子组件已学完！进入 <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('combo-2'); }}><strong>L2 · 双元组合</strong></a>，开始体验组合产生的"涌现效应"。
      </div>
    </article>
  );
};

export default PageAtomSingleThread;
