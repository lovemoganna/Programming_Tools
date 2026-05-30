export interface Signal {
  id: number;
  title: string;
  icon: string;
  before: string;
  after: string;
  description: string;
  elisp: {
    title: string;
    code: string;
    explanation: string;
  };
}

export interface ElispExample {
  id: string;
  category: string;
  title: string;
  description: string;
  code: string;
  insight: string;
  tags: string[];
}

export interface PromptModule {
  id: string;
  title: string;
  icon: string;
  color: string;
  bgColor: string;
  borderColor: string;
  scenario: string;
  misuse: string;
  systemPrompt: string;
  placeholder: string;
  aiSampleInputs: string[];
}

export const signals: Signal[] = [
  {
    id: 1,
    title: "先想问题，不是先想代码",
    icon: "🎯",
    before: "这个用什么语法写？有没有现成代码能抄？",
    after: "这个问题本质是什么？输入是什么？输出是什么？",
    description: "没开窍时在找代码，开窍后在建模型。脑子里首先运转的是问题结构，而非语法细节。",
    elisp: {
      title: "先建模：用 plist 表达输入/输出",
      code: [
        "(defun analyze-problem (input-spec output-spec constraints)",
        '  "先定义问题结构，再考虑实现。"',
        "  (list :input   input-spec",
        "        :output  output-spec",
        "        :edges   constraints",
        "        :model   nil))",
        "",
        ";; 使用示例：先建模，再写逻辑",
        "(let ((problem (analyze-problem",
        "                '(:type list :element integer)",
        "                '(:type integer :desc \"最大值\")",
        "                '(:empty-list nil :single identity))))",
        "  (message \"问题已建模: %S\" problem))"
      ].join("\n"),
      explanation: "开窍的核心：先用数据结构表达问题的 shape，而不是直接动手写循环。Emacs Lisp 的 plist 天然适合描述半结构化问题模型。"
    }
  },
  {
    id: 2,
    title: "拆问题，而非拼代码",
    icon: "🔧",
    before: "先写一大坨，跑不通再修，修着修着结构烂掉。",
    after: "先搭框架，先定义输入输出，先写最小可运行版本，再逐步扩展。",
    description: "编程能力最重要的不是写，而是拆。大问题拆成小问题，每一步都可验证。",
    elisp: {
      title: "递归拆解：分治思维的 Lisp 表达",
      code: [
        ";;; 拆问题的经典体现：递归 = 拆成「当前层」+ 「剩余部分」",
        "",
        "(defun my-flatten (lst)",
        '  "将嵌套列表拍平——先想清楚子问题分类：',
        "  - 空列表 → 返回空",
        "  - 头是原子 → 保留，递归处理尾",
        '  - 头是列表 → 先拍平头，再拍平尾"',
        "  (cond",
        "   ((null lst) '())",
        "   ((atom (car lst))",
        "    (cons (car lst) (my-flatten (cdr lst))))",
        "   (t",
        "    (append (my-flatten (car lst))",
        "            (my-flatten (cdr lst))))))",
        "",
        ";; 验证",
        "(my-flatten '(1 (2 3) (4 (5 6))))",
        ";; => (1 2 3 4 5 6)",
        "",
        ";; 关键：每个 cond 分支对应问题的一种「子形态」",
        ";; 这就是拆问题，而不是靠 if-else 堆逻辑"
      ].join("\n"),
      explanation: "Lisp 的 cond 结构天然鼓励你先穷举问题形态，再分别处理——这是「拆问题」思维的语法化表达。每个分支都是一个子问题。"
    }
  },
  {
    id: 3,
    title: "理解抽象与复用",
    icon: "🧩",
    before: "登录用户A一份代码，用户B再复制一份，用户C再复制一份。",
    after: "用户名和密码是变量，登录流程是共性。抽成函数，区分不变结构与可变参数。",
    description: "开始区分：不变的结构 vs 可变的参数。这是抽象能力的萌芽。",
    elisp: {
      title: "高阶函数：抽象的利器",
      code: [
        ";;; 没开窍：重复逻辑",
        "(defun double-list (lst)",
        "  (mapcar (lambda (x) (* 2 x)) lst))",
        "(defun square-list (lst)",
        "  (mapcar (lambda (x) (* x x)) lst))",
        "",
        ";;; 开窍后：抽象「对列表应用变换」这个模式",
        "(defun transform-list (fn lst)",
        '  "将函数 FN 应用到列表 LST 的每个元素。',
        "  不变的结构：遍历 + 收集。",
        '  可变的参数：变换函数 FN。"',
        "  (mapcar fn lst))",
        "",
        ";; 复用同一结构，注入不同行为",
        "(transform-list (lambda (x) (* 2 x))  '(1 2 3))  ; => (2 4 6)",
        "(transform-list (lambda (x) (* x x))  '(1 2 3))  ; => (1 4 9)",
        "(transform-list #'number-to-string     '(1 2 3))  ; => (\"1\" \"2\" \"3\")",
        "",
        ";;; 闭包工厂：生成专用函数",
        "(defun make-multiplier (n)",
        '  "工厂函数：生产「乘以N」的函数"',
        "  (lambda (x) (* n x)))",
        "",
        "(funcall (make-multiplier 3) 7)  ; => 21"
      ].join("\n"),
      explanation: "高阶函数（mapcar、funcall、lambda）完美体现了抽象思维：把「做什么」和「怎么做」分离。make-multiplier 是闭包工厂，体现了「生产行为」的抽象层级。"
    }
  },
  {
    id: 4,
    title: "重视数据结构选择",
    icon: "🗂️",
    before: "只盯流程，怎么一步一步做。数据结构随便用，逻辑绕一圈又一圈。",
    after: "去重想到 set，映射想到 dict，层级关系想到嵌套结构。数据表示好，代码自然简单。",
    description: "很多代码复杂，不是因为逻辑复杂，而是因为数据表示得太差。",
    elisp: {
      title: "哈希表 vs 关联列表：选对结构",
      code: [
        ";;; 场景：统计单词频率",
        "",
        ";;; 方式一（没开窍）：alist，O(n) 查找，逻辑冗长",
        "(defun count-words-alist (words)",
        "  (let ((counts '()))",
        "    (dolist (word words counts)",
        "      (let ((entry (assoc word counts)))",
        "        (if entry",
        "            (setcdr entry (1+ (cdr entry)))",
        "          (push (cons word 1) counts))))))",
        "",
        ";;; 方式二（开窍后）：哈希表，O(1) 查找，意图清晰",
        "(defun count-words-hash (words)",
        '  "用哈希表统计频率——数据结构决定代码复杂度。"',
        "  (let ((ht (make-hash-table :test #'equal)))",
        "    (dolist (word words ht)",
        "      (puthash word",
        "               (1+ (gethash word ht 0))",
        "               ht))))",
        "",
        ";; 使用",
        "(let ((freq (count-words-hash",
        "             '(\"foo\" \"bar\" \"foo\" \"baz\" \"bar\" \"foo\"))))",
        "  (maphash (lambda (k v) (message \"%s: %d\" k v)) freq))",
        ";; foo: 3 | bar: 2 | baz: 1",
        "",
        ";;; gethash 第三参数（默认值）消灭了 if-else"
      ].join("\n"),
      explanation: "选对数据结构，代码行数减半、意图加倍清晰。gethash 的默认值参数，是「让数据结构消灭逻辑」的典型案例。"
    }
  },
  {
    id: 5,
    title: "定位 Bug，不靠碰运气",
    icon: "🔍",
    before: "这里改一下试试，那里加个判断试试，实在不行重写一遍。",
    after: "先复现 → 确认哪一层出错 → 缩小范围 → 验证中间状态 → 找到错误传播链源头。",
    description: "不是「哪里炸了就修哪里」，而是「找到错误传播链条的源头」。",
    elisp: {
      title: "条件断点 + 追踪：系统化定位",
      code: [
        ";;; Emacs Lisp 调试工具链",
        "",
        ";;; 1. message 追踪中间状态（精准打印，不是乱打）",
        "(defun traced-process (data)",
        '  "系统性追踪：每个关键节点打印状态。"',
        "  (message \"[ENTER] data=%S\" data)",
        "  (let* ((step1 (mapcar #'1+ data))",
        "         (_ (message \"[STEP1] after increment: %S\" step1))",
        "         (step2 (seq-filter #'evenp step1))",
        "         (_ (message \"[STEP2] after filter even: %S\" step2))",
        "         (result (apply #'+ step2))",
        "         (_ (message \"[RESULT] sum=%d\" result)))",
        "    result))",
        "",
        ";;; 2. condition-case：精确捕获，定位错误层级",
        "(defun safe-divide (a b)",
        "  (condition-case err",
        "      (/ a b)",
        "    (arith-error",
        "     (message \"定位：除零错误 a=%S b=%S err=%S\" a b err)",
        "     nil)",
        "    (wrong-type-argument",
        "     (message \"定位：类型错误 a=%S b=%S\" a b)",
        "     nil)))",
        "",
        "(safe-divide 10 0)    ; 精确捕获，有诊断信息",
        "(safe-divide 10 \"x\")  ; 类型错误，有诊断信息",
        "",
        ";;; 3. edebug 步进调试：C-u C-M-x 在函数定义处启用"
      ].join("\n"),
      explanation: "系统化调试 = 分层 + 追踪 + 精确捕获。condition-case 让你精确指定「在哪一层、捕获哪种错误」——这就是定位思维，而非试错思维。edebug 是 Emacs 内置的步进调试器。"
    }
  },
  {
    id: 6,
    title: "建立边界感",
    icon: "🛡️",
    before: "输入总是合法，数据总是存在，网络总是正常，下标总不会越界。",
    after: "如果传空值怎么办？如果列表为空怎么办？如果类型不对怎么办？",
    description: "从「让代码跑起来」，变成「让代码在真实世界里活下来」。",
    elisp: {
      title: "防御性编程：边界即设计",
      code: [
        ";;; 边界感是设计能力，不是「多写几个 if」",
        "",
        ";;; 有边界感的版本",
        "(defun safe-head (lst &optional default)",
        '  "安全取列表首元素。LST 为空时返回 DEFAULT。',
        '  这是设计决策，不是防御性判断的堆砌。"',
        "  (if (null lst)",
        "      default",
        "    (car lst)))",
        "",
        ";;; 完整的边界处理模式",
        "(defun process-user-input (input)",
        '  "处理用户输入——每个边界对应一种真实场景。"',
        "  (cond",
        "   ((not (stringp input))",
        "    (error \"期望字符串，得到 %S\" (type-of input)))",
        "   ((string-empty-p input)",
        "    (message \"警告：输入为空字符串\") nil)",
        "   ((> (length input) 256)",
        "    (error \"输入超过最大长度 256，实际 %d\" (length input)))",
        "   (t (string-trim input))))",
        "",
        ";;; pcase 模式匹配：让边界情况自文档化",
        "(defun classify-value (val)",
        "  (pcase val",
        "    ('nil          \"空值\")",
        "    ((pred numberp) (format \"数字: %d\" val))",
        "    ((pred stringp) (format \"字符串: %s\" val))",
        "    (_             \"其他类型\")))"
      ].join("\n"),
      explanation: "边界感 = 对「不理想世界」的建模能力。pcase 的每个分支都是一种边界场景的显式声明，让边界处理成为可读的设计文档，而非隐藏在代码角落的 if。"
    }
  },
  {
    id: 7,
    title: "追求可读性",
    icon: "📖",
    before: "代码能运行就行，一行写完很牛，越短越高级，自己看得懂就够了。",
    after: "代码首先是写给人看的，其次才是给机器执行。命名清晰，函数职责单一。",
    description: "可读性不是形式主义，这是维护能力的开始。",
    elisp: {
      title: "自文档化代码：命名即注释",
      code: [
        ";;; 不可读的版本（能跑，但伤眼）",
        "(defun proc (x y z)",
        "  (if (> x 0) (+ (* x y) z) (- z (* x y))))",
        "",
        ";;; 可读的版本：命名传达意图",
        "(defun calculate-adjusted-score (base-score multiplier offset)",
        '  "计算调整后的分数。',
        "  BASE-SCORE 为正：base-score × multiplier + offset",
        '  BASE-SCORE 非正：offset - base-score × multiplier"',
        "  (if (> base-score 0)",
        "      (+ (* base-score multiplier) offset)",
        "    (- offset (* base-score multiplier))))",
        "",
        ";;; 单一职责原则：每个函数只做一件事",
        "(defun validate-string-list (data)",
        '  "验证 DATA 是否为字符串列表。"',
        "  (and (listp data) (seq-every-p #'stringp data)))",
        "",
        "(defun normalize-string-list (data)",
        '  "将字符串列表统一转为大写。"',
        "  (mapcar #'upcase data))",
        "",
        "(defun save-lines-to-file (lines filename)",
        '  "将 LINES 写入 FILENAME，每行一条。"',
        "  (with-temp-file filename",
        "    (insert (mapconcat #'identity lines \"\\n\"))))",
        "",
        ";; 组合：清晰的数据流",
        "(defun process-and-save (data filename)",
        "  (when (validate-string-list data)",
        "    (save-lines-to-file (normalize-string-list data) filename)))"
      ].join("\n"),
      explanation: "可读性 = 让「下一个读代码的人」（包括三个月后的自己）能快速理解意图。docstring 是 Elisp 的一等公民，函数拆分让每一步都可独立测试和复用。"
    }
  },
  {
    id: 8,
    title: "理解「为什么」，不只记「怎么写」",
    icon: "💡",
    before: "这个场景要用类，那个场景要用装饰器。记住结论，不问原因。",
    after: "为什么要这样做？这个方案解决了什么问题？代价是什么？有没有更简单的做法？",
    description: "不迷信高级写法，更在意：是否清晰、是否必要、是否稳定、是否适合当前问题。",
    elisp: {
      title: "宏 vs 函数：理解本质差异",
      code: [
        ";;; 问题：为什么 Lisp 有宏？函数不够用吗？",
        ";;; 理解原因，才能用对工具。",
        "",
        ";;; 函数：参数在传入前已被求值",
        "(defun my-and-fn (a b)",
        '  "函数版 and：b 总会被求值，即使 a 已经是 nil。"',
        "  (if a b nil))",
        "",
        ";; 问题：(my-and-fn nil (/ 1 0)) → 会报错！",
        ";; 因为 (/ 1 0) 在传参时已被求值",
        "",
        ";;; 宏：控制求值时机（这才是宏存在的根本原因）",
        "(defmacro my-and-macro (a b)",
        '  "宏版 and：a 为 nil 时，b 根本不被求值。"',
        "  `(if ,a ,b nil))",
        "",
        ";; (my-and-macro nil (/ 1 0)) → nil，安全！",
        ";; 因为宏展开后，(/ 1 0) 在 else 分支，不会执行",
        "",
        ";;; 理解之后的判断标准：",
        ";;; 用函数：当你只需要「数据转换」时",
        ";;; 用宏：当你需要「控制求值时机」时",
        "",
        ";;; 用 macroexpand 理解宏展开",
        "(macroexpand '(when condition body1 body2))",
        ";; 展开为：(if condition (progn body1 body2))"
      ].join("\n"),
      explanation: "理解「为什么有宏」比「会写宏」重要得多。宏的本质是延迟求值，理解了这一点，你就知道什么时候用宏、什么时候不需要宏。这是「理解原因」而非「记忆规则」。"
    }
  },
  {
    id: 9,
    title: "主动验证，不只凭感觉",
    icon: "✅",
    before: "我觉得这段逻辑应该没问题，我看起来像对的，跑了几个例子好像行。",
    after: "给正常输入测一下，给空输入测一下，给边界输入测一下，给异常输入测一下。",
    description: "从「写代码的人」变成「证明代码正确的人」。这是非常大的转变。",
    elisp: {
      title: "ERT 单元测试：用代码证明正确",
      code: [
        ";;; ERT (Emacs Lisp Regression Testing)",
        ";;; 用测试代码证明你的代码正确，而不是「凭感觉」",
        "(require 'ert)",
        "",
        ";; 被测函数",
        "(defun safe-divide (a b)",
        '  "安全除法，除数为零时返回 nil。"',
        "  (when (not (zerop b))",
        "    (/ (float a) b)))",
        "",
        ";;; 系统性测试：覆盖所有关键路径",
        "(ert-deftest test-safe-divide-normal ()",
        '  "正常路径：结果应该正确。"',
        "  (should (= (safe-divide 10 2) 5.0))",
        "  (should (= (safe-divide 9 3) 3.0)))",
        "",
        "(ert-deftest test-safe-divide-zero-divisor ()",
        '  "边界：除数为零，应返回 nil 而非报错。"',
        "  (should (null (safe-divide 10 0)))",
        "  (should (null (safe-divide 0 0))))",
        "",
        "(ert-deftest test-safe-divide-negative ()",
        '  "负数路径：确保符号处理正确。"',
        "  (should (= (safe-divide -10 2) -5.0))",
        "  (should (= (safe-divide 10 -2) -5.0)))",
        "",
        ";; 运行：M-x ert RET t RET",
        ";; 测试即文档：每个 ert-deftest 描述一种预期行为"
      ].join("\n"),
      explanation: "ERT 是 Emacs 内置的测试框架。每个 ert-deftest 对应一个验证维度：正常 / 边界 / 异常 / 特殊值。测试本身就是「对代码行为的精确描述」，是可执行的规格说明。"
    }
  },
  {
    id: 10,
    title: "形成编程直觉",
    icon: "⚡",
    before: "每次遇到问题都从零开始，依赖完整答案，不知道该从哪里下手。",
    after: "这段逻辑太长了应该拆；这里数据结构不对后面一定难写；这个bug多半是状态没同步。",
    description: "编程直觉不是玄学，而是模式积累到一定程度后的快速判断。",
    elisp: {
      title: "模式识别：直觉的代码化",
      code: [
        ";;; 直觉1：看到重复，想到抽象",
        "(defun make-greeter (greeting)",
        '  "工厂模式：生成问候函数。直觉：这是个生产者。"',
        "  (lambda (name) (format \"%s, %s!\" greeting name)))",
        "",
        "(let ((hello   (make-greeter \"Hello\"))",
        "      (bonjour (make-greeter \"Bonjour\")))",
        "  (funcall hello \"Alice\")    ; \"Hello, Alice!\"",
        "  (funcall bonjour \"Bob\"))   ; \"Bonjour, Bob!\"",
        "",
        ";;; 直觉2：看到状态变化，想到闭包",
        "(defun make-counter (&optional start)",
        '  "闭包封装状态。直觉：状态要封起来。"',
        "  (let ((count (or start 0)))",
        "    (lambda (msg)",
        "      (pcase msg",
        "        ('increment (setq count (1+ count)) count)",
        "        ('reset     (setq count 0) count)",
        "        ('value     count)))))",
        "",
        "(let ((c (make-counter 10)))",
        "  (funcall c 'increment)  ; 11",
        "  (funcall c 'increment)  ; 12",
        "  (funcall c 'value))     ; 12",
        "",
        ";;; 直觉3：看到深层嵌套，想到管道（thread-last）",
        "(thread-last \"hello world hello\"",
        "  (split-string)",
        "  (mapcar #'upcase)",
        "  (seq-sort #'string<)",
        "  (seq-uniq))",
        ";; => (\"HELLO\" \"WORLD\")"
      ].join("\n"),
      explanation: "直觉是「模式识别的自动化」。thread-last（Emacs 28+）是管道操作符，让数据变换的方向和顺序一目了然——这是「看到嵌套就用管道重写」的直觉体现。"
    }
  }
];

