import React from 'react';
import { CodeBlock } from '../../../theme';

interface PageProps {
  onNavigate?: (id: string) => void;
}

const PageSceneStuck: React.FC<PageProps> = () => {
  return (
    <article className="page fade-in" id="page-scene-stuck">
      <div className="breadcrumb">心流触发 Wiki · 第二卷 › 深层场景 › <span>场景：彻底卡住了</span></div>
      <h1 className="wiki-title">🧱 场景：彻底卡住了</h1>
      <p className="wiki-subtitle">当所有工具都失效时的最后一道防线</p>

      <div className="callout callout-danger">
        <div className="callout-title">🚨 这个场景的定义</div>
        你已经知道这套方法，但<strong>就是动不了</strong>。<br />
        Wishful 写了，MVA 也找到了，但就是无法执行第一步。<br />
        这不是方法的失败，而是需要切换到"<strong>系统诊断模式</strong>"。
      </div>

      <h2 className="section-heading">🔍 卡住诊断流程（按序执行）</h2>

      <div className="step-card">
        <div className="step-num step-num-primary">D1</div>
        <div className="step-body">
          <h4>诊断1：任务是否真的清晰？</h4>
          <p>
            测试：能否在 30 秒内说出"我要做的是什么，完成时是什么样"？<br />
            如果不能 → <strong>问题在 A1 Ontology</strong>，不是执行层。<br />
            解决：只花 5 分钟，重新做 Ontology 三元组，不做其他事。
          </p>
        </div>
      </div>

      <div className="step-card">
        <div className="step-num step-num-secondary">D2</div>
        <div className="step-body">
          <h4>诊断2：完成态是否过高？</h4>
          <p>
            测试：完成态里有没有"好"、"完善"、"有质量"这类词？<br />
            如果有 → <strong>问题在 B1 完成态</strong>，标准太高触发完美主义。<br />
            解决：把完成态降级为 L2（只要数量，不管质量）。例："草稿字数 ≥ 1，即完成"。
          </p>
        </div>
      </div>

      <div className="step-card">
        <div className="step-num step-num-info">D3</div>
        <div className="step-body">
          <h4>诊断3：MVA 是否还太大？</h4>
          <p>
            测试：你的 MVA 是否需要超过 60 秒完成？<br />
            如果是 → <strong>继续缩小 MVA</strong>，直到"不可能失败"。<br />
            终极 MVA 例子："打开文件"、"写下任务名称"、"拿起笔"。
          </p>
        </div>
      </div>

      <div className="step-card">
        <div className="step-num step-num-success">D4</div>
        <div className="step-body">
          <h4>诊断4：是否在错误的能量时段工作？</h4>
          <p>
            测试：过去 48 小时睡眠是否不足？上次吃东西是几小时前？<br />
            如果是 → <strong>这不是心理问题，是生理问题</strong>。任何心流技巧在生理透支时都无效。<br />
            解决：先解决生理需求（睡眠、进食、短暂休息），再回来。
          </p>
        </div>
      </div>

      <div className="step-card">
        <div className="step-num step-num-accent">D5</div>
        <div className="step-body">
          <h4>诊断5：这个任务是否真的必须现在做？</h4>
          <p>
            测试：如果不做这个任务，最坏的后果是什么？后果是否是今天发生的？<br />
            如果不是紧急的 → <strong>允许自己今天不做</strong>，不要用意志力强攻。<br />
            解决：把这个任务加入明天的锚点，今天选择一个阻力更小的任务执行。
          </p>
        </div>
      </div>

      <h2 className="section-heading">🔧 最后手段：2 分钟站立执行</h2>
      <CodeBlock label="LAST RESORT PROTOCOL">
        <span className="code-cm">// 当 D1-D5 都没有找到原因，使用此协议</span><br /><br />

Step 1: 离开座位，站起来（物理状态改变）<br />
Step 2: 大声说出（不是心里想）:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"我现在要做的是：[任务名]"<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"第一步只是：[MVA]"<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"时间：2分钟"<br />
Step 3: 设置 2 分钟计时器（不是 25 分钟）<br />
Step 4: 执行 MVA，计时器响了就停<br /><br />

<span className="code-cm">// 原理:</span><br />
<span className="code-cm">// 大声说出 → 激活语言和运动皮层，绕过前额叶的"过度思考"</span><br />
<span className="code-cm">// 站立 → 皮质醇轻微上升，提高警觉</span><br />
<span className="code-cm">// 2分钟 → 时间短到"不值得抗拒"</span><br />
<span className="code-cm">// 通常：2分钟后自动继续，不想停</span>
      </CodeBlock>
    </article>
  );
};

export default PageSceneStuck;
