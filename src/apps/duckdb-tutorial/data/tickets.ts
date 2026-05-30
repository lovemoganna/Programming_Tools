export interface DuckdbTicket {
  id: string;
  level: string;
  title: string;
  emoji: string;
  desc: string;
  concepts: string[];
  defaultSQL: string;
  knowledge: string;
  quiz: {
    q: string;
    options: string[];
    answer: number;
    explain: string;
  };
}

export const DUCKDB_TICKETS: DuckdbTicket[] = [
  // ────── T-01 ──────
  {
    id: 'T-01', level: 'L1', title: 'SELECT 与字面量',
    emoji: '🎯',
    desc: '一切始于 <code>SELECT</code>。DuckDB 可以直接计算表达式、不需要任何表。这是最原子的查询单元——将 SQL 当计算器。',
    concepts: ['SELECT', '字面量', '表达式', '列别名'],
    defaultSQL: `-- 🦆 DuckDB 最基础查询：SELECT + 字面量
-- 不需要表！直接计算表达式
SELECT
  42                        AS 整数,
  3.14                      AS 浮点数,
  'Hello, DuckDB!'          AS 字符串,
  TRUE                      AS 布尔值,
  2 + 3 * 4                 AS 算术表达式,
  ROUND(3.14159, 2)         AS 取整函数,
  CURRENT_DATE              AS 今日日期;`,
    knowledge: `
      <strong>为什么 DuckDB 不需要 FROM 子句？</strong><br>
      DuckDB 遵循标准 SQL 扩展：<code>SELECT</code> 本身就能求值表达式。
      内部实现是一个「虚拟单行表」（1-row virtual scan），
      引擎直接在 <strong>向量化执行引擎</strong>（vectorized execution engine）中完成计算。<br><br>
      <strong>列别名</strong> 用 <code>AS 名称</code> 给结果列命名，提升可读性。
      DuckDB 支持中文列名，底层以 UTF-8 存储。
    `,
    quiz: {
      q: '在 DuckDB 中，以下哪条语句是合法的？',
      options: [
        'SELECT 1 + 1 FROM dual',
        'SELECT 1 + 1',
        'COMPUTE 1 + 1',
        'PRINT 1 + 1',
      ],
      answer: 1,
      explain: 'DuckDB 支持无 FROM 的 SELECT，直接对字面量 and 表达式求值。'
    }
  },

  // ────── T-02 ──────
  {
    id: 'T-02', level: 'L1', title: '数据类型探索',
    emoji: '🔬',
    desc: 'DuckDB 拥有丰富的数据类型系统。理解类型是构建健壮 schema 的基础。本节用 <code>typeof()</code> 函数实时探索每种类型。',
    concepts: ['INTEGER', 'VARCHAR', 'BOOLEAN', 'DATE', 'DOUBLE', 'INTERVAL'],
    defaultSQL: `-- 🦆 探索 DuckDB 的数据类型系统
SELECT
  typeof(42)                AS 整数类型,
  typeof(9999999999)        AS 大整数类型,
  typeof(3.14)              AS 浮点类型,
  typeof('duck')            AS 字符串类型,
  typeof(TRUE)              AS 布尔类型,
  typeof(DATE '2024-01-01') AS 日期类型,
  typeof(INTERVAL '3 days') AS 区间类型,
  typeof([1, 2, 3])         AS 列表类型,
  typeof({'k': 'v'})        AS 结构体类型;`,
    knowledge: `
      <strong>DuckDB 的类型推断</strong>：字面量 <code>42</code> 默认推断为 <code>INTEGER</code>，
      <code>9999999999</code> 超出 INT 范围，自动升级为 <code>BIGINT</code>。<br><br>
      <strong>特色类型</strong>：
      <code>LIST</code>（变长数组）和 <code>STRUCT</code>（嵌套结构体）是 DuckDB
      面向 <strong>OLAP 分析</strong> 的特色类型，可存储复杂嵌套数据而无需多表 JOIN。<br><br>
      <code>typeof()</code> 是调试利器，等价于其他数据库的 <code>pg_typeof()</code>。
    `,
    quiz: {
      q: "在 DuckDB 中，typeof(3.14) 返回什么？",
      options: ['INTEGER', 'FLOAT', 'DOUBLE', 'DECIMAL'],
      answer: 2,
      explain: "DuckDB 将浮点字面量 3.14 默认推断为 DOUBLE (64位浮点)，而非 FLOAT (32位)。"
    }
  },

  // ────── T-03 ──────
  {
    id: 'T-03', level: 'L1', title: 'CREATE TABLE & INSERT',
    emoji: '🏗️',
    desc: '从零开始建表并插入数据。这是 <strong>DDL</strong>（数据定义语言）与 <strong>DML</strong>（数据操纵语言）的最小组合单元。',
    concepts: ['CREATE TABLE', 'INSERT INTO', 'SELECT *', 'DDL', 'DML'],
    defaultSQL: `-- 🦆 DDL: 定义表结构（蓝图）
CREATE TABLE IF NOT EXISTS products (
  id      INTEGER PRIMARY KEY,
  name    VARCHAR NOT NULL,
  price   DOUBLE,
  in_stock BOOLEAN DEFAULT TRUE
);

-- DML: 插入数据（填充数据）
INSERT INTO products VALUES
  (1, '橡皮鸭', 29.9, TRUE),
  (2, '羽绒被', 399.0, TRUE),
  (3, '鸭绒枕', 199.5, FALSE),
  (4, '小黄鸭玩具', 59.0, TRUE);

-- 查询验证
SELECT * FROM products;`,
    knowledge: `
      <strong>CREATE TABLE</strong> 定义表的 Schema（列名 + 类型 + 约束）。
      <code>IF NOT EXISTS</code> 防止重复创建报错，适合幂等执行。<br><br>
      <strong>INSERT INTO ... VALUES</strong> 是行式写入。DuckDB 在内部将数据以
      <strong>列式（columnar）</strong> 格式存储，即使你按行插入。<br><br>
      <strong>PRIMARY KEY</strong> 约束保证唯一性，<code>NOT NULL</code> 约束防止空值，
      <code>DEFAULT</code> 提供默认值 —— 三者构成数据完整性的基础防线。
    `,
    quiz: {
      q: "DuckDB 的底层存储格式是？",
      options: ['行式存储（Row-based）', '列式存储（Columnar）', 'JSON 文档存储', '图存储'],
      answer: 1,
      explain: "DuckDB 是列式存储的 OLAP 数据库，即使按行 INSERT，数据也以列式格式组织，使聚合查询极快。"
    }
  },

  // ────── T-04 ──────
  {
    id: 'T-04', level: 'L1', title: 'WHERE 过滤条件',
    emoji: '🔍',
    desc: '<code>WHERE</code> 子句是数据过滤的核心原子。掌握比较运算符、逻辑运算符与 NULL 处理，是一切查询的基础。',
    concepts: ['WHERE', 'AND/OR/NOT', 'BETWEEN', 'IN', 'LIKE', 'IS NULL'],
    defaultSQL: `-- 🦆 WHERE 过滤：各类条件运算
-- 先确保数据存在（幂等创建）
CREATE TABLE IF NOT EXISTS products (
  id INTEGER, name VARCHAR, price DOUBLE, in_stock BOOLEAN
);

INSERT OR IGNORE INTO products VALUES
  (1,'橡皮鸭',29.9,TRUE),(2,'羽绒被',399.0,TRUE),
  (3,'鸭绒枕',199.5,FALSE),(4,'小黄鸭玩具',59.0,TRUE),
  (5,'鹅毛扇',NULL,TRUE),(6,'鸭蛋青花瓷',888.0,FALSE);

-- 条件1：价格在 50~500 之间 AND 有货
SELECT name, price FROM products
WHERE price BETWEEN 50 AND 500
  AND in_stock = TRUE;`,
    knowledge: `
      <strong>运算符优先级</strong>：<code>NOT > AND > OR</code>，务必用括号明确意图。<br><br>
      <strong>NULL 的特殊性</strong>：<code>NULL</code> 不等于任何值，包括自身。
      判断 NULL 必须用 <code>IS NULL</code> 或 <code>IS NOT NULL</code>，
      不能用 <code>= NULL</code>（结果永远是 NULL，即 UNKNOWN）。<br><br>
      <strong>BETWEEN a AND b</strong> 等价于 <code>>= a AND <= b</code>，两端均包含。<br>
      <strong>LIKE</strong> 中 <code>%</code> 匹配任意长度，<code>_</code> 匹配单字符。<br>
      试试修改 WHERE 条件，观察不同结果！
    `,
    quiz: {
      q: "SELECT * FROM t WHERE price = NULL 会返回什么？",
      options: ['price 为 NULL 的所有行', '空结果集', '报错', 'price 不为 NULL 的行'],
      answer: 1,
      explain: "NULL = NULL 的结果是 UNKNOWN（不是 TRUE），WHERE 只保留条件为 TRUE 的行，所以返回空集。应使用 IS NULL。"
    }
  },

  // ────── T-05 ──────
  {
    id: 'T-05', level: 'L2', title: '聚合函数 COUNT/SUM/AVG',
    emoji: '📊',
    desc: '聚合函数将多行压缩为单个值——这是 OLAP 分析的核心能力。DuckDB 在向量化引擎上执行聚合，速度极快。',
    concepts: ['COUNT', 'SUM', 'AVG', 'MIN', 'MAX', 'COUNT DISTINCT'],
    defaultSQL: `-- 🦆 聚合函数：多行 → 单值
CREATE TABLE IF NOT EXISTS orders (
  id INTEGER, customer VARCHAR,
  amount DOUBLE, category VARCHAR
);
INSERT OR IGNORE INTO orders VALUES
  (1,'Alice',120.0,'电子'),(2,'Bob',340.5,'服装'),
  (3,'Alice',88.0,'食品'),(4,'Charlie',560.0,'电子'),
  (5,'Bob',200.0,'电子'),(6,'Alice',NULL,'服装'),
  (7,'Dave',430.0,'食品'),(8,'Charlie',150.0,'服装');

SELECT
  COUNT(*)              AS 总行数,
  COUNT(amount)         AS 非NULL行数,
  COUNT(DISTINCT customer) AS 不同客户数,
  SUM(amount)           AS 总销售额,
  AVG(amount)           AS 平均客单价,
  MIN(amount)           AS 最小金额,
  MAX(amount)           AS 最大金额,
  ROUND(STDDEV(amount),2) AS 标准差;`,
    knowledge: `
      <strong>COUNT(*) vs COUNT(列)</strong>：<code>COUNT(*)</code> 统计所有行（含 NULL），
      <code>COUNT(amount)</code> 只统计非 NULL 的 amount 值。<br><br>
      <strong>COUNT DISTINCT</strong> 精确去重计数。DuckDB 内部使用
      <strong>HyperLogLog</strong> 算法进行近似去重（<code>approx_count_distinct()</code>），
      百亿行数据也能毫秒级响应。<br><br>
      <strong>NULL 被聚合函数忽略</strong>：SUM/AVG/MIN/MAX 全部跳过 NULL 值，
      这与 COUNT(*) 的行为形成对比。
    `,
    quiz: {
      q: "表中有 5 行，其中 2 行的 amount 为 NULL。COUNT(*) 和 COUNT(amount) 分别返回？",
      options: ['5 和 5', '3 和 3', '5 和 3', '3 和 5'],
      answer: 2,
      explain: "COUNT(*) 统计所有行=5，COUNT(amount) 忽略 NULL，只统计非 NULL 的 3 行。"
    }
  },

  // ────── T-06 ──────
  {
    id: 'T-06', level: 'L2', title: 'GROUP BY & HAVING',
    emoji: '🗂️',
    desc: '<code>GROUP BY</code> 将行分桶聚合；<code>HAVING</code> 对聚合结果过滤。两者组合是数据分组分析的核心模式。',
    concepts: ['GROUP BY', 'HAVING', '分组聚合', '执行顺序'],
    defaultSQL: `-- 🦆 GROUP BY：按 category 分组统计
CREATE TABLE IF NOT EXISTS orders (
  id INTEGER, customer VARCHAR,
  amount DOUBLE, category VARCHAR
);
INSERT OR IGNORE INTO orders VALUES
  (1,'Alice',120.0,'电子'),(2,'Bob',340.5,'服装'),
  (3,'Alice',88.0,'食品'),(4,'Charlie',560.0,'电子'),
  (5,'Bob',200.0,'电子'),(6,'Alice',75.0,'服装'),
  (7,'Dave',430.0,'食品'),(8,'Charlie',150.0,'服装');

SELECT
  category                AS 类别,
  COUNT(*)                AS 订单数,
  SUM(amount)             AS 总销售额,
  ROUND(AVG(amount), 1)   AS 均价
FROM orders
GROUP BY category
HAVING SUM(amount) > 300   -- 过滤：总销售额 > 300
ORDER BY 总销售额 DESC;`,
    knowledge: `
      <strong>SQL 执行顺序（逻辑顺序）</strong>：<br>
      <code>FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT</code><br><br>
      这意味着：<br>
      • <code>WHERE</code> 在分组<strong>前</strong>过滤原始行<br>
      • <code>HAVING</code> 在分组<strong>后</strong>过滤聚合结果<br>
      • <code>SELECT</code> 中的别名不能在 <code>HAVING</code> 里用（逻辑上还没算出来）<br><br>
      <strong>DuckDB 扩展</strong>：允许 <code>ORDER BY 列号</code>（如 <code>ORDER BY 3 DESC</code>）
      直接引用 SELECT 列位置，更简洁。
    `,
    quiz: {
      q: "WHERE 和 HAVING 的核心区别是？",
      options: [
        'HAVING 只能用于 COUNT',
        'WHERE 过滤分组后的数据，HAVING 过滤原始行',
        'WHERE 过滤原始行，HAVING 过滤聚合后的分组',
        '两者完全等价，可互换'
      ],
      answer: 2,
      explain: "WHERE 在 GROUP BY 之前执行，过滤原始行；HAVING 在 GROUP BY 之后执行，过滤聚合结果。"
    }
  },

  // ────── T-07 ──────
  {
    id: 'T-07', level: 'L2', title: 'ORDER BY & LIMIT',
    emoji: '📋',
    desc: '排序与限制是结果展示的最后一道工序。DuckDB 的 <code>ORDER BY</code> 支持多列、NULL 排序策略和表达式排序。',
    concepts: ['ORDER BY', 'LIMIT', 'OFFSET', 'NULLS FIRST/LAST', '分页'],
    defaultSQL: `-- 🦆 ORDER BY + LIMIT：排序与分页
CREATE TABLE IF NOT EXISTS students (
  name VARCHAR, score DOUBLE, grade VARCHAR
);
INSERT OR IGNORE INTO students VALUES
  ('小明',92.5,'A'),('小红',NULL,'B'),('小刚',78.0,'B'),
  ('小美',92.5,'A'),('小李',65.0,'C'),('小华',88.5,'A'),
  ('小强',55.0,'C'),('小雪',95.0,'A');

-- 多列排序 + NULL 控制 + 分页
SELECT
  name, score, grade,
  RANK() OVER (ORDER BY score DESC NULLS LAST) AS 排名
FROM students
ORDER BY score DESC NULLS LAST, name ASC
LIMIT 5 OFFSET 0;  -- 第1页，每页5条`,
    knowledge: `
      <strong>NULL 排序策略</strong>：<code>NULLS FIRST</code> 将 NULL 排最前，
      <code>NULLS LAST</code> 排最后。DuckDB 默认降序时 NULL 排最后，
      升序时 NULL 排最前（与 PostgreSQL 一致）。<br><br>
      <strong>分页公式</strong>：<code>OFFSET = (页码-1) × 每页条数</code><br>
      第2页：<code>LIMIT 5 OFFSET 5</code><br><br>
      <strong>RANK() OVER()</strong>：这里偷偷引入了窗口函数预览——
      它为每行计算排名，不压缩行数，T-11 将详解。
    `,
    quiz: {
      q: "ORDER BY score DESC 时，NULL 值默认排在哪里？",
      options: ['最前面', '最后面', '随机位置', '会报错'],
      answer: 1,
      explain: "DuckDB（遵循 PostgreSQL 规范）在 DESC 排序时，NULL 默认 NULLS LAST（排最后）；ASC 时默认 NULLS FIRST（排最前）。"
    }
  },

  // ────── T-08 ──────
  {
    id: 'T-08', level: 'L3', title: 'JOIN 多表关联',
    emoji: '🔗',
    desc: '多表 JOIN 是关系型数据库的核心。掌握 INNER/LEFT/RIGHT/FULL JOIN 四种连接，理解其集合语义。',
    concepts: ['INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'FULL JOIN', '连接键'],
    defaultSQL: `-- 🦆 JOIN：组合两张表
CREATE TABLE IF NOT EXISTS depts (
  id INTEGER, dept_name VARCHAR
);
CREATE TABLE IF NOT EXISTS employees (
  id INTEGER, name VARCHAR, dept_id INTEGER, salary DOUBLE
);
INSERT OR IGNORE INTO depts VALUES
  (1,'工程部'),(2,'市场部'),(3,'财务部');
INSERT OR IGNORE INTO employees VALUES
  (1,'Alice',1,15000),(2,'Bob',1,18000),
  (3,'Carol',2,12000),(4,'Dave',NULL,9000),
  (5,'Eve',4,11000); -- dept_id=4 不存在！

-- LEFT JOIN：保留所有员工，即使无对应部门
SELECT
  e.name       AS 员工,
  d.dept_name  AS 部门,
  e.salary     AS 薪资
FROM employees e
LEFT JOIN depts d ON e.dept_id = d.id
ORDER BY e.id;`,
    knowledge: `
      <strong>JOIN 类型的集合语义</strong>：<br>
      • <code>INNER JOIN</code>：交集（两表都匹配才保留）<br>
      • <code>LEFT JOIN</code>：左表全保留，右表无匹配填 NULL<br>
      • <code>RIGHT JOIN</code>：右表全保留，左表无匹配填 NULL<br>
      • <code>FULL JOIN</code>：并集（两边都保留，无匹配填 NULL）<br><br>
      <strong>实验</strong>：将 <code>LEFT JOIN</code> 改为 <code>INNER JOIN</code>，
      观察 Dave（dept_id=NULL）和 Eve（dept_id=4 不存在）如何消失。<br><br>
      DuckDB 的 <strong>Hash Join</strong> 实现：将小表 build 成哈希表，
      大表 probe——经典的 build-probe 模式。
    `,
    quiz: {
      q: "INNER JOIN 和 LEFT JOIN 的关键区别是？",
      options: [
        'INNER JOIN 更快',
        'LEFT JOIN 保留左表所有行，无匹配时右表列为 NULL',
        'INNER JOIN 保留两表所有行',
        'LEFT JOIN 只返回左表数据'
      ],
      answer: 1,
      explain: "LEFT JOIN 保留左表（FROM 后的表）的所有行；若右表无匹配，则右表的列填充 NULL。INNER JOIN 只保留两边都有匹配的行。"
    }
  },

  // ────── T-09 ──────
  {
    id: 'T-09', level: 'L3', title: '子查询 Subquery',
    emoji: '🪆',
    desc: '子查询将一个 SELECT 嵌套在另一个查询中，像俄罗斯套娃。掌握标量子查询、IN 子查询与派生表三种形式。',
    concepts: ['标量子查询', 'IN 子查询', '派生表', 'EXISTS', '相关子查询'],
    defaultSQL: `-- 🦆 三种子查询形式
CREATE TABLE IF NOT EXISTS employees (
  id INTEGER, name VARCHAR, dept_id INTEGER, salary DOUBLE
);
INSERT OR IGNORE INTO employees VALUES
  (1,'Alice',1,15000),(2,'Bob',1,18000),
  (3,'Carol',2,12000),(4,'Dave',1,9000),(5,'Eve',2,11000);

-- 形式1：标量子查询（返回单值）
SELECT name, salary,
  salary - (SELECT AVG(salary) FROM employees) AS 与均值差距
FROM employees
ORDER BY salary DESC;

-- 形式2：IN 子查询（返回列表）
-- SELECT name FROM employees
-- WHERE dept_id IN (SELECT id FROM depts WHERE dept_name='工程部');`,
    knowledge: `
      <strong>三种子查询形式</strong>：<br>
      • <strong>标量子查询</strong>：<code>SELECT (SELECT MAX(x) FROM t)</code>
        返回单个值，可用在任何表达式位置<br>
      • <strong>IN 子查询</strong>：<code>WHERE x IN (SELECT ...)</code>
        返回一列，DuckDB 内部转化为 Semi-Join<br>
      • <strong>派生表</strong>：<code>FROM (SELECT ...) AS t</code>
        将子查询结果作为临时表使用<br><br>
      <strong>性能建议</strong>：子查询可读性好，但复杂场景建议用 CTE（T-10）
      或重写为 JOIN，让优化器有更多优化空间。
    `,
    quiz: {
      q: "标量子查询必须满足什么条件？",
      options: [
        '必须使用 GROUP BY',
        '必须返回且只能返回一行一列',
        '必须有 ORDER BY',
        '必须有 LIMIT 1'
      ],
      answer: 1,
      explain: "标量子查询出现在表达式位置（如 SELECT 列、WHERE 条件），必须返回恰好一行一列，否则运行时报错。"
    }
  },

  // ────── T-10 ──────
  {
    id: 'T-10', level: 'L3', title: 'CTE WITH 公共表表达式',
    emoji: '🧩',
    desc: '<code>WITH ... AS</code> 定义命名子查询，让复杂查询「分层表达」，极大提升可读性和可维护性。',
    concepts: ['CTE', 'WITH', '递归CTE', '链式CTE', '可读性'],
    defaultSQL: `-- 🦆 CTE：将复杂查询分层命名
CREATE TABLE IF NOT EXISTS orders (
  id INTEGER, customer VARCHAR,
  amount DOUBLE, category VARCHAR, order_date DATE
);
INSERT OR IGNORE INTO orders VALUES
  (1,'Alice',120,'电子','2024-01-05'),
  (2,'Bob',340,'服装','2024-01-10'),
  (3,'Alice',88,'食品','2024-02-03'),
  (4,'Charlie',560,'电子','2024-02-15'),
  (5,'Bob',200,'电子','2024-03-01'),
  (6,'Alice',750,'服装','2024-03-20'),
  (7,'Dave',430,'食品','2024-04-01'),
  (8,'Charlie',150,'服装','2024-04-05');

-- 链式 CTE：逐层加工
WITH
  -- 第1层：每客户汇总
  customer_stats AS (
    SELECT customer,
      COUNT(*) AS 订单数,
      SUM(amount) AS 总消费
    FROM orders GROUP BY customer
  ),
  -- 第2层：计算平均，筛选高价值客户
  high_value AS (
    SELECT *, ROUND(总消费 / 订单数, 1) AS 均单价
    FROM customer_stats
    WHERE 总消费 > (SELECT AVG(总消费) FROM customer_stats)
  )
SELECT * FROM high_value ORDER BY 总消费 DESC;`,
    knowledge: `
      <strong>CTE vs 子查询</strong>：CTE 本质是语法糖，让你给子查询起名字、
      支持多次引用。在 DuckDB 中，优化器通常将 CTE 内联（inline）展开，
      性能与等价子查询相同。<br><br>
      <strong>链式 CTE</strong>：多个 CTE 用逗号分隔，后面的 CTE 可引用前面的，
      形成清晰的「数据流水线」。<br><br>
      <strong>递归 CTE</strong>（进阶）：加 <code>RECURSIVE</code> 关键字可以
      处理树形、图形数据，如组织架构、路径查找——DuckDB 完整支持。
    `,
    quiz: {
      q: "以下关于 CTE 的说法正确的是？",
      options: [
        'CTE 会将结果物化存入磁盘',
        'CTE 只能定义一个',
        'CTE 提升可读性，后面的 CTE 可引用前面定义的',
        'CTE 只能在 SELECT 中使用，不能在 INSERT 中'
      ],
      answer: 2,
      explain: "CTE 可以定义多个（用逗号分隔），后面的 CTE 可以引用之前定义的。DuckDB 默认将 CTE 内联优化，不强制物化。CTE 也可用于 INSERT/UPDATE/DELETE。"
    }
  },

  // ────── T-11 ──────
  {
    id: 'T-11', level: 'L4', title: '窗口函数 OVER()',
    emoji: '🪟',
    desc: '窗口函数是 SQL 最强大的特性之一。它在「窗口」范围内计算，<strong>不压缩行数</strong>——这是与 GROUP BY 的本质区别。',
    concepts: ['OVER()', 'PARTITION BY', 'ROW_NUMBER', 'RANK', 'LAG/LEAD', '滑动窗口'],
    defaultSQL: `-- 🦆 窗口函数：不折叠行的聚合
CREATE TABLE IF NOT EXISTS sales_daily (
  sale_date DATE, category VARCHAR, amount DOUBLE
);
INSERT OR IGNORE INTO sales_daily VALUES
  ('2024-01-01','电子',500),('2024-01-02','电子',620),
  ('2024-01-03','电子',480),('2024-01-04','电子',710),
  ('2024-01-01','服装',300),('2024-01-02','服装',350),
  ('2024-01-03','服装',280),('2024-01-04','服装',410);

SELECT
  sale_date, category, amount,
  -- 类内排名
  RANK() OVER (PARTITION BY category ORDER BY amount DESC) AS 类内排名,
  -- 3日滑动平均（当前行 + 前2行）
  ROUND(AVG(amount) OVER (
    PARTITION BY category
    ORDER BY sale_date
    ROWS BETWEEN 2 PRECEDING AND CURRENT ROW
  ), 1) AS 三日均值,
  -- 环比（当日 vs 前一日）
  amount - LAG(amount,1) OVER (PARTITION BY category ORDER BY sale_date) AS 环比变化
FROM sales_daily
ORDER BY category, sale_date;`,
    knowledge: `
      <strong>窗口函数 = 聚合 + 上下文</strong>：每行都能看到「周围」的数据，
      但结果集行数不变。<br><br>
      <strong>核心子句</strong>：<br>
      • <code>PARTITION BY</code>：重置窗口边界（类比 GROUP BY 但不折叠）<br>
      • <code>ORDER BY</code>：窗口内排序（影响 RANK、LAG、滑动窗口）<br>
      • <code>ROWS BETWEEN</code>：精确定义窗口帧范围<br><br>
      <strong>常用函数</strong>：<code>ROW_NUMBER</code>（无并列）、<code>RANK</code>（并列跳号）、
      <code>DENSE_RANK</code>（并列不跳号）、<code>LAG/LEAD</code>（前/后行访问）、
      <code>FIRST_VALUE/LAST_VALUE</code>（帧内首尾值）
    `,
    quiz: {
      q: "窗口函数和 GROUP BY 的最关键区别是？",
      options: [
        '窗口函数更慢',
        '窗口函数不能使用聚合',
        'GROUP BY 压缩行数，窗口函数保留原始行数',
        '窗口函数只能用于数值列'
      ],
      answer: 2,
      explain: "GROUP BY 将多行合并为一行（折叠）；窗口函数 OVER() 在每行上计算，结果集行数与原表相同，是其核心区别。"
    }
  },

  // ────── T-12 ──────
  {
    id: 'T-12', level: 'L4', title: '综合实战：销售数据分析',
    emoji: '🏆',
    desc: '将前 11 个原子技能融合：建表→插数→过滤→聚合→JOIN→CTE→窗口函数，完成一个完整的销售分析报告。',
    concepts: ['综合运用', 'CTE链', '窗口函数', 'JOIN', '业务分析'],
    defaultSQL: `-- 🏆 综合实战：完整销售分析管道
-- 建立数据模型
CREATE TABLE IF NOT EXISTS regions (rid INTEGER, rname VARCHAR);
CREATE TABLE IF NOT EXISTS products2 (pid INTEGER, pname VARCHAR, cost DOUBLE);
CREATE TABLE IF NOT EXISTS txn (
  tid INTEGER, rid INTEGER, pid INTEGER,
  qty INTEGER, price DOUBLE, txn_date DATE
);

INSERT OR IGNORE INTO regions VALUES (1,'华北'),(2,'华东'),(3,'华南'),(4,'西部');
INSERT OR IGNORE INTO products2 VALUES
  (1,'鸭绒被',200),(2,'橡皮鸭',15),(3,'羽绒枕',80),(4,'鸭蛋',3);
INSERT OR IGNORE INTO txn VALUES
  (1,1,1,3,399,'2024-01-10'),(2,2,2,50,29.9,'2024-01-15'),
  (3,3,1,2,399,'2024-01-20'),(4,1,3,10,199,'2024-02-01'),
  (5,2,4,200,5.9,'2024-02-10'),(6,4,1,5,399,'2024-02-20'),
  (7,3,2,100,29.9,'2024-03-01'),(8,1,1,4,399,'2024-03-10'),
  (9,2,3,8,199,'2024-03-15'),(10,4,4,500,5.9,'2024-03-20');

WITH
  -- Step1: 原始明细 + JOIN 维表
  base AS (
    SELECT t.txn_date, r.rname AS 区域, p.pname AS 产品,
      t.qty AS 销量, t.price AS 单价, p.cost AS 成本,
      t.qty * t.price AS 销售额,
      t.qty * (t.price - p.cost) AS 毛利
    FROM txn t
    JOIN regions r ON t.rid = r.rid
    JOIN products2 p ON t.pid = p.pid
  ),
  -- Step2: 按区域×产品汇总
  summary AS (
    SELECT 区域, 产品,
      SUM(销量) AS 总销量,
      ROUND(SUM(销售额),1) AS 总销售额,
      ROUND(SUM(毛利),1) AS 总毛利,
      ROUND(SUM(毛利)/SUM(销售额)*100,1) AS 毛利率pct
    FROM base GROUP BY 区域, 产品
  ),
  -- Step3: 区域内按销售额排名
  ranked AS (
    SELECT *,
      RANK() OVER (PARTITION BY 区域 ORDER BY 总销售额 DESC) AS 区域内排名
    FROM summary
  )
-- 最终输出：仅展示各区域 TOP1 产品
SELECT * FROM ranked
WHERE 区域内排名 = 1
ORDER BY 总销售额 DESC;`,
    knowledge: `
      <strong>完整的分析管道</strong>：<br>
      1️⃣ <strong>DDL</strong>：建立 星型模型（regions/products2 为维表，txn 为事实表）<br>
      2️⃣ <strong>DML</strong>：INSERT 测试数据<br>
      3️⃣ <strong>CTE Step1</strong>：JOIN 三表，计算衍生指标（销售额、毛利）<br>
      4️⃣ <strong>CTE Step2</strong>：GROUP BY 聚合，计算毛利率<br>
      5️⃣ <strong>CTE Step3</strong>：窗口函数 RANK() 区域内排名<br>
      6️⃣ <strong>最终过滤</strong>：WHERE 取各区域 TOP1<br><br>
      <strong>恭喜你完成所有 12 个工单！</strong> 🎉 你已掌握 DuckDB SQL 的完整知识图谱，
      从原子到复合，MECE 无遗漏。
    `,
    quiz: {
      q: "星型模型（Star Schema）中，事实表 and 维表的关系是？",
      options: [
        '维表很大，事实表很小',
        '事实表存储度量/交易数据，维表存储描述性属性',
        '两者没有区别',
        '星型模型中不能有 JOIN'
      ],
      answer: 1,
      explain: "星型模型：事实表（Fact Table）存储业务事件/度量（如交易记录），维表（Dimension Table）存储描述性属性（如区域、产品信息），通过外键关联。"
    }
  },

  // ────── T-13 ──────
  {
    id: 'T-13', level: 'L4', title: '远程文件与 Parquet 查询',
    emoji: '🌐',
    desc: 'DuckDB 可以直接查询网络上的 CSV、Parquet 甚至 JSON 文件，而无需提前将其导入数据库。这是其作为「现代数据分析瑞士军刀」的核心底气。',
    concepts: ['read_parquet', 'httpfs', 'S3 查询', '远程文件', '无服务器分析'],
    defaultSQL: `-- 🦆 直接查询远程公共 Parquet 文件
-- 不需要下载，不需要建表！直接执行
SELECT
  passenger_count          AS 乘客数,
  COUNT(*)                 AS 乘车次数,
  ROUND(AVG(trip_distance), 2) AS 平均距离,
  ROUND(AVG(fare_amount), 2)   AS 平均票价
FROM 'https://d37ci6vzurychx.cloudfront.net/trip-data/yellow_tripdata_2024-01.parquet'
WHERE trip_distance > 0
GROUP BY passenger_count
ORDER BY 乘车次数 DESC
LIMIT 5;`,
    knowledge: `
      <strong>远程查询的魔法：HTTPFS 扩展</strong><br>
      DuckDB 内置了 <code>httpfs</code> 扩展，允许它通过 HTTP/HTTPS 或 S3 协议直接读取远程文件。<br><br>
      配合 <strong>Parquet</strong> 列式存储格式的元数据（Metadata）和页索引（Page Index），
      DuckDB 能够实现 <strong>谓词下推（Predicate Pushdown）</strong> 和 <strong>投影下推（Projection Pushdown）</strong>：
      它只拉取查询所需的特定列和行的数据块，而不需要下载整个几百MB甚至几GB的文件。<br><br>
      <strong>常用函数</strong>：
      <ul>
        <li><code>read_parquet('url')</code> — 读取 Parquet 文件</li>
        <li><code>read_csv('url')</code> — 读取 CSV 文件</li>
        <li><code>read_json_auto('url')</code> — 自动推断并读取 JSON 文件</li>
      </ul>
    `,
    quiz: {
      q: "关于 DuckDB 查询远程 Parquet 文件的机制，以下说法错误的是？",
      options: [
        '必须先将文件下载到本地才能进行 SQL 查询',
        '利用 Parquet 的元数据，只拉取 SQL 涉及的列和数据块',
        '支持直接对 URL 字符串执行 FROM 查询',
        '可以与本地表进行 JOIN 关联分析'
      ],
      answer: 0,
      explain: "DuckDB 可以利用 HTTP 范围请求（Range Requests）只下载 Parquet 文件的元数据和所需的数据页，无需将整个远程文件下载到本地，这也是其分析速度极快的原因。"
    }
  },
];
