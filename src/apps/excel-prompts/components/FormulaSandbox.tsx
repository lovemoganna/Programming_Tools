import React, { useState, useEffect, useRef, useCallback } from 'react';
import { cn } from "@/utils/cn";
import { DesignTokens } from "@/theme/design-tokens";

interface Employee {
  id: string;
  name: string;
  math: number;
  salary: number;
  dept: string;
}

interface DeptInfo {
  dept: string;
  manager: string;
  bonusRate: number;
}

const INITIAL_DATA: Employee[] = [
  { id: "E001", name: "张伟", math: 85, salary: 6500, dept: "开发" },
  { id: "E002", name: "王芳", math: 58, salary: 8200, dept: "设计" },
  { id: "E003", name: "李娜", math: 92, salary: 5400, dept: "开发" },
  { id: "E004", name: "刘强", math: 45, salary: 7100, dept: "运营" },
  { id: "E005", name: "陈静", math: 74, salary: 9800, dept: "测试" },
];

const INITIAL_DEPTS: DeptInfo[] = [
  { dept: "开发", manager: "王五", bonusRate: 0.20 },
  { dept: "设计", manager: "赵六", bonusRate: 0.15 },
  { dept: "测试", manager: "钱七", bonusRate: 0.12 },
  { dept: "运营", manager: "孙八", bonusRate: 0.10 },
  { dept: "产品", manager: "周九", bonusRate: 0.18 }
];

interface Preset {
  title: string;
  formula: string;
  desc: string;
  type: string;
}

const PAYROLL_PRESETS: Preset[] = [
  {
    title: "LET 变量计算实操",
    formula: 'LET(base, salary, bonus, base * 0.15, tax, (base + bonus) * 0.05, base + bonus - tax)',
    desc: "为每位员工计算税后综合收入：底薪 + 15%奖金 - 5%个税",
    type: "LET FUNCTION"
  },
  {
    title: "IF 条件判定",
    formula: 'IF(math >= 60, "及格 PASS", "不及格 FAIL")',
    desc: "根据单行数学成绩 (math) 字段，动态判断是否及格",
    type: "IF FUNCTION"
  },
  {
    title: "SUM 与 AVERAGE 混合分析",
    formula: 'IF(salary > AVERAGE(salary), "高于平均 Above", "低于平均 Below")',
    desc: "对比员工底薪与全员平均底薪，输出高于平均或低于平均",
    type: "AGGREGATE FUNCTION"
  },
  {
    title: "XLOOKUP 负责人查询",
    formula: 'XLOOKUP(dept, deptNames, deptManagers)',
    desc: "在部门配置表中检索匹配员工所在部门的负责人姓名",
    type: "XLOOKUP FUNCTION"
  },
  {
    title: "VLOOKUP 奖金计算",
    formula: 'VLOOKUP(dept, deptTable, 3, FALSE) * salary',
    desc: "使用 VLOOKUP 从部门表中提取奖金系数（第3列）乘以底薪算出奖金",
    type: "VLOOKUP FUNCTION"
  },
  {
    title: "CONCAT 文本拼接",
    formula: 'CONCAT(name, " (", id, ") 的数学成绩是 ", math, " 分")',
    desc: "将姓名、ID 和数学成绩拼接到一个中文字书写串中",
    type: "TEXT FUNCTION"
  },
  {
    title: "MAP + LAMBDA 条件转换",
    formula: 'MAP(math, LAMBDA(score, IF(score >= 60, "及格 PASS", "不及格 FAIL")))',
    desc: "使用 365 MAP 动态数组函数对数学成绩进行溢出映射",
    type: "MAP FUNCTION"
  },
  {
    title: "SCAN 累加器（Running Totals）",
    formula: 'SCAN(0, salary, LAMBDA(acc, x, acc + x))',
    desc: "从第 1 行到当前行，对薪资进行滚存累加计算",
    type: "SCAN FUNCTION"
  }
];

const INVENTORY_DATA: Employee[] = [
  { id: "I001", name: "无线鼠标", math: 120, salary: 89, dept: "数码" },
  { id: "I002", name: "机械键盘", math: 45, salary: 299, dept: "数码" },
  { id: "I003", name: "人体工学椅", math: 15, salary: 899, dept: "办公" },
  { id: "I004", name: "笔记本电脑", math: 8, salary: 5999, dept: "数码" },
  { id: "I005", name: "中性笔", math: 800, salary: 2, dept: "办公" },
];

const INVENTORY_DEPTS: DeptInfo[] = [
  { dept: "数码", manager: "A区-2架", bonusRate: 0.05 },
  { dept: "办公", manager: "B区-1架", bonusRate: 0.10 }
];

