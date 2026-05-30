import React from 'react';

interface PageProps {
  onNavigate?: (id: string) => void;
}

const PageToonLog2: React.FC<PageProps> = () => {
  return (
    <article className="page fade-in" id="page-toon-log2">
      <div className="breadcrumb">心流触发 Wiki · 第二卷 › <span>TOON 日志 Vol.2</span></div>
      <h1 className="wiki-title">📊 TOON 日志 Vol.2</h1>
      <p className="wiki-subtitle">第二卷全部内容的状态记录 — 双卷合并项目总览</p>

      <h2 className="section-heading">🧱 B 系列原子组件</h2>
      <div className="toon-block">
<span className="toon-header">AtomComponents_B</span>[<span className="toon-val">5</span>]{'{'}<span className="toon-schema">ID,名称,层级,解决问题,核心机制,关键工具,难度</span>{'}'}:<br />
&nbsp;&nbsp;<span className="toon-id">B1</span><span className="toon-sep">,</span>完成态设计<span className="toon-sep">,</span>认知-输出层<span className="toon-sep">,</span>完成判断模糊<span className="toon-sep">,</span>L2量化+L3功能分离<span className="toon-sep">,</span>DoD模板<span className="toon-sep">,</span>3/5<br />
&nbsp;&nbsp;<span className="toon-id">B2</span><span className="toon-sep">,</span>中断队列<span className="toon-sep">,</span>执行保护层<span className="toon-sep">,</span>插队想法破坏心流<span className="toon-sep">,</span>IRQ缓冲机制<span className="toon-sep">,</span>纸/便条文档<span className="toon-sep">,</span>2/5<br />
&nbsp;&nbsp;<span className="toon-id">B3</span><span className="toon-sep">,</span>时间围栏<span className="toon-sep">,</span>执行容器层<span className="toon-sep">,</span>其他任务占用工作记忆<span className="toon-sep">,</span>蔡格尼克效应解除<span className="toon-sep">,</span>计时器+声明<span className="toon-sep">,</span>3/5<br />
&nbsp;&nbsp;<span className="toon-id">B4</span><span className="toon-sep">,</span>上下文锚点<span className="toon-sep">,</span>跨Session连续层<span className="toon-sep">,</span>中断后重建成本高<span className="toon-sep">,</span>断点快照机制<span className="toon-sep">,</span>4字段锚点模板<span className="toon-sep">,</span>4/5<br />
&nbsp;&nbsp;<span className="toon-id">B5</span><span className="toon-sep">,</span>最小可行动作<span className="toon-sep">,</span>启动层<span className="toon-sep">,</span>高阻力任务无法启动<span className="toon-sep">,</span>多巴胺滚雪球效应<span className="toon-sep">,</span>三次细化法则<span className="toon-sep">,</span>5/5
      </div>

      <h2 className="section-heading">🔗 跨卷组合矩阵</h2>
      <div className="toon-block">
<span className="toon-header">CrossVolumeCombo</span>[<span className="toon-val">9</span>]{'{'}<span className="toon-schema">组合ID,A组件,B组件,涌现效应,适用场景</span>{'}'}:<br />
&nbsp;&nbsp;<span className="toon-id">AB-01</span><span className="toon-sep">,</span>A1<span className="toon-sep">,</span>B1<span className="toon-sep">,</span>结构骨架×精确出口<span className="toon-sep">,</span>任何需要明确产出的任务<br />
&nbsp;&nbsp;<span className="toon-id">AB-02</span><span className="toon-sep">,</span>A2<span className="toon-sep">,</span>B5<span className="toon-sep">,</span>双重启动引擎<span className="toon-sep">,</span>极度拖延的高阻力任务<br />
&nbsp;&nbsp;<span className="toon-id">AB-03</span><span className="toon-sep">,</span>A3<span className="toon-sep">,</span>B2<span className="toon-sep">,</span>精确区分真伪阻塞<span className="toon-sep">,</span>信息密集型任务<br />
&nbsp;&nbsp;<span className="toon-id">AB-04</span><span className="toon-sep">,</span>A4<span className="toon-sep">,</span>B1<span className="toon-sep">,</span>奖励信号精确化<span className="toon-sep">,</span>长周期项目持续动力<br />
&nbsp;&nbsp;<span className="toon-id">AB-05</span><span className="toon-sep">,</span>A5<span className="toon-sep">,</span>B3<span className="toon-sep">,</span>完整注意力保护套件<span className="toon-sep">,</span>高干扰环境下的深度工作<br />
&nbsp;&nbsp;<span className="toon-id">AB-06</span><span className="toon-sep">,</span>A5<span className="toon-sep">,</span>B4<span className="toon-sep">,</span>跨天执行连续性<span className="toon-sep">,</span>多日项目<br />
&nbsp;&nbsp;<span className="toon-id">AB-07</span><span className="toon-sep">,</span>A1<span className="toon-sep">,</span>B4<span className="toon-sep">,</span>执行轨迹双坐标定位<span className="toon-sep">,</span>复杂长项目<br />
&nbsp;&nbsp;<span className="toon-id">AB-08</span><span className="toon-sep">,</span>A5+B2+B3<span className="toon-sep">,</span>-<span className="toon-sep">,</span>完整注意力基础设施<span className="toon-sep">,</span>需要高度专注的任何任务<br />
&nbsp;&nbsp;<span className="toon-id">AB-09</span><span className="toon-sep">,</span>A1+B1+B5<span className="toon-sep">,</span>-<span className="toon-sep">,</span>启动三件套<span className="toon-sep">,</span>高阻力+目标模糊的任务
      </div>

      <h2 className="section-heading">📋 深层场景覆盖</h2>
      <div className="toon-block">
<span className="toon-header">Vol2Scenes</span>[<span className="toon-val">3</span>]{'{'}<span className="toon-schema">场景ID,名称,核心挑战,主要组件,关键原则</span>{'}'}:<br />
&nbsp;&nbsp;<span className="toon-id">S4</span><span className="toon-sep">,</span>研究综述<span className="toon-sep">,</span>信息量超载+无限收集陷阱<span className="toon-sep">,</span>A1+A2+A3+B1<span className="toon-sep">,</span>先写观点再找证据<br />
&nbsp;&nbsp;<span className="toon-id">S5</span><span className="toon-sep">,</span>会议准备<span className="toon-sep">,</span>时间紧+焦虑高+过度规划<span className="toon-sep">,</span>A1+A2+B1+B5<span className="toon-sep">,</span>不完美准备优于完美焦虑<br />
&nbsp;&nbsp;<span className="toon-id">S6</span><span className="toon-sep">,</span>彻底卡住了<span className="toon-sep">,</span>所有技巧失效<span className="toon-sep">,</span>B5+诊断流程D1-D5<span className="toon-sep">,</span>先诊断再干预
      </div>

      <h2 className="section-heading">📈 双卷合并 ProjectLog</h2>
      <div className="toon-block">
<span className="toon-header">ProjectLog_V2</span>[<span className="toon-val">1</span>]{'{'}<span className="toon-schema">项目ID,版本,总页数,A原子数,B原子数,组合层,场景数,元认知页,完成状态</span>{'}'}:<br />
&nbsp;&nbsp;<span className="toon-id">FlowWiki</span><span className="toon-sep">,</span>v2.0<span className="toon-sep">,</span>29<span className="toon-sep">,</span>5(A1-A5)<span className="toon-sep">,</span>5(B1-B5)<span className="toon-sep">,</span>L2/L3/L5+跨卷<span className="toon-sep">,</span>6<span className="toon-sep">,</span>2(能量+校准)<span className="toon-sep">,</span>✅第二卷完整
      </div>

      <div className="callout callout-purple mt-8">
        <div className="callout-title">🌊 本质总结（双卷版）</div>
        <strong>第一卷</strong>告诉你：用 Ontology 保证方向，用 Wishful 解除阻力，用 Lazy Eval 降低认知负担，用 Execution 生成路径。<br /><br />
        <strong>第二卷</strong>告诉你：用 Done-State 精确出口，用 MVA 打破惯性，用中断队列保护专注，用时间围栏给大脑安全感，用锚点实现跨天连续。<br /><br />
        <strong>两卷合一</strong>：构建一个自维持的执行飞轮——<em>在不确定中持续推进，在中断后快速恢复，在低能量时优雅降级，在高能量时最大化产出。</em>
      </div>
    </article>
  );
};

export default PageToonLog2;
