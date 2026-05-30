import { DesignTokens } from '../../../theme/design-tokens';
import { hexToRgba } from '../../../utils/theme-utils';

const colors = DesignTokens.colors;

export interface Atom {
  i: string;
  n: string;
  d: string;
  c: string;
  b: string;
  t: string;
}

export interface LoopNode {
  i: string;
  l: string;
  c: string;
}

export interface Callout {
  t: 'b' | 'g' | 'o' | 'p' | 'r';
  i: string;
  s: string;
}

export interface FewShot {
  n: string;
  i: string;
  o: string;
}

export interface TokenItem {
  n: string;
  used: number;
  budget: number;
  c: string;
}

export interface Reflection {
  q: string;
  a: string;
  c: string;
}

export interface MatrixData {
  rows: string[];
  cols: string[];
  cells: number[][];
}

export interface Ticket {
  id: string;
  phase: string;
  pc: string;
  title: string;
  icon: string;
  ac: string;
  ha: string;
  hg: string;
  acc: string;
  tag: string;
  concept: string;
  callouts?: Callout[];
  atoms: Atom[];
  loop: LoopNode[];
  code: string;
  checks: string[];
  fq: string;
  fa: string;
  toon: { f: string[]; v: string[] };
  cv: string;
  diffBad?: string[];
  diffGood?: string[];
  fshots?: FewShot[];
  tokItems?: TokenItem[];
  reflections?: Reflection[];
  matrixData?: MatrixData;
  isRepl?: boolean;
}

