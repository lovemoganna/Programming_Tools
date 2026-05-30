const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HomePage-78omhns0.js","assets/react-core-2IwPqq8E.js","assets/vendor-Cp45wUEN.js","assets/PageFooter-BsjlsJSm.js","assets/framer-motion-DYgzwnK0.js","assets/ExcelPromptsPage-BjFJAhfr.js","assets/SearchInput-CTJbOR0g.js","assets/SplitViewLayout-BrOef_n1.js","assets/GitWorkflowPage-bKZ8T8Pc.js","assets/MeceFrameworkPage-Cahf35CX.js","assets/SectionHeader-B5A_c5os.js","assets/CopyButton-CdmwBfVp.js","assets/ProgrammingMindsetPage-CW3ErUzl.js","assets/PythonMecePage-10em_OWp.js","assets/DuckdbTutorialPage-anP_3mhB.js","assets/duckdb-arrow-XeaLukrd.js","assets/ContextEngineeringPage-Dig3ZHKa.js","assets/FlowWikiPage-CDs2b3t3.js","assets/FlowWikiPage-c4wDDGFS.css"])))=>i.map(i=>d[i]);
import{r as f,u as q,j as e,a as v,L as w,_,B as M,R as U,b as x,c as F}from"./react-core-2IwPqq8E.js";import{a7 as V,a8 as G}from"./vendor-Cp45wUEN.js";import{A as j,m as k}from"./framer-motion-DYgzwnK0.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function a(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=a(o);fetch(o.href,r)}})();function H(...n){return V(G(n))}const Y=[{id:"cleaning",name:"数据清洗与整理",icon:"🧹",color:"text-emerald-700",bgColor:"bg-emerald-50",borderColor:"border-emerald-200",description:"去重、补全、规范化、格式统一",prompts:[{id:"c1",title:"批量去重与标记",scenario:"数据集中存在重复行，需识别并处理",prompt:"我的 Excel 表格 A 列是客户 ID，B 列是订单号，数据有重复行。请给我完整解决方案：[1] 用公式在 C 列标记重复项（首次出现标记「唯一」，重复出现标记「重复」）；[2] 写出用 VBA 一键删除所有重复行的代码；[3] 说明 Power Query 去重的操作步骤。三种方案都要说明适用场景。",tags:["去重","VBA","Power Query","COUNTIFS"],difficulty:"进阶",output:"公式 + VBA代码 + PQ步骤三合一方案"},{id:"c2",title:"不规则日期格式统一",scenario:"日期列混有 2024/1/5、2024-01-05、20240105 等多种格式",prompt:"我的 Excel A 列日期格式混乱，包含「2024/1/5」「2024-01-05」「20240105」「2024年1月5日」四种格式。请提供：[1] 一个能识别并统一转换为 YYYY-MM-DD 格式的 Excel 公式（嵌套 TEXT/DATEVALUE/IF）；[2] 一段 Power Query M 语言代码实现同样效果；[3] 列出转换时的常见陷阱及规避方法。",tags:["日期格式","TEXT","Power Query","DATEVALUE"],difficulty:"进阶",output:"统一 YYYY-MM-DD 格式的公式与M代码"},{id:"c3",title:"空值智能填充",scenario:"纵向合并单元格导致大量空白格，需向下填充",prompt:"我的 Excel 表格因合并单元格导致 A 列有大量空白，规律是每组数据只有第一行有值，下面几行是空的。请给我：[1] 用「定位空值 + Ctrl+D」的手动操作步骤；[2] 一条 Power Query 填充公式；[3] 一段 VBA 代码实现自动向下填充；并说明三种方案的适用场景差异。",tags:["空值填充","合并单元格","VBA","Power Query"],difficulty:"基础",output:"三种空值填充方案及适用场景对比"},{id:"c4",title:"文本脏数据清洗",scenario:"字段中含有多余空格、特殊字符、换行符",prompt:"我的 Excel 数据中存在：前后多余空格、中间多余空格、不可见的换行符（CHAR(10)）、全角数字（如「１２３」需转为「123」）。请提供一个组合公式，用最少嵌套层数同时清除以上四类脏数据，并解释每个函数的作用（TRIM、CLEAN、SUBSTITUTE、ASC）。",tags:["TRIM","CLEAN","SUBSTITUTE","文本清洗"],difficulty:"基础",output:"组合清洗公式 + 函数说明"},{id:"c5",title:"数据分列与合并",scenario:"姓名列需拆分为姓和名，或多列需合并展示",prompt:"场景A：A 列是「张三」「欧阳修」等中文姓名，需拆分为姓（B列）和名（C列）。场景B：D列姓名 + E列手机 + F列城市需合并为「张三 | 138xxxx | 北京」格式。请分别提供：[1] Excel 公式方案；[2] Power Query 方案；[3] 说明 TEXTSPLIT 函数（Excel 365）的使用方法。",tags:["分列","合并","TEXTSPLIT","MID/LEFT"],difficulty:"进阶",output:"分列与合并的公式、PQ双方案"}]},{id:"formula",name:"公式与函数构建",icon:"⚡",color:"text-violet-700",bgColor:"bg-violet-50",borderColor:"border-violet-200",description:"XLOOKUP、动态数组、条件聚合、嵌套逻辑",prompts:[{id:"f1",title:"多条件智能查找",scenario:"需要根据多个条件在不同表中查找数据",prompt:"我有两张工作表：Sheet1 是订单表（A列：订单ID，B列：产品名，C列：地区），Sheet2 是价格表（A列：产品名，B列：地区，C列：单价）。我需要在 Sheet1 的 D 列查找对应单价。请提供：[1] XLOOKUP 多条件方案；[2] INDEX+MATCH 多条件方案；[3] 解释两者性能差异与适用 Excel 版本。",tags:["XLOOKUP","INDEX+MATCH","多条件查找","跨表"],difficulty:"进阶",output:"XLOOKUP 与 INDEX+MATCH 双方案对比"},{id:"f2",title:"动态数组聚合分析",scenario:"需要动态提取唯一值并自动汇总",prompt:"我的 A 列是销售员姓名（有重复），B 列是销售额。请用 Excel 365 动态数组函数：[1] UNIQUE 提取不重复销售员列表；[2] SUMIF 配合 UNIQUE 自动汇总每人总销售额；[3] SORT+LARGE 筛出 Top5 销售员；[4] FILTER 提取销售额超过 10 万的记录。请写出每个公式并说明参数含义。",tags:["UNIQUE","FILTER","SORT","动态数组","SUMIF"],difficulty:"进阶",output:"动态数组函数组合应用示例"},{id:"f3",title:"复杂条件统计",scenario:"多维度条件下的计数与求和",prompt:"我的数据表有：A列=销售区域，B列=产品类别，C列=销售日期，D列=销售金额，E列=完成状态（「已完成」/「未完成」）。请提供公式实现：[1] 统计「华东区」中「已完成」的订单数量；[2] 计算2024年Q1「电子产品」类的总销售额；[3] 计算满足以上两个条件的平均客单价；[4] 用 COUNTIFS 数组公式同时统计所有区域的完成率。",tags:["COUNTIFS","SUMIFS","AVERAGEIFS","多条件统计"],difficulty:"进阶",output:"多维度 COUNTIFS/SUMIFS/AVERAGEIFS 公式"},{id:"f4",title:"动态下拉级联菜单",scenario:"一级选省份，二级自动联动显示该省城市",prompt:"我需要在 Excel 中实现省市级联下拉菜单：A 列选择省份后，B 列自动显示该省的城市选项。请提供完整实现方案：[1] 数据源如何组织（命名区域 or 表格）；[2] 数据验证的设置步骤；[3] 用 INDIRECT 函数实现联动的公式；[4] 扩展：如何让新增城市自动纳入下拉选项（动态命名区域方案）。",tags:["数据验证","INDIRECT","下拉菜单","级联"],difficulty:"进阶",output:"省市联动下拉菜单完整实现方案"},{id:"f5",title:"文本提取与正则解析",scenario:"从混合文本中提取手机号、邮箱、金额等信息",prompt:"我的 A 列存有类似「客户联系：张三，手机：13812345678，邮箱：abc@test.com，金额¥1,234.56」的混合文本，需要分别提取手机号、邮箱、金额。请提供：[1] 用 MID+FIND 提取手机号的公式思路；[2] Excel 365 中 REGEXEXTRACT（或 Power Query）实现正则提取的方法；[3] 用 Flash Fill（智能填充）的操作技巧。",tags:["MID","FIND","正则","REGEXEXTRACT","Flash Fill"],difficulty:"专家",output:"多方法文本提取方案（公式/正则/Flash Fill）"}]},{id:"pivot",name:"数据透视与汇总分析",icon:"📊",color:"text-blue-700",bgColor:"bg-blue-50",borderColor:"border-blue-200",description:"透视表、切片器、分组汇总、多维分析",prompts:[{id:"p1",title:"销售数据多维透视",scenario:"快速从大量销售数据中生成多维汇总报表",prompt:"我有一份包含 10 万行的销售数据（字段：日期、区域、销售员、产品线、数量、单价、折扣、客户类型）。请指导我用数据透视表实现：[1] 按区域 x 产品线的销售额矩阵；[2] 按月份的环比增长率（值显示方式设置）；[3] 添加切片器实现客户类型的动态筛选；[4] 计算字段：利润率 = （收入 - 成本）/ 收入；[5] 数据源刷新后如何自动扩展范围（表格化方案）。",tags:["数据透视表","切片器","计算字段","环比","表格化"],difficulty:"进阶",output:"多维透视表配置方案 + 动态数据源设置"},{id:"p2",title:"同比环比自动计算",scenario:"财务数据中需要自动计算月度同比和环比",prompt:"我的数据表有：A列=年月（格式：2024-01），B列=收入，C列=成本。请帮我：[1] 用公式在 D 列计算环比增长率（与上月比）；[2] 用公式在 E 列计算同比增长率（与去年同月比）；[3] 在数据透视表中用「值显示方式」实现同样效果（无需公式）；[4] 当月数据为 0 或上期为空时如何处理 #DIV/0! 错误。",tags:["同比","环比","IFERROR","数据透视表","增长率"],difficulty:"进阶",output:"同比环比公式 + 透视表值显示方式配置"},{id:"p3",title:"Power Pivot 数据建模",scenario:"多张关联表需要建立数据模型进行跨表分析",prompt:"我有三张表：订单表（订单ID、客户ID、产品ID、日期、数量）、客户表（客户ID、客户名、城市、级别）、产品表（产品ID、产品名、类别、单价、成本）。请指导我用 Power Pivot：[1] 建立三表关系（主键外键设置）；[2] 在数据模型中创建 DAX 度量值：总销售额、毛利率、客均消费；[3] 解释 DAX 中 CALCULATE、FILTER、ALL 函数的用法；[4] 如何创建日期表并实现时间智能函数（SAMEPERIODLASTYEAR）。",tags:["Power Pivot","DAX","数据建模","CALCULATE","时间智能"],difficulty:"专家",output:"Power Pivot 建模 + DAX 度量值完整方案"},{id:"p4",title:"帕累托分析（80/20法则）",scenario:"找出贡献80%销售额的20%产品",prompt:"我需要对产品销售数据做帕累托分析（找出贡献 80% 销售额的产品）。A 列=产品名，B 列=销售额。请提供：[1] 排序后计算累计占比的公式步骤；[2] 数据透视表 + 辅助列实现帕累托的方法；[3] 绘制帕累托图（柱状图+折线图组合）的步骤；[4] 用 PERCENTRANK 函数辅助识别 A/B/C 类产品分级。",tags:["帕累托","累计占比","PERCENTRANK","组合图"],difficulty:"进阶",output:"帕累托分析公式 + 图表制作步骤"}]},{id:"chart",name:"数据可视化与图表",icon:"📈",color:"text-orange-700",bgColor:"bg-orange-50",borderColor:"border-orange-200",description:"动态图表、迷你图、条件格式热力图",prompts:[{id:"ch1",title:"动态交互式仪表盘",scenario:"用切片器和图表联动做可交互的 Excel 仪表盘",prompt:"我需要制作一个 Excel 销售仪表盘，包含：总销售额 KPI 卡、区域柱状图、月度趋势折线图、产品占比饼图，并用切片器控制时间和区域过滤。请提供：[1] 整体布局设计建议（工作表结构）；[2] 如何让所有图表共享同一个切片器；[3] KPI 卡用什么实现（图表 or 条件格式 or 文本框）；[4] 冻结窗格和打印区域的设置；[5] 隐藏网格线、行列标题让界面更专业的设置方法。",tags:["仪表盘","切片器","KPI","动态图表","布局设计"],difficulty:"专家",output:"Excel 仪表盘完整搭建方案"},{id:"ch2",title:"条件格式热力图",scenario:"用颜色直观呈现数据分布和异常值",prompt:"我有一个 12x5 的矩阵（12 个月 x 5 个产品的销售数据），需要用颜色深浅来表示数值大小（热力图效果）。请提供：[1] 用条件格式「色阶」实现热力图的步骤；[2] 用条件格式「公式」高亮每行最大值的方法；[3] 用图标集显示 Top/Mid/Low 三档的设置；[4] 如何只对非空单元格应用格式（避免空值干扰）；[5] 迷你图（Sparkline）在每行末尾添加趋势线的操作。",tags:["条件格式","热力图","色阶","迷你图","图标集"],difficulty:"基础",output:"条件格式热力图 + 迷你图配置方案"},{id:"ch3",title:"瀑布图与财务变动展示",scenario:"展示财务数据的增减变化过程",prompt:"我需要制作一个财务瀑布图，展示：期初余额 → 各项增加 → 各项减少 → 期末余额。请提供：[1] Excel 原生瀑布图的制作步骤（Excel 2016+）；[2] 用堆叠柱状图模拟瀑布图的辅助列公式方法（兼容老版本）；[3] 如何设置正负值不同颜色（增加=绿，减少=红）；[4] 数据标签格式化（显示 +/- 符号）的设置技巧。",tags:["瀑布图","财务图表","堆叠柱状图","辅助列"],difficulty:"进阶",output:"瀑布图原生 + 辅助列双方案"},{id:"ch4",title:"动态图表（下拉控制）",scenario:"通过下拉框切换图表显示的数据系列",prompt:"我想让用户从下拉框选择「销售额」或「利润率」，图表自动切换显示对应数据。请提供：[1] 用数据验证创建下拉框；[2] 用 INDEX+MATCH 根据下拉选项动态引用数据的公式；[3] 将辅助区域作为图表数据源，实现动态切换；[4] 进阶方案：用窗体控件（组合框）触发事件，用 VBA 实现图表系列的动态切换代码。",tags:["动态图表","INDEX","数据验证","VBA","窗体控件"],difficulty:"专家",output:"下拉控制动态图表（公式版 + VBA版）"}]},{id:"vba",name:"自动化与 VBA",icon:"🤖",color:"text-rose-700",bgColor:"bg-rose-50",borderColor:"border-rose-200",description:"宏录制、批量操作、定时任务、自定义函数",prompts:[{id:"v1",title:"批量工作表操作",scenario:"对几十个结构相同的工作表批量汇总或格式化",prompt:"我的工作簿里有 30 个工作表，每张表结构相同（A列=姓名，B列=分数），工作表名是月份（1月、2月...12月）。请提供 VBA 代码实现：[1] 遍历所有工作表，将 B 列数据汇总到 Summary 表；[2] 对每张表的标题行设置加粗+蓝色背景；[3] 按 B 列数值降序排列每张表的数据；[4] 将每张表导出为单独的 PDF 文件（命名为工作表名）。请加上注释说明每段代码的逻辑。",tags:["VBA","循环","工作表遍历","批量操作","PDF导出"],difficulty:"专家",output:"批量工作表处理 VBA 代码（含注释）"},{id:"v2",title:"自定义函数（UDF）",scenario:"Excel 内置函数无法满足特定业务计算需求",prompt:"请帮我用 VBA 写三个自定义函数（UDF）：[1] ChineseRMB(金额)：将数字转为中文大写金额（如 123.45 → 壹佰贰拾叁元肆角伍分）；[2] ExtractNumber(文本)：从混合文本中提取所有数字并求和；[3] WorkdaysBetween(开始日期, 结束日期, 节假日范围)：计算两日期间去除节假日的工作日天数。请提供完整 VBA 代码及在工作表中的调用示例。",tags:["VBA","UDF","自定义函数","中文大写","工作日"],difficulty:"专家",output:"三个实用 UDF 完整 VBA 代码"},{id:"v3",title:"数据自动分发与邮件",scenario:"根据数据自动拆分工作表并通过 Outlook 发送",prompt:"我需要把一张总表按「区域」列拆分为多个工作表，并将每个区域的数据通过 Outlook 自动发送给对应的负责人（邮件列表在另一张配置表中）。请提供 VBA 代码：[1] 按区域列值拆分数据到新工作表；[2] 读取配置表中区域与邮箱的映射；[3] 用 Outlook 对象发送带 Excel 附件的邮件（邮件正文包含该区域的数据摘要）；[4] 添加错误处理，跳过邮箱为空的记录。",tags:["VBA","Outlook","自动邮件","数据拆分","错误处理"],difficulty:"专家",output:"数据拆分 + Outlook 自动发送 VBA 完整代码"},{id:"v4",title:"用户窗体数据录入",scenario:"为非技术用户制作带界面的数据录入表单",prompt:"我需要为同事制作一个 Excel 数据录入窗体，字段包括：姓名（文本框）、部门（下拉框，数据来自Sheet2 A列）、日期（日期选择器）、金额（数字验证，必填）、备注（多行文本框）。提交后数据追加到 Sheet1 最后一行。请提供：[1] UserForm 的控件布局建议；[2] 初始化事件加载部门列表的代码；[3] 提交按钮的数据验证 + 写入代码；[4] 关闭前确认对话框；[5] 如何将 UserForm 绑定到工具栏按钮。",tags:["UserForm","VBA","数据录入","下拉框","表单验证"],difficulty:"专家",output:"完整 UserForm 数据录入系统 VBA 代码"}]},{id:"stats",name:"统计分析与建模",icon:"🔬",color:"text-teal-700",bgColor:"bg-teal-50",borderColor:"border-teal-200",description:"回归分析、预测、相关性、假设检验",prompts:[{id:"s1",title:"线性回归与销售预测",scenario:"根据历史数据预测未来销售趋势",prompt:"我有 24 个月的历史销售数据（A列=月份序号1-24，B列=销售额）。请帮我用 Excel 完成：[1] 用 LINEST 函数计算线性回归系数（斜率、截距、R²）；[2] 用 FORECAST.LINEAR 预测第 25-30 个月的销售额；[3] 用 TREND 函数输出拟合值并绘制回归趋势图；[4] 用 LOGEST 进行指数回归（适合快速增长数据）；[5] 解释 R² 值如何判断模型拟合优度。",tags:["LINEST","FORECAST","TREND","回归分析","R²"],difficulty:"专家",output:"线性 + 指数回归分析完整方案"},{id:"s2",title:"相关性分析矩阵",scenario:"分析多个变量之间的相关关系",prompt:"我有 6 个业务指标（A-F列，各 100 行数据），需要分析它们的相关性。请提供：[1] 用 CORREL 函数手动计算两两相关系数的方法；[2] 用数据分析工具库（Analysis ToolPak）生成相关系数矩阵的步骤；[3] 用条件格式对相关矩阵进行热力图着色（强正相关=深蓝，强负相关=深红）；[4] 解释相关系数 |r|>0.7、0.4-0.7、<0.4 的业务意义。",tags:["CORREL","相关系数","分析工具库","热力图","多变量"],difficulty:"进阶",output:"相关性矩阵 + 热力图可视化方案"},{id:"s3",title:"敏感性分析（假设分析）",scenario:"模拟不同参数组合对结果的影响",prompt:"我的利润模型公式依赖：售价、成本、销量三个变量。我需要做敏感性分析。请提供：[1] 单变量模拟运算表（Data Table）：售价从50变化到100，观察利润变化；[2] 双变量模拟运算表：售价 x 销量的利润矩阵；[3] 方案管理器（Scenario Manager）：设置乐观/基准/悲观三个方案；[4] 用龙卷风图（Tornado Chart）展示各变量对利润影响的敏感度排序方法。",tags:["模拟运算表","方案管理器","敏感性分析","假设分析"],difficulty:"专家",output:"单/双变量模拟运算表 + 方案管理器配置"},{id:"s4",title:"RFM 客户价值分层",scenario:"基于消费数据对客户进行价值分层",prompt:"我有客户数据：A列=客户ID，B列=最近购买日期，C列=购买频次，D列=累计消费金额。请帮我：[1] 计算 RFM 三个维度的分位数得分（1-5分）；[2] 用 PERCENTRANK+IFS 对每个客户打分并分层（高价值/潜力/流失风险/低价值）；[3] 用 ABC 分析（帕累托）对客户按贡献额分 A/B/C 三类；[4] 数据透视表统计各层客户数量、平均消费及占比；[5] 提出每种客户层级的差异化运营策略建议。",tags:["RFM","ABC分析","客户分层","PERCENTRANK","数据透视"],difficulty:"专家",output:"RFM + ABC 客户分层完整模型"}]},{id:"powerquery",name:"Power Query 数据处理",icon:"🔄",color:"text-indigo-700",bgColor:"bg-indigo-50",borderColor:"border-indigo-200",description:"ETL自动化、跨源合并、M语言、数据转换",prompts:[{id:"pq1",title:"多文件夹 Excel 文件合并",scenario:"自动合并同一文件夹下所有结构相同的 Excel 文件",prompt:"我的文件夹里有 12 个月的销售报表（每月一个 Excel 文件，结构相同），每月都会新增文件。请用 Power Query 实现：[1] 从文件夹自动加载所有 Excel 文件并合并；[2] 添加「来源文件名」列以追踪数据来源；[3] 过滤掉表头行重复的问题（只保留第一个文件的表头）；[4] 添加「月份」列（从文件名中提取）；[5] 下个月新增文件后，只需刷新即可自动更新的机制说明。",tags:["Power Query","文件夹合并","ETL","自动刷新","M语言"],difficulty:"进阶",output:"多文件自动合并 PQ 步骤 + M代码"},{id:"pq2",title:"逆透视（宽表转长表）",scenario:"将按月份展开的宽表转换为适合分析的长表格式",prompt:"我的数据是宽格式：A列=产品名，B-M列分别是1月到12月的销售额。我需要转换为长格式（产品名、月份、销售额三列），以便做数据透视分析。请提供：[1] Power Query 逆透视（Unpivot）的操作步骤；[2] 用 M 语言写出等效代码；[3] 对应的 Excel 公式方法（STACK/TOCOL，Excel 365）；[4] 说明宽表 vs 长表各自的适用场景。",tags:["逆透视","Unpivot","宽表长表","Power Query","TOCOL"],difficulty:"进阶",output:"宽转长 PQ操作步骤 + M代码 + 公式方案"},{id:"pq3",title:"多源数据关联清洗",scenario:"将 Excel、CSV、数据库的数据合并清洗",prompt:"我需要合并三个数据源：[1] Excel 文件的订单表；[2] CSV 格式的客户信息表；[3] SQL Server 数据库的产品表。请用 Power Query 实现：分别连接三个数据源的方法；用合并查询（Merge Queries）实现三表 JOIN（LEFT JOIN / INNER JOIN）；清洗步骤：去重、类型转换、空值处理；将结果加载到 Excel 表格 or 数据模型的选择建议；设置定时刷新或手动刷新时的权限配置。",tags:["Power Query","多数据源","Merge","SQL","JOIN"],difficulty:"专家",output:"多源数据 ETL 合并清洗完整方案"}]},{id:"report",name:"报告输出与协作",icon:"📋",color:"text-amber-700",bgColor:"bg-amber-50",borderColor:"border-amber-200",description:"模板设计、打印优化、保护、版本管理",prompts:[{id:"r1",title:"专业报告模板设计",scenario:"制作可复用的标准化 Excel 报告模板",prompt:"我需要设计一套企业月度财务报告的 Excel 模板，要求：专业、可复用、自动化。请提供：[1] 封面页设计（公司Logo占位、报告期自动显示、目录超链接）；[2] 数据输入区与展示区分离的工作表结构设计；[3] 用命名区域和结构化表格组织数据源；[4] 用保护工作表（只允许输入特定区域）防止误操作；[5] 页眉页脚设置（每页显示页码、公司名、日期）和打印区域设置。",tags:["模板设计","工作表保护","打印设置","命名区域","页眉页脚"],difficulty:"进阶",output:"专业报告模板设计完整方案"},{id:"r2",title:"批量生成个性化文档",scenario:"根据数据批量生成工资条、证书、通知单等",prompt:"我有员工数据表（姓名、工号、部门、工资、绩效等），需要批量生成每人独立的工资条。请提供：[1] 用 VBA 遍历数据并将模板复制+填入数据的代码；[2] 将每个工资条导出为独立 PDF 的代码（以员工姓名命名）；[3] Word 邮件合并调用 Excel 数据的方法（作为对比方案）；[4] 如何在生成的 PDF 上添加水印（「保密」字样）的 VBA 实现。",tags:["VBA","工资条","批量PDF","邮件合并","水印"],difficulty:"专家",output:"批量文档生成 + PDF导出 VBA完整代码"},{id:"r3",title:"数据保护与权限控制",scenario:"不同人员只能查看和编辑自己权限范围内的数据",prompt:"我的工作簿需要分权限管理：销售人员只能看到自己的数据；主管可以看到全区域数据但不能修改；管理员有完全权限。请提供：[1] 工作表保护+允许范围编辑的设置步骤；[2] 用 VBA 实现基于用户名（Environ(USERNAME)）的自动行隐藏/显示；[3] 工作簿加密（打开密码 + 修改密码）的设置；[4] 如何用 VBA 在打开文件时自动验证用户并切换显示模式。",tags:["数据保护","权限控制","VBA","工作表保护","加密"],difficulty:"专家",output:"分级权限控制 VBA 实现方案"}]},{id:"modern-formula",name:"现代函数与高阶公式",icon:"🚀",color:"text-sky-700",bgColor:"bg-sky-50",borderColor:"border-sky-200",description:"LET、LAMBDA、MAP/REDUCE、高阶递归与动态数组",prompts:[{id:"mf1",title:"LET 变量声明与重构",scenario:"公式中存在大量重复计算，导致 Excel 卡顿、公式臃肿难读",prompt:"我有一个复杂的计算公式，需要在多处重复计算相同的 VLOOKUP/MATCH 子公式。请提供：[1] 解释 LET 函数的语法，并给出如何将重复子公式提取为局部变量的重构示例；[2] 性能对比（重复计算 vs 局部变量缓存）；[3] 示例：计算销售额并根据梯度返回提成比例，同时排除非数值错误的重构公式。",tags:["LET","变量","公式重构","性能优化"],difficulty:"进阶",output:"LET 提取局部变量与优化模板"},{id:"mf2",title:"LAMBDA 自定义无代码函数",scenario:"需要创建自定义公式（如提取身份证年龄、计算特定折扣），但不想使用启用宏的 .xlsm 格式",prompt:"我想在 Excel 365 中使用 LAMBDA 创建一个名为「GetAgeFromID」的自定义函数，直接从 18 位身份证中提取当前年龄，并在名称管理器中注册。请提供：[1] LAMBDA 函数声明语法与测试运行示例；[2] 如何在名称管理器中注册该函数以支持全局调用；[3] 如何在函数中内置参数说明与自文档化；[4] 说明 LAMBDA vs 传统 VBA 宏的优缺点及文件格式兼容性。",tags:["LAMBDA","自定义函数","名称管理器","身份证解析"],difficulty:"专家",output:"LAMBDA 声明与全局注册指南"},{id:"mf3",title:"MAP & REDUCE 高阶数组迭代",scenario:"对某一区域的每一行或每一列执行相同的复杂公式，并返回动态数组结果",prompt:"我的 A 列是销售额列表，B 列是目标额。我需要用单个单元格公式（Spill 溢出）计算每一行的达成率，如果达成率大于 100% 则计算奖金。请提供：[1] 用 MAP 对数组进行逐行迭代计算的公式；[2] 用 REDUCE 累计计算符合特定条件的销售额总和的公式；[3] 解释 MAP/REDUCE 与传统 Ctrl+Shift+Enter 数组公式的本质差异。",tags:["MAP","REDUCE","动态数组","溢出公式","Spill"],difficulty:"专家",output:"MAP & REDUCE 高阶迭代应用示例"},{id:"mf4",title:"SCAN 状态机与累加计算",scenario:"需要计算库存流水中的滚动累计余额（Running Total）",prompt:"我的 A 列是每日库存入库/出库变动值（正负数），需要在 B 列自动生成滚动的累计余额（Running Total）。请提供：[1] 使用 SCAN 函数实现累计余额的动态溢出公式；[2] 当数据行数动态增加时，公式如何利用 OFFSET 或 TOCOL 自动扩展；[3] 对比传统累加公式（如 `SUM($A$2:A2)`）在 10 万行数据下的性能与计算开销差异。",tags:["SCAN","Running Total","累计余额","动态扩展"],difficulty:"专家",output:"SCAN 滚动累计余额公式与性能对比"}]}],_i={基础:{color:"text-emerald-700",bg:"bg-emerald-100",border:"border-emerald-300"},进阶:{color:"text-blue-700",bg:"bg-blue-100",border:"border-blue-300"},专家:{color:"text-purple-700",bg:"bg-purple-100",border:"border-purple-300"}},X=[{id:"init",module:"M1",moduleNumber:1,title:"仓库初始化",subtitle:"Repository Initialization",icon:"🏗️",color:"violet",bgGradient:"from-violet-500 to-purple-600",badgeColor:"bg-violet-100 text-violet-700 border-violet-200",scenario:"适用场景：新项目首次接入 Git，或从零建立远程仓库",tags:["git init","remote",".gitignore","首次提交"],prompt:`请使用 **Git** 初始化当前项目，完成以下操作：

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

