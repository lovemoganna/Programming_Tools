/**
 * Sub-App Integration & Refactoring Workflow Bootstrapper
 * 
 * Purpose: Initialize, track, and generate instructions for either integrating a NEW sub-app 
 *          or REFACTORING/OPTIMIZING an EXISTING sub-app.
 * Usage:
 *   1. Initialize New App: node scripts/run-workflow.js --name "my-app" --desc "Description of new app"
 *   2. Initialize Refactor: node scripts/run-workflow.js --name "git-workflow" --mode "refactor" --desc "Optimize sidebar styling and eliminate pixel units"
 *   3. Check Status: node scripts/run-workflow.js --name "my-app"
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '../');

// Simple argument parser
const args = {};
process.argv.slice(2).forEach((val, index, array) => {
  if (val.startsWith('--')) {
    const key = val.slice(2);
    const nextVal = array[index + 1];
    if (nextVal && !nextVal.startsWith('--')) {
      args[key] = nextVal;
    } else {
      args[key] = true;
    }
  }
});

const appName = args.name;
const description = args.desc;
const mode = args.mode === 'refactor' ? 'refactor' : 'create'; // 'create' or 'refactor'

if (!appName) {
  console.log('🚨 Error: Sub-App name is required. Use --name <app-name>');
  console.log('💡 New: node scripts/run-workflow.js --name "duckdb-trainer" --desc "A interactive SQL playground"');
  console.log('💡 Refactor: node scripts/run-workflow.js --name "git-workflow" --mode "refactor" --desc "Optimize performance and fix inline style violations"');
  process.exit(1);
}

// Validation helper for kebab-case
const kebabRegex = /^[a-z0-9]+(-[a-z0-9]+)*$/;
if (!kebabRegex.test(appName)) {
  console.log(`🚨 Error: App name "${appName}" must be kebab-case.`);
  process.exit(1);
}

const appPath = path.join(ROOT, 'src/apps', appName);

// For refactor mode, the app directory must already exist
if (mode === 'refactor' && !fs.existsSync(appPath)) {
  console.log(`🚨 Error: Cannot refactor "${appName}" because directory does not exist: src/apps/${appName}`);
  process.exit(1);
}

const workflowDir = path.join(appPath, '.workflow');
const statePath = path.join(workflowDir, 'state.json');

// 1. Check if we need to initialize a new workflow state
if (!fs.existsSync(statePath)) {
  if (!description) {
    console.log(`🚨 Error: Workflow state not found for "${appName}". Provide --desc "<description>" to initialize.`);
    process.exit(1);
  }

  console.log(`⚙️ Initializing dynamic [${mode.toUpperCase()}] workflow for sub-app: "${appName}"...`);
  
  // Create directories (safe if already exists)
  fs.mkdirSync(workflowDir, { recursive: true });
  fs.mkdirSync(path.join(appPath, 'components'), { recursive: true });
  fs.mkdirSync(path.join(appPath, 'data'), { recursive: true });

  const initialState = {
    app_name: appName,
    mode: mode,
    description: description,
    created_at: new Date().toISOString(),
    current_phase: mode === 'refactor' ? "Spec & Gap Analysis" : "Spec & Data Modeling",
    phases: {
      "spec_and_data_modeling": {
        "status": "pending",
        "timestamp": null,
        "outputs": {},
        "validation": { "schema_valid": false, "errors": [] }
      },
      "implementation_and_assembly": {
        "status": "pending",
        "timestamp": null,
        "outputs": {},
        "validation": { "consistency_pass": false, "compiles": false, "errors": [] }
      },
      "global_integration": {
        "status": "pending",
        "timestamp": null,
        "outputs": {},
        "validation": { "registered_ok": false, "build_ok": false, "errors": [] }
      },
      "audit": {
        "status": "pending",
        "timestamp": null,
        "verdict": "pending",
        "report_file": null
      }
    }
  };

  fs.writeFileSync(statePath, JSON.stringify(initialState, null, 2), 'utf-8');
  console.log(`✅ Workflow directory structure created at: src/apps/${appName}/.workflow/`);
  
  if (mode === 'refactor') {
    printPromptForRefactorPhase1(appName, description);
  } else {
    printPromptForCreatePhase1(appName, description);
  }
} else {
  // 2. Load existing state and prompt for next steps
  const state = JSON.parse(fs.readFileSync(statePath, 'utf-8'));
  const currentMode = state.mode || 'create';
  
  console.log(`📈 Loading [${currentMode.toUpperCase()}] Workflow state for "${appName}"...`);
  console.log(`   - Current Phase: [${state.current_phase}]`);
  
  // Phase transitions based on mode
  if (currentMode === 'refactor') {
    handleRefactorFlow(state);
  } else {
    handleCreateFlow(state);
  }
}

function handleCreateFlow(state) {
  switch (state.current_phase) {
    case "Spec & Data Modeling":
      if (state.phases.spec_and_data_modeling.status === "completed") {
        console.log(`✅ Phase "Spec & Data Modeling" is marked COMPLETED.`);
        state.current_phase = "Implementation & Assembly";
        fs.writeFileSync(statePath, JSON.stringify(state, null, 2), 'utf-8');
        printPromptForCreatePhase2(appName, state.description);
      } else {
        printPromptForCreatePhase1(appName, state.description);
      }
      break;
    case "Implementation & Assembly":
      if (state.phases.implementation_and_assembly.status === "completed") {
        console.log(`✅ Phase "Implementation & Assembly" is marked COMPLETED.`);
        state.current_phase = "Global Integration";
        fs.writeFileSync(statePath, JSON.stringify(state, null, 2), 'utf-8');
        printPromptForCreatePhase3(appName);
      } else {
        printPromptForCreatePhase2(appName, state.description);
      }
      break;
    case "Global Integration":
      if (state.phases.global_integration.status === "completed") {
        console.log(`✅ Phase "Global Integration" is marked COMPLETED.`);
        state.current_phase = "Audit";
        fs.writeFileSync(statePath, JSON.stringify(state, null, 2), 'utf-8');
        printPromptForPhase4(appName, 'create');
      } else {
        printPromptForCreatePhase3(appName);
      }
      break;
    case "Audit":
      handleAuditPhase(state);
      break;
    default:
      console.log(`⚠️ Unknown phase "${state.current_phase}"`);
  }
}

function handleRefactorFlow(state) {
  switch (state.current_phase) {
    case "Spec & Gap Analysis":
      if (state.phases.spec_and_data_modeling.status === "completed") {
        console.log(`✅ Phase "Spec & Gap Analysis" is marked COMPLETED.`);
        state.current_phase = "Refactoring & Refinement";
        fs.writeFileSync(statePath, JSON.stringify(state, null, 2), 'utf-8');
        printPromptForRefactorPhase2(appName, state.description);
      } else {
        printPromptForRefactorPhase1(appName, state.description);
      }
      break;
    case "Refactoring & Refinement":
      if (state.phases.implementation_and_assembly.status === "completed") {
        console.log(`✅ Phase "Refactoring & Refinement" is marked COMPLETED.`);
        state.current_phase = "Integration & Verification";
        fs.writeFileSync(statePath, JSON.stringify(state, null, 2), 'utf-8');
        printPromptForRefactorPhase3(appName);
      } else {
        printPromptForRefactorPhase2(appName, state.description);
      }
      break;
    case "Integration & Verification":
      if (state.phases.global_integration.status === "completed") {
        console.log(`✅ Phase "Integration & Verification" is marked COMPLETED.`);
        state.current_phase = "Audit";
        fs.writeFileSync(statePath, JSON.stringify(state, null, 2), 'utf-8');
        printPromptForPhase4(appName, 'refactor');
      } else {
        printPromptForRefactorPhase3(appName);
      }
      break;
    case "Audit":
      handleAuditPhase(state);
      break;
    default:
      console.log(`⚠️ Unknown phase "${state.current_phase}"`);
  }
}

function handleAuditPhase(state) {
  if (state.phases.audit.verdict === "pass") {
    console.log(`🎉 CONGRATULATIONS! Sub-App "${appName}" has passed Audit and is ready for production Delivery.`);
  } else if (state.phases.audit.verdict === "revise" || state.phases.audit.verdict === "fail") {
    console.log(`🚨 Audit Verdict: ${state.phases.audit.verdict.toUpperCase()}. Please check audit report at src/apps/${appName}/.workflow/audit-report.json`);
    console.log(`👉 Run the suggested action described in audit-report.json, then reset phase status to trigger audit again.`);
  } else {
    printPromptForPhase4(appName, state.mode);
  }
}

function writeNextPromptFile(appName, promptText) {
  const promptPath = path.join(ROOT, 'src/apps', appName, '.workflow/next-prompt.txt');
  fs.writeFileSync(promptPath, promptText, 'utf-8');
  console.log(`💾 Next prompt instructions copied to: src/apps/${appName}/.workflow/next-prompt.txt`);
}

// ==================== NEW APP PROMPTS ====================

function printPromptForCreatePhase1(appName, desc) {
  const promptText = `=== WORKFLOW INSTRUCTION: PHASE 1 (SPEC & DATA MODELING) ===
Role: SpecAgent (系统分析师与建模师)
Task:
1. 请阅读项目的设计系统规范 [PROJECT-HARNESS.md](file:///C:/Users/luoyu/Desktop/AIPro/ProgrammingTools/unified-tools-hub/PROJECT-HARNESS.md)。
2. 基于功能需求："${desc}"，在 src/apps/${appName}/.workflow/ 下生成 app-spec.json。
3. app-spec.json 必须定义：
   - "path": "/${appName}"
   - "label": 页面导航名称
   - "icon": 单字符图标或Emoji
   - "schema": 用于数据驱动的 JSON Schema
4. 执行完毕后：
   - 将 src/apps/${appName}/.workflow/state.json 中的 phases.spec_and_data_modeling.status 修改为 "completed"。
   - 给出设计规格总结。
============================================================`;
  console.log('\n' + promptText + '\n');
  writeNextPromptFile(appName, promptText);
}

function printPromptForCreatePhase2(appName, desc) {
  const promptText = `=== WORKFLOW INSTRUCTION: PHASE 2 (IMPLEMENTATION & ASSEMBLY) ===
Role: DataAgent (数据生成) & UIAgent (UI组件开发) [可并行/接力]
Task:
1. 读取 src/apps/${appName}/.workflow/app-spec.json。
2. DataAgent 任务：
   - 在 src/apps/${appName}/data/ 目录下创建符合 schema 定义的 prompts.ts（或数据种子文件）。
3. UIAgent 任务：
   - 在 src/apps/${appName}/ 下创建 ${appName.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')}Page.tsx 页面组件。
   - UI 必须遵循 85% 宽度容器、正文 text-lg 限制、禁止硬编码颜色等 Harness 样式规范。
4. 校验 Gate 2：
   - 确保子应用可通过独立编译。
   - 运行 \`node scripts/check-consistency.js\`，要求 0 Violations。
5. 执行完毕后：
   - 将 src/apps/${appName}/.workflow/state.json 中的 phases.implementation_and_assembly.status 修改为 "completed"。
============================================================`;
  console.log('\n' + promptText + '\n');
  writeNextPromptFile(appName, promptText);
}

function printPromptForCreatePhase3(appName) {
  const promptText = `=== WORKFLOW INSTRUCTION: PHASE 3 (GLOBAL INTEGRATION) ===
Role: RegisterAgent (系统集成商)
Task:
1. 读取 src/apps/${appName}/.workflow/app-spec.json。
2. 进行全局注册配置：
   - 在 [src/App.tsx](file:///C:/Users/luoyu/Desktop/AIPro/ProgrammingTools/unified-tools-hub/src/App.tsx) 中以 lazy load 方式导入新页面并添加 Route 映射。
   - 在 [src/components/NavBar.tsx](file:///C:/Users/luoyu/Desktop/AIPro/ProgrammingTools/unified-tools-hub/src/components/NavBar.tsx) 的 navItems 中注册新路由。
   - 在 [src/utils/SearchService.ts](file:///C:/Users/luoyu/Desktop/AIPro/ProgrammingTools/unified-tools-hub/src/utils/SearchService.ts) 中引入数据并将数据压入全局搜索索引。
3. 校验 Gate 3：
   - 运行 \`npm run build\` 或 \`npx tsc --noEmit\`，确保全局无 TypeScript 报错。
4. 执行完毕后：
   - 将 src/apps/${appName}/.workflow/state.json 中的 phases.global_integration.status 修改为 "completed"。
============================================================`;
  console.log('\n' + promptText + '\n');
  writeNextPromptFile(appName, promptText);
}

// ==================== REFACTOR MODE PROMPTS ====================

function printPromptForRefactorPhase1(appName, desc) {
  const promptText = `=== WORKFLOW INSTRUCTION: PHASE 1 (SPEC & GAP ANALYSIS) ===
Role: SpecAgent (现状分析与规约定义)
Task:
1. 请阅读项目设计系统规范 [PROJECT-HARNESS.md](file:///C:/Users/luoyu/Desktop/AIPro/ProgrammingTools/unified-tools-hub/PROJECT-HARNESS.md)。
2. 分析当前已存在的子应用目录 src/apps/${appName}/ 中的代码：
   - 识别有哪些样式、组件命名或依赖违反了项目 Harness 规范（如 12px 字体、硬编码十六进制颜色、inline styles、或未解耦的依赖）。
   - 理解本次重构/优化目标："${desc}"。
3. 在 src/apps/${appName}/.workflow/ 下生成 app-spec.json，里面明确记录：
   - "refactor_targets": [需要重构或优化的具体组件、文件或数据定义列表]
   - "gap_analysis": [当前代码违反的规范条目与隐患]
   - "target_schema": 重构后数据的 Schema 约束（若数据结构发生变动）
4. 执行完毕后：
   - 将 src/apps/${appName}/.workflow/state.json 中的 phases.spec_and_data_modeling.status 修改为 "completed"。
   - 输出重构方案与规约总结。
============================================================`;
  console.log('\n' + promptText + '\n');
  writeNextPromptFile(appName, promptText);
}

function printPromptForRefactorPhase2(appName, desc) {
  const promptText = `=== WORKFLOW INSTRUCTION: PHASE 2 (REFACTORING & REFINEMENT) ===
Role: UIAgent (UI组件重构) & DataAgent (数据重构与清洗) [可并行/接力]
Task:
1. 读取 src/apps/${appName}/.workflow/app-spec.json 中的 "refactor_targets" 与 "gap_analysis"。
2. UIAgent 任务：
   - 重构 src/apps/${appName}/ 下的页面与组件，修复所有已识别出的违规点。
   - 使用外科手术式修改（Surgical Changes）原则，保留与重构目标无关的原有业务交互和渲染逻辑。
3. DataAgent 任务（若涉及数据优化）：
   - 对 src/apps/${appName}/data/ 下的数据进行重构或补充，确保数据结构 100% 对齐 "target_schema"。
4. 校验 Gate 2：
   - 运行 \`node scripts/check-consistency.js\` 进行一致性扫描，必须 0 Violations。
   - 运行 \`npm run build\` 或局部编译，确保无语法报错。
5. 执行完毕后：
   - 将 src/apps/${appName}/.workflow/state.json 中的 phases.implementation_and_assembly.status 修改为 "completed"。
============================================================`;
  console.log('\n' + promptText + '\n');
  writeNextPromptFile(appName, promptText);
}

function printPromptForRefactorPhase3(appName) {
  const promptText = `=== WORKFLOW INSTRUCTION: PHASE 3 (INTEGRATION & VERIFICATION) ===
Role: RegisterAgent (回归验证与全局对齐)
Task:
1. 检查修改后的子应用是否导致全局组件或服务断裂。
2. 检查全局注册链路：
   - 检查 [src/App.tsx](file:///C:/Users/luoyu/Desktop/AIPro/ProgrammingTools/unified-tools-hub/src/App.tsx) 中该路由配置是否依然正确、懒加载导入是否正常。
   - 检查 [src/utils/SearchService.ts](file:///C:/Users/luoyu/Desktop/AIPro/ProgrammingTools/unified-tools-hub/src/utils/SearchService.ts) 是否因为数据结构变化导致解析和生成搜索索引失败，如需改动，进行外科手术式对齐。
3. 校验 Gate 3：
   - 运行全局打包命令 \`npm run build\` 与测试命令 \`npm run test\`，确保不引入任何破坏全局的 Regression Bug。
4. 执行完毕后：
   - 将 src/apps/${appName}/.workflow/state.json 中的 phases.global_integration.status 修改为 "completed"。
============================================================`;
  console.log('\n' + promptText + '\n');
  writeNextPromptFile(appName, promptText);
}

function printPromptForPhase4(appName, currentMode) {
  const promptText = `=== WORKFLOW INSTRUCTION: PHASE 4 (AUDIT VERIFICATION) ===
Role: AuditAgent (独立质量审计员)
Task:
1. 你不参与重构代码。请对这次 [${currentMode.toUpperCase()}] 任务进行独立审计。
2. 严格核对：
   - 相比重构前，代码是否 100% 修复了 spec 中识别出的 gap 违规点。
   - 修改是否完全遵守 [PROJECT-HARNESS.md](file:///C:/Users/luoyu/Desktop/AIPro/ProgrammingTools/unified-tools-hub/PROJECT-HARNESS.md)（排版、容器宽度、CSS主题变量等）。
   - 有无破坏原有业务逻辑的回归风险。
3. 在 src/apps/${appName}/.workflow/ 目录下输出 audit-report.json，包含以下字段：
   - "verdict": "pass" | "revise" | "fail"
   - "core_issues": []
   - "must_fix": []
   - "nice_to_have": []
   - "risk_points": []
   - "next_action": ""
4. 根据 verdict 更新 src/apps/${appName}/.workflow/state.json 中的 phases.audit 的 verdict 状态。
============================================================`;
  console.log('\n' + promptText + '\n');
  writeNextPromptFile(appName, promptText);
}
