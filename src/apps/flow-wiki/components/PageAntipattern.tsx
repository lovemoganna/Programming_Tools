import React from 'react';

interface PageProps {
  onNavigate?: (id: string) => void;
}

const PageAntipattern: React.FC<PageProps> = () => {
  return (
    <article className="page fade-in" id="page-antipattern">
      <div className="breadcrumb">心流触发 Wiki › 参考 › <span>反模式手册</span></div>
      <h1 className="wiki-title">🚫 反模式手册</h1>
      <p className="wiki-subtitle">识别并避免这些会摧毁心流的常见错误</p>

      <h2 className="section-heading">🔴 反模式 1：过度 Ontology</h2>
      <div className="callout callout-danger">
        <div className="callout-title">症状</div>
        在准备阶段花超过 5 分钟定义 Ontology。<br />
        对象越拆越细，产生 10+ 个子目标。<br />
        把 Ontology 当成项目计划书来写。
      </div>
      <p className="body-text"><strong>解药</strong>：Ontology 只需要 3 个字段，30 秒内能写完才算合格。如果写不完，说明目标本身太大，先选其中最小的一个子目标。</p>

      <h2 className="section-heading">🔴 反模式 2：Wishful 变成白日梦</h2>
      <div className="callout callout-danger">
        <div className="callout-title">症状</div>
        假设的是"结果已经完成"，而非"能力已经具备"。<br />
        例："假设文章已经写好了，然后…"<br />
        Wishful 路径没有具体动作，只有美好愿景。
      </div>
      <p className="body-text"><strong>解药</strong>：检验标准是"Wishful 路径的每一步，都是<strong>我去执行</strong>的动作"。如果路径里没有"我去做"，那就是白日梦。</p>

      <h2 className="section-heading">🔴 反模式 3：Lazy 变成拖延</h2>
      <div className="callout callout-danger">
        <div className="callout-title">症状</div>
        所有问题都用"以后再说"应对，不记录占位符。<br />
        执行结束后，忘记处理被跳过的问题。<br />
        用 Lazy 合理化逃避困难。
      </div>
      <p className="body-text"><strong>解药</strong>：Lazy 跳过的每一个问题<strong>必须记录</strong>（占位符或中断队列）。执行 Session 结束后，中断队列里的问题必须被处理或显式丢弃。</p>

      <h2 className="section-heading">🔴 反模式 4：反馈通货膨胀</h2>
      <div className="callout callout-danger">
        <div className="callout-title">症状</div>
        每完成一个字就给自己奖励。<br />
        反馈频率过高，注意力被反馈本身吸引。<br />
        奖励变成了目的，而非手段。
      </div>
      <p className="body-text"><strong>解药</strong>：反馈的颗粒度要与任务单元匹配。奖励应该是"轻量且即时"的（一个勾、一次深呼吸），而不是"需要暂停才能完成"的（刷手机、聊天）。</p>

      <h2 className="section-heading">🔴 反模式 5：系统崇拜</h2>
      <div className="callout callout-danger">
        <div className="callout-title">症状</div>
        花大量时间完善"使用心流系统的系统"。<br />
        在没有任务时练习 Ontology 和 Wishful。<br />
        把学习方法论当成了实际产出。
      </div>
      <p className="body-text"><strong>解药</strong>：方法论只有在<strong>真实任务中</strong>才有价值。第一次使用这套系统时，选择一个真实的、今天必须完成的任务，立即开始，而不是继续学习方法论。</p>

      <blockquote className="wiki-quote">
        学完这份 Wiki 后的第一个动作，应该是<strong>合上它，打开一个真实任务，开始执行</strong>。
      </blockquote>
    </article>
  );
};

export default PageAntipattern;
