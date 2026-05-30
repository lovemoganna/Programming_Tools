export interface WikiPageContent {
  id: string;
  title: string;
  subtitle: string;
  tags: string[];
  content: string;
}

export const wikiPages: WikiPageContent[] = [
  {
    id: "home",
    title: "心流触发 Wiki",
    subtitle: "首页",
    tags: ["wiki", "flow", "心流", "ontology", "wishful thinking"],
    content: "心流触发方法论首页。通过本体定义、愿望思考与延迟决策，构建高效的个人生产力系统。掌握心流状态的底层原理与实践路径。"
  },
  {
    id: "overview",
    title: "全局概览",
    subtitle: "Wiki 结构图",
    tags: ["wiki", "overview", "map", "结构"],
    content: "心流触发全局概览，包含A卷原子组件与B卷深层原子组件。展示系统的复杂度阶梯和方法论体系的全局脉络。"
  },
  {
    id: "mece",
    title: "MECE 结构图",
    subtitle: "心流架构",
    tags: ["wiki", "mece", "architecture", "架构"],
    content: "心流触发系统的MECE结构分析。将整个心流触发过程划分为准备阶段、启动阶段、执行循环、阻塞解决、收尾阶段，无遗漏无重叠。"
  },
  {
    id: "atom-ontology",
    title: "🧩 A1 · Ontology 本体",
    subtitle: "原子组件",
    tags: ["wiki", "atoms", "ontology", "本体", "A1"],
    content: "A1 Ontology 本体定义：将模糊的任务具象化为对象、动作、完成态。用三元组 实体-关系-属性 建立工作边界，消除不确定性。"
  },
  {
    id: "atom-wishful",
    title: "✨ A2 · Wishful Thinking",
    subtitle: "原子组件",
    tags: ["wiki", "atoms", "wishful", "愿望思考", "A2"],
    content: "A2 Wishful Thinking 愿望思考：在启动阶段假设所有未满足的外部依赖已经解决，直接写出理想路径，消除冷启动的焦虑与阻力。"
  },
  {
    id: "atom-lazy",
    title: "⏳ A3 · Lazy Evaluation",
    subtitle: "原子组件",
    tags: ["wiki", "atoms", "lazy", "惰性求值", "A3"],
    content: "A3 Lazy Evaluation 惰性求值/延迟计算：执行中遇到非当前分支必须的阻碍时，用TODO或空存根代替，延迟到不得不解决时再处理，保持主线程流畅度。"
  },
  {
    id: "atom-feedback",
    title: "🔄 A4 · Feedback Loop",
    subtitle: "原子组件",
    tags: ["wiki", "atoms", "feedback", "反馈循环", "A4", "多巴胺"],
    content: "A4 Feedback Loop 即时反馈循环：让每一个微小动作的完成都产生明确的物理或心理确认，激活多巴胺奖励回路，维持心流飞轮的动力。"
  },
  {
    id: "atom-singlethread",
    title: "🧵 A5 · Single Thread",
    subtitle: "原子组件",
    tags: ["wiki", "atoms", "single thread", "单线程", "A5"],
    content: "A5 Single Thread 单线程执行：在任一时刻将注意力锁定在唯一的一个任务上，不进行多任务切换，降低认知上下文切换成本。"
  },
  {
    id: "combo-2",
    title: "🔗 L2 · 双元组合",
    subtitle: "组合模式",
    tags: ["wiki", "combos", "L2", "双元", "Ontology", "Wishful", "Feedback", "Lazy"],
    content: "L2双元组合模式：Ontology×Wishful（零阻力启动）、Single Thread×Feedback（专注飞轮）、Wishful×Lazy Eval（阻力消除器），实现1+1>2的涌现效应。"
  },
  {
    id: "combo-3",
    title: "🔗 L3 · 三元组合",
    subtitle: "组合模式",
    tags: ["wiki", "combos", "L3", "三元", "Ontology", "Wishful", "Lazy", "Feedback"],
    content: "L3三元组合模式：准备启动环（A1+A2+A3）建立零阻力执行管道，核心执行环（A1+A4+A5）建立深度专注回路，自稳定执行系统。"
  },
  {
    id: "combo-full",
    title: "🌐 L5 · 完整系统",
    subtitle: "组合模式",
    tags: ["wiki", "combos", "L5", "完整系统", "心流"],
    content: "L5完整心流触发系统：将A1至A5五个原子组件有机整合，实现从输入到输出、从启动到反馈的无缝闭环心流系统。"
  },
  {
    id: "scene-write",
    title: "✍️ 场景：写作心流",
    subtitle: "应用场景",
    tags: ["wiki", "scenes", "write", "写作", "段落", "草稿"],
    content: "写作场景下的心流触发实践。使用Ontology定义段落完成态，用Wishful假设句式结构，用Feedback确认字数勾记，维持码字心流。"
  },
  {
    id: "scene-code",
    title: "💻 场景：编程心流",
    subtitle: "应用场景",
    tags: ["wiki", "scenes", "code", "编程", "TODO", "测试"],
    content: "编程场景下的心流触发实践。先定义接口输入输出，遇到复杂底层实现先用TODO存根（Lazy），编写单元测试驱动即时反馈（Feedback）。"
  },
  {
    id: "scene-decide",
    title: "⚡ 场景：模糊决策",
    subtitle: "应用场景",
    tags: ["wiki", "scenes", "decide", "决策", "不确定性"],
    content: "面对高度模糊和不确定性时的决策心流。通过Ontology厘清决策的核心要素，用Wishful假设最坏结果已发生，设定决策的时间围栏。"
  },
  {
    id: "sop",
    title: "📋 标准 SOP 速查",
    subtitle: "参考",
    tags: ["wiki", "sop", "reference", "速查", "标准化", "流程"],
    content: "心流触发标准SOP速查表。包含任务初始化（T+0）、启动前三分钟校验、执行中防打断机制以及任务收尾标记的标准化操作规程。"
  },
  {
    id: "antipattern",
    title: "🚫 反模式手册",
    subtitle: "参考",
    tags: ["wiki", "antipattern", "warnings", "错误", "心理阻碍", "多任务"],
    content: "心流反模式手册。列举并分析常见的心理阻碍，如过度准备（Over-preparation）、完美主义拖延、多任务并发（Multitasking）、无反馈黑洞等。"
  },
  {
    id: "toon-log",
    title: "📊 TOON 项目日志",
    subtitle: "参考",
    tags: ["wiki", "toon", "logs", "日志", "演进"],
    content: "TOON项目运行与设计日志。记录了第一代心流触发系统在实际研发项目中的上线数据、用户反馈与演进轨迹。"
  },
  {
    id: "b1-completion-state",
    title: "🎯 B1 · 完成态设计",
    subtitle: "第二卷 · 深层原子",
    tags: ["wiki", "atoms", "done", "completion", "B1", "目标模糊"],
    content: "B1完成态设计（Done-State Design）：显式定义任务结束时的具体物质状态或文件状态，防止因目标模糊导致脑力摩擦和无意义的完美主义。"
  },
  {
    id: "b2-interrupt-queue",
    title: "📥 B2 · 中断队列",
    subtitle: "第二卷 · 深层原子",
    tags: ["wiki", "atoms", "interrupt", "queue", "B2", "灵感"],
    content: "B2中断队列（Interrupt Queue）：在受到外部打断或内部灵感突现时，不在主线程立即处理，而是快速记录到异步缓冲队列中，保持当前单线程的连续性。"
  },
  {
    id: "b3-time-fence",
    title: "⏳ B3 · 时间围栏",
    subtitle: "第二卷 · 深层原子",
    tags: ["wiki", "atoms", "time", "fence", "B3", "番茄钟"],
    content: "B3时间围栏（Time Fence）：为当前专注区间设立硬性的截止界限（如番茄钟或30分钟围栏），利用时间压力激活大脑的行动力，防止任务过度发散。"
  },
  {
    id: "b4-context-anchor",
    title: "⚓ B4 · 上下文锚点",
    subtitle: "第二卷 · 深层原子",
    tags: ["wiki", "atoms", "context", "anchor", "B4", "记忆恢复"],
    content: "B4上下文锚点（Context Anchor）：在暂停或结束当前工作时，记录下一部分行动的精确切入线索和工作记忆恢复词，将二次启动成本降到最低。"
  },
  {
    id: "b5-minimum-viable-action",
    title: "🛠️ B5 · 最小可行动作",
    subtitle: "第二卷 · 深层原子",
    tags: ["wiki", "atoms", "mva", "B5", "摩擦力"],
    content: "B5最小可行动作（MVA）：将启动的第一步操作简化为不需要脑力思考的物理动作（如打开编辑器、写一行注释），以极低的门槛跨越静态摩擦力。"
  },
  {
    id: "vol2-combo-ab",
    title: "🔗 跨卷双元组合",
    subtitle: "第二卷 · 深层组合",
    tags: ["wiki", "combos", "cross-volume", "A×B", "协同"],
    content: "A×B跨卷双元组合：如A1(Ontology)×B1(完成态设计)、A3(Lazy)×B2(中断队列)、A5(Single Thread)×B3(Time Fence)等，实现底层专注与深层架构的融合协同。"
  },
  {
    id: "vol2-combo-triple",
    title: "🔗 深层三元组合",
    subtitle: "第二卷 · 深层组合",
    tags: ["wiki", "combos", "triple", "deep", "屏蔽"],
    content: "深层三元组合：例如B1+B4+B5构成快速复归闭环（定义完成态、记录锚点、用最小动作重启），和B2+B3+A5构成抗干扰执行屏蔽环。"
  },
  {
    id: "vol2-system",
    title: "🌐 双卷融合系统",
    subtitle: "第二卷 · 深层组合",
    tags: ["wiki", "system", "fusion", "deep", "对抗"],
    content: "双卷融合系统：A卷5个原子组件与B卷5个深层原子组件全面整合。定义了复杂的并发对抗模型和多任务间的高保真度切换规则。"
  },
  {
    id: "scene-research",
    title: "🔍 场景：研究综述",
    subtitle: "第二卷 · 深层场景",
    tags: ["wiki", "scenes", "research", "研究", "文献", "信息爆炸"],
    content: "信息爆炸环境下的文献与研究综述心流。使用B2中断队列缓存无关文献，用B1定义本次阅读的具体输出指标（如3个核心结论），避免文献深渊。"
  },
  {
    id: "scene-meeting",
    title: "🤝 场景：会议准备",
    subtitle: "第二卷 · 深层场景",
    tags: ["wiki", "scenes", "meeting", "会议", "沟通", "议程"],
    content: "高效会议准备的心流框架。用A1(Ontology)明确会议议程与预期产出状态，用B4(Context Anchor)在会前5分钟建立个人记忆锚点，提升沟通效率。"
  },
  {
    id: "scene-stuck",
    title: "🧱 场景：彻底卡住了",
    subtitle: "第二卷 · 深层场景",
    tags: ["wiki", "scenes", "stuck", "卡住", "情绪", "破局"],
    content: "当任务彻底卡死、情绪焦虑、思绪混乱时的破局方案。执行B5(MVA)物理动作重启，配合A3(Lazy)封锁非关键逻辑，迅速打破僵局重获控制感。"
  },
  {
    id: "meta-energy",
    title: "🔋 能量管理与心流",
    subtitle: "第二卷 · 元认知层",
    tags: ["wiki", "meta", "energy", "能量", "生理", "带宽"],
    content: "元认知能量管理。心流不是恒定的，而是依赖于生理能量（睡眠、饮食）与认知能量（决策带宽）。通过识别黄金时间段，合理分配高耗脑任务。"
  },
  {
    id: "meta-calibration",
    title: "⚙️ 系统校准手册",
    subtitle: "第二卷 · 元认知层",
    tags: ["wiki", "meta", "calibration", "校准", "自检", "回顾"],
    content: "心流系统定期自检与校准指南。每周或每月对个人的心流阻力、阻碍因素、MVA设置进行回顾与微调，保证系统能够长期良性运转。"
  },
  {
    id: "toon-log2",
    title: "📊 TOON 日志 Vol.2",
    subtitle: "第二卷 · 元认知层",
    tags: ["wiki", "toon", "logs", "Vol.2", "工程", "交付"],
    content: "TOON项目日志第二卷。记录了在多维复杂工程背景下，引入B卷深层原子组件后，研发团队在吞吐量、交付周期、工作倦怠率等关键指标上的改善数据。"
  }
];
