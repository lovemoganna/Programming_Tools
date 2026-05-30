# PROJECT-HARNESS — Programming Tools Hub

> **最后更新**：2026-05-10
> **神秘屋风险评级**：中 (Medium) — 子应用数据结构略有差异，缺乏自动化测试验证。
> **版本**：v1.0

---

## 项目概述（给 AI 的第一段话）

这是一个名为 **Programming Tools Hub** 的开发工具与思维中心，旨在集成多种编程思维工具、提示词库和技术教程。项目采用 React (TypeScript) + Vite 构建，具有高度模块化的架构，每个独立功能作为 `src/apps/` 下的一个子应用存在，并共享全局的 UI 组件、主题系统和搜索服务。

**技术栈**：React 18 / TypeScript / Vite / TailwindCSS (via Theme) / Vanilla CSS (Custom)

**项目状态**：开发中 — 已集成 Git 工作流、MECE 框架、Python MECE、编程心态、Flow Wiki 等多个模块。

---

## 一、项目词典

> AI 在这个项目中应该使用以下术语，不得随意替换或创造新词。

### 核心实体

| 规范名称 | 含义边界 | 禁用别名 |
|---------|---------|---------|
| Sub-App (子应用) | 位于 `src/apps/` 下的独立功能模块，拥有自己的页面、组件和数据。 | Plugin, Module, Tool |
| Prompt Module | 存储在 `data/` 文件夹下的提示词数据定义文件。 | Template, Prompt List |
| Core Theme (核心主题) | 位于 `src/theme/` 的全局设计系统，包含 Tailwind 配置、CSS 变量和全局基础样式。 | Global Style, CSS Base |

### 核心操作

| 规范动词 | 含义 | 包含 | 不包含 |
|---------|------|------|--------|
| Integrate | 将一个新的工具或教程集成到 Hub 中。 | 创建子应用目录、添加路由、在首页展示。 | 重构全局导航逻辑。 |
| Register | 在搜索服务或全局导航中注册子应用。 | 更新 `SearchService.ts` 或相关配置。 | 修改 UI 布局。 |
| Stylize | 应用统一主题系统对页面进行美化。 | 使用 `core-theme.css` 中的变量和 Tailwind 类。 | 编写硬编码颜色或忽略响应式。 |

---

## 二、架构规范

> AI 生成的代码必须遵循以下架构规范。当有疑问时，参考 `src/apps/git-workflow/`（成熟示例）。

### 目录结构

```
src/
├── apps/              # 子应用集合
│   └── {app-name}/    # 特定子应用
│       ├── components/ # 私有组件
│       ├── data/      # 提示词或配置数据
│       └── {Page}.tsx # 主页面
├── components/        # 全局共享组件 (NavBar, CopyButton, etc.)
├── theme/             # 统一主题系统
└── utils/             # 全局工具类 (Search, Storage, etc.)
```

### 命名规范

```
文件命名：kebab-case (目录) / PascalCase (组件/页面)，示例：git-workflow / PromptCard.tsx
函数命名：camelCase，示例：handleCopySuccess()
类命名：PascalCase，示例：SearchService
常量命名：UPPER_SNAKE_CASE，示例：MAX_PROMPT_LENGTH
测试文件：*.test.ts / *.spec.tsx
```

### 模块依赖规则

```
允许的依赖方向：apps -> components, apps -> theme, apps -> utils

禁止的依赖：
- apps 不得互相依赖，原因：保持子应用独立性和可插拔性。
- components 不得依赖特定 apps，原因：保持组件通用性。
```

### 标准模式

**样式管理**：
- **引擎**：项目已集成 TailwindCSS。可以使用 Tailwind 类进行快速布局和响应式设计。
- **变量**：颜色、字体、阴影必须优先使用 `src/theme/core-theme.css` 中定义的 CSS 变量（如 `var(--color-primary-600)`）。
- **禁止**：禁止在 JSX 中使用复杂的内联样式 `style={{...}}`（除了动态计算值）。

