/**
 * LLMService - Local AI Inference Manager
 * 
 * Orchestrates WebLLM for端侧 (on-device) inference.
 */

export interface LLMChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface LLMProgress {
  progress: number;
  text: string;
}

const SYSTEM_PROMPTS = {
  default: `你是一个集成在 Unified Tools Hub 中的端侧 AI 助手。
你的目标是基于 MECE 原则协助用户理解编程概念、提示工程和系统架构。
请保持回复简洁、专业，并尽可能使用结构化输出。`,
  python: `你是一位 Python 工程专家。专注于高质量代码、异步编程和 MECE 逻辑。
请协助用户审计当前的 Python 原子工单，指出潜在的逻辑漏洞。`,
  sql: `你是一位高级数据架构师。精通 DuckDB、OLAP 优化与向量化查询。
请协助用户优化当前的 SQL 实验室查询。`,
  prompt: `你是一位顶级提示词工程师。精通 Context v4 架构与元提示模式。
请协助用户构建、拆解或优化当前的提示词本体。`,
  excel: `你是一位 Excel 数据分析与表格编程专家。精通 Excel 365 动态数组、高阶函数（LET/LAMBDA）与数据建模。
请协助用户编写、优化复杂的 Excel 公式与 VBA 宏。`,
  git: `你是一位高级 DevOps 工程专家。精通 Git 版本控制、分支管理策略与自动化部署流水线。
请协助用户维护高质量、规范的仓库历史，并提供应急版本回滚方案。`,
  wiki: `你是一位心流触发与个人生产力系统专家。精通 Ontology 本体建模、Wishful Thinking 与惰性求值方法论。
请协助用户识别并纠正工作流程中的心理阻碍与反模式，开启高效心流飞轮。`
};

