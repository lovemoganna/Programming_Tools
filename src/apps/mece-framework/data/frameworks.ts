export interface PromptBlock {
  key: string;
  label: string;
  description: string;
  placeholder: string;
  required: boolean;
}

export interface Framework {
  id: string;
  name: string;
  nameEn: string;
  tagline: string;
  scene: string;
  color: string;
  gradient: string;
  icon: string;
  blocks: PromptBlock[];
  example: Record<string, string>;
  tips: string[];
}

export interface Category {
  id: string;
  label: string;
  icon: string;
  color: string;
  frameworks: Framework[];
}

export const categories: Category[] = [
  {
    id: "creation",
    label: "创作生成",
    icon: "✍️",
    color: "violet",
    frameworks: [
      {
        id: "role-scene-task",
        name: "RST 框架",
        nameEn: "Role · Scene · Task",
        tagline: "角色定义 × 场景锚定 × 任务驱动",
        scene: "适合内容创作、文案生成、故事写作",
        color: "violet",
        gradient: "from-violet-500 to-purple-600",
        icon: "🎭",
        blocks: [
          {
            key: "role",
            label: "角色 Role",
            description: "赋予 AI 明确的专家身份，激活对应知识域",
            placeholder: "例：你是一位拥有 10 年经验的科技媒体主编，擅长将复杂技术转化为大众易懂的叙事",
            required: true,
          },
          {
            key: "scene",
            label: "场景 Scene",
            description: "设定背景与受众，让输出精准对焦",
            placeholder: "例：面向 25-35 岁城市白领读者，平台为微信公众号，阅读时长约 3 分钟",
            required: true,
          },
          {
            key: "task",
            label: "任务 Task",
            description: "清晰描述要完成的具体工作与输出形式",
            placeholder: "例：撰写一篇关于 AI Agent 的深度科普文章，含 3 个实际应用案例，结尾有行动号召",
            required: true,
          },
        ],
        example: {
          role: "你是一位拥有 10 年经验的科技媒体主编，擅长将复杂技术转化为大众易懂的叙事",
          scene: "面向 25-35 岁城市白领读者，平台为微信公众号，阅读时长约 3 分钟",
          task: "撰写一篇关于 AI Agent 的深度科普文章，含 3 个实际应用案例，结尾有行动号召",
        },
        tips: [
          "角色越具体，输出风格越稳定——加入年限、领域、风格偏好",
          "场景中明确受众画像可大幅减少返修次数",
          "任务中加入「输出格式」约束（字数/结构/语气）",
        ],
      },
      {
        id: "aida",
        name: "AIDA 框架",
        nameEn: "Attention · Interest · Desire · Action",
        tagline: "注意力 × 兴趣 × 欲望 × 行动",
        scene: "适合营销文案、产品推广、说服性写作",
        color: "rose",
        gradient: "from-rose-500 to-pink-600",
        icon: "📣",
        blocks: [
          {
            key: "attention",
            label: "注意 Attention",
            description: "描述目标产品/服务及其核心亮点",
            placeholder: "例：一款专为程序员设计的 AI 代码审查工具，减少 60% Bug 遗漏",
            required: true,
          },
          {
            key: "audience",
            label: "受众 Audience",
            description: "定义目标用户的痛点与场景",
            placeholder: "例：中小型创业团队的技术负责人，团队 5-20 人，代码质量参差不齐",
            required: true,
          },
          {
            key: "tone",
            label: "语气 Tone",
            description: "设定文案的情绪基调",
            placeholder: "例：专业可信、稍带紧迫感，避免过度夸大",
            required: false,
          },
          {
            key: "cta",
            label: "行动号召 CTA",
            description: "明确期望用户完成的动作",
            placeholder: "例：引导用户点击「免费试用 14 天」按钮",
            required: true,
          },
        ],
        example: {
          attention: "一款专为程序员设计的 AI 代码审查工具，减少 60% Bug 遗漏",
          audience: "中小型创业团队的技术负责人，团队 5-20 人，代码质量参差不齐",
          tone: "专业可信、稍带紧迫感，避免过度夸大",
          cta: "引导用户点击「免费试用 14 天」按钮",
        },
        tips: [
          "用真实数据替代形容词（「60% 提升」比「大幅提升」有力得多）",
          "痛点描述要击中情绪，欲望部分要点亮解决方案的美好图景",
          "CTA 越具体越好，避免「了解更多」等模糊动作",
        ],
      },
    ],
  },
  {
    id: "analysis",
    label: "分析推理",
    icon: "🧠",
    color: "blue",
    frameworks: [
      {
        id: "cot",
        name: "CoT 框架",
        nameEn: "Chain of Thought",
        tagline: "分步推理 × 显式过程 × 可验证结论",
        scene: "适合复杂推断、数学逻辑、决策分析",
        color: "blue",
        gradient: "from-blue-500 to-cyan-600",
        icon: "🔗",
        blocks: [
          {
            key: "problem",
            label: "问题 Problem",
            description: "清晰陈述需要推理或解决的问题",
            placeholder: "例：分析一家月流水 200 万的本地餐饮品牌，是否值得向全国连锁化扩张",
            required: true,
          },
          {
            key: "constraints",
            label: "约束 Constraints",
            description: "给定已知条件与限制范围",
            placeholder: "例：当前资金储备 800 万，团队 30 人，无供应链管理经验，计划 18 个月内开 20 家门店",
            required: true,
          },
          {
            key: "steps",
            label: "推理指令 Steps",
            description: "要求 AI 分步展示思考过程",
            placeholder: "例：请按「市场分析 → 财务测算 → 风险识别 → 综合结论」逐步推理，每步给出关键判断依据",
            required: true,
          },
          {
            key: "output",
            label: "输出格式 Output",
            description: "指定最终呈现结构",
            placeholder: "例：最终给出「建议 / 谨慎建议 / 不建议」三选一结论，并列出 TOP3 关键风险",
            required: false,
          },
        ],
        example: {
          problem: "分析一家月流水 200 万的本地餐饮品牌，是否值得向全国连锁化扩张",
          constraints: "当前资金储备 800 万，团队 30 人，无供应链管理经验，计划 18 个月内开 20 家门店",
          steps: "请按「市场分析 → 财务测算 → 风险识别 → 综合结论」逐步推理，每步给出关键判断依据",
          output: "最终给出「建议 / 谨慎建议 / 不建议」三选一结论，并列出 TOP3 关键风险",
        },
        tips: [
          "加入「请先思考，再输出」可显著提升推理质量",
          "约束条件越精确，推理越贴合实际——避免「大概」「可能」等模糊量词",
          "要求 AI 在结尾「检验结论」可减少逻辑跳跃",
        ],
      },
      {
        id: "mece-analysis",
        name: "MECE 框架",
        nameEn: "Mutually Exclusive · Collectively Exhaustive",
        tagline: "相互独立 × 完全穷尽 × 结构化拆解",
        scene: "适合问题拆解、结构化报告、战略规划",
        color: "indigo",
        gradient: "from-indigo-500 to-blue-600",
        icon: "🗂️",
        blocks: [
          {
            key: "topic",
            label: "主题 Topic",
            description: "需要被 MECE 拆解的核心议题",
            placeholder: "例：企业数字化转型失败的原因",
            required: true,
          },
          {
            key: "dimension",
            label: "拆解维度 Dimension",
            description: "指定分析视角或分类框架",
            placeholder: "例：从「人员 / 流程 / 技术 / 文化」四个维度拆解，每个维度下不超过 4 个子项",
            required: true,
          },
          {
            key: "depth",
            label: "深度 Depth",
            description: "控制分析的层级与详细程度",
            placeholder: "例：二级结构，每个子项配一个真实企业案例佐证",
            required: false,
          },
          {
            key: "format",
            label: "呈现形式 Format",
            description: "指定输出的可视化或文档结构",
            placeholder: "例：以 Markdown 大纲格式输出，可直接复制为 PPT 提纲",
            required: false,
          },
        ],
        example: {
          topic: "企业数字化转型失败的原因",
          dimension: "从「人员 / 流程 / 技术 / 文化」四个维度拆解，每个维度下不超过 4 个子项",
          depth: "二级结构，每个子项配一个真实企业案例佐证",
          format: "以 Markdown 大纲格式输出，可直接复制为 PPT 提纲",
        },
        tips: [
          "明确告知 AI「请确保各维度之间无重叠、无遗漏」可触发自检行为",
          "预设维度框架（如 4P/SWOT/麦肯锡 7S）比让 AI 自由拆解更稳定",
          "加入「请列出你的分类逻辑」可验证 MECE 质量",
        ],
      },
    ],
  },
  {
    id: "code",
    label: "代码工程",
    icon: "💻",
    color: "emerald",
    frameworks: [
      {
        id: "spec-code",
        name: "SPEC 框架",
        nameEn: "Spec · Pattern · Edge · Check",
        tagline: "规格说明 × 设计模式 × 边界处理 × 验证标准",
        scene: "适合代码生成、架构设计、技术方案评审",
        color: "emerald",
        gradient: "from-emerald-500 to-teal-600",
        icon: "⚙️",
        blocks: [
          {
            key: "spec",
            label: "规格 Spec",
            description: "精确描述功能需求与技术栈",
            placeholder: "例：用 TypeScript + React 实现一个支持多选、搜索过滤的下拉组件，兼容键盘导航",
            required: true,
          },
          {
            key: "pattern",
            label: "设计模式 Pattern",
            description: "指定架构风格、代码规范或参考实现",
            placeholder: "例：遵循 Compound Component 模式，导出 Select/Select.Option/Select.Tag 子组件",
            required: false,
          },
          {
            key: "edge",
            label: "边界条件 Edge",
            description: "列举需要特殊处理的异常与边缘情况",
            placeholder: "例：处理空列表/超长选项文字截断/超过 100 项时虚拟滚动/禁用态",
            required: true,
          },
          {
            key: "check",
            label: "验证标准 Check",
            description: "定义代码质量的验收条件",
            placeholder: "例：附带 Jest 单元测试，覆盖率 > 80%；提供 Storybook 示例；TypeScript 无 any",
            required: false,
          },
        ],
        example: {
          spec: "用 TypeScript + React 实现一个支持多选、搜索过滤的下拉组件，兼容键盘导航",
          pattern: "遵循 Compound Component 模式，导出 Select/Select.Option/Select.Tag 子组件",
          edge: "处理空列表/超长选项文字截断/超过 100 项时虚拟滚动/禁用态",
          check: "附带 Jest 单元测试，覆盖率 > 80%；提供 Storybook 示例；TypeScript 无 any",
        },
        tips: [
          "精确的技术栈约束（版本号）能避免 AI 使用已废弃 API",
          "边界条件是代码质量的分水岭——提前列举等于把 Code Review 提前做了",
          "要求附带测试用例可倒逼 AI 产出更严谨的实现",
        ],
      },
      {
        id: "debug",
        name: "BFS 框架",
        nameEn: "Bug · Fix · Safeguard",
        tagline: "问题定位 × 修复方案 × 防护加固",
        scene: "适合 Debug 调试、性能优化、代码重构",
        color: "orange",
        gradient: "from-orange-500 to-amber-600",
        icon: "🔍",
        blocks: [
          {
            key: "bug",
            label: "问题描述 Bug",
            description: "精确描述现象、错误信息与复现路径",
            placeholder: "例：React 列表渲染时，删除中间项后末尾项的 input 状态丢失。错误：controlled/uncontrolled warning。复现：点击第 3 项删除按钮",
            required: true,
          },
          {
            key: "context",
            label: "上下文 Context",
            description: "提供相关代码片段、依赖版本、环境信息",
            placeholder: "例：React 18.2，列表用 index 作为 key，状态存在父组件 useState 数组中（粘贴代码）",
            required: true,
          },
          {
            key: "fix",
            label: "修复要求 Fix",
            description: "指定修复的范围与约束",
            placeholder: "例：只修改列表渲染逻辑，不重构状态管理，保持原有 API 不变",
            required: false,
          },
          {
            key: "safeguard",
            label: "防护措施 Safeguard",
            description: "要求说明如何避免同类问题再次出现",
            placeholder: "例：解释根因，并给出 ESLint 规则或代码审查检查点，防止同类 Bug",
            required: false,
          },
        ],
        example: {
          bug: "React 列表渲染时，删除中间项后末尾项的 input 状态丢失。错误：controlled/uncontrolled warning。复现：点击第 3 项删除按钮",
          context: "React 18.2，列表用 index 作为 key，状态存在父组件 useState 数组中",
          fix: "只修改列表渲染逻辑，不重构状态管理，保持原有 API 不变",
          safeguard: "解释根因，并给出 ESLint 规则或代码审查检查点，防止同类 Bug",
        },
        tips: [
          "「复现步骤」是 Debug 提示词的核心——越详细越快定位",
          "粘贴真实报错信息（不要截图描述），AI 能精准匹配错误模式",
          "要求「解释根因」比只要「给修复」价值高 3 倍",
        ],
      },
    ],
  },
  {
    id: "learning",
    label: "学习研究",
    icon: "📚",
    color: "amber",
    frameworks: [
      {
        id: "feynman",
        name: "费曼框架",
        nameEn: "Feynman · Analogy · Gap · Reinforce",
        tagline: "简化表达 × 类比迁移 × 认知缺口 × 强化巩固",
        scene: "适合概念学习、知识内化、教学设计",
        color: "amber",
        gradient: "from-amber-500 to-yellow-500",
        icon: "🎓",
        blocks: [
          {
            key: "concept",
            label: "概念 Concept",
            description: "指定需要深度理解的知识点",
            placeholder: "例：Transformer 注意力机制中的 Query-Key-Value 计算过程",
            required: true,
          },
          {
            key: "level",
            label: "认知水平 Level",
            description: "定义学习者的背景知识基准",
            placeholder: "例：我有 Python 基础和高中数学，但没有深度学习经验",
            required: true,
          },
          {
            key: "analogy",
            label: "类比要求 Analogy",
            description: "指定希望借助的类比领域或日常场景",
            placeholder: "例：用「图书馆检索系统」或「考试答题」的类比来解释",
            required: false,
          },
          {
            key: "check",
            label: "自测题 Check",
            description: "要求生成验证理解的练习题",
            placeholder: "例：解释完后出 3 道判断题，帮我验证是否真正理解，并给出答案解析",
            required: false,
          },
        ],
        example: {
          concept: "Transformer 注意力机制中的 Query-Key-Value 计算过程",
          level: "我有 Python 基础和高中数学，但没有深度学习经验",
          analogy: "用「图书馆检索系统」或「考试答题」的类比来解释",
          check: "解释完后出 3 道判断题，帮我验证是否真正理解，并给出答案解析",
        },
        tips: [
          "精确描述认知水平是适配输出难度的关键，比「简单解释」有效 10 倍",
          "要求类比后「回归原概念」可避免类比过度导致的误解",
          "自测题 + 答案是构建「主动回忆」的最佳实践",
        ],
      },
      {
        id: "research",
        name: "PICO 框架",
        nameEn: "Problem · Intervention · Comparison · Outcome",
        tagline: "问题定义 × 干预方案 × 对比基线 × 预期结果",
        scene: "适合研究调研、竞品分析、方案评估",
        color: "teal",
        gradient: "from-teal-500 to-cyan-600",
        icon: "🔬",
        blocks: [
          {
            key: "problem",
            label: "问题 Problem",
            description: "定义研究的核心问题与范围边界",
            placeholder: "例：SaaS 产品免费试用转付费率低于 5% 的根本原因",
            required: true,
          },
          {
            key: "intervention",
            label: "干预 Intervention",
            description: "描述待评估的方案 or 变量",
            placeholder: "例：评估「缩短试用期从 14 天到 7 天」+ 「增加使用量上限提醒」两种干预",
            required: true,
          },
          {
            key: "comparison",
            label: "对比 Comparison",
            description: "指定基线或竞品作为参照",
            placeholder: "例：对比 Notion、Linear、Figma 的 freemium 转化策略",
            required: false,
          },
          {
            key: "outcome",
            label: "结果 Outcome",
            description: "定义成功的衡量指标",
            placeholder: "例：转化率提升 > 2%，NPS 不下降，CAC 增幅 < 15%",
            required: true,
          },
        ],
        example: {
          problem: "SaaS 产品免费试用转付费率低于 5% 的根本原因",
          intervention: "评估「缩短试用期从 14 天到 7 天」+ 「增加使用量上限提醒」两种干预",
          comparison: "对比 Notion、Linear、Figma 的 freemium 转化策略",
          outcome: "转化率提升 > 2%，NPS 不下降，CAC 增幅 < 15%",
        },
        tips: [
          "用数字锚定「结果」（而非「有所提升」）可让分析更有价值",
          "「对比基线」是研究质量的底线——没有对比就没有洞察",
          "输出要求加入「置信度」评估可识别 AI 的推测成分",
        ],
      },
    ],
  },
  {
    id: "productivity",
    label: "效率决策",
    icon: "⚡",
    color: "slate",
    frameworks: [
      {
        id: "scqa",
        name: "SCQA 框架",
        nameEn: "Situation · Complication · Question · Answer",
        tagline: "情境 × 冲突 × 疑问 × 解答",
        scene: "适合商业汇报、方案陈述、说服沟通",
        color: "slate",
        gradient: "from-slate-600 to-gray-700",
        icon: "📊",
        blocks: [
          {
            key: "situation",
            label: "情境 Situation",
            description: "描述当前已知的稳定背景事实",
            placeholder: "例：我司电商 APP 月活 500 万，近 6 个月 GMV 停滞在 2 亿，增速落后行业均值 12%",
            required: true,
          },
          {
            key: "complication",
            label: "冲突 Complication",
            description: "指出打破平衡的关键变化或问题",
            placeholder: "例：竞品上线 AI 个性化推荐后，我司用户次日留存下降 8%，客单价下滑 15%",
            required: true,
          },
          {
            key: "question",
            label: "疑问 Question",
            description: "提炼需要回答的核心问题",
            placeholder: "例：我们应该在 Q3 优先投入 AI 推荐还是优化供应链效率？",
            required: true,
          },
          {
            key: "answer",
            label: "回答要求 Answer",
            description: "指定期望的输出结构与决策框架",
            placeholder: "例：请给出带有优先级排序的 3 个方案，每个方案附投入产出比估算和实施风险",
            required: true,
          },
        ],
        example: {
          situation: "我司电商 APP 月活 500 万，近 6 个月 GMV 停滞在 2 亿，增速落后行业均值 12%",
          complication: "竞品上线 AI 个性化推荐后，我司用户次日留存下降 8%，客单价下滑 15%",
          question: "我们应该在 Q3 优先投入 AI 推荐还是优化供应链效率？",
          answer: "请给出带有优先级排序的 3 个方案，每个方案附投入产出比估算和实施风险",
        },
        tips: [
          "情境只陈述「无争议事实」，不要混入判断或结论",
          "冲突是整个框架的情感引爆点——要让听众感受到「不解决不行」",
          "SCQA 结构本身就是一份完整的 PPT 提纲逻辑",
        ],
      },
      {
        id: "constraints",
        name: "CRAFT 框架",
        nameEn: "Context · Role · Action · Format · Tone",
        tagline: "全要素元提示 · 通用万能框架",
        scene: "适合任意场景的精细化控制，尤其是高要求输出",
        color: "purple",
        gradient: "from-purple-600 to-violet-700",
        icon: "🛠️",
        blocks: [
          {
            key: "context",
            label: "背景 Context",
            description: "提供任务的完整上下文信息",
            placeholder: "例：我是一家 B2B SaaS 公司的产品经理，正在准备向 CTO 汇报 Q4 路线图",
            required: true,
          },
          {
            key: "role",
            label: "角色 Role",
            description: "赋予 AI 最匹配任务的专家身份",
            placeholder: "例：请扮演一位有 15 年经验的企业软件产品总监，熟悉 OKR 和敏捷开发",
            required: true,
          },
          {
            key: "action",
            label: "行动 Action",
            description: "精确描述需要完成的任务动作",
            placeholder: "例：帮我梳理 5 个核心功能的优先级，并为每个功能写一段 100 字以内的价值陈述",
            required: true,
          },
          {
            key: "format",
            label: "格式 Format",
            description: "指定输出的结构、长度、排版要求",
            placeholder: "例：用表格呈现（功能名 | 优先级 | 价值陈述 | 依赖条件），最后附 200 字执行摘要",
            required: true,
          },
          {
            key: "tone",
            label: "语气 Tone",
            description: "控制输出的风格、情绪与专业程度",
            placeholder: "例：正式专业，避免口语化；数据驱动，每个判断需有依据；结论先行",
            required: false,
          },
        ],
        example: {
          context: "我是一家 B2B SaaS 公司的产品经理，正在准备向 CTO 汇报 Q4 路线图",
          role: "请扮演一位有 15 年经验的企业软件产品总监，熟悉 OKR 和敏捷开发",
          action: "帮我梳理 5 个核心功能的优先级，并为每个功能写一段 100 字以内的价值陈述",
          format: "用表格呈现（功能名 | 优先级 | 价值陈述 | 依赖条件），最后附 200 字执行摘要",
          tone: "正式专业，避免口语化；数据驱动，每个判断需有依据；结论先行",
        },
        tips: [
          "CRAFT 是所有框架的「超集」——不确定用哪个框架时，默认用 CRAFT",
          "Format 字段是最容易被忽略但回报最高的字段",
          "Tone 中加入「反例」比「正例」更能精准锁定输出风格",
        ],
      },
    ],
  },
  {
    id: "business",
    label: "商业运营",
    icon: "💼",
    color: "sky",
    frameworks: [
      {
        id: "okr-design",
        name: "OKR 设计框架",
        nameEn: "Objective · Key Results · Initiatives",
        tagline: "战略目标 × 成果量化 × 行动协同",
        scene: "适合公司、团队或个人的 OKR 目标设定与路径拆解",
        color: "sky",
        gradient: "from-sky-500 to-blue-600",
        icon: "🎯",
        blocks: [
          {
            key: "objective",
            label: "目标 Objective",
            description: "设定定性、鼓舞人心且明确方向的核心目标",
            placeholder: "例：大幅提升产品用户体验，让新用户上手过程顺畅无阻",
            required: true,
          },
          {
            key: "key_results",
            label: "关键结果 Key Results",
            description: "用于衡量目标是否达成的定量化核心成果指标（建议 2-4 个）",
            placeholder: "例：1. 新用户次日留存率从 35% 提升至 45%；2. 新手入门流程的跳出率降低 30%；3. 用户首月活跃天数中位数提升至 12 天",
            required: true,
          },
          {
            key: "initiatives",
            label: "具体行动 Initiatives",
            description: "为了达成关键结果而必须实施的关键项目或策略动作",
            placeholder: "例：重构新手引导弹窗，提供渐进式操作教程；优化移动端登录流程，减少第三方验证等待时长",
            required: true,
          },
          {
            key: "alignment",
            label: "协同对齐 Alignment",
            description: "说明该目标如何与上层或其他兄弟团队的目标挂钩",
            placeholder: "例：对齐公司年度战略的「用户规模与黏性增长」；需技术部门协助优化接口响应时间",
            required: false,
          },
        ],
        example: {
          objective: "大幅提升产品用户体验，让新用户上手过程顺畅无阻",
          key_results: "1. 新用户次日留存率从 35% 提升至 45%\n2. 新手入门流程的跳出率降低 30%\n3. 用户首月活跃天数中位数提升至 12 天",
          initiatives: "重构新手引导弹窗，提供渐进式操作教程；优化移动端登录流程，减少第三方验证等待时长",
          alignment: "对齐公司年度战略的「用户规模与黏性增长」；需技术部门协助优化接口响应时间",
        },
        tips: [
          "目标（O）必须是定性而非定量的，必须是鼓舞人心的",
          "关键结果（KR）必须是可度量、可验证的数字或状态值",
          "行动（Initiatives）是具体做的事，它服务于 KR 的达成，不可将 KR 与 Initiative 混淆",
        ],
      },
      {
        id: "user-persona",
        name: "用户画像画布",
        nameEn: "Demographics · Pain Points · Scenarios · Prop",
        tagline: "背景特征 × 核心痛点 × 典型场景 × 价值契机",
        scene: "适合产品经理与市场运营进行目标受众分析和精准定位",
        color: "emerald",
        gradient: "from-emerald-500 to-teal-600",
        icon: "👥",
        blocks: [
          {
            key: "demographic",
            label: "用户属性 Demographics",
            description: "定义画像用户的基本社会背景、收入、地域、角色等",
            placeholder: "例：22-30 岁的职场新人，单身，居住在一二线城市，热衷尝试效率工具，月可支配收入 8k-1.5w",
            required: true,
          },
          {
            key: "pain_points",
            label: "痛点需求 Pain Points",
            description: "指出该群体在日常生活或工作上面临的最迫切麻烦或障碍",
            placeholder: "例：1. 工作任务繁杂，缺乏结构化整理，常常漏掉关键待办；2. 传统笔记软件加载慢、编辑卡顿；3. 缺乏自我驱动力，计划难以坚持",
            required: true,
          },
          {
            key: "scenarios",
            label: "使用场景 Scenarios",
            description: "描述用户会在何种具体时刻或情绪背景下使用此产品",
            placeholder: "例：早晨通勤地铁上用手机快速记下当天计划；工作会议期间用快捷键捕捉闪现的灵感；睡前进行一天的任务回顾",
            required: true,
          },
          {
            key: "proposition",
            label: "价值主张 Propositions",
            description: "我们的产品提供的什么独特特性能够完美契合或解决其痛点",
            placeholder: "例：秒级启动速度、支持 Markdown 语法、独特的「番茄钟+卡片看板」微习惯驱动系统",
            required: false,
          },
        ],
        example: {
          demographic: "22-30 岁的职场新人，单身，居住在一二线城市，热衷尝试效率工具，月可支配收入 8k-1.5w",
          pain_points: "1. 工作任务繁杂，缺乏结构化整理，常常漏掉关键待办\n2. 传统笔记软件加载慢、编辑卡顿\n3. 缺乏自我驱动力，计划难以坚持",
          scenarios: "早晨通勤地铁上用手机快速记下当天计划；工作会议期间用快捷键捕捉闪现灵感；睡前进行一天的任务回顾",
          proposition: "秒级启动速度、支持 Markdown 语法、独特的「番茄钟+卡片看板」微习惯驱动系统",
        },
        tips: [
          "画像要具象化，可以想象出一个具有代表性的真实个体（给画像起个名字，如「职场新人小王」）",
          "痛点要真实且聚焦，多从用户的心理感受和效率损耗切入",
          "场景（Scenarios）必须具备时间、空间、状态或情绪细节",
        ],
      },
    ],
  },
];