export const elispExamples: ElispExample[] = [
  {
    id: "e1",
    category: "函数式核心",
    title: "mapcar / seq-filter / seq-reduce",
    description: "Lisp 三大变换原语，对应「对每个元素做什么 / 保留哪些 / 聚合成什么」",
    code: [
      "(let ((nums '(1 2 3 4 5 6 7 8 9 10)))",
      "  ;; 1. 变换：每个元素乘以2",
      "  (mapcar (lambda (x) (* x 2)) nums)",
      "  ;; => (2 4 6 8 10 12 14 16 18 20)",
      "",
      "  ;; 2. 过滤：只保留偶数",
      "  (seq-filter #'evenp nums)",
      "  ;; => (2 4 6 8 10)",
      "",
      "  ;; 3. 聚合：求和",
      "  (seq-reduce #'+ nums 0)",
      "  ;; => 55",
      "",
      "  ;; 4. 组合：先过滤偶数，再求平方和",
      "  (seq-reduce #'+",
      "    (mapcar (lambda (x) (* x x))",
      "            (seq-filter #'evenp nums))",
      "    0))",
      ";; => 220  (4+16+36+64+100)"
    ].join("\n"),
    insight: "mapcar + filter + reduce 是数据处理的「原子操作」，任何集合变换都能用这三种组合表达。这是函数式思维的核心模式。",
    tags: ["函数式", "集合操作", "组合"]
  },
  {
    id: "e2",
    category: "闭包与状态",
    title: "let 作用域与词法闭包",
    description: "理解 let 的作用域是理解 Lisp 状态管理的基础",
    code: [
      ";;; 词法作用域：闭包捕获定义时的环境",
      "(defun make-adder (n)",
      '  "返回一个「加N」的函数。"',
      "  (lambda (x) (+ x n)))  ; n 被闭包捕获",
      "",
      "(let ((add5  (make-adder 5))",
      "      (add10 (make-adder 10)))",
      "  (funcall add5 3)   ; => 8",
      "  (funcall add10 3)) ; => 13",
      "",
      ";;; let* 顺序绑定：后面能引用前面",
      "(let* ((x 10)",
      "       (y (* x 2))   ; 可以用 x",
      "       (z (+ x y)))  ; 可以用 x 和 y",
      "  (list x y z))",
      ";; => (10 20 30)",
      "",
      ";;; 闭包作为私有状态",
      "(let ((secret 42))",
      "  (defun get-secret () secret)",
      "  (defun set-secret! (v) (setq secret v)))",
      "",
      "(get-secret)       ; => 42",
      "(set-secret! 100)",
      "(get-secret)       ; => 100"
    ].join("\n"),
    insight: "闭包 = 函数 + 其定义时的环境. Lisp 的 let 不只是「声明变量」，而是创建了一个作用域边界，这是模块化的最小单元。",
    tags: ["闭包", "作用域", "状态"]
  },
  {
    id: "e3",
    category: "宏与元编程",
    title: "defmacro 与代码即数据",
    description: "宏让你扩展语言本身，体现「代码即数据」的 Lisp 哲学",
    code: [
      ";;; 宏：在编译期重写代码",
      ";;; 用 macroexpand 理解宏展开",
      "(macroexpand '(when condition body1 body2))",
      ";; 展开为：(if condition (progn body1 body2))",
      "",
      ";;; 宏的核心：控制求值时机",
      "(defmacro my-and (a b)",
      '  "a 为 nil 时，b 根本不被求值。"',
      "  `(if ,a ,b nil))",
      "",
      ";; 函数做不到这一点：",
      ";; (my-and nil (/ 1 0)) => nil  安全！",
      ";; (and-fn nil (/ 1 0)) => 报错！因为参数已求值",
      "",
      ";;; 准引用语法说明",
      ";; ` 表示「这是模板」",
      ";; , 表示「这里插入值」",
      ";; ,@ 表示「这里展开列表」",
      "",
      ";;; 实用宏示例：带日志的 let",
      "(defmacro let-trace (bindings &rest body)",
      '  "绑定变量时打印每个值，便于调试。"',
      "  (let ((traced",
      "         (mapcar (lambda (b)",
      "                   `(,(car b) (let ((v ,(cadr b)))",
      "                               (message \"%s = %S\" ',(car b) v)",
      "                               v)))",
      "                 bindings)))",
      "    `(let* ,traced ,@body)))",
      "",
      ";; (let-trace ((x (+ 1 2)) (y (* x 3))) y)",
      ";; 会打印：x = 3, y = 9，然后返回 9"
    ].join("\n"),
    insight: "宏是「写代码的代码」。理解宏的关键是：宏操作的是代码的「结构」（列表），而不是代码的「值」。macroexpand 是学习宏的最佳工具。",
    tags: ["宏", "元编程", "代码即数据"]
  },
  {
    id: "e4",
    category: "实用工具",
    title: "字符串处理与正则",
    description: "实际项目中最常用的文本处理模式",
    code: [
      ";;; 字符串操作核心 API",
      "(let ((str \"  Hello, Emacs World!  \"))",
      "  (string-trim str))",
      ";; => \"Hello, Emacs World!\"",
      "",
      ";; 分割与连接",
      "(split-string \"a,b,c\" \",\")      ; => (\"a\" \"b\" \"c\")",
      "(string-join '(\"a\" \"b\" \"c\") \"-\") ; => \"a-b-c\"",
      "",
      ";; 格式化",
      "(format \"名字: %s, 年龄: %d\" \"Alice\" 30)",
      ";; => \"名字: Alice, 年龄: 30\"",
      "",
      ";;; 正则表达式",
      "(let ((text \"用户ID: 12345，邮箱: user@example.com\"))",
      "  ;; 匹配检测",
      "  (string-match \"\\\\([0-9]+\\\\)\" text)  ; => 4",
      "",
      "  ;; 提取匹配组",
      "  (when (string-match \"\\\\([0-9]+\\\\)\" text)",
      "    (match-string 1 text))  ; => \"12345\"",
      "",
      "  ;; 替换",
      "  (replace-regexp-in-string \"[0-9]+\" \"X\" text))",
      ";; => \"用户ID: X，邮箱: user@example.com\"",
      "",
      ";;; 实用：解析配置行",
      "(defun parse-config-line (line)",
      '  "解析 key=value 格式的配置行。"',
      "  (when (string-match \"^\\\\([^=]+\\\\)=\\\\(.*\\\\)$\" line)",
      "    (cons (string-trim (match-string 1 line))",
      "          (string-trim (match-string 2 line)))))",
      "",
      "(parse-config-line \"  name = Alice  \")",
      ";; => (\"name\" . \"Alice\")"
    ].join("\n"),
    insight: "Emacs Lisp 的字符串核心 API：split-string、string-join、string-match、match-string、replace-regexp-in-string。掌握这五个，文本处理基本覆盖。",
    tags: ["字符串", "正则", "文本处理"]
  },
  {
    id: "e5",
    category: "列表操作",
    title: "car/cdr/cons 与列表构造",
    description: "Lisp 的心脏：理解 cons cell 才能理解一切",
    code: [
      ";;; cons cell 是 Lisp 的基本构件",
      ";;; (1 2 3) = (cons 1 (cons 2 (cons 3 nil)))",
      "(equal '(1 2 3)",
      "       (cons 1 (cons 2 (cons 3 nil))))",
      ";; => t",
      "",
      ";;; car / cdr 解构",
      "(let ((lst '(a b c d e)))",
      "  (car lst)    ; => a",
      "  (cdr lst)    ; => (b c d e)",
      "  (cadr lst)   ; => b   (car of cdr)",
      "  (caddr lst)) ; => c",
      "",
      ";;; 实用列表操作",
      "(let ((lst '(1 2 3 4 5)))",
      "  (length lst)         ; => 5",
      "  (reverse lst)        ; => (5 4 3 2 1)",
      "  (append lst '(6 7))  ; => (1 2 3 4 5 6 7)",
      "  (nth 2 lst)          ; => 3 (0-indexed)",
      "  (butlast lst 2))     ; => (1 2 3)",
      "",
      ";;; pcase 解构列表（现代 Emacs 推荐）",
      "(defun describe-list (lst)",
      "  (pcase lst",
      "    ('()             \"空列表\")",
      "    (`(,x)           (format \"单元素: %S\" x))",
      "    (`(,x ,y)        (format \"两元素: %S %S\" x y))",
      "    (`(,head . ,tail) (format \"首: %S, 余: %S\" head tail))))",
      "",
      "(describe-list '())        ; \"空列表\"",
      "(describe-list '(42))      ; \"单元素: 42\"",
      "(describe-list '(1 2 3))   ; \"首: 1, 余: (2 3)\""
    ].join("\n"),
    insight: "cons / car / cdr 是 Lisp 的「基因」。理解 cons cell 之后，你会发现列表、关联列表（alist）、甚至代码本身，都是同一种数据结构的不同用法。",
    tags: ["列表", "cons", "解构", "基础"]
  },
  {
    id: "e6",
    category: "交互与 Buffer",
    title: "Buffer 操作与 Emacs 集成",
    description: "Emacs Lisp 的杀手级特性：直接操控编辑器状态",
    code: [
      ";;; Emacs 的核心：一切皆 Buffer",
      "",
      ";;; 在当前 buffer 中操作文本",
      "(defun insert-timestamp ()",
      '  "在光标处插入当前时间戳。"',
      "  (interactive)",
      "  (insert (format-time-string \"%Y-%m-%d %H:%M:%S\")))",
      "",
      ";;; 创建临时 buffer 处理数据",
      "(defun process-in-temp-buffer (data)",
      '  "在临时 buffer 中处理，不影响当前编辑环境。"',
      "  (with-temp-buffer",
      "    (insert data)",
      "    (goto-char (point-min))",
      "    (while (search-forward \"foo\" nil t)",
      "      (replace-match \"bar\"))",
      "    (buffer-string)))",
      "",
      "(process-in-temp-buffer \"foo is foo, not foobar\")",
      ";; => \"bar is bar, not barbar\"",
      "",
      ";;; 定义交互命令（可绑定快捷键）",
      "(defun my-duplicate-line ()",
      '  "复制当前行到下一行。"',
      "  (interactive)",
      "  (let ((line (buffer-substring-no-properties",
      "               (line-beginning-position)",
      "               (line-end-position))))",
      "    (end-of-line)",
      "    (newline)",
      "    (insert line)))",
      "",
      ";; 绑定快捷键",
      "(global-set-key (kbd \"C-c d\") #'my-duplicate-line)"
    ].join("\n"),
    insight: "Emacs Lisp 的独特之处：你写的代码能直接修改你写代码的环境。with-temp-buffer 是隔离副作用的惯用法，(interactive) 让普通函数变成可绑定快捷键的命令。",
    tags: ["Buffer", "交互", "Emacs集成", "副作用"]
  }
];