export const LLMService = {
  /**
   * Initializes the engine and loads the selected model
   */
  initialize: async (onProgress?: (p: LLMProgress) => void) => {
    // Simulated weight loading with more steps for fidelity
    const steps = [
      "Initializing AI Simulation Sandbox...",
      "Loading simulated model metadata...",
      "Setting up memory stub (0MB allocated)...",
      "Preparing expert system prompts...",
      "Verifying sandbox environment...",
      "Engine Simulation Warmup..."
    ];

    for (let i = 0; i < steps.length; i++) {
      if (onProgress) onProgress({ progress: (i + 1) / steps.length, text: steps[i] });
      await new Promise(r => setTimeout(r, 400 + Math.random() * 600));
    }
    return true;
  },

  /**
   * Generates a completion based on messages and context
   */
  chat: async (messages: LLMChatMessage[], moduleType: keyof typeof SYSTEM_PROMPTS = 'default'): Promise<string> => {
    const fullMessages = [
      { role: 'system' as const, content: SYSTEM_PROMPTS[moduleType] || SYSTEM_PROMPTS.default },
      ...messages
    ];

    // Simulated high-fidelity inference
    await new Promise(r => setTimeout(r, 1500));
    
    const lastUserMsg = messages[messages.length - 1].content.toLowerCase();
    
    if (moduleType === 'excel') {
      if (lastUserMsg.includes('let')) {
        return `【Excel LET 函数优化报告】\n\n1. **公式重构示例**:\n   将重复计算的嵌套匹配：\n   \`=IF(ISERROR(VLOOKUP(A2, Sheet2!A:B, 2, FALSE)), 0, VLOOKUP(A2, Sheet2!A:B, 2, FALSE))\`\n   重构为：\n   \`=LET(val, VLOOKUP(A2, Sheet2!A:B, 2, FALSE), IF(ISERROR(val), 0, val))\`\n\n2. **性能增益**: 变量 \`val\` 只会被计算一次。在大型工作表（>10万行）中可将渲染刷新开销缩减 50% 以上。`;
      }
      if (lastUserMsg.includes('lambda')) {
        return `【Excel LAMBDA 自定义函数注册指南】\n\n1. **身份证年龄提取 (GetAge) 声明**:\n   \`=LAMBDA(id, YEAR(TODAY()) - VALUE(MID(id, 7, 4)))\`\n\n2. **全局名称管理器注册**:\n   * 点击顶部功能区「公式」 -> 「名称管理器」 -> 「新建」\n   * 名称填写: \`GetAgeFromID\`\n   * 引用位置填写: \`=LAMBDA(id, YEAR(TODAY()) - VALUE(MID(id, 7, 4)))\`\n   * 之后即可在任意单元格内以 \`=GetAgeFromID(A2)\` 形式正常调用，无需保存为启用宏的 .xlsm 格式！`;
      }
      if (lastUserMsg.includes('map')) {
        return `【MAP 动态数组迭代】\n\n1. **达成率与奖金溢出公式**:\n   \`=MAP(A2:A100, B2:B100, LAMBDA(sales, target, LET(ratio, sales/target, IF(ratio > 1, ratio*0.1, 0))))\`\n\n2. **Spill 溢出机制**: 仅需在首行输入公式，结果会自动溢出填充对应区域。比拖拽复制公式更易维护且无性能浪费。`;
      }
    }
    
    if (moduleType === 'sql') {
      if (lastUserMsg.includes('parquet') || lastUserMsg.includes('httpfs') || lastUserMsg.includes('远程')) {
        return `【DuckDB 远程 Parquet 优化分析】\n\n1. **投影下推 (Projection Pushdown)**: DuckDB 在解析 Parquet 元数据（Metadata）后，仅请求网络上包含 \`trip_distance\` 和 \`passenger_count\` 的特定数据页，无需读取其余列。\n2. **谓词下推 (Predicate Pushdown)**: 过滤条件 \`trip_distance > 0\` 将直接作用于 Parquet 页组头索引，自动跳过不符合范围的数据页块。\n3. **结果**: 使得查询几十GB的 S3 Parquet 文件时，仅需通过 HTTP Range Requests 下载数MB数据即可得出结论。`;
      }
      if (lastUserMsg.includes('顺序') || lastUserMsg.includes('执行顺序')) {
        return `【SQL 执行顺序与编译路径】\n\n1. **逻辑执行顺序**:\n   \`FROM -> ON -> JOIN -> WHERE -> GROUP BY -> HAVING -> SELECT -> DISTINCT -> ORDER BY -> LIMIT\`\n\n2. **关键认知**: \`SELECT\` 在 \`HAVING\` 之后计算，因此在 \`HAVING\` 中不能直接使用 SELECT 中定义的别名；而 \`ORDER BY\` 可使用别名，因为它在 SELECT 之后执行。`;
      }
    }

    if (moduleType === 'git') {
      if (lastUserMsg.includes('commit') || lastUserMsg.includes('日志') || lastUserMsg.includes('提交')) {
        return `【Git Conventional Commit 格式草案】\n\n\`feat(excel-prompts): add modern-formula category featuring LET and LAMBDA\`\n\n**说明**：本提交新增了现代动态函数分类及4个高级提示词，并通过本地 check 与 build 测试流程。`;
      }
      if (lastUserMsg.includes('回滚') || lastUserMsg.includes('故障') || lastUserMsg.includes('事故')) {
        return `【Git 线上故障应急回滚 SOP】\n\n1. **共享分支安全回滚 (Revert)**:\n   \`git revert <COMMIT_HASH>\`\n   该命令会生成一个反向操作的提交记录，保留历史，可安全推送到远程，避免污染协作分支。\n\n2. **本地未推送回滚 (Reset)**:\n   \`git reset --hard <COMMIT_HASH>\`\n   注意：该操作会彻底清空暂存区与工作区，请在执行前用 \`git stash\` 备份。`;
      }
    }

    if (moduleType === 'wiki') {
      if (lastUserMsg.includes('心流') || lastUserMsg.includes('原理') || lastUserMsg.includes('反模式')) {
        return `【心流状态自检与纠偏方案】\n\n1. **过度准备诊断**: 违反了 A3 惰性求值（Lazy Evaluation），导致准备期大脑认知带宽耗尽。\n2. **纠正指南**:\n   * 第一步：应用 B5 MVA（最小可行动作），例如「打开文档，敲入 5 个字」或「创建一个空白函数」。\n   * 第二步：应用 A2 愿望思考，屏蔽任何第三方 API 限制，用空存根（Stub）继续核心逻辑设计。`;
      }
    }

    if (lastUserMsg.includes('分析') || lastUserMsg.includes('审计')) {
      return `【端侧专家审计报告】\n\n1. **逻辑一致性**: 当前内容的结构符合 MECE 原则。\n2. **潜在风险**: 在极端边界条件下，建议增强错误捕获。\n3. **优化建议**: 尝试组合使用 [P2 思维链] 模式以获得更深度的推理结果。`;
    }

    return "已收到您的指令。端侧模型已基于当前上下文进行理解。您可以尝试提问：'这段代码有哪些逻辑漏洞？' 或 '如何优化这个提示词的 Token 效率？'";
  }
};