**布局规范 (Layout Rules)**：
- **主容器**：所有子应用的主内容区域统一使用 `max-w-[85%] mx-auto`。禁止使用固定像素的最大宽度（如 `1024px`），确保在大屏下也能保持一致的比例。
- **侧边栏**：子应用内部侧边栏统一使用 `w-80` (320px) 固定宽度，背景使用 `bg-slate-50/50`。
- **阅读区**：长段落正文在主容器内建议限制为 `max-w-3xl` 或 `max-w-4xl`。
- **间距**：Section 之间统一使用 `space-y-24`。

**字体规范 (Typography Rules)**：
- **根缩放**：全局默认字体大小已缩放至原先的 80% (`html { font-size: 80% }`)。
- **正文 (Body)**：
  - 标准：`text-lg font-medium` (实际显示约 14.4px)。
  - 备注：绝对禁止在主要描述文字中使用 `text-xs` (9.6px) 或更小字体，除非是脚注。
- **标题 (Titles)**：
  - PageTitle: `text-4xl` 或 `text-5xl`，`font-black`。
  - SectionTitle: `text-2xl` 或 `text-3xl`，`font-black`。
- **代码 (Code)**：
  - `font-mono text-sm` 或 `text-base`。禁止使用 `8px` 等极端小字体。

**数据驱动**：UI 应该由 `data/` 下的静态数据驱动，确保逻辑与内容分离。

---

## 三、AI 工作规则

### 任务语法模板

> 向 AI 提需求时，建议使用以下模板。

```
位置：src/apps/{{new-app}}
场景：新增一个 {{工具名称}} 工具
任务：集成并 Stylize 页面
约束：复用全局 NavBar 和 CopyButton，使用 Tailwind + Theme Variables
验收：页面能正常渲染数据，字体大小符合 text-lg 标准，符合 85% 宽度规范
```

### 允许 AI 自由操作的区域

```
src/apps/ - 允许创建和修改特定子应用的私有逻辑。
src/utils/ - 允许优化通用工具函数（如搜索算法）。
```

### 需要人工确认才能修改的区域

```
src/components/ - 修改全局组件可能影响所有子应用。
src/theme/ - 修改主题定义会改变全局视觉风格。
package.json - 引入新依赖必须经过确认。
```

### AI 的硬禁止操作

> 以下操作无论 AI 如何建议，都不执行，直接拒绝：

- **不修改** `index.html`，除非是全局脚本注入。
- **不引入** 新的 UI 组件库（如 Headless UI, Shadcn/UI），除非明确要求。
- **不删除** 任何已存在的子应用数据。
- **禁止** 使用硬编码的十六进制颜色（如 `#ff0000`），必须使用主题变量。
- **禁止** 使用像素单位的字体大小（如 `font-size: 12px`），必须使用 Tailwind 比例或 `rem`。

---

## 四、验证要求

### 生成后检查（合并/执行前）

**排版与布局检查**：
- [ ] 是否使用了 `max-w-[85%] mx-auto`？
- [ ] 正文字体是否达到了 `text-lg` (14.4px)？
- [ ] 颜色是否全部使用了 `var(--color-...)` 变量？

**结构性检查**：
- [ ] 是否遵循 `src/apps/{app-name}` 的标准目录结构？
- [ ] `SearchService.ts` 是否已同步更新？

---

## 五、反馈规则

### 失败记录格式

> 每次 AI 生成需要大量修改时，记录以下内容。

```
日期：{{日期}}
失败类型：[误解需求 / 违反架构 / 风格不一致]
描述：发生了什么
规则更新：已将规则添加到 Harness...
```

---

*此文档由 mystery-house-harness Skill 生成。*
*生成日期：2026-05-10 | 风险评级：中 | 下次审查：2026-06-10*