const INVENTORY_PRESETS: Preset[] = [
  {
    title: "IF 库存补货预警",
    formula: 'IF(math < 20, "🚨 补货 REORDER", "充足 SAFE")',
    desc: "判断库存数量是否低于 20 件安全水位，低于则提示补货",
    type: "IF FUNCTION"
  },
  {
    title: "XLOOKUP 检索仓库位置",
    formula: 'XLOOKUP(dept, deptNames, deptManagers)',
    desc: "根据商品分类（dept），在分区配置表中查询其存放的仓库分区",
    type: "XLOOKUP FUNCTION"
  },
  {
    title: "VLOOKUP 折扣后单价",
    formula: 'salary * (1 - VLOOKUP(dept, deptTable, 3, FALSE))',
    desc: "根据商品分类查出折扣率，计算折后实际售价",
    type: "VLOOKUP FUNCTION"
  },
  {
    title: "LET 批量出库估值",
    formula: 'LET(qty, math, price, salary, val, qty * price, tax, val * 0.08, val + tax)',
    desc: "计算商品含税总估值：数量 * 单价 * 1.08 (8%税率)",
    type: "LET FUNCTION"
  },
  {
    title: "MAP + LAMBDA 高价筛查",
    formula: 'MAP(salary, LAMBDA(p, IF(p >= 500, "高价值 High", "常规 Normal")))',
    desc: "使用 MAP 对单价列进行映射，筛选出价格 >= 500 元的高价值商品",
    type: "MAP FUNCTION"
  }
];

