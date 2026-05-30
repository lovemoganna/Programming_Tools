export interface PromptStep {
  title: string;
  items: string[];
}

export interface MetaPrompt {
  id: string;
  module: string;
  moduleNumber: number;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  bgGradient: string;
  badgeColor: string;
  scenario: string;
  prompt: string;
  steps: PromptStep[];
  tags: string[];
}

export const metaPrompts: MetaPrompt[] = [
  {
    id: "init",
    module: "M1",
    moduleNumber: 1,
    title: "仓库初始化",
    subtitle: "Repository Initialization",
    icon: "🏗️",
    color: "violet",
    bgGradient: "from-violet-500 to-purple-600",
    badgeColor: "bg-violet-100 text-violet-700 border-violet-200",
    scenario: "适用场景：新项目首次接入 Git，或从零建立远程仓库",
    tags: ["git init", "remote", ".gitignore", "首次提交"],
    prompt: `请使用 **Git** 初始化当前项目，完成以下操作：

1. **初始化本地仓库**
   * 在项目根目录执行 \`git init\`，确认 \`.git\` 目录已生成。

2. **配置 .gitignore**
   * 根据当前项目技术栈（如 Node.js / Python / Java），自动生成合适的 \`.gitignore\` 文件。
   * 确保以下内容被忽略：依赖目录（node_modules/）、构建产物（dist/ build/）、环境变量文件（.env*）、IDE 配置（.idea/ .vscode/）、系统文件（.DS_Store Thumbs.db）。

3. **完成首次提交**
   * 执行 \`git add .\` 暂存所有文件。
   * 使用 \`git commit -m "chore: initial project setup"\` 完成初始提交。

4. **关联远程仓库**
   * 执行 \`git remote add origin <REPO_URL>\` 绑定远程地址。
   * 执行 \`git push -u origin main\` 将代码推送到远端并设置上游跟踪。

5. **验证结果**
   * 执行 \`git remote -v\` 确认远程地址正确。
   * 执行 \`git log --oneline -5\` 确认提交历史存在。

本项目远程仓库地址：<REPO_URL>`,
    steps: [
      {
        title: "初始化本地仓库",
        items: [
          "在项目根目录执行 `git init`",
          "确认 `.git` 目录已生成",
          "设置默认分支名称为 `main`",
        ],
      },
      {
        title: "配置 .gitignore",
        items: [
          "根据技术栈自动生成 `.gitignore`",
          "排除 node_modules/、dist/、.env*",
          "排除 IDE 配置与系统文件",
        ],
      },
      {
        title: "完成首次提交",
        items: [
          "执行 `git add .` 暂存所有文件",
          '提交信息：`"chore: initial project setup"`',
          "确认提交历史存在",
        ],
      },
      {
        title: "关联远程仓库",
        items: [
          "执行 `git remote add origin <REPO_URL>`",
          "执行 `git push -u origin main`",
          "执行 `git remote -v` 验证",
        ],
      },
    ],
  },
  {
    id: "daily-commit",
    module: "M2",
    moduleNumber: 2,
    title: "日常变更提交",
    subtitle: "Daily Change Commit",
    icon: "📝",
    color: "blue",
    bgGradient: "from-blue-500 to-cyan-600",
    badgeColor: "bg-blue-100 text-blue-700 border-blue-200",
    scenario: "适用场景：完成功能开发或修复后，将变更提交到本地/远程仓库",
    tags: ["git add", "commit", "status", "diff", "Conventional Commits"],
    prompt: `请使用 **Git** 管理当前项目，完成以下操作：

1. **扫描变更**
   * 执行 \`git status\` 检查所有已修改、未跟踪或已暂存的文件。
   * 执行 \`git diff\` 查看具体改动内容，理解每个文件的变更目的。
   * 同步更新 \`.gitignore\`，确保无关文件不被跟踪。

2. **编写 Commit Message**
   * 遵循 Conventional Commits 规范：\`<type>(<scope>): <subject>\`
   * type 可选：feat / fix / docs / style / refactor / test / chore / ci / perf
   * 对每个变更文件或变更模块，编写清晰、准确的 commit message。
   * 若变更来自多个模块，使用多次 \`git add <file> && git commit\` 分别提交。

3. **提交代码**
   * 将所有变更暂存并提交到本地仓库。
   * 执行 \`git log --oneline -5\` 验证提交记录完整性。

4. **推送到远程**
   * 执行 \`git push\` 将本地提交同步到远程仓库。
   * 若遇到冲突，先执行 \`git pull --rebase\` 再推送。`,
    steps: [
      {
        title: "扫描变更",
        items: [
          "执行 `git status` 查看文件状态",
          "执行 `git diff` 理解具体改动",
          "更新 `.gitignore` 排除无关文件",
        ],
      },
      {
        title: "编写 Commit Message",
        items: [
          "遵循 Conventional Commits 规范",
          "type: feat/fix/docs/style/refactor/test/chore",
          "格式：`<type>(<scope>): <subject>`",
        ],
      },
      {
        title: "提交代码",
        items: [
          "分模块使用 `git add <file>` 精准暂存",
          "执行 `git commit -m \"<message>\"`",
          "执行 `git log --oneline -5` 验证",
        ],
      },
      {
        title: "推送到远程",
        items: [
          "执行 `git push` 同步到远端",
          "冲突时先执行 `git pull --rebase`",
          "确认远端仓库已更新",
        ],
      },
    ],
  },
  {
    id: "branch",
    module: "M3",
    moduleNumber: 3,
    title: "分支管理",
    subtitle: "Branch Management",
    icon: "🌿",
    color: "green",
    bgGradient: "from-green-500 to-emerald-600",
    badgeColor: "bg-green-100 text-green-700 border-green-200",
    scenario: "适用场景：开发新功能、修复 Bug、进行实验性改动时使用独立分支隔离",
    tags: ["branch", "checkout", "merge", "rebase", "feature branch"],
    prompt: `请使用 **Git** 管理分支，完成以下操作：

1. **创建功能分支**
   * 从最新的 \`main\` 分支切出新分支：\`git checkout -b <type>/<name>\`
   * 分支命名规范：feature/xxx、fix/xxx、hotfix/xxx、release/x.x.x、chore/xxx
   * 确认当前在正确分支上：\`git branch --show-current\`

2. **在分支上开发提交**
   * 按照日常变更提交规范（M2）在功能分支上进行开发。
   * 定期执行 \`git push -u origin <branch>\` 推送分支到远端备份。

3. **同步主干变更（可选）**
   * 若主干有更新，执行 \`git rebase main\` 将分支基点移至最新 main。
   * 解决所有冲突后执行 \`git rebase --continue\`。

4. **合并分支**
   * 切回主分支：\`git checkout main\`
   * 执行合并：\`git merge --no-ff <branch> -m "merge: <branch> into main"\`
   * 推送合并结果：\`git push origin main\`

5. **清理分支**
   * 删除本地分支：\`git branch -d <branch>\`
   * 删除远程分支：\`git push origin --delete <branch>\`
   * 执行 \`git branch -a\` 确认清理完成。`,
    steps: [
      {
        title: "创建功能分支",
        items: [
          "从最新 main 切出：`git checkout -b <type>/<name>`",
          "命名规范：feature/ fix/ hotfix/ release/",
          "确认当前分支：`git branch --show-current`",
        ],
      },
      {
        title: "在分支上开发",
        items: [
          "按 M2 规范进行提交",
          "定期推送到远端备份",
          "保持分支专注单一职责",
        ],
      },
      {
        title: "同步主干变更",
        items: [
          "执行 `git rebase main` 变基",
          "解决冲突后 `git rebase --continue`",
          "保持分支与主干同步",
        ],
      },
      {
        title: "合并与清理",
        items: [
          "执行 `git merge --no-ff <branch>`",
          "删除本地和远程已合并分支",
          "执行 `git branch -a` 验证",
        ],
      },
    ],
  },
  {
    id: "sync",
    module: "M4",
    moduleNumber: 4,
    title: "远程同步",
    subtitle: "Remote Synchronization",
    icon: "🔄",
    color: "orange",
    bgGradient: "from-orange-500 to-amber-600",
    badgeColor: "bg-orange-100 text-orange-700 border-orange-200",
    scenario: "适用场景：多人协作或多设备开发时，需要拉取远程最新代码并处理冲突",
    tags: ["pull", "fetch", "push", "rebase", "conflict", "协作"],
    prompt: `请使用 **Git** 完成远程同步，操作如下：

1. **同步远程更新**
   * 执行 \`git fetch origin\` 拉取所有远程分支的最新状态（不自动合并）。
   * 执行 \`git status\` 查看本地与远端的差异。
   * 执行 \`git pull --rebase origin main\` 将远程更新变基到本地，保持提交历史线性。

2. **冲突处理**
   * 若出现冲突，执行 \`git pull --rebase\` 后可能需要解决冲突。
   * 解决后执行 \`git add <file>\` 并 \`git rebase --continue\`。

3. **推送到远程**
   * 执行 \`git push origin <branch>\` 推送更新。
   * 若推送被拒绝，先同步远程更新。

4. **验证同步结果**
   * 执行 \`git log --oneline --graph -10\` 确认历史记录。
   * 确认代码与远程同步。

本项目远程仓库地址：<REPO_URL>`,
    steps: [
      {
        title: "拉取远程更新",
        items: [
          "执行 `git fetch origin` 获取远端状态",
          "执行 `git pull --rebase origin main`",
          "保持提交历史线性整洁",
        ],
      },
      {
        title: "冲突处理",
        items: [
          "列出冲突文件并逐一解决",
          "解决 `<<<<< ===== >>>>>` 标记",
          "执行 `git rebase --continue`",
        ],
      },
      {
        title: "推送到远程",
        items: [
          "执行 `git push origin <branch>`",
          "若被拒绝则重新 pull --rebase",
          "确认远端已更新",
        ],
      },
      {
        title: "验证同步结果",
        items: [
          "执行 `git log --oneline --graph -10`",
          "执行 `git diff origin/main` 确认一致",
          "无差异输出即同步成功",
        ],
      },
    ],
  },
  {
    id: "cicd",
    module: "M5",
    moduleNumber: 5,
    title: "CI/CD 自动化部署",
    subtitle: "CI/CD & GitHub Pages",
    icon: "🚀",
    color: "pink",
    bgGradient: "from-pink-500 to-rose-600",
    badgeColor: "bg-pink-100 text-pink-700 border-pink-200",
    scenario: "适用场景：配置自动化构建、测试与部署流水线，发布到 GitHub Pages 或其他平台",
    tags: ["GitHub Actions", "workflow", "GitHub Pages", "vite base", "deploy"],
    prompt: `请帮我配置 **GitHub Pages 自动部署（CI/CD）流水线**，完成以下操作步骤：

1. **配置 Vite Base 路径**
   * 打开项目中的 \`vite.config.ts\` 或 \`vite.config.js\`。
   * 在配置对象中添加 \`base: '/<REPO_NAME>/'\` 属性（将 \`<REPO_NAME>\` 替换为你在 GitHub 上的真实仓库名），防止在 GitHub Pages 部署后因为相对路径错误导致 CSS、JS 等静态资源出现 404 加载失败。

2. **创建 GitHub Actions 工作流配置文件**
   * 在项目根目录下创建目录 \`.github/workflows/\`。
   * 在该目录下创建配置文件 \`deploy.yml\`，写入自动化构建与部署脚本。
   * 配置工作流触发条件为：当代码推送（push）到 \`main\` 分支时自动执行。
   * 工作流步骤应包含：拉取代码、配置 Node.js 环境、安装依赖（\`npm ci\`）、运行测试、编译项目（\`npm run build\`）、以及使用官方推荐的 Actions（如 \`peaceiris/actions-gh-pages\`）将 \`dist\` 目录发布到 \`gh-pages\` 分支。

3. **提交与推送到远程仓库**
   * 执行 \`git add .github/workflows/deploy.yml vite.config.ts\` 暂存修改。
   * 使用规范的信息进行提交：\`git commit -m "ci: configure automated build and deployment to github pages"\`。
   * 推送代码：\`git push origin main\`，并在 GitHub 仓库的 "Actions" 标签页实时监控编译部署状态。

4. **开启 GitHub Pages 选项**
   * 进入 GitHub 仓库设置 (Settings) -> Pages，将 Build and deployment 的 Source 设置为 "Deploy from a branch"，并选择 \`gh-pages\` 分支及 \`/ (root)\` 目录进行发布。

本项目配置信息：
- 仓库名称：\`<REPO_NAME>\`
- 远程仓库地址：\`<REPO_URL>\`
- 预览部署地址：\`https://<USERNAME>.github.io/<REPO_NAME>/\``,
    steps: [
      {
        title: "配置 Vite base 路径",
        items: [
          "修改 `vite.config.ts` 添加 `base: '/<REPO_NAME>/'`",
          "避免静态资源 404 导致页面空白",
          "确认 `build.outDir` 为 `dist`",
        ],
      },
      {
        title: "生成 Workflow 文件",
        items: [
          "创建 `.github/workflows/deploy.yml`",
          "触发条件：push 到 main 分支",
          "使用 `peaceiris/actions-gh-pages` 部署",
        ],
      },
      {
        title: "检查 .gitignore",
        items: [
          "确保 `dist/` 已被忽略",
          "确保 `node_modules/` 已被忽略",
          "确保 `.env*` 已被忽略",
        ],
      },
      {
        title: "推送并验证",
        items: [
          "执行 `git add . && git commit -m 'ci: ...' && git push`",
          "Settings → Pages → Source 选 gh-pages",
          "访问部署地址确认页面正常",
        ],
      },
    ],
  },
  {
    id: "rollback",
    module: "M6",
    moduleNumber: 6,
    title: "版本回滚与恢复",
    subtitle: "Rollback & Recovery",
    icon: "⏪",
    color: "red",
    bgGradient: "from-red-500 to-orange-600",
    badgeColor: "bg-red-100 text-red-700 border-red-200",
    scenario: "适用场景：误操作、线上故障、需要撤销提交或恢复删除文件时",
    tags: ["revert", "reset", "reflog", "stash", "cherry-pick", "回滚"],
    prompt: `请使用 **Git** 完成版本回滚与恢复操作，支持以下场景：

1. **场景 A：安全撤销单次提交记录（Revert）**
   * 适用：错误修改已推送到远程共享分支，需在保留历史的前提下取消该修改。
   * 命令：执行 \`git revert <COMMIT_HASH>\`，这会创建一个新的提交来反向操作指定提交的代码变动。
   * 解决潜在的合并冲突后，执行 \`git commit\`，随后通过 \`git push origin main\` 将撤销操作安全同步到远端。

2. **场景 B：重置本地工作区（Reset）**
   * 适用：本地代码逻辑写乱，或需强制撤销尚未推送到远端的多条提交记录。
   * 软重置（保留工作区改动）：执行 \`git reset --soft HEAD~N\`（将本地 HEAD 往回移动 N 个版本，所有改动保留在暂存区）。
   * 硬重置（完全抹去改动）：执行 \`git reset --hard <COMMIT_HASH>\`（强制清空工作区与暂存区到指定的历史快照，注意此操作不可逆，请先通过 \`git stash\` 备份未提交内容）。

3. **场景 C：误删分支或提交找回（Reflog）**
   * 适用：执行了 \`git reset --hard\` 导致未推送的提交丢失，或本地删除了尚未合并的分支。
   * 执行 \`git reflog\` 查看本地 HEAD 的每一次变更指针移动日志。
   * 定位到误操作前的 commit hash，执行 \`git checkout -b recover-branch <LOST_COMMIT_HASH>\` 即可完整找回丢失的分支与修改。

4. **场景 D：单文件级时光机（Checkout）**
   * 适用：仅想恢复某个特定文件到之前的某次稳定提交状态，不影响其他文件。
   * 命令：执行 \`git checkout <COMMIT_HASH> -- <FILE_PATH>\`，确认文件内容回滚后执行暂存和提交。`,
    steps: [
      {
        title: "查看历史记录",
        items: [
          "执行 `git log --oneline --graph -20`",
          "执行 `git reflog` 查看所有操作记录",
          "定位目标 commit hash",
        ],
      },
      {
        title: "安全回滚（推荐）",
        items: [
          "执行 `git revert <commit-hash>`",
          "生成撤销提交，不删除历史",
          "推送：`git push origin main`",
        ],
      },
      {
        title: "强制回滚（谨慎）",
        items: [
          "软回滚：`git reset --soft HEAD~N`",
          "硬回滚：`git reset --hard <hash>`",
          "强推：`git push --force-with-lease`",
        ],
      },
      {
        title: "恢复与移植",
        items: [
          "恢复文件：`git checkout <hash> -- <file>`",
          "Cherry-pick：`git cherry-pick <hash>`",
          "Stash 恢复：`git stash pop`",
        ],
      },
    ],
  },
  {
    id: "audit",
    module: "M7",
    moduleNumber: 7,
    title: "仓库审计与维护",
    subtitle: "Repository Audit & Maintenance",
    icon: "🔍",
    color: "teal",
    bgGradient: "from-teal-500 to-cyan-600",
    badgeColor: "bg-teal-100 text-teal-700 border-teal-200",
    scenario: "适用场景：定期健康检查、清理冗余数据、规范提交历史、保障仓库质量",
    tags: ["audit", "clean", "tag", "release", "blame", "log", "维护"],
    prompt: `请使用 **Git** 对当前项目仓库进行深度的健康审计与日常维护，完成以下工作：

1. **仓库状态健康检查**
   * 执行 \`git status\`，检查当前工作区是否干净，确认无未跟踪（untracked）或未清理的临时脏文件。
   * 执行 \`git branch -a\`，理清所有本地与远程分支结构，识别不再使用的冗余分支。
   * 执行 \`git remote show origin\`，核对与远程仓库的关联状态和分支映射是否健康。

2. **清理过期冗余分支与悬空对象**
   * 执行 \`git branch --merged main\` 列出所有已合并到主干的本地功能分支。
   * 安全删除已合并的本地开发分支：\`git branch -d <BRANCH_NAME>\`。
   * 清理本地已失效的远程追踪指针：\`git fetch --prune\`。
   * 彻底清空缓存，压缩数据库并回收空间：\`git gc --prune=now --aggressive\`。

3. **规范提交历史审计**
   * 执行 \`git log --oneline --graph -15\` 审计提交线图是否清晰。
   * 使用作者过滤审查个人提交占比：\`git shortlog -sn --all\`。
   * 扫描提交历史中是否存在泄露的密码、API Key 等敏感文件，如有，需立即使用 \`git-filter-repo\` 工具重写历史。

4. **版本标记与里程碑发布**
   * 遵循语义化版本规范（Semantic Versioning, SemVer），为当前稳定版本创建附注标签：\`git tag -a v1.0.0 -m "release: stable version 1.0.0 with full documentation"\`。
   * 将新建标签安全推送到远端：\`git push origin --tags\`。`,
    steps: [
      {
        title: "仓库健康检查",
        items: [
          "执行 `git status` 确认工作区干净",
          "执行 `git branch -a` 识别过期分支",
          "执行 `git log --oneline -10` 检查规范性",
        ],
      },
      {
        title: "清理冗余数据",
        items: [
          "删除已合并的本地分支",
          "清理远端已删除的追踪分支",
          "执行 `git gc --prune=now` 压缩空间",
        ],
      },
      {
        title: "标签与版本发布",
        items: [
          "创建语义化标签：`git tag -a v<x.y.z>`",
          "推送标签：`git push origin --tags`",
          "遵循 SemVer 版本规范",
        ],
      },
      {
        title: "提交历史审计",
        items: [
          "统计成员提交：`git shortlog -sn`",
          "按关键词搜索：`git log --grep='<keyword>'`",
          "扫描敏感信息防止泄露",
        ],
      },
    ],
  },
];