本项目远程仓库地址：<REPO_URL>`,steps:[{title:"初始化本地仓库",items:["在项目根目录执行 `git init`","确认 `.git` 目录已生成","设置默认分支名称为 `main`"]},{title:"配置 .gitignore",items:["根据技术栈自动生成 `.gitignore`","排除 node_modules/、dist/、.env*","排除 IDE 配置与系统文件"]},{title:"完成首次提交",items:["执行 `git add .` 暂存所有文件",'提交信息：`"chore: initial project setup"`',"确认提交历史存在"]},{title:"关联远程仓库",items:["执行 `git remote add origin <REPO_URL>`","执行 `git push -u origin main`","执行 `git remote -v` 验证"]}]},{id:"daily-commit",module:"M2",moduleNumber:2,title:"日常变更提交",subtitle:"Daily Change Commit",icon:"📝",color:"blue",bgGradient:"from-blue-500 to-cyan-600",badgeColor:"bg-blue-100 text-blue-700 border-blue-200",scenario:"适用场景：完成功能开发或修复后，将变更提交到本地/远程仓库",tags:["git add","commit","status","diff","Conventional Commits"],prompt:`请使用 **Git** 管理当前项目，完成以下操作：

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
   * 若遇到冲突，先执行 \`git pull --rebase\` 再推送。`,steps:[{title:"扫描变更",items:["执行 `git status` 查看文件状态","执行 `git diff` 理解具体改动","更新 `.gitignore` 排除无关文件"]},{title:"编写 Commit Message",items:["遵循 Conventional Commits 规范","type: feat/fix/docs/style/refactor/test/chore","格式：`<type>(<scope>): <subject>`"]},{title:"提交代码",items:["分模块使用 `git add <file>` 精准暂存",'执行 `git commit -m "<message>"`',"执行 `git log --oneline -5` 验证"]},{title:"推送到远程",items:["执行 `git push` 同步到远端","冲突时先执行 `git pull --rebase`","确认远端仓库已更新"]}]},{id:"branch",module:"M3",moduleNumber:3,title:"分支管理",subtitle:"Branch Management",icon:"🌿",color:"green",bgGradient:"from-green-500 to-emerald-600",badgeColor:"bg-green-100 text-green-700 border-green-200",scenario:"适用场景：开发新功能、修复 Bug、进行实验性改动时使用独立分支隔离",tags:["branch","checkout","merge","rebase","feature branch"],prompt:'请使用 **Git** 管理分支，完成以下操作：\n\n1. **创建功能分支**\n   * 从最新的 `main` 分支切出新分支：`git checkout -b <type>/<name>`\n   * 分支命名规范：feature/xxx、fix/xxx、hotfix/xxx、release/x.x.x、chore/xxx\n   * 确认当前在正确分支上：`git branch --show-current`\n\n2. **在分支上开发提交**\n   * 按照日常变更提交规范（M2）在功能分支上进行开发。\n   * 定期执行 `git push -u origin <branch>` 推送分支到远端备份。\n\n3. **同步主干变更（可选）**\n   * 若主干有更新，执行 `git rebase main` 将分支基点移至最新 main。\n   * 解决所有冲突后执行 `git rebase --continue`。\n\n4. **合并分支**\n   * 切回主分支：`git checkout main`\n   * 执行合并：`git merge --no-ff <branch> -m "merge: <branch> into main"`\n   * 推送合并结果：`git push origin main`\n\n5. **清理分支**\n   * 删除本地分支：`git branch -d <branch>`\n   * 删除远程分支：`git push origin --delete <branch>`\n   * 执行 `git branch -a` 确认清理完成。',steps:[{title:"创建功能分支",items:["从最新 main 切出：`git checkout -b <type>/<name>`","命名规范：feature/ fix/ hotfix/ release/","确认当前分支：`git branch --show-current`"]},{title:"在分支上开发",items:["按 M2 规范进行提交","定期推送到远端备份","保持分支专注单一职责"]},{title:"同步主干变更",items:["执行 `git rebase main` 变基","解决冲突后 `git rebase --continue`","保持分支与主干同步"]},{title:"合并与清理",items:["执行 `git merge --no-ff <branch>`","删除本地和远程已合并分支","执行 `git branch -a` 验证"]}]},{id:"sync",module:"M4",moduleNumber:4,title:"远程同步",subtitle:"Remote Synchronization",icon:"🔄",color:"orange",bgGradient:"from-orange-500 to-amber-600",badgeColor:"bg-orange-100 text-orange-700 border-orange-200",scenario:"适用场景：多人协作或多设备开发时，需要拉取远程最新代码并处理冲突",tags:["pull","fetch","push","rebase","conflict","协作"],prompt:`请使用 **Git** 完成远程同步，操作如下：

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

本项目远程仓库地址：<REPO_URL>`,steps:[{title:"拉取远程更新",items:["执行 `git fetch origin` 获取远端状态","执行 `git pull --rebase origin main`","保持提交历史线性整洁"]},{title:"冲突处理",items:["列出冲突文件并逐一解决","解决 `<<<<< ===== >>>>>` 标记","执行 `git rebase --continue`"]},{title:"推送到远程",items:["执行 `git push origin <branch>`","若被拒绝则重新 pull --rebase","确认远端已更新"]},{title:"验证同步结果",items:["执行 `git log --oneline --graph -10`","执行 `git diff origin/main` 确认一致","无差异输出即同步成功"]}]},{id:"cicd",module:"M5",moduleNumber:5,title:"CI/CD 自动化部署",subtitle:"CI/CD & GitHub Pages",icon:"🚀",color:"pink",bgGradient:"from-pink-500 to-rose-600",badgeColor:"bg-pink-100 text-pink-700 border-pink-200",scenario:"适用场景：配置自动化构建、测试与部署流水线，发布到 GitHub Pages 或其他平台",tags:["GitHub Actions","workflow","GitHub Pages","vite base","deploy"],prompt:'请帮我配置 **GitHub Pages 自动部署（CI/CD）流水线**，完成以下操作步骤：\n\n1. **配置 Vite Base 路径**\n   * 打开项目中的 `vite.config.ts` 或 `vite.config.js`。\n   * 在配置对象中添加 `base: \'/<REPO_NAME>/\'` 属性（将 `<REPO_NAME>` 替换为你在 GitHub 上的真实仓库名），防止在 GitHub Pages 部署后因为相对路径错误导致 CSS、JS 等静态资源出现 404 加载失败。\n\n2. **创建 GitHub Actions 工作流配置文件**\n   * 在项目根目录下创建目录 `.github/workflows/`。\n   * 在该目录下创建配置文件 `deploy.yml`，写入自动化构建与部署脚本。\n   * 配置工作流触发条件为：当代码推送（push）到 `main` 分支时自动执行。\n   * 工作流步骤应包含：拉取代码、配置 Node.js 环境、安装依赖（`npm ci`）、运行测试、编译项目（`npm run build`）、以及使用官方推荐的 Actions（如 `peaceiris/actions-gh-pages`）将 `dist` 目录发布到 `gh-pages` 分支。\n\n3. **提交与推送到远程仓库**\n   * 执行 `git add .github/workflows/deploy.yml vite.config.ts` 暂存修改。\n   * 使用规范的信息进行提交：`git commit -m "ci: configure automated build and deployment to github pages"`。\n   * 推送代码：`git push origin main`，并在 GitHub 仓库的 "Actions" 标签页实时监控编译部署状态。\n\n4. **开启 GitHub Pages 选项**\n   * 进入 GitHub 仓库设置 (Settings) -> Pages，将 Build and deployment 的 Source 设置为 "Deploy from a branch"，并选择 `gh-pages` 分支及 `/ (root)` 目录进行发布。\n\n本项目配置信息：\n- 仓库名称：`<REPO_NAME>`\n- 远程仓库地址：`<REPO_URL>`\n- 预览部署地址：`https://<USERNAME>.github.io/<REPO_NAME>/`',steps:[{title:"配置 Vite base 路径",items:["修改 `vite.config.ts` 添加 `base: '/<REPO_NAME>/'`","避免静态资源 404 导致页面空白","确认 `build.outDir` 为 `dist`"]},{title:"生成 Workflow 文件",items:["创建 `.github/workflows/deploy.yml`","触发条件：push 到 main 分支","使用 `peaceiris/actions-gh-pages` 部署"]},{title:"检查 .gitignore",items:["确保 `dist/` 已被忽略","确保 `node_modules/` 已被忽略","确保 `.env*` 已被忽略"]},{title:"推送并验证",items:["执行 `git add . && git commit -m 'ci: ...' && git push`","Settings → Pages → Source 选 gh-pages","访问部署地址确认页面正常"]}]},{id:"rollback",module:"M6",moduleNumber:6,title:"版本回滚与恢复",subtitle:"Rollback & Recovery",icon:"⏪",color:"red",bgGradient:"from-red-500 to-orange-600",badgeColor:"bg-red-100 text-red-700 border-red-200",scenario:"适用场景：误操作、线上故障、需要撤销提交或恢复删除文件时",tags:["revert","reset","reflog","stash","cherry-pick","回滚"],prompt:"请使用 **Git** 完成版本回滚与恢复操作，支持以下场景：\n\n1. **场景 A：安全撤销单次提交记录（Revert）**\n   * 适用：错误修改已推送到远程共享分支，需在保留历史的前提下取消该修改。\n   * 命令：执行 `git revert <COMMIT_HASH>`，这会创建一个新的提交来反向操作指定提交的代码变动。\n   * 解决潜在的合并冲突后，执行 `git commit`，随后通过 `git push origin main` 将撤销操作安全同步到远端。\n\n2. **场景 B：重置本地工作区（Reset）**\n   * 适用：本地代码逻辑写乱，或需强制撤销尚未推送到远端的多条提交记录。\n   * 软重置（保留工作区改动）：执行 `git reset --soft HEAD~N`（将本地 HEAD 往回移动 N 个版本，所有改动保留在暂存区）。\n   * 硬重置（完全抹去改动）：执行 `git reset --hard <COMMIT_HASH>`（强制清空工作区与暂存区到指定的历史快照，注意此操作不可逆，请先通过 `git stash` 备份未提交内容）。\n\n3. **场景 C：误删分支或提交找回（Reflog）**\n   * 适用：执行了 `git reset --hard` 导致未推送的提交丢失，或本地删除了尚未合并的分支。\n   * 执行 `git reflog` 查看本地 HEAD 的每一次变更指针移动日志。\n   * 定位到误操作前的 commit hash，执行 `git checkout -b recover-branch <LOST_COMMIT_HASH>` 即可完整找回丢失的分支与修改。\n\n4. **场景 D：单文件级时光机（Checkout）**\n   * 适用：仅想恢复某个特定文件到之前的某次稳定提交状态，不影响其他文件。\n   * 命令：执行 `git checkout <COMMIT_HASH> -- <FILE_PATH>`，确认文件内容回滚后执行暂存和提交。",steps:[{title:"查看历史记录",items:["执行 `git log --oneline --graph -20`","执行 `git reflog` 查看所有操作记录","定位目标 commit hash"]},{title:"安全回滚（推荐）",items:["执行 `git revert <commit-hash>`","生成撤销提交，不删除历史","推送：`git push origin main`"]},{title:"强制回滚（谨慎）",items:["软回滚：`git reset --soft HEAD~N`","硬回滚：`git reset --hard <hash>`","强推：`git push --force-with-lease`"]},{title:"恢复与移植",items:["恢复文件：`git checkout <hash> -- <file>`","Cherry-pick：`git cherry-pick <hash>`","Stash 恢复：`git stash pop`"]}]},{id:"audit",module:"M7",moduleNumber:7,title:"仓库审计与维护",subtitle:"Repository Audit & Maintenance",icon:"🔍",color:"teal",bgGradient:"from-teal-500 to-cyan-600",badgeColor:"bg-teal-100 text-teal-700 border-teal-200",scenario:"适用场景：定期健康检查、清理冗余数据、规范提交历史、保障仓库质量",tags:["audit","clean","tag","release","blame","log","维护"],prompt:'请使用 **Git** 对当前项目仓库进行深度的健康审计与日常维护，完成以下工作：\n\n1. **仓库状态健康检查**\n   * 执行 `git status`，检查当前工作区是否干净，确认无未跟踪（untracked）或未清理的临时脏文件。\n   * 执行 `git branch -a`，理清所有本地与远程分支结构，识别不再使用的冗余分支。\n   * 执行 `git remote show origin`，核对与远程仓库的关联状态和分支映射是否健康。\n\n2. **清理过期冗余分支与悬空对象**\n   * 执行 `git branch --merged main` 列出所有已合并到主干的本地功能分支。\n   * 安全删除已合并的本地开发分支：`git branch -d <BRANCH_NAME>`。\n   * 清理本地已失效的远程追踪指针：`git fetch --prune`。\n   * 彻底清空缓存，压缩数据库并回收空间：`git gc --prune=now --aggressive`。\n\n3. **规范提交历史审计**\n   * 执行 `git log --oneline --graph -15` 审计提交线图是否清晰。\n   * 使用作者过滤审查个人提交占比：`git shortlog -sn --all`。\n   * 扫描提交历史中是否存在泄露的密码、API Key 等敏感文件，如有，需立即使用 `git-filter-repo` 工具重写历史。\n\n4. **版本标记与里程碑发布**\n   * 遵循语义化版本规范（Semantic Versioning, SemVer），为当前稳定版本创建附注标签：`git tag -a v1.0.0 -m "release: stable version 1.0.0 with full documentation"`。\n   * 将新建标签安全推送到远端：`git push origin --tags`。',steps:[{title:"仓库健康检查",items:["执行 `git status` 确认工作区干净","执行 `git branch -a` 识别过期分支","执行 `git log --oneline -10` 检查规范性"]},{title:"清理冗余数据",items:["删除已合并的本地分支","清理远端已删除的追踪分支","执行 `git gc --prune=now` 压缩空间"]},{title:"标签与版本发布",items:["创建语义化标签：`git tag -a v<x.y.z>`","推送标签：`git push origin --tags`","遵循 SemVer 版本规范"]},{title:"提交历史审计",items:["统计成员提交：`git shortlog -sn`","按关键词搜索：`git log --grep='<keyword>'`","扫描敏感信息防止泄露"]}]}],$=[{id:"creation",label:"创作生成",icon:"✍️",color:"violet",frameworks:[{id:"role-scene-task",name:"RST 框架",nameEn:"Role · Scene · Task",tagline:"角色定义 × 场景锚定 × 任务驱动",scene:"适合内容创作、文案生成、故事写作",color:"violet",gradient:"from-violet-500 to-purple-600",icon:"🎭",blocks:[{key:"role",label:"角色 Role",description:"赋予 AI 明确的专家身份，激活对应知识域",placeholder:"例：你是一位拥有 10 年经验的科技媒体主编，擅长将复杂技术转化为大众易懂的叙事",required:!0},{key:"scene",label:"场景 Scene",description:"设定背景与受众，让输出精准对焦",placeholder:"例：面向 25-35 岁城市白领读者，平台为微信公众号，阅读时长约 3 分钟",required:!0},{key:"task",label:"任务 Task",description:"清晰描述要完成的具体工作与输出形式",placeholder:"例：撰写一篇关于 AI Agent 的深度科普文章，含 3 个实际应用案例，结尾有行动号召",required:!0}],example:{role:"你是一位拥有 10 年经验的科技媒体主编，擅长将复杂技术转化为大众易懂的叙事",scene:"面向 25-35 岁城市白领读者，平台为微信公众号，阅读时长约 3 分钟",task:"撰写一篇关于 AI Agent 的深度科普文章，含 3 个实际应用案例，结尾有行动号召"},tips:["角色越具体，输出风格越稳定——加入年限、领域、风格偏好","场景中明确受众画像可大幅减少返修次数","任务中加入「输出格式」约束（字数/结构/语气）"]},{id:"aida",name:"AIDA 框架",nameEn:"Attention · Interest · Desire · Action",tagline:"注意力 × 兴趣 × 欲望 × 行动",scene:"适合营销文案、产品推广、说服性写作",color:"rose",gradient:"from-rose-500 to-pink-600",icon:"📣",blocks:[{key:"attention",label:"注意 Attention",description:"描述目标产品/服务及其核心亮点",placeholder:"例：一款专为程序员设计的 AI 代码审查工具，减少 60% Bug 遗漏",required:!0},{key:"audience",label:"受众 Audience",description:"定义目标用户的痛点与场景",placeholder:"例：中小型创业团队的技术负责人，团队 5-20 人，代码质量参差不齐",required:!0},{key:"tone",label:"语气 Tone",description:"设定文案的情绪基调",placeholder:"例：专业可信、稍带紧迫感，避免过度夸大",required:!1},{key:"cta",label:"行动号召 CTA",description:"明确期望用户完成的动作",placeholder:"例：引导用户点击「免费试用 14 天」按钮",required:!0}],example:{attention:"一款专为程序员设计的 AI 代码审查工具，减少 60% Bug 遗漏",audience:"中小型创业团队的技术负责人，团队 5-20 人，代码质量参差不齐",tone:"专业可信、稍带紧迫感，避免过度夸大",cta:"引导用户点击「免费试用 14 天」按钮"},tips:["用真实数据替代形容词（「60% 提升」比「大幅提升」有力得多）","痛点描述要击中情绪，欲望部分要点亮解决方案的美好图景","CTA 越具体越好，避免「了解更多」等模糊动作"]}]},{id:"analysis",label:"分析推理",icon:"🧠",color:"blue",frameworks:[{id:"cot",name:"CoT 框架",nameEn:"Chain of Thought",tagline:"分步推理 × 显式过程 × 可验证结论",scene:"适合复杂推断、数学逻辑、决策分析",color:"blue",gradient:"from-blue-500 to-cyan-600",icon:"🔗",blocks:[{key:"problem",label:"问题 Problem",description:"清晰陈述需要推理或解决的问题",placeholder:"例：分析一家月流水 200 万的本地餐饮品牌，是否值得向全国连锁化扩张",required:!0},{key:"constraints",label:"约束 Constraints",description:"给定已知条件与限制范围",placeholder:"例：当前资金储备 800 万，团队 30 人，无供应链管理经验，计划 18 个月内开 20 家门店",required:!0},{key:"steps",label:"推理指令 Steps",description:"要求 AI 分步展示思考过程",placeholder:"例：请按「市场分析 → 财务测算 → 风险识别 → 综合结论」逐步推理，每步给出关键判断依据",required:!0},{key:"output",label:"输出格式 Output",description:"指定最终呈现结构",placeholder:"例：最终给出「建议 / 谨慎建议 / 不建议」三选一结论，并列出 TOP3 关键风险",required:!1}],example:{problem:"分析一家月流水 200 万的本地餐饮品牌，是否值得向全国连锁化扩张",constraints:"当前资金储备 800 万，团队 30 人，无供应链管理经验，计划 18 个月内开 20 家门店",steps:"请按「市场分析 → 财务测算 → 风险识别 → 综合结论」逐步推理，每步给出关键判断依据",output:"最终给出「建议 / 谨慎建议 / 不建议」三选一结论，并列出 TOP3 关键风险"},tips:["加入「请先思考，再输出」可显著提升推理质量","约束条件越精确，推理越贴合实际——避免「大概」「可能」等模糊量词","要求 AI 在结尾「检验结论」可减少逻辑跳跃"]},{id:"mece-analysis",name:"MECE 框架",nameEn:"Mutually Exclusive · Collectively Exhaustive",tagline:"相互独立 × 完全穷尽 × 结构化拆解",scene:"适合问题拆解、结构化报告、战略规划",color:"indigo",gradient:"from-indigo-500 to-blue-600",icon:"🗂️",blocks:[{key:"topic",label:"主题 Topic",description:"需要被 MECE 拆解的核心议题",placeholder:"例：企业数字化转型失败的原因",required:!0},{key:"dimension",label:"拆解维度 Dimension",description:"指定分析视角或分类框架",placeholder:"例：从「人员 / 流程 / 技术 / 文化」四个维度拆解，每个维度下不超过 4 个子项",required:!0},{key:"depth",label:"深度 Depth",description:"控制分析的层级与详细程度",placeholder:"例：二级结构，每个子项配一个真实企业案例佐证",required:!1},{key:"format",label:"呈现形式 Format",description:"指定输出的可视化或文档结构",placeholder:"例：以 Markdown 大纲格式输出，可直接复制为 PPT 提纲",required:!1}],example:{topic:"企业数字化转型失败的原因",dimension:"从「人员 / 流程 / 技术 / 文化」四个维度拆解，每个维度下不超过 4 个子项",depth:"二级结构，每个子项配一个真实企业案例佐证",format:"以 Markdown 大纲格式输出，可直接复制为 PPT 提纲"},tips:["明确告知 AI「请确保各维度之间无重叠、无遗漏」可触发自检行为","预设维度框架（如 4P/SWOT/麦肯锡 7S）比让 AI 自由拆解更稳定","加入「请列出你的分类逻辑」可验证 MECE 质量"]}]},{id:"code",label:"代码工程",icon:"💻",color:"emerald",frameworks:[{id:"spec-code",name:"SPEC 框架",nameEn:"Spec · Pattern · Edge · Check",tagline:"规格说明 × 设计模式 × 边界处理 × 验证标准",scene:"适合代码生成、架构设计、技术方案评审",color:"emerald",gradient:"from-emerald-500 to-teal-600",icon:"⚙️",blocks:[{key:"spec",label:"规格 Spec",description:"精确描述功能需求与技术栈",placeholder:"例：用 TypeScript + React 实现一个支持多选、搜索过滤的下拉组件，兼容键盘导航",required:!0},{key:"pattern",label:"设计模式 Pattern",description:"指定架构风格、代码规范或参考实现",placeholder:"例：遵循 Compound Component 模式，导出 Select/Select.Option/Select.Tag 子组件",required:!1},{key:"edge",label:"边界条件 Edge",description:"列举需要特殊处理的异常与边缘情况",placeholder:"例：处理空列表/超长选项文字截断/超过 100 项时虚拟滚动/禁用态",required:!0},{key:"check",label:"验证标准 Check",description:"定义代码质量的验收条件",placeholder:"例：附带 Jest 单元测试，覆盖率 > 80%；提供 Storybook 示例；TypeScript 无 any",required:!1}],example:{spec:"用 TypeScript + React 实现一个支持多选、搜索过滤的下拉组件，兼容键盘导航",pattern:"遵循 Compound Component 模式，导出 Select/Select.Option/Select.Tag 子组件",edge:"处理空列表/超长选项文字截断/超过 100 项时虚拟滚动/禁用态",check:"附带 Jest 单元测试，覆盖率 > 80%；提供 Storybook 示例；TypeScript 无 any"},tips:["精确的技术栈约束（版本号）能避免 AI 使用已废弃 API","边界条件是代码质量的分水岭——提前列举等于把 Code Review 提前做了","要求附带测试用例可倒逼 AI 产出更严谨的实现"]},{id:"debug",name:"BFS 框架",nameEn:"Bug · Fix · Safeguard",tagline:"问题定位 × 修复方案 × 防护加固",scene:"适合 Debug 调试、性能优化、代码重构",color:"orange",gradient:"from-orange-500 to-amber-600",icon:"🔍",blocks:[{key:"bug",label:"问题描述 Bug",description:"精确描述现象、错误信息与复现路径",placeholder:"例：React 列表渲染时，删除中间项后末尾项的 input 状态丢失。错误：controlled/uncontrolled warning。复现：点击第 3 项删除按钮",required:!0},{key:"context",label:"上下文 Context",description:"提供相关代码片段、依赖版本、环境信息",placeholder:"例：React 18.2，列表用 index 作为 key，状态存在父组件 useState 数组中（粘贴代码）",required:!0},{key:"fix",label:"修复要求 Fix",description:"指定修复的范围与约束",placeholder:"例：只修改列表渲染逻辑，不重构状态管理，保持原有 API 不变",required:!1},{key:"safeguard",label:"防护措施 Safeguard",description:"要求说明如何避免同类问题再次出现",placeholder:"例：解释根因，并给出 ESLint 规则或代码审查检查点，防止同类 Bug",required:!1}],example:{bug:"React 列表渲染时，删除中间项后末尾项的 input 状态丢失。错误：controlled/uncontrolled warning。复现：点击第 3 项删除按钮",context:"React 18.2，列表用 index 作为 key，状态存在父组件 useState 数组中",fix:"只修改列表渲染逻辑，不重构状态管理，保持原有 API 不变",safeguard:"解释根因，并给出 ESLint 规则或代码审查检查点，防止同类 Bug"},tips:["「复现步骤」是 Debug 提示词的核心——越详细越快定位","粘贴真实报错信息（不要截图描述），AI 能精准匹配错误模式","要求「解释根因」比只要「给修复」价值高 3 倍"]}]},{id:"learning",label:"学习研究",icon:"📚",color:"amber",frameworks:[{id:"feynman",name:"费曼框架",nameEn:"Feynman · Analogy · Gap · Reinforce",tagline:"简化表达 × 类比迁移 × 认知缺口 × 强化巩固",scene:"适合概念学习、知识内化、教学设计",color:"amber",gradient:"from-amber-500 to-yellow-500",icon:"🎓",blocks:[{key:"concept",label:"概念 Concept",description:"指定需要深度理解的知识点",placeholder:"例：Transformer 注意力机制中的 Query-Key-Value 计算过程",required:!0},{key:"level",label:"认知水平 Level",description:"定义学习者的背景知识基准",placeholder:"例：我有 Python 基础和高中数学，但没有深度学习经验",required:!0},{key:"analogy",label:"类比要求 Analogy",description:"指定希望借助的类比领域或日常场景",placeholder:"例：用「图书馆检索系统」或「考试答题」的类比来解释",required:!1},{key:"check",label:"自测题 Check",description:"要求生成验证理解的练习题",placeholder:"例：解释完后出 3 道判断题，帮我验证是否真正理解，并给出答案解析",required:!1}],example:{concept:"Transformer 注意力机制中的 Query-Key-Value 计算过程",level:"我有 Python 基础和高中数学，但没有深度学习经验",analogy:"用「图书馆检索系统」或「考试答题」的类比来解释",check:"解释完后出 3 道判断题，帮我验证是否真正理解，并给出答案解析"},tips:["精确描述认知水平是适配输出难度的关键，比「简单解释」有效 10 倍","要求类比后「回归原概念」可避免类比过度导致的误解","自测题 + 答案是构建「主动回忆」的最佳实践"]},{id:"research",name:"PICO 框架",nameEn:"Problem · Intervention · Comparison · Outcome",tagline:"问题定义 × 干预方案 × 对比基线 × 预期结果",scene:"适合研究调研、竞品分析、方案评估",color:"teal",gradient:"from-teal-500 to-cyan-600",icon:"🔬",blocks:[{key:"problem",label:"问题 Problem",description:"定义研究的核心问题与范围边界",placeholder:"例：SaaS 产品免费试用转付费率低于 5% 的根本原因",required:!0},{key:"intervention",label:"干预 Intervention",description:"描述待评估的方案 or 变量",placeholder:"例：评估「缩短试用期从 14 天到 7 天」+ 「增加使用量上限提醒」两种干预",required:!0},{key:"comparison",label:"对比 Comparison",description:"指定基线或竞品作为参照",placeholder:"例：对比 Notion、Linear、Figma 的 freemium 转化策略",required:!1},{key:"outcome",label:"结果 Outcome",description:"定义成功的衡量指标",placeholder:"例：转化率提升 > 2%，NPS 不下降，CAC 增幅 < 15%",required:!0}],example:{problem:"SaaS 产品免费试用转付费率低于 5% 的根本原因",intervention:"评估「缩短试用期从 14 天到 7 天」+ 「增加使用量上限提醒」两种干预",comparison:"对比 Notion、Linear、Figma 的 freemium 转化策略",outcome:"转化率提升 > 2%，NPS 不下降，CAC 增幅 < 15%"},tips:["用数字锚定「结果」（而非「有所提升」）可让分析更有价值","「对比基线」是研究质量的底线——没有对比就没有洞察","输出要求加入「置信度」评估可识别 AI 的推测成分"]}]},{id:"productivity",label:"效率决策",icon:"⚡",color:"slate",frameworks:[{id:"scqa",name:"SCQA 框架",nameEn:"Situation · Complication · Question · Answer",tagline:"情境 × 冲突 × 疑问 × 解答",scene:"适合商业汇报、方案陈述、说服沟通",color:"slate",gradient:"from-slate-600 to-gray-700",icon:"📊",blocks:[{key:"situation",label:"情境 Situation",description:"描述当前已知的稳定背景事实",placeholder:"例：我司电商 APP 月活 500 万，近 6 个月 GMV 停滞在 2 亿，增速落后行业均值 12%",required:!0},{key:"complication",label:"冲突 Complication",description:"指出打破平衡的关键变化或问题",placeholder:"例：竞品上线 AI 个性化推荐后，我司用户次日留存下降 8%，客单价下滑 15%",required:!0},{key:"question",label:"疑问 Question",description:"提炼需要回答的核心问题",placeholder:"例：我们应该在 Q3 优先投入 AI 推荐还是优化供应链效率？",required:!0},{key:"answer",label:"回答要求 Answer",description:"指定期望的输出结构与决策框架",placeholder:"例：请给出带有优先级排序的 3 个方案，每个方案附投入产出比估算和实施风险",required:!0}],example:{situation:"我司电商 APP 月活 500 万，近 6 个月 GMV 停滞在 2 亿，增速落后行业均值 12%",complication:"竞品上线 AI 个性化推荐后，我司用户次日留存下降 8%，客单价下滑 15%",question:"我们应该在 Q3 优先投入 AI 推荐还是优化供应链效率？",answer:"请给出带有优先级排序的 3 个方案，每个方案附投入产出比估算和实施风险"},tips:["情境只陈述「无争议事实」，不要混入判断或结论","冲突是整个框架的情感引爆点——要让听众感受到「不解决不行」","SCQA 结构本身就是一份完整的 PPT 提纲逻辑"]},{id:"constraints",name:"CRAFT 框架",nameEn:"Context · Role · Action · Format · Tone",tagline:"全要素元提示 · 通用万能框架",scene:"适合任意场景的精细化控制，尤其是高要求输出",color:"purple",gradient:"from-purple-600 to-violet-700",icon:"🛠️",blocks:[{key:"context",label:"背景 Context",description:"提供任务的完整上下文信息",placeholder:"例：我是一家 B2B SaaS 公司的产品经理，正在准备向 CTO 汇报 Q4 路线图",required:!0},{key:"role",label:"角色 Role",description:"赋予 AI 最匹配任务的专家身份",placeholder:"例：请扮演一位有 15 年经验的企业软件产品总监，熟悉 OKR 和敏捷开发",required:!0},{key:"action",label:"行动 Action",description:"精确描述需要完成的任务动作",placeholder:"例：帮我梳理 5 个核心功能的优先级，并为每个功能写一段 100 字以内的价值陈述",required:!0},{key:"format",label:"格式 Format",description:"指定输出的结构、长度、排版要求",placeholder:"例：用表格呈现（功能名 | 优先级 | 价值陈述 | 依赖条件），最后附 200 字执行摘要",required:!0},{key:"tone",label:"语气 Tone",description:"控制输出的风格、情绪与专业程度",placeholder:"例：正式专业，避免口语化；数据驱动，每个判断需有依据；结论先行",required:!1}],example:{context:"我是一家 B2B SaaS 公司的产品经理，正在准备向 CTO 汇报 Q4 路线图",role:"请扮演一位有 15 年经验的企业软件产品总监，熟悉 OKR 和敏捷开发",action:"帮我梳理 5 个核心功能的优先级，并为每个功能写一段 100 字以内的价值陈述",format:"用表格呈现（功能名 | 优先级 | 价值陈述 | 依赖条件），最后附 200 字执行摘要",tone:"正式专业，避免口语化；数据驱动，每个判断需有依据；结论先行"},tips:["CRAFT 是所有框架的「超集」——不确定用哪个框架时，默认用 CRAFT","Format 字段是最容易被忽略但回报最高的字段","Tone 中加入「反例」比「正例」更能精准锁定输出风格"]}]},{id:"business",label:"商业运营",icon:"💼",color:"sky",frameworks:[{id:"okr-design",name:"OKR 设计框架",nameEn:"Objective · Key Results · Initiatives",tagline:"战略目标 × 成果量化 × 行动协同",scene:"适合公司、团队或个人的 OKR 目标设定与路径拆解",color:"sky",gradient:"from-sky-500 to-blue-600",icon:"🎯",blocks:[{key:"objective",label:"目标 Objective",description:"设定定性、鼓舞人心且明确方向的核心目标",placeholder:"例：大幅提升产品用户体验，让新用户上手过程顺畅无阻",required:!0},{key:"key_results",label:"关键结果 Key Results",description:"用于衡量目标是否达成的定量化核心成果指标（建议 2-4 个）",placeholder:"例：1. 新用户次日留存率从 35% 提升至 45%；2. 新手入门流程的跳出率降低 30%；3. 用户首月活跃天数中位数提升至 12 天",required:!0},{key:"initiatives",label:"具体行动 Initiatives",description:"为了达成关键结果而必须实施的关键项目或策略动作",placeholder:"例：重构新手引导弹窗，提供渐进式操作教程；优化移动端登录流程，减少第三方验证等待时长",required:!0},{key:"alignment",label:"协同对齐 Alignment",description:"说明该目标如何与上层或其他兄弟团队的目标挂钩",placeholder:"例：对齐公司年度战略的「用户规模与黏性增长」；需技术部门协助优化接口响应时间",required:!1}],example:{objective:"大幅提升产品用户体验，让新用户上手过程顺畅无阻",key_results:`1. 新用户次日留存率从 35% 提升至 45%
2. 新手入门流程的跳出率降低 30%
3. 用户首月活跃天数中位数提升至 12 天`,initiatives:"重构新手引导弹窗，提供渐进式操作教程；优化移动端登录流程，减少第三方验证等待时长",alignment:"对齐公司年度战略的「用户规模与黏性增长」；需技术部门协助优化接口响应时间"},tips:["目标（O）必须是定性而非定量的，必须是鼓舞人心的","关键结果（KR）必须是可度量、可验证的数字或状态值","行动（Initiatives）是具体做的事，它服务于 KR 的达成，不可将 KR 与 Initiative 混淆"]},{id:"user-persona",name:"用户画像画布",nameEn:"Demographics · Pain Points · Scenarios · Prop",tagline:"背景特征 × 核心痛点 × 典型场景 × 价值契机",scene:"适合产品经理与市场运营进行目标受众分析和精准定位",color:"emerald",gradient:"from-emerald-500 to-teal-600",icon:"👥",blocks:[{key:"demographic",label:"用户属性 Demographics",description:"定义画像用户的基本社会背景、收入、地域、角色等",placeholder:"例：22-30 岁的职场新人，单身，居住在一二线城市，热衷尝试效率工具，月可支配收入 8k-1.5w",required:!0},{key:"pain_points",label:"痛点需求 Pain Points",description:"指出该群体在日常生活或工作上面临的最迫切麻烦或障碍",placeholder:"例：1. 工作任务繁杂，缺乏结构化整理，常常漏掉关键待办；2. 传统笔记软件加载慢、编辑卡顿；3. 缺乏自我驱动力，计划难以坚持",required:!0},{key:"scenarios",label:"使用场景 Scenarios",description:"描述用户会在何种具体时刻或情绪背景下使用此产品",placeholder:"例：早晨通勤地铁上用手机快速记下当天计划；工作会议期间用快捷键捕捉闪现的灵感；睡前进行一天的任务回顾",required:!0},{key:"proposition",label:"价值主张 Propositions",description:"我们的产品提供的什么独特特性能够完美契合或解决其痛点",placeholder:"例：秒级启动速度、支持 Markdown 语法、独特的「番茄钟+卡片看板」微习惯驱动系统",required:!1}],example:{demographic:"22-30 岁的职场新人，单身，居住在一二线城市，热衷尝试效率工具，月可支配收入 8k-1.5w",pain_points:`1. 工作任务繁杂，缺乏结构化整理，常常漏掉关键待办
2. 传统笔记软件加载慢、编辑卡顿
3. 缺乏自我驱动力，计划难以坚持`,scenarios:"早晨通勤地铁上用手机快速记下当天计划；工作会议期间用快捷键捕捉闪现灵感；睡前进行一天的任务回顾",proposition:"秒级启动速度、支持 Markdown 语法、独特的「番茄钟+卡片看板」微习惯驱动系统"},tips:["画像要具象化，可以想象出一个具有代表性的真实个体（给画像起个名字，如「职场新人小王」）","痛点要真实且聚焦，多从用户的心理感受和效率损耗切入","场景（Scenarios）必须具备时间、空间、状态或情绪细节"]}]}],Ai=[{dimension:"目标导向",values:["生成创作","分析推理","执行操作","学习内化"]},{dimension:"输入丰富度",values:["极简（一句话）","结构化（模板填写）","富文本（粘贴资料）","多模态（含图表）"]},{dimension:"输出精度要求",values:["探索发散","结构清晰","格式严格","可直接使用"]},{dimension:"迭代方式",values:["一次性输出","追问细化","对话式协作","批量生成"]}],Pi=[{icon:"🎯",title:"具体性原则",subtitle:"Specificity",desc:"用数字、名词、动词替代形容词。「写一篇 800 字的产品发布文案，面向 B 端采购决策者」优于「写一篇好文章」。",color:"blue"},{icon:"🔒",title:"约束性原则",subtitle:"Constraints",desc:"明确「不要做什么」与「边界在哪里」。负向约束往往比正向描述更高效锁定输出范围。",color:"rose"},{icon:"🔁",title:"可迭代原则",subtitle:"Iterability",desc:"好的提示词是「可填空模板」，变量部分用 {{变量}} 标注，复用时只替换变量即可。",color:"emerald"},{icon:"✅",title:"可验证原则",subtitle:"Verifiability",desc:"在提示词末尾加入验收标准：「输出前请自检是否满足以下条件…」可激活模型的自我审查机制。",color:"violet"},{icon:"🧩",title:"模块化原则",subtitle:"Modularity",desc:"将复杂任务拆分为多个子提示，分步执行并组合结果，比单一超长提示更稳定可控。",color:"amber"},{icon:"📐",title:"格式化原则",subtitle:"Formatting",desc:"显式指定输出格式（Markdown/JSON/表格/列表）比让 AI 自由发挥，排版一致性提升 90%。",color:"teal"}],W=[{id:1,title:"先想问题，不是先想代码",icon:"🎯",before:"这个用什么语法写？有没有现成代码能抄？",after:"这个问题本质是什么？输入是什么？输出是什么？",description:"没开窍时在找代码，开窍后在建模型。脑子里首先运转的是问题结构，而非语法细节。",elisp:{title:"先建模：用 plist 表达输入/输出",code:["(defun analyze-problem (input-spec output-spec constraints)",'  "先定义问题结构，再考虑实现。"',"  (list :input   input-spec","        :output  output-spec","        :edges   constraints","        :model   nil))","",";; 使用示例：先建模，再写逻辑","(let ((problem (analyze-problem","                '(:type list :element integer)",`                '(:type integer :desc "最大值")`,"                '(:empty-list nil :single identity))))",'  (message "问题已建模: %S" problem))'].join(`
`),explanation:"开窍的核心：先用数据结构表达问题的 shape，而不是直接动手写循环。Emacs Lisp 的 plist 天然适合描述半结构化问题模型。"}},{id:2,title:"拆问题，而非拼代码",icon:"🔧",before:"先写一大坨，跑不通再修，修着修着结构烂掉。",after:"先搭框架，先定义输入输出，先写最小可运行版本，再逐步扩展。",description:"编程能力最重要的不是写，而是拆。大问题拆成小问题，每一步都可验证。",elisp:{title:"递归拆解：分治思维的 Lisp 表达",code:[";;; 拆问题的经典体现：递归 = 拆成「当前层」+ 「剩余部分」","","(defun my-flatten (lst)",'  "将嵌套列表拍平——先想清楚子问题分类：',"  - 空列表 → 返回空","  - 头是原子 → 保留，递归处理尾",'  - 头是列表 → 先拍平头，再拍平尾"',"  (cond","   ((null lst) '())","   ((atom (car lst))","    (cons (car lst) (my-flatten (cdr lst))))","   (t","    (append (my-flatten (car lst))","            (my-flatten (cdr lst))))))","",";; 验证","(my-flatten '(1 (2 3) (4 (5 6))))",";; => (1 2 3 4 5 6)","",";; 关键：每个 cond 分支对应问题的一种「子形态」",";; 这就是拆问题，而不是靠 if-else 堆逻辑"].join(`
`),explanation:"Lisp 的 cond 结构天然鼓励你先穷举问题形态，再分别处理——这是「拆问题」思维的语法化表达。每个分支都是一个子问题。"}},{id:3,title:"理解抽象与复用",icon:"🧩",before:"登录用户A一份代码，用户B再复制一份，用户C再复制一份。",after:"用户名和密码是变量，登录流程是共性。抽成函数，区分不变结构与可变参数。",description:"开始区分：不变的结构 vs 可变的参数。这是抽象能力的萌芽。",elisp:{title:"高阶函数：抽象的利器",code:[";;; 没开窍：重复逻辑","(defun double-list (lst)","  (mapcar (lambda (x) (* 2 x)) lst))","(defun square-list (lst)","  (mapcar (lambda (x) (* x x)) lst))","",";;; 开窍后：抽象「对列表应用变换」这个模式","(defun transform-list (fn lst)",'  "将函数 FN 应用到列表 LST 的每个元素。',"  不变的结构：遍历 + 收集。",'  可变的参数：变换函数 FN。"',"  (mapcar fn lst))","",";; 复用同一结构，注入不同行为","(transform-list (lambda (x) (* 2 x))  '(1 2 3))  ; => (2 4 6)","(transform-list (lambda (x) (* x x))  '(1 2 3))  ; => (1 4 9)",`(transform-list #'number-to-string     '(1 2 3))  ; => ("1" "2" "3")`,"",";;; 闭包工厂：生成专用函数","(defun make-multiplier (n)",'  "工厂函数：生产「乘以N」的函数"',"  (lambda (x) (* n x)))","","(funcall (make-multiplier 3) 7)  ; => 21"].join(`
`),explanation:"高阶函数（mapcar、funcall、lambda）完美体现了抽象思维：把「做什么」和「怎么做」分离。make-multiplier 是闭包工厂，体现了「生产行为」的抽象层级。"}},{id:4,title:"重视数据结构选择",icon:"🗂️",before:"只盯流程，怎么一步一步做。数据结构随便用，逻辑绕一圈又一圈。",after:"去重想到 set，映射想到 dict，层级关系想到嵌套结构。数据表示好，代码自然简单。",description:"很多代码复杂，不是因为逻辑复杂，而是因为数据表示得太差。",elisp:{title:"哈希表 vs 关联列表：选对结构",code:[";;; 场景：统计单词频率","",";;; 方式一（没开窍）：alist，O(n) 查找，逻辑冗长","(defun count-words-alist (words)","  (let ((counts '()))","    (dolist (word words counts)","      (let ((entry (assoc word counts)))","        (if entry","            (setcdr entry (1+ (cdr entry)))","          (push (cons word 1) counts))))))","",";;; 方式二（开窍后）：哈希表，O(1) 查找，意图清晰","(defun count-words-hash (words)",'  "用哈希表统计频率——数据结构决定代码复杂度。"',"  (let ((ht (make-hash-table :test #'equal)))","    (dolist (word words ht)","      (puthash word","               (1+ (gethash word ht 0))","               ht))))","",";; 使用","(let ((freq (count-words-hash",`             '("foo" "bar" "foo" "baz" "bar" "foo"))))`,'  (maphash (lambda (k v) (message "%s: %d" k v)) freq))',";; foo: 3 | bar: 2 | baz: 1","",";;; gethash 第三参数（默认值）消灭了 if-else"].join(`
`),explanation:"选对数据结构，代码行数减半、意图加倍清晰。gethash 的默认值参数，是「让数据结构消灭逻辑」的典型案例。"}},{id:5,title:"定位 Bug，不靠碰运气",icon:"🔍",before:"这里改一下试试，那里加个判断试试，实在不行重写一遍。",after:"先复现 → 确认哪一层出错 → 缩小范围 → 验证中间状态 → 找到错误传播链源头。",description:"不是「哪里炸了就修哪里」，而是「找到错误传播链条的源头」。",elisp:{title:"条件断点 + 追踪：系统化定位",code:[";;; Emacs Lisp 调试工具链","",";;; 1. message 追踪中间状态（精准打印，不是乱打）","(defun traced-process (data)",'  "系统性追踪：每个关键节点打印状态。"','  (message "[ENTER] data=%S" data)',"  (let* ((step1 (mapcar #'1+ data))",'         (_ (message "[STEP1] after increment: %S" step1))',"         (step2 (seq-filter #'evenp step1))",'         (_ (message "[STEP2] after filter even: %S" step2))',"         (result (apply #'+ step2))",'         (_ (message "[RESULT] sum=%d" result)))',"    result))","",";;; 2. condition-case：精确捕获，定位错误层级","(defun safe-divide (a b)","  (condition-case err","      (/ a b)","    (arith-error",'     (message "定位：除零错误 a=%S b=%S err=%S" a b err)',"     nil)","    (wrong-type-argument",'     (message "定位：类型错误 a=%S b=%S" a b)',"     nil)))","","(safe-divide 10 0)    ; 精确捕获，有诊断信息",'(safe-divide 10 "x")  ; 类型错误，有诊断信息',"",";;; 3. edebug 步进调试：C-u C-M-x 在函数定义处启用"].join(`
`),explanation:"系统化调试 = 分层 + 追踪 + 精确捕获。condition-case 让你精确指定「在哪一层、捕获哪种错误」——这就是定位思维，而非试错思维。edebug 是 Emacs 内置的步进调试器。"}},{id:6,title:"建立边界感",icon:"🛡️",before:"输入总是合法，数据总是存在，网络总是正常，下标总不会越界。",after:"如果传空值怎么办？如果列表为空怎么办？如果类型不对怎么办？",description:"从「让代码跑起来」，变成「让代码在真实世界里活下来」。",elisp:{title:"防御性编程：边界即设计",code:[";;; 边界感是设计能力，不是「多写几个 if」","",";;; 有边界感的版本","(defun safe-head (lst &optional default)",'  "安全取列表首元素。LST 为空时返回 DEFAULT。','  这是设计决策，不是防御性判断的堆砌。"',"  (if (null lst)","      default","    (car lst)))","",";;; 完整的边界处理模式","(defun process-user-input (input)",'  "处理用户输入——每个边界对应一种真实场景。"',"  (cond","   ((not (stringp input))",'    (error "期望字符串，得到 %S" (type-of input)))',"   ((string-empty-p input)",'    (message "警告：输入为空字符串") nil)',"   ((> (length input) 256)",'    (error "输入超过最大长度 256，实际 %d" (length input)))',"   (t (string-trim input))))","",";;; pcase 模式匹配：让边界情况自文档化","(defun classify-value (val)","  (pcase val",`    ('nil          "空值")`,'    ((pred numberp) (format "数字: %d" val))','    ((pred stringp) (format "字符串: %s" val))','    (_             "其他类型")))'].join(`
`),explanation:"边界感 = 对「不理想世界」的建模能力。pcase 的每个分支都是一种边界场景的显式声明，让边界处理成为可读的设计文档，而非隐藏在代码角落的 if。"}},{id:7,title:"追求可读性",icon:"📖",before:"代码能运行就行，一行写完很牛，越短越高级，自己看得懂就够了。",after:"代码首先是写给人看的，其次才是给机器执行。命名清晰，函数职责单一。",description:"可读性不是形式主义，这是维护能力的开始。",elisp:{title:"自文档化代码：命名即注释",code:[";;; 不可读的版本（能跑，但伤眼）","(defun proc (x y z)","  (if (> x 0) (+ (* x y) z) (- z (* x y))))","",";;; 可读的版本：命名传达意图","(defun calculate-adjusted-score (base-score multiplier offset)",'  "计算调整后的分数。',"  BASE-SCORE 为正：base-score × multiplier + offset",'  BASE-SCORE 非正：offset - base-score × multiplier"',"  (if (> base-score 0)","      (+ (* base-score multiplier) offset)","    (- offset (* base-score multiplier))))","",";;; 单一职责原则：每个函数只做一件事","(defun validate-string-list (data)",'  "验证 DATA 是否为字符串列表。"',"  (and (listp data) (seq-every-p #'stringp data)))","","(defun normalize-string-list (data)",'  "将字符串列表统一转为大写。"',"  (mapcar #'upcase data))","","(defun save-lines-to-file (lines filename)",'  "将 LINES 写入 FILENAME，每行一条。"',"  (with-temp-file filename",`    (insert (mapconcat #'identity lines "\\n"))))`,"",";; 组合：清晰的数据流","(defun process-and-save (data filename)","  (when (validate-string-list data)","    (save-lines-to-file (normalize-string-list data) filename)))"].join(`
`),explanation:"可读性 = 让「下一个读代码的人」（包括三个月后的自己）能快速理解意图。docstring 是 Elisp 的一等公民，函数拆分让每一步都可独立测试和复用。"}},{id:8,title:"理解「为什么」，不只记「怎么写」",icon:"💡",before:"这个场景要用类，那个场景要用装饰器。记住结论，不问原因。",after:"为什么要这样做？这个方案解决了什么问题？代价是什么？有没有更简单的做法？",description:"不迷信高级写法，更在意：是否清晰、是否必要、是否稳定、是否适合当前问题。",elisp:{title:"宏 vs 函数：理解本质差异",code:[";;; 问题：为什么 Lisp 有宏？函数不够用吗？",";;; 理解原因，才能用对工具。","",";;; 函数：参数在传入前已被求值","(defun my-and-fn (a b)",'  "函数版 and：b 总会被求值，即使 a 已经是 nil。"',"  (if a b nil))","",";; 问题：(my-and-fn nil (/ 1 0)) → 会报错！",";; 因为 (/ 1 0) 在传参时已被求值","",";;; 宏：控制求值时机（这才是宏存在的根本原因）","(defmacro my-and-macro (a b)",'  "宏版 and：a 为 nil 时，b 根本不被求值。"',"  `(if ,a ,b nil))","",";; (my-and-macro nil (/ 1 0)) → nil，安全！",";; 因为宏展开后，(/ 1 0) 在 else 分支，不会执行","",";;; 理解之后的判断标准：",";;; 用函数：当你只需要「数据转换」时",";;; 用宏：当你需要「控制求值时机」时","",";;; 用 macroexpand 理解宏展开","(macroexpand '(when condition body1 body2))",";; 展开为：(if condition (progn body1 body2))"].join(`
`),explanation:"理解「为什么有宏」比「会写宏」重要得多。宏的本质是延迟求值，理解了这一点，你就知道什么时候用宏、什么时候不需要宏。这是「理解原因」而非「记忆规则」。"}},{id:9,title:"主动验证，不只凭感觉",icon:"✅",before:"我觉得这段逻辑应该没问题，我看起来像对的，跑了几个例子好像行。",after:"给正常输入测一下，给空输入测一下，给边界输入测一下，给异常输入测一下。",description:"从「写代码的人」变成「证明代码正确的人」。这是非常大的转变。",elisp:{title:"ERT 单元测试：用代码证明正确",code:[";;; ERT (Emacs Lisp Regression Testing)",";;; 用测试代码证明你的代码正确，而不是「凭感觉」","(require 'ert)","",";; 被测函数","(defun safe-divide (a b)",'  "安全除法，除数为零时返回 nil。"',"  (when (not (zerop b))","    (/ (float a) b)))","",";;; 系统性测试：覆盖所有关键路径","(ert-deftest test-safe-divide-normal ()",'  "正常路径：结果应该正确。"',"  (should (= (safe-divide 10 2) 5.0))","  (should (= (safe-divide 9 3) 3.0)))","","(ert-deftest test-safe-divide-zero-divisor ()",'  "边界：除数为零，应返回 nil 而非报错。"',"  (should (null (safe-divide 10 0)))","  (should (null (safe-divide 0 0))))","","(ert-deftest test-safe-divide-negative ()",'  "负数路径：确保符号处理正确。"',"  (should (= (safe-divide -10 2) -5.0))","  (should (= (safe-divide 10 -2) -5.0)))","",";; 运行：M-x ert RET t RET",";; 测试即文档：每个 ert-deftest 描述一种预期行为"].join(`
`),explanation:"ERT 是 Emacs 内置的测试框架。每个 ert-deftest 对应一个验证维度：正常 / 边界 / 异常 / 特殊值。测试本身就是「对代码行为的精确描述」，是可执行的规格说明。"}},{id:10,title:"形成编程直觉",icon:"⚡",before:"每次遇到问题都从零开始，依赖完整答案，不知道该从哪里下手。",after:"这段逻辑太长了应该拆；这里数据结构不对后面一定难写；这个bug多半是状态没同步。",description:"编程直觉不是玄学，而是模式积累到一定程度后的快速判断。",elisp:{title:"模式识别：直觉的代码化",code:[";;; 直觉1：看到重复，想到抽象","(defun make-greeter (greeting)",'  "工厂模式：生成问候函数。直觉：这是个生产者。"','  (lambda (name) (format "%s, %s!" greeting name)))',"",'(let ((hello   (make-greeter "Hello"))','      (bonjour (make-greeter "Bonjour")))','  (funcall hello "Alice")    ; "Hello, Alice!"','  (funcall bonjour "Bob"))   ; "Bonjour, Bob!"',"",";;; 直觉2：看到状态变化，想到闭包","(defun make-counter (&optional start)",'  "闭包封装状态。直觉：状态要封起来。"',"  (let ((count (or start 0)))","    (lambda (msg)","      (pcase msg","        ('increment (setq count (1+ count)) count)","        ('reset     (setq count 0) count)","        ('value     count)))))","","(let ((c (make-counter 10)))","  (funcall c 'increment)  ; 11","  (funcall c 'increment)  ; 12","  (funcall c 'value))     ; 12","",";;; 直觉3：看到深层嵌套，想到管道（thread-last）",'(thread-last "hello world hello"',"  (split-string)","  (mapcar #'upcase)","  (seq-sort #'string<)","  (seq-uniq))",';; => ("HELLO" "WORLD")'].join(`
`),explanation:"直觉是「模式识别的自动化」。thread-last（Emacs 28+）是管道操作符，让数据变换的方向和顺序一目了然——这是「看到嵌套就用管道重写」的直觉体现。"}}],Q=[{id:"e1",category:"函数式核心",title:"mapcar / seq-filter / seq-reduce",description:"Lisp 三大变换原语，对应「对每个元素做什么 / 保留哪些 / 聚合成什么」",code:["(let ((nums '(1 2 3 4 5 6 7 8 9 10)))","  ;; 1. 变换：每个元素乘以2","  (mapcar (lambda (x) (* x 2)) nums)","  ;; => (2 4 6 8 10 12 14 16 18 20)","","  ;; 2. 过滤：只保留偶数","  (seq-filter #'evenp nums)","  ;; => (2 4 6 8 10)","","  ;; 3. 聚合：求和","  (seq-reduce #'+ nums 0)","  ;; => 55","","  ;; 4. 组合：先过滤偶数，再求平方和","  (seq-reduce #'+","    (mapcar (lambda (x) (* x x))","            (seq-filter #'evenp nums))","    0))",";; => 220  (4+16+36+64+100)"].join(`
`),insight:"mapcar + filter + reduce 是数据处理的「原子操作」，任何集合变换都能用这三种组合表达。这是函数式思维的核心模式。",tags:["函数式","集合操作","组合"]},{id:"e2",category:"闭包与状态",title:"let 作用域与词法闭包",description:"理解 let 的作用域是理解 Lisp 状态管理的基础",code:[";;; 词法作用域：闭包捕获定义时的环境","(defun make-adder (n)",'  "返回一个「加N」的函数。"',"  (lambda (x) (+ x n)))  ; n 被闭包捕获","","(let ((add5  (make-adder 5))","      (add10 (make-adder 10)))","  (funcall add5 3)   ; => 8","  (funcall add10 3)) ; => 13","",";;; let* 顺序绑定：后面能引用前面","(let* ((x 10)","       (y (* x 2))   ; 可以用 x","       (z (+ x y)))  ; 可以用 x 和 y","  (list x y z))",";; => (10 20 30)","",";;; 闭包作为私有状态","(let ((secret 42))","  (defun get-secret () secret)","  (defun set-secret! (v) (setq secret v)))","","(get-secret)       ; => 42","(set-secret! 100)","(get-secret)       ; => 100"].join(`
`),insight:"闭包 = 函数 + 其定义时的环境. Lisp 的 let 不只是「声明变量」，而是创建了一个作用域边界，这是模块化的最小单元。",tags:["闭包","作用域","状态"]},{id:"e3",category:"宏与元编程",title:"defmacro 与代码即数据",description:"宏让你扩展语言本身，体现「代码即数据」的 Lisp 哲学",code:[";;; 宏：在编译期重写代码",";;; 用 macroexpand 理解宏展开","(macroexpand '(when condition body1 body2))",";; 展开为：(if condition (progn body1 body2))","",";;; 宏的核心：控制求值时机","(defmacro my-and (a b)",'  "a 为 nil 时，b 根本不被求值。"',"  `(if ,a ,b nil))","",";; 函数做不到这一点：",";; (my-and nil (/ 1 0)) => nil  安全！",";; (and-fn nil (/ 1 0)) => 报错！因为参数已求值","",";;; 准引用语法说明",";; ` 表示「这是模板」",";; , 表示「这里插入值」",";; ,@ 表示「这里展开列表」","",";;; 实用宏示例：带日志的 let","(defmacro let-trace (bindings &rest body)",'  "绑定变量时打印每个值，便于调试。"',"  (let ((traced","         (mapcar (lambda (b)","                   `(,(car b) (let ((v ,(cadr b)))",`                               (message "%s = %S" ',(car b) v)`,"                               v)))","                 bindings)))","    `(let* ,traced ,@body)))","",";; (let-trace ((x (+ 1 2)) (y (* x 3))) y)",";; 会打印：x = 3, y = 9，然后返回 9"].join(`
`),insight:"宏是「写代码的代码」。理解宏的关键是：宏操作的是代码的「结构」（列表），而不是代码的「值」。macroexpand 是学习宏的最佳工具。",tags:["宏","元编程","代码即数据"]},{id:"e4",category:"实用工具",title:"字符串处理与正则",description:"实际项目中最常用的文本处理模式",code:[";;; 字符串操作核心 API",'(let ((str "  Hello, Emacs World!  "))',"  (string-trim str))",';; => "Hello, Emacs World!"',"",";; 分割与连接",'(split-string "a,b,c" ",")      ; => ("a" "b" "c")',`(string-join '("a" "b" "c") "-") ; => "a-b-c"`,"",";; 格式化",'(format "名字: %s, 年龄: %d" "Alice" 30)',';; => "名字: Alice, 年龄: 30"',"",";;; 正则表达式",'(let ((text "用户ID: 12345，邮箱: user@example.com"))',"  ;; 匹配检测",'  (string-match "\\\\([0-9]+\\\\)" text)  ; => 4',"","  ;; 提取匹配组",'  (when (string-match "\\\\([0-9]+\\\\)" text)','    (match-string 1 text))  ; => "12345"',"","  ;; 替换",'  (replace-regexp-in-string "[0-9]+" "X" text))',';; => "用户ID: X，邮箱: user@example.com"',"",";;; 实用：解析配置行","(defun parse-config-line (line)",'  "解析 key=value 格式的配置行。"','  (when (string-match "^\\\\([^=]+\\\\)=\\\\(.*\\\\)$" line)',"    (cons (string-trim (match-string 1 line))","          (string-trim (match-string 2 line)))))","",'(parse-config-line "  name = Alice  ")',';; => ("name" . "Alice")'].join(`
`),insight:"Emacs Lisp 的字符串核心 API：split-string、string-join、string-match、match-string、replace-regexp-in-string。掌握这五个，文本处理基本覆盖。",tags:["字符串","正则","文本处理"]},{id:"e5",category:"列表操作",title:"car/cdr/cons 与列表构造",description:"Lisp 的心脏：理解 cons cell 才能理解一切",code:[";;; cons cell 是 Lisp 的基本构件",";;; (1 2 3) = (cons 1 (cons 2 (cons 3 nil)))","(equal '(1 2 3)","       (cons 1 (cons 2 (cons 3 nil))))",";; => t","",";;; car / cdr 解构","(let ((lst '(a b c d e)))","  (car lst)    ; => a","  (cdr lst)    ; => (b c d e)","  (cadr lst)   ; => b   (car of cdr)","  (caddr lst)) ; => c","",";;; 实用列表操作","(let ((lst '(1 2 3 4 5)))","  (length lst)         ; => 5","  (reverse lst)        ; => (5 4 3 2 1)","  (append lst '(6 7))  ; => (1 2 3 4 5 6 7)","  (nth 2 lst)          ; => 3 (0-indexed)","  (butlast lst 2))     ; => (1 2 3)","",";;; pcase 解构列表（现代 Emacs 推荐）","(defun describe-list (lst)","  (pcase lst",`    ('()             "空列表")`,'    (`(,x)           (format "单元素: %S" x))','    (`(,x ,y)        (format "两元素: %S %S" x y))','    (`(,head . ,tail) (format "首: %S, 余: %S" head tail))))',"",`(describe-list '())        ; "空列表"`,`(describe-list '(42))      ; "单元素: 42"`,`(describe-list '(1 2 3))   ; "首: 1, 余: (2 3)"`].join(`
`),insight:"cons / car / cdr 是 Lisp 的「基因」。理解 cons cell 之后，你会发现列表、关联列表（alist）、甚至代码本身，都是同一种数据结构的不同用法。",tags:["列表","cons","解构","基础"]},{id:"e6",category:"交互与 Buffer",title:"Buffer 操作与 Emacs 集成",description:"Emacs Lisp 的杀手级特性：直接操控编辑器状态",code:[";;; Emacs 的核心：一切皆 Buffer","",";;; 在当前 buffer 中操作文本","(defun insert-timestamp ()",'  "在光标处插入当前时间戳。"',"  (interactive)",'  (insert (format-time-string "%Y-%m-%d %H:%M:%S")))',"",";;; 创建临时 buffer 处理数据","(defun process-in-temp-buffer (data)",'  "在临时 buffer 中处理，不影响当前编辑环境。"',"  (with-temp-buffer","    (insert data)","    (goto-char (point-min))",'    (while (search-forward "foo" nil t)','      (replace-match "bar"))',"    (buffer-string)))","",'(process-in-temp-buffer "foo is foo, not foobar")',';; => "bar is bar, not barbar"',"",";;; 定义交互命令（可绑定快捷键）","(defun my-duplicate-line ()",'  "复制当前行到下一行。"',"  (interactive)","  (let ((line (buffer-substring-no-properties","               (line-beginning-position)","               (line-end-position))))","    (end-of-line)","    (newline)","    (insert line)))","",";; 绑定快捷键",`(global-set-key (kbd "C-c d") #'my-duplicate-line)`].join(`
`),insight:"Emacs Lisp 的独特之处：你写的代码能直接修改你写代码的环境。with-temp-buffer 是隔离副作用的惯用法，(interactive) 让普通函数变成可绑定快捷键的命令。",tags:["Buffer","交互","Emacs集成","副作用"]}],K=[{id:"problem-modeling",title:"问题建模器",icon:"🎯",color:"text-violet-700",bgColor:"bg-violet-50",borderColor:"border-violet-200",scenario:"适用于：需求分析初期、不知道从哪里下手时、感觉问题很复杂时。",misuse:"常见误用：直接把「我想写一个XXX」当作问题描述——这是解决方案而非问题。应先描述「现状」和「目标状态」之间的差距。",systemPrompt:`你是一个「编程问题建模专家」，专注于帮助用户在动手写代码之前，先把问题想清楚。

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
- 用「输入→处理→输出」的框架来结构化问题`,placeholder:"描述你遇到的需求或问题，不需要说如何实现，只说「现状」和「想要达到什么」...",aiSampleInputs:["我需要处理一批用户上传的 CSV 文件，提取出其中的有效数据保存到数据库","做一个搜索功能，用户输入关键词，返回相关的文章列表","需要一个定时任务，每天凌晨同步第三方 API 的数据到本地"]},{id:"abstraction-refactor",title:"抽象优化器",icon:"🧩",color:"text-blue-700",bgColor:"bg-blue-50",borderColor:"border-blue-200",scenario:"适用于：代码中出现大量重复逻辑时、感觉代码越来越难改时、不知道如何复用时。",misuse:"常见误用：过度抽象（Premature Abstraction）——在只有两处使用时就急着抽象。三次原则：重复三次再抽象。",systemPrompt:`你是一个「代码抽象专家」，帮助用户识别代码中的重复模式，并设计合理的抽象层级。

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
清晰优先：抽象后的代码必须比原来更易读，否则不抽象。`,placeholder:"粘贴你觉得有重复或者难以维护的代码片段...",aiSampleInputs:["我有三个函数，分别处理用户、订单、商品的校验，逻辑几乎一样","我的 API 请求代码在多个地方重复，每次都要手写错误处理","我有很多 if/else 判断不同类型，感觉可以用某种模式替代"]},{id:"bug-diagnosis",title:"Bug 诊断器",icon:"🔍",color:"text-red-700",bgColor:"bg-red-50",borderColor:"border-red-200",scenario:"适用于：遇到奇怪 bug 时、错误信息看不懂时、改了一处又冒出新问题时。",misuse:"常见误用：直接把报错信息扔给 AI 而不提供上下文。好的 Bug 报告应包含：复现步骤、期望行为、实际行为、相关代码、已尝试过的方案。",systemPrompt:`你是一个「系统性 Bug 诊断专家」，帮助用户建立从现象到根因的清晰推理链，而不是随机试错。

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

【重要原则】不要直接给出修复代码，先帮用户「定位」。修复很容易，定位是关键。`,placeholder:"描述 bug 的现象、触发条件、报错信息，以及你已经尝试过的排查方向...",aiSampleInputs:["函数在大多数情况下正常，但偶尔返回 undefined，无法稳定复现","接口请求有时成功有时失败，但参数完全一样，日志里没有明显报错","改了A模块之后，B模块突然出问题，但A和B看起来没有关系"]},{id:"data-structure",title:"数据结构顾问",icon:"🗂️",color:"text-emerald-700",bgColor:"bg-emerald-50",borderColor:"border-emerald-200",scenario:"适用于：设计数据模型时、感觉查询逻辑越来越绕时、性能优化时、想重构数据层时。",misuse:"常见误用：把「如何存储」和「如何查询」分开考虑——数据结构应该由最常见的查询模式决定，不是由数据的「自然形态」决定。",systemPrompt:`你是一个「数据结构与建模专家」，帮助用户为特定场景选择最合适的数据结构。

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
5. 指出当前设计的潜在瓶颈`,placeholder:"描述你需要存储和操作的数据，以及最常见的查询/操作模式...",aiSampleInputs:["需要频繁按用户ID查找用户信息，同时支持按注册时间排序","实时统计每个商品的浏览次数，并能快速获取浏览量 Top 10","存储组织架构，需要查询某个节点的所有子节点和父节点路径"]},{id:"code-review",title:"可读性审查",icon:"📖",color:"text-amber-700",bgColor:"bg-amber-50",borderColor:"border-amber-200",scenario:"适用于：代码 Review 前的自检、重构前的评估、新人接手代码前的文档化。",misuse:"常见误用：把「可读性」等同于「加注释」——好的代码首先靠命名和结构自文档化，注释是对「为什么」的补充，而非对「做什么」的翻译。",systemPrompt:`你是一个「代码可读性专家」，从「下一个读代码的人」的视角审查代码。

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

【重要原则】不追求完美代码，追求「下一个人能快速理解的代码」。`,placeholder:"粘贴你想要审查可读性的代码...",aiSampleInputs:["一段处理业务逻辑的函数，我觉得有点绕但说不清楚哪里有问题","一个写了很久的模块，现在新同事看不懂，需要找出关键的可读性问题","准备做代码 Review，想先自检一遍"]},{id:"boundary-design",title:"边界条件设计师",icon:"🛡️",color:"text-cyan-700",bgColor:"bg-cyan-50",borderColor:"border-cyan-200",scenario:"适用于：写完「happy path」后的健壮性加固、生产事故复盘后的防御设计、API 接口设计时。",misuse:"常见误用：把所有边界都用 try-catch 包住——边界处理应该是「设计决策」，不是「防御性堆砌」。要明确每个边界：是静默处理、报错、返回默认值、还是上抛异常？",systemPrompt:`你是一个「边界条件设计专家」，帮助用户系统性地识别和处理边界情况。

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

【核心原则】边界处理 = 对「不理想世界」的显式建模。每个边界的处理策略都是设计决策，需要明确的理由。`,placeholder:"描述你的功能或接口，说明数据来源和使用场景，我来帮你识别可能的边界情况...",aiSampleInputs:["一个用户注册接口，需要验证邮箱格式、用户名唯一性、密码强度","一个文件上传功能，支持图片和 PDF，需要处理各种异常情况","一个定时从第三方 API 同步数据的任务，需要保证数据一致性"]}],D={colors:{primary:{400:"#818cf8",500:"#6366f1",600:"#4f46e5"},secondary:{400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed"},accent:{400:"#fbbf24",500:"#f59e0b",600:"#d97706"},success:{300:"#6ee7b7",400:"#34d399",500:"#22c55e",600:"#16a34a"},danger:{300:"#fca5a5",400:"#f87171",500:"#ef4444"},warning:{400:"#fbbf24",500:"#f59e0b",600:"#d97706"},info:{200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb"},neutral:{50:"#f8fafc",200:"#e2e8f0",400:"#94a3b8",700:"#334155"}},motion:{tap:{scale:.95},hover:{scale:1.02}}};function t(n,l){let a=0,s=0,o=0;return n.length===4?(a=parseInt(n[1]+n[1],16),s=parseInt(n[2]+n[2],16),o=parseInt(n[3]+n[3],16)):n.length===7&&(a=parseInt(n.substring(1,3),16),s=parseInt(n.substring(3,5),16),o=parseInt(n.substring(5,7),16)),`rgba(${a}, ${s}, ${o}, ${l})`}const g=D.colors,B=[{id:"L1",label:"原子层 · 基础语法",icon:"🔤",layer:1,color:g.info[400],bg:t(g.info[400],.08),border:t(g.info[400],.25),desc:"每个工单聚焦一个且仅一个语法原子，确保 ME（相互独立）",tickets:[{id:"PY-001",title:"变量绑定",sub:"动态类型与对象身份",cx:1,mece:["原子层","基础语法","变量"],concept:`在 Python 中，变量是指向内存对象的<strong>标签</strong>（引用），而非存放值的容器。
          执行 <code>x = 42</code> 时，Python 先格在堆上创建整数对象 <code>42</code>，
          再让标签 <code>x</code> 指向它。<br><br>
          三个核心函数帮你观察对象：<ul>
          <li><code>type(x)</code> — 返回对象的类型</li>
          <li><code>id(x)</code> — 返回对象的内存地址（整数）</li>
          <li><code>isinstance(x, int)</code> — 类型检查（推荐替代 type==）</li></ul>`,code:["# ── 变量就是标签，不是箱子 ──","x = 42","print(type(x))          # <class 'int'>","print(id(x))            # 某个内存地址，如 140732...","","# 小整数缓存：-5 ~ 256 被 CPython 预先缓存","a = 100;  b = 100","print(a is b)          # True  （同一对象）","","# 动态重绑定",'x = "hello"             # 合法：x 现在指向字符串',"print(isinstance(x, str))  # True","","# 多重赋值 / 解包赋值","p, q, r = 1, 2, 3","p, q    = q, p         # 交换：利用元组打包/解包","print(p, q)            # 2 1"],out:`<class 'int'>
140732...
True
True
2 1`,callout:{type:"info",icon:"💡",title:"CPython 小整数缓存",body:"CPython 预先缓存 <code>-5 ~ 256</code> 的整数对象，这些区间内的整数 <code>is</code> 比较为 True。超出范围则创建新对象，<code>is</code> 可能为 False。这是实现细节，<strong>不要在生产中依赖它</strong>。"},quiz:{q:"执行 <code>a = b = []</code> 后，<code>a is b</code> 的结果是？",opts:["True","False","None","TypeError"],ans:0,ex:"✓ <code>a = b = []</code> 让 a 和 b 都指向<strong>同一个</strong>列表对象，所以 <code>a is b</code> 为 True。若要独立列表，用 <code>a, b = [], []</code>。"}},{id:"PY-002",title:"字符串切片",sub:"索引、切片与不可变性",cx:1,mece:["原子层","基础语法","字符串"],concept:`字符串是<strong>不可变</strong>的 Unicode 字符序列。切片语法 <code>s[start:stop:step]</code> 从不修改原字符串，始终返回新对象。<br><br>
          索引规则：正索引从 0 开始，负索引从 -1 开始（末尾）。`,code:['s = "PYTHON"',"#    P  Y  T  H  O  N","# 正: 0  1  2  3  4  5","# 负:-6 -5 -4 -3 -2 -1","","print(s[0])          # P","print(s[-1])         # N","print(s[1:4])        # YTH  [1,4)","print(s[::2])         # PTO  步长2","print(s[::-1])        # NOHTYP 反转","","# 字符串方法（均返回新字符串）",'print("  hi  ".strip())    # hi',`print("a,b,c".split(",")) # ['a','b','c']`,'print("-".join(["x","y","z"]))  # x-y-z',"","# f-string（Python 3.6+）",'name = "Alice"; score = 98.5','print(f"{name} 得了 {score:.1f} 分")   # Alice 得了 98.5 分'],out:`P
N
YTH
PTO
NOHTYP
hi
['a', 'b', 'c']
x-y-z
Alice 得了 98.5 分`,callout:{type:"warn",icon:"⚠️",title:"不可变性陷阱",body:`<code>s[0] = "p"</code> 会抛出 <code>TypeError: 'str' object does not support item assignment</code>。所有字符串"修改"操作都是创建新字符串。频繁拼接时用 <code>"".join(list)</code> 代替 <code>+=</code>，性能差异可达数百倍。`},quiz:{q:'<code>"abcde"[1:-1:2]</code> 的结果是？',opts:["bcd","bd","bc","cd"],ans:1,ex:'✓ [1:-1] 取 "bcd"，再以步长 2 取：索引1→b, 索引3→d，结果 "bd"。'}},{id:"PY-003",title:"数值类型",sub:"int / float / Decimal / 类型转换",cx:1,mece:["原子层","基础语法","数值"],concept:`Python 数值体系：<code>int</code>（任意精度整数）、<code>float</code>（IEEE 754 双精度）、<code>complex</code>（复数）、<code>Decimal</code>（精确十进制）。<br><br>
          <strong>关键坑</strong>：<code>0.1 + 0.2 ≠ 0.3</code>，浮点精度问题在金融计算中必须规避。`,code:["# int — 任意精度","print(2 ** 100)   # 1267650600228229401496703205376","","# float — IEEE 754 精度陷阱","print(0.1 + 0.2)   # 0.30000000000000004","print(0.1 + 0.2 == 0.3)  # False !","","# 解法1：math.isclose（推荐）","import math","print(math.isclose(0.1+0.2, 0.3))   # True","","# 解法2：decimal — 金融必备","from decimal import Decimal","print(Decimal('0.1') + Decimal('0.2'))  # 0.3","","# 类型转换规则","print(int(3.99))   # 3  截断，非四舍五入","print(round(3.5))  # 4  银行家舍入（偶数优先）","print(round(2.5))  # 2  银行家舍入！"],out:`1267650600228229401496703205376
0.30000000000000004
False
True
0.3
3
4
2`,callout:{type:"danger",icon:"🚨",title:"银行家舍入",body:'Python 的 <code>round()</code> 使用"银行家舍入"（四舍六入五成双），<code>round(0.5)=0</code>，<code>round(1.5)=2</code>。这是 IEEE 754 标准行为，与"四舍五入"不同。金融场景请用 <code>Decimal</code> 模块的 <code>ROUND_HALF_UP</code>。'},quiz:{q:"<code>int(-3.9)</code> 的结果是？",opts:["-3","-4","3","4"],ans:0,ex:"✓ <code>int()</code> 向零截断（trunc），-3.9 截断后为 -3，而非 -4。向下取整用 <code>math.floor(-3.9)</code> 才得 -4。"}}]},{id:"L2",label:"原子层 · 控制流",icon:"🔀",layer:2,color:g.accent[600],bg:t(g.accent[600],.08),border:t(g.accent[600],.25),desc:"分支、循环、异常 — 程序执行路径的精确控制",tickets:[{id:"PY-004",title:"条件分支",sub:"if/elif/else 与模式匹配",cx:1,mece:["原子层","控制流","条件"],concept:"条件分支根据布尔表达式选择执行路径。Python 3.10 引入 <code>match-case</code>，实现结构化模式匹配（远超 switch-case）。",code:["# 经典 if/elif/else","score = 87",'if   score >= 90: grade = "A"','elif score >= 80: grade = "B"','elif score >= 70: grade = "C"','else:            grade = "F"',"print(grade)     # B","","# 三元表达式",'label = "及格" if score >= 60 else "不及格"',"","# match-case（Python 3.10+）结构化模式匹配","point = (0, 5)","match point:",'    case (0, 0): print("原点")','    case (0, y): print(f"Y轴，y={y}")   # ← 捕获变量','    case (x, 0): print(f"X轴，x={x}")','    case (x, y): print(f"({x},{y})")'],out:`B
Y轴，y=5`,callout:{type:"info",icon:"💡",title:"match-case 不是 switch",body:"Python 的 <code>match-case</code> 支持<strong>解构匹配</strong>：可以匹配元组结构、字典结构、类实例属性，甚至加守卫条件 <code>case x if x > 0</code>。这是受 Rust/Haskell 影响的现代模式匹配，远比 C 的 switch 强大。"},quiz:{q:'<code>x = 7; r = "大" if x > 5 else "小"</code>，r 是？',opts:["大","小","True","7"],ans:0,ex:'✓ 三元表达式：x=7 > 5 条件为真，返回 "大"。'}},{id:"PY-005",title:"for 循环",sub:"可迭代协议与 enumerate/zip/星号解包",cx:2,mece:["原子层","控制流","循环-for"],concept:`<code>for</code> 循环本质是调用对象的 <code>__iter__</code> 方法获取迭代器，再反复调用 <code>__next__</code>。
          任何实现了这两个方法的对象都可以被 for 遍历（可迭代协议）。`,code:["# enumerate — 同时获取索引和值",'langs = ["Python", "Go", "Rust"]',"for i, lang in enumerate(langs, start=1):",'    print(f"{i}. {lang}")',"","# zip — 并行遍历，以最短序列为准",'names  = ["Alice", "Bob"]',"scores = [95, 87]","for n, s in zip(names, scores):",'    print(f"{n}: {s}")',"","# 星号解包迭代","first, *rest = [1, 2, 3, 4, 5]","print(first, rest)   # 1 [2,3,4,5]","","# for-else：仅在未被 break 时执行 else","for n in [2, 3, 5, 7]:","    if n % 2 == 0 and n != 2:",'        print("发现偶数"); break',"else:",'    print("全是奇数（或只有2）")'],out:`1. Python
2. Go
3. Rust
Alice: 95
Bob: 87
1 [2, 3, 4, 5]
全是奇数（或只有2）`,callout:{type:"tip",icon:"✅",title:"for-else 是 Python 杀手锏",body:"for-else 常用于搜索模式：遍历完找到目标就 <code>break</code>（else 不执行），找不到就执行 <code>else</code> 块。比设置 flag 变量更优雅，是 Python 最被低估的语法之一。"},quiz:{q:"<code>list(zip([1,2,3],[4,5]))</code> 的结果是？",opts:["[(1,4),(2,5),(3,None)]","[(1,4),(2,5)]","[(1,4),(2,5),(3,)]","错误"],ans:1,ex:"✓ zip 以最短序列为准，第三个元素 3 被丢弃，结果 [(1,4),(2,5)]。若需保留，用 itertools.zip_longest。"}},{id:"PY-006",title:"异常处理",sub:"try/except/else/finally 与自定义异常",cx:2,mece:["原子层","控制流","异常"],concept:`异常是 Python 处理错误的标准机制（EAFP 风格：<em>Easier to Ask Forgiveness than Permission</em>）。
          异常处理结构共四个子句，各司其职。`,code:["# 完整的异常处理结构","def safe_divide(a, b):","    try:","        result = a / b           # 可能出错的代码","    except ZeroDivisionError:",'        print("除数不能为零")',"        return None","    except TypeError as e:",'        print(f"类型错误: {e}")',"        return None","    else:",'        print(f"成功: {result}")  # 无异常时执行',"        return result","    finally:",'        print("--- 清理资源 ---")  # 始终执行',"","safe_divide(10, 2)","safe_divide(10, 0)","","# 自定义异常（继承 Exception）","class InsufficientFundsError(Exception):","    def __init__(self, amount, balance):",'        super().__init__(f"需要 {amount}，余额仅 {balance}")',"        self.amount  = amount","        self.balance = balance"],out:`成功: 5.0
--- 清理资源 ---
除数不能为零
--- 清理资源 ---`,callout:{type:"info",icon:"💡",title:"else vs finally",body:"<code>else</code>：仅在 try 块<strong>无异常</strong>时执行（区别于 finally）。<code>finally</code>：<strong>无论如何</strong>都执行，即使有 return 语句。常用于关闭文件、释放锁等清理操作. 现代 Python 更推荐 <code>with</code> 语句（上下文管理器）来替代 finally。"},quiz:{q:"try 块无异常时，执行顺序是？",opts:["try→except→finally","try→else→finally","try→finally→else","try→else→except"],ans:1,ex:"✓ 无异常：try（成功）→ else → finally。有异常：try（出错）→ except → finally，else 被跳过。"}}]},{id:"L3",label:"原子层 · 函数系统",icon:"🔧",layer:3,color:g.secondary[500],bg:t(g.secondary[500],.08),border:t(g.secondary[500],.25),desc:"函数是 Python 一等公民，可赋值、传参、作返回值",tickets:[{id:"PY-007",title:"函数参数系统",sub:"位置/默认/关键字/可变参数全解",cx:2,mece:["原子层","函数","参数"],concept:`Python 函数参数分为五种类型，用 <code>/</code> 和 <code>*</code> 分隔：<br>
          <code>def f(pos_only, /, normal, *, kw_only, **kwargs)</code><br><br>
          <code>/</code> 前：仅位置参数 &nbsp;|&nbsp; <code>*</code> 后：仅关键字参数`,code:["# *args 收集多余位置参数 → tuple","def mean(*nums):","    return sum(nums) / len(nums)","print(mean(1, 2, 3, 4))   # 2.5","","# **kwargs 收集多余关键字参数 → dict","def profile(name, **attrs):",'    print(f"{name}: {attrs}")','profile("Alice", age=25, city="北京")',"","# 仅关键字参数（强制调用方指定参数名）","def connect(host, *, port=80, ssl=False):",`    print(f"{'https' if ssl else 'http'}://{host}:{port}")`,"",'connect("example.com", port=443, ssl=True)',"","# 解包传参：* 解包列表，** 解包字典","args   = [10, 20]",'kwargs = {"sep": "-", "end": "!\\n"}',"print(*args, **kwargs)   # 10-20!"],out:`2.5
Alice: {'age': 25, 'city': '北京'}
https://example.com:443
10-20!`,callout:{type:"warn",icon:"⚠️",title:"默认参数陷阱",body:"<code>def f(lst=[])</code> 中，默认值 <code>[]</code> 只创建一次，所有调用共享同一个列表！这是 Python 最著名的陷阱之一。<strong>正确写法</strong>：<code>def f(lst=None): if lst is None: lst = []</code>，或使用 dataclasses 的 <code>field(default_factory=list)</code>。"},quiz:{q:"调用 <code>f(1, 2, 3)</code> 时，若 <code>def f(*args)</code>，args 是？",opts:["[1,2,3]","(1,2,3)","{1,2,3}","1"],ans:1,ex:"✓ *args 将多余位置参数收集为<strong>元组</strong>（tuple），不是列表。"}},{id:"PY-008",title:"闭包与作用域",sub:"LEGB 规则、nonlocal、工厂函数",cx:3,mece:["原子层","函数","闭包"],concept:`Python 变量查找遵循 <strong>LEGB</strong> 规则：<em>Local → Enclosing → Global → Built-in</em>。
          闭包（Closure）是捕获了外部作用域变量的内部函数，即使外部函数已返回，被捕获的变量仍然存活。`,code:["# LEGB 示意",'x = "global"         # G',"","def outer():",'    x = "enclosing"   # E',"    def inner():",'        x = "local"   # L',"        print(x)      # local","    inner()","    print(x)          # enclosing","","outer()","print(x)              # global","","# 工厂函数（闭包生成器）","def make_counter(start=0):","    count = [start]          # 用列表规避 nonlocal","    def counter():","        count[0] += 1","        return count[0]","    return counter","","c1 = make_counter()","c2 = make_counter(100)    # 独立状态！","print(c1(), c1(), c2())   # 1 2 101"],out:`local
enclosing
global
1 2 101`,callout:{type:"info",icon:"💡",title:"nonlocal 关键字",body:"若要在内部函数中<strong>重新赋值</strong>外层变量，需用 <code>nonlocal x</code> 声明（类似 global 但作用于 enclosing 层）。修改可变对象（列表、字典）则不需要 nonlocal，因为是修改而非重绑定。"},quiz:{q:"以下哪项描述闭包最准确？",opts:["一个没有名字的函数","捕获了外部作用域变量的内部函数","只有一行的函数","类的成员方法"],ans:1,ex:"✓ 闭包 = 内部函数 + 捕获的外部变量（自由变量）。可用 <code>f.__closure__</code> 查看捕获的变量。"}},{id:"PY-009",title:"生成器函数",sub:"yield、惰性求值与无限序列",cx:3,mece:["原子层","函数","生成器"],concept:"<code>yield</code> 将普通函数变为<strong>生成器函数</strong>。调用时返回生成器对象，每次 <code>next()</code> 执行到下一个 yield 并<strong>暂停</strong>保存状态，比列表省内存（惰性求值）。",code:["# 生成器函数 vs 普通函数","def fibonacci():",'    """无限斐波那契数列 — 内存占用近零"""',"    a, b = 0, 1","    while True:","        yield a            # 暂停，返回 a","        a, b = b, a + b    # 恢复后继续","","gen = fibonacci()","print([next(gen) for _ in range(8)])","# [0,1,1,2,3,5,8,13]","","# yield from — 委托给子生成器","def chain(*iterables):","    for it in iterables:","        yield from it","","print(list(chain([1,2], [3,4], [5])))","# [1,2,3,4,5]","","# send() 双向通信","def accumulator():","    total = 0","    while True:","        val = yield total   # yield 可接收 send 的值","        if val is None: break","        total += val","","acc = accumulator(); next(acc)  # 启动","print(acc.send(10), acc.send(20))  # 10 30"],out:`[0, 1, 1, 2, 3, 5, 8, 13]
[1, 2, 3, 4, 5]
10 30`,callout:{type:"info",icon:"💡",title:"生成器 vs 列表推导式",body:"<code>(x**2 for x in range(10**6))</code> 生成器：约 200 字节；<code>[x**2 for x in range(10**6)]</code> 列表：约 8MB。处理大型数据管道（如读取 CSV 的每一行）时，生成器是不可替代的工具。"},quiz:{q:"生成器函数与普通函数的本质区别是？",opts:["速度更快","包含 yield，调用时返回生成器对象","不能有参数","只能用 for 调用"],ans:1,ex:"✓ 含 yield 的函数是生成器函数，调用时<strong>不立即执行</strong>，而是返回一个生成器对象，由 next() 驱动执行。"}}]},{id:"L4",label:"组合层 · 数据结构",icon:"🗂️",layer:4,color:g.warning[500],bg:t(g.warning[500],.08),border:t(g.warning[500],.25),desc:"原子数据类型的组合体，掌握选择正确结构的决策树",tickets:[{id:"PY-010",title:"列表推导式",sub:"三种形态：过滤/转换/嵌套",cx:2,mece:["组合层","数据结构","列表推导"],concept:"列表推导式将 <code>for+if+append</code> 压缩为单行表达式，不仅更短，CPython 对其有特殊优化，通常比等价的 for 循环快 <strong>20~35%</strong>。",code:["# 形态1：纯转换","celsius = [0, 20, 37, 100]","fahrenheit = [c * 9/5 + 32 for c in celsius]","print(fahrenheit)   # [32.0, 68.0, 98.6, 212.0]","","# 形态2：转换 + 过滤",'words = ["Python", "is", "awesome", "!"]',"long_upper = [w.upper() for w in words if len(w) > 2]","print(long_upper)   # ['PYTHON', 'AWESOME']","","# 形态3：嵌套（矩阵展平）","matrix = [[1,2,3],[4,5,6],[7,8,9]]","flat = [n for row in matrix for n in row]","print(flat)         # [1,2,3,4,5,6,7,8,9]","","# 字典推导式","sq_map = {x: x**2 for x in range(1,6)}","print(sq_map)","","# 集合推导式（自动去重）","mods = {x % 3 for x in range(10)}","print(mods)         # {0, 1, 2}"],out:`[32.0, 68.0, 98.6, 212.0]
['PYTHON', 'AWESOME']
[1,2,3,4,5,6,7,8,9]
{1:1,2:4,3:9,4:16,5:25}
{0, 1, 2}`,callout:{type:"tip",icon:"✅",title:"可读性优先原则",body:"超过两层嵌套的推导式应改用普通 for 循环。列表推导式的核心优势是<strong>单一操作的高密度表达</strong>，而非炫技。PEP 8 建议：若推导式超过一行，请换行并添加缩进。"},quiz:{q:"<code>[x for x in range(5) if x%2]</code> 的结果是？",opts:["[0,2,4]","[1,3]","[0,1,2,3,4]","[2,4]"],ans:1,ex:"✓ <code>x%2</code> 对奇数为真（1），对偶数为假（0），所以筛出奇数 [1, 3]。"}},{id:"PY-011",title:"字典进阶",sub:"defaultdict/Counter/ChainMap/排序技巧",cx:3,mece:["组合层","数据结构","字典进阶"],concept:"<code>collections</code> 模块提供了字典的增强版本，解决大量常见编程模式。掌握它们能让代码简洁数倍。",code:["from collections import defaultdict, Counter, OrderedDict","","# defaultdict：访问不存在的键时自动初始化","graph = defaultdict(list)",'for a, b in [("A","B"),("A","C"),("B","D")]:',"    graph[a].append(b)        # 无需 setdefault","print(dict(graph))","","# Counter：计数器，词频统计神器",'text = "mississippi"',"freq = Counter(text)","print(freq.most_common(3))  # [('s',4),('i',4),('p',2)]","","# Counter 支持算术运算",'c1 = Counter("aab")','c2 = Counter("ab")',"print(c1 - c2)   # Counter({'a': 1})","","# 字典排序（Python 3.7+ 保持插入顺序）",'d = {"b":2, "a":1, "c":3}',"sorted_by_val = dict(sorted(d.items(), key=lambda kv: kv[1]))","print(sorted_by_val)   # {'a':1,'b':2,'c':3}"],out:`{'A':['B','C'],'B':['D']}
[('s',4),('i',4),('p',2)]
Counter({'a':1})
{'a':1,'b':2,'c':3}`,callout:{type:"info",icon:"💡",title:"Counter 运算",body:"Counter 支持 <code>+</code>（合并）、<code>-</code>（差集，仅保留正数）、<code>&</code>（交集取最小值）、<code>|</code>（并集取最大值）。统计词频、集合差异等任务用 Counter 一行搞定。"},quiz:{q:'<code>Counter("aabbc")["z"]</code> 的结果是？',opts:["KeyError","None","0","False"],ans:2,ex:"✓ Counter 继承自 dict，但访问不存在的键时返回 0（而非 KeyError），这使它非常适合频率统计场景。"}},{id:"PY-012",title:"集合运算",sub:"数学集合操作与性能对比",cx:2,mece:["组合层","数据结构","集合"],concept:"集合（<code>set</code>）是无序、不重复元素的哈希表。<code>in</code> 操作 O(1) vs 列表的 O(n)，百万数据量下性能差距超过 <strong>1000 倍</strong>。",code:["# 集合的四种基本运算","a = {1, 2, 3, 4, 5}","b = {4, 5, 6, 7, 8}","","print(a & b)    # 交集 {4, 5}","print(a | b)    # 并集 {1,2,3,4,5,6,7,8}","print(a - b)    # 差集 {1,2,3}","print(a ^ b)    # 对称差集 {1,2,3,6,7,8}","","# 实战：找两组用户的共同好友",'alice_friends = {"Bob", "Carol", "Dave"}','bob_friends   = {"Alice", "Carol", "Eve"}','print("共同好友:", alice_friends & bob_friends)','print("仅 Alice 的好友:", alice_friends - bob_friends)',"","# 性能对比","import time","big_list = list(range(10**6))","big_set  = set(big_list)","target   = 999_999","print(target in big_set)   # True — O(1)瞬间","print(target in big_list)  # True — O(n)慢很多"],out:`{4, 5}
{1,2,3,4,5,6,7,8}
{1,2,3}
{1,2,3,6,7,8}
共同好友: {'Carol'}
仅 Alice 的好友: {'Bob', 'Dave'}
True
True`,callout:{type:"tip",icon:"✅",title:"何时用 set？",body:"判断元素是否存在（<code>in</code>）、去重、集合运算时选 set. 需要保持顺序用 <code>dict.fromkeys()</code>（Python 3.7+，利用字典有序性去重）。注意：set 元素必须是可哈希类型（不能含列表）。"},quiz:{q:"去重列表并保持原始顺序，最佳做法是？",opts:["set(lst)","list(set(lst))","dict.fromkeys(lst)","sorted(set(lst))"],ans:2,ex:"✓ <code>dict.fromkeys(lst)</code> 利用字典键的唯一性去重，Python 3.7+ 字典保持插入顺序，最终转 list 即可。<code>set()</code> 不保证顺序。"}}]},{id:"L5",label:"组合层 · 面向对象",icon:"🏗️",layer:5,color:g.danger[500],bg:t(g.danger[500],.08),border:t(g.danger[500],.25),desc:"类、继承、魔术方法、属性描述符 — 构建可复用的抽象",tickets:[{id:"PY-013",title:"魔术方法",sub:"__repr__/__eq__/__len__/__add__等协议",cx:3,mece:["组合层","OOP","魔术方法"],concept:"魔术方法（Dunder Methods）让自定义类<strong>表现得像内置类型</strong>。Python 的运算符重载、<code>len()</code>、<code>in</code>、<code>for</code> 等都通过魔术方法实现。",code:["class Vector:","    def __init__(self, x, y):","        self.x, self.y = x, y","","    def __repr__(self):         # repr(v) / REPL显示",'        return f"Vector({self.x}, {self.y})"',"","    def __add__(self, other):    # v1 + v2","        return Vector(self.x+other.x, self.y+other.y)","","    def __mul__(self, scalar):   # v * 3","        return Vector(self.x*scalar, self.y*scalar)","","    def __abs__(self):           # abs(v) → 模长","        return (self.x**2 + self.y**2) ** 0.5","","    def __eq__(self, other):     # v1 == v2","        return (self.x, self.y) == (other.x, other.y)","","    def __bool__(self):          # bool(v) → 非零向量为真","        return bool(self.x or self.y)","","v1 = Vector(3, 4)","v2 = Vector(1, 2)","print(v1 + v2)    # Vector(4, 6)","print(v1 * 2)     # Vector(6, 8)","print(abs(v1))    # 5.0"],out:`Vector(4, 6)
Vector(6, 8)
5.0`,callout:{type:"info",icon:"💡",title:"__repr__ vs __str__",body:"<code>__repr__</code>：面向开发者，目标是能重建对象的合法 Python 表达式，在调试和 REPL 中显示。<code>__str__</code>：面向用户，供 <code>print()</code> 使用。若只实现一个，实现 <code>__repr__</code>（因为 <code>__str__</code> 找不到时会退而求其次用 <code>__repr__</code>）。"},quiz:{q:"实现 <code>v1 + v2</code> 需要定义哪个魔术方法？",opts:["__plus__","__add__","__sum__","__iadd__"],ans:1,ex:"✓ <code>+</code> 运算符调用左操作数的 <code>__add__</code>；<code>+=</code> 调用 <code>__iadd__</code>（原地加法）；反向回退用 <code>__radd__</code>。"}},{id:"PY-014",title:"属性与描述符",sub:"@property、@classmethod、@staticmethod",cx:3,mece:["组合层","OOP","属性描述符"],concept:"<code>@property</code> 将方法包装为属性访问，实现<strong>计算属性</strong>和<strong>数据验证</strong>，是 Python 封装的核心工具。",code:["class Temperature:","    def __init__(self, celsius=0):","        self._celsius = celsius   # 私有存储","","    @property","    def celsius(self):            # getter","        return self._celsius","","    @celsius.setter","    def celsius(self, val):       # setter + 验证","        if val < -273.15:",'            raise ValueError(f"低于绝对零度: {val}")',"        self._celsius = val","","    @property","    def fahrenheit(self):         # 只读计算属性","        return self._celsius * 9/5 + 32","","    @classmethod","    def from_fahrenheit(cls, f):  # 替代构造器","        return cls((f - 32) * 5/9)","","    @staticmethod","    def is_valid(val):            # 工具函数，不需要 self/cls","        return val >= -273.15","","t = Temperature(100)","print(t.fahrenheit)           # 212.0","t2 = Temperature.from_fahrenheit(32)","print(t2.celsius)             # 0.0"],out:`212.0
0.0`,callout:{type:"tip",icon:"✅",title:"三种方法的选择规则",body:"<code>@property</code>：需要访问/修改实例状态，加验证逻辑。<code>@classmethod</code>：需要访问类本身（<code>cls</code>），常用于工厂方法（多种构造方式）。<code>@staticmethod</code>：不需要实例或类，只是逻辑上属于这个类的工具函数。"},quiz:{q:"@classmethod 的第一个参数约定名是？",opts:["self","cls","klass","this"],ans:1,ex:"✓ 类方法第一个参数约定名为 <code>cls</code>，指向类本身（而非实例）。通过 cls 调用可以支持子类继承后正确返回子类实例。"}},{id:"PY-015",title:"上下文管理器",sub:"with语句、__enter__/__exit__与contextlib",cx:3,mece:["组合层","OOP","上下文管理器"],concept:"<code>with</code> 语句保证资源在使用完毕后<strong>一定被释放</strong>（即使发生异常），比 try/finally 更优雅。任何实现了 <code>__enter__</code> 和 <code>__exit__</code> 的类都是上下文管理器。",code:["# 方式1：实现协议类","class Timer:","    import time","    def __enter__(self):","        self.start = __import__('time').perf_counter()","        return self          # as 子句的值","","    def __exit__(self, exc_type, exc_val, tb):","        elapsed = __import__('time').perf_counter() - self.start",'        print(f"耗时: {elapsed:.4f}s")',"        return False  # 不压制异常","","with Timer() as t:","    _ = sum(range(1_000_000))","","# 方式2：@contextmanager — 更简洁","from contextlib import contextmanager","","@contextmanager","def managed_resource(name):",'    print(f"获取 {name}")',"    try:","        yield name           # with ... as x 的值","    finally:",'        print(f"释放 {name}")  # 始终执行',"",'with managed_resource("数据库连接") as res:','    print(f"使用 {res}")'],out:`耗时: 0.0231s
获取 数据库连接
使用 数据库连接
释放 数据库连接`,callout:{type:"tip",icon:"✅",title:"contextlib 最常用工具",body:"<code>@contextmanager</code>：生成器转上下文管理器。<code>suppress(Exception)</code>：忽略指定异常。<code>ExitStack</code>：动态管理多个上下文。<code>nullcontext</code>：空操作占位符. Python 的文件操作 <code>open()</code> 就内置了上下文管理器，建议始终用 with 打开文件。"},quiz:{q:"__exit__ 返回 True 意味着什么？",opts:["资源释放成功","压制（忽略）异常","退出程序","重新抛出异常"],ans:1,ex:"✓ __exit__ 返回真值会<strong>压制</strong>（suppress）with 块内发生的异常，返回 False/None 则让异常正常传播。suppress() 内部就是返回 True 实现的。"}}]},{id:"L6",label:"组合层 · 函数式与模块",icon:"📦",layer:6,color:g.info[500],bg:t(g.info[500],.08),border:t(g.info[500],.25),desc:"装饰器、迭代器协议、标准库模块 — 工程化的基石",tickets:[{id:"PY-016",title:"装饰器工厂",sub:"带参数装饰器与类装饰器",cx:4,mece:["组合层","函数式","装饰器"],concept:"带参数的装饰器是三层嵌套函数：<strong>工厂→装饰器→包装器</strong>。类装饰器通过 <code>__call__</code> 实现，可携带状态（如调用计数）。",code:["import functools, time","","# 带参数的装饰器工厂","def retry(times=3, delay=0):",'    """自动重试装饰器"""',"    def decorator(func):","        @functools.wraps(func)","        def wrapper(*args, **kw):","            for attempt in range(times):","                try:","                    return func(*args, **kw)","                except Exception as e:",'                    print(f"第{attempt+1}次失败: {e}")',"                    if attempt + 1 < times:","                        time.sleep(delay)",'            raise RuntimeError("重试耗尽")',"        return wrapper","    return decorator","","count = [0]","@retry(times=3)","def flaky():","    count[0] += 1",'    if count[0] < 3: raise IOError("网络抖动")','    return "成功！"',"","print(flaky())"],out:`第1次失败: 网络抖动
第2次失败: 网络抖动
成功！`,callout:{type:"info",icon:"💡",title:"@functools.wraps 必须加",body:'不加 <code>@wraps</code>，<code>flaky.__name__</code> 会变成 "wrapper"，<code>flaky.__doc__</code> 会丢失。这会破坏 API 文档、<code>help()</code>、以及基于函数名的调试工具。<strong>这是工程代码的硬性要求。</strong>'},quiz:{q:"带参数装饰器 @retry(3) 的完整调用等价于？",opts:["retry(3)(flaky)","retry(flaky)(3)","retry(3, flaky)","flaky(retry(3))"],ans:0,ex:"✓ @retry(3) 先执行 retry(3) 得到装饰器，再用该装饰器包装 flaky：等价于 flaky = retry(3)(flaky)。"}},{id:"PY-017",title:"itertools 工具箱",sub:"无限迭代器/组合迭代器/分组",cx:3,mece:["组合层","函数式","itertools"],concept:'<code>itertools</code> 是 Python 标准库中的"迭代器积木"，全部惰性求值，内存效率极高。掌握它能让数据处理代码简洁 10 倍。',code:["import itertools","","# 无限迭代器","counter = itertools.count(10, 2)   # 10,12,14...","print(list(itertools.islice(counter, 5)))","# [10, 12, 14, 16, 18]","","# cycle：循环序列",'colors = itertools.cycle(["红", "绿", "蓝"])',"print([next(colors) for _ in range(7)])","","# 组合迭代器",'print(list(itertools.combinations("ABC", 2)))',"# [('A','B'),('A','C'),('B','C')]",'print(list(itertools.permutations("AB", 2)))',"# [('A','B'),('B','A')]","","# groupby：分组（需先排序！）",'data = [("A",1),("A",2),("B",3),("B",4)]',"for key, group in itertools.groupby(data, key=lambda x: x[0]):","    print(key, list(group))"],out:`[10, 12, 14, 16, 18]
['红','绿','蓝','红','绿','蓝','红']
[('A','B'),('A','C'),('B','C')]
[('A','B'),('B','A')]
A [('A',1),('A',2)]
B [('B',3),('B',4)]`,callout:{type:"warn",icon:"⚠️",title:"groupby 陷阱",body:"<code>itertools.groupby</code> 只对<strong>相邻</strong>相同键的元素分组！若数据未排序，会得到多个同名分组。使用前必须先用 <code>sorted(data, key=...)</code> 排序，这是最常见的使用错误。"},quiz:{q:"itertools.islice(range(100), 5, 10) 产生哪些数？",opts:["[0,1,2,3,4]","[5,6,7,8,9]","[5,6,7,8,9,10]","[10]"],ans:1,ex:"✓ islice(iterable, start, stop)：从索引5开始，到索引10（不含），产生 5,6,7,8,9。"}},{id:"PY-018",title:"类型注解",sub:"typing模块与运行时类型检查",cx:3,mece:["组合层","工程化","类型注解"],concept:"Python 3.5+ 引入类型注解（Type Hints），<strong>不影响运行时</strong>，但让 IDE、mypy 等工具能提前发现类型错误，是大型项目的标准实践。",code:["from typing import List, Dict, Optional, Union, Callable","from typing import TypeVar, Generic","","# 基础注解","def greet(name: str, times: int = 1) -> str:",'    return (name + " ") * times',"","# Optional = Union[X, None]","def find_user(uid: int) -> Optional[Dict[str, str]]:",'    db = {1: {"name": "Alice"}}',"    return db.get(uid)  # 可能返回 None","","# Python 3.12 新语法：TypeVar 泛型","T = TypeVar('T')","","def first(lst: List[T]) -> Optional[T]:",'    """返回列表第一个元素，空列表返回 None"""',"    return lst[0] if lst else None","","print(first([1, 2, 3]))   # 1","print(first([]))          # None",'print(first(["a","b"]))   # a',"","# 运行时访问注解","print(greet.__annotations__)"],out:`1
None
a
{'name': <class 'str'>, 'times': <class 'int'>, 'return': <class 'str'>}`,callout:{type:"info",icon:"💡",title:"注解不是强制的！",body:"Python 类型注解<strong>不在运行时强制检查</strong>，错误的注解不会报错。它的价值在于：① IDE 自动补全更准确；② mypy/pyright 静态检查发现 bug；③ 代码即文档，自解释性更强。生产项目建议配置 <code>mypy --strict</code>。"},quiz:{q:"Optional[str] 等价于？",opts:["str | None",'str | ""',"Union[str, int]","str"],ans:0,ex:"✓ Optional[X] 是 Union[X, None] 的简写，表示该值可以是 X 类型或 None. Python 3.10+ 可直接写 <code>str | None</code>。"}}]},{id:"L7",label:"指数组合层 · 综合工程",icon:"🚀",layer:7,color:g.secondary[400],bg:t(g.secondary[400],.08),border:t(g.secondary[400],.25),desc:"所有原子概念的指数级融合 — 构建真实世界的 Python 系统",tickets:[{id:"PY-019",title:"数据类与协议",sub:"dataclass + Protocol = 鸭子类型的静态版",cx:4,mece:["指数层","工程设计","dataclass+Protocol"],concept:"<code>@dataclass</code> 消除样板代码；<code>Protocol</code>（PEP 544）实现结构子类型（静态鸭子类型），无需显式继承即可满足接口约定。",code:["from dataclasses import dataclass, field","from typing import Protocol, runtime_checkable","","@runtime_checkable","class Drawable(Protocol):","    def draw(self) -> str: ...   # 接口定义","","@dataclass","class Circle:","    radius: float",'    color:  str = "red"',"    _area: float = field(init=False, repr=False)","","    def __post_init__(self):","        self._area = 3.14159 * self.radius ** 2","","    def draw(self) -> str:",'        return f"⭕ 半径={self.radius} 面积={self._area:.2f}"',"","@dataclass","class Rectangle:","    w: float; h: float","    def draw(self) -> str:",'        return f"▭ {self.w}×{self.h}"',"","shapes: list[Drawable] = [Circle(5), Rectangle(3, 4)]","for s in shapes:","    print(s.draw())","","print(isinstance(Circle(1), Drawable))  # True（结构检查）"],out:`⭕ 半径=5 面积=78.54
▭ 3×4
True`,callout:{type:"tip",icon:"✅",title:"dataclass 的 __post_init__",body:"<code>__post_init__</code> 在 <code>__init__</code> 完成后自动调用，用于派生字段计算、验证等。<code>field(init=False)</code> 表示该字段不在构造器参数中出现（由 __post_init__ 设置）。"},quiz:{q:"@dataclass 不会自动生成哪个方法？",opts:["__init__","__repr__","__eq__","__hash__（当定义了eq时）"],ans:3,ex:"✓ 当 eq=True（默认）时，dataclass 会将 __hash__ 设为 None（不可哈希），因为可变对象作为字典键很危险。加 frozen=True 才同时生成 __hash__。"}},{id:"PY-020",title:"异步编程入门",sub:"async/await、事件循环与并发模式",cx:5,mece:["指数层","并发","asyncio"],concept:"<code>async/await</code> 是<strong>协程</strong>（coroutine）的语法糖，单线程内通过事件循环（Event Loop）实现 I/O 并发. 适合网络请求、文件读写等 I/O 密集型任务，不适合 CPU 密集型（用 multiprocessing）。",code:["import asyncio","","# async def 定义协程函数","async def fetch_data(url: str, delay: float) -> str:",'    print(f"  开始请求: {url}")',"    await asyncio.sleep(delay)    # 模拟网络 I/O（不阻塞）",'    print(f"  完成: {url}")','    return f"data from {url}"',"","async def sequential():",'    """串行：总耗时 = 各任务之和处理"""','    r1 = await fetch_data("api/users", 1.0)','    r2 = await fetch_data("api/posts", 0.5)',"","async def concurrent():",'    """并发：总耗时 ≈ max(各任务)"""',"    results = await asyncio.gather(",'        fetch_data("api/users", 1.0),','        fetch_data("api/posts", 0.5),','        fetch_data("api/comments", 0.8),',"    )",'    print(f"收到 {len(results)} 个结果")',"","# asyncio.run() 是入口点（Python 3.7+）","asyncio.run(concurrent())"],out:`  开始请求: api/users
  开始请求: api/posts
  开始请求: api/comments
  完成: api/posts
  完成: api/comments
  完成: api/users
收到 3 个结果`,callout:{type:"info",icon:"💡",title:"三种并发模型",body:"• <strong>asyncio</strong>：I/O 并发，单线程，无 GIL 问题，适合网络/文件操作<br>• <strong>threading</strong>：线程并发，受 GIL 限制，适合 I/O 密集且需要阻塞调用<br>• <strong>multiprocessing</strong>：进程并发，绕过 GIL，适合 CPU 密集（数值计算/图像处理）"},quiz:{q:"asyncio.gather() 的作用是？",opts:["串行执行多个协程","并发执行多个协程并收集结果","创建事件循环","取消协程"],ans:1,ex:"✓ gather() 将多个协程<strong>并发</strong>调度，等待全部完成后返回结果列表（顺序与输入一致）。等价于 Promise.all()（JS）或 Go 的 WaitGroup。"}},{id:"PY-021",title:"综合项目：任务管理系统",sub:"全概念融合 — 从原子到系统",cx:5,mece:["指数层","综合","全栈Python系统"],concept:"本节是 MECE 路径的<strong>指数级融合</strong>：dataclass + typing + property + 魔术方法 + 生成器 + 上下文管理器 + 推导式 + 异常处理 = 一个完整的任务管理系统。",code:["from dataclasses import dataclass, field","from typing import Optional, Iterator","from enum import Enum, auto","from contextlib import contextmanager","","class Status(Enum):","    TODO  = auto()","    DOING = auto()","    DONE  = auto()","","@dataclass","class Task:","    title:    str","    priority: int = 1        # 1=低 2=中 3=高","    status:   Status = Status.TODO","    tags:     list[str] = field(default_factory=list)","","    def __str__(self):",'        icons = {Status.TODO:"⬜",Status.DOING:"🔄",Status.DONE:"✅"}','        stars = "★" * self.priority','        return f"{icons[self.status]} [{stars}] {self.title}"',"","class TaskManager:","    def __init__(self):","        self._tasks: list[Task] = []","","    def add(self, *tasks: Task) -> 'TaskManager':","        self._tasks.extend(tasks); return self  # 链式调用","","    @property","    def stats(self) -> dict:","        return {s.name: sum(1 for t in self._tasks if t.status==s)","                for s in Status}","","    def by_priority(self) -> Iterator[Task]:","        yield from sorted(self._tasks,key=lambda t:-t.priority)","","    @contextmanager","    def batch(self):",'        print("── 批量操作开始 ──")',"        try: yield self",'        finally: print(f"── 完成，共 {len(self._tasks)} 任务 ──")',"","tm = TaskManager()","with tm.batch() as mgr:",'    mgr.add(Task("设计数据库",3,Status.DONE,["backend"]),','            Task("开发API",3,Status.DOING),','            Task("写文档",1))',"","for t in tm.by_priority(): print(t)","print(tm.stats)"],out:`── 批量操作开始 ──
── 完成，共 3 任务 ──
✅ [★★★] 设计数据库
🔄 [★★★] 开发API
⬜ [★] 写文档
{'TODO':1,'DOING':1,'DONE':1}`,callout:{type:"tip",icon:"🏆",title:"恭喜！MECE v2 全部完成！",body:"你已掌握 <strong>24 个原子工单</strong>，从变量绑定到异步编程，再到元编程、描述符与泛型。这正是 MECE 从原子→组合→指数级融合的完整旅程。<br><br>推荐下一步：<strong>asyncio</strong> 深度实践 → <strong>FastAPI</strong> 构建 API → <strong>Pydantic</strong> 数据验证 → <strong>SQLAlchemy</strong> 数据库。"},quiz:{q:"Enum + dataclass + contextmanager 的组合解决了什么核心工程问题？",opts:["运行速度","类型安全+样板消除+资源管理","内存占用","并发控制"],ans:1,ex:"✓ Enum 提供类型安全的状态管理；dataclass 消除 __init__/__repr__ 样板；contextmanager 保证资源生命周期管理。三者组合是 Pythonic 工程代码的黄金搭档。"}},{id:"PY-022",title:"元类与元编程",sub:"type的本质与自定义 __new__ 控制类创建",cx:5,mece:["指数层","元编程","元类"],concept:"Python 中<strong>类也是对象</strong>，它们是由元类 <code>type</code> 实例化的。通过继承 <code>type</code>，自定义元类的 <code>__new__</code> 方法，我们可以在类被定义时（导入期）动态地修改其属性、方法或进行强制性契约校验（如强制要求驼峰命名或属性检查），这是开发大型 Web 框架（如 Django/SQLAlchemy/Pydantic）的核心基石。",code:["# ── 元类定义：强行校验属性命名规范 ──","class CaseEnforcedMeta(type):","    def __new__(cls, name, bases, attrs):","        # 排除魔术方法后，校验所有自定义属性和方法是否为小驼峰命名 (camelCase)","        for attr_name in attrs:","            if not attr_name.startswith('__'):","                # 如果包含下划线或以大写字母开头，直接报错","                if '_' in attr_name or attr_name[0].isupper():",`                    raise TypeError(f"命名规范冲突: 属性 '{attr_name}' 必须使用小驼峰格式 (camelCase)")`,"        return super().__new__(cls, name, bases, attrs)","","# 校验成功案例","class UserProfile(metaclass=CaseEnforcedMeta):",'    userName = "Alice"',"    userAge  = 30","    def printInfo(self):","        print(self.userName, self.userAge)","","p = UserProfile()","p.printInfo()","","# 校验失败案例","try:","    class BadClass(metaclass=CaseEnforcedMeta):",'        user_name = "Bob"  # 包含下划线，不符合小驼峰',"except TypeError as e:","    print(e)"],out:`Alice 30
命名规范冲突: 属性 'user_name' 必须使用小驼峰格式 (camelCase)`,callout:{type:"warn",icon:"⚠️",title:"元类 vs 类装饰器",body:"类装饰器可以修改类，但它们只在类声明完成后运行。元类（Metaclass）控制了类的生命起点（<code>__new__</code> 和 <code>__init__</code>），这让它能够注册子类或改变类的继承树，这是类装饰器无法直接替代的。"},quiz:{q:"关于 Python 中的 __new__ 和 __init__ 的执行顺序，以下说法正确的是？",opts:["先调用 __new__ 创建实例，后调用 __init__ 初始化实例","先调用 __init__ 初始化实例，后调用 __new__ 保存实例","两个方法没有先后关系，由元类随机调度","如果是元类，则只会调用 __new__"],ans:0,ex:"✓ __new__ 是静态方法，负责分配内存并创建实例；__init__ 是实例方法，负责对已被创建的实例进行初始化。"}},{id:"PY-023",title:"属性描述符",sub:"__get__ 和 __set__ 构筑验证防线",cx:5,mece:["指数层","高级特性","描述符"],concept:"属性描述符（Descriptor）是实现了 <code>__get__</code>、<code>__set__</code> 或 <code>__delete__</code> 协议的类对象。它是 <code>property</code>、<code>classmethod</code> 和 ORM 字段校验的底层实现原理。通过描述符，我们可以把复杂的属性读写与校验逻辑封装为独立可复用的类，彻底避免在每个业务类中编写臃肿的 getter/setter。",code:["# ── 描述符定义：整数范围校验器 ──","class IntegerField:","    def __init__(self, min_val=0, max_val=100):","        self.min_val = min_val","        self.max_val = max_val","        self.name = None","","    def __set_name__(self, owner, name):","        # Python 3.6+ 自动调用，获取宿主类中属性的变量名","        self.name = name","","    def __get__(self, instance, owner):","        if instance is None: return self","        return instance.__dict__.get(self.name)","","    def __set__(self, instance, value):","        if not isinstance(value, int):",`            raise TypeError(f"属性 '{self.name}' 必须为整数类型")`,"        if not (self.min_val <= value <= self.max_val):",`            raise ValueError(f"属性 '{self.name}' 超出范围 [{self.min_val}, {self.max_val}]")`,"        instance.__dict__[self.name] = value","","class ExamResult:","    score = IntegerField(0, 100)  # 0-100分","","    def __init__(self, name, score):","        self.name = name","        self.score = score  # 触发 __set__","","# 校验成功案例",'r = ExamResult("张三", 95)','print(f"学生: {r.name}, 分数: {r.score}")',"","# 校验失败案例","try:","    r.score = 150  # 超出范围","except ValueError as e:","    print(e)"],out:`学生: 张三, 分数: 95
属性 'score' 超出范围 [0, 100]`,callout:{type:"tip",icon:"💡",title:"__set_name__ 的重要性",body:"在 Python 3.6 之前，描述符需要手动在宿主类的构造器或元类中注册变量名。Python 3.6 引入的 <code>__set_name__</code> 魔法方法会自动把字段绑定的变量名（如 <code>score</code>）注入描述符，避免了手动命名的繁琐。"},quiz:{q:"如果一个描述符只实现了 __get__，而没有实现 __set__，这称为什么？",opts:["数据描述符 (Data Descriptor)","非数据描述符 (Non-data Descriptor)","只读属性","动态描述符"],ans:1,ex:"✓ 同时实现 __get__ 和 __set__ 称为数据描述符；只实现 __get__ 称为非数据描述符（优先级较低，会被实例字典中的同名属性覆盖，常用于缓存或方法绑定）。"}},{id:"PY-024",title:"泛型与类型系统",sub:"TypeVar、Generic 与泛型类定义",cx:5,mece:["指数层","高级特性","类型系统"],concept:`Python 是动态类型语言，但通过 <code>typing</code> 模块，我们可以定义静态类型安全的<strong>泛型（Generics）</strong>。<br><br>
          使用 <code>TypeVar</code> 定义类型占位符，结合 <code>Generic</code> 基类，可以声明支持多类型的容器或处理函数，
          配合 IDE 静态类型检查器（如 mypy），能够在开发期提前拦截类型不匹配的潜在 Bug，同时提升代码自动补全体验。`,code:["from typing import TypeVar, Generic, Protocol","","# 1. 定义类型变量 (TypeVar)","T = TypeVar('T')  # 可以是任意类型","NumT = TypeVar('NumT', int, float)  # 限制只能是 int 或 float","","# 2. 定义泛型类 (Generic Class)","class Box(Generic[T]):","    def __init__(self, content: T):","        self._content: T = content","","    def get(self) -> T:","        return self._content","","    def set(self, val: T) -> None:","        self._content = val","","# 3. 泛型函数","def add_values(a: NumT, b: NumT) -> NumT:","    return a + b","","# 4. 结构化子类型 (Protocol) - 静态鸭子类型","class Serializable(Protocol):","    def serialize(self) -> str: ...","","def save_data(item: Serializable) -> None:",'    print(f"保存数据: {item.serialize()}")',"","# 测试泛型 Box","int_box = Box[int](123)",'print(f"Box内容: {int_box.get()} (类型: {type(int_box.get()).__name__})")',"","# 测试限制类型变量",'print(f"数值加和: {add_values(1.5, 2.5)}")',"","# 测试 Protocol","class User:",`    def serialize(self) -> str: return '{"id": 1, "name": "Alice"}'`,"","save_data(User())"],out:`Box内容: 123 (类型: int)
数值加和: 4.0
保存数据: {"id": 1, "name": "Alice"}`,callout:{type:"tip",icon:"💡",title:"TypeVar 与泛型别名",body:"在 Python 3.12+ 中，引入了更简洁的泛型语法：<code>class Box[T]: ...</code>，不再需要显式导入 <code>TypeVar</code> 和继承 <code>Generic</code>。这是现代 Python 类型系统的重要演进。"},quiz:{q:'在 Python 类型提示中，TypeVar("T", int, str) 的作用是？',opts:["创建一个可以是 int 或 str 的新类型","创建一个只能是 int 或 str 二者之一的类型变量","创建一个必须同时继承 int 和 str 的类","强制抛出类型错误"],ans:1,ex:"✓ TypeVar 的参数列表用于限制该类型占位符的可选具体类型范围，此处限制 T 只能被解析为 int 或 str 之一。"}}]}],C=[{id:"T-01",level:"L1",title:"SELECT 与字面量",emoji:"🎯",desc:"一切始于 <code>SELECT</code>。DuckDB 可以直接计算表达式、不需要任何表。这是最原子的查询单元——将 SQL 当计算器。",concepts:["SELECT","字面量","表达式","列别名"],defaultSQL:`-- 🦆 DuckDB 最基础查询：SELECT + 字面量
-- 不需要表！直接计算表达式
SELECT
  42                        AS 整数,
  3.14                      AS 浮点数,
  'Hello, DuckDB!'          AS 字符串,
  TRUE                      AS 布尔值,
  2 + 3 * 4                 AS 算术表达式,
  ROUND(3.14159, 2)         AS 取整函数,
  CURRENT_DATE              AS 今日日期;`,knowledge:`
      <strong>为什么 DuckDB 不需要 FROM 子句？</strong><br>
      DuckDB 遵循标准 SQL 扩展：<code>SELECT</code> 本身就能求值表达式。
      内部实现是一个「虚拟单行表」（1-row virtual scan），
      引擎直接在 <strong>向量化执行引擎</strong>（vectorized execution engine）中完成计算。<br><br>
      <strong>列别名</strong> 用 <code>AS 名称</code> 给结果列命名，提升可读性。
      DuckDB 支持中文列名，底层以 UTF-8 存储。
    `,quiz:{q:"在 DuckDB 中，以下哪条语句是合法的？",options:["SELECT 1 + 1 FROM dual","SELECT 1 + 1","COMPUTE 1 + 1","PRINT 1 + 1"],answer:1,explain:"DuckDB 支持无 FROM 的 SELECT，直接对字面量 and 表达式求值。"}},{id:"T-02",level:"L1",title:"数据类型探索",emoji:"🔬",desc:"DuckDB 拥有丰富的数据类型系统。理解类型是构建健壮 schema 的基础。本节用 <code>typeof()</code> 函数实时探索每种类型。",concepts:["INTEGER","VARCHAR","BOOLEAN","DATE","DOUBLE","INTERVAL"],defaultSQL:`-- 🦆 探索 DuckDB 的数据类型系统
SELECT
  typeof(42)                AS 整数类型,
  typeof(9999999999)        AS 大整数类型,
  typeof(3.14)              AS 浮点类型,
  typeof('duck')            AS 字符串类型,
  typeof(TRUE)              AS 布尔类型,
  typeof(DATE '2024-01-01') AS 日期类型,
  typeof(INTERVAL '3 days') AS 区间类型,
  typeof([1, 2, 3])         AS 列表类型,
  typeof({'k': 'v'})        AS 结构体类型;`,knowledge:`
      <strong>DuckDB 的类型推断</strong>：字面量 <code>42</code> 默认推断为 <code>INTEGER</code>，
      <code>9999999999</code> 超出 INT 范围，自动升级为 <code>BIGINT</code>。<br><br>
      <strong>特色类型</strong>：
      <code>LIST</code>（变长数组）和 <code>STRUCT</code>（嵌套结构体）是 DuckDB
      面向 <strong>OLAP 分析</strong> 的特色类型，可存储复杂嵌套数据而无需多表 JOIN。<br><br>
      <code>typeof()</code> 是调试利器，等价于其他数据库的 <code>pg_typeof()</code>。
    `,quiz:{q:"在 DuckDB 中，typeof(3.14) 返回什么？",options:["INTEGER","FLOAT","DOUBLE","DECIMAL"],answer:2,explain:"DuckDB 将浮点字面量 3.14 默认推断为 DOUBLE (64位浮点)，而非 FLOAT (32位)。"}},{id:"T-03",level:"L1",title:"CREATE TABLE & INSERT",emoji:"🏗️",desc:"从零开始建表并插入数据。这是 <strong>DDL</strong>（数据定义语言）与 <strong>DML</strong>（数据操纵语言）的最小组合单元。",concepts:["CREATE TABLE","INSERT INTO","SELECT *","DDL","DML"],defaultSQL:`-- 🦆 DDL: 定义表结构（蓝图）
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
SELECT * FROM products;`,knowledge:`
      <strong>CREATE TABLE</strong> 定义表的 Schema（列名 + 类型 + 约束）。
      <code>IF NOT EXISTS</code> 防止重复创建报错，适合幂等执行。<br><br>
      <strong>INSERT INTO ... VALUES</strong> 是行式写入。DuckDB 在内部将数据以
      <strong>列式（columnar）</strong> 格式存储，即使你按行插入。<br><br>
      <strong>PRIMARY KEY</strong> 约束保证唯一性，<code>NOT NULL</code> 约束防止空值，
      <code>DEFAULT</code> 提供默认值 —— 三者构成数据完整性的基础防线。
    `,quiz:{q:"DuckDB 的底层存储格式是？",options:["行式存储（Row-based）","列式存储（Columnar）","JSON 文档存储","图存储"],answer:1,explain:"DuckDB 是列式存储的 OLAP 数据库，即使按行 INSERT，数据也以列式格式组织，使聚合查询极快。"}},{id:"T-04",level:"L1",title:"WHERE 过滤条件",emoji:"🔍",desc:"<code>WHERE</code> 子句是数据过滤的核心原子。掌握比较运算符、逻辑运算符与 NULL 处理，是一切查询的基础。",concepts:["WHERE","AND/OR/NOT","BETWEEN","IN","LIKE","IS NULL"],defaultSQL:`-- 🦆 WHERE 过滤：各类条件运算
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
  AND in_stock = TRUE;`,knowledge:`
      <strong>运算符优先级</strong>：<code>NOT > AND > OR</code>，务必用括号明确意图。<br><br>
      <strong>NULL 的特殊性</strong>：<code>NULL</code> 不等于任何值，包括自身。
      判断 NULL 必须用 <code>IS NULL</code> 或 <code>IS NOT NULL</code>，
      不能用 <code>= NULL</code>（结果永远是 NULL，即 UNKNOWN）。<br><br>
      <strong>BETWEEN a AND b</strong> 等价于 <code>>= a AND <= b</code>，两端均包含。<br>
      <strong>LIKE</strong> 中 <code>%</code> 匹配任意长度，<code>_</code> 匹配单字符。<br>
      试试修改 WHERE 条件，观察不同结果！
    `,quiz:{q:"SELECT * FROM t WHERE price = NULL 会返回什么？",options:["price 为 NULL 的所有行","空结果集","报错","price 不为 NULL 的行"],answer:1,explain:"NULL = NULL 的结果是 UNKNOWN（不是 TRUE），WHERE 只保留条件为 TRUE 的行，所以返回空集。应使用 IS NULL。"}},{id:"T-05",level:"L2",title:"聚合函数 COUNT/SUM/AVG",emoji:"📊",desc:"聚合函数将多行压缩为单个值——这是 OLAP 分析的核心能力。DuckDB 在向量化引擎上执行聚合，速度极快。",concepts:["COUNT","SUM","AVG","MIN","MAX","COUNT DISTINCT"],defaultSQL:`-- 🦆 聚合函数：多行 → 单值
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
  ROUND(STDDEV(amount),2) AS 标准差;`,knowledge:`
      <strong>COUNT(*) vs COUNT(列)</strong>：<code>COUNT(*)</code> 统计所有行（含 NULL），
      <code>COUNT(amount)</code> 只统计非 NULL 的 amount 值。<br><br>
      <strong>COUNT DISTINCT</strong> 精确去重计数。DuckDB 内部使用
      <strong>HyperLogLog</strong> 算法进行近似去重（<code>approx_count_distinct()</code>），
      百亿行数据也能毫秒级响应。<br><br>
      <strong>NULL 被聚合函数忽略</strong>：SUM/AVG/MIN/MAX 全部跳过 NULL 值，
      这与 COUNT(*) 的行为形成对比。
    `,quiz:{q:"表中有 5 行，其中 2 行的 amount 为 NULL。COUNT(*) 和 COUNT(amount) 分别返回？",options:["5 和 5","3 和 3","5 和 3","3 和 5"],answer:2,explain:"COUNT(*) 统计所有行=5，COUNT(amount) 忽略 NULL，只统计非 NULL 的 3 行。"}},{id:"T-06",level:"L2",title:"GROUP BY & HAVING",emoji:"🗂️",desc:"<code>GROUP BY</code> 将行分桶聚合；<code>HAVING</code> 对聚合结果过滤。两者组合是数据分组分析的核心模式。",concepts:["GROUP BY","HAVING","分组聚合","执行顺序"],defaultSQL:`-- 🦆 GROUP BY：按 category 分组统计
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
ORDER BY 总销售额 DESC;`,knowledge:`
      <strong>SQL 执行顺序（逻辑顺序）</strong>：<br>
      <code>FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT</code><br><br>
      这意味着：<br>
      • <code>WHERE</code> 在分组<strong>前</strong>过滤原始行<br>
      • <code>HAVING</code> 在分组<strong>后</strong>过滤聚合结果<br>
      • <code>SELECT</code> 中的别名不能在 <code>HAVING</code> 里用（逻辑上还没算出来）<br><br>
      <strong>DuckDB 扩展</strong>：允许 <code>ORDER BY 列号</code>（如 <code>ORDER BY 3 DESC</code>）
      直接引用 SELECT 列位置，更简洁。
    `,quiz:{q:"WHERE 和 HAVING 的核心区别是？",options:["HAVING 只能用于 COUNT","WHERE 过滤分组后的数据，HAVING 过滤原始行","WHERE 过滤原始行，HAVING 过滤聚合后的分组","两者完全等价，可互换"],answer:2,explain:"WHERE 在 GROUP BY 之前执行，过滤原始行；HAVING 在 GROUP BY 之后执行，过滤聚合结果。"}},{id:"T-07",level:"L2",title:"ORDER BY & LIMIT",emoji:"📋",desc:"排序与限制是结果展示的最后一道工序。DuckDB 的 <code>ORDER BY</code> 支持多列、NULL 排序策略和表达式排序。",concepts:["ORDER BY","LIMIT","OFFSET","NULLS FIRST/LAST","分页"],defaultSQL:`-- 🦆 ORDER BY + LIMIT：排序与分页
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
LIMIT 5 OFFSET 0;  -- 第1页，每页5条`,knowledge:`
      <strong>NULL 排序策略</strong>：<code>NULLS FIRST</code> 将 NULL 排最前，
      <code>NULLS LAST</code> 排最后。DuckDB 默认降序时 NULL 排最后，
      升序时 NULL 排最前（与 PostgreSQL 一致）。<br><br>
      <strong>分页公式</strong>：<code>OFFSET = (页码-1) × 每页条数</code><br>
      第2页：<code>LIMIT 5 OFFSET 5</code><br><br>
      <strong>RANK() OVER()</strong>：这里偷偷引入了窗口函数预览——
      它为每行计算排名，不压缩行数，T-11 将详解。
    `,quiz:{q:"ORDER BY score DESC 时，NULL 值默认排在哪里？",options:["最前面","最后面","随机位置","会报错"],answer:1,explain:"DuckDB（遵循 PostgreSQL 规范）在 DESC 排序时，NULL 默认 NULLS LAST（排最后）；ASC 时默认 NULLS FIRST（排最前）。"}},{id:"T-08",level:"L3",title:"JOIN 多表关联",emoji:"🔗",desc:"多表 JOIN 是关系型数据库的核心。掌握 INNER/LEFT/RIGHT/FULL JOIN 四种连接，理解其集合语义。",concepts:["INNER JOIN","LEFT JOIN","RIGHT JOIN","FULL JOIN","连接键"],defaultSQL:`-- 🦆 JOIN：组合两张表
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
ORDER BY e.id;`,knowledge:`
      <strong>JOIN 类型的集合语义</strong>：<br>
      • <code>INNER JOIN</code>：交集（两表都匹配才保留）<br>
      • <code>LEFT JOIN</code>：左表全保留，右表无匹配填 NULL<br>
      • <code>RIGHT JOIN</code>：右表全保留，左表无匹配填 NULL<br>
      • <code>FULL JOIN</code>：并集（两边都保留，无匹配填 NULL）<br><br>
      <strong>实验</strong>：将 <code>LEFT JOIN</code> 改为 <code>INNER JOIN</code>，
      观察 Dave（dept_id=NULL）和 Eve（dept_id=4 不存在）如何消失。<br><br>
      DuckDB 的 <strong>Hash Join</strong> 实现：将小表 build 成哈希表，
      大表 probe——经典的 build-probe 模式。
    `,quiz:{q:"INNER JOIN 和 LEFT JOIN 的关键区别是？",options:["INNER JOIN 更快","LEFT JOIN 保留左表所有行，无匹配时右表列为 NULL","INNER JOIN 保留两表所有行","LEFT JOIN 只返回左表数据"],answer:1,explain:"LEFT JOIN 保留左表（FROM 后的表）的所有行；若右表无匹配，则右表的列填充 NULL。INNER JOIN 只保留两边都有匹配的行。"}},{id:"T-09",level:"L3",title:"子查询 Subquery",emoji:"🪆",desc:"子查询将一个 SELECT 嵌套在另一个查询中，像俄罗斯套娃。掌握标量子查询、IN 子查询与派生表三种形式。",concepts:["标量子查询","IN 子查询","派生表","EXISTS","相关子查询"],defaultSQL:`-- 🦆 三种子查询形式
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
-- WHERE dept_id IN (SELECT id FROM depts WHERE dept_name='工程部');`,knowledge:`
      <strong>三种子查询形式</strong>：<br>
      • <strong>标量子查询</strong>：<code>SELECT (SELECT MAX(x) FROM t)</code>
        返回单个值，可用在任何表达式位置<br>
      • <strong>IN 子查询</strong>：<code>WHERE x IN (SELECT ...)</code>
        返回一列，DuckDB 内部转化为 Semi-Join<br>
      • <strong>派生表</strong>：<code>FROM (SELECT ...) AS t</code>
        将子查询结果作为临时表使用<br><br>
      <strong>性能建议</strong>：子查询可读性好，但复杂场景建议用 CTE（T-10）
      或重写为 JOIN，让优化器有更多优化空间。
    `,quiz:{q:"标量子查询必须满足什么条件？",options:["必须使用 GROUP BY","必须返回且只能返回一行一列","必须有 ORDER BY","必须有 LIMIT 1"],answer:1,explain:"标量子查询出现在表达式位置（如 SELECT 列、WHERE 条件），必须返回恰好一行一列，否则运行时报错。"}},{id:"T-10",level:"L3",title:"CTE WITH 公共表表达式",emoji:"🧩",desc:"<code>WITH ... AS</code> 定义命名子查询，让复杂查询「分层表达」，极大提升可读性和可维护性。",concepts:["CTE","WITH","递归CTE","链式CTE","可读性"],defaultSQL:`-- 🦆 CTE：将复杂查询分层命名
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
SELECT * FROM high_value ORDER BY 总消费 DESC;`,knowledge:`
      <strong>CTE vs 子查询</strong>：CTE 本质是语法糖，让你给子查询起名字、
      支持多次引用。在 DuckDB 中，优化器通常将 CTE 内联（inline）展开，
      性能与等价子查询相同。<br><br>
      <strong>链式 CTE</strong>：多个 CTE 用逗号分隔，后面的 CTE 可引用前面的，
      形成清晰的「数据流水线」。<br><br>
      <strong>递归 CTE</strong>（进阶）：加 <code>RECURSIVE</code> 关键字可以
      处理树形、图形数据，如组织架构、路径查找——DuckDB 完整支持。
    `,quiz:{q:"以下关于 CTE 的说法正确的是？",options:["CTE 会将结果物化存入磁盘","CTE 只能定义一个","CTE 提升可读性，后面的 CTE 可引用前面定义的","CTE 只能在 SELECT 中使用，不能在 INSERT 中"],answer:2,explain:"CTE 可以定义多个（用逗号分隔），后面的 CTE 可以引用之前定义的。DuckDB 默认将 CTE 内联优化，不强制物化。CTE 也可用于 INSERT/UPDATE/DELETE。"}},{id:"T-11",level:"L4",title:"窗口函数 OVER()",emoji:"🪟",desc:"窗口函数是 SQL 最强大的特性之一。它在「窗口」范围内计算，<strong>不压缩行数</strong>——这是与 GROUP BY 的本质区别。",concepts:["OVER()","PARTITION BY","ROW_NUMBER","RANK","LAG/LEAD","滑动窗口"],defaultSQL:`-- 🦆 窗口函数：不折叠行的聚合
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
ORDER BY category, sale_date;`,knowledge:`
      <strong>窗口函数 = 聚合 + 上下文</strong>：每行都能看到「周围」的数据，
      但结果集行数不变。<br><br>
      <strong>核心子句</strong>：<br>
      • <code>PARTITION BY</code>：重置窗口边界（类比 GROUP BY 但不折叠）<br>
      • <code>ORDER BY</code>：窗口内排序（影响 RANK、LAG、滑动窗口）<br>
      • <code>ROWS BETWEEN</code>：精确定义窗口帧范围<br><br>
      <strong>常用函数</strong>：<code>ROW_NUMBER</code>（无并列）、<code>RANK</code>（并列跳号）、
      <code>DENSE_RANK</code>（并列不跳号）、<code>LAG/LEAD</code>（前/后行访问）、
      <code>FIRST_VALUE/LAST_VALUE</code>（帧内首尾值）
    `,quiz:{q:"窗口函数和 GROUP BY 的最关键区别是？",options:["窗口函数更慢","窗口函数不能使用聚合","GROUP BY 压缩行数，窗口函数保留原始行数","窗口函数只能用于数值列"],answer:2,explain:"GROUP BY 将多行合并为一行（折叠）；窗口函数 OVER() 在每行上计算，结果集行数与原表相同，是其核心区别。"}},{id:"T-12",level:"L4",title:"综合实战：销售数据分析",emoji:"🏆",desc:"将前 11 个原子技能融合：建表→插数→过滤→聚合→JOIN→CTE→窗口函数，完成一个完整的销售分析报告。",concepts:["综合运用","CTE链","窗口函数","JOIN","业务分析"],defaultSQL:`-- 🏆 综合实战：完整销售分析管道
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
ORDER BY 总销售额 DESC;`,knowledge:`
      <strong>完整的分析管道</strong>：<br>
      1️⃣ <strong>DDL</strong>：建立 星型模型（regions/products2 为维表，txn 为事实表）<br>
      2️⃣ <strong>DML</strong>：INSERT 测试数据<br>
      3️⃣ <strong>CTE Step1</strong>：JOIN 三表，计算衍生指标（销售额、毛利）<br>
      4️⃣ <strong>CTE Step2</strong>：GROUP BY 聚合，计算毛利率<br>
      5️⃣ <strong>CTE Step3</strong>：窗口函数 RANK() 区域内排名<br>
      6️⃣ <strong>最终过滤</strong>：WHERE 取各区域 TOP1<br><br>
      <strong>恭喜你完成所有 12 个工单！</strong> 🎉 你已掌握 DuckDB SQL 的完整知识图谱，
      从原子到复合，MECE 无遗漏。
    `,quiz:{q:"星型模型（Star Schema）中，事实表 and 维表的关系是？",options:["维表很大，事实表很小","事实表存储度量/交易数据，维表存储描述性属性","两者没有区别","星型模型中不能有 JOIN"],answer:1,explain:"星型模型：事实表（Fact Table）存储业务事件/度量（如交易记录），维表（Dimension Table）存储描述性属性（如区域、产品信息），通过外键关联。"}},{id:"T-13",level:"L4",title:"远程文件与 Parquet 查询",emoji:"🌐",desc:"DuckDB 可以直接查询网络上的 CSV、Parquet 甚至 JSON 文件，而无需提前将其导入数据库。这是其作为「现代数据分析瑞士军刀」的核心底气。",concepts:["read_parquet","httpfs","S3 查询","远程文件","无服务器分析"],defaultSQL:`-- 🦆 直接查询远程公共 Parquet 文件
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
LIMIT 5;`,knowledge:`
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
    `,quiz:{q:"关于 DuckDB 查询远程 Parquet 文件的机制，以下说法错误的是？",options:["必须先将文件下载到本地才能进行 SQL 查询","利用 Parquet 的元数据，只拉取 SQL 涉及的列和数据块","支持直接对 URL 字符串执行 FROM 查询","可以与本地表进行 JOIN 关联分析"],answer:0,explain:"DuckDB 可以利用 HTTP 范围请求（Range Requests）只下载 Parquet 文件的元数据和所需的数据页，无需将整个远程文件下载到本地，这也是其分析速度极快的原因。"}}],i=D.colors,N=[{id:"CTX-101",phase:"阶段 IV · 微模式层",pc:i.info[400],title:"微模式（Micro-Pattern）——原子之下的最小可行单元",icon:"🔬",ac:`linear-gradient(90deg,${i.info[400]},${i.secondary[500]})`,ha:t(i.info[400],.1),hg:"linear-gradient(135deg,#05101a,#091828)",acc:i.info[400],tag:"本体扩展 · 比原子更细粒度的可组合结构",concept:`你已经掌握了 8 个<em>原子</em>（A~H），但每个原子内部还有更细粒度的<strong>微模式（Micro-Pattern）</strong>。
<br><br>
微模式是"比原子更小、比关键词更大"的可复用提示 structure 单元，类似编程中的<strong>设计模式（Design Pattern）</strong>——
你不发明它，你<em>识别并复用</em>它。
<br><br>
本阶段将系统性地挖掘9种核心微模式：<br>
<strong>P1</strong> 角色声明句·<strong>P2</strong> 思维链·<strong>P3</strong> 人格叠加·<strong>P4</strong> 少样本示例·
<strong>P5</strong> Token预算·<strong>P6</strong> 元反思·<strong>P7</strong> 锚点注入·<strong>P8</strong> 渐进揭示·<strong>P9</strong> 自洽验证`,callouts:[{t:"b",i:"🔬",s:'微模式与原子的关系：原子是"功能模块"，微模式是"实现策略"。同一个原子（如 Role）可以用不同的微模式实现（如 P1 角色声明 或 P3 人格叠加）。'},{t:"g",i:"💡",s:"MECE 视角：9种微模式从不同维度（时序/格式/认知/控制）覆盖提示设计的完整解空间，互斥且穷尽。"}],atoms:[{i:"P1",n:"角色声明句",d:"单句激活身份",c:i.info[400],b:t(i.info[400],.25),t:"时序模式"},{i:"P2",n:"思维链",d:"Step-by-Step推理",c:i.secondary[500],b:t(i.secondary[500],.25),t:"认知模式"},{i:"P3",n:"人格叠加",d:"多维度人格堆栈",c:i.danger[400],b:t(i.danger[400],.25),t:"身份模式"},{i:"P4",n:"少样本示例",d:"输入→输出示范",c:i.success[400],b:t(i.success[400],.25),t:"格式模式"},{i:"P5",n:"Token预算",d:"上下文资源管理",c:i.accent[400],b:t(i.accent[400],.25),t:"控制模式"},{i:"P6",n:"元反思",d:"自我评估触发",c:i.warning[500],b:t(i.warning[500],.25),t:"质量模式"},{i:"P7",n:"锚点注入",d:"关键前提固定",c:i.success[300],b:t(i.success[300],.25),t:"稳定模式"},{i:"P8",n:"渐进揭示",d:"信息分层释放",c:i.info[300],b:t(i.info[300],.25),t:"教学模式"},{i:"P9",n:"自洽验证",d:"内部一致性检查",c:i.danger[300],b:t(i.danger[300],.25),t:"验证模式"}],loop:[{i:"🔬",l:`识别
模式`,c:i.info[400]},{i:"📐",l:`提取
结构`,c:i.secondary[500]},{i:"🧩",l:`复用
组合`,c:i.success[400]},{i:"✅",l:`验证
效果`,c:i.accent[400]}],code:`// 微模式 = 提示体的"设计模式库"

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
// P4(少样本) 可用于 D(Output) 或 G(Context)`,checks:["理解微模式与原子的层级关系（Pattern在Atom之下）","认识9种核心微模式的分类（时序/认知/身份/格式/控制/质量/稳定/教学/验证）","理解微模式为什么像设计模式（可识别、可复用、有代价）","知道同一原子可以用不同微模式实现"],fq:"微模式和原子的关系用一个类比说明",fa:'原子 = 功能模块（如"角色"），微模式 = 实现策略（如"用角色声明句实现角色"）—— 就像"排序"是模块，"快速排序/归并排序"是不同的实现模式',toon:{f:["工单","阶段","焦点","案例","状态"],v:["CTX-101","阶段IV","微模式总论","9种模式","🟢 COMPLETE"]},cv:"overview"},{id:"CTX-102",phase:"阶段 IV · 微模式层",pc:i.info[400],title:"P1 · 角色声明句——单句激活认知框架的最小单元",icon:"🎙️",ac:`linear-gradient(90deg,${i.info[400]},${i.info[300]})`,ha:t(i.info[400],.08),hg:"linear-gradient(135deg,#051018,#082030)",acc:i.info[400],tag:"微模式 P1 · 一句话 · 高激活效率 · 本工单唯一案例",concept:`<strong>角色声明句（Role Declaration Sentence, P1）</strong>是激活 LLM 认知框架的<em>最小可行提示单元</em>。
<br><br>
它只有一句话，但包含3个必要信息位：<br>
<strong>[身份标签]</strong> + <strong>[专业领域]</strong> + <strong>[行为承诺]</strong>
<br><br>
研究表明，一句精准的角色声明句在大多数任务上能达到完整角色定义 <em>80%</em> 的效果，
以 <em>1/10 的 Token 消耗</em> 换取高性价比的认知激活。`,callouts:[{t:"b",i:"⚡",s:"P1 的适用场景：Token 预算紧张时、快速原型阶段、单轮对话任务。不适合：需要稳定风格的长对话、高精度的专业任务。"},{t:"o",i:"🧪",s:'神经语言学原理：角色词汇（如"架构师"）在预训练语料中与大量专业文本共现，声明句直接激活这些共现关系，相当于"地址寻址"而非"内容复制"。'}],atoms:[{i:"👤",n:"[身份标签]",d:"职业/专业身份词",c:i.info[400],b:t(i.info[400],.25),t:"必需"},{i:"🎯",n:"[专业领域]",d:"具体学科/技术栈",c:i.secondary[500],b:t(i.secondary[500],.25),t:"必需"},{i:"🤝",n:"[行为承诺]",d:"将要做什么",c:i.success[400],b:t(i.success[400],.25),t:"必需"},{i:"💪",n:"[强度修饰]",d:"资深/顶尖/精通",c:i.accent[400],b:t(i.accent[400],.25),t:"可选增益"}],loop:[{i:"✍️",l:`写
声明句`,c:i.info[400]},{i:"🧪",l:`测试
激活`,c:i.secondary[500]},{i:"📏",l:`评估
效果`,c:i.warning[500]},{i:"✂️",l:`精简
迭代`,c:i.success[400]}],diffBad:['"请你帮我分析这段代码。"','"作为AI助手，请..."','"你是个很有帮助的AI..."'],diffGood:["你是一位资深前端架构师，专注于性能优化，将以工程师视角审查我的代码。","你是一位Kubernetes专家，拥有大规模集群运维经验，将帮我诊断这个配置问题。","你是一位UX研究员，擅长用户访谈设计，将指导我设计本次调研方案。"],code:`// 角色声明句 P1 — 三信息位模板

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
//             效能比：约 80%效果 / 15%消耗 ⚡`,checks:["掌握 P1 的三信息位结构（身份+领域+承诺）","能在30字内写出一个高效角色声明句","理解 P1 的适用场景（Token紧张/快速原型）","知道何时需要升级到完整角色定义（长对话/高精度）"],fq:"P1 角色声明句包含哪三个必要信息位？",fa:"① 身份标签（我是谁）② 专业领域（我擅长什么）③ 行为承诺（我将做什么）—— 三位缺一则激活不完整，四个字记住：「身·域·为·诺」",toon:{f:["工单","微模式","模板","Token估算","状态"],v:["CTX-102","P1·角色声明","三信息位","~30 tokens","🟢 COMPLETE"]},cv:"p1"},{id:"CTX-103",phase:"阶段 IV · 微模式层",pc:i.info[400],title:"P2 · 思维链（CoT）——强制外化推理过程的认知触发器",icon:"🧠",ac:`linear-gradient(90deg,${i.secondary[500]},${i.primary[500]})`,ha:t(i.secondary[500],.1),hg:"linear-gradient(135deg,#0f0520,#180a30)",acc:i.secondary[500],tag:"微模式 P2 · 单触发词 · 推理质量×3 · 本工单唯一案例",concept:`<strong>思维链（Chain-of-Thought, CoT）</strong>是通过一个简单的触发短语，让 LLM 在给出答案前<em>显式外化推理过程</em>的微模式。
<br><br>
为什么有效？LLM 生成 token 时是<em>自回归</em>的——它在生成每个 token 时，前面的 token 都是"已知信息"。
CoT 让 LLM 先生成推理步骤，这些步骤反过来<strong>约束和校正</strong>后续的答案生成。
<br><br>
三种 CoT 强度：<br>
<strong>CoT-Lite</strong>：「让我们一步步思考」（7 tokens）<br>
<strong>CoT-Struct</strong>：「先分析→再推导→最后结论」（20 tokens）<br>
<strong>CoT-Full</strong>：「请展示你的完整推理过程，包括假设、步骤和验证」（30 tokens）`,callouts:[{t:"p",i:"🧠",s:'自回归原理：LLM 生成"2+2=？"时若不加 CoT，直接映射到常见答案"4"；加入 CoT 后，"2加2，个位相加得4"这个中间步骤让后续的答案生成有了显式的"计算路径"支撑。'},{t:"g",i:"📊",s:"研究数据：在数学推理任务上，CoT 将 LLM 准确率从 17% 提升至 58%（Wei et al., 2022）。对于需要多步推理的任务，CoT 是最高 ROI 的微模式。"}],atoms:[{i:"⚡",n:"CoT-Lite",d:"「让我们一步步思考」",c:i.primary[500],b:t(i.primary[500],.25),t:"7 tokens"},{i:"📊",n:"CoT-Struct",d:"「分析→推导→结论」",c:i.secondary[500],b:t(i.secondary[500],.25),t:"20 tokens"},{i:"🔬",n:"CoT-Full",d:"「展示完整推理+验证」",c:i.danger[400],b:t(i.danger[400],.25),t:"30 tokens"},{i:"🔄",n:"Self-CoT",d:"「质疑你自己的推理」",c:i.accent[400],b:t(i.accent[400],.25),t:"高级模式"}],loop:[{i:"❓",l:`提出
问题`,c:i.secondary[500]},{i:"⚡",l:`触发
CoT`,c:i.primary[500]},{i:"🧠",l:`外化
推理`,c:i.danger[400]},{i:"✅",l:`校正
答案`,c:i.success[400]}],diffBad:['"2的10次方是多少？"（无CoT，直接跳结论）','"这段代码有什么问题？"（无推理路径）','"哪个方案更好？"（无分析过程）'],diffGood:["「2的10次方是多少？让我们一步步计算。」→推理路径：2¹=2,2²=4...2¹⁰=1024",'"这段代码有什么问题？请先分析代码结构，再识别潜在风险，最后给出改进建议。"','"哪个方案更好？请展示你的评估框架、每个维度的打分和最终推荐理由。"'],code:`// 思维链 P2 — 三强度模板

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
首先，考虑一个直角三角形，三边为 a, b, c（c为斜边）..."`,checks:["理解 CoT 有效的自回归原理（中间步骤校正后续生成）","区分三种 CoT 强度（Lite/Struct/Full）及适用场景","能为不同复杂度的任务选择匹配的 CoT 强度","知道 Self-CoT（质疑自己的推理）的进阶用法"],fq:"CoT 为什么能提升 LLM 的推理准确率？",fa:'自回归机制：LLM 生成答案时，前面的推理步骤是"已知上下文"，显式的中间推导约束和校正了最终答案的生成 —— 不是更聪明，是给了更多"思考空间"',toon:{f:["工单","微模式","触发词","效果","状态"],v:["CTX-103","P2·思维链","让我们一步步","推理×3","🟢 COMPLETE"]},cv:"cot"},{id:"CTX-104",phase:"阶段 IV · 微模式层",pc:i.info[400],title:"P3 · 人格叠加——多维度人格堆栈激活复合视角",icon:"🎭",ac:`linear-gradient(90deg,${i.danger[400]},${i.secondary[500]})`,ha:t(i.danger[400],.1),hg:"linear-gradient(135deg,#1a0515,#220820)",acc:i.danger[400],tag:"微模式 P3 · 多人格堆栈 · 对话内部多视角 · 本工单唯一案例",concept:`<strong>人格叠加（Persona Stack, P3）</strong>在单个提示体中叠加<em>多个相互制衡的视角</em>，
让 LLM 模拟内部的"多角色讨论"，从而产生比单一角色更全面、更有张力的输出。
<br><br>
经典结构：<strong>创造者 + 批评者 + 中立仲裁者</strong><br>
每个人格有独立的立场和权重，最终输出是它们协商的结果。
<br><br>
适用场景：决策分析、风险评估、创意评审、辩证思考`,callouts:[{t:"p",i:"🎭",s:'对话内辩证：P3 本质上是"提示体内部的苏格拉底对话"。创造者提供方案，批评者找漏洞，仲裁者综合，这个三角张力比单一视角的输出质量高得多。'},{t:"o",i:"⚠️",s:"代价提醒：P3 的 Token 消耗是单角色的 2~3 倍。只在需要多视角权衡的任务中使用，简单问答任务用 P1 即可。"}],atoms:[{i:"🌟",n:"创造者人格",d:"积极、开创、给出方案",c:i.danger[400],b:t(i.danger[400],.25),t:"正向"},{i:"🔴",n:"批评者人格",d:"挑剔、严苛、找漏洞",c:i.danger[500],b:t(i.danger[500],.25),t:"负向"},{i:"⚖️",n:"仲裁者人格",d:"中立、综合、作决策",c:i.primary[500],b:t(i.primary[500],.25),t:"中立"},{i:"🔬",n:"专家人格",d:"深度知识的专业视角",c:i.info[300],b:t(i.info[300],.25),t:"领域"}],loop:[{i:"🌟",l:`创造者
提方案`,c:i.danger[400]},{i:"🔴",l:`批评者
找漏洞`,c:i.danger[500]},{i:"⚖️",l:`仲裁者
综合`,c:i.primary[500]},{i:"📤",l:`输出
结论`,c:i.success[400]}],diffBad:['"帮我评估这个商业计划。"（单视角，可能只给正面反馈）',"没有制衡机制，输出倾向于迎合用户期望",'缺少批判性视角，产生"确认偏误"'],diffGood:["创造者：识别计划的创新点和机会","批评者：列出具体风险、假设漏洞、执行障碍","仲裁者：综合两方，给出带条件的推荐"],code:`// 人格叠加 P3 — 三角制衡模板

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
// 应用 P3 后，输出包含正反两方的完整分析`,checks:["理解人格叠加的三角制衡结构（创造者/批评者/仲裁者）","知道 P3 适用于决策分析、风险评估等需要多视角的场景","理解 P3 的 Token 代价（2~3倍）及适用边界","能为特定场景定义具有张力的人格组合"],fq:'人格叠加（P3）如何避免 LLM 的"确认偏误"？',fa:"通过内置批评者人格，强制 LLM 主动寻找方案的漏洞 and 风险 —— 创造者和批评者的张力让仲裁者的综合更接近真实的全面评估，而不只是迎合用户期望",toon:{f:["工单","微模式","结构","Token代价","状态"],v:["CTX-104","P3·人格叠加","三角制衡","2~3x","🟢 COMPLETE"]},cv:"persona"},{id:"CTX-105",phase:"阶段 IV · 微模式层",pc:i.info[400],title:"P4 · 少样本示例（Few-Shot）——用输入输出对定义期望格式",icon:"📐",ac:`linear-gradient(90deg,${i.success[400]},${i.info[300]})`,ha:t(i.success[400],.08),hg:"linear-gradient(135deg,#011508,#022012)",acc:i.success[400],tag:"微模式 P4 · 3~5示例 · 隐式格式契约 · 本工单唯一案例",concept:`<strong>少样本示例（Few-Shot Prompting, P4）</strong>通过提供 3~5 个「输入→期望输出」对，
让 LLM 通过<em>模式识别</em>理解你的期望格式，而无需用文字明确描述规则。
<br><br>
关键原理：LLM 在预训练时学习了大量的"输入→输出"模式。Few-Shot 示例触发了这种<strong>上下文学习（In-Context Learning）</strong>能力——
它不是微调权重，而是通过示例在推理时动态"学习"任务格式。
<br><br>
示例设计原则（MECE）：<br>
<strong>多样性</strong>：覆盖不同的边界情况<br>
<strong>代表性</strong>：选择最典型的正确案例<br>
<strong>一致性</strong>：输出格式完全统一`,callouts:[{t:"g",i:"📐",s:"隐式规则 vs 显式规则：用语言描述格式规则（显式）往往模糊且耗 Token；Few-Shot 示例（隐式）直接展示期望输出，LLM 的模式识别比规则理解更可靠。"},{t:"b",i:"🔬",s:"样本数量规律：0-shot（无示例）→ 1-shot（一个示例）→ 3-shot（三个示例）→ 5-shot（五个示例）。研究显示 3-shot 是性价比最高的数量，5-shot 之后边际效益递减。"}],atoms:[{i:"1️⃣",n:"0-Shot",d:"无示例，纯指令",c:i.success[400],b:t(i.success[400],.2),t:"~0 tokens"},{i:"2️⃣",n:"1-Shot",d:"单示例，基础格式",c:i.info[300],b:t(i.info[300],.2),t:"~50 tokens"},{i:"3️⃣",n:"3-Shot",d:"三示例，最优性价比",c:i.info[400],b:t(i.info[400],.2),t:"~150 tokens"},{i:"4️⃣",n:"5-Shot",d:"五示例，覆盖边界",c:i.primary[500],b:t(i.primary[500],.2),t:"~250 tokens"}],loop:[{i:"🎯",l:`选择
代表样本`,c:i.success[400]},{i:"📝",l:`统一
格式`,c:i.info[300]},{i:"🧩",l:`排序
示例`,c:i.info[400]},{i:"✅",l:`验证
泛化`,c:i.primary[500]}],diffBad:['"输出JSON格式"（规则描述模糊）',"示例格式不一致（LLM无法识别规律）","示例都是同类情况（缺乏多样性）"],diffGood:["示例1：简单正例（展示基础格式）","示例2：复杂正例（展示完整边界）","示例3：边界情况（展示异常处理）"],fshots:[{n:"示例 1 — 基础情感分析",i:"这个产品真的很好用，强烈推荐！",o:'{"sentiment":"positive","confidence":0.95,"keywords":["好用","推荐"]}'},{n:"示例 2 — 复杂混合情感",i:"价格有点贵，但质量确实不错。",o:'{"sentiment":"mixed","confidence":0.78,"keywords":["贵","质量好"]}'},{n:"示例 3 — 边界：无情感倾向",i:"这是一款黑色手机。",o:'{"sentiment":"neutral","confidence":0.92,"keywords":["黑色","手机"]}'}],code:`// 少样本示例 P4 — 3-Shot 情感分析案例

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
// 3. 字段命名：与业务术语一致（减少歧义）`,checks:['理解 Few-Shot 触发"上下文学习（ICL）"的机制',"掌握示例设计三原则（多样性/代表性/一致性）","知道 3-Shot 是最优性价比的数量","能为特定格式任务设计高质量的少样本示例"],fq:"Few-Shot 示例为什么比用文字描述格式规则更有效？",fa:'LLM 的模式识别能力强于规则理解能力 —— 示例直接展示"输入→输出"的映射关系，LLM 能可靠地从模式中推导规则；而自然语言描述的规则往往有歧义或被忽略',toon:{f:["工单","微模式","最优数量","机制","状态"],v:["CTX-105","P4·Few-Shot","3-Shot","上下文学习","🟢 COMPLETE"]},cv:"fewshot"},{id:"CTX-106",phase:"阶段 IV · 微模式层",pc:i.info[400],title:"P5 · Token 预算——上下文窗口的资源经济学",icon:"💰",ac:`linear-gradient(90deg,${i.accent[400]},${i.warning[500]})`,ha:t(i.accent[400],.08),hg:"linear-gradient(135deg,#1a1200,#251800)",acc:i.accent[400],tag:"微模式 P5 · 资源分配 · 优先级排序 · 本工单唯一案例",concept:`<strong>Token 预算管理（Token Budget, P5）</strong>是将上下文窗口视为<em>有限资源</em>并进行最优分配的微模式。
<br><br>
上下文窗口 = 有限内存。每个原子、每条示例、每段背景知识都在消耗这个资源。
P5 的核心是建立<strong>Token 分配优先级矩阵</strong>，确保高价值信息优先，低价值信息被压缩或裁剪。
<br><br>
Token 效用公式：<em>效用 = 相关性 × 精确性 / Token消耗</em>`,callouts:[{t:"o",i:"💰",s:'Token 经济学定律：在固定上下文窗口内，添加低价值内容会"挤出"高价值内容的影响力。注意力机制是零和的——总注意力恒定，无关内容分散了对关键信息的注意。'},{t:"b",i:"📊",s:"实用配方（8K窗口）：Role 5% + Instruction 10% + Constraint 5% + Context 40% + Few-Shot 20% + Output模板 10% + 对话历史 10%。比例根据任务类型调整。"}],atoms:[{i:"📊",n:"预算分配",d:"各原子的Token占比规划",c:i.accent[400],b:t(i.accent[400],.25),t:"策略"},{i:"✂️",n:"内容压缩",d:"去除冗余，保留信号",c:i.warning[500],b:t(i.warning[500],.25),t:"执行"},{i:"📈",n:"优先级矩阵",d:"重要×紧急的Token分配",c:i.danger[500],b:t(i.danger[500],.25),t:"决策"},{i:"🔄",n:"滑动窗口",d:"动态裁剪历史对话",c:i.success[400],b:t(i.success[400],.25),t:"动态"}],loop:[{i:"📏",l:`测量
现有用量`,c:i.accent[400]},{i:"📊",l:`分析
价值密度`,c:i.warning[500]},{i:"✂️",l:`压缩
低价值`,c:i.danger[500]},{i:"✅",l:`验证
效果不降`,c:i.success[400]}],tokItems:[{n:"Role 角色",used:180,budget:300,c:i.info[400]},{n:"Instruction 指令",used:420,budget:500,c:i.secondary[500]},{n:"Constraint 约束",used:290,budget:250,c:i.warning[500]},{n:"Context 上下文",used:1800,budget:2e3,c:i.primary[500]},{n:"Few-Shot 示例",used:750,budget:800,c:i.success[400]},{n:"Output 格式",used:200,budget:300,c:i.info[300]},{n:"对话历史",used:3200,budget:2850,c:i.danger[500]}],code:`// Token 预算管理 P5 — 分配规划模板

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
\``,checks:["理解上下文窗口是零和资源（Token经济学）","掌握Token效用公式（相关性×精确性/消耗）","能为具体任务设计Token分配优先级矩阵","知道压缩顺序（历史→示例→上下文，核心框架不压缩）"],fq:"Token 预算管理的核心公式是什么？",fa:"Token效用 = 相关性 × 精确性 / Token消耗 —— 高相关+高精确+低消耗 = 高效用信息优先保留；低相关/高冗余 = 首先压缩",toon:{f:["工单","微模式","核心公式","窗口规划","状态"],v:["CTX-106","P5·Token预算","相关×精确/消耗","8192分配","🟢 COMPLETE"]},cv:"token"},{id:"CTX-107",phase:"阶段 IV · 微模式层",pc:i.info[400],title:"P6 · 元反思——让 LLM 评估自己输出的质量",icon:"🪞",ac:`linear-gradient(90deg,${i.warning[500]},${i.accent[400]})`,ha:t(i.warning[500],.08),hg:"linear-gradient(135deg,#1a0a00,#251400)",acc:i.warning[500],tag:"微模式 P6 · 自评分 · 质量触发 · 本工单唯一案例",concept:`<strong>元反思（Meta-Reflection, P6）</strong>是在 LLM 生成输出后，立即触发一轮<em>自我质量评估</em>的微模式。
<br><br>
它利用了 LLM 的一个关键特性：<strong>评估比生成更可靠</strong>——
LLM 判断"这个答案是否正确"的能力，往往强于"直接生成正确答案"的能力。
<br><br>
三种元反思触发方式：<br>
<strong>P6-Score</strong>：「给你的回答打分（1-10），并说明理由」<br>
<strong>P6-Critique</strong>：「指出你刚才回答的3个潜在问题」<br>
<strong>P6-Revise</strong>：「基于以上批评，重写一个更好的版本」`,callouts:[{t:"o",i:"🪞",s:'评估>生成的原理：LLM 在生成时受到采样随机性影响；在评估时，它可以在更宽的注意力视野下审视整个输出，相当于从"作者视角"切换到"编辑视角"。'},{t:"b",i:"🔄",s:'P6 + P2（CoT）的组合：先用 CoT（P2）外化推理过程，再用 Meta-Reflection（P6）评估推理质量，最后修订。这个"生成→评估→修订"三步循环是目前质量最高的提示模式之一。'}],atoms:[{i:"📊",n:"P6-Score",d:"「给回答打分1-10，说明理由」",c:i.warning[500],b:t(i.warning[500],.25),t:"评分模式"},{i:"🔍",n:"P6-Critique",d:"「指出3个潜在问题」",c:i.accent[400],b:t(i.accent[400],.25),t:"批评模式"},{i:"✏️",n:"P6-Revise",d:"「基于批评重写更好版本」",c:i.danger[500],b:t(i.danger[500],.25),t:"修订模式"},{i:"🔄",n:"P6-Loop",d:"「迭代直到评分≥8分」",c:i.success[400],b:t(i.success[400],.25),t:"循环模式"}],loop:[{i:"📤",l:`初步
输出`,c:i.warning[500]},{i:"🪞",l:`元反思
自评`,c:i.accent[400]},{i:"🔍",l:`识别
问题`,c:i.danger[500]},{i:"✏️",l:`修订
输出`,c:i.success[400]}],reflections:[{q:"我的回答是否完整覆盖了问题的所有方面？",a:"评估维度：需求拆解 + 边界情况 + 例外处理",c:i.warning[500]},{q:"回答中是否有逻辑跳跃或未经论证的假设？",a:"评估维度：推理链完整性 + 假设显式化",c:i.accent[400]},{q:"格式和长度是否符合输出格式约束？",a:"评估维度：字数 + 结构 + 可读性",c:i.danger[500]},{q:"如果我是一个挑剔的专家读者，会提出什么质疑？",a:"评估维度：专业准确性 + 细节深度",c:i.success[400]}],code:`// 元反思 P6 — 生成→评估→修订三步循环

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
// 最终输出质量显著高于无反思版本`,checks:["理解「评估>生成」的原理（编辑视角优于作者视角）","掌握三种元反思触发方式（Score/Critique/Revise）","能设计4个维度的自我评估问题","理解 P6 + P2（CoT）的组合如何形成最高质量提示模式"],fq:"为什么 LLM 评估回答的能力强于直接生成高质量回答？",fa:'生成时受采样随机性影响，且注意力分散在推理过程；评估时可以在更宽的注意力视野下审视整个输出 —— 相当于"作者写作"切换到"编辑审稿"，视角不同质量不同',toon:{f:["工单","微模式","触发方式","组合","状态"],v:["CTX-107","P6·元反思","Score→Critique→Revise","P6+P2","🟢 COMPLETE"]},cv:"reflect"},{id:"CTX-108",phase:"阶段 IV · 微模式层",pc:i.info[400],title:"P7 · 锚点注入——防止上下文漂移的认知钉子",icon:"⚓",ac:`linear-gradient(90deg,${i.success[300]},${i.success[400]})`,ha:t(i.success[300],.08),hg:"linear-gradient(135deg,#0a1400,#122000)",acc:i.success[300],tag:"微模式 P7 · 关键前提固定 · 防漂移 · 本工单唯一案例",concept:`<strong>锚点注入（Anchor Injection, P7）</strong>通过在提示体的<em>战略位置</em>插入关键前提句，
防止 LLM 在长对话中因"上下文漂移"而偏离核心约束。
<br><br>
问题根源：LLM 的注意力权重随 token distance 指数衰减——越远的指令影响越弱。
锚点注入在<strong>开头、中间、结尾</strong>三处重复核心约束，形成认知"钉子"。
<br><br>
三种锚点类型：<br>
<strong>首锚</strong>：开头的角色/目标声明（最高权重）<br>
<strong>中锚</strong>：长提示体中部的关键约束重申<br>
<strong>尾锚</strong>：紧邻输出区的最后提醒（次高权重）`,callouts:[{t:"g",i:"⚓",s:"注意力衰减规律：Transformer 中远距离 token 之间的有效注意力权重会随距离增加而衰减。这意味着放在开头的指令在长对话后期影响力减弱，尾锚恰好弥补了这个缺陷。"},{t:"b",i:"🔑",s:'尾锚黄金法则：在输出格式定义的正上方（紧邻输出的最后一条指令）放置最关键的约束，因为这个位置对输出的影响力最强（"时近性偏好"）。'}],atoms:[{i:"⚓",n:"首锚",d:"开头角色/目标声明",c:i.success[300],b:t(i.success[300],.25),t:"最高权重"},{i:"🔗",n:"中锚",d:"中部关键约束重申",c:i.success[400],b:t(i.success[400],.25),t:"中等权重"},{i:"📍",n:"尾锚",d:"紧邻输出的最后提醒",c:i.info[300],b:t(i.info[300],.25),t:"次高权重"},{i:"🔄",n:"周期锚",d:"每N轮自动重注入",c:i.info[400],b:t(i.info[400],.25),t:"动态锚"}],loop:[{i:"⚓",l:`首锚
设置`,c:i.success[300]},{i:"📝",l:`主体
内容`,c:i.success[400]},{i:"🔗",l:`中锚
重申`,c:i.info[300]},{i:"📍",l:`尾锚
固定`,c:i.info[400]}],diffBad:["所有约束堆在开头（远处指令被遗忘）","长对话无重申机制（漂移风险高）","输出前没有最后提醒（格式偏差）"],diffGood:['首锚：开头 "你是X，任务是Y，核心约束是Z"','中锚：长提示中部 "【重要】始终遵守：不虚构、字数≤400"','尾锚：输出格式前 "⚠️ 确保：输出必须为JSON格式，不含任何额外说明"'],code:`// 锚点注入 P7 — 三锚位布局

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
\``,checks:["理解 LLM 注意力的距离衰减特性","掌握三锚位布局（首/中/尾）及各自的权重特征","知道尾锚（紧邻输出）的黄金法则","理解周期锚在长对话中的防漂移作用"],fq:"为什么尾锚（紧邻输出的指令）影响力特别强？",fa:'LLM 生成输出时，距离越近的上下文 token 具有更高的注意力权重（时近性偏好）—— 尾锚位于输出前的最后一条指令，是 LLM 在生成第一个输出 token 时"最新鲜"的记忆',toon:{f:["工单","微模式","三锚位","原理","状态"],v:["CTX-108","P7·锚点注入","首/中/尾","注意力衰减","🟢 COMPLETE"]},cv:"anchor"},{id:"CTX-109",phase:"阶段 V · 组合进阶层",pc:i.success[400],title:"P8 · 渐进揭示——信息分层释放的教学微模式",icon:"🎭",ac:`linear-gradient(90deg,${i.info[300]},${i.info[400]})`,ha:t(i.info[300],.08),hg:"linear-gradient(135deg,#011618,#022022)",acc:i.info[300],tag:"微模式 P8 · 分层释放 · 教学最优节奏 · 本工单唯一案例",concept:`<strong>渐进揭示（Progressive Disclosure, P8）</strong>控制信息的<em>释放节奏</em>，
从最简单的核心概念开始，逐步增加复杂度，形成最优的认知负荷曲线。
<br><br>
来自认知科学的设计原则：<strong>工作记忆的 7±2 限制</strong>——人类同时处理的信息组块数量有限，
渐进揭示确保每一层都在被充分理解后，才引入下一层的复杂性。
<br><br>
四层揭示结构：<br>
<strong>L0</strong>：一句话核心概念（5秒版本）<br>
<strong>L1</strong>：关键原理（30秒版本）<br>
<strong>L2</strong>：完整解释+示例（3分钟版本）<br>
<strong>L3</strong>：深度细节+边界情况（专家版本）`,callouts:[{t:"b",i:"🎭",s:"L0 测试：如果你无法用一句话（≤20字）说明核心概念，说明你对它的理解还不够清晰。L0 不是简化，是提炼精华。"},{t:"g",i:"📚",s:"本课程即是 P8 的实践：CTX-101 是 L0（微模式总论），CTX-102~108 是 L1（单原子），CTX-109+ 是 L2（组合），更高级的课程是 L3（专家级）。"}],atoms:[{i:"L0",n:"一句话版本",d:"≤20字，核心概念精华",c:i.info[300],b:t(i.info[300],.25),t:"5秒"},{i:"L1",n:"关键原理",d:"3个核心原理，无细节",c:i.info[400],b:t(i.info[400],.25),t:"30秒"},{i:"L2",n:"完整解释",d:"原理+示例+类比",c:i.primary[500],b:t(i.primary[500],.25),t:"3分钟"},{i:"L3",n:"专家深度",d:"边界情况+反例+研究",c:i.secondary[500],b:t(i.secondary[500],.25),t:"专家级"}],loop:[{i:"L0",l:`一句话
核心`,c:i.info[300]},{i:"L1",l:`关键
原理`,c:i.info[400]},{i:"L2",l:`完整
解释`,c:i.primary[500]},{i:"L3",l:`专家
深度`,c:i.secondary[500]}],diffBad:["一次性倾倒所有信息（认知过载）","无层次结构（读者迷失）","只有深度版本（初学者无法进入）"],diffGood:['L0："元提示体是LLM的类定义"（立即理解）',"L1：三个关键原理（建立框架）","L2：完整解释+代码示例（深入理解）"],code:`// 渐进揭示 P8 — 四层揭示模板

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
\``,checks:["理解渐进揭示基于认知科学的7±2工作记忆原理","掌握四层揭示结构（L0-L3）及各层目标","能为任意复杂概念写出L0（5秒版本）","理解本课程本身就是P8的实践"],fq:"为什么写不出 L0（一句话版本）说明理解不够清晰？",fa:'L0 要求提炼最本质的概念 —— 如果连核心是什么都无法一句话说清，说明在你的认知中该概念还没有"结晶化"，是概念模糊的信号，不是表达问题',toon:{f:["工单","微模式","四层","认知原理","状态"],v:["CTX-109","P8·渐进揭示","L0-L3","7±2工作记忆","🟢 COMPLETE"]},cv:"progressive"},{id:"CTX-110",phase:"阶段 V · 组合进阶层",pc:i.success[400],title:"P9 · 自洽验证——内部一致性的自动检查器",icon:"🔮",ac:`linear-gradient(90deg,${i.danger[300]},${i.secondary[500]})`,ha:t(i.danger[300],.08),hg:"linear-gradient(135deg,#180512,#220818)",acc:i.danger[300],tag:"微模式 P9 · 自洽检查 · 幻觉防护 · 本工单唯一案例",concept:`<strong>自洽验证（Self-Consistency Check, P9）</strong>通过在输出后触发一个<em>内部一致性检查</em>，
检测输出是否与提供的约束、事实和前提相矛盾。
<br><br>
这是防止 LLM <em>幻觉（Hallucination）</em>的核心微模式：不是阻止 LLM 生成错误，
而是让它在输出后立即"对账"，发现矛盾时主动标记或修正。
<br><br>
三类一致性检查：<br>
<strong>事实自洽</strong>：输出是否与提供的上下文数据一致？<br>
<strong>逻辑自洽</strong>：输出的推理链是否内部无矛盾？<br>
<strong>约束自洽</strong>：输出是否违反了已定义的约束？`,callouts:[{t:"r",i:"🔮",s:'幻觉根源：LLM 的生成机制是"似然最大化"而非"真实最大化"——它会生成"听起来对"而非"实际上对"的内容。P9 强制 LLM 将输出与提供的事实对照，减少这种偏差。'},{t:"b",i:"📊",s:'P9 + P6 的区别：P6（元反思）评估输出的质量；P9（自洽验证）检查输出与约束/事实的一致性。两者互补：P6 是"质量审计"，P9 是"合规审计"。'}],atoms:[{i:"📋",n:"事实自洽",d:"输出是否与提供数据一致",c:i.danger[300],b:t(i.danger[300],.25),t:"数据层"},{i:"🔗",n:"逻辑自洽",d:"推理链是否内部无矛盾",c:i.secondary[500],b:t(i.secondary[500],.25),t:"推理层"},{i:"⚖️",n:"约束自洽",d:"是否违反已定义约束",c:i.warning[500],b:t(i.warning[500],.25),t:"规则层"},{i:"🏷️",n:"不确定标注",d:"无法验证时主动声明",c:i.accent[400],b:t(i.accent[400],.25),t:"诚信层"}],loop:[{i:"📤",l:`生成
输出`,c:i.danger[300]},{i:"🔮",l:`触发
自洽检查`,c:i.secondary[500]},{i:"🔍",l:`发现
矛盾`,c:i.warning[500]},{i:"🏷️",l:`标注或
修正`,c:i.accent[400]}],diffBad:["输出与上下文数据矛盾但未发现","推理链有跳步但未标注","违反约束但未报告"],diffGood:["「根据提供的数据，这个结论成立/不成立」","「第3步推导存在一个假设：X，如果X不成立则结论需修正」","「⚠️ 以下部分超出了提供的数据范围，属于我的推断」"],code:`// 自洽验证 P9 — 三层一致性检查模板

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
\``,checks:["理解自洽验证与元反思的职责区别（合规vs质量）","掌握三层一致性检查（事实/逻辑/约束）","理解 LLM 幻觉的根源（似然最大化而非真实最大化）","能设计针对特定任务的自洽检查清单"],fq:"P9（自洽验证）和 P6（元反思）的核心区别？",fa:"P6 是质量审计（这个回答够不够好）；P9 是合规审计（这个回答是否与事实/约束一致）—— P6 评估相对质量，P9 检查绝对正确性",toon:{f:["工单","微模式","三层检查","防护目标","状态"],v:["CTX-110","P9·自洽验证","事实/逻辑/约束","幻觉防护","🟢 COMPLETE"]},cv:"selfcheck"},{id:"CTX-111",phase:"阶段 V · 组合进阶层",pc:i.success[400],title:"微模式 × MECE 组合矩阵——9微模式的指数组合空间",icon:"🧮",ac:`linear-gradient(90deg,${i.success[400]},${i.info[400]})`,ha:t(i.success[400],.08),hg:"linear-gradient(135deg,#011508,#051820)",acc:i.success[400],tag:"组合层 · 9微模式 × 适用场景 = 组合地图",concept:`你现在拥有了 9 种微模式（P1~P9），加上 8 个原子（A~H），总组合维度已达 <em>17 个设计维度</em>。
<br><br>
但不是所有组合都有意义。MECE 本体分析帮你建立<strong>「场景→最优微模式组合」的映射地图</strong>：
<br><br>
<strong>代价权衡原则</strong>：每增加一个微模式，就增加 Token 消耗和提示体复杂度。
最优组合 = 最小微模式集合覆盖场景的全部关键需求。
<br><br>
目标：建立 5~7 条预验证的「场景快速通道」，覆盖 80% 的实际使用场景。`,callouts:[{t:"g",i:"🧮",s:"幂集爆炸：9个微模式理论上有 2⁹=512 种子集，但实际有意义的组合约 20~30 个，MECE 场景分类帮你直接定位到有意义的那一小部分。"},{t:"b",i:"⚡",s:"帕累托原则：5 种核心场景（快速原型/深度分析/教学/高精度/创意）覆盖约 80% 的实际使用场景，每种场景对应的微模式组合 ≤ 5 个。"}],atoms:[{i:"⚡",n:"快速原型路径",d:"P1+P2，最少Token，最快交付",c:i.accent[400],b:t(i.accent[400],.25),t:"场景1"},{i:"🔬",n:"深度分析路径",d:"P2+P3+P6+P9，最高质量",c:i.secondary[500],b:t(i.secondary[500],.25),t:"场景2"},{i:"📚",n:"教学辅导路径",d:"P1+P8+P4+P6，最优体验",c:i.info[300],b:t(i.info[300],.25),t:"场景3"},{i:"🎯",n:"高精度路径",d:"P4+P9+P7+P5，最低幻觉",c:i.danger[400],b:t(i.danger[400],.25),t:"场景4"},{i:"✨",n:"创意协作路径",d:"P3+P8+P6，最丰富视角",c:i.success[400],b:t(i.success[400],.25),t:"场景5"}],loop:[{i:"🗺️",l:`识别
场景`,c:i.success[400]},{i:"🧮",l:`查找
地图`,c:i.info[400]},{i:"⚡",l:`选择
路径`,c:i.accent[400]},{i:"✅",l:`MECE
验证`,c:i.secondary[500]}],matrixData:{rows:["P1·声明句","P2·思维链","P3·人格叠加","P4·少样本","P5·Token预算","P6·元反思","P7·锚点","P8·渐进揭示","P9·自洽验证"],cols:["快速原型","深度分析","教学辅导","高精度","创意协作"],cells:[[3,1,0,1,0],[2,3,1,2,1],[0,3,1,0,3],[1,2,3,3,1],[2,1,1,3,0],[1,3,2,2,2],[1,2,3,3,1],[0,1,3,1,2],[0,3,1,3,0]]},code:`// 微模式组合地图 — 场景快速通道

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
// 总组合空间 2^9=512 → 压缩到 5 条路径`,checks:["理解9微模式形成的组合空间（512种子集）","掌握5条场景快速通道及其代价权衡","能为新场景快速选择最小必要微模式集合","理解帕累托原则在微模式选择中的应用"],fq:"为什么不应该在所有场景都使用全部9个微模式？",fa:"每个微模式都有 Token 代价和复杂度代价。最优提示体 = 用最小微模式集合满足场景需求。叠加不必要的微模式会稀释注意力、增加 Token 消耗，边际效益递减甚至产生冲突",toon:{f:["工单","主题","组合空间","覆盖率","状态"],v:["CTX-111","组合矩阵","512→5路径","~80%场景","🟢 COMPLETE"]},cv:"combomatrix"},{id:"CTX-112",phase:"阶段 V · 组合进阶层",pc:i.success[400],title:"REPL 实验沙盒——交互式微模式即时验证器",icon:"⚡",ac:`linear-gradient(90deg,${i.success[300]},${i.success[400]})`,ha:t(i.success[300],.08),hg:"linear-gradient(135deg,#0a1400,#101e00)",acc:i.success[300],tag:"动手实验 · 即时反馈 · 输入命令验证模式效果",concept:`本工单是一个<em>交互式实验沙盒</em>——你可以在 REPL 中输入命令，
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
<code style="color:var(--green)">clear</code> → 清空`,callouts:[{t:"g",i:"⚡",s:"动手是最好的学习。在 REPL 中实验每个微模式，观察输出的差异，这比阅读定义更能建立直觉。"},{t:"b",i:"🔬",s:"实验建议：先单独测试每个微模式（p1, p2...），然后用 compose 命令组合 2~3 个，感受叠加效果。"}],atoms:[{i:"⌨️",n:"单模式测试",d:"单独实验每个微模式",c:i.success[300],b:t(i.success[300],.25),t:"基础"},{i:"🔀",n:"compose 组合",d:"多模式叠加实验",c:i.success[400],b:t(i.success[400],.25),t:"组合"},{i:"📊",n:"效果对比",d:"有/无微模式的输出差异",c:i.info[300],b:t(i.info[300],.25),t:"验证"},{i:"💾",n:"快照保存",d:"保存最优组合结果",c:i.info[400],b:t(i.info[400],.25),t:"沉淀"}],loop:[{i:"⌨️",l:`输入
命令`,c:i.success[300]},{i:"⚡",l:`即时
生成`,c:i.success[400]},{i:"👁️",l:`观察
差异`,c:i.info[300]},{i:"🔀",l:`调整
组合`,c:i.info[400]}],isRepl:!0,code:`// REPL 沙盒 — 在下方交互区输入命令
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
   [完成后自评：打分+批评+修订]（P6）`,checks:["在REPL中成功测试至少5个不同的微模式命令","使用 compose 组合至少2个微模式并观察效果","理解有/无微模式时输出的具体差异","找到适合你实际场景的最优微模式组合"],fq:"在 REPL 中实验微模式的核心价值是什么？",fa:'通过即时反馈建立直觉 —— 阅读定义是"知道"，动手实验是"感受"。只有真正输出了有/无微模式的对比，你才能直觉地理解每个微模式的实际效果',toon:{f:["工单","类型","命令数","组合","状态"],v:["CTX-112","交互沙盒","10个命令","compose多选","🟢 COMPLETE"]},cv:"repl"},{id:"CTX-113",phase:"阶段 VI · 垂直领域层",pc:i.accent[400],title:"垂直应用 · 软件工程领域元提示体专项模板",icon:"💻",ac:`linear-gradient(90deg,${i.info[400]},${i.primary[500]})`,ha:t(i.info[400],.08),hg:"linear-gradient(135deg,#061018,#0a1828)",acc:i.info[400],tag:"垂直领域 · SE专项 · 8原子+5微模式 = 完整工程助手",concept:`垂直领域应用是将通用元提示体框架<em>特化到特定专业领域</em>的过程。
软件工程领域有其独特的需求：代码正确性 > 表达流畅性；可运行 > 看起来对。
<br><br>
软件工程专项元提示体的四个核心优化：<br>
<strong>① 代码优先输出</strong>：先给可运行代码，再解释<br>
<strong>② 测试用例强制</strong>：每段代码必须附带测试<br>
<strong>③ 复杂度标注</strong>：时间/空间复杂度必须显式<br>
<strong>④ 版本锁定</strong>：所有代码必须标注运行环境版本`,callouts:[{t:"b",i:"💻",s:'SE 专项约束：代码质量约束（C原子）需要领域特化。通用约束"不虚构"在SE中变为"不虚构API名称、包名、方法签名"——这些虚构的危害远大于虚构文字描述。'},{t:"g",i:"🧪",s:'TDD 思维：软件工程元提示体应内置"测试驱动"思维——先写测试用例（定义期望行为），再写实现。这比先写实现再测试得到更可靠的代码。'}],atoms:[{i:"💻",n:"SE·角色(A)",d:"架构师+安全专家+性能工程师",c:i.info[400],b:t(i.info[400],.25),t:"A特化"},{i:"🔧",n:"SE·指令(B)",d:"TDD流程+复杂度分析+重构建议",c:i.primary[500],b:t(i.primary[500],.25),t:"B特化"},{i:"🛡️",n:"SE·约束(C)",d:"不虚构API+版本锁定+测试强制",c:i.danger[500],b:t(i.danger[500],.25),t:"C特化"},{i:"📋",n:"SE·输出(D)",d:"代码块+复杂度+测试用例三件套",c:i.success[400],b:t(i.success[400],.25),t:"D特化"}],loop:[{i:"📋",l:`理解
需求`,c:i.info[400]},{i:"🧪",l:`写
测试`,c:i.primary[500]},{i:"💻",l:`写
实现`,c:i.success[400]},{i:"🔍",l:`审查
优化`,c:i.accent[400]}],diffBad:["代码没有版本信息（环境不确定）","虚构不存在的库函数","没有时间复杂度分析"],diffGood:["Python 3.11 + FastAPI 0.104，所有导入可直接运行","只使用标准库 and 明确声明的依赖","O(n log n) 时间，O(n) 空间，LeetCode 测试通过"],code:`// 软件工程专项元提示体

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
\``,checks:["理解垂直领域特化的核心原则（领域约束优先）","掌握SE专项的四个核心优化（代码优先/测试强制/复杂度/版本锁定）",'理解SE场景中"不虚构"的特化含义',"能为自己所在的技术栈定制 SE 专项元提示体"],fq:"为什么SE场景中「不虚构API名称」比「不虚构事实」更重要？",fa:"虚构的文字事实读者可以分辨；虚构的API名称会导致代码无法运行，且表面上看起来正确（LLM生成的代码语法合法），危害更隐蔽、更难排查",toon:{f:["工单","领域","特化原子","核心约束","状态"],v:["CTX-113","软件工程","A+B+C+D特化","不虚构API","🟢 COMPLETE"]},cv:"secode"},{id:"CTX-114",phase:"阶段 VI · 垂直领域层",pc:i.accent[400],title:"垂直应用 · 数据分析领域元提示体专项模板",icon:"📊",ac:`linear-gradient(90deg,${i.accent[400]},${i.warning[500]})`,ha:t(i.accent[400],.08),hg:"linear-gradient(135deg,#181200,#221800)",acc:i.accent[400],tag:"垂直领域 · DA专项 · 数据驱动 · 统计严谨性",concept:`数据分析领域的元提示体有独特的<em>统计严谨性</em>要求：
数据讲故事（Data Storytelling）和统计假设检验（Statistical Testing）是两个对精度要求截然不同的任务，需要分别特化。
<br><br>
DA 专项三大核心原则：<br>
<strong>① 数据优先</strong>：所有结论必须有数据支撑，标注置信区间<br>
<strong>② 因果谨慎</strong>：区分「相关性」和「因果性」，不轻易断言因果<br>
<strong>③ 可视化驱动</strong>：优先用图表表达，文字是图表的补充`,callouts:[{t:"o",i:"📊",s:'相关≠因果的特化约束：这是DA领域最常见的逻辑错误。DA专项元提示体必须将"禁止混淆相关和因果"作为最高优先级约束，并要求每次提到关系时明确声明是相关性还是因果性。'},{t:"b",i:"🔬",s:'置信区间强制：DA专项的质量约束必须要求对所有统计结论标注置信区间（CI）或p值。"销售提升了10%"远弱于"销售提升了10%（95% CI: 7%~13%, p<0.01）"。'}],atoms:[{i:"🔬",n:"DA·角色(A)",d:"统计学家+可视化专家+业务分析师",c:i.accent[400],b:t(i.accent[400],.25),t:"A特化"},{i:"📈",n:"DA·指令(B)",d:"EDA→假设→检验→结论→建议",c:i.warning[500],b:t(i.warning[500],.25),t:"B特化"},{i:"⚖️",n:"DA·约束(C)",d:"相关≠因果+置信区间+样本量标注",c:i.danger[500],b:t(i.danger[500],.25),t:"C特化"},{i:"📊",n:"DA·输出(D)",d:"图表描述+统计摘要+业务建议",c:i.info[300],b:t(i.info[300],.25),t:"D特化"}],loop:[{i:"📋",l:`了解
数据`,c:i.accent[400]},{i:"🔬",l:`EDA
探索`,c:i.warning[500]},{i:"📊",l:`假设
检验`,c:i.danger[500]},{i:"💡",l:`业务
洞察`,c:i.info[300]}],diffBad:["「A与B有强烈的因果关系」（混淆相关/因果）","「销售增长了10%」（无置信区间）","「数据显示...」（无样本量说明）"],diffGood:["「A与B呈强正相关(r=0.82, p<0.001)，但因果方向需进一步实验验证」","「销售增长10%(95%CI:7%-13%)，基于n=1200样本」","「在当前样本中，结论显著；需注意样本偏差：[具体说明]」"],code:`// 数据分析专项元提示体

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
\``,checks:["理解DA领域「相关≠因果」约束的核心地位","掌握DA专项的EDA标准五步流程","知道置信区间和p值对数据结论的重要性","能为数据分析任务设计统计严谨的元提示体"],fq:"为什么DA专项元提示体要求区分「相关性」和「因果性」？",fa:"混淆两者是数据分析中最危险的错误 —— 相关性可以用数据直接计算，因果性需要实验设计（如RCT）才能确立。把相关关系当因果关系会导致错误的业务决策",toon:{f:["工单","领域","核心约束","统计标准","状态"],v:["CTX-114","数据分析","相关≠因果","置信区间","🟢 COMPLETE"]},cv:"dacode"},{id:"CTX-115",phase:"阶段 VI · 垂直领域层",pc:i.accent[400],title:"动态元提示体——多轮对话中的状态管理与自适应",icon:"🌊",ac:`linear-gradient(90deg,${i.info[300]},${i.info[200]})`,ha:t(i.info[300],.08),hg:"linear-gradient(135deg,#011618,#022025)",acc:i.info[300],tag:"动态层 · 多轮自适应 · 状态机 · 上下文压缩",concept:`静态元提示体在单轮对话中有效，但在<em>多轮对话</em>中会面临三个挑战：
<br><br>
<strong>① 上下文膨胀</strong>：每轮对话都在增加 Token 消耗<br>
<strong>② 指令衰减</strong>：随着对话变长，早期指令的影响力减弱<br>
<strong>③ 状态失同步</strong>：LLM 可能"忘记"当前的任务进度<br>
<br>
动态元提示体通过三个机制解决这些问题：<br>
<strong>滑动窗口</strong>：保留最近 N 轮，压缩历史<br>
<strong>周期锚</strong>：每 K 轮自动重注入核心指令<br>
<strong>TOON 状态同步</strong>：每轮更新状态，保持进度同步`,callouts:[{t:"b",i:"🌊",s:'滑动窗口设计：不能简单地截断历史。应该压缩历史摘要（保留关键决策点），而不是丢弃。"上一轮决定使用Redis做缓存层"是必须保留的状态信息。'},{t:"g",i:"🔄",s:"周期锚频率：建议每 5~8 轮重注入一次核心 Role + 核心 Constraint。频率太低会漂移，频率太高会浪费 Token。根据任务复杂度调整。"}],atoms:[{i:"🌊",n:"滑动窗口",d:"保留最近N轮+历史摘要",c:i.info[300],b:t(i.info[300],.25),t:"压缩"},{i:"🔄",n:"周期锚",d:"每K轮重注入核心指令",c:i.info[400],b:t(i.info[400],.25),t:"防漂移"},{i:"📊",n:"TOON同步",d:"每轮更新状态，保持进度",c:i.secondary[500],b:t(i.secondary[500],.25),t:"状态"},{i:"🗜️",n:"历史压缩",d:"摘要关键决策，丢弃冗余",c:i.accent[400],b:t(i.accent[400],.25),t:"效率"}],loop:[{i:"💬",l:`新一轮
对话`,c:i.info[300]},{i:"🗜️",l:`压缩
历史`,c:i.info[400]},{i:"⚓",l:`检查
是否需锚`,c:i.secondary[500]},{i:"📊",l:`更新
TOON`,c:i.accent[400]}],diffBad:["直接拼接所有历史（超出Token限制）","不重注入指令（对话后期完全漂移）","无状态管理（每轮不知道进度）"],diffGood:["历史压缩：「已决定技术栈: Next.js+Supabase，已完成：登录模块，当前：购物车模块」","第8轮检测：触发周期锚，重注入Role和核心Constraint","TOON更新：SessionLog[轮次,当前任务,已完成,下一步]"],code:`// 动态元提示体 — 多轮对话管理器

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
\``,checks:["理解多轮对话的三个挑战（膨胀/衰减/失同步）","掌握滑动窗口的正确实现方式（压缩非截断）","知道周期锚的触发频率设计原则","能为长对话任务设计完整的动态会话协议"],fq:"为什么历史压缩要「保留决策点」而不是「截断到最近N轮」？",fa:'重要的决策信息可能在很早的对话轮次中——"第1轮决定使用PostgreSQL"在第20轮仍然有效。截断会丢失这些关键约束；压缩摘要保留决策点，既节省Token又保持了完整的任务上下文',toon:{f:["工单","主题","核心机制","窗口大小","状态"],v:["CTX-115","动态会话","滑窗+周期锚","N=5轮","🟢 COMPLETE"]},cv:"dynamic"},{id:"CTX-116",phase:"阶段 VI · 垂直领域层",pc:i.accent[400],title:"终极综合——8原子×9微模式×动态会话的完整闭环",icon:"∞",ac:`linear-gradient(90deg,${i.accent[400]},${i.danger[400]},${i.info[200]})`,ha:t(i.accent[400],.12),hg:"linear-gradient(135deg,#08051a,#100a28)",acc:i.accent[400],tag:"毕业综合 · 17维度 · 指数复合 · 自进化闭环",concept:`这是整个 v4 课程的<em>终极综合</em>。你现在拥有的工具箱：
<br><br>
<strong>8个原子</strong>（Role/Instruction/Constraint/Output/Feedback/State/Context/Iterator）<br>
<strong>9个微模式</strong>（P1 角色声明·P2 思维链·P3 人格叠加·P4 少样本·P5 Token预算·P6 元反思·P7 锚点·P8 渐进揭示·P9 自洽验证）<br>
<strong>动态会话协议</strong>（滑动窗口·周期锚·TOON同步）<br>
<br>
总设计维度：<em>17 个维度</em>。每个维度 3 个强度 = <strong>3¹⁷ ≈ 129,140,163 种理论组合</strong>。<br>
本体设计 + MECE = 把这个天文数字压缩到<em>7条经过验证的场景快速通道</em>。`,callouts:[{t:"b",i:"∞",s:"复利效应：每次迭代提升 5%，经过 30 次迭代后质量为初始的 1.05³⁰ ≈ 4.3 倍。闭环的价值不在于单次优化，而在于让每次迭代都沉淀为下一次的起点。"},{t:"g",i:"🏆",s:'毕业标准：你能为一个你实际面对的真实问题，从场景出发，选择合适的原子强度和微模式组合，构建一个完整的元提示体，并完成一次"发射→反馈→迭代"的完整闭环。'}],atoms:[{i:"🎭",n:"A·Role",d:"三层角色+P1/P3",c:i.info[400],b:t(i.info[400],.2),t:"A"},{i:"📋",n:"B·Instruction",d:"工作流+P2 CoT",c:i.secondary[500],b:t(i.secondary[500],.2),t:"B"},{i:"🔒",n:"C·Constraint",d:"三维护栏+P9验证",c:i.warning[500],b:t(i.warning[500],.2),t:"C"},{i:"📤",n:"D·Output",d:"三层嵌套+P4示例",c:i.success[400],b:t(i.success[400],.2),t:"D"},{i:"📡",n:"E·Feedback",d:"MECE分支+P6反思",c:i.danger[400],b:t(i.danger[400],.2),t:"E"},{i:"📊",n:"F·State",d:"TOON+动态更新",c:i.accent[400],b:t(i.accent[400],.2),t:"F"},{i:"📚",n:"G·Context",d:"三层注入+P5预算",c:i.primary[500],b:t(i.primary[500],.2),t:"G"},{i:"🔁",n:"H·Iterator",d:"版本控制+P7锚点",c:i.info[300],b:t(i.info[300],.2),t:"H"}],loop:[{i:"🚀",l:`发射
完整体`,c:i.info[400]},{i:"🤖",l:`LLM
执行`,c:i.secondary[500]},{i:"📊",l:`格式化
输出`,c:i.success[400]},{i:"📡",l:`Feedback
钩触发`,c:i.danger[400]},{i:"🧠",l:`P6元
反思`,c:i.warning[500]},{i:"📊",l:`TOON
更新`,c:i.accent[400]},{i:"🔁",l:`版本
迭代`,c:i.info[300]}],code:`// 🌟 终极元提示体模板 v4.0 — 17维度完整版

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
\``,checks:["能描述8原子+9微模式+动态协议的完整架构","理解3¹⁷组合空间如何通过本体设计压缩为7条路径","能为实际项目设计完整的v4版元提示体","完成至少1次真实的发射→反馈→迭代完整闭环"],fq:"从v1（单提示）到v4（17维度闭环），核心进化是什么？",fa:'v1：一次性函数调用 → v4：自进化的认知程序。关键跳跃：① 结构化（原子分离）② 微模式化（可复用策略）③ 闭环化（每次迭代都沉淀为下一次的起点）—— 从"写提示"到"设计认知系统"',toon:{f:["工单","维度","组合空间","压缩后","状态"],v:["CTX-116","17维度","3¹⁷≈1.3亿","7条路径","🟢 COMPLETE"]},cv:"final"}],J=[{id:"home",title:"心流触发 Wiki",subtitle:"首页",tags:["wiki","flow","心流","ontology","wishful thinking"],content:"心流触发方法论首页。通过本体定义、愿望思考与延迟决策，构建高效的个人生产力系统。掌握心流状态的底层原理与实践路径。"},{id:"overview",title:"全局概览",subtitle:"Wiki 结构图",tags:["wiki","overview","map","结构"],content:"心流触发全局概览，包含A卷原子组件与B卷深层原子组件。展示系统的复杂度阶梯和方法论体系的全局脉络。"},{id:"mece",title:"MECE 结构图",subtitle:"心流架构",tags:["wiki","mece","architecture","架构"],content:"心流触发系统的MECE结构分析。将整个心流触发过程划分为准备阶段、启动阶段、执行循环、阻塞解决、收尾阶段，无遗漏无重叠。"},{id:"atom-ontology",title:"🧩 A1 · Ontology 本体",subtitle:"原子组件",tags:["wiki","atoms","ontology","本体","A1"],content:"A1 Ontology 本体定义：将模糊的任务具象化为对象、动作、完成态。用三元组 实体-关系-属性 建立工作边界，消除不确定性。"},{id:"atom-wishful",title:"✨ A2 · Wishful Thinking",subtitle:"原子组件",tags:["wiki","atoms","wishful","愿望思考","A2"],content:"A2 Wishful Thinking 愿望思考：在启动阶段假设所有未满足的外部依赖已经解决，直接写出理想路径，消除冷启动的焦虑与阻力。"},{id:"atom-lazy",title:"⏳ A3 · Lazy Evaluation",subtitle:"原子组件",tags:["wiki","atoms","lazy","惰性求值","A3"],content:"A3 Lazy Evaluation 惰性求值/延迟计算：执行中遇到非当前分支必须的阻碍时，用TODO或空存根代替，延迟到不得不解决时再处理，保持主线程流畅度。"},{id:"atom-feedback",title:"🔄 A4 · Feedback Loop",subtitle:"原子组件",tags:["wiki","atoms","feedback","反馈循环","A4","多巴胺"],content:"A4 Feedback Loop 即时反馈循环：让每一个微小动作的完成都产生明确的物理或心理确认，激活多巴胺奖励回路，维持心流飞轮的动力。"},{id:"atom-singlethread",title:"🧵 A5 · Single Thread",subtitle:"原子组件",tags:["wiki","atoms","single thread","单线程","A5"],content:"A5 Single Thread 单线程执行：在任一时刻将注意力锁定在唯一的一个任务上，不进行多任务切换，降低认知上下文切换成本。"},{id:"combo-2",title:"🔗 L2 · 双元组合",subtitle:"组合模式",tags:["wiki","combos","L2","双元","Ontology","Wishful","Feedback","Lazy"],content:"L2双元组合模式：Ontology×Wishful（零阻力启动）、Single Thread×Feedback（专注飞轮）、Wishful×Lazy Eval（阻力消除器），实现1+1>2的涌现效应。"},{id:"combo-3",title:"🔗 L3 · 三元组合",subtitle:"组合模式",tags:["wiki","combos","L3","三元","Ontology","Wishful","Lazy","Feedback"],content:"L3三元组合模式：准备启动环（A1+A2+A3）建立零阻力执行管道，核心执行环（A1+A4+A5）建立深度专注回路，自稳定执行系统。"},{id:"combo-full",title:"🌐 L5 · 完整系统",subtitle:"组合模式",tags:["wiki","combos","L5","完整系统","心流"],content:"L5完整心流触发系统：将A1至A5五个原子组件有机整合，实现从输入到输出、从启动到反馈的无缝闭环心流系统。"},{id:"scene-write",title:"✍️ 场景：写作心流",subtitle:"应用场景",tags:["wiki","scenes","write","写作","段落","草稿"],content:"写作场景下的心流触发实践。使用Ontology定义段落完成态，用Wishful假设句式结构，用Feedback确认字数勾记，维持码字心流。"},{id:"scene-code",title:"💻 场景：编程心流",subtitle:"应用场景",tags:["wiki","scenes","code","编程","TODO","测试"],content:"编程场景下的心流触发实践。先定义接口输入输出，遇到复杂底层实现先用TODO存根（Lazy），编写单元测试驱动即时反馈（Feedback）。"},{id:"scene-decide",title:"⚡ 场景：模糊决策",subtitle:"应用场景",tags:["wiki","scenes","decide","决策","不确定性"],content:"面对高度模糊和不确定性时的决策心流。通过Ontology厘清决策的核心要素，用Wishful假设最坏结果已发生，设定决策的时间围栏。"},{id:"sop",title:"📋 标准 SOP 速查",subtitle:"参考",tags:["wiki","sop","reference","速查","标准化","流程"],content:"心流触发标准SOP速查表。包含任务初始化（T+0）、启动前三分钟校验、执行中防打断机制以及任务收尾标记的标准化操作规程。"},{id:"antipattern",title:"🚫 反模式手册",subtitle:"参考",tags:["wiki","antipattern","warnings","错误","心理阻碍","多任务"],content:"心流反模式手册。列举并分析常见的心理阻碍，如过度准备（Over-preparation）、完美主义拖延、多任务并发（Multitasking）、无反馈黑洞等。"},{id:"toon-log",title:"📊 TOON 项目日志",subtitle:"参考",tags:["wiki","toon","logs","日志","演进"],content:"TOON项目运行与设计日志。记录了第一代心流触发系统在实际研发项目中的上线数据、用户反馈与演进轨迹。"},{id:"b1-completion-state",title:"🎯 B1 · 完成态设计",subtitle:"第二卷 · 深层原子",tags:["wiki","atoms","done","completion","B1","目标模糊"],content:"B1完成态设计（Done-State Design）：显式定义任务结束时的具体物质状态或文件状态，防止因目标模糊导致脑力摩擦和无意义的完美主义。"},{id:"b2-interrupt-queue",title:"📥 B2 · 中断队列",subtitle:"第二卷 · 深层原子",tags:["wiki","atoms","interrupt","queue","B2","灵感"],content:"B2中断队列（Interrupt Queue）：在受到外部打断或内部灵感突现时，不在主线程立即处理，而是快速记录到异步缓冲队列中，保持当前单线程的连续性。"},{id:"b3-time-fence",title:"⏳ B3 · 时间围栏",subtitle:"第二卷 · 深层原子",tags:["wiki","atoms","time","fence","B3","番茄钟"],content:"B3时间围栏（Time Fence）：为当前专注区间设立硬性的截止界限（如番茄钟或30分钟围栏），利用时间压力激活大脑的行动力，防止任务过度发散。"},{id:"b4-context-anchor",title:"⚓ B4 · 上下文锚点",subtitle:"第二卷 · 深层原子",tags:["wiki","atoms","context","anchor","B4","记忆恢复"],content:"B4上下文锚点（Context Anchor）：在暂停或结束当前工作时，记录下一部分行动的精确切入线索和工作记忆恢复词，将二次启动成本降到最低。"},{id:"b5-minimum-viable-action",title:"🛠️ B5 · 最小可行动作",subtitle:"第二卷 · 深层原子",tags:["wiki","atoms","mva","B5","摩擦力"],content:"B5最小可行动作（MVA）：将启动的第一步操作简化为不需要脑力思考的物理动作（如打开编辑器、写一行注释），以极低的门槛跨越静态摩擦力。"},{id:"vol2-combo-ab",title:"🔗 跨卷双元组合",subtitle:"第二卷 · 深层组合",tags:["wiki","combos","cross-volume","A×B","协同"],content:"A×B跨卷双元组合：如A1(Ontology)×B1(完成态设计)、A3(Lazy)×B2(中断队列)、A5(Single Thread)×B3(Time Fence)等，实现底层专注与深层架构的融合协同。"},{id:"vol2-combo-triple",title:"🔗 深层三元组合",subtitle:"第二卷 · 深层组合",tags:["wiki","combos","triple","deep","屏蔽"],content:"深层三元组合：例如B1+B4+B5构成快速复归闭环（定义完成态、记录锚点、用最小动作重启），和B2+B3+A5构成抗干扰执行屏蔽环。"},{id:"vol2-system",title:"🌐 双卷融合系统",subtitle:"第二卷 · 深层组合",tags:["wiki","system","fusion","deep","对抗"],content:"双卷融合系统：A卷5个原子组件与B卷5个深层原子组件全面整合。定义了复杂的并发对抗模型和多任务间的高保真度切换规则。"},{id:"scene-research",title:"🔍 场景：研究综述",subtitle:"第二卷 · 深层场景",tags:["wiki","scenes","research","研究","文献","信息爆炸"],content:"信息爆炸环境下的文献与研究综述心流。使用B2中断队列缓存无关文献，用B1定义本次阅读的具体输出指标（如3个核心结论），避免文献深渊。"},{id:"scene-meeting",title:"🤝 场景：会议准备",subtitle:"第二卷 · 深层场景",tags:["wiki","scenes","meeting","会议","沟通","议程"],content:"高效会议准备的心流框架。用A1(Ontology)明确会议议程与预期产出状态，用B4(Context Anchor)在会前5分钟建立个人记忆锚点，提升沟通效率。"},{id:"scene-stuck",title:"🧱 场景：彻底卡住了",subtitle:"第二卷 · 深层场景",tags:["wiki","scenes","stuck","卡住","情绪","破局"],content:"当任务彻底卡死、情绪焦虑、思绪混乱时的破局方案。执行B5(MVA)物理动作重启，配合A3(Lazy)封锁非关键逻辑，迅速打破僵局重获控制感。"},{id:"meta-energy",title:"🔋 能量管理与心流",subtitle:"第二卷 · 元认知层",tags:["wiki","meta","energy","能量","生理","带宽"],content:"元认知能量管理。心流不是恒定的，而是依赖于生理能量（睡眠、饮食）与认知能量（决策带宽）。通过识别黄金时间段，合理分配高耗脑任务。"},{id:"meta-calibration",title:"⚙️ 系统校准手册",subtitle:"第二卷 · 元认知层",tags:["wiki","meta","calibration","校准","自检","回顾"],content:"心流系统定期自检与校准指南。每周或每月对个人的心流阻力、阻碍因素、MVA设置进行回顾与微调，保证系统能够长期良性运转。"},{id:"toon-log2",title:"📊 TOON 日志 Vol.2",subtitle:"第二卷 · 元认知层",tags:["wiki","toon","logs","Vol.2","工程","交付"],content:"TOON项目日志第二卷。记录了在多维复杂工程背景下，引入B卷深层原子组件后，研发团队在吞吐量、交付周期、工作倦怠率等关键指标上的改善数据。"}],Z={一:{full:"yi",initial:"y"},万:{full:"wan",initial:"w"},三:{full:"san",initial:"s"},上:{full:"shang",initial:"s"},下:{full:"xia",initial:"x"},不:{full:"bu",initial:"b"},与:{full:"yu",initial:"y"},专:{full:"zhuan",initial:"z"},且:{full:"qie",initial:"q"},世:{full:"shi",initial:"s"},业:{full:"ye",initial:"y"},东:{full:"dong",initial:"d"},丢:{full:"diu",initial:"d"},两:{full:"liang",initial:"l"},严:{full:"yan",initial:"y"},个:{full:"ge",initial:"g"},中:{full:"zhong",initial:"z"},丰:{full:"feng",initial:"f"},串:{full:"chuan",initial:"c"},临:{full:"lin",initial:"l"},为:{full:"wei",initial:"w"},主:{full:"zhu",initial:"z"},举:{full:"ju",initial:"j"},久:{full:"jiu",initial:"j"},么:{full:"me",initial:"m"},义:{full:"yi",initial:"y"},之:{full:"zhi",initial:"z"},乎:{full:"hu",initial:"h"},乏:{full:"fa",initial:"f"},乐:{full:"le",initial:"l"},乘:{full:"cheng",initial:"c"},也:{full:"ye",initial:"y"},习:{full:"xi",initial:"x"},书:{full:"shu",initial:"s"},买:{full:"mai",initial:"m"},乱:{full:"luan",initial:"l"},了:{full:"le",initial:"l"},予:{full:"yu",initial:"y"},争:{full:"zheng",initial:"z"},事:{full:"shi",initial:"s"},二:{full:"er",initial:"e"},于:{full:"yu",initial:"y"},互:{full:"hu",initial:"h"},五:{full:"wu",initial:"w"},些:{full:"xie",initial:"x"},交:{full:"jiao",initial:"j"},产:{full:"chan",initial:"c"},享:{full:"xiang",initial:"x"},京:{full:"jing",initial:"j"},亮:{full:"liang",initial:"l"},人:{full:"ren",initial:"r"},亿:{full:"yi",initial:"y"},什:{full:"shen",initial:"s"},仅:{full:"jin",initial:"j"},今:{full:"jin",initial:"j"},仍:{full:"reng",initial:"r"},从:{full:"cong",initial:"c"},仓:{full:"cang",initial:"c"},他:{full:"ta",initial:"t"},付:{full:"fu",initial:"f"},代:{full:"dai",initial:"d"},令:{full:"ling",initial:"l"},以:{full:"yi",initial:"y"},仪:{full:"yi",initial:"y"},们:{full:"men",initial:"m"},仲:{full:"zhong",initial:"z"},件:{full:"jian",initial:"j"},价:{full:"jia",initial:"j"},任:{full:"ren",initial:"r"},份:{full:"fen",initial:"f"},企:{full:"qi",initial:"q"},伍:{full:"wu",initial:"w"},众:{full:"zhong",initial:"z"},优:{full:"you",initial:"y"},会:{full:"hui",initial:"h"},伟:{full:"wei",initial:"w"},传:{full:"chuan",initial:"c"},伤:{full:"shang",initial:"s"},估:{full:"gu",initial:"g"},似:{full:"shi",initial:"s"},但:{full:"dan",initial:"d"},位:{full:"wei",initial:"w"},低:{full:"di",initial:"d"},住:{full:"zhu",initial:"z"},佐:{full:"zuo",initial:"z"},体:{full:"ti",initial:"t"},何:{full:"he",initial:"h"},余:{full:"yu",initial:"y"},作:{full:"zuo",initial:"z"},你:{full:"ni",initial:"n"},佰:{full:"bai",initial:"b"},佳:{full:"jia",initial:"j"},使:{full:"shi",initial:"s"},例:{full:"li",initial:"l"},供:{full:"gong",initial:"g"},依:{full:"yi",initial:"y"},便:{full:"bian",initial:"b"},俄:{full:"e",initial:"e"},保:{full:"bao",initial:"b"},信:{full:"xin",initial:"x"},修:{full:"xiu",initial:"x"},倍:{full:"bei",initial:"b"},倒:{full:"dao",initial:"d"},候:{full:"hou",initial:"h"},借:{full:"jie",initial:"j"},倦:{full:"juan",initial:"j"},值:{full:"zhi",initial:"z"},倾:{full:"qing",initial:"q"},假:{full:"jia",initial:"j"},偏:{full:"pian",initial:"p"},做:{full:"zuo",initial:"z"},停:{full:"ting",initial:"t"},健:{full:"jian",initial:"j"},偶:{full:"ou",initial:"o"},偷:{full:"tou",initial:"t"},储:{full:"chu",initial:"c"},像:{full:"xiang",initial:"x"},僵:{full:"jiang",initial:"j"},允:{full:"yun",initial:"y"},元:{full:"yuan",initial:"y"},兄:{full:"xiong",initial:"x"},充:{full:"chong",initial:"c"},先:{full:"xian",initial:"x"},光:{full:"guang",initial:"g"},免:{full:"mian",initial:"m"},入:{full:"ru",initial:"r"},全:{full:"quan",initial:"q"},公:{full:"gong",initial:"g"},六:{full:"liu",initial:"l"},共:{full:"gong",initial:"g"},关:{full:"guan",initial:"g"},兴:{full:"xing",initial:"x"},其:{full:"qi",initial:"q"},具:{full:"ju",initial:"j"},典:{full:"dian",initial:"d"},兼:{full:"jian",initial:"j"},内:{full:"nei",initial:"n"},册:{full:"ce",initial:"c"},再:{full:"zai",initial:"z"},冒:{full:"mao",initial:"m"},冗:{full:"rong",initial:"r"},写:{full:"xie",initial:"x"},军:{full:"jun",initial:"j"},冲:{full:"chong",initial:"c"},决:{full:"jue",initial:"j"},况:{full:"kuang",initial:"k"},冷:{full:"leng",initial:"l"},冻:{full:"dong",initial:"d"},净:{full:"jing",initial:"j"},准:{full:"zhun",initial:"z"},凌:{full:"ling",initial:"l"},减:{full:"jian",initial:"j"},几:{full:"ji",initial:"j"},凭:{full:"ping",initial:"p"},出:{full:"chu",initial:"c"},击:{full:"ji",initial:"j"},函:{full:"han",initial:"h"},刀:{full:"dao",initial:"d"},分:{full:"fen",initial:"f"},切:{full:"qie",initial:"q"},划:{full:"hua",initial:"h"},列:{full:"lie",initial:"l"},刘:{full:"liu",initial:"l"},则:{full:"ze",initial:"z"},刚:{full:"gang",initial:"g"},创:{full:"chuang",initial:"c"},初:{full:"chu",initial:"c"},删:{full:"shan",initial:"s"},判:{full:"pan",initial:"p"},利:{full:"li",initial:"l"},别:{full:"bie",initial:"b"},到:{full:"dao",initial:"d"},制:{full:"zhi",initial:"z"},刷:{full:"shua",initial:"s"},刻:{full:"ke",initial:"k"},前:{full:"qian",initial:"q"},剔:{full:"ti",initial:"t"},剥:{full:"bo",initial:"b"},剩:{full:"sheng",initial:"s"},剪:{full:"jian",initial:"j"},副:{full:"fu",initial:"f"},割:{full:"ge",initial:"g"},力:{full:"li",initial:"l"},办:{full:"ban",initial:"b"},功:{full:"gong",initial:"g"},加:{full:"jia",initial:"j"},务:{full:"wu",initial:"w"},动:{full:"dong",initial:"d"},助:{full:"zhu",initial:"z"},励:{full:"li",initial:"l"},势:{full:"shi",initial:"s"},勤:{full:"qin",initial:"q"},勾:{full:"gou",initial:"g"},包:{full:"bao",initial:"b"},化:{full:"hua",initial:"h"},北:{full:"bei",initial:"b"},匹:{full:"pi",initial:"p"},区:{full:"qu",initial:"q"},十:{full:"shi",initial:"s"},升:{full:"sheng",initial:"s"},半:{full:"ban",initial:"b"},华:{full:"hua",initial:"h"},协:{full:"xie",initial:"x"},单:{full:"dan",initial:"d"},南:{full:"nan",initial:"n"},占:{full:"zhan",initial:"z"},卡:{full:"ka",initial:"k"},卫:{full:"wei",initial:"w"},印:{full:"yin",initial:"y"},危:{full:"wei",initial:"w"},即:{full:"ji",initial:"j"},卷:{full:"juan",initial:"j"},厂:{full:"chang",initial:"c"},历:{full:"li",initial:"l"},压:{full:"ya",initial:"y"},厘:{full:"li",initial:"l"},原:{full:"yuan",initial:"y"},去:{full:"qu",initial:"q"},叁:{full:"san",initial:"s"},参:{full:"can",initial:"c"},又:{full:"you",initial:"y"},及:{full:"ji",initial:"j"},友:{full:"you",initial:"y"},双:{full:"shuang",initial:"s"},反:{full:"fan",initial:"f"},发:{full:"fa",initial:"f"},取:{full:"qu",initial:"q"},受:{full:"shou",initial:"s"},变:{full:"bian",initial:"b"},叙:{full:"xu",initial:"x"},叠:{full:"die",initial:"d"},口:{full:"kou",initial:"k"},句:{full:"ju",initial:"j"},另:{full:"ling",initial:"l"},只:{full:"zhi",initial:"z"},召:{full:"zhao",initial:"z"},可:{full:"ke",initial:"k"},台:{full:"tai",initial:"t"},史:{full:"shi",initial:"s"},右:{full:"you",initial:"y"},号:{full:"hao",initial:"h"},司:{full:"si",initial:"s"},各:{full:"ge",initial:"g"},合:{full:"he",initial:"h"},同:{full:"tong",initial:"t"},名:{full:"ming",initial:"m"},后:{full:"hou",initial:"h"},吐:{full:"tu",initial:"t"},向:{full:"xiang",initial:"x"},吗:{full:"ma",initial:"m"},吞:{full:"tun",initial:"t"},否:{full:"fou",initial:"f"},含:{full:"han",initial:"h"},听:{full:"ting",initial:"t"},启:{full:"qi",initial:"q"},呈:{full:"cheng",initial:"c"},告:{full:"gao",initial:"g"},员:{full:"yuan",initial:"y"},周:{full:"zhou",initial:"z"},味:{full:"wei",initial:"w"},命:{full:"ming",initial:"m"},和:{full:"he",initial:"h"},品:{full:"pin",initial:"p"},哈:{full:"ha",initial:"h"},响:{full:"xiang",initial:"x"},哪:{full:"na",initial:"n"},哲:{full:"zhe",initial:"z"},售:{full:"shou",initial:"s"},唯:{full:"wei",initial:"w"},商:{full:"shang",initial:"s"},善:{full:"shan",initial:"s"},喜:{full:"xi",initial:"x"},器:{full:"qi",initial:"q"},四:{full:"si",initial:"s"},回:{full:"hui",initial:"h"},因:{full:"yin",initial:"y"},团:{full:"tuan",initial:"t"},围:{full:"wei",initial:"w"},固:{full:"gu",initial:"g"},国:{full:"guo",initial:"g"},图:{full:"tu",initial:"t"},圈:{full:"quan",initial:"q"},在:{full:"zai",initial:"z"},地:{full:"di",initial:"d"},场:{full:"chang",initial:"c"},址:{full:"zhi",initial:"z"},均:{full:"jun",initial:"j"},坏:{full:"huai",initial:"h"},坑:{full:"keng",initial:"k"},块:{full:"kuai",initial:"k"},坚:{full:"jian",initial:"j"},坨:{full:"tuo",initial:"t"},垂:{full:"chui",initial:"c"},型:{full:"xing",initial:"x"},城:{full:"cheng",initial:"c"},域:{full:"yu",initial:"y"},基:{full:"ji",initial:"j"},堆:{full:"dui",initial:"d"},塞:{full:"sai",initial:"s"},填:{full:"tian",initial:"t"},境:{full:"jing",initial:"j"},增:{full:"zeng",initial:"z"},士:{full:"shi",initial:"s"},壮:{full:"zhuang",initial:"z"},声:{full:"sheng",initial:"s"},壹:{full:"yi",initial:"y"},处:{full:"chu",initial:"c"},备:{full:"bei",initial:"b"},复:{full:"fu",initial:"f"},外:{full:"wai",initial:"w"},多:{full:"duo",initial:"d"},够:{full:"gou",initial:"g"},大:{full:"da",initial:"d"},天:{full:"tian",initial:"t"},太:{full:"tai",initial:"t"},失:{full:"shi",initial:"s"},头:{full:"tou",initial:"t"},夸:{full:"kua",initial:"k"},夹:{full:"jia",initial:"j"},奇:{full:"qi",initial:"q"},奏:{full:"zou",initial:"z"},契:{full:"qi",initial:"q"},奖:{full:"jiang",initial:"j"},套:{full:"tao",initial:"t"},好:{full:"hao",initial:"h"},如:{full:"ru",initial:"r"},妥:{full:"tuo",initial:"t"},始:{full:"shi",initial:"s"},姓:{full:"xing",initial:"x"},委:{full:"wei",initial:"w"},娃:{full:"wa",initial:"w"},娜:{full:"na",initial:"n"},媒:{full:"mei",initial:"m"},子:{full:"zi",initial:"z"},字:{full:"zi",initial:"z"},存:{full:"cun",initial:"c"},学:{full:"xue",initial:"x"},它:{full:"ta",initial:"t"},守:{full:"shou",initial:"s"},安:{full:"an",initial:"a"},完:{full:"wan",initial:"w"},宏:{full:"hong",initial:"h"},官:{full:"guan",initial:"g"},定:{full:"ding",initial:"d"},实:{full:"shi",initial:"s"},审:{full:"shen",initial:"s"},客:{full:"ke",initial:"k"},害:{full:"hai",initial:"h"},家:{full:"jia",initial:"j"},容:{full:"rong",initial:"r"},宽:{full:"kuan",initial:"k"},宿:{full:"su",initial:"s"},密:{full:"mi",initial:"m"},富:{full:"fu",initial:"f"},察:{full:"cha",initial:"c"},对:{full:"dui",initial:"d"},寻:{full:"xun",initial:"x"},导:{full:"dao",initial:"d"},封:{full:"feng",initial:"f"},射:{full:"she",initial:"s"},将:{full:"jiang",initial:"j"},小:{full:"xiao",initial:"x"},少:{full:"shao",initial:"s"},尔:{full:"er",initial:"e"},尖:{full:"jian",initial:"j"},尚:{full:"shang",initial:"s"},尝:{full:"chang",initial:"c"},尤:{full:"you",initial:"y"},就:{full:"jiu",initial:"j"},尽:{full:"jin",initial:"j"},尾:{full:"wei",initial:"w"},局:{full:"ju",initial:"j"},层:{full:"ceng",initial:"c"},居:{full:"ju",initial:"j"},屏:{full:"ping",initial:"p"},展:{full:"zhan",initial:"z"},属:{full:"shu",initial:"s"},岁:{full:"sui",initial:"s"},岭:{full:"ling",initial:"l"},峰:{full:"feng",initial:"f"},嵌:{full:"qian",initial:"q"},工:{full:"gong",initial:"g"},左:{full:"zuo",initial:"z"},巧:{full:"qiao",initial:"q"},巩:{full:"gong",initial:"g"},差:{full:"cha",initial:"c"},己:{full:"ji",initial:"j"},已:{full:"yi",initial:"y"},巴:{full:"ba",initial:"b"},市:{full:"shi",initial:"s"},布:{full:"bu",initial:"b"},师:{full:"shi",initial:"s"},希:{full:"xi",initial:"x"},帕:{full:"pa",initial:"p"},带:{full:"dai",initial:"d"},帧:{full:"zhen",initial:"z"},帮:{full:"bang",initial:"b"},常:{full:"chang",initial:"c"},幂:{full:"mi",initial:"m"},幅:{full:"fu",initial:"f"},干:{full:"gan",initial:"g"},平:{full:"ping",initial:"p"},年:{full:"nian",initial:"n"},并:{full:"bing",initial:"b"},幻:{full:"huan",initial:"h"},广:{full:"guang",initial:"g"},序:{full:"xu",initial:"x"},库:{full:"ku",initial:"k"},应:{full:"ying",initial:"y"},底:{full:"di",initial:"d"},店:{full:"dian",initial:"d"},废:{full:"fei",initial:"f"},度:{full:"du",initial:"d"},康:{full:"kang",initial:"k"},延:{full:"yan",initial:"y"},建:{full:"jian",initial:"j"},开:{full:"kai",initial:"k"},异:{full:"yi",initial:"y"},弃:{full:"qi",initial:"q"},式:{full:"shi",initial:"s"},引:{full:"yin",initial:"y"},弟:{full:"di",initial:"d"},张:{full:"zhang",initial:"z"},弥:{full:"mi",initial:"m"},弱:{full:"ruo",initial:"r"},弹:{full:"dan",initial:"d"},强:{full:"qiang",initial:"q"},归:{full:"gui",initial:"g"},当:{full:"dang",initial:"d"},录:{full:"lu",initial:"l"},形:{full:"xing",initial:"x"},影:{full:"ying",initial:"y"},彻:{full:"che",initial:"c"},往:{full:"wang",initial:"w"},征:{full:"zheng",initial:"z"},径:{full:"jing",initial:"j"},待:{full:"dai",initial:"d"},很:{full:"hen",initial:"h"},律:{full:"lv",initial:"l"},得:{full:"de",initial:"d"},御:{full:"yu",initial:"y"},循:{full:"xun",initial:"x"},微:{full:"wei",initial:"w"},心:{full:"xin",initial:"x"},必:{full:"bi",initial:"b"},忆:{full:"yi",initial:"y"},志:{full:"zhi",initial:"z"},忘:{full:"wang",initial:"w"},快:{full:"kuai",initial:"k"},念:{full:"nian",initial:"n"},忽:{full:"hu",initial:"h"},态:{full:"tai",initial:"t"},怎:{full:"zen",initial:"z"},思:{full:"si",initial:"s"},怠:{full:"dai",initial:"d"},急:{full:"ji",initial:"j"},性:{full:"xing",initial:"x"},怪:{full:"guai",initial:"g"},总:{full:"zong",initial:"z"},恒:{full:"heng",initial:"h"},恢:{full:"hui",initial:"h"},恭:{full:"gong",initial:"g"},息:{full:"xi",initial:"x"},恰:{full:"qia",initial:"q"},悉:{full:"xi",initial:"x"},悬:{full:"xuan",initial:"x"},悲:{full:"bei",initial:"b"},情:{full:"qing",initial:"q"},惯:{full:"guan",initial:"g"},惰:{full:"duo",initial:"d"},想:{full:"xiang",initial:"x"},意:{full:"yi",initial:"y"},感:{full:"gan",initial:"g"},愿:{full:"yuan",initial:"y"},慎:{full:"shen",initial:"s"},慢:{full:"man",initial:"m"},懂:{full:"dong",initial:"d"},成:{full:"cheng",initial:"c"},我:{full:"wo",initial:"w"},或:{full:"huo",initial:"h"},战:{full:"zhan",initial:"z"},截:{full:"jie",initial:"j"},戳:{full:"chuo",initial:"c"},户:{full:"hu",initial:"h"},所:{full:"suo",initial:"s"},扇:{full:"shan",initial:"s"},手:{full:"shou",initial:"s"},才:{full:"cai",initial:"c"},打:{full:"da",initial:"d"},扔:{full:"reng",initial:"r"},托:{full:"tuo",initial:"t"},扣:{full:"kou",initial:"k"},执:{full:"zhi",initial:"z"},扩:{full:"kuo",initial:"k"},扫:{full:"sao",initial:"s"},扮:{full:"ban",initial:"b"},扰:{full:"rao",initial:"r"},批:{full:"pi",initial:"p"},找:{full:"zhao",initial:"z"},承:{full:"cheng",initial:"c"},技:{full:"ji",initial:"j"},抄:{full:"chao",initial:"c"},把:{full:"ba",initial:"b"},投:{full:"tou",initial:"t"},抖:{full:"dou",initial:"d"},抗:{full:"kang",initial:"k"},折:{full:"zhe",initial:"z"},抛:{full:"pao",initial:"p"},护:{full:"hu",initial:"h"},报:{full:"bao",initial:"b"},抹:{full:"mo",initial:"m"},抽:{full:"chou",initial:"c"},拆:{full:"chai",initial:"c"},拉:{full:"la",initial:"l"},拍:{full:"pai",initial:"p"},拒:{full:"ju",initial:"j"},拖:{full:"tuo",initial:"t"},拟:{full:"ni",initial:"n"},拥:{full:"yong",initial:"y"},拦:{full:"lan",initial:"l"},择:{full:"ze",initial:"z"},括:{full:"kuo",initial:"k"},拼:{full:"pin",initial:"p"},拾:{full:"shi",initial:"s"},持:{full:"chi",initial:"c"},挂:{full:"gua",initial:"g"},指:{full:"zhi",initial:"z"},按:{full:"an",initial:"a"},挑:{full:"tiao",initial:"t"},挖:{full:"wa",initial:"w"},挤:{full:"ji",initial:"j"},挥:{full:"hui",initial:"h"},捉:{full:"zhuo",initial:"z"},捕:{full:"bu",initial:"b"},损:{full:"sun",initial:"s"},换:{full:"huan",initial:"h"},据:{full:"ju",initial:"j"},捷:{full:"jie",initial:"j"},授:{full:"shou",initial:"s"},掉:{full:"diao",initial:"d"},掌:{full:"zhang",initial:"z"},排:{full:"pai",initial:"p"},掘:{full:"jue",initial:"j"},探:{full:"tan",initial:"t"},接:{full:"jie",initial:"j"},控:{full:"kong",initial:"k"},推:{full:"tui",initial:"t"},措:{full:"cuo",initial:"c"},描:{full:"miao",initial:"m"},提:{full:"ti",initial:"t"},插:{full:"cha",initial:"c"},握:{full:"wo",initial:"w"},揭:{full:"jie",initial:"j"},搜:{full:"sou",initial:"s"},搞:{full:"gao",initial:"g"},搭:{full:"da",initial:"d"},携:{full:"xie",initial:"x"},摘:{full:"zhai",initial:"z"},摩:{full:"mo",initial:"m"},撑:{full:"cheng",initial:"c"},撤:{full:"che",initial:"c"},播:{full:"bo",initial:"b"},撰:{full:"zhuan",initial:"z"},擅:{full:"shan",initial:"s"},操:{full:"cao",initial:"c"},擎:{full:"qing",initial:"q"},擦:{full:"ca",initial:"c"},支:{full:"zhi",initial:"z"},收:{full:"shou",initial:"s"},改:{full:"gai",initial:"g"},放:{full:"fang",initial:"f"},故:{full:"gu",initial:"g"},效:{full:"xiao",initial:"x"},敏:{full:"min",initial:"m"},教:{full:"jiao",initial:"j"},散:{full:"san",initial:"s"},数:{full:"shu",initial:"s"},整:{full:"zheng",initial:"z"},文:{full:"wen",initial:"w"},斐:{full:"fei",initial:"f"},料:{full:"liao",initial:"l"},斜:{full:"xie",initial:"x"},斥:{full:"chi",initial:"c"},断:{full:"duan",initial:"d"},斯:{full:"si",initial:"s"},新:{full:"xin",initial:"x"},方:{full:"fang",initial:"f"},施:{full:"shi",initial:"s"},旅:{full:"lv",initial:"l"},无:{full:"wu",initial:"w"},既:{full:"ji",initial:"j"},日:{full:"ri",initial:"r"},早:{full:"zao",initial:"z"},时:{full:"shi",initial:"s"},明:{full:"ming",initial:"m"},易:{full:"yi",initial:"y"},星:{full:"xing",initial:"x"},映:{full:"ying",initial:"y"},是:{full:"shi",initial:"s"},显:{full:"xian",initial:"x"},晨:{full:"chen",initial:"c"},普:{full:"pu",initial:"p"},景:{full:"jing",initial:"j"},晰:{full:"xi",initial:"x"},晶:{full:"jing",initial:"j"},智:{full:"zhi",initial:"z"},暂:{full:"zan",initial:"z"},曲:{full:"qu",initial:"q"},更:{full:"geng",initial:"g"},曼:{full:"man",initial:"m"},替:{full:"ti",initial:"t"},最:{full:"zui",initial:"z"},月:{full:"yue",initial:"y"},有:{full:"you",initial:"y"},服:{full:"fu",initial:"f"},望:{full:"wang",initial:"w"},期:{full:"qi",initial:"q"},木:{full:"mu",initial:"m"},未:{full:"wei",initial:"w"},末:{full:"mo",initial:"m"},本:{full:"ben",initial:"b"},术:{full:"shu",initial:"s"},机:{full:"ji",initial:"j"},杀:{full:"sha",initial:"s"},杂:{full:"za",initial:"z"},权:{full:"quan",initial:"q"},李:{full:"li",initial:"l"},束:{full:"shu",initial:"s"},条:{full:"tiao",initial:"t"},来:{full:"lai",initial:"l"},板:{full:"ban",initial:"b"},极:{full:"ji",initial:"j"},构:{full:"gou",initial:"g"},析:{full:"xi",initial:"x"},枕:{full:"zhen",initial:"z"},果:{full:"guo",initial:"g"},架:{full:"jia",initial:"j"},某:{full:"mou",initial:"m"},染:{full:"ran",initial:"r"},查:{full:"cha",initial:"c"},柱:{full:"zhu",initial:"z"},标:{full:"biao",initial:"b"},栈:{full:"zhan",initial:"z"},栏:{full:"lan",initial:"l"},树:{full:"shu",initial:"s"},校:{full:"xiao",initial:"x"},样:{full:"yang",initial:"y"},核:{full:"he",initial:"h"},根:{full:"gen",initial:"g"},格:{full:"ge",initial:"g"},框:{full:"kuang",initial:"k"},案:{full:"an",initial:"a"},档:{full:"dang",initial:"d"},桶:{full:"tong",initial:"t"},梯:{full:"ti",initial:"t"},梳:{full:"shu",initial:"s"},检:{full:"jian",initial:"j"},植:{full:"zhi",initial:"z"},楚:{full:"chu",initial:"c"},概:{full:"gai",initial:"g"},槛:{full:"kan",initial:"k"},模:{full:"mo",initial:"m"},橡:{full:"xiang",initial:"x"},次:{full:"ci",initial:"c"},欧:{full:"ou",initial:"o"},欲:{full:"yu",initial:"y"},款:{full:"kuan",initial:"k"},止:{full:"zhi",initial:"z"},正:{full:"zheng",initial:"z"},此:{full:"ci",initial:"c"},步:{full:"bu",initial:"b"},歧:{full:"qi",initial:"q"},死:{full:"si",initial:"s"},殊:{full:"shu",initial:"s"},段:{full:"duan",initial:"d"},母:{full:"mu",initial:"m"},每:{full:"mei",initial:"m"},比:{full:"bi",initial:"b"},毕:{full:"bi",initial:"b"},毛:{full:"mao",initial:"m"},毫:{full:"hao",initial:"h"},民:{full:"min",initial:"m"},气:{full:"qi",initial:"q"},水:{full:"shui",initial:"s"},永:{full:"yong",initial:"y"},求:{full:"qiu",initial:"q"},汇:{full:"hui",initial:"h"},沉:{full:"chen",initial:"c"},沙:{full:"sha",initial:"s"},沟:{full:"gou",initial:"g"},没:{full:"mei",initial:"m"},治:{full:"zhi",initial:"z"},泄:{full:"xie",initial:"x"},法:{full:"fa",initial:"f"},泛:{full:"fan",initial:"f"},波:{full:"bo",initial:"b"},注:{full:"zhu",initial:"z"},洁:{full:"jie",initial:"j"},洗:{full:"xi",initial:"x"},洞:{full:"dong",initial:"d"},活:{full:"huo",initial:"h"},洽:{full:"qia",initial:"q"},派:{full:"pai",initial:"p"},流:{full:"liu",initial:"l"},浅:{full:"qian",initial:"q"},测:{full:"ce",initial:"c"},济:{full:"ji",initial:"j"},浏:{full:"liu",initial:"l"},浪:{full:"lang",initial:"l"},浮:{full:"fu",initial:"f"},消:{full:"xiao",initial:"x"},涉:{full:"she",initial:"s"},涌:{full:"yong",initial:"y"},润:{full:"run",initial:"r"},淀:{full:"dian",initial:"d"},淆:{full:"xiao",initial:"x"},深:{full:"shen",initial:"s"},混:{full:"hun",initial:"h"},添:{full:"tian",initial:"t"},清:{full:"qing",initial:"q"},渊:{full:"yuan",initial:"y"},渐:{full:"jian",initial:"j"},渲:{full:"xuan",initial:"x"},游:{full:"you",initial:"y"},源:{full:"yuan",initial:"y"},溢:{full:"yi",initial:"y"},滑:{full:"hua",initial:"h"},滚:{full:"gun",initial:"g"},滞:{full:"zhi",initial:"z"},满:{full:"man",initial:"m"},滤:{full:"lv",initial:"l"},漂:{full:"piao",initial:"p"},漏:{full:"lou",initial:"l"},演:{full:"yan",initial:"y"},潜:{full:"qian",initial:"q"},激:{full:"ji",initial:"j"},瀑:{full:"pu",initial:"p"},灭:{full:"mie",initial:"m"},灵:{full:"ling",initial:"l"},炫:{full:"xuan",initial:"x"},炸:{full:"zha",initial:"z"},点:{full:"dian",initial:"d"},炼:{full:"lian",initial:"l"},烂:{full:"lan",initial:"l"},烈:{full:"lie",initial:"l"},烦:{full:"fan",initial:"f"},热:{full:"re",initial:"r"},焦:{full:"jiao",initial:"j"},然:{full:"ran",initial:"r"},照:{full:"zhao",initial:"z"},熟:{full:"shu",initial:"s"},爆:{full:"bao",initial:"b"},父:{full:"fu",initial:"f"},片:{full:"pian",initial:"p"},版:{full:"ban",initial:"b"},牌:{full:"pai",initial:"p"},牛:{full:"niu",initial:"n"},物:{full:"wu",initial:"w"},牲:{full:"sheng",initial:"s"},特:{full:"te",initial:"t"},牺:{full:"xi",initial:"x"},状:{full:"zhuang",initial:"z"},独:{full:"du",initial:"d"},献:{full:"xian",initial:"x"},玄:{full:"xuan",initial:"x"},率:{full:"lv",initial:"l"},王:{full:"wang",initial:"w"},玩:{full:"wan",initial:"w"},环:{full:"huan",initial:"h"},现:{full:"xian",initial:"x"},理:{full:"li",initial:"l"},琐:{full:"suo",initial:"s"},瑞:{full:"rui",initial:"r"},瓶:{full:"ping",initial:"p"},瓷:{full:"ci",initial:"c"},甚:{full:"shen",initial:"s"},生:{full:"sheng",initial:"s"},用:{full:"yong",initial:"y"},由:{full:"you",initial:"y"},申:{full:"shen",initial:"s"},电:{full:"dian",initial:"d"},画:{full:"hua",initial:"h"},畅:{full:"chang",initial:"c"},界:{full:"jie",initial:"j"},留:{full:"liu",initial:"l"},略:{full:"lve",initial:"l"},番:{full:"fan",initial:"f"},疑:{full:"yi",initial:"y"},痛:{full:"tong",initial:"t"},登:{full:"deng",initial:"d"},白:{full:"bai",initial:"b"},百:{full:"bai",initial:"b"},的:{full:"de",initial:"d"},皆:{full:"jie",initial:"j"},皮:{full:"pi",initial:"p"},益:{full:"yi",initial:"y"},监:{full:"jian",initial:"j"},盒:{full:"he",initial:"h"},盖:{full:"gai",initial:"g"},盘:{full:"pan",initial:"p"},目:{full:"mu",initial:"m"},盯:{full:"ding",initial:"d"},直:{full:"zhi",initial:"z"},相:{full:"xiang",initial:"x"},盾:{full:"dun",initial:"d"},省:{full:"sheng",initial:"s"},眉:{full:"mei",initial:"m"},看:{full:"kan",initial:"k"},真:{full:"zhen",initial:"z"},眠:{full:"mian",initial:"m"},眼:{full:"yan",initial:"y"},着:{full:"zhe",initial:"z"},睡:{full:"shui",initial:"s"},瞬:{full:"shun",initial:"s"},矛:{full:"mao",initial:"m"},知:{full:"zhi",initial:"z"},矩:{full:"ju",initial:"j"},短:{full:"duan",initial:"d"},石:{full:"shi",initial:"s"},码:{full:"ma",initial:"m"},砌:{full:"qi",initial:"q"},研:{full:"yan",initial:"y"},破:{full:"po",initial:"p"},础:{full:"chu",initial:"c"},硬:{full:"ying",initial:"y"},确:{full:"que",initial:"q"},碍:{full:"ai",initial:"a"},碑:{full:"bei",initial:"b"},碰:{full:"peng",initial:"p"},磁:{full:"ci",initial:"c"},示:{full:"shi",initial:"s"},社:{full:"she",initial:"s"},神:{full:"shen",initial:"s"},票:{full:"piao",initial:"p"},禁:{full:"jin",initial:"j"},离:{full:"li",initial:"l"},私:{full:"si",initial:"s"},种:{full:"zhong",initial:"z"},科:{full:"ke",initial:"k"},秒:{full:"miao",initial:"m"},秘:{full:"mi",initial:"m"},积:{full:"ji",initial:"j"},称:{full:"cheng",initial:"c"},移:{full:"yi",initial:"y"},稀:{full:"xi",initial:"x"},程:{full:"cheng",initial:"c"},稍:{full:"shao",initial:"s"},税:{full:"shui",initial:"s"},稳:{full:"wen",initial:"w"},稿:{full:"gao",initial:"g"},究:{full:"jiu",initial:"j"},穷:{full:"qiong",initial:"q"},空:{full:"kong",initial:"k"},突:{full:"tu",initial:"t"},窍:{full:"qiao",initial:"q"},窗:{full:"chuang",initial:"c"},立:{full:"li",initial:"l"},竞:{full:"jing",initial:"j"},章:{full:"zhang",initial:"z"},端:{full:"duan",initial:"d"},笔:{full:"bi",initial:"b"},符:{full:"fu",initial:"f"},第:{full:"di",initial:"d"},等:{full:"deng",initial:"d"},筑:{full:"zhu",initial:"z"},答:{full:"da",initial:"d"},策:{full:"ce",initial:"c"},筛:{full:"shai",initial:"s"},签:{full:"qian",initial:"q"},简:{full:"jian",initial:"j"},算:{full:"suan",initial:"s"},管:{full:"guan",initial:"g"},箱:{full:"xiang",initial:"x"},篇:{full:"pian",initial:"p"},簿:{full:"bu",initial:"b"},类:{full:"lei",initial:"l"},粒:{full:"li",initial:"l"},粗:{full:"cu",initial:"c"},粘:{full:"zhan",initial:"z"},精:{full:"jing",initial:"j"},糊:{full:"hu",initial:"h"},糖:{full:"tang",initial:"t"},系:{full:"xi",initial:"x"},素:{full:"su",initial:"s"},索:{full:"suo",initial:"s"},紧:{full:"jin",initial:"j"},累:{full:"lei",initial:"l"},繁:{full:"fan",initial:"f"},红:{full:"hong",initial:"h"},约:{full:"yue",initial:"y"},级:{full:"ji",initial:"j"},纯:{full:"chun",initial:"c"},纲:{full:"gang",initial:"g"},纳:{full:"na",initial:"n"},纵:{full:"zong",initial:"z"},线:{full:"xian",initial:"x"},练:{full:"lian",initial:"l"},组:{full:"zu",initial:"z"},细:{full:"xi",initial:"x"},织:{full:"zhi",initial:"z"},终:{full:"zhong",initial:"z"},经:{full:"jing",initial:"j"},绑:{full:"bang",initial:"b"},绒:{full:"rong",initial:"r"},结:{full:"jie",initial:"j"},绕:{full:"rao",initial:"r"},绘:{full:"hui",initial:"h"},给:{full:"gei",initial:"g"},络:{full:"luo",initial:"l"},绝:{full:"jue",initial:"j"},统:{full:"tong",initial:"t"},继:{full:"ji",initial:"j"},绩:{full:"ji",initial:"j"},绪:{full:"xu",initial:"x"},续:{full:"xu",initial:"x"},维:{full:"wei",initial:"w"},综:{full:"zong",initial:"z"},绿:{full:"lv",initial:"l"},缓:{full:"huan",initial:"h"},编:{full:"bian",initial:"b"},缘:{full:"yuan",initial:"y"},缝:{full:"feng",initial:"f"},缩:{full:"suo",initial:"s"},缺:{full:"que",initial:"q"},网:{full:"wang",initial:"w"},罗:{full:"luo",initial:"l"},置:{full:"zhi",initial:"z"},署:{full:"shu",initial:"s"},美:{full:"mei",initial:"m"},群:{full:"qun",initial:"q"},羽:{full:"yu",initial:"y"},翻:{full:"fan",initial:"f"},老:{full:"lao",initial:"l"},考:{full:"kao",initial:"k"},者:{full:"zhe",initial:"z"},而:{full:"er",initial:"e"},耗:{full:"hao",initial:"h"},职:{full:"zhi",initial:"z"},联:{full:"lian",initial:"l"},聚:{full:"ju",initial:"j"},聪:{full:"cong",initial:"c"},肆:{full:"si",initial:"s"},股:{full:"gu",initial:"g"},肯:{full:"ken",initial:"k"},肿:{full:"zhong",initial:"z"},胀:{full:"zhang",initial:"z"},背:{full:"bei",initial:"b"},胺:{full:"an",initial:"a"},能:{full:"neng",initial:"n"},脉:{full:"mai",initial:"m"},脏:{full:"zang",initial:"z"},脑:{full:"nao",initial:"n"},脚:{full:"jiao",initial:"j"},膨:{full:"peng",initial:"p"},臃:{full:"yong",initial:"y"},自:{full:"zi",initial:"z"},至:{full:"zhi",initial:"z"},致:{full:"zhi",initial:"z"},舍:{full:"she",initial:"s"},舞:{full:"wu",initial:"w"},航:{full:"hang",initial:"h"},良:{full:"liang",initial:"l"},色:{full:"se",initial:"s"},节:{full:"jie",initial:"j"},花:{full:"hua",initial:"h"},芳:{full:"fang",initial:"f"},芽:{full:"ya",initial:"y"},苏:{full:"su",initial:"s"},苛:{full:"ke",initial:"k"},若:{full:"ruo",initial:"r"},范:{full:"fan",initial:"f"},茄:{full:"jia",initial:"j"},草:{full:"cao",initial:"c"},荐:{full:"jian",initial:"j"},荷:{full:"he",initial:"h"},获:{full:"huo",initial:"h"},菜:{full:"cai",initial:"c"},萌:{full:"meng",initial:"m"},营:{full:"ying",initial:"y"},落:{full:"luo",initial:"l"},著:{full:"zhu",initial:"z"},蓝:{full:"lan",initial:"l"},蔽:{full:"bi",initial:"b"},薪:{full:"xin",initial:"x"},藏:{full:"cang",initial:"c"},虑:{full:"lv",initial:"l"},虚:{full:"xu",initial:"x"},蛋:{full:"dan",initial:"d"},融:{full:"rong",initial:"r"},行:{full:"xing",initial:"x"},衍:{full:"yan",initial:"y"},衡:{full:"heng",initial:"h"},补:{full:"bu",initial:"b"},表:{full:"biao",initial:"b"},衰:{full:"shuai",initial:"s"},衷:{full:"zhong",initial:"z"},被:{full:"bei",initial:"b"},裁:{full:"cai",initial:"c"},装:{full:"zhuang",initial:"z"},西:{full:"xi",initial:"x"},要:{full:"yao",initial:"y"},覆:{full:"fu",initial:"f"},见:{full:"jian",initial:"j"},观:{full:"guan",initial:"g"},规:{full:"gui",initial:"g"},视:{full:"shi",initial:"s"},览:{full:"lan",initial:"l"},觉:{full:"jue",initial:"j"},角:{full:"jiao",initial:"j"},解:{full:"jie",initial:"j"},触:{full:"chu",initial:"c"},言:{full:"yan",initial:"y"},警:{full:"jing",initial:"j"},计:{full:"ji",initial:"j"},订:{full:"ding",initial:"d"},认:{full:"ren",initial:"r"},讨:{full:"tao",initial:"t"},让:{full:"rang",initial:"r"},训:{full:"xun",initial:"x"},议:{full:"yi",initial:"y"},记:{full:"ji",initial:"j"},讲:{full:"jiang",initial:"j"},许:{full:"xu",initial:"x"},论:{full:"lun",initial:"l"},设:{full:"she",initial:"s"},访:{full:"fang",initial:"f"},证:{full:"zheng",initial:"z"},评:{full:"ping",initial:"p"},识:{full:"shi",initial:"s"},诉:{full:"su",initial:"s"},诊:{full:"zhen",initial:"z"},词:{full:"ci",initial:"c"},译:{full:"yi",initial:"y"},试:{full:"shi",initial:"s"},诚:{full:"cheng",initial:"c"},话:{full:"hua",initial:"h"},询:{full:"xun",initial:"x"},该:{full:"gai",initial:"g"},详:{full:"xiang",initial:"x"},语:{full:"yu",initial:"y"},误:{full:"wu",initial:"w"},说:{full:"shuo",initial:"s"},请:{full:"qing",initial:"q"},诺:{full:"nuo",initial:"n"},读:{full:"du",initial:"d"},课:{full:"ke",initial:"k"},谁:{full:"shui",initial:"s"},调:{full:"diao",initial:"d"},谈:{full:"tan",initial:"t"},谓:{full:"wei",initial:"w"},谨:{full:"jin",initial:"j"},谱:{full:"pu",initial:"p"},象:{full:"xiang",initial:"x"},负:{full:"fu",initial:"f"},贡:{full:"gong",initial:"g"},财:{full:"cai",initial:"c"},责:{full:"ze",initial:"z"},败:{full:"bai",initial:"b"},账:{full:"zhang",initial:"z"},货:{full:"huo",initial:"h"},质:{full:"zhi",initial:"z"},购:{full:"gou",initial:"g"},贰:{full:"er",initial:"e"},贴:{full:"tie",initial:"t"},贵:{full:"gui",initial:"g"},费:{full:"fei",initial:"f"},资:{full:"zi",initial:"z"},赋:{full:"fu",initial:"f"},赖:{full:"lai",initial:"l"},起:{full:"qi",initial:"q"},超:{full:"chao",initial:"c"},越:{full:"yue",initial:"y"},趋:{full:"qu",initial:"q"},趣:{full:"qu",initial:"q"},足:{full:"zu",initial:"z"},跃:{full:"yue",initial:"y"},跑:{full:"pao",initial:"p"},距:{full:"ju",initial:"j"},跟:{full:"gen",initial:"g"},跨:{full:"kua",initial:"k"},路:{full:"lu",initial:"l"},跳:{full:"tiao",initial:"t"},践:{full:"jian",initial:"j"},踪:{full:"zong",initial:"z"},身:{full:"shen",initial:"s"},车:{full:"che",initial:"c"},轨:{full:"gui",initial:"g"},转:{full:"zhuan",initial:"z"},轮:{full:"lun",initial:"l"},软:{full:"ruan",initial:"r"},轴:{full:"zhou",initial:"z"},轻:{full:"qing",initial:"q"},载:{full:"zai",initial:"z"},较:{full:"jiao",initial:"j"},辅:{full:"fu",initial:"f"},辑:{full:"ji",initial:"j"},输:{full:"shu",initial:"s"},辨:{full:"bian",initial:"b"},辩:{full:"bian",initial:"b"},边:{full:"bian",initial:"b"},达:{full:"da",initial:"d"},迁:{full:"qian",initial:"q"},迅:{full:"xun",initial:"x"},过:{full:"guo",initial:"g"},迎:{full:"ying",initial:"y"},运:{full:"yun",initial:"y"},近:{full:"jin",initial:"j"},返:{full:"fan",initial:"f"},还:{full:"hai",initial:"h"},这:{full:"zhe",initial:"z"},进:{full:"jin",initial:"j"},远:{full:"yuan",initial:"y"},违:{full:"wei",initial:"w"},连:{full:"lian",initial:"l"},迟:{full:"chi",initial:"c"},迫:{full:"po",initial:"p"},迭:{full:"die",initial:"d"},述:{full:"shu",initial:"s"},迷:{full:"mi",initial:"m"},迹:{full:"ji",initial:"j"},追:{full:"zhui",initial:"z"},退:{full:"tui",initial:"t"},送:{full:"song",initial:"s"},适:{full:"shi",initial:"s"},逆:{full:"ni",initial:"n"},选:{full:"xuan",initial:"x"},透:{full:"tou",initial:"t"},逐:{full:"zhu",initial:"z"},递:{full:"di",initial:"d"},逗:{full:"dou",initial:"d"},通:{full:"tong",initial:"t"},速:{full:"su",initial:"s"},造:{full:"zao",initial:"z"},逻:{full:"luo",initial:"l"},逼:{full:"bi",initial:"b"},遇:{full:"yu",initial:"y"},遍:{full:"bian",initial:"b"},道:{full:"dao",initial:"d"},遗:{full:"yi",initial:"y"},遵:{full:"zun",initial:"z"},避:{full:"bi",initial:"b"},那:{full:"na",initial:"n"},邮:{full:"you",initial:"y"},邻:{full:"lin",initial:"l"},部:{full:"bu",initial:"b"},都:{full:"dou",initial:"d"},配:{full:"pei",initial:"p"},醒:{full:"xing",initial:"x"},采:{full:"cai",initial:"c"},释:{full:"shi",initial:"s"},里:{full:"li",initial:"l"},重:{full:"zhong",initial:"z"},野:{full:"ye",initial:"y"},量:{full:"liang",initial:"l"},金:{full:"jin",initial:"j"},针:{full:"zhen",initial:"z"},钉:{full:"ding",initial:"d"},钟:{full:"zhong",initial:"z"},钩:{full:"gou",initial:"g"},钮:{full:"niu",initial:"n"},铁:{full:"tie",initial:"t"},银:{full:"yin",initial:"y"},链:{full:"lian",initial:"l"},销:{full:"xiao",initial:"x"},锁:{full:"suo",initial:"s"},锏:{full:"jian",initial:"j"},错:{full:"cuo",initial:"c"},锚:{full:"mao",initial:"m"},锡:{full:"xi",initial:"x"},键:{full:"jian",initial:"j"},长:{full:"zhang",initial:"z"},门:{full:"men",initial:"m"},闪:{full:"shan",initial:"s"},闭:{full:"bi",initial:"b"},问:{full:"wen",initial:"w"},间:{full:"jian",initial:"j"},阅:{full:"yue",initial:"y"},队:{full:"dui",initial:"d"},阱:{full:"jing",initial:"j"},防:{full:"fang",initial:"f"},阳:{full:"yang",initial:"y"},阵:{full:"zhen",initial:"z"},阶:{full:"jie",initial:"j"},阻:{full:"zu",initial:"z"},附:{full:"fu",initial:"f"},际:{full:"ji",initial:"j"},陈:{full:"chen",initial:"c"},降:{full:"jiang",initial:"j"},限:{full:"xian",initial:"x"},除:{full:"chu",initial:"c"},险:{full:"xian",initial:"x"},陷:{full:"xian",initial:"x"},随:{full:"sui",initial:"s"},隐:{full:"yin",initial:"y"},隔:{full:"ge",initial:"g"},障:{full:"zhang",initial:"z"},难:{full:"nan",initial:"n"},雅:{full:"ya",initial:"y"},集:{full:"ji",initial:"j"},雪:{full:"xue",initial:"x"},零:{full:"ling",initial:"l"},需:{full:"xu",initial:"x"},露:{full:"lu",initial:"l"},青:{full:"qing",initial:"q"},静:{full:"jing",initial:"j"},非:{full:"fei",initial:"f"},靠:{full:"kao",initial:"k"},面:{full:"mian",initial:"m"},页:{full:"ye",initial:"y"},顶:{full:"ding",initial:"d"},项:{full:"xiang",initial:"x"},顺:{full:"shun",initial:"s"},须:{full:"xu",initial:"x"},顾:{full:"gu",initial:"g"},顿:{full:"dun",initial:"d"},预:{full:"yu",initial:"y"},领:{full:"ling",initial:"l"},颈:{full:"jing",initial:"j"},频:{full:"pin",initial:"p"},题:{full:"ti",initial:"t"},颜:{full:"yan",initial:"y"},额:{full:"e",initial:"e"},风:{full:"feng",initial:"f"},飞:{full:"fei",initial:"f"},食:{full:"shi",initial:"s"},餐:{full:"can",initial:"c"},饮:{full:"yin",initial:"y"},饰:{full:"shi",initial:"s"},饼:{full:"bing",initial:"b"},馆:{full:"guan",initial:"g"},馈:{full:"kui",initial:"k"},首:{full:"shou",initial:"s"},驱:{full:"qu",initial:"q"},驼:{full:"tuo",initial:"t"},验:{full:"yan",initial:"y"},骤:{full:"zhou",initial:"z"},高:{full:"gao",initial:"g"},魔:{full:"mo",initial:"m"},鲜:{full:"xian",initial:"x"},鸭:{full:"ya",initial:"y"},鹅:{full:"e",initial:"e"},麦:{full:"mai",initial:"m"},麻:{full:"ma",initial:"m"},黄:{full:"huang",initial:"h"},黏:{full:"nian",initial:"n"},黑:{full:"hei",initial:"h"},默:{full:"mo",initial:"m"},鼓:{full:"gu",initial:"g"},齐:{full:"qi",initial:"q"},龄:{full:"ling",initial:"l"},龙:{full:"long",initial:"l"}};function R(n){let l="",a="";for(let s=0;s<n.length;s++){const o=n[s],r=Z[o];if(r)l+=r.full,a+=r.initial;else{const d=o.toLowerCase();l+=d,a+=d}}return{full:l,initial:a}}function L(n,l){const a=l.toLowerCase().trim();if(!a)return!0;const s=n.toLowerCase();if(s.includes(a))return!0;const{full:o,initial:r}=R(s);return o.includes(a)||r.includes(a)}function ii(n,l){const a=l.toLowerCase().trim();if(!a)return null;const s=n.toLowerCase(),o=s.indexOf(a);if(o!==-1)return{start:o,end:o+a.length};let r="";const d=[];for(let c=0;c<n.length;c++){const u=s[c],p=R(u).initial,y=r.length;r+=p;const m=r.length;d.push({start:y,end:m})}const h=r.indexOf(a);if(h!==-1){const c=h,u=h+a.length;let p=-1,y=-1;for(let m=0;m<n.length;m++)!(d[m].end<=c||d[m].start>=u)&&(p===-1&&(p=m),y=m);if(p!==-1&&y!==-1)return{start:p,end:y+1}}let b="";const E=[];for(let c=0;c<n.length;c++){const u=s[c],p=R(u).full,y=b.length;b+=p;const m=b.length;E.push({start:y,end:m})}const A=b.indexOf(a);if(A!==-1){const c=A,u=A+a.length;let p=-1,y=-1;for(let m=0;m<n.length;m++)!(E[m].end<=c||E[m].start>=u)&&(p===-1&&(p=m),y=m);if(p!==-1&&y!==-1)return{start:p,end:y+1}}return null}function ei(){const n=[];return Y.forEach(l=>{l.prompts.forEach(a=>{n.push({id:a.id,title:a.title,subtitle:a.scenario,type:"Excel",path:"/excel",hash:`category=${l.id}&id=${a.id}`,tags:a.tags,content:a.prompt,icon:l.icon})})}),X.forEach(l=>{n.push({id:l.id,title:l.title,subtitle:l.subtitle,type:"Git",path:"/git",hash:`id=${l.id}`,tags:l.tags,content:l.prompt,icon:l.icon})}),$.forEach(l=>{l.frameworks.forEach(a=>{n.push({id:a.id,title:a.name,subtitle:a.tagline,type:"Framework",path:"/mece",hash:`id=${a.id}`,tags:[a.nameEn,a.scene],content:a.blocks.map(s=>s.label).join(" "),icon:a.icon})})}),W.forEach(l=>{n.push({id:`mindset-signal-${l.id}`,title:l.title,subtitle:l.description,type:"Mindset",path:"/mindset",hash:`type=signal&id=${l.id}`,tags:["开窍信号","思维"],content:`${l.before} ${l.after}`,icon:l.icon})}),Q.forEach(l=>{n.push({id:l.id,title:l.title,subtitle:l.description,type:"Mindset",path:"/mindset",hash:`type=elisp&id=${l.id}`,tags:l.tags,content:l.code,icon:"λ"})}),K.forEach(l=>{n.push({id:l.id,title:l.title,subtitle:l.scenario,type:"Mindset",path:"/mindset",hash:`type=ai&id=${l.id}`,tags:["AI Module"],content:l.systemPrompt,icon:l.icon})}),B.forEach(l=>{l.tickets.forEach(a=>{n.push({id:a.id,title:a.title,subtitle:a.sub,type:"Python",path:"/python",hash:`id=${a.id}`,tags:a.mece,content:a.concept,icon:"🐍"})})}),C.forEach(l=>{n.push({id:l.id,title:l.title,subtitle:l.desc,type:"DuckDB",path:"/duckdb",hash:`id=${l.id}`,tags:l.concepts,content:l.knowledge,icon:l.emoji})}),N.forEach(l=>{n.push({id:l.id,title:l.title,subtitle:l.tag,type:"Context",path:"/ce",hash:`id=${l.id}`,tags:l.toon.f,content:l.concept,icon:l.icon})}),J.forEach(l=>{n.push({id:l.id,title:l.title,subtitle:l.subtitle,type:"Wiki",path:"/wiki",hash:`id=${l.id}`,tags:l.tags,content:l.content,icon:"🌊"})}),n}function ti(n,l){const a=n.trim();return a?l.filter(s=>L(s.title,a)||L(s.subtitle,a)||s.tags.some(o=>L(o,a))||L(s.content,a)).slice(0,10):[]}function I(n,l,a){const s=l.trim();if(!s)return n;const o=ii(n,s);if(!o)return n;const r=n.substring(0,o.start),d=n.substring(o.start,o.end),h=n.substring(o.end);return e.jsxs(e.Fragment,{children:[r,e.jsx("span",{className:a?"bg-yellow-400 text-slate-950 px-0.5 rounded font-black shadow-sm":"bg-yellow-200 text-slate-900 px-0.5 rounded font-bold",children:d}),h]})}function li({isOpen:n,onClose:l}){const[a,s]=f.useState(""),[o,r]=f.useState(0),d=q(),h=f.useMemo(()=>ei(),[]),b=f.useMemo(()=>ti(a,h),[a,h]),E=f.useRef(null);f.useEffect(()=>{n&&(s(""),r(0),setTimeout(()=>E.current?.focus(),100))},[n]),f.useEffect(()=>{if(!n)return;const c=u=>{u.key==="ArrowDown"?(u.preventDefault(),r(p=>(p+1)%(b.length||1))):u.key==="ArrowUp"?(u.preventDefault(),r(p=>(p-1+(b.length||1))%(b.length||1))):u.key==="Enter"&&b[o]?(u.preventDefault(),A(b[o])):u.key==="Escape"?(u.preventDefault(),l()):u.key==="Tab"&&E.current&&document.activeElement!==E.current&&(E.current.focus(),u.preventDefault())};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[n,b,o]),f.useEffect(()=>{if(b.length>0){const c=document.getElementById(`search-item-${o}`);c&&c.scrollIntoView({behavior:"auto",block:"nearest"})}},[o,b]);const A=c=>{const u=c.hash?`${c.path}#${c.hash}`:c.path;d(u),l()};return e.jsx(j,{children:n&&e.jsxs("div",{className:"fixed inset-0 z-[100] flex items-start justify-center pt-[12vh] px-4",children:[e.jsx(k.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:l,className:"absolute inset-0 bg-slate-950/20 backdrop-blur-[2px]"}),e.jsxs(k.div,{initial:{opacity:0,scale:.98,y:-10},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.98,y:-10},className:"relative w-full max-w-2xl bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_32px_64px_-12px_rgba(0,0,0,0.15)] border border-slate-200 overflow-hidden flex flex-col",children:[e.jsxs("div",{className:"flex items-center px-6 py-5 border-b border-slate-100 bg-white/50",children:[e.jsx("label",{htmlFor:"global-search-input",className:"sr-only",children:"全局搜索"}),e.jsx("span",{className:"text-xl mr-4 opacity-50",children:"🔍"}),e.jsx("input",{id:"global-search-input",ref:E,type:"text",value:a,onChange:c=>s(c.target.value),placeholder:"键入关键词：工单 ID、函数名或方法论原子...","aria-label":"全局搜索",role:"combobox","aria-expanded":n,"aria-autocomplete":"list","aria-controls":"search-results-list","aria-activedescendant":b.length>0?`search-item-${o}`:void 0,className:"flex-1 bg-transparent border-none outline-none text-xl font-medium text-slate-900 placeholder:text-slate-300"}),e.jsx("div",{className:"flex items-center gap-2 ml-4",children:e.jsx("kbd",{className:"px-2 py-1 rounded bg-slate-100 border border-slate-200 text-xs font-black text-slate-400 shadow-sm uppercase tracking-widest",children:"ESC"})})]}),e.jsx("div",{className:"max-h-[50vh] overflow-y-auto p-3 scrollbar-hide",children:a?b.length>0?e.jsx("div",{id:"search-results-list",role:"listbox",className:"space-y-1.5",children:b.map((c,u)=>e.jsxs("button",{id:`search-item-${u}`,tabIndex:-1,role:"option","aria-selected":u===o,onMouseEnter:()=>r(u),onClick:()=>A(c),className:P("w-full flex items-center gap-4 p-3.5 rounded-xl text-left transition-all duration-200 group",u===o?"bg-slate-900 text-white shadow-xl shadow-slate-900/10 scale-[1.01]":"hover:bg-slate-50"),children:[e.jsx("div",{className:P("w-11 h-11 rounded-lg flex items-center justify-center text-xl shadow-sm shrink-0 transition-transform duration-300",u===o?"bg-white/10 rotate-3 scale-110":"bg-slate-100"),children:c.icon}),e.jsxs("div",{className:"min-w-0 flex-1",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("span",{className:P("text-xs font-black uppercase tracking-[0.15em] px-2 py-0.5 rounded-md transition-colors",u===o?"bg-white/15 text-white":"bg-slate-100 text-slate-500"),children:c.type}),e.jsx("h4",{className:"font-bold text-base truncate tracking-tight",children:I(c.title,a,u===o)})]}),e.jsx("p",{className:P("text-xs truncate font-medium",u===o?"text-slate-200":"text-slate-400"),children:I(c.subtitle,a,u===o)})]}),e.jsx("div",{className:P("flex items-center gap-1.5 transition-opacity duration-300",u===o?"opacity-100":"opacity-0"),children:e.jsx("kbd",{className:"px-1.5 py-0.5 rounded bg-white/10 text-xs font-black border border-white/10",children:"ENTER"})})]},`${c.type}-${c.id}`))}):e.jsxs("div",{className:"py-20 text-center",children:[e.jsx("div",{className:"text-5xl mb-6 opacity-10",children:"🚫"}),e.jsx("h3",{className:"text-lg font-black text-slate-900 uppercase tracking-widest mb-2",children:"无匹配结果"}),e.jsx("p",{className:"text-slate-400 text-sm font-medium",children:'尝试搜索其他关键词，如 "Python" 或 "XLOOKUP"'})]}):e.jsxs("div",{className:"py-16 text-center",children:[e.jsx(k.div,{animate:{scale:[1,1.1,1],rotate:[0,5,-5,0]},transition:{repeat:1/0,duration:4},className:"text-6xl mb-8 grayscale opacity-20 inline-block",children:"⌨️"}),e.jsx("div",{className:"text-base font-black text-slate-900 uppercase tracking-[0.3em] mb-3",children:"Command Palette"}),e.jsxs("p",{className:"text-slate-400 text-sm font-medium max-w-xs mx-auto leading-relaxed",children:["输入关键词开启跨模块秒级直达 ",e.jsx("br",{}),"支持：工单 ID、函数名或方法论原子"]})]})}),e.jsxs("div",{className:"px-6 py-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between",children:[e.jsxs("div",{className:"flex flex-wrap gap-x-4 gap-y-1.5 text-xs font-black text-slate-300 uppercase tracking-widest",children:[e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-base opacity-50",children:"↑↓"})," Navigate"]}),e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-base opacity-50",children:"↵"})," Select"]}),e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-base opacity-50",children:"⎋"})," Close"]})]}),e.jsx("div",{className:"text-xs font-black text-slate-400 uppercase tracking-[0.2em] opacity-40 hidden md:block",children:"Index v2.1 · 8 Modules Linked"})]})]})]})})}function P(...n){return n.filter(Boolean).join(" ")}const S={PYTHON_PROGRESS:"python_mece_progress",DUCKDB_PROGRESS:"duckdb_tutorial_progress",CONTEXT_PROGRESS:"ce_engineering_progress",MECE_PROGRESS:"mece_framework_progress",APP_THEME:"core_theme_preference",GIT_COMMIT_MSG:"git_commit_validator_msg"},O={generateKnowledgeExport:()=>{let n=`# Programming Tools Hub - 个人知识资产报告
`;n+=`> 生成日期: ${new Date().toLocaleString()}

`;const l=localStorage.getItem(S.PYTHON_PROGRESS);if(l){const o=JSON.parse(l);if(o.length>0){n+=`## 🐍 Python 工程化进阶
`,n+=`**掌握程度**: ${o.length} / 21 原子工单

`;const r=[];B.forEach(d=>d.tickets.forEach(h=>r.push(h))),o.forEach(d=>{const h=r[d];h&&(n+=`- [x] **${h.id}**: ${h.title} (${h.sub})
`)}),n+=`
`}}const a=localStorage.getItem(S.DUCKDB_PROGRESS);if(a){const o=JSON.parse(a);o.length>0&&(n+=`## 🦆 DuckDB 端侧数据分析
`,n+=`**实战进度**: ${o.length} / ${C.length} 核心关卡

`,o.forEach(r=>{const d=C[r];d&&(n+=`- [x] **${d.id}**: ${d.title}
`)}),n+=`
`)}const s=localStorage.getItem(S.CONTEXT_PROGRESS);if(s){const o=JSON.parse(s);o.length>0&&(n+=`## ⚙️ 上下文工程 (Context v4)
`,n+=`**模式掌握**: ${o.length} / ${N.length} 种元提示模式

`,o.forEach(r=>{const d=N[r];d&&(n+=`- [x] **${d.id}**: ${d.title} (${d.tag})
`)}),n+=`
`)}return n+=`---
*此报告由 Programming Tools Hub 自动生成。保持原子化思考，持续进化。*`,n},exportAsMarkdown:()=>{const n=O.generateKnowledgeExport(),l=new Blob([n],{type:"text/markdown"}),a=URL.createObjectURL(l),s=document.createElement("a");s.href=a,s.download=`my-knowledge-assets-${new Date().toISOString().split("T")[0]}.md`,s.click(),URL.revokeObjectURL(a)},exportBackup:()=>{const n={};Object.values(S).forEach(o=>{n[o]=localStorage.getItem(o)});const l=new Blob([JSON.stringify(n,null,2)],{type:"application/json"}),a=URL.createObjectURL(l),s=document.createElement("a");s.href=a,s.download=`programming-tools-backup-${new Date().toISOString().split("T")[0]}.json`,s.click(),URL.revokeObjectURL(a)}},ni=[{path:"/",label:"Home"},{path:"/excel",label:"Excel"},{path:"/git",label:"Git"},{path:"/mece",label:"Framework"},{path:"/mindset",label:"Mindset"},{path:"/python",label:"Python"},{path:"/duckdb",label:"DuckDB"},{path:"/ce",label:"Context"},{path:"/wiki",label:"Wiki"}];function ai(){const n=v(),[l,a]=f.useState(!1);return f.useEffect(()=>{const s=o=>{(o.metaKey||o.ctrlKey)&&o.key==="k"&&(o.preventDefault(),a(!0))};return window.addEventListener("keydown",s,!0),()=>window.removeEventListener("keydown",s,!0)},[]),e.jsxs("nav",{className:"sticky top-0 z-50 w-full bg-slate-50/80 backdrop-blur-xl border-b border-slate-200/60 shadow-sm",children:[e.jsxs("div",{className:"max-w-7xl mx-auto px-6 h-14 flex items-center justify-between",children:[e.jsxs(w,{to:"/",className:"flex items-center gap-3 group shrink-0 mr-8",children:[e.jsx("div",{className:"w-8 h-8 rounded-xl bg-slate-900 flex items-center justify-center text-white font-black group-hover:rotate-12 transition-all shadow-lg shadow-slate-900/10",children:"P"}),e.jsx("span",{className:"font-black text-slate-900 tracking-tighter hidden lg:block uppercase text-sm",children:"Tools Hub"})]}),e.jsxs("button",{onClick:()=>a(!0),className:"hidden md:flex items-center gap-3 px-4 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl text-slate-400 hover:text-slate-600 transition-all mr-6 min-w-[200px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2",children:[e.jsx("span",{className:"text-xs font-bold uppercase tracking-widest",children:"Search Tools..."}),e.jsx("kbd",{className:"ml-auto px-1.5 py-0.5 rounded bg-white border border-slate-200 text-xs font-black shadow-sm",children:"⌘K"})]}),e.jsxs("button",{onClick:()=>O.exportAsMarkdown(),className:"hidden md:flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl text-emerald-600 hover:text-emerald-700 font-black text-xs uppercase tracking-wider transition-all mr-4 shrink-0 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2",title:"导出个人知识资产报告",children:[e.jsx("span",{children:"💾"}),e.jsx("span",{children:"Export"})]}),e.jsx("button",{onClick:()=>a(!0),className:"flex md:hidden items-center justify-center w-9 h-9 bg-slate-50 rounded-lg text-slate-400 mr-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400","aria-label":"Search",children:e.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})}),e.jsx("button",{onClick:()=>O.exportAsMarkdown(),className:"flex md:hidden items-center justify-center w-9 h-9 bg-emerald-50 border border-emerald-100 rounded-lg text-emerald-600 mr-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500","aria-label":"Export Knowledge",title:"导出个人知识资产报告",children:e.jsx("span",{children:"💾"})}),e.jsxs("div",{className:"flex-1 overflow-hidden relative flex items-center justify-end mr-2",children:[e.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-slate-50 to-transparent pointer-events-none z-10"}),e.jsx("div",{className:"w-full flex items-center justify-end overflow-x-auto scrollbar-hide px-4",children:e.jsx("div",{className:"flex items-center gap-1.5 p-1 bg-slate-50/50 rounded-xl border border-slate-100",children:ni.map(s=>{const o=n.pathname===s.path;return e.jsx(w,{to:s.path,className:H("px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-widest transition-all duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-1",o?"bg-slate-900 text-white shadow-lg shadow-slate-900/10":"text-slate-400 hover:text-slate-900 hover:bg-slate-100"),children:s.label},s.path)})})}),e.jsx("div",{className:"absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-slate-50 to-transparent pointer-events-none z-10"})]})]}),e.jsx(li,{isOpen:l,onClose:()=>a(!1)})]})}function T({children:n}){return e.jsx(k.div,{initial:{opacity:0,y:4},animate:{opacity:1,y:0},exit:{opacity:0},transition:{duration:.2,ease:"easeOut"},children:n})}const oi=f.lazy(()=>_(()=>import("./HomePage-78omhns0.js"),__vite__mapDeps([0,1,2,3,4]))),si=f.lazy(()=>_(()=>import("./ExcelPromptsPage-BjFJAhfr.js"),__vite__mapDeps([5,1,2,6,7,4,3]))),ri=f.lazy(()=>_(()=>import("./GitWorkflowPage-bKZ8T8Pc.js"),__vite__mapDeps([8,1,2,4,6,7,3]))),ci=f.lazy(()=>_(()=>import("./MeceFrameworkPage-Cahf35CX.js"),__vite__mapDeps([9,1,2,7,4,3,10,11]))),ui=f.lazy(()=>_(()=>import("./ProgrammingMindsetPage-CW3ErUzl.js"),__vite__mapDeps([12,1,2,7,4,3,10]))),di=f.lazy(()=>_(()=>import("./PythonMecePage-10em_OWp.js"),__vite__mapDeps([13,1,2,11,4,7,3,10]))),fi=f.lazy(()=>_(()=>import("./DuckdbTutorialPage-anP_3mhB.js"),__vite__mapDeps([14,1,2,15,11,4,7,3,10]))),gi=f.lazy(()=>_(()=>import("./ContextEngineeringPage-Dig3ZHKa.js"),__vite__mapDeps([16,1,2,7,4,3,10]))),pi=f.lazy(()=>_(()=>import("./FlowWikiPage-CDs2b3t3.js"),__vite__mapDeps([17,1,2,7,4,3,18]))),mi=()=>e.jsx("div",{className:"flex items-center justify-center min-h-[60vh]",children:e.jsx("div",{className:"w-8 h-8 border-4 border-slate-200 border-t-slate-900 rounded-full animate-spin"})});function bi(){const n=v();return e.jsx(j,{mode:"wait",children:e.jsxs(U,{location:n,children:[e.jsx(x,{path:"/",element:e.jsx(T,{children:e.jsx(oi,{})})}),e.jsx(x,{path:"/excel",element:e.jsx(T,{children:e.jsx(si,{})})}),e.jsx(x,{path:"/git",element:e.jsx(T,{children:e.jsx(ri,{})})}),e.jsx(x,{path:"/mece",element:e.jsx(T,{children:e.jsx(ci,{})})}),e.jsx(x,{path:"/mindset",element:e.jsx(T,{children:e.jsx(ui,{})})}),e.jsx(x,{path:"/python",element:e.jsx(T,{children:e.jsx(di,{})})}),e.jsx(x,{path:"/duckdb",element:e.jsx(T,{children:e.jsx(fi,{})})}),e.jsx(x,{path:"/ce",element:e.jsx(T,{children:e.jsx(gi,{})})}),e.jsx(x,{path:"/wiki",element:e.jsx(T,{children:e.jsx(pi,{})})})]},n.pathname)})}function hi(){return e.jsx(M,{basename:"/Programming_Tools/",children:e.jsxs("div",{className:"min-h-screen flex flex-col",children:[e.jsx(ai,{}),e.jsx("div",{className:"flex-1",children:e.jsx(f.Suspense,{fallback:e.jsx(mi,{}),children:e.jsx(bi,{})})})]})})}class yi extends f.Component{state={hasError:!1,error:null};static getDerivedStateFromError(l){return{hasError:!0,error:l}}componentDidCatch(l,a){console.error("ErrorBoundary caught an error:",l,a)}handleReset=()=>{localStorage.clear(),sessionStorage.clear(),window.location.href="/"};render(){return this.state.hasError?e.jsx("div",{className:"min-h-screen bg-slate-950 flex items-center justify-center p-6 text-white font-sans",children:e.jsxs("div",{className:"w-full max-w-xl bg-slate-900 border border-white/10 rounded-[2.5rem] p-10 md:p-12 shadow-2xl flex flex-col items-center text-center relative overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-rose-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsx("div",{className:"absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsx("div",{className:"w-16 h-16 rounded-[1.25rem] bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-3xl mb-8",children:"🚨"}),e.jsx("h1",{className:"text-3xl font-black tracking-tight mb-4 text-rose-400",children:"系统遇到异常崩溃"}),e.jsx("p",{className:"text-slate-400 text-sm font-medium leading-relaxed mb-8 max-w-sm",children:"检测到未捕获的渲染级错误。为了防止持续损坏，您可以清除缓存重置应用。"}),e.jsxs("div",{className:"w-full bg-slate-950 border border-white/5 rounded-2xl p-5 mb-8 text-left font-mono text-xs text-rose-300 max-h-[150px] overflow-y-auto select-text scrollbar-hide",children:[e.jsx("strong",{children:"Error:"})," ",this.state.error?.message||"Unknown rendering exception"]}),e.jsx("button",{onClick:this.handleReset,className:"w-full bg-rose-600 hover:bg-rose-500 text-white text-xs font-black uppercase tracking-widest py-4 rounded-xl transition-all shadow-lg shadow-rose-950/20 active:scale-95",children:"清除所有缓存并强制重置 Clear & Reset"})]})}):this.props.children}}F.createRoot(document.getElementById("root")).render(e.jsx(f.StrictMode,{children:e.jsx(yi,{children:e.jsx(hi,{})})}));export{B as C,D,O as S,N as T,Y as a,S as b,H as c,_i as d,X as e,$ as f,Ai as g,Q as h,C as i,t as j,L as m,K as p,Pi as q,W as s};