export const FormulaSandbox: React.FC = () => {
  const [templateType, setTemplateType] = useState<'payroll' | 'inventory'>('payroll');
  const [selectedPresetIdx, setSelectedPresetIdx] = useState<number>(0);
  
  const activePresets = templateType === 'payroll' ? PAYROLL_PRESETS : INVENTORY_PRESETS;
  
  const [formulaText, setFormulaText] = useState<string>(PAYROLL_PRESETS[0].formula);
  const [outputColumnName, setOutputColumnName] = useState<string>("计算结果 Result");
  const [dataList, setDataList] = useState<Employee[]>(INITIAL_DATA);
  const [deptList, setDeptList] = useState<DeptInfo[]>(INITIAL_DEPTS);
  const [results, setResults] = useState<any[]>([]);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [isCalculated, setIsCalculated] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isCalculating, setIsCalculating] = useState<boolean>(false);
  const [calcProgress, setCalcProgress] = useState<number>(0);
  const [autoCalc, setAutoCalc] = useState<boolean>(true);

  // Monotonically-increasing counter: incrementing it cancels any in-flight async chunk.
  const currentCalcId = useRef<number>(0);

  // Keep latest mutable copies of frequently-changing state so callbacks
  // inside setTimeout never capture stale closures.
  const formulaTextRef = useRef(formulaText);
  const dataListRef = useRef(dataList);
  const deptListRef = useRef(deptList);
  useEffect(() => { formulaTextRef.current = formulaText; }, [formulaText]);
  useEffect(() => { dataListRef.current = dataList; }, [dataList]);
  useEffect(() => { deptListRef.current = deptList; }, [deptList]);

  const handleCancel = useCallback(() => {
    currentCalcId.current++; // invalidates any running chunk
    setIsCalculating(false);
    setCalcProgress(0);
    setErrorMsg("计算被用户取消。");
  }, []);

  const colors = DesignTokens.colors;

  const loadPreset = (idx: number, currentPresets = activePresets) => {
    setSelectedPresetIdx(idx);
    setFormulaText(currentPresets[idx]?.formula || "");
    setErrorMsg("");
    setIsCalculated(false);
  };

  const handleSwitchTemplate = (type: 'payroll' | 'inventory') => {
    setTemplateType(type);
    setSelectedPresetIdx(0);
    const presets = type === 'payroll' ? PAYROLL_PRESETS : INVENTORY_PRESETS;
    loadPreset(0, presets);
    setDataList(type === 'payroll' ? INITIAL_DATA : INVENTORY_DATA);
    setDeptList(type === 'payroll' ? INITIAL_DEPTS : INVENTORY_DEPTS);
    setIsCalculated(false);
    setErrorMsg("");
  };

  const handleCellChange = (idx: number, key: keyof Employee, val: any) => {
    setDataList(prev => {
      const next = [...prev];
      next[idx] = { ...next[idx], [key]: val };
      return next;
    });
    setIsCalculated(false);
  };

  const handleAddRow = () => {
    setDataList(prev => {
      const isPayroll = templateType === 'payroll';
      const prefix = isPayroll ? 'E' : 'I';
      const nextIdNum = prev.length > 0 
        ? Math.max(...prev.map(r => parseInt(r.id.replace(/^\D+/g, '')) || 0)) + 1 
        : 1;
      const nextId = `${prefix}${String(nextIdNum).padStart(3, '0')}`;
      return [
        ...prev,
        isPayroll 
          ? { id: nextId, name: "新员工", math: 60, salary: 5000, dept: "开发" }
          : { id: nextId, name: "新商品", math: 10, salary: 100, dept: "数码" }
      ];
    });
    setIsCalculated(false);
  };

  const handleDeleteRow = (idx: number) => {
    if (dataList.length <= 1) {
      setErrorMsg("最少需要保留 1 行数据进行公式模拟计算！");
      return;
    }
    setDataList(prev => prev.filter((_, i) => i !== idx));
    setIsCalculated(false);
  };

  const handleDeptChange = (idx: number, key: keyof DeptInfo, val: any) => {
    setDeptList(prev => {
      const next = [...prev];
      next[idx] = { ...next[idx], [key]: val };
      return next;
    });
    setIsCalculated(false);
  };

  const handleAddDeptRow = () => {
    setDeptList(prev => [
      ...prev,
      { dept: "新部门", manager: "新负责人", bonusRate: 0.10 }
    ]);
    setIsCalculated(false);
  };

  const handleDeleteDeptRow = (idx: number) => {
    if (deptList.length <= 1) {
      setErrorMsg("最少需要保留 1 行部门配置数据！");
      return;
    }
    setDeptList(prev => prev.filter((_, i) => i !== idx));
    setIsCalculated(false);
  };

  const handleResetData = () => {
    setDataList(templateType === 'payroll' ? INITIAL_DATA : INVENTORY_DATA);
    setDeptList(templateType === 'payroll' ? INITIAL_DEPTS : INVENTORY_DEPTS);
    setIsCalculated(false);
    setErrorMsg("");
  };

  const parseFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      if (!text) return;
      try {
        if (file.name.endsWith('.json')) {
          const parsed = JSON.parse(text);
          const list = Array.isArray(parsed) ? parsed : [parsed];
          const formatted = list.map((item: any, idx: number) => ({
            id: String(item.id || item.ID || item.商品ID || item.员工ID || `E${String(idx+1).padStart(3, '0')}`),
            name: String(item.name || item.Name || item.姓名 || item.商品名称 || "未命名"),
            math: Number(item.math || item.Math || item.数学 || item.数量 || item.库存数量 || 0),
            salary: Number(item.salary || item.Salary || item.底薪 || item.单价 || item.价格 || 0),
            dept: String(item.dept || item.Dept || item.部门 || item.分类 || "未知"),
          }));
          setDataList(formatted);
          setIsCalculated(false);
          setErrorMsg("");
        } else if (file.name.endsWith('.csv') || file.type === "text/csv") {
          const lines = text.split(/\r?\n/).map(line => line.trim()).filter(line => line.length > 0);
          if (lines.length <= 1) {
            setErrorMsg("CSV 文件没有数据行！");
            return;
          }
          const headers = lines[0].split(',').map(h => h.trim().replace(/^["']|["']$/g, ''));
          
          const idIdx = headers.findIndex(h => /id|ID|商品ID|员工ID/i.test(h));
          const nameIdx = headers.findIndex(h => /name|姓名|商品名称/i.test(h));
          const mathIdx = headers.findIndex(h => /math|数学|数量|库存数量/i.test(h));
          const salaryIdx = headers.findIndex(h => /salary|底薪|单价|价格|薪资/i.test(h));
          const deptIdx = headers.findIndex(h => /dept|部门|分类/i.test(h));

          const list: Employee[] = [];
          for (let i = 1; i < lines.length; i++) {
            const row = lines[i].split(',').map(c => c.trim().replace(/^["']|["']$/g, ''));
            if (row.length < headers.length) continue;
            list.push({
              id: idIdx !== -1 ? row[idIdx] : (row[0] || `E${String(i).padStart(3, '0')}`),
              name: nameIdx !== -1 ? row[nameIdx] : (row[1] || "未命名"),
              dept: deptIdx !== -1 ? row[deptIdx] : (row[2] || "未知"),
              math: mathIdx !== -1 ? Number(row[mathIdx]) || 0 : (Number(row[3]) || 0),
              salary: salaryIdx !== -1 ? Number(row[salaryIdx]) || 0 : (Number(row[4]) || 0),
            });
          }
          if (list.length > 0) {
            setDataList(list);
            setIsCalculated(false);
            setErrorMsg("");
          } else {
            setErrorMsg("无法解析 CSV 数据行！");
          }
        } else {
          setErrorMsg("仅支持导入 .csv 或 .json 文件！");
        }
      } catch (err: any) {
        setErrorMsg(`解析文件失败: ${err.message}`);
      }
    };
    reader.readAsText(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      parseFile(file);
    }
  };

  // handleRun reads from refs so it is safe to memoize with an empty dep array.
  // This prevents the useEffect debounce from creating a new closure every render.
  const handleRun = useCallback(() => {
    setErrorMsg("");

    // Always cancel any in-flight async calculation before starting a new one.
    const calcId = ++currentCalcId.current;

    const text = formulaTextRef.current.trim();
    if (!text) {
      setErrorMsg("请输入公式！");
      return;
    }

    // Snapshot deps from refs (avoids stale closures inside async chunks)
    const dataList = dataListRef.current;
    const deptList = deptListRef.current;

    // Preprocess text to auto-convert aggregates: e.g. SUM(salary) -> SUM(salaries)
    let preparedText = text;
    const aggregates = ["SUM", "AVERAGE", "MAX", "MIN", "COUNT"];
    aggregates.forEach(agg => {
      preparedText = preparedText.replace(new RegExp(`\\b${agg}\\s*\\(\\s*salary\\s*\\)`, "gi"), `${agg}(salaries)`);
      preparedText = preparedText.replace(new RegExp(`\\b${agg}\\s*\\(\\s*math\\s*\\)`, "gi"), `${agg}(maths)`);
    });

    const total = dataList.length;

    const evalRow = (row: Employee, index: number) => {
      const salary = row.salary;
      const math = row.math;

      // 1. SCAN Simulation
      if (text.toUpperCase().startsWith("SCAN")) {
        const match = text.match(/SCAN\s*\(\s*(\d+)\s*,\s*salary\s*,\s*LAMBDA\s*\(\s*([a-zA-Z_]\w*)\s*,\s*([a-zA-Z_]\w*)\s*,\s*\2\s*\+\s*\3\s*\)\s*\)/i);
        if (match) {
          let sum = 0;
          for (let i = 0; i <= index; i++) {
            sum += dataList[i].salary;
          }
          return sum;
        }
        const matchMath = text.match(/SCAN\s*\(\s*(\d+)\s*,\s*math\s*,\s*LAMBDA\s*\(\s*([a-zA-Z_]\w*)\s*,\s*([a-zA-Z_]\w*)\s*,\s*\2\s*\+\s*\3\s*\)\s*\)/i);
        if (matchMath) {
          let sum = 0;
          for (let i = 0; i <= index; i++) {
            sum += dataList[i].math;
          }
          return sum;
        }
        throw new Error("仅支持语法：SCAN(0, salary/math, LAMBDA(acc, x, acc + x))");
      }

      // 2. MAP Simulation
      if (text.toUpperCase().startsWith("MAP")) {
        if (text.toLowerCase().includes("math")) {
          const hasThreshold = text.match(/>=\s*(\d+)/);
          const threshold = hasThreshold ? parseInt(hasThreshold[1]) : 60;
          return math >= threshold ? "及格 PASS" : "不及格 FAIL";
        } else if (text.toLowerCase().includes("salary")) {
          const hasThreshold = text.match(/>=\s*(\d+)/);
          const threshold = hasThreshold ? parseInt(hasThreshold[1]) : 8000;
          return salary >= threshold ? "高薪 High" : "普薪 Normal";
        }
        throw new Error("仅支持对 math 或 salary 列进行 MAP 操作。");
      }

      // 3. LET Simulation
      if (text.toUpperCase().startsWith("LET")) {
        const innerMatch = text.match(/LET\s*\((.*)\)/i);
        if (!innerMatch) throw new Error("LET 语法不正确，必须形如 LET(var, val, ..., expr)");
        
        const params: string[] = [];
        let currentStr = "";
        let depth = 0;
        for (let char of innerMatch[1]) {
          if (char === '(') depth++;
          else if (char === ')') depth--;
          
          if (char === ',' && depth === 0) {
            params.push(currentStr.trim());
            currentStr = "";
          } else {
            currentStr += char;
          }
        }
        if (currentStr) params.push(currentStr.trim());

        if (params.length < 3 || params.length % 2 === 0) {
          throw new Error("LET 公式参数个数必须为奇数且不少于 3 个");
        }

        const bindings: Record<string, number> = {
          salary: salary,
          math: math
        };

        for (let i = 0; i < params.length - 1; i += 2) {
          const varName = params[i];
          const expr = params[i + 1];

          let val = 0;
          if (bindings[expr] !== undefined) {
            val = bindings[expr];
          } else if (!isNaN(Number(expr))) {
            val = Number(expr);
          } else {
            let jsExpr = expr;
            Object.keys(bindings).forEach(k => {
              jsExpr = jsExpr.replace(new RegExp(`\\b${k}\\b`, 'g'), bindings[k].toString());
            });
            val = Function(`"use strict"; return (${jsExpr})`)();
          }
          bindings[varName] = val;
        }

        const finalExpr = params[params.length - 1];
        let jsExpr = finalExpr;
        Object.keys(bindings).forEach(k => {
          jsExpr = jsExpr.replace(new RegExp(`\\b${k}\\b`, 'g'), bindings[k].toString());
        });
        const finalVal = Function(`"use strict"; return (${jsExpr})`)();
        return typeof finalVal === 'number' ? Math.round(finalVal * 100) / 100 : finalVal;
      }

      // 4. Enhanced Fallback Custom Evaluation with Excel helpers in scope
      const helperFuncs = {
        IF: (c: any, t: any, f: any) => c ? t : f,
        SUM: (...args: any[]) => args.flat(Infinity).reduce((a, b) => a + Number(b || 0), 0),
        AVERAGE: (...args: any[]) => {
          const flat = args.flat(Infinity).map(Number).filter(x => !isNaN(x));
          return flat.length ? flat.reduce((a, b) => a + b, 0) / flat.length : 0;
        },
        MAX: (...args: any[]) => Math.max(...args.flat(Infinity).map(Number)),
        MIN: (...args: any[]) => Math.min(...args.flat(Infinity).map(Number)),
        COUNT: (...args: any[]) => args.flat(Infinity).filter(x => typeof x === 'number' || !isNaN(Number(x))).length,
        CONCAT: (...args: any[]) => args.flat(Infinity).join(""),
        AND: (...args: any[]) => args.flat(Infinity).every(Boolean),
        OR: (...args: any[]) => args.flat(Infinity).some(Boolean),
        VLOOKUP: (lookupVal: any, table: any[][], colIdx: number, exact = true) => {
          if (!Array.isArray(table)) return "N/A";
          const valStr = String(lookupVal).trim().toLowerCase();
          for (const r of table) {
            if (!Array.isArray(r) || r.length === 0) continue;
            const cellVal = String(r[0]).trim().toLowerCase();
            if (exact ? cellVal === valStr : cellVal.includes(valStr)) {
              return r[colIdx - 1] !== undefined ? r[colIdx - 1] : "N/A";
            }
          }
          return "N/A";
        },
        XLOOKUP: (lookupVal: any, lookupArray: any[], returnArray: any[], ifNotFound = "N/A") => {
          if (!Array.isArray(lookupArray) || !Array.isArray(returnArray)) return ifNotFound;
          const valStr = String(lookupVal).trim().toLowerCase();
          const idx = lookupArray.findIndex(x => String(x).trim().toLowerCase() === valStr);
          if (idx !== -1) {
            return returnArray[idx] !== undefined ? returnArray[idx] : ifNotFound;
          }
          return ifNotFound;
        }
      };

      const context = {
        salary,
        math,
        name: JSON.stringify(row.name),
        id: JSON.stringify(row.id),
        dept: JSON.stringify(row.dept),
        salaries: JSON.stringify(dataList.map(r => r.salary)),
        maths: JSON.stringify(dataList.map(r => r.math)),
        names: JSON.stringify(dataList.map(r => r.name)),
        ids: JSON.stringify(dataList.map(r => r.id)),
        depts: JSON.stringify(dataList.map(r => r.dept)),
        deptTable: JSON.stringify(deptList.map(d => [d.dept, d.manager, d.bonusRate])),
        deptNames: JSON.stringify(deptList.map(d => d.dept)),
        deptManagers: JSON.stringify(deptList.map(d => d.manager)),
        deptRates: JSON.stringify(deptList.map(d => d.bonusRate))
      };

      const funcBody = `
        "use strict";
        const IF = this.IF;
        const SUM = this.SUM;
        const AVERAGE = this.AVERAGE;
        const MAX = this.MAX;
        const MIN = this.MIN;
        const COUNT = this.COUNT;
        const CONCAT = this.CONCAT;
        const AND = this.AND;
        const OR = this.OR;
        const VLOOKUP = this.VLOOKUP;
        const XLOOKUP = this.XLOOKUP;
        const FALSE = false;
        const TRUE = true;

        const salary = ${context.salary};
        const math = ${context.math};
        const name = ${context.name};
        const id = ${context.id};
        const dept = ${context.dept};
        const salaries = ${context.salaries};
        const maths = ${context.maths};
        const names = ${context.names};
        const ids = ${context.ids};
        const depts = ${context.depts};
        const deptTable = ${context.deptTable};
        const deptNames = ${context.deptNames};
        const deptManagers = ${context.deptManagers};
        const deptRates = ${context.deptRates};

        return (${preparedText});
      `;

      return Function(funcBody).call(helperFuncs);
    };

    const updateOutputColumnName = () => {
      const upperText = text.toUpperCase();
      if (upperText.startsWith("LET")) setOutputColumnName("税后净收入 Net");
      else if (upperText.startsWith("MAP")) setOutputColumnName("及格判定 Grade");
      else if (upperText.startsWith("SCAN")) setOutputColumnName("薪资滚存 Total");
      else if (upperText.startsWith("IF")) setOutputColumnName("判定结果 Status");
      else if (upperText.startsWith("CONCAT")) setOutputColumnName("拼接文本 Text");
      else if (upperText.startsWith("XLOOKUP")) setOutputColumnName("负责人 Manager");
      else if (upperText.startsWith("VLOOKUP")) setOutputColumnName("奖金 Bonus");
      else setOutputColumnName("计算结果 Result");
    };

    // ── Fast path: synchronous for small data sets ──────────────────────────
    // We still show the progress bar briefly and respect cancellation.
    if (total <= 500) {
      setIsCalculating(true);
      setCalcProgress(0);
      // Yield to browser so the loading state renders before blocking work.
      setTimeout(() => {
        if (calcId !== currentCalcId.current) return; // cancelled before we even started
        try {
          const newResults: any[] = [];
          for (let i = 0; i < total; i++) {
            if (calcId !== currentCalcId.current) return; // cancelled mid-loop
            const val = evalRow(dataList[i], i);
            newResults.push(typeof val === 'number' ? Math.round(val * 100) / 100 : val);
          }
          if (calcId !== currentCalcId.current) return;
          setResults(newResults);
          setIsCalculated(true);
          setIsCalculating(false);
          setCalcProgress(100);
          updateOutputColumnName();
        } catch (e: any) {
          if (calcId !== currentCalcId.current) return;
          setIsCalculating(false);
          setCalcProgress(0);
          setErrorMsg(e.message || "公式解析失败，请检查语法！");
        }
      }, 0);
      return;
    }

    // ── Large data path: async chunked with progress & cancellation ──────────
    setIsCalculating(true);
    setCalcProgress(0);

    const CHUNK_SIZE = 200;
    const newResults: any[] = [];
    let index = 0;

    const runChunk = () => {
      if (calcId !== currentCalcId.current) return; // Aborted by cancel or new run

      const limit = Math.min(index + CHUNK_SIZE, total);
      try {
        for (; index < limit; index++) {
          if (calcId !== currentCalcId.current) return; // hot-cancel mid-chunk
          const val = evalRow(dataList[index], index);
          newResults.push(typeof val === 'number' ? Math.round(val * 100) / 100 : val);
        }

        setCalcProgress(Math.round((index / total) * 100));

        if (index < total) {
          // ~1 frame gap so UI stays responsive
          setTimeout(runChunk, 16);
        } else {
          if (calcId !== currentCalcId.current) return;
          setIsCalculating(false);
          setCalcProgress(100);
          setResults(newResults);
          setIsCalculated(true);
          updateOutputColumnName();
        }
      } catch (e: any) {
        if (calcId !== currentCalcId.current) return;
        setIsCalculating(false);
        setCalcProgress(0);
        setErrorMsg(e.message || "公式解析失败，请检查语法！");
      }
    };

    setTimeout(runChunk, 0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // stable: reads deps via refs

  // Debounced auto-recalc: fires 400 ms after the last change to formula/data.
  useEffect(() => {
    if (!autoCalc) return;
    const timer = setTimeout(() => {
      handleRun();
    }, 400);
    return () => clearTimeout(timer);
  }, [formulaText, dataList, deptList, autoCalc, handleRun]);


  const exportCSV = () => {
    if (!isCalculated || results.length === 0) return;
    const isPayroll = templateType === 'payroll';
    const hId = isPayroll ? "员工 ID" : "商品 ID";
    const hName = isPayroll ? "姓名" : "商品名称";
    const hDept = isPayroll ? "部门" : "分类";
    const hMath = isPayroll ? "数学成绩" : "库存数量";
    const hSalary = isPayroll ? "底薪" : "单价";
    let csv = `${hId},${hName},${hDept},${hMath},${hSalary},计算结果\n`;
    dataList.forEach((row, i) => {
      csv += `${row.id},${row.name},${row.dept},${row.math},${row.salary},"${results[i]}"\n`;
    });
    const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `excel_sandbox_export_${new Date().getTime()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const exportJSON = () => {
    if (!isCalculated || results.length === 0) return;
    const isPayroll = templateType === 'payroll';
    const keyId = isPayroll ? "id" : "item_id";
    const keyName = isPayroll ? "name" : "item_name";
    const keyDept = isPayroll ? "dept" : "category";
    const keyMath = isPayroll ? "math" : "quantity";
    const keySalary = isPayroll ? "salary" : "price";
    
    const exportData = dataList.map((row, i) => ({
      [keyId]: row.id,
      [keyName]: row.name,
      [keyDept]: row.dept,
      [keyMath]: row.math,
      [keySalary]: row.salary,
      computed_result: results[i]
    }));
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `excel_sandbox_export_${new Date().getTime()}.json`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-xl overflow-hidden mt-12 flex flex-col animate-fade-in">
      <div className="p-10 lg:p-12 space-y-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-xs font-bold text-emerald-700 uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Interactive Playground
            </div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-2">Excel 高阶公式本地运行沙盒</h2>
            <p className="text-slate-500 font-bold tracking-tight text-lg">无需打开 Excel，本地即时模拟运行 365 动态数组与高阶函数效果</p>
          </div>
          
          {/* Template Switcher */}
          <div className="flex items-center bg-slate-100 p-1.5 rounded-2xl gap-1 border border-slate-200 shrink-0">
            <button
              onClick={() => handleSwitchTemplate('payroll')}
              className={cn(
                "px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all",
                templateType === 'payroll'
                  ? "bg-slate-900 text-white shadow-lg"
                  : "text-slate-500 hover:text-slate-800"
              )}
            >
              💼 员工薪资绩效
            </button>
            <button
              onClick={() => handleSwitchTemplate('inventory')}
              className={cn(
                "px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all",
                templateType === 'inventory'
                  ? "bg-slate-900 text-white shadow-lg"
                  : "text-slate-500 hover:text-slate-800"
              )}
            >
              📦 商品库存控制
            </button>
          </div>
        </div>

        {/* Presets Chips */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">选择预设公式载入</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {activePresets.map((preset, idx) => (
              <button
                key={idx}
                onClick={() => loadPreset(idx)}
                className={cn(
                  "p-5 rounded-2xl border text-left transition-all duration-300 flex flex-col gap-2 group",
                  selectedPresetIdx === idx
                    ? "bg-slate-900 text-white shadow-xl shadow-slate-900/10 scale-[1.02] border-emerald-500/30"
                    : "text-slate-500 border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-md hover:text-slate-800"
                )}
              >
                <div className={cn("text-xs font-black uppercase tracking-wider", selectedPresetIdx === idx ? "text-emerald-400" : "text-emerald-600")}>
                  {preset.type}
                </div>
                <div className={cn("text-sm font-black tracking-tight", selectedPresetIdx === idx ? "text-white" : "text-slate-800")}>
                  {preset.title}
                </div>
                <div className="text-xs leading-relaxed opacity-70 mt-1">
                  {preset.desc}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Grid: Editor + Preview table */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Editor - Left (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">公式编辑器 Formula Editor</h4>
            <div className="bg-slate-900 rounded-2xl border border-white/5 overflow-hidden shadow-inner flex flex-col">
              <div className="px-5 py-3 bg-slate-950/40 border-b border-white/5 flex justify-between items-center">
                <span className="text-xs font-black text-emerald-400 tracking-widest uppercase">Excel Formula (FX)</span>
                <span className="text-xs font-black text-white/30 tracking-widest uppercase">Spill Enabled</span>
              </div>
              <textarea
                value={formulaText}
                onChange={(e) => {
                  setFormulaText(e.target.value);
                  setIsCalculated(false);
                }}
                className="w-full h-32 p-6 bg-transparent text-emerald-300 font-mono text-sm leading-relaxed outline-none border-none resize-none focus:ring-0 placeholder:text-white/10"
                placeholder="在此输入 Excel 公式..."
                spellCheck={false}
              />
              <div className="px-5 py-3 bg-slate-950/60 border-t border-white/5 flex items-center justify-between gap-4">
                <label className="flex items-center gap-2 cursor-pointer text-white/50 hover:text-white transition-colors text-xs font-bold select-none">
                  <input
                    type="checkbox"
                    checked={autoCalc}
                    onChange={(e) => setAutoCalc(e.target.checked)}
                    className="rounded border-white/10 bg-transparent text-emerald-600 focus:ring-emerald-500 focus:ring-offset-0 focus:ring-offset-transparent"
                  />
                  <span>自动重算 Auto-Calc</span>
                </label>
                <div className="flex items-center gap-3">
                  {isCalculating && (
                    <div className="text-emerald-400 font-mono text-xs font-black">
                      {calcProgress}%
                    </div>
                  )}
                  {isCalculating ? (
                    <button
                      onClick={handleCancel}
                      className="bg-rose-600 hover:bg-rose-500 text-white text-xs font-black uppercase tracking-widest px-5 py-2.5 rounded-lg transition-all shadow-lg active:scale-95"
                    >
                      取消 Cancel
                    </button>
                  ) : (
                    <button
                      onClick={handleRun}
                      className="bg-emerald-600 text-white text-xs font-black uppercase tracking-widest px-5 py-2.5 rounded-lg hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-900/20 active:scale-95"
                    >
                      运行计算 Run
                    </button>
                  )}
                </div>
              </div>
            </div>

            {errorMsg && (
              <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold leading-relaxed">
                🚨 错误提示: {errorMsg}
              </div>
            )}
          </div>

          {/* Table - Right (7 cols) */}
          <div 
            className={cn(
              "lg:col-span-7 space-y-4 p-4 rounded-3xl border transition-all duration-300 relative",
              isDragging ? "bg-emerald-50/50 border-dashed border-emerald-400 scale-[1.01]" : "border-transparent"
            )}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            {isDragging && (
              <div className="absolute inset-0 bg-emerald-500/10 backdrop-blur-[2px] rounded-3xl flex items-center justify-center z-50 pointer-events-none">
                <div className="bg-white px-8 py-6 rounded-2xl shadow-xl border border-emerald-100 flex flex-col items-center gap-2">
                  <span className="text-3xl animate-bounce">📥</span>
                  <span className="text-sm font-black text-slate-800">拖放 CSV/JSON 文件到此处导入</span>
                </div>
              </div>
            )}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">样本数据计算视图 Grid Preview</h4>
              <div className="flex items-center gap-2 flex-wrap">
                <label className="flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg cursor-pointer transition-all">
                  📥 导入 CSV/JSON
                  <input
                    type="file"
                    accept=".csv,.json"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) parseFile(file);
                    }}
                    className="hidden"
                  />
                </label>
                <button
                  onClick={handleAddRow}
                  className="bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg transition-all"
                >
                  ➕ 新增行
                </button>
                <button
                  onClick={handleResetData}
                  className="bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg transition-all"
                >
                  🔄 重置样本
                </button>
                {isCalculated && (
                  <>
                    <button
                      onClick={exportCSV}
                      className="bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg transition-all"
                    >
                      导出 CSV
                    </button>
                    <button
                      onClick={exportJSON}
                      className="bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg transition-all"
                    >
                      导出 JSON
                    </button>
                  </>
                )}
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-inner">
              <table className="w-full border-collapse font-mono text-xs text-left">
                <thead>
                  <tr className="bg-slate-200/50 border-b border-slate-200 text-slate-500 uppercase tracking-widest text-xs">
                    <th className="py-3.5 px-4 font-black">{templateType === 'payroll' ? '员工 ID' : '商品 ID'}</th>
                    <th className="py-3.5 px-4 font-black">{templateType === 'payroll' ? '姓名' : '商品名称'}</th>
                    <th className="py-3.5 px-4 font-black">{templateType === 'payroll' ? '部门 (dept)' : '分类 (dept)'}</th>
                    <th className="py-3.5 px-4 font-black text-right">{templateType === 'payroll' ? '数学 (math)' : '库存数量 (math)'}</th>
                    <th className="py-3.5 px-4 font-black text-right">{templateType === 'payroll' ? '底薪 (salary)' : '单价 (salary)'}</th>
                    <th className={cn("py-3.5 px-4 font-black text-right transition-colors", isCalculated ? "text-emerald-700 bg-emerald-100/40" : "text-slate-400")}>
                      {outputColumnName}
                    </th>
                    <th className="py-3.5 px-4 font-black text-center w-12">操作</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-600">
                  {dataList.map((row, i) => (
                    <tr key={row.id} className="hover:bg-slate-100/50 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-400">{row.id}</td>
                      <td className="py-2 px-4">
                        <input
                          type="text"
                          value={row.name}
                          onChange={(e) => handleCellChange(i, 'name', e.target.value)}
                          aria-label={`${templateType === 'payroll' ? '姓名' : '商品名称'} - 行 ${row.id}`}
                          className="w-full bg-transparent border-b border-transparent hover:border-slate-300 focus:border-emerald-500 outline-none font-bold text-slate-800 py-0.5 transition-all text-xs"
                        />
                      </td>
                      <td className="py-2 px-4">
                        <input
                          type="text"
                          value={row.dept}
                          onChange={(e) => handleCellChange(i, 'dept', e.target.value)}
                          aria-label={`${templateType === 'payroll' ? '部门' : '分类'} - 行 ${row.id}`}
                          className="w-full bg-transparent border-b border-transparent hover:border-slate-300 focus:border-emerald-500 outline-none font-bold text-slate-800 py-0.5 transition-all text-xs"
                        />
                      </td>
                      <td className="py-2 px-4 text-right">
                        <input
                          type="number"
                          value={row.math}
                          onChange={(e) => handleCellChange(i, 'math', Math.max(0, parseInt(e.target.value) || 0))}
                          aria-label={`${templateType === 'payroll' ? '数学成绩' : '库存数量'} - 行 ${row.id}`}
                          className="w-full bg-transparent border-b border-transparent hover:border-slate-300 focus:border-emerald-500 outline-none text-right font-bold text-slate-600 py-0.5 transition-all text-xs"
                        />
                      </td>
                      <td className="py-2 px-4 text-right">
                        <input
                          type="number"
                          value={row.salary}
                          onChange={(e) => handleCellChange(i, 'salary', Math.max(0, parseInt(e.target.value) || 0))}
                          aria-label={`${templateType === 'payroll' ? '底薪' : '单价'} - 行 ${row.id}`}
                          className="w-full bg-transparent border-b border-transparent hover:border-slate-300 focus:border-emerald-500 outline-none text-right font-bold text-slate-600 py-0.5 transition-all text-xs"
                        />
                      </td>
                      <td className={cn("py-3.5 px-4 text-right font-bold transition-all", 
                        isCalculated 
                          ? "text-emerald-600 bg-emerald-50/40 font-black animate-fade-in relative" 
                          : "text-slate-300 italic"
                      )}>
                        {isCalculated ? (
                          <span className="flex items-center justify-end gap-1.5">
                            <span>{typeof results[i] === 'number' ? `¥${results[i].toLocaleString()}` : results[i]}</span>
                            <span className="text-xs bg-emerald-500/10 text-emerald-600 px-1 py-0.2 rounded border border-emerald-500/20 scale-75 select-none font-bold font-sans">SPILL</span>
                          </span>
                        ) : (
                          "等待计算..."
                        )}
                      </td>
                      <td className="py-2 px-4 text-center">
                        <button
                          onClick={() => handleDeleteRow(i)}
                          className="text-slate-400 hover:text-rose-500 transition-colors font-bold text-xs"
                          title="删除此行"
                          aria-label="删除此行"
                        >
                          🗑️
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Department Configuration Table */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-8 pt-6 border-t border-slate-100">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">{templateType === 'payroll' ? '部门配置数据视图 Department Config' : '分类配置数据视图 Category Config'}</h4>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleAddDeptRow}
                  className="bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg transition-all"
                >
                  {templateType === 'payroll' ? '➕ 新增部门' : '➕ 新增分类'}
                </button>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-inner">
              <table className="w-full border-collapse font-mono text-xs text-left">
                <thead>
                  <tr className="bg-slate-200/50 border-b border-slate-200 text-slate-500 uppercase tracking-widest text-xs">
                    <th className="py-3.5 px-4 font-black">{templateType === 'payroll' ? '部门 (dept)' : '分类 (dept)'}</th>
                    <th className="py-3.5 px-4 font-black">{templateType === 'payroll' ? '负责人 (manager)' : '仓库位置 (manager)'}</th>
                    <th className="py-3.5 px-4 font-black text-right">{templateType === 'payroll' ? '奖金比例 (bonusRate)' : '税率/扣率 (bonusRate)'}</th>
                    <th className="py-3.5 px-4 font-black text-center w-12">操作</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-600">
                  {deptList.map((row, i) => (
                    <tr key={i} className="hover:bg-slate-100/50 transition-colors">
                      <td className="py-2 px-4">
                        <input
                          type="text"
                          value={row.dept}
                          onChange={(e) => handleDeptChange(i, 'dept', e.target.value)}
                          aria-label={`${templateType === 'payroll' ? '部门名称' : '分类名称'} - 行 ${i + 1}`}
                          className="w-full bg-transparent border-b border-transparent hover:border-slate-300 focus:border-emerald-500 outline-none font-bold text-slate-800 py-0.5 transition-all text-xs"
                        />
                      </td>
                      <td className="py-2 px-4">
                        <input
                          type="text"
                          value={row.manager}
                          onChange={(e) => handleDeptChange(i, 'manager', e.target.value)}
                          aria-label={`${templateType === 'payroll' ? '部门负责人' : '分区/仓库位置'} - 行 ${i + 1}`}
                          className="w-full bg-transparent border-b border-transparent hover:border-slate-300 focus:border-emerald-500 outline-none font-bold text-slate-600 py-0.5 transition-all text-xs"
                        />
                      </td>
                      <td className="py-2 px-4 text-right">
                        <input
                          type="number"
                          step="0.01"
                          value={row.bonusRate}
                          onChange={(e) => handleDeptChange(i, 'bonusRate', parseFloat(e.target.value) || 0)}
                          aria-label={`${templateType === 'payroll' ? '奖金比例' : '税率/扣率'} - 行 ${i + 1}`}
                          className="w-full bg-transparent border-b border-transparent hover:border-slate-300 focus:border-emerald-500 outline-none text-right font-bold text-slate-600 py-0.5 transition-all text-xs"
                        />
                      </td>
                      <td className="py-2 px-4 text-center">
                        <button
                          onClick={() => handleDeleteDeptRow(i)}
                          className="text-slate-400 hover:text-rose-500 transition-colors font-bold text-xs"
                          title="删除此行"
                          aria-label="删除此行"
                        >
                          🗑️
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