export const meceMatrix = [
  {
    dimension: "目标导向",
    values: ["生成创作", "分析推理", "执行操作", "学习内化"],
  },
  {
    dimension: "输入丰富度",
    values: ["极简（一句话）", "结构化（模板填写）", "富文本（粘贴资料）", "多模态（含图表）"],
  },
  {
    dimension: "输出精度要求",
    values: ["探索发散", "结构清晰", "格式严格", "可直接使用"],
  },
  {
    dimension: "迭代方式",
    values: ["一次性输出", "追问细化", "对话式协作", "批量生成"],
  },
];

export const qualityPrinciples = [
  {
    icon: "🎯",
    title: "具体性原则",
    subtitle: "Specificity",
    desc: "用数字、名词、动词替代形容词。「写一篇 800 字的产品发布文案，面向 B 端采购决策者」优于「写一篇好文章」。",
    color: "blue",
  },
  {
    icon: "🔒",
    title: "约束性原则",
    subtitle: "Constraints",
    desc: "明确「不要做什么」与「边界在哪里」。负向约束往往比正向描述更高效锁定输出范围。",
    color: "rose",
  },
  {
    icon: "🔁",
    title: "可迭代原则",
    subtitle: "Iterability",
    desc: "好的提示词是「可填空模板」，变量部分用 {{变量}} 标注，复用时只替换变量即可。",
    color: "emerald",
  },
  {
    icon: "✅",
    title: "可验证原则",
    subtitle: "Verifiability",
    desc: "在提示词末尾加入验收标准：「输出前请自检是否满足以下条件…」可激活模型的自我审查机制。",
    color: "violet",
  },
  {
    icon: "🧩",
    title: "模块化原则",
    subtitle: "Modularity",
    desc: "将复杂任务拆分为多个子提示，分步执行并组合结果，比单一超长提示更稳定可控。",
    color: "amber",
  },
  {
    icon: "📐",
    title: "格式化原则",
    subtitle: "Formatting",
    desc: "显式指定输出格式（Markdown/JSON/表格/列表）比让 AI 自由发挥，排版一致性提升 90%。",
    color: "teal",
  },
];