export const promptModules: PromptModule[] = [
  {
    id: "problem-modeling",
    title: "问题建模器",
    icon: "🎯",
    color: "text-violet-700",
    bgColor: "bg-violet-50",
    borderColor: "border-violet-200",
    scenario: "适用于：需求分析初期、不知道从哪里下手时、感觉问题很复杂时。",
    misuse: "常见误用：直接把「我想写一个XXX」当作问题描述——这是解决方案而非问题。应先描述「现状」和「目标状态」之间的差距。",
    systemPrompt: `你是一个「编程问题建模专家」，专注于帮助用户在动手写代码之前，先把问题想清楚。

【你的任务】
接收用户的需求描述，输出一份结构化的问题模型，包含：

1. **问题本质**：用一句话描述这个问题的核心诉求（剥离掉实现细节）
2. **输入规格**：数据类型/结构，边界情况（空、null、超大），数据来源
3. **输出规格**：期望的数据类型和结构，成功/失败时各自返回什么
4. **核心约束**：性能要求、并发/幂等要求、业务规则
5. **拆解建议**：将问题分解为 3-5 个可独立实现和验证的子问题
6. **风险识别**：最可能出错的 1-2 个地方

【输出格式】
用清晰的 Markdown 结构输出，不要直接给出实现代码，重点在于「把问题想清楚」。

【行为准则】
- 如果用户描述的是解决方案，先追问「你要解决的原始问题是什么？」
- 识别出用户描述中隐含的假设，明确列出
- 用「输入→处理→输出」的框架来结构化问题`,
    placeholder: "描述你遇到的需求或问题，不需要说如何实现，只说「现状」和「想要达到什么」...",
    aiSampleInputs: [
      "我需要处理一批用户上传的 CSV 文件，提取出其中的有效数据保存到数据库",
      "做一个搜索功能，用户输入关键词，返回相关的文章列表",
      "需要一个定时任务，每天凌晨同步第三方 API 的数据到本地"
    ]
  },
  {
    id: "abstraction-refactor",
    title: "抽象优化器",
    icon: "🧩",
    color: "text-blue-700",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    scenario: "适用于：代码中出现大量重复逻辑时、感觉代码越来越难改时、不知道如何复用时。",
    misuse: "常见误用：过度抽象（Premature Abstraction）——在只有两处使用时就急着抽象。三次原则：重复三次再抽象。",
    systemPrompt: `你是一个「代码抽象专家」，帮助用户识别代码中的重复模式，并设计合理的抽象层级。

【分析框架】
1. **重复识别**：完全相同的代码块（提取函数）、结构相同数据不同（参数化）、逻辑相同类型不同（高阶函数）
2. **抽象层级判断**：函数级/模块级/配置级
3. **可变 vs 不变分析**：明确标出「不变的结构」和「可变的部分」
4. **抽象代价评估**：抽象后复杂度是否真的降低？是否有过度设计的风险？

【输出内容】
1. 重复模式识别报告
2. 推荐的抽象方案（附代码示例）
3. 替代方案对比（如果存在多种抽象方式）
4. 明确指出不建议抽象的部分（附原因）

【重要原则】
简单优先：能用函数解决的不推荐类。
清晰优先：抽象后的代码必须比原来更易读，否则不抽象。`,
    placeholder: "粘贴你觉得有重复或者难以维护的代码片段...",
    aiSampleInputs: [
      "我有三个函数，分别处理用户、订单、商品的校验，逻辑几乎一样",
      "我的 API 请求代码在多个地方重复，每次都要手写错误处理",
      "我有很多 if/else 判断不同类型，感觉可以用某种模式替代"
    ]
  },
  {
    id: "bug-diagnosis",
    title: "Bug 诊断器",
    icon: "🔍",
    color: "text-red-700",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    scenario: "适用于：遇到奇怪 bug 时、错误信息看不懂时、改了一处又冒出新问题时。",
    misuse: "常见误用：直接把报错信息扔给 AI 而不提供上下文。好的 Bug 报告应包含：复现步骤、期望行为、实际行为、相关代码、已尝试过的方案。",
    systemPrompt: `你是一个「系统性 Bug 诊断专家」，帮助用户建立从现象到根因的清晰推理链，而不是随机试错。

【诊断框架：5层定位法】
- **第1层 复现确认**：必现还是偶现？触发条件是什么？
- **第2层 边界定位**：Bug 在哪一层出现？输入数据是否符合预期？
- **第3层 错误传播链**：错误是在当前层产生，还是从上层传入？找到「第一个出错」的位置
- **第4层 状态追踪**：出错时关键变量的状态是什么？是否有共享状态被意外修改？
- **第5层 根因分析**：为什么在这个位置出错？修复方案是治标还是治本？

【你的输出】
1. 最可能的 3 个根因假设（按概率排序）
2. 为每个假设提供「验证方法」（如何快速确认或排除）
3. 给出诊断路径的下一步行动

【重要原则】不要直接给出修复代码，先帮用户「定位」。修复很容易，定位是关键。`,
    placeholder: "描述 bug 的现象、触发条件、报错信息，以及你已经尝试过的排查方向...",
    aiSampleInputs: [
      "函数在大多数情况下正常，但偶尔返回 undefined，无法稳定复现",
      "接口请求有时成功有时失败，但参数完全一样，日志里没有明显报错",
      "改了A模块之后，B模块突然出问题，但A和B看起来没有关系"
    ]
  },
  {
    id: "data-structure",
    title: "数据结构顾问",
    icon: "🗂️",
    color: "text-emerald-700",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    scenario: "适用于：设计数据模型时、感觉查询逻辑越来越绕时、性能优化时、想重构数据层时。",
    misuse: "常见误用：把「如何存储」和「如何查询」分开考虑——数据结构应该由最常见的查询模式决定，不是由数据的「自然形态」决定。",
    systemPrompt: `你是一个「数据结构与建模专家」，帮助用户为特定场景选择最合适的数据结构。

【核心原则】数据结构由「查询模式」决定，而非「数据形态」。

【分析框架】
1. **操作频率分析**：最频繁的操作是什么？（查找/插入/删除/遍历）每种操作的可接受时间复杂度？数据量级（百/万/亿）
2. **数据特征分析**：是否有唯一键？是否有顺序要求？是否有层级关系？是否需要范围查询？
3. **内存 vs 速度权衡**：是否内存受限？读多写少还是写多读少？
4. **常见场景的推荐**：去重→Set，键值映射→HashMap，频率统计→HashMap+排序，优先级→Heap，父子关系→树/邻接表

【输出格式】
1. 推荐数据结构（说明理由）
2. 时间/空间复杂度分析
3. 代码示例（展示核心操作）
4. 如果有多种选择，给出对比表
5. 指出当前设计的潜在瓶颈`,
    placeholder: "描述你需要存储和操作的数据，以及最常见的查询/操作模式...",
    aiSampleInputs: [
      "需要频繁按用户ID查找用户信息，同时支持按注册时间排序",
      "实时统计每个商品的浏览次数，并能快速获取浏览量 Top 10",
      "存储组织架构，需要查询某个节点的所有子节点和父节点路径"
    ]
  },
  {
    id: "code-review",
    title: "可读性审查",
    icon: "📖",
    color: "text-amber-700",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    scenario: "适用于：代码 Review 前的自检、重构前的评估、新人接手代码前的文档化。",
    misuse: "常见误用：把「可读性」等同于「加注释」——好的代码首先靠命名和结构自文档化，注释是对「为什么」的补充，而非对「做什么」的翻译。",
    systemPrompt: `你是一个「代码可读性专家」，从「下一个读代码的人」的视角审查代码。

【审查维度（CLEAN 框架）】
- **C - Clarity**（清晰性）：变量/函数命名是否准确表达意图？是否有神秘数字？条件判断是否可语义化？
- **L - Length**（长度控制）：函数是否超过 30 行？嵌套层级是否超过 3 层？参数列表是否超过 4 个？
- **E - Explicitness**（显式性）：副作用是否明确标出？函数是否有清晰的输入/输出契约？
- **A - Abstraction**（抽象一致性）：同一函数内是否混合了不同抽象层级？
- **N - Necessity**（必要性）：是否有死代码？注释是否在解释「做什么」而非「为什么」？

【输出格式】
1. 整体可读性评分（1-10）及一句话总结
2. 按 CLEAN 维度列出具体问题（附代码片段）
3. 给出改进后的代码示例
4. 3 个最优先改进项

【重要原则】不追求完美代码，追求「下一个人能快速理解的代码」。`,
    placeholder: "粘贴你想要审查可读性的代码...",
    aiSampleInputs: [
      "一段处理业务逻辑的函数，我觉得有点绕但说不清楚哪里有问题",
      "一个写了很久的模块，现在新同事看不懂，需要找出关键的可读性问题",
      "准备做代码 Review，想先自检一遍"
    ]
  },
  {
    id: "boundary-design",
    title: "边界条件设计师",
    icon: "🛡️",
    color: "text-cyan-700",
    bgColor: "bg-cyan-50",
    borderColor: "border-cyan-200",
    scenario: "适用于：写完「happy path」后的健壮性加固、生产事故复盘后的防御设计、API 接口设计时。",
    misuse: "常见误用：把所有边界都用 try-catch 包住——边界处理应该是「设计决策」，不是「防御性堆砌」。要明确每个边界：是静默处理、报错、返回默认值、还是上抛异常？",
    systemPrompt: `你是一个「边界条件设计专家」，帮助用户系统性地识别和处理边界情况。

【边界分类框架（SPINE 模型）】
- **S - Size**（大小边界）：空集合/空字符串/零值，单元素，超大数据量，最大/最小数值
- **P - Permission**（权限边界）：未授权访问，权限不足，Token 过期
- **I - Input**（输入边界）：null/undefined，错误类型，格式错误，超长输入（SQL注入/XSS）
- **N - Network**（网络边界）：请求超时，服务不可用，响应体格式与预期不符，重复请求/幂等性
- **E - Edge Case**（逻辑边界）：并发修改同一资源，状态机的非法状态转换，循环引用，浮点精度

【输出内容】
1. 用 SPINE 模型列出所有边界情况
2. 为每个边界给出「处理策略」（报错/返回默认/重试/忽略）及理由
3. 给出边界处理的代码示例
4. 优先级排序（哪些边界最可能导致生产问题）

【核心原则】边界处理 = 对「不理想世界」的显式建模。每个边界的处理策略都是设计决策，需要明确的理由。`,
    placeholder: "描述你的功能或接口，说明数据来源和使用场景，我来帮你识别可能的边界情况...",
    aiSampleInputs: [
      "一个用户注册接口，需要验证邮箱格式、用户名唯一性、密码强度",
      "一个文件上传功能，支持图片和 PDF，需要处理各种异常情况",
      "一个定时从第三方 API 同步数据的任务，需要保证数据一致性"
    ]
  }
];