export const TICKETS: Ticket[] = [
/* CTX-101 */
{id:'CTX-101',phase:'阶段 IV · 微模式层',pc:colors.info[400],
title:'微模式（Micro-Pattern）——原子之下的最小可行单元',
icon:'🔬',ac:`linear-gradient(90deg,${colors.info[400]},${colors.secondary[500]})`,ha:hexToRgba(colors.info[400], 0.1),
hg:'linear-gradient(135deg,#05101a,#091828)',acc:colors.info[400],
tag:'本体扩展 · 比原子更细粒度的可组合结构',
concept:`你已经掌握了 8 个<em>原子</em>（A~H），但每个原子内部还有更细粒度的<strong>微模式（Micro-Pattern）</strong>。
<br><br>
微模式是"比原子更小、比关键词更大"的可复用提示 structure 单元，类似编程中的<strong>设计模式（Design Pattern）</strong>——
你不发明它，你<em>识别并复用</em>它。
<br><br>
本阶段将系统性地挖掘9种核心微模式：<br>
<strong>P1</strong> 角色声明句·<strong>P2</strong> 思维链·<strong>P3</strong> 人格叠加·<strong>P4</strong> 少样本示例·
<strong>P5</strong> Token预算·<strong>P6</strong> 元反思·<strong>P7</strong> 锚点注入·<strong>P8</strong> 渐进揭示·<strong>P9</strong> 自洽验证`,
callouts:[
  {t:'b',i:'🔬',s:'微模式与原子的关系：原子是"功能模块"，微模式是"实现策略"。同一个原子（如 Role）可以用不同的微模式实现（如 P1 角色声明 或 P3 人格叠加）。'},
  {t:'g',i:'💡',s:'MECE 视角：9种微模式从不同维度（时序/格式/认知/控制）覆盖提示设计的完整解空间，互斥且穷尽。'}
],
atoms:[
  {i:'P1',n:'角色声明句',d:'单句激活身份',c:colors.info[400],b:hexToRgba(colors.info[400], 0.25),t:'时序模式'},
  {i:'P2',n:'思维链',d:'Step-by-Step推理',c:colors.secondary[500],b:hexToRgba(colors.secondary[500], 0.25),t:'认知模式'},
  {i:'P3',n:'人格叠加',d:'多维度人格堆栈',c:colors.danger[400],b:hexToRgba(colors.danger[400], 0.25),t:'身份模式'},
  {i:'P4',n:'少样本示例',d:'输入→输出示范',c:colors.success[400],b:hexToRgba(colors.success[400], 0.25),t:'格式模式'},
  {i:'P5',n:'Token预算',d:'上下文资源管理',c:colors.accent[400],b:hexToRgba(colors.accent[400], 0.25),t:'控制模式'},
  {i:'P6',n:'元反思',d:'自我评估触发',c:colors.warning[500],b:hexToRgba(colors.warning[500], 0.25),t:'质量模式'},
  {i:'P7',n:'锚点注入',d:'关键前提固定',c:colors.success[300],b:hexToRgba(colors.success[300], 0.25),t:'稳定模式'},
  {i:'P8',n:'渐进揭示',d:'信息分层释放',c:colors.info[300],b:hexToRgba(colors.info[300], 0.25),t:'教学模式'},
  {i:'P9',n:'自洽验证',d:'内部一致性检查',c:colors.danger[300],b:hexToRgba(colors.danger[300], 0.25),t:'验证模式'}
],
loop:[
  {i:'🔬',l:'识别\n模式',c:colors.info[400]},{i:'📐',l:'提取\n结构',c:colors.secondary[500]},
  {i:'🧩',l:'复用\n组合',c:colors.success[400]},{i:'✅',l:'验证\n效果',c:colors.accent[400]}
],
code:`// 微模式 = 提示体的"设计模式库"

// 结构定义：每个微模式有固定的形式签名
interface MicroPattern {
  id:       "P1" | "P2" | ... | "P9";
  category: "时序" | "认知" | "身份" | "格式" | "控制" | "质量" | "稳定" | "教学" | "验证";
  template: string;      // 可填充的模板字符串
  atomBind: "A"|"B"|...;  // 所属原子
  effect:   string;      // 对LLM行为的预期影响
  cost:     number;      // 估算Token消耗
}

// 关键洞见：微模式可跨原子使用
// P2(思维链) 可用于 B(Instruction) 或 F(State)
// P4(少样本) 可用于 D(Output) 或 G(Context)`,
checks:['理解微模式与原子的层级关系（Pattern在Atom之下）','认识9种核心微模式的分类（时序/认知/身份/格式/控制/质量/稳定/教学/验证）','理解微模式为什么像设计模式（可识别、可复用、有代价）','知道同一原子可以用不同微模式实现'],
fq:'微模式和原子的关系用一个类比说明',fa:'原子 = 功能模块（如"角色"），微模式 = 实现策略（如"用角色声明句实现角色"）—— 就像"排序"是模块，"快速排序/归并排序"是不同的实现模式',
toon:{f:['工单','阶段','焦点','案例','状态'],v:['CTX-101','阶段IV','微模式总论','9种模式','🟢 COMPLETE']},
cv:'overview'
},

/* CTX-102 */
{id:'CTX-102',phase:'阶段 IV · 微模式层',pc:colors.info[400],
title:'P1 · 角色声明句——单句激活认知框架的最小单元',
icon:'🎙️',ac:`linear-gradient(90deg,${colors.info[400]},${colors.info[300]})`,ha:hexToRgba(colors.info[400], 0.08),
hg:'linear-gradient(135deg,#051018,#082030)',acc:colors.info[400],
tag:'微模式 P1 · 一句话 · 高激活效率 · 本工单唯一案例',
concept:`<strong>角色声明句（Role Declaration Sentence, P1）</strong>是激活 LLM 认知框架的<em>最小可行提示单元</em>。
<br><br>
它只有一句话，但包含3个必要信息位：<br>
<strong>[身份标签]</strong> + <strong>[专业领域]</strong> + <strong>[行为承诺]</strong>
<br><br>
研究表明，一句精准的角色声明句在大多数任务上能达到完整角色定义 <em>80%</em> 的效果，
以 <em>1/10 的 Token 消耗</em> 换取高性价比的认知激活。`,
callouts:[
  {t:'b',i:'⚡',s:'P1 的适用场景：Token 预算紧张时、快速原型阶段、单轮对话任务。不适合：需要稳定风格的长对话、高精度的专业任务。'},
  {t:'o',i:'🧪',s:'神经语言学原理：角色词汇（如"架构师"）在预训练语料中与大量专业文本共现，声明句直接激活这些共现关系，相当于"地址寻址"而非"内容复制"。'}
],
atoms:[
  {i:'👤',n:'[身份标签]',d:'职业/专业身份词',c:colors.info[400],b:hexToRgba(colors.info[400], 0.25),t:'必需'},
  {i:'🎯',n:'[专业领域]',d:'具体学科/技术栈',c:colors.secondary[500],b:hexToRgba(colors.secondary[500], 0.25),t:'必需'},
  {i:'🤝',n:'[行为承诺]',d:'将要做什么',c:colors.success[400],b:hexToRgba(colors.success[400], 0.25),t:'必需'},
  {i:'💪',n:'[强度修饰]',d:'资深/顶尖/精通',c:colors.accent[400],b:hexToRgba(colors.accent[400], 0.25),t:'可选增益'}
],
loop:[
  {i:'✍️',l:'写\n声明句',c:colors.info[400]},{i:'🧪',l:'测试\n激活',c:colors.secondary[500]},
  {i:'📏',l:'评估\n效果',c:colors.warning[500]},{i:'✂️',l:'精简\n迭代',c:colors.success[400]}
],
diffBad:['"请你帮我分析这段代码。"','"作为AI助手，请..."','"你是个很有帮助的AI..."'],
diffGood:[
  '你是一位资深前端架构师，专注于性能优化，将以工程师视角审查我的代码。',
  '你是一位Kubernetes专家，拥有大规模集群运维经验，将帮我诊断这个配置问题。',
  '你是一位UX研究员，擅长用户访谈设计，将指导我设计本次调研方案。'
],
code:`// 角色声明句 P1 — 三信息位模板

// 模板签名
P1_TEMPLATE = "你是一位{强度?}{身份标签}，{专业领域描述}，将{行为承诺}。"

// ── 案例实例化 ──

// 场景：代码审查
"你是一位资深后端架构师，精通分布式系统与高并发设计，将以架构层面审查我的代码并指出系统性风险。"

// 场景：文案优化
"你是一位顶级UX文案设计师，专注于SaaS产品的转化率优化，将帮我重写这段落地页文案使其提升点击意愿。"

// 场景：数学辅导
"你是一位高中数学教师，擅长用直觉性类比解释抽象概念，将一步步引导我理解这道概率题。"

// Token对比：完整角色定义 ~200 tokens
//             P1声明句       ~30  tokens
//             效能比：约 80%效果 / 15%消耗 ⚡`,
checks:['掌握 P1 的三信息位结构（身份+领域+承诺）','能在30字内写出一个高效角色声明句','理解 P1 的适用场景（Token紧张/快速原型）','知道何时需要升级到完整角色定义（长对话/高精度）'],
fq:'P1 角色声明句包含哪三个必要信息位？',fa:'① 身份标签（我是谁）② 专业领域（我擅长什么）③ 行为承诺（我将做什么）—— 三位缺一则激活不完整，四个字记住：「身·域·为·诺」',
toon:{f:['工单','微模式','模板','Token估算','状态'],v:['CTX-102','P1·角色声明','三信息位','~30 tokens','🟢 COMPLETE']},
cv:'p1'
},

/* CTX-103 */
{id:'CTX-103',phase:'阶段 IV · 微模式层',pc:colors.info[400],
title:'P2 · 思维链（CoT）——强制外化推理过程的认知触发器',
icon:'🧠',ac:`linear-gradient(90deg,${colors.secondary[500]},${colors.primary[500]})`,ha:hexToRgba(colors.secondary[500], 0.1),
hg:'linear-gradient(135deg,#0f0520,#180a30)',acc:colors.secondary[500],
tag:'微模式 P2 · 单触发词 · 推理质量×3 · 本工单唯一案例',
concept:`<strong>思维链（Chain-of-Thought, CoT）</strong>是通过一个简单的触发短语，让 LLM 在给出答案前<em>显式外化推理过程</em>的微模式。
<br><br>
为什么有效？LLM 生成 token 时是<em>自回归</em>的——它在生成每个 token 时，前面的 token 都是"已知信息"。
CoT 让 LLM 先生成推理步骤，这些步骤反过来<strong>约束和校正</strong>后续的答案生成。
<br><br>
三种 CoT 强度：<br>
<strong>CoT-Lite</strong>：「让我们一步步思考」（7 tokens）<br>
<strong>CoT-Struct</strong>：「先分析→再推导→最后结论」（20 tokens）<br>
<strong>CoT-Full</strong>：「请展示你的完整推理过程，包括假设、步骤和验证」（30 tokens）`,
callouts:[
  {t:'p',i:'🧠',s:'自回归原理：LLM 生成"2+2=？"时若不加 CoT，直接映射到常见答案"4"；加入 CoT 后，"2加2，个位相加得4"这个中间步骤让后续的答案生成有了显式的"计算路径"支撑。'},
  {t:'g',i:'📊',s:'研究数据：在数学推理任务上，CoT 将 LLM 准确率从 17% 提升至 58%（Wei et al., 2022）。对于需要多步推理的任务，CoT 是最高 ROI 的微模式。'}
],
atoms:[
  {i:'⚡',n:'CoT-Lite',d:'「让我们一步步思考」',c:colors.primary[500],b:hexToRgba(colors.primary[500], 0.25),t:'7 tokens'},
  {i:'📊',n:'CoT-Struct',d:'「分析→推导→结论」',c:colors.secondary[500],b:hexToRgba(colors.secondary[500], 0.25),t:'20 tokens'},
  {i:'🔬',n:'CoT-Full',d:'「展示完整推理+验证」',c:colors.danger[400],b:hexToRgba(colors.danger[400], 0.25),t:'30 tokens'},
  {i:'🔄',n:'Self-CoT',d:'「质疑你自己的推理」',c:colors.accent[400],b:hexToRgba(colors.accent[400], 0.25),t:'高级模式'}
],
loop:[
  {i:'❓',l:'提出\n问题',c:colors.secondary[500]},{i:'⚡',l:'触发\nCoT',c:colors.primary[500]},
  {i:'🧠',l:'外化\n推理',c:colors.danger[400]},{i:'✅',l:'校正\n答案',c:colors.success[400]}
],
diffBad:['"2的10次方是多少？"（无CoT，直接跳结论）','"这段代码有什么问题？"（无推理路径）','"哪个方案更好？"（无分析过程）'],
diffGood:['「2的10次方是多少？让我们一步步计算。」→推理路径：2¹=2,2²=4...2¹⁰=1024','"这段代码有什么问题？请先分析代码结构，再识别潜在风险，最后给出改进建议。"','"哪个方案更好？请展示你的评估框架、每个维度的打分和最终推荐理由。"'],
code:`// 思维链 P2 — 三强度模板

// ── CoT-Lite（最小触发，高性价比）──
trigger_lite = "让我们一步步思考："
trigger_lite_en = "Let's think step by step:"

// ── CoT-Struct（结构化推理路径）──
trigger_struct = \`
请按以下顺序回答：
**分析**：识别关键信息和约束条件
**推导**：基于分析逐步推理  
**结论**：给出明确的答案和置信度
\`

// ── CoT-Full（完整推理+自我验证）──
trigger_full = \`
请展示你的完整推理过程：
1. 陈述你的假设和前提
2. 逐步推导（每步说明依据）
3. 给出初步结论
4. 反向验证：结论是否与前提一致？
5. 最终答案
\`

// ── 本工单唯一案例：数学证明场景 ──
"证明勾股定理。让我们一步步思考：
首先，考虑一个直角三角形，三边为 a, b, c（c为斜边）..."`,
checks:['理解 CoT 有效的自回归原理（中间步骤校正后续生成）','区分三种 CoT 强度（Lite/Struct/Full）及适用场景','能为不同复杂度的任务选择匹配的 CoT 强度','知道 Self-CoT（质疑自己的推理）的进阶用法'],
fq:'CoT 为什么能提升 LLM 的推理准确率？',fa:'自回归机制：LLM 生成答案时，前面的推理步骤是"已知上下文"，显式的中间推导约束和校正了最终答案的生成 —— 不是更聪明，是给了更多"思考空间"',
toon:{f:['工单','微模式','触发词','效果','状态'],v:['CTX-103','P2·思维链','让我们一步步','推理×3','🟢 COMPLETE']},
cv:'cot'
},

/* CTX-104 */
{id:'CTX-104',phase:'阶段 IV · 微模式层',pc:colors.info[400],
title:'P3 · 人格叠加——多维度人格堆栈激活复合视角',
icon:'🎭',ac:`linear-gradient(90deg,${colors.danger[400]},${colors.secondary[500]})`,ha:hexToRgba(colors.danger[400], 0.1),
hg:'linear-gradient(135deg,#1a0515,#220820)',acc:colors.danger[400],
tag:'微模式 P3 · 多人格堆栈 · 对话内部多视角 · 本工单唯一案例',
concept:`<strong>人格叠加（Persona Stack, P3）</strong>在单个提示体中叠加<em>多个相互制衡的视角</em>，
让 LLM 模拟内部的"多角色讨论"，从而产生比单一角色更全面、更有张力的输出。
<br><br>
经典结构：<strong>创造者 + 批评者 + 中立仲裁者</strong><br>
每个人格有独立的立场和权重，最终输出是它们协商的结果。
<br><br>
适用场景：决策分析、风险评估、创意评审、辩证思考`,
callouts:[
  {t:'p',i:'🎭',s:'对话内辩证：P3 本质上是"提示体内部的苏格拉底对话"。创造者提供方案，批评者找漏洞，仲裁者综合，这个三角张力比单一视角的输出质量高得多。'},
  {t:'o',i:'⚠️',s:'代价提醒：P3 的 Token 消耗是单角色的 2~3 倍。只在需要多视角权衡的任务中使用，简单问答任务用 P1 即可。'}
],
atoms:[
  {i:'🌟',n:'创造者人格',d:'积极、开创、给出方案',c:colors.danger[400],b:hexToRgba(colors.danger[400], 0.25),t:'正向'},
  {i:'🔴',n:'批评者人格',d:'挑剔、严苛、找漏洞',c:colors.danger[500],b:hexToRgba(colors.danger[500], 0.25),t:'负向'},
  {i:'⚖️',n:'仲裁者人格',d:'中立、综合、作决策',c:colors.primary[500],b:hexToRgba(colors.primary[500], 0.25),t:'中立'},
  {i:'🔬',n:'专家人格',d:'深度知识的专业视角',c:colors.info[300],b:hexToRgba(colors.info[300], 0.25),t:'领域'}
],
loop:[
  {i:'🌟',l:'创造者\n提方案',c:colors.danger[400]},{i:'🔴',l:'批评者\n找漏洞',c:colors.danger[500]},
  {i:'⚖️',l:'仲裁者\n综合',c:colors.primary[500]},{i:'📤',l:'输出\n结论',c:colors.success[400]}
],
diffBad:['"帮我评估这个商业计划。"（单视角，可能只给正面反馈）','没有制衡机制，输出倾向于迎合用户期望','缺少批判性视角，产生"确认偏误"'],
diffGood:['创造者：识别计划的创新点和机会','批评者：列出具体风险、假设漏洞、执行障碍','仲裁者：综合两方，给出带条件的推荐'],
code:`// 人格叠加 P3 — 三角制衡模板

\`
## Persona Stack（人格叠加协议）

你将同时扮演以下三个内部人格，每个人格轮流发言，
最终由仲裁者给出综合结论：

### 🌟 创造者（Creator）
- 立场：积极寻找机会和可能性
- 风格：开放、建设性、聚焦潜力
- 任务：提出方案的3个核心优势

### 🔴 批评者（Critic）  
- 立场：严格审查风险和假设
- 风格：挑剔、精确、不妥协
- 任务：指出方案的3个致命风险

### ⚖️ 仲裁者（Arbiter）
- 立场：中立，综合两方观点
- 风格：客观、务实、给出建议
- 任务：权衡后给出有条件的最终建议

---
输出格式：
**[创造者]:** ...
**[批评者]:** ...
**[仲裁者综合]:** ...
\`

// 本工单唯一案例：评估一个新功能方案
// 应用 P3 后，输出包含正反两方的完整分析`,
checks:['理解人格叠加的三角制衡结构（创造者/批评者/仲裁者）','知道 P3 适用于决策分析、风险评估等需要多视角的场景','理解 P3 的 Token 代价（2~3倍）及适用边界','能为特定场景定义具有张力的人格组合'],
fq:'人格叠加（P3）如何避免 LLM 的"确认偏误"？',fa:'通过内置批评者人格，强制 LLM 主动寻找方案的漏洞 and 风险 —— 创造者和批评者的张力让仲裁者的综合更接近真实的全面评估，而不只是迎合用户期望',
toon:{f:['工单','微模式','结构','Token代价','状态'],v:['CTX-104','P3·人格叠加','三角制衡','2~3x','🟢 COMPLETE']},
cv:'persona'
},

/* CTX-105 */
{id:'CTX-105',phase:'阶段 IV · 微模式层',pc:colors.info[400],
title:'P4 · 少样本示例（Few-Shot）——用输入输出对定义期望格式',
icon:'📐',ac:`linear-gradient(90deg,${colors.success[400]},${colors.info[300]})`,ha:hexToRgba(colors.success[400], 0.08),
hg:'linear-gradient(135deg,#011508,#022012)',acc:colors.success[400],
tag:'微模式 P4 · 3~5示例 · 隐式格式契约 · 本工单唯一案例',
concept:`<strong>少样本示例（Few-Shot Prompting, P4）</strong>通过提供 3~5 个「输入→期望输出」对，
让 LLM 通过<em>模式识别</em>理解你的期望格式，而无需用文字明确描述规则。
<br><br>
关键原理：LLM 在预训练时学习了大量的"输入→输出"模式。Few-Shot 示例触发了这种<strong>上下文学习（In-Context Learning）</strong>能力——
它不是微调权重，而是通过示例在推理时动态"学习"任务格式。
<br><br>
示例设计原则（MECE）：<br>
<strong>多样性</strong>：覆盖不同的边界情况<br>
<strong>代表性</strong>：选择最典型的正确案例<br>
<strong>一致性</strong>：输出格式完全统一`,
callouts:[
  {t:'g',i:'📐',s:'隐式规则 vs 显式规则：用语言描述格式规则（显式）往往模糊且耗 Token；Few-Shot 示例（隐式）直接展示期望输出，LLM 的模式识别比规则理解更可靠。'},
  {t:'b',i:'🔬',s:'样本数量规律：0-shot（无示例）→ 1-shot（一个示例）→ 3-shot（三个示例）→ 5-shot（五个示例）。研究显示 3-shot 是性价比最高的数量，5-shot 之后边际效益递减。'}
],
atoms:[
  {i:'1️⃣',n:'0-Shot',d:'无示例，纯指令',c:colors.success[400],b:hexToRgba(colors.success[400], 0.2),t:'~0 tokens'},
  {i:'2️⃣',n:'1-Shot',d:'单示例，基础格式',c:colors.info[300],b:hexToRgba(colors.info[300], 0.2),t:'~50 tokens'},
  {i:'3️⃣',n:'3-Shot',d:'三示例，最优性价比',c:colors.info[400],b:hexToRgba(colors.info[400], 0.2),t:'~150 tokens'},
  {i:'4️⃣',n:'5-Shot',d:'五示例，覆盖边界',c:colors.primary[500],b:hexToRgba(colors.primary[500], 0.2),t:'~250 tokens'}
],
loop:[
  {i:'🎯',l:'选择\n代表样本',c:colors.success[400]},{i:'📝',l:'统一\n格式',c:colors.info[300]},
  {i:'🧩',l:'排序\n示例',c:colors.info[400]},{i:'✅',l:'验证\n泛化',c:colors.primary[500]}
],
diffBad:['"输出JSON格式"（规则描述模糊）','示例格式不一致（LLM无法识别规律）','示例都是同类情况（缺乏多样性）'],
diffGood:['示例1：简单正例（展示基础格式）','示例2：复杂正例（展示完整边界）','示例3：边界情况（展示异常处理）'],
fshots:[
  {n:'示例 1 — 基础情感分析',i:'这个产品真的很好用，强烈推荐！',o:'{"sentiment":"positive","confidence":0.95,"keywords":["好用","推荐"]}'},
  {n:'示例 2 — 复杂混合情感',i:'价格有点贵，但质量确实不错。',o:'{"sentiment":"mixed","confidence":0.78,"keywords":["贵","质量好"]}'},
  {n:'示例 3 — 边界：无情感倾向',i:'这是一款黑色手机。',o:'{"sentiment":"neutral","confidence":0.92,"keywords":["黑色","手机"]}'}
],
code:`// 少样本示例 P4 — 3-Shot 情感分析案例

\`
## Few-Shot Examples（少样本示例）

请按以下示例的格式分析输入文本的情感：

**示例 1：**
输入: "这个产品真的很好用，强烈推荐！"
输出: {"sentiment":"positive","confidence":0.95,"keywords":["好用","推荐"]}

**示例 2：**
输入: "价格有点贵，但质量确实不错。"
输出: {"sentiment":"mixed","confidence":0.78,"keywords":["贵","质量好"]}

**示例 3：**
输入: "这是一款黑色手机。"
输出: {"sentiment":"neutral","confidence":0.92,"keywords":["黑色","手机"]}

---
现在请分析：
输入: "{user_input}"
输出:
\`

// 关键设计决策：
// 1. 示例排列：简单→复杂→边界（渐进覆盖）
// 2. 输出格式：100%统一的JSON（LLM自动对齐）
// 3. 字段命名：与业务术语一致（减少歧义）`,
checks:['理解 Few-Shot 触发"上下文学习（ICL）"的机制','掌握示例设计三原则（多样性/代表性/一致性）','知道 3-Shot 是最优性价比的数量','能为特定格式任务设计高质量的少样本示例'],
fq:'Few-Shot 示例为什么比用文字描述格式规则更有效？',fa:'LLM 的模式识别能力强于规则理解能力 —— 示例直接展示"输入→输出"的映射关系，LLM 能可靠地从模式中推导规则；而自然语言描述的规则往往有歧义或被忽略',
toon:{f:['工单','微模式','最优数量','机制','状态'],v:['CTX-105','P4·Few-Shot','3-Shot','上下文学习','🟢 COMPLETE']},
cv:'fewshot'
},

/* CTX-106 */
{id:'CTX-106',phase:'阶段 IV · 微模式层',pc:colors.info[400],
title:'P5 · Token 预算——上下文窗口的资源经济学',
icon:'💰',ac:`linear-gradient(90deg,${colors.accent[400]},${colors.warning[500]})`,ha:hexToRgba(colors.accent[400], 0.08),
hg:'linear-gradient(135deg,#1a1200,#251800)',acc:colors.accent[400],
tag:'微模式 P5 · 资源分配 · 优先级排序 · 本工单唯一案例',
concept:`<strong>Token 预算管理（Token Budget, P5）</strong>是将上下文窗口视为<em>有限资源</em>并进行最优分配的微模式。
<br><br>
上下文窗口 = 有限内存。每个原子、每条示例、每段背景知识都在消耗这个资源。
P5 的核心是建立<strong>Token 分配优先级矩阵</strong>，确保高价值信息优先，低价值信息被压缩或裁剪。
<br><br>
Token 效用公式：<em>效用 = 相关性 × 精确性 / Token消耗</em>`,
callouts:[
  {t:'o',i:'💰',s:'Token 经济学定律：在固定上下文窗口内，添加低价值内容会"挤出"高价值内容的影响力。注意力机制是零和的——总注意力恒定，无关内容分散了对关键信息的注意。'},
  {t:'b',i:'📊',s:'实用配方（8K窗口）：Role 5% + Instruction 10% + Constraint 5% + Context 40% + Few-Shot 20% + Output模板 10% + 对话历史 10%。比例根据任务类型调整。'}
],
atoms:[
  {i:'📊',n:'预算分配',d:'各原子的Token占比规划',c:colors.accent[400],b:hexToRgba(colors.accent[400], 0.25),t:'策略'},
  {i:'✂️',n:'内容压缩',d:'去除冗余，保留信号',c:colors.warning[500],b:hexToRgba(colors.warning[500], 0.25),t:'执行'},
  {i:'📈',n:'优先级矩阵',d:'重要×紧急的Token分配',c:colors.danger[500],b:hexToRgba(colors.danger[500], 0.25),t:'决策'},
  {i:'🔄',n:'滑动窗口',d:'动态裁剪历史对话',c:colors.success[400],b:hexToRgba(colors.success[400], 0.25),t:'动态'}
],
loop:[
  {i:'📏',l:'测量\n现有用量',c:colors.accent[400]},{i:'📊',l:'分析\n价值密度',c:colors.warning[500]},
  {i:'✂️',l:'压缩\n低价值',c:colors.danger[500]},{i:'✅',l:'验证\n效果不降',c:colors.success[400]}
],
tokItems:[
  {n:'Role 角色',used:180,budget:300,c:colors.info[400]},
  {n:'Instruction 指令',used:420,budget:500,c:colors.secondary[500]},
  {n:'Constraint 约束',used:290,budget:250,c:colors.warning[500]},
  {n:'Context 上下文',used:1800,budget:2000,c:colors.primary[500]},
  {n:'Few-Shot 示例',used:750,budget:800,c:colors.success[400]},
  {n:'Output 格式',used:200,budget:300,c:colors.info[300]},
  {n:'对话历史',used:3200,budget:2850,c:colors.danger[500]}
],
code:`// Token 预算管理 P5 — 分配规划模板

\`
## Token Budget Protocol

**总可用窗口**: 8192 tokens  
**预留给响应**: 2048 tokens  
**提示体可用**:  6144 tokens

### 分配规划
| 组件           | 分配tokens | 优先级 |
|---------------|-----------|--------|
| Role(A)       | 300       | ⭐⭐⭐  |
| Instruction(B)| 500       | ⭐⭐⭐⭐ |
| Constraint(C) | 250       | ⭐⭐⭐  |
| Context(G)    | 2400      | ⭐⭐⭐⭐ |
| Few-Shot(P4)  | 900       | ⭐⭐⭐  |
| Output(D)     | 300       | ⭐⭐   |
| History       | 1494      | ⭐⭐   |

### 压缩规则（当超出预算时）
1. 首先压缩：对话历史（保留最近5轮）
2. 其次压缩：Few-Shot 示例（5-shot→3-shot）
3. 最后压缩：Context（按相关性排序，截断低分项）
4. 永不压缩：Role + Instruction（核心框架）
\``,
checks:['理解上下文窗口是零和资源（Token经济学）','掌握Token效用公式（相关性×精确性/消耗）','能为具体任务设计Token分配优先级矩阵','知道压缩顺序（历史→示例→上下文，核心框架不压缩）'],
fq:'Token 预算管理的核心公式是什么？',fa:'Token效用 = 相关性 × 精确性 / Token消耗 —— 高相关+高精确+低消耗 = 高效用信息优先保留；低相关/高冗余 = 首先压缩',
toon:{f:['工单','微模式','核心公式','窗口规划','状态'],v:['CTX-106','P5·Token预算','相关×精确/消耗','8192分配','🟢 COMPLETE']},
cv:'token'
},

/* CTX-107 */
{id:'CTX-107',phase:'阶段 IV · 微模式层',pc:colors.info[400],
title:'P6 · 元反思——让 LLM 评估自己输出的质量',
icon:'🪞',ac:`linear-gradient(90deg,${colors.warning[500]},${colors.accent[400]})`,ha:hexToRgba(colors.warning[500], 0.08),
hg:'linear-gradient(135deg,#1a0a00,#251400)',acc:colors.warning[500],
tag:'微模式 P6 · 自评分 · 质量触发 · 本工单唯一案例',
concept:`<strong>元反思（Meta-Reflection, P6）</strong>是在 LLM 生成输出后，立即触发一轮<em>自我质量评估</em>的微模式。
<br><br>
它利用了 LLM 的一个关键特性：<strong>评估比生成更可靠</strong>——
LLM 判断"这个答案是否正确"的能力，往往强于"直接生成正确答案"的能力。
<br><br>
三种元反思触发方式：<br>
<strong>P6-Score</strong>：「给你的回答打分（1-10），并说明理由」<br>
<strong>P6-Critique</strong>：「指出你刚才回答的3个潜在问题」<br>
<strong>P6-Revise</strong>：「基于以上批评，重写一个更好的版本」`,
callouts:[
  {t:'o',i:'🪞',s:'评估>生成的原理：LLM 在生成时受到采样随机性影响；在评估时，它可以在更宽的注意力视野下审视整个输出，相当于从"作者视角"切换到"编辑视角"。'},
  {t:'b',i:'🔄',s:'P6 + P2（CoT）的组合：先用 CoT（P2）外化推理过程，再用 Meta-Reflection（P6）评估推理质量，最后修订。这个"生成→评估→修订"三步循环是目前质量最高的提示模式之一。'}
],
atoms:[
  {i:'📊',n:'P6-Score',d:'「给回答打分1-10，说明理由」',c:colors.warning[500],b:hexToRgba(colors.warning[500], 0.25),t:'评分模式'},
  {i:'🔍',n:'P6-Critique',d:'「指出3个潜在问题」',c:colors.accent[400],b:hexToRgba(colors.accent[400], 0.25),t:'批评模式'},
  {i:'✏️',n:'P6-Revise',d:'「基于批评重写更好版本」',c:colors.danger[500],b:hexToRgba(colors.danger[500], 0.25),t:'修订模式'},
  {i:'🔄',n:'P6-Loop',d:'「迭代直到评分≥8分」',c:colors.success[400],b:hexToRgba(colors.success[400], 0.25),t:'循环模式'}
],
loop:[
  {i:'📤',l:'初步\n输出',c:colors.warning[500]},{i:'🪞',l:'元反思\n自评',c:colors.accent[400]},
  {i:'🔍',l:'识别\n问题',c:colors.danger[500]},{i:'✏️',l:'修订\n输出',c:colors.success[400]}
],
reflections:[
  {q:'我的回答是否完整覆盖了问题的所有方面？',a:'评估维度：需求拆解 + 边界情况 + 例外处理',c:colors.warning[500]},
  {q:'回答中是否有逻辑跳跃或未经论证的假设？',a:'评估维度：推理链完整性 + 假设显式化',c:colors.accent[400]},
  {q:'格式和长度是否符合输出格式约束？',a:'评估维度：字数 + 结构 + 可读性',c:colors.danger[500]},
  {q:'如果我是一个挑剔的专家读者，会提出什么质疑？',a:'评估维度：专业准确性 + 细节深度',c:colors.success[400]}
],
code:`// 元反思 P6 — 生成→评估→修订三步循环

\`
## Meta-Reflection Protocol（元反思协议）

在完成主要输出后，必须立即执行元反思：

### 第一步：自评分（P6-Score）
「我给这个回答打 [X]/10 分，理由：
  - 优点：...
  - 不足：...」

### 第二步：自我批评（P6-Critique）
「如果我是一个严苛的专家评审，我会质疑：
  1. [潜在逻辑漏洞]
  2. [遗漏的重要信息]
  3. [可能的误导性表述]」

### 第三步：条件修订（P6-Revise）
IF 自评分 < 8:
  → 基于第二步的批评，重写回答
  → 重新执行 P6-Score，直到评分 ≥ 8 或迭代 ≥ 2 次
ELSE:
  → 附上简短的"可信度声明"
\`

// 本工单唯一案例：技术文档审查
// 应用 P6 后：初稿→自评6/10→批评3点→修订→8/10
// 最终输出质量显著高于无反思版本`,
checks:['理解「评估>生成」的原理（编辑视角优于作者视角）','掌握三种元反思触发方式（Score/Critique/Revise）','能设计4个维度的自我评估问题','理解 P6 + P2（CoT）的组合如何形成最高质量提示模式'],
fq:'为什么 LLM 评估回答的能力强于直接生成高质量回答？',fa:'生成时受采样随机性影响，且注意力分散在推理过程；评估时可以在更宽的注意力视野下审视整个输出 —— 相当于"作者写作"切换到"编辑审稿"，视角不同质量不同',
toon:{f:['工单','微模式','触发方式','组合','状态'],v:['CTX-107','P6·元反思','Score→Critique→Revise','P6+P2','🟢 COMPLETE']},
cv:'reflect'
},

/* CTX-108 */
{id:'CTX-108',phase:'阶段 IV · 微模式层',pc:colors.info[400],
title:'P7 · 锚点注入——防止上下文漂移的认知钉子',
icon:'⚓',ac:`linear-gradient(90deg,${colors.success[300]},${colors.success[400]})`,ha:hexToRgba(colors.success[300], 0.08),
hg:'linear-gradient(135deg,#0a1400,#122000)',acc:colors.success[300],
tag:'微模式 P7 · 关键前提固定 · 防漂移 · 本工单唯一案例',
concept:`<strong>锚点注入（Anchor Injection, P7）</strong>通过在提示体的<em>战略位置</em>插入关键前提句，
防止 LLM 在长对话中因"上下文漂移"而偏离核心约束。
<br><br>
问题根源：LLM 的注意力权重随 token distance 指数衰减——越远的指令影响越弱。
锚点注入在<strong>开头、中间、结尾</strong>三处重复核心约束，形成认知"钉子"。
<br><br>
三种锚点类型：<br>
<strong>首锚</strong>：开头的角色/目标声明（最高权重）<br>
<strong>中锚</strong>：长提示体中部的关键约束重申<br>
<strong>尾锚</strong>：紧邻输出区的最后提醒（次高权重）`,
callouts:[
  {t:'g',i:'⚓',s:'注意力衰减规律：Transformer 中远距离 token 之间的有效注意力权重会随距离增加而衰减。这意味着放在开头的指令在长对话后期影响力减弱，尾锚恰好弥补了这个缺陷。'},
  {t:'b',i:'🔑',s:'尾锚黄金法则：在输出格式定义的正上方（紧邻输出的最后一条指令）放置最关键的约束，因为这个位置对输出的影响力最强（"时近性偏好"）。'}
],
atoms:[
  {i:'⚓',n:'首锚',d:'开头角色/目标声明',c:colors.success[300],b:hexToRgba(colors.success[300], 0.25),t:'最高权重'},
  {i:'🔗',n:'中锚',d:'中部关键约束重申',c:colors.success[400],b:hexToRgba(colors.success[400], 0.25),t:'中等权重'},
  {i:'📍',n:'尾锚',d:'紧邻输出的最后提醒',c:colors.info[300],b:hexToRgba(colors.info[300], 0.25),t:'次高权重'},
  {i:'🔄',n:'周期锚',d:'每N轮自动重注入',c:colors.info[400],b:hexToRgba(colors.info[400], 0.25),t:'动态锚'}
],
loop:[
  {i:'⚓',l:'首锚\n设置',c:colors.success[300]},{i:'📝',l:'主体\n内容',c:colors.success[400]},
  {i:'🔗',l:'中锚\n重申',c:colors.info[300]},{i:'📍',l:'尾锚\n固定',c:colors.info[400]}
],
diffBad:['所有约束堆在开头（远处指令被遗忘）','长对话无重申机制（漂移风险高）','输出前没有最后提醒（格式偏差）'],
diffGood:['首锚：开头 "你是X，任务是Y，核心约束是Z"','中锚：长提示中部 "【重要】始终遵守：不虚构、字数≤400"','尾锚：输出格式前 "⚠️ 确保：输出必须为JSON格式，不含任何额外说明"'],
code:`// 锚点注入 P7 — 三锚位布局

\`
⚓【首锚 — 开头】
你是一位数据分析专家，任务是分析销售数据，
核心约束：所有数值必须基于数据，不得推测或假设。

[... 详细指令 ...]
[... 上下文注入 ...]
[... Few-Shot 示例 ...]

🔗【中锚 — 中部重申，约在提示体50%位置】
---
⚠️ 关键提醒：你的分析必须基于提供的数据，
不得引入数据中不存在的信息或做无依据的推测。
---

[... 输出格式定义 ...]

📍【尾锚 — 输出格式正上方】
在生成分析报告之前，确认：
✓ 每个结论都有数据支撑
✓ 使用严格的置信度声明（确定/可能/推测）
✓ 输出格式为 Markdown，含数据引用

现在开始分析：
\``,
checks:['理解 LLM 注意力的距离衰减特性','掌握三锚位布局（首/中/尾）及各自的权重特征','知道尾锚（紧邻输出）的黄金法则','理解周期锚在长对话中的防漂移作用'],
fq:'为什么尾锚（紧邻输出的指令）影响力特别强？',fa:'LLM 生成输出时，距离越近的上下文 token 具有更高的注意力权重（时近性偏好）—— 尾锚位于输出前的最后一条指令，是 LLM 在生成第一个输出 token 时"最新鲜"的记忆',
toon:{f:['工单','微模式','三锚位','原理','状态'],v:['CTX-108','P7·锚点注入','首/中/尾','注意力衰减','🟢 COMPLETE']},
cv:'anchor'
},

/* CTX-109 */
{id:'CTX-109',phase:'阶段 V · 组合进阶层',pc:colors.success[400],
title:'P8 · 渐进揭示——信息分层释放的教学微模式',
icon:'🎭',ac:`linear-gradient(90deg,${colors.info[300]},${colors.info[400]})`,ha:hexToRgba(colors.info[300], 0.08),
hg:'linear-gradient(135deg,#011618,#022022)',acc:colors.info[300],
tag:'微模式 P8 · 分层释放 · 教学最优节奏 · 本工单唯一案例',
concept:`<strong>渐进揭示（Progressive Disclosure, P8）</strong>控制信息的<em>释放节奏</em>，
从最简单的核心概念开始，逐步增加复杂度，形成最优的认知负荷曲线。
<br><br>
来自认知科学的设计原则：<strong>工作记忆的 7±2 限制</strong>——人类同时处理的信息组块数量有限，
渐进揭示确保每一层都在被充分理解后，才引入下一层的复杂性。
<br><br>
四层揭示结构：<br>
<strong>L0</strong>：一句话核心概念（5秒版本）<br>
<strong>L1</strong>：关键原理（30秒版本）<br>
<strong>L2</strong>：完整解释+示例（3分钟版本）<br>
<strong>L3</strong>：深度细节+边界情况（专家版本）`,
callouts:[
  {t:'b',i:'🎭',s:'L0 测试：如果你无法用一句话（≤20字）说明核心概念，说明你对它的理解还不够清晰。L0 不是简化，是提炼精华。'},
  {t:'g',i:'📚',s:'本课程即是 P8 的实践：CTX-101 是 L0（微模式总论），CTX-102~108 是 L1（单原子），CTX-109+ 是 L2（组合），更高级的课程是 L3（专家级）。'}
],
atoms:[
  {i:'L0',n:'一句话版本',d:'≤20字，核心概念精华',c:colors.info[300],b:hexToRgba(colors.info[300], 0.25),t:'5秒'},
  {i:'L1',n:'关键原理',d:'3个核心原理，无细节',c:colors.info[400],b:hexToRgba(colors.info[400], 0.25),t:'30秒'},
  {i:'L2',n:'完整解释',d:'原理+示例+类比',c:colors.primary[500],b:hexToRgba(colors.primary[500], 0.25),t:'3分钟'},
  {i:'L3',n:'专家深度',d:'边界情况+反例+研究',c:colors.secondary[500],b:hexToRgba(colors.secondary[500], 0.25),t:'专家级'}
],
loop:[
  {i:'L0',l:'一句话\n核心',c:colors.info[300]},{i:'L1',l:'关键\n原理',c:colors.info[400]},
  {i:'L2',l:'完整\n解释',c:colors.primary[500]},{i:'L3',l:'专家\n深度',c:colors.secondary[500]}
],
diffBad:['一次性倾倒所有信息（认知过载）','无层次结构（读者迷失）','只有深度版本（初学者无法进入）'],
diffGood:['L0："元提示体是LLM的类定义"（立即理解）','L1：三个关键原理（建立框架）','L2：完整解释+代码示例（深入理解）'],
code:`// 渐进揭示 P8 — 四层揭示模板

\`
## Progressive Disclosure Protocol（渐进揭示协议）

在解释复杂概念时，必须按以下四层揭示：

### L0 — 5秒版本（≤20字）
「[核心概念的最精简表达]」
→ 目标：任何人看完都知道这是"什么"

### L1 — 30秒版本（3个核心原理）
1. [最重要的原理]
2. [第二重要的原理]  
3. [第三重要的原理]
→ 目标：理解"为什么它很重要"

### L2 — 3分钟版本（完整解释）
[完整的概念解释 + 一个具体示例 + 一个日常类比]
→ 目标：理解"如何使用"

### L3 — 专家版本（按需）
[边界情况 + 常见误区 + 相关研究/论文引用]
→ 目标：理解"为什么这样设计"

---
用户可以回复 L0/L1/L2/L3 获取对应层次的深度
\``,
checks:['理解渐进揭示基于认知科学的7±2工作记忆原理','掌握四层揭示结构（L0-L3）及各层目标','能为任意复杂概念写出L0（5秒版本）','理解本课程本身就是P8的实践'],
fq:'为什么写不出 L0（一句话版本）说明理解不够清晰？',fa:'L0 要求提炼最本质的概念 —— 如果连核心是什么都无法一句话说清，说明在你的认知中该概念还没有"结晶化"，是概念模糊的信号，不是表达问题',
toon:{f:['工单','微模式','四层','认知原理','状态'],v:['CTX-109','P8·渐进揭示','L0-L3','7±2工作记忆','🟢 COMPLETE']},
cv:'progressive'
},

/* CTX-110 */
{id:'CTX-110',phase:'阶段 V · 组合进阶层',pc:colors.success[400],
title:'P9 · 自洽验证——内部一致性的自动检查器',
icon:'🔮',ac:`linear-gradient(90deg,${colors.danger[300]},${colors.secondary[500]})`,ha:hexToRgba(colors.danger[300], 0.08),
hg:'linear-gradient(135deg,#180512,#220818)',acc:colors.danger[300],
tag:'微模式 P9 · 自洽检查 · 幻觉防护 · 本工单唯一案例',
concept:`<strong>自洽验证（Self-Consistency Check, P9）</strong>通过在输出后触发一个<em>内部一致性检查</em>，
检测输出是否与提供的约束、事实和前提相矛盾。
<br><br>
这是防止 LLM <em>幻觉（Hallucination）</em>的核心微模式：不是阻止 LLM 生成错误，
而是让它在输出后立即"对账"，发现矛盾时主动标记或修正。
<br><br>
三类一致性检查：<br>
<strong>事实自洽</strong>：输出是否与提供的上下文数据一致？<br>
<strong>逻辑自洽</strong>：输出的推理链是否内部无矛盾？<br>
<strong>约束自洽</strong>：输出是否违反了已定义的约束？`,
callouts:[
  {t:'r',i:'🔮',s:'幻觉根源：LLM 的生成机制是"似然最大化"而非"真实最大化"——它会生成"听起来对"而非"实际上对"的内容。P9 强制 LLM 将输出与提供的事实对照，减少这种偏差。'},
  {t:'b',i:'📊',s:'P9 + P6 的区别：P6（元反思）评估输出的质量；P9（自洽验证）检查输出与约束/事实的一致性。两者互补：P6 是"质量审计"，P9 是"合规审计"。'}
],
atoms:[
  {i:'📋',n:'事实自洽',d:'输出是否与提供数据一致',c:colors.danger[300],b:hexToRgba(colors.danger[300], 0.25),t:'数据层'},
  {i:'🔗',n:'逻辑自洽',d:'推理链是否内部无矛盾',c:colors.secondary[500],b:hexToRgba(colors.secondary[500], 0.25),t:'推理层'},
  {i:'⚖️',n:'约束自洽',d:'是否违反已定义约束',c:colors.warning[500],b:hexToRgba(colors.warning[500], 0.25),t:'规则层'},
  {i:'🏷️',n:'不确定标注',d:'无法验证时主动声明',c:colors.accent[400],b:hexToRgba(colors.accent[400], 0.25),t:'诚信层'}
],
loop:[
  {i:'📤',l:'生成\n输出',c:colors.danger[300]},{i:'🔮',l:'触发\n自洽检查',c:colors.secondary[500]},
  {i:'🔍',l:'发现\n矛盾',c:colors.warning[500]},{i:'🏷️',l:'标注或\n修正',c:colors.accent[400]}
],
diffBad:['输出与上下文数据矛盾但未发现','推理链有跳步但未标注','违反约束但未报告'],
diffGood:['「根据提供的数据，这个结论成立/不成立」','「第3步推导存在一个假设：X，如果X不成立则结论需修正」','「⚠️ 以下部分超出了提供的数据范围，属于我的推断」'],
code:`// 自洽验证 P9 — 三层一致性检查模板

\`
## Self-Consistency Protocol（自洽验证协议）

在输出主要内容后，执行以下三层验证：

### ✅ 层 1：事实自洽检查
对照提供的上下文数据，逐条验证：
- [ ] 所有引用的数字/名称/日期是否在上下文中存在？
- [ ] 是否引入了上下文中不存在的信息？
IF 发现矛盾: 用 ⚠️ 标注并说明正确信息

### ✅ 层 2：逻辑自洽检查
检查推理链的完整性：
- [ ] 每个结论是否有对应的前提支撑？
- [ ] 是否存在"A→B→D"的跳步（C被省略）？
IF 发现跳步: 补充说明被省略的推理步骤

### ✅ 层 3：约束自洽检查
对照 Constraint 原子的规定：
- [ ] 字数是否在限制内？
- [ ] 领域范围是否在白名单内？
- [ ] 是否使用了确定/推断的声明？
IF 违反约束: 标注后修正

---
自洽验证结果：「✅ 全部通过 / ⚠️ 发现 N 处问题：[列表]」
\``,
checks:['理解自洽验证与元反思的职责区别（合规vs质量）','掌握三层一致性检查（事实/逻辑/约束）','理解 LLM 幻觉的根源（似然最大化而非真实最大化）','能设计针对特定任务的自洽检查清单'],
fq:'P9（自洽验证）和 P6（元反思）的核心区别？',fa:'P6 是质量审计（这个回答够不够好）；P9 是合规审计（这个回答是否与事实/约束一致）—— P6 评估相对质量，P9 检查绝对正确性',
toon:{f:['工单','微模式','三层检查','防护目标','状态'],v:['CTX-110','P9·自洽验证','事实/逻辑/约束','幻觉防护','🟢 COMPLETE']},
cv:'selfcheck'
},

/* CTX-111 */
{id:'CTX-111',phase:'阶段 V · 组合进阶层',pc:colors.success[400],
title:'微模式 × MECE 组合矩阵——9微模式的指数组合空间',
icon:'🧮',ac:`linear-gradient(90deg,${colors.success[400]},${colors.info[400]})`,ha:hexToRgba(colors.success[400], 0.08),
hg:'linear-gradient(135deg,#011508,#051820)',acc:colors.success[400],
tag:'组合层 · 9微模式 × 适用场景 = 组合地图',
concept:`你现在拥有了 9 种微模式（P1~P9），加上 8 个原子（A~H），总组合维度已达 <em>17 个设计维度</em>。
<br><br>
但不是所有组合都有意义。MECE 本体分析帮你建立<strong>「场景→最优微模式组合」的映射地图</strong>：
<br><br>
<strong>代价权衡原则</strong>：每增加一个微模式，就增加 Token 消耗和提示体复杂度。
最优组合 = 最小微模式集合覆盖场景的全部关键需求。
<br><br>
目标：建立 5~7 条预验证的「场景快速通道」，覆盖 80% 的实际使用场景。`,
callouts:[
  {t:'g',i:'🧮',s:'幂集爆炸：9个微模式理论上有 2⁹=512 种子集，但实际有意义的组合约 20~30 个，MECE 场景分类帮你直接定位到有意义的那一小部分。'},
  {t:'b',i:'⚡',s:'帕累托原则：5 种核心场景（快速原型/深度分析/教学/高精度/创意）覆盖约 80% 的实际使用场景，每种场景对应的微模式组合 ≤ 5 个。'}
],
atoms:[
  {i:'⚡',n:'快速原型路径',d:'P1+P2，最少Token，最快交付',c:colors.accent[400],b:hexToRgba(colors.accent[400], 0.25),t:'场景1'},
  {i:'🔬',n:'深度分析路径',d:'P2+P3+P6+P9，最高质量',c:colors.secondary[500],b:hexToRgba(colors.secondary[500], 0.25),t:'场景2'},
  {i:'📚',n:'教学辅导路径',d:'P1+P8+P4+P6，最优体验',c:colors.info[300],b:hexToRgba(colors.info[300], 0.25),t:'场景3'},
  {i:'🎯',n:'高精度路径',d:'P4+P9+P7+P5，最低幻觉',c:colors.danger[400],b:hexToRgba(colors.danger[400], 0.25),t:'场景4'},
  {i:'✨',n:'创意协作路径',d:'P3+P8+P6，最丰富视角',c:colors.success[400],b:hexToRgba(colors.success[400], 0.25),t:'场景5'}
],
loop:[
  {i:'🗺️',l:'识别\n场景',c:colors.success[400]},{i:'🧮',l:'查找\n地图',c:colors.info[400]},
  {i:'⚡',l:'选择\n路径',c:colors.accent[400]},{i:'✅',l:'MECE\n验证',c:colors.secondary[500]}
],
matrixData:{
  rows:['P1·声明句','P2·思维链','P3·人格叠加','P4·少样本','P5·Token预算','P6·元反思','P7·锚点','P8·渐进揭示','P9·自洽验证'],
  cols:['快速原型','深度分析','教学辅导','高精度','创意协作'],
  cells:[[3,1,0,1,0],[2,3,1,2,1],[0,3,1,0,3],[1,2,3,3,1],[2,1,1,3,0],[1,3,2,2,2],[1,2,3,3,1],[0,1,3,1,2],[0,3,1,3,0]]
},
code:`// 微模式组合地图 — 场景快速通道

const PATTERN_MAP = {
  "快速原型": {
    patterns: ["P1", "P2"],
    tokens: "~50 tokens overhead",
    tradeoff: "速度优先，牺牲全面性"
  },
  "深度分析": {
    patterns: ["P2", "P3", "P6", "P9"],
    tokens: "~400 tokens overhead",
    tradeoff: "质量优先，Token消耗高"
  },
  "教学辅导": {
    patterns: ["P1", "P8", "P4", "P6"],
    tokens: "~350 tokens overhead",
    tradeoff: "体验优先，适合长期学习"
  },
  "高精度任务": {
    patterns: ["P4", "P9", "P7", "P5"],
    tokens: "~500 tokens overhead",
    tradeoff: "准确性优先，结构最复杂"
  },
  "创意协作": {
    patterns: ["P3", "P8", "P6"],
    tokens: "~300 tokens overhead",
    tradeoff: "创造性优先，多视角丰富"
  }
};

// 帕累托原则：5条路径覆盖约80%实际场景
// 总组合空间 2^9=512 → 压缩到 5 条路径`,
checks:['理解9微模式形成的组合空间（512种子集）','掌握5条场景快速通道及其代价权衡','能为新场景快速选择最小必要微模式集合','理解帕累托原则在微模式选择中的应用'],
fq:'为什么不应该在所有场景都使用全部9个微模式？',fa:'每个微模式都有 Token 代价和复杂度代价。最优提示体 = 用最小微模式集合满足场景需求。叠加不必要的微模式会稀释注意力、增加 Token 消耗，边际效益递减甚至产生冲突',
toon:{f:['工单','主题','组合空间','覆盖率','状态'],v:['CTX-111','组合矩阵','512→5路径','~80%场景','🟢 COMPLETE']},
cv:'combomatrix'
},

/* CTX-112 */
{id:'CTX-112',phase:'阶段 V · 组合进阶层',pc:colors.success[400],
title:'REPL 实验沙盒——交互式微模式即时验证器',
icon:'⚡',ac:`linear-gradient(90deg,${colors.success[300]},${colors.success[400]})`,ha:hexToRgba(colors.success[300], 0.08),
hg:'linear-gradient(135deg,#0a1400,#101e00)',acc:colors.success[300],
tag:'动手实验 · 即时反馈 · 输入命令验证模式效果',
concept:`本工单是一个<em>交互式实验沙盒</em>——你可以在 REPL 中输入命令，
立即看到不同微模式对提示体的影响，验证你对每个模式的理解。
<br><br>
支持的命令（输入命令名即可）：<br>
<code style="color:var(--green)">p1 [描述]</code> → 生成角色声明句<br>
<code style="color:var(--green)">p2 [问题]</code> → 添加思维链触发<br>
<code style="color:var(--green)">p3</code> → 展示人格叠加模板<br>
<code style="color:var(--green)">p4 [格式]</code> → 生成少样本框架<br>
<code style="color:var(--green)">p5</code> → 显示Token预算分析<br>
<code style="color:var(--green)">p6</code> → 添加元反思协议<br>
<code style="color:var(--green)">p7</code> → 展示锚点注入布局<br>
<code style="color:var(--green)">p8 [概念]</code> → 生成渐进揭示结构<br>
<code style="color:var(--green)">p9</code> → 添加自洽验证清单<br>
<code style="color:var(--green)">compose [p1 p2 p4]</code> → 组合多个微模式<br>
<code style="color:var(--green)">clear</code> → 清空`,
callouts:[
  {t:'g',i:'⚡',s:'动手是最好的学习。在 REPL 中实验每个微模式，观察输出的差异，这比阅读定义更能建立直觉。'},
  {t:'b',i:'🔬',s:'实验建议：先单独测试每个微模式（p1, p2...），然后用 compose 命令组合 2~3 个，感受叠加效果。'}
],
atoms:[
  {i:'⌨️',n:'单模式测试',d:'单独实验每个微模式',c:colors.success[300],b:hexToRgba(colors.success[300], 0.25),t:'基础'},
  {i:'🔀',n:'compose 组合',d:'多模式叠加实验',c:colors.success[400],b:hexToRgba(colors.success[400], 0.25),t:'组合'},
  {i:'📊',n:'效果对比',d:'有/无微模式的输出差异',c:colors.info[300],b:hexToRgba(colors.info[300], 0.25),t:'验证'},
  {i:'💾',n:'快照保存',d:'保存最优组合结果',c:colors.info[400],b:hexToRgba(colors.info[400], 0.25),t:'沉淀'}
],
loop:[
  {i:'⌨️',l:'输入\n命令',c:colors.success[300]},{i:'⚡',l:'即时\n生成',c:colors.success[400]},
  {i:'👁️',l:'观察\n差异',c:colors.info[300]},{i:'🔀',l:'调整\n组合',c:colors.info[400]}
],
isRepl:true,
code:`// REPL 沙盒 — 在下方交互区输入命令
// 示例会话：
> p1 Python后端工程师
→ 你是一位资深Python后端工程师，专注于高性能API设计，
   将以工程最佳实践审查你的代码并给出架构建议。

> p2 解释闭包
→ 解释Python闭包。让我们一步步思考：
   首先，什么是作用域... 其次，什么是自由变量...

> compose p1 p2 p6
→ [组合结果：P1角色声明 + P2思维链触发 + P6元反思]
   ─────────────────────────────────────
   你是一位资深Python工程师...（P1）
   让我们一步步思考：（P2）
   [完成后自评：打分+批评+修订]（P6）`,
checks:['在REPL中成功测试至少5个不同的微模式命令','使用 compose 组合至少2个微模式并观察效果','理解有/无微模式时输出的具体差异','找到适合你实际场景的最优微模式组合'],
fq:'在 REPL 中实验微模式的核心价值是什么？',fa:'通过即时反馈建立直觉 —— 阅读定义是"知道"，动手实验是"感受"。只有真正输出了有/无微模式的对比，你才能直觉地理解每个微模式的实际效果',
toon:{f:['工单','类型','命令数','组合','状态'],v:['CTX-112','交互沙盒','10个命令','compose多选','🟢 COMPLETE']},
cv:'repl'
},

/* CTX-113 */
{id:'CTX-113',phase:'阶段 VI · 垂直领域层',pc:colors.accent[400],
title:'垂直应用 · 软件工程领域元提示体专项模板',
icon:'💻',ac:`linear-gradient(90deg,${colors.info[400]},${colors.primary[500]})`,ha:hexToRgba(colors.info[400], 0.08),
hg:'linear-gradient(135deg,#061018,#0a1828)',acc:colors.info[400],
tag:'垂直领域 · SE专项 · 8原子+5微模式 = 完整工程助手',
concept:`垂直领域应用是将通用元提示体框架<em>特化到特定专业领域</em>的过程。
软件工程领域有其独特的需求：代码正确性 > 表达流畅性；可运行 > 看起来对。
<br><br>
软件工程专项元提示体的四个核心优化：<br>
<strong>① 代码优先输出</strong>：先给可运行代码，再解释<br>
<strong>② 测试用例强制</strong>：每段代码必须附带测试<br>
<strong>③ 复杂度标注</strong>：时间/空间复杂度必须显式<br>
<strong>④ 版本锁定</strong>：所有代码必须标注运行环境版本`,
callouts:[
  {t:'b',i:'💻',s:'SE 专项约束：代码质量约束（C原子）需要领域特化。通用约束"不虚构"在SE中变为"不虚构API名称、包名、方法签名"——这些虚构的危害远大于虚构文字描述。'},
  {t:'g',i:'🧪',s:'TDD 思维：软件工程元提示体应内置"测试驱动"思维——先写测试用例（定义期望行为），再写实现。这比先写实现再测试得到更可靠的代码。'}
],
atoms:[
  {i:'💻',n:'SE·角色(A)',d:'架构师+安全专家+性能工程师',c:colors.info[400],b:hexToRgba(colors.info[400], 0.25),t:'A特化'},
  {i:'🔧',n:'SE·指令(B)',d:'TDD流程+复杂度分析+重构建议',c:colors.primary[500],b:hexToRgba(colors.primary[500], 0.25),t:'B特化'},
  {i:'🛡️',n:'SE·约束(C)',d:'不虚构API+版本锁定+测试强制',c:colors.danger[500],b:hexToRgba(colors.danger[500], 0.25),t:'C特化'},
  {i:'📋',n:'SE·输出(D)',d:'代码块+复杂度+测试用例三件套',c:colors.success[400],b:hexToRgba(colors.success[400], 0.25),t:'D特化'}
],
loop:[
  {i:'📋',l:'理解\n需求',c:colors.info[400]},{i:'🧪',l:'写\n测试',c:colors.primary[500]},
  {i:'💻',l:'写\n实现',c:colors.success[400]},{i:'🔍',l:'审查\n优化',c:colors.accent[400]}
],
diffBad:['代码没有版本信息（环境不确定）','虚构不存在的库函数','没有时间复杂度分析'],
diffGood:['Python 3.11 + FastAPI 0.104，所有导入可直接运行','只使用标准库 and 明确声明的依赖','O(n log n) 时间，O(n) 空间，LeetCode 测试通过'],
code:`// 软件工程专项元提示体

\`
# 🖥️ SE Meta-Prompt v1.0

## A. Role（SE特化角色）
你是一位 [Python 3.11 / TypeScript 5.x / Rust 1.75] 资深工程师，
同时兼具安全审计和性能优化视角。
- 哲学：代码即文档，可读性优先于聪明性
- 风格：先给完整可运行代码，再解释设计决策

## B. Instructions（SE工作流）
Step 1: 理解需求，用 1~2 句话复述以确认理解
Step 2: 先写测试用例（TDD），明确期望行为
Step 3: 写实现代码，每10行含1行关键注释
Step 4: 分析时间/空间复杂度（Big-O）
Step 5: 指出可能的边界情况和改进方向

## C. Constraints（SE专项约束）
- 🔴 禁止：虚构任何包名、函数名、API端点
- 🔴 禁止：省略 import 语句（必须完整可运行）
- 🟡 必须：标注运行环境（语言版本+主要依赖版本）
- 🟡 必须：每个函数附带至少1个测试用例

## D. Output（SE三件套）
\\\`\\\`\\\`python
# 运行环境：Python 3.11
# 依赖：[列表]
[完整可运行代码]
\\\`\\\`\\\`
**复杂度**：时间 O(?) | 空间 O(?)
**测试**：\\\`assert func(input) == expected_output\\\`
\``,
checks:['理解垂直领域特化的核心原则（领域约束优先）','掌握SE专项的四个核心优化（代码优先/测试强制/复杂度/版本锁定）','理解SE场景中"不虚构"的特化含义','能为自己所在的技术栈定制 SE 专项元提示体'],
fq:'为什么SE场景中「不虚构API名称」比「不虚构事实」更重要？',fa:'虚构的文字事实读者可以分辨；虚构的API名称会导致代码无法运行，且表面上看起来正确（LLM生成的代码语法合法），危害更隐蔽、更难排查',
toon:{f:['工单','领域','特化原子','核心约束','状态'],v:['CTX-113','软件工程','A+B+C+D特化','不虚构API','🟢 COMPLETE']},
cv:'secode'
},

/* CTX-114 */
{id:'CTX-114',phase:'阶段 VI · 垂直领域层',pc:colors.accent[400],
title:'垂直应用 · 数据分析领域元提示体专项模板',
icon:'📊',ac:`linear-gradient(90deg,${colors.accent[400]},${colors.warning[500]})`,ha:hexToRgba(colors.accent[400], 0.08),
hg:'linear-gradient(135deg,#181200,#221800)',acc:colors.accent[400],
tag:'垂直领域 · DA专项 · 数据驱动 · 统计严谨性',
concept:`数据分析领域的元提示体有独特的<em>统计严谨性</em>要求：
数据讲故事（Data Storytelling）和统计假设检验（Statistical Testing）是两个对精度要求截然不同的任务，需要分别特化。
<br><br>
DA 专项三大核心原则：<br>
<strong>① 数据优先</strong>：所有结论必须有数据支撑，标注置信区间<br>
<strong>② 因果谨慎</strong>：区分「相关性」和「因果性」，不轻易断言因果<br>
<strong>③ 可视化驱动</strong>：优先用图表表达，文字是图表的补充`,
callouts:[
  {t:'o',i:'📊',s:'相关≠因果的特化约束：这是DA领域最常见的逻辑错误。DA专项元提示体必须将"禁止混淆相关和因果"作为最高优先级约束，并要求每次提到关系时明确声明是相关性还是因果性。'},
  {t:'b',i:'🔬',s:'置信区间强制：DA专项的质量约束必须要求对所有统计结论标注置信区间（CI）或p值。"销售提升了10%"远弱于"销售提升了10%（95% CI: 7%~13%, p<0.01）"。'}
],
atoms:[
  {i:'🔬',n:'DA·角色(A)',d:'统计学家+可视化专家+业务分析师',c:colors.accent[400],b:hexToRgba(colors.accent[400], 0.25),t:'A特化'},
  {i:'📈',n:'DA·指令(B)',d:'EDA→假设→检验→结论→建议',c:colors.warning[500],b:hexToRgba(colors.warning[500], 0.25),t:'B特化'},
  {i:'⚖️',n:'DA·约束(C)',d:'相关≠因果+置信区间+样本量标注',c:colors.danger[500],b:hexToRgba(colors.danger[500], 0.25),t:'C特化'},
  {i:'📊',n:'DA·输出(D)',d:'图表描述+统计摘要+业务建议',c:colors.info[300],b:hexToRgba(colors.info[300], 0.25),t:'D特化'}
],
loop:[
  {i:'📋',l:'了解\n数据',c:colors.accent[400]},{i:'🔬',l:'EDA\n探索',c:colors.warning[500]},
  {i:'📊',l:'假设\n检验',c:colors.danger[500]},{i:'💡',l:'业务\n洞察',c:colors.info[300]}
],
diffBad:['「A与B有强烈的因果关系」（混淆相关/因果）','「销售增长了10%」（无置信区间）','「数据显示...」（无样本量说明）'],
diffGood:['「A与B呈强正相关(r=0.82, p<0.001)，但因果方向需进一步实验验证」','「销售增长10%(95%CI:7%-13%)，基于n=1200样本」','「在当前样本中，结论显著；需注意样本偏差：[具体说明]」'],
code:`// 数据分析专项元提示体

\`
# 📊 DA Meta-Prompt v1.0

## A. Role（DA特化角色）
你同时扮演三个数据角色：
- 🔬 统计学家：确保方法论的严谨性
- 📈 数据可视化专家：选择最合适的图表类型
- 💼 业务分析师：将数据洞察转化为可行动建议

## B. Instructions（EDA标准流程）
Step 1: 数据概览（行数/列数/缺失值/数据类型）
Step 2: 单变量分析（分布/异常值/集中趋势）
Step 3: 双变量分析（相关性矩阵/散点图建议）
Step 4: 假设检验（明确H0/H1，选择检验方法）
Step 5: 业务洞察（从数据到行动建议，标注置信度）

## C. Constraints（DA严格约束）
- 🔴 禁止：混淆相关性和因果性
  → 每次提到「关系」必须声明：相关性/因果性
- 🟡 必须：为所有统计结论标注 95% 置信区间
- 🟡 必须：说明样本量(n)，讨论样本偏差
- 🟢 推荐：对反直觉结论用 ⚠️ 标注并重点说明

## D. Output（DA三件套）
📊 可视化建议：「建议使用[图表类型]，因为...」
📋 统计摘要：「[结论](n=?, p=?, CI=[?,?])」
💡 业务建议：「基于以上分析，建议[行动]」
\``,
checks:['理解DA领域「相关≠因果」约束的核心地位','掌握DA专项的EDA标准五步流程','知道置信区间和p值对数据结论的重要性','能为数据分析任务设计统计严谨的元提示体'],
fq:'为什么DA专项元提示体要求区分「相关性」和「因果性」？',fa:'混淆两者是数据分析中最危险的错误 —— 相关性可以用数据直接计算，因果性需要实验设计（如RCT）才能确立。把相关关系当因果关系会导致错误的业务决策',
toon:{f:['工单','领域','核心约束','统计标准','状态'],v:['CTX-114','数据分析','相关≠因果','置信区间','🟢 COMPLETE']},
cv:'dacode'
},

/* CTX-115 */
{id:'CTX-115',phase:'阶段 VI · 垂直领域层',pc:colors.accent[400],
title:'动态元提示体——多轮对话中的状态管理与自适应',
icon:'🌊',ac:`linear-gradient(90deg,${colors.info[300]},${colors.info[200]})`,ha:hexToRgba(colors.info[300], 0.08),
hg:'linear-gradient(135deg,#011618,#022025)',acc:colors.info[300],
tag:'动态层 · 多轮自适应 · 状态机 · 上下文压缩',
concept:`静态元提示体在单轮对话中有效，但在<em>多轮对话</em>中会面临三个挑战：
<br><br>
<strong>① 上下文膨胀</strong>：每轮对话都在增加 Token 消耗<br>
<strong>② 指令衰减</strong>：随着对话变长，早期指令的影响力减弱<br>
<strong>③ 状态失同步</strong>：LLM 可能"忘记"当前的任务进度<br>
<br>
动态元提示体通过三个机制解决这些问题：<br>
<strong>滑动窗口</strong>：保留最近 N 轮，压缩历史<br>
<strong>周期锚</strong>：每 K 轮自动重注入核心指令<br>
<strong>TOON 状态同步</strong>：每轮更新状态，保持进度同步`,
callouts:[
  {t:'b',i:'🌊',s:'滑动窗口设计：不能简单地截断历史。应该压缩历史摘要（保留关键决策点），而不是丢弃。"上一轮决定使用Redis做缓存层"是必须保留的状态信息。'},
  {t:'g',i:'🔄',s:'周期锚频率：建议每 5~8 轮重注入一次核心 Role + 核心 Constraint。频率太低会漂移，频率太高会浪费 Token。根据任务复杂度调整。'}
],
atoms:[
  {i:'🌊',n:'滑动窗口',d:'保留最近N轮+历史摘要',c:colors.info[300],b:hexToRgba(colors.info[300], 0.25),t:'压缩'},
  {i:'🔄',n:'周期锚',d:'每K轮重注入核心指令',c:colors.info[400],b:hexToRgba(colors.info[400], 0.25),t:'防漂移'},
  {i:'📊',n:'TOON同步',d:'每轮更新状态，保持进度',c:colors.secondary[500],b:hexToRgba(colors.secondary[500], 0.25),t:'状态'},
  {i:'🗜️',n:'历史压缩',d:'摘要关键决策，丢弃冗余',c:colors.accent[400],b:hexToRgba(colors.accent[400], 0.25),t:'效率'}
],
loop:[
  {i:'💬',l:'新一轮\n对话',c:colors.info[300]},{i:'🗜️',l:'压缩\n历史',c:colors.info[400]},
  {i:'⚓',l:'检查\n是否需锚',c:colors.secondary[500]},{i:'📊',l:'更新\nTOON',c:colors.accent[400]}
],
diffBad:['直接拼接所有历史（超出Token限制）','不重注入指令（对话后期完全漂移）','无状态管理（每轮不知道进度）'],
diffGood:['历史压缩：「已决定技术栈: Next.js+Supabase，已完成：登录模块，当前：购物车模块」','第8轮检测：触发周期锚，重注入Role和核心Constraint','TOON更新：SessionLog[轮次,当前任务,已完成,下一步]'],
code:`// 动态元提示体 — 多轮对话管理器

\`
## Dynamic Session Protocol（动态会话协议）

### 滑动窗口规则
- 保留最近 5 轮完整对话
- 超出部分压缩为"历史摘要"，格式：
  \`\`\`toon
  History[N]{轮次,决策,产出,状态}:
    [摘要行，每个决策点一行]
  \`\`\`

### 周期锚规则
IF 当前轮次 % 6 == 0:
  → 重注入以下核心锚点：
  「---[系统提醒] 你是[角色]，核心约束[约束]，当前进度见TOON---」

### 每轮 TOON 更新
在每次回复末尾自动更新：
\`\`\`toon
SessionLog[1]{轮次,当前任务,完成项,下一步,满意度}:
  [动态填充]
\`\`\`

### 历史压缩触发条件
IF 估算 token_count > 4096:
  → 触发历史压缩
  → 保留：所有决策点 + 最近3轮完整
  → 丢弃：中间的冗余确认和重复内容
\``,
checks:['理解多轮对话的三个挑战（膨胀/衰减/失同步）','掌握滑动窗口的正确实现方式（压缩非截断）','知道周期锚的触发频率设计原则','能为长对话任务设计完整的动态会话协议'],
fq:'为什么历史压缩要「保留决策点」而不是「截断到最近N轮」？',fa:'重要的决策信息可能在很早的对话轮次中——"第1轮决定使用PostgreSQL"在第20轮仍然有效。截断会丢失这些关键约束；压缩摘要保留决策点，既节省Token又保持了完整的任务上下文',
toon:{f:['工单','主题','核心机制','窗口大小','状态'],v:['CTX-115','动态会话','滑窗+周期锚','N=5轮','🟢 COMPLETE']},
cv:'dynamic'
},

/* CTX-116 */
{id:'CTX-116',phase:'阶段 VI · 垂直领域层',pc:colors.accent[400],
title:'终极综合——8原子×9微模式×动态会话的完整闭环',
icon:'∞',ac:`linear-gradient(90deg,${colors.accent[400]},${colors.danger[400]},${colors.info[200]})`,ha:hexToRgba(colors.accent[400], 0.12),
hg:'linear-gradient(135deg,#08051a,#100a28)',acc:colors.accent[400],
tag:'毕业综合 · 17维度 · 指数复合 · 自进化闭环',
concept:`这是整个 v4 课程的<em>终极综合</em>。你现在拥有的工具箱：
<br><br>
<strong>8个原子</strong>（Role/Instruction/Constraint/Output/Feedback/State/Context/Iterator）<br>
<strong>9个微模式</strong>（P1 角色声明·P2 思维链·P3 人格叠加·P4 少样本·P5 Token预算·P6 元反思·P7 锚点·P8 渐进揭示·P9 自洽验证）<br>
<strong>动态会话协议</strong>（滑动窗口·周期锚·TOON同步）<br>
<br>
总设计维度：<em>17 个维度</em>。每个维度 3 个强度 = <strong>3¹⁷ ≈ 129,140,163 种理论组合</strong>。<br>
本体设计 + MECE = 把这个天文数字压缩到<em>7条经过验证的场景快速通道</em>。`,
callouts:[
  {t:'b',i:'∞',s:'复利效应：每次迭代提升 5%，经过 30 次迭代后质量为初始的 1.05³⁰ ≈ 4.3 倍。闭环的价值不在于单次优化，而在于让每次迭代都沉淀为下一次的起点。'},
  {t:'g',i:'🏆',s:'毕业标准：你能为一个你实际面对的真实问题，从场景出发，选择合适的原子强度和微模式组合，构建一个完整的元提示体，并完成一次"发射→反馈→迭代"的完整闭环。'}
],
atoms:[
  {i:'🎭',n:'A·Role',d:'三层角色+P1/P3',c:colors.info[400],b:hexToRgba(colors.info[400], 0.2),t:'A'},
  {i:'📋',n:'B·Instruction',d:'工作流+P2 CoT',c:colors.secondary[500],b:hexToRgba(colors.secondary[500], 0.2),t:'B'},
  {i:'🔒',n:'C·Constraint',d:'三维护栏+P9验证',c:colors.warning[500],b:hexToRgba(colors.warning[500], 0.2),t:'C'},
  {i:'📤',n:'D·Output',d:'三层嵌套+P4示例',c:colors.success[400],b:hexToRgba(colors.success[400], 0.2),t:'D'},
  {i:'📡',n:'E·Feedback',d:'MECE分支+P6反思',c:colors.danger[400],b:hexToRgba(colors.danger[400], 0.2),t:'E'},
  {i:'📊',n:'F·State',d:'TOON+动态更新',c:colors.accent[400],b:hexToRgba(colors.accent[400], 0.2),t:'F'},
  {i:'📚',n:'G·Context',d:'三层注入+P5预算',c:colors.primary[500],b:hexToRgba(colors.primary[500], 0.2),t:'G'},
  {i:'🔁',n:'H·Iterator',d:'版本控制+P7锚点',c:colors.info[300],b:hexToRgba(colors.info[300], 0.2),t:'H'}
],
loop:[
  {i:'🚀',l:'发射\n完整体',c:colors.info[400]},{i:'🤖',l:'LLM\n执行',c:colors.secondary[500]},
  {i:'📊',l:'格式化\n输出',c:colors.success[400]},{i:'📡',l:'Feedback\n钩触发',c:colors.danger[400]},
  {i:'🧠',l:'P6元\n反思',c:colors.warning[500]},{i:'📊',l:'TOON\n更新',c:colors.accent[400]},
  {i:'🔁',l:'版本\n迭代',c:colors.info[300]}
],
code:`// 🌟 终极元提示体模板 v4.0 — 17维度完整版

\`
# 🧬 Meta-Prompt v4.0 · 完整闭环自进化版

## 🎭 A. Role + P1 + P3
[P1 首锚] 你是一位[身份]，专注[领域]，将[承诺]。
[P3 可选] 同时激活：创造者+批评者+仲裁者人格

## 📋 B. Instructions + P2
Step 1→2→3 工作流
[P2] 每步执行时：「让我们一步步思考」
异常协议：IF-THEN 边缘处理

## 🔒 C. Constraints + P9
范围/质量/格式三维约束
[P9] 每次输出后执行：事实/逻辑/约束三层验证

## 📤 D. Output + P4 + P8
[P4] Few-Shot 3个示例（多样+代表+边界）
[P8] L0→L1→L2 渐进揭示
三层嵌套：主体+解析+TOON元数据

## 📡 E. Feedback + P6
MECE四选项钩
[P6] Score→Critique→Revise 循环
IF 评分<8 → 重写直到 ≥8 或迭代2次

## 📊 F. State（TOON动态协议）
\\\`\\\`\\\`toon
SessionLog[1]{工单,版本,轮次,产出,满意度,迭代}:
  [每轮自动更新]
\\\`\\\`\\\`
[P5] Token预算实时监控

## 📚 G. Context + P7
[P7 首锚] 背景注入开头固定
三层上下文（背景/前提/知识）
[P7 尾锚] 紧邻输出的最后约束重申

## 🔁 H. Iterator
版本：v1.0 → stable 标准：连续3次A
Diff追踪 + 回滚机制
[P7 周期锚] 每6轮重注入核心锚

---
**理论组合空间**：3¹⁷ ≈ 1.3亿
**本体压缩后**：7条场景快速通道
**覆盖率**：~85%的实际使用场景 ⚡
\``,
checks:['能描述8原子+9微模式+动态协议的完整架构','理解3¹⁷组合空间如何通过本体设计压缩为7条路径','能为实际项目设计完整的v4版元提示体','完成至少1次真实的发射→反馈→迭代完整闭环'],
fq:'从v1（单提示）到v4（17维度闭环），核心进化是什么？',fa:'v1：一次性函数调用 → v4：自进化的认知程序。关键跳跃：① 结构化（原子分离）② 微模式化（可复用策略）③ 闭环化（每次迭代都沉淀为下一次的起点）—— 从"写提示"到"设计认知系统"',
toon:{f:['工单','维度','组合空间','压缩后','状态'],v:['CTX-116','17维度','3¹⁷≈1.3亿','7条路径','🟢 COMPLETE']},
cv:'final'
}
];
