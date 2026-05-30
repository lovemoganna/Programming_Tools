import React from 'react';

interface PageProps {
  onNavigate?: (id: string) => void;
}

const PageToonLog: React.FC<PageProps> = () => {
  return (
    <article className="page fade-in" id="page-toon-log">
      <div className="breadcrumb">心流触发 Wiki › 参考 › <span>TOON 项目日志</span></div>
      <h1 className="wiki-title">📊 TOON 项目日志</h1>
      <p className="wiki-subtitle">Token-Oriented Object Notation — 本 Wiki 的状态记录</p>

      <div className="callout callout-info">
        <div className="callout-title">📌 TOON 格式说明</div>
        TOON 是一种<strong>紧凑型状态描述格式</strong>，Schema 先行，值按字段顺序排列，不重复 Key，极大压缩 Token。<br />
        本页展示这份 Wiki 的完整项目日志。
      </div>

      <h2 className="section-heading">📋 Wiki 内容目录日志</h2>

      <div className="toon-block">
<span className="toon-header">WikiPages</span>[<span className="toon-val">16</span>]{'{'}<span className="toon-schema">页面ID,类型,标题,原子组件,复杂度,状态</span>{'}'}:<br />
&nbsp;&nbsp;<span className="toon-id">home</span><span className="toon-sep">,</span><span className="toon-val">导论</span><span className="toon-sep">,</span>Wiki首页<span className="toon-sep">,</span>-<span className="toon-sep">,</span>L0<span className="toon-sep">,</span>✅<br />
&nbsp;&nbsp;<span className="toon-id">overview</span><span className="toon-sep">,</span><span className="toon-val">导论</span><span className="toon-sep">,</span>全局概览<span className="toon-sep">,</span>全部<span className="toon-sep">,</span>L0<span className="toon-sep">,</span>✅<br />
&nbsp;&nbsp;<span className="toon-id">mece</span><span className="toon-sep">,</span><span className="toon-val">导论</span><span className="toon-sep">,</span>MECE结构图<span className="toon-sep">,</span>全部<span className="toon-sep">,</span>L0<span className="toon-sep">,</span>✅<br />
&nbsp;&nbsp;<span className="toon-id">atom-ontology</span><span className="toon-sep">,</span><span className="toon-val">原子</span><span className="toon-sep">,</span>A1·Ontology<span className="toon-sep">,</span>A1<span className="toon-sep">,</span>L1<span className="toon-sep">,</span>✅<br />
&nbsp;&nbsp;<span className="toon-id">atom-wishful</span><span className="toon-sep">,</span><span className="toon-val">原子</span><span className="toon-sep">,</span>A2·Wishful<span className="toon-sep">,</span>A2<span className="toon-sep">,</span>L1<span className="toon-sep">,</span>✅<br />
&nbsp;&nbsp;<span className="toon-id">atom-lazy</span><span className="toon-sep">,</span><span className="toon-val">原子</span><span className="toon-sep">,</span>A3·LazyEval<span className="toon-sep">,</span>A3<span className="toon-sep">,</span>L1<span className="toon-sep">,</span>✅<br />
&nbsp;&nbsp;<span className="toon-id">atom-feedback</span><span className="toon-sep">,</span><span className="toon-val">原子</span><span className="toon-sep">,</span>A4·Feedback<span className="toon-sep">,</span>A4<span className="toon-sep">,</span>L1<span className="toon-sep">,</span>✅<br />
&nbsp;&nbsp;<span className="toon-id">atom-singlethread</span><span className="toon-sep">,</span><span className="toon-val">原子</span><span className="toon-sep">,</span>A5·SingleThread<span className="toon-sep">,</span>A5<span className="toon-sep">,</span>L1<span className="toon-sep">,</span>✅<br />
&nbsp;&nbsp;<span className="toon-id">combo-2</span><span className="toon-sep">,</span><span className="toon-val">组合</span><span className="toon-sep">,</span>L2·双元组合<span className="toon-sep">,</span>A1-A5×2<span className="toon-sep">,</span>L2<span className="toon-sep">,</span>✅<br />
&nbsp;&nbsp;<span className="toon-id">combo-3</span><span className="toon-sep">,</span><span className="toon-val">组合</span><span className="toon-sep">,</span>L3·三元组合<span className="toon-sep">,</span>A1-A5×3<span className="toon-sep">,</span>L3<span className="toon-sep">,</span>✅<br />
&nbsp;&nbsp;<span className="toon-id">combo-full</span><span className="toon-sep">,</span><span className="toon-val">组合</span><span className="toon-sep">,</span>L5·完整系统<span className="toon-sep">,</span>全部<span className="toon-sep">,</span>L5<span className="toon-sep">,</span>✅<br />
&nbsp;&nbsp;<span className="toon-id">scene-write</span><span className="toon-sep">,</span><span className="toon-val">场景</span><span className="toon-sep">,</span>写作心流<span className="toon-sep">,</span>全部<span className="toon-sep">,</span>实战<span className="toon-sep">,</span>✅<br />
&nbsp;&nbsp;<span className="toon-id">scene-code</span><span className="toon-sep">,</span><span className="toon-val">场景</span><span className="toon-sep">,</span>编程心流<span className="toon-sep">,</span>全部<span className="toon-sep">,</span>实战<span className="toon-sep">,</span>✅<br />
&nbsp;&nbsp;<span className="toon-id">scene-decide</span><span className="toon-sep">,</span><span className="toon-val">场景</span><span className="toon-sep">,</span>模糊决策<span className="toon-sep">,</span>全部<span className="toon-sep">,</span>实战<span className="toon-sep">,</span>✅<br />
&nbsp;&nbsp;<span className="toon-id">sop</span><span className="toon-sep">,</span><span className="toon-val">参考</span><span className="toon-sep">,</span>SOP速查<span className="toon-sep">,</span>全部<span className="toon-sep">,</span>参考<span className="toon-sep">,</span>✅<br />
&nbsp;&nbsp;<span className="toon-id">antipattern</span><span className="toon-sep">,</span><span className="toon-val">参考</span><span className="toon-sep">,</span>反模式手册<span className="toon-sep">,</span>全部<span className="toon-sep">,</span>参考<span className="toon-sep">,</span>✅
      </div>

      <h2 className="section-heading">🧱 原子组件状态</h2>

      <div className="toon-block">
<span className="toon-header">AtomComponents</span>[<span className="toon-val">5</span>]{'{'}<span className="toon-schema">ID,名称,层级,解决问题,输入,输出,禁止行为</span>{'}'}:<br />
&nbsp;&nbsp;<span className="toon-id">A1</span><span className="toon-sep">,</span>Ontology<span className="toon-sep">,</span>认知层<span className="toon-sep">,</span>方向模糊<span className="toon-sep">,</span>模糊目标<span className="toon-sep">,</span>三元组<span className="toon-sep">,</span>过程导向描述<br />
&nbsp;&nbsp;<span className="toon-id">A2</span><span className="toon-sep">,</span>WishfulThinking<span className="toon-sep">,</span>认知层<span className="toon-sep">,</span>启动阻力<span className="toon-sep">,</span>三元组<span className="toon-sep">,</span>理想执行路径<span className="toon-sep">,</span>考虑实现难度<br />
&nbsp;&nbsp;<span className="toon-id">A3</span><span className="toon-sep">,</span>LazyEvaluation<span className="toon-sep">,</span>执行层<span className="toon-sep">,</span>执行阻塞<span className="toon-sep">,</span>阻塞点<span className="toon-sep">,</span>最小解决方案<span className="toon-sep">,</span>扩展问题边界<br />
&nbsp;&nbsp;<span className="toon-id">A4</span><span className="toon-sep">,</span>FeedbackLoop<span className="toon-sep">,</span>执行层<span className="toon-sep">,</span>动力衰减<span className="toon-sep">,</span>完成动作<span className="toon-sep">,</span>多巴胺+下一步<span className="toon-sep">,</span>延迟标记<br />
&nbsp;&nbsp;<span className="toon-id">A5</span><span className="toon-sep">,</span>SingleThread<span className="toon-sep">,</span>执行层<span className="toon-sep">,</span>注意力分散<span className="toon-sep">,</span>任务清单<span className="toon-sep">,</span>深度专注<span className="toon-sep">,</span>并行任务
      </div>

      <h2 className="section-heading">🔗 组合复杂度矩阵</h2>

      <div className="toon-block">
<span className="toon-header">ComboMatrix</span>[<span className="toon-val">5</span>]{'{'}<span className="toon-schema">层级,数学表达,组合数,涌现效应,实现难度</span>{'}'}:<br />
&nbsp;&nbsp;<span className="toon-id">L1</span><span className="toon-sep">,</span>C(5,1)<span className="toon-sep">,</span>5<span className="toon-sep">,</span>单一功能<span className="toon-sep">,</span>低<br />
&nbsp;&nbsp;<span className="toon-id">L2</span><span className="toon-sep">,</span>C(5,2)<span className="toon-sep">,</span>10<span className="toon-sep">,</span>1+1&gt;2协同<span className="toon-sep">,</span>中<br />
&nbsp;&nbsp;<span className="toon-id">L3</span><span className="toon-sep">,</span>C(5,3)<span className="toon-sep">,</span>10<span className="toon-sep">,</span>近似心流体验<span className="toon-sep">,</span>中高<br />
&nbsp;&nbsp;<span className="toon-id">L4</span><span className="toon-sep">,</span>C(5,4)<span className="toon-sep">,</span>5<span className="toon-sep">,</span>稳定心流状态<span className="toon-sep">,</span>高<br />
&nbsp;&nbsp;<span className="toon-id">L5</span><span className="toon-sep">,</span>C(5,5)<span className="toon-sep">,</span>1<span className="toon-sep">,</span>完全心流涌现<span className="toon-sep">,</span>需刻意练习
      </div>

      <h2 className="section-heading">📈 ProjectLog</h2>

      <div className="toon-block">
<span className="toon-header">ProjectLog</span>[<span className="toon-val">1</span>]{'{'}<span className="toon-schema">项目ID,版本,总页数,原子数,组合数,场景数,完成状态,下一步</span>{'}'}:<br />
&nbsp;&nbsp;<span className="toon-id">FlowWiki</span><span className="toon-sep">,</span>v1.0<span className="toon-sep">,</span>16<span className="toon-sep">,</span>5<span className="toon-sep">,</span>3层(L2/L3/L5)<span className="toon-sep">,</span>3<span className="toon-sep">,</span>✅完整<span className="toon-sep">,</span>在真实任务中执行第一次
      </div>
    </article>
  );
};

export default PageToonLog;
