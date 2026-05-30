import{r as h,j as t}from"./react-core-2IwPqq8E.js";import{b as se,T as N,c as g,D as Pe,j as ae}from"./index-CpVNTeVR.js";import{S as Te,P as Ce}from"./SplitViewLayout-BrOef_n1.js";import{P as Ee}from"./PageFooter-BsjlsJSm.js";import{S as P}from"./SectionHeader-B5A_c5os.js";import{A as ne,m as W}from"./framer-motion-DYgzwnK0.js";import"./vendor-Cp45wUEN.js";const Re=[{dir:"01_identity",files:[{id:"p1",name:"Role_Declare_P1.meta"},{id:"p3",name:"Persona_Stack_P3.meta"}]},{dir:"02_reasoning",files:[{id:"p2",name:"CoT_Trigger_P2.meta"},{id:"p9",name:"Self_Consistency_P9.meta"}]},{dir:"03_data",files:[{id:"p4",name:"FewShot_Examples_P4.meta"},{id:"p5",name:"Static_Context_P5.meta"}]},{dir:"04_guardrails",files:[{id:"p6",name:"Meta_Reflection_P6.meta"},{id:"p7",name:"Anchor_Layout_P7.meta"},{id:"p8",name:"Progressive_Disclosure_P8.meta"}]}],_e={p1:"你是一位资深软件架构师，专注于高可用与高安全性的系统设计。你将以严谨的架构视角审查接下来的问题，并给出高度可执行的、生产级别的专业设计建议与规范。",p2:`让我们一步步思考：
1. 深入分析并拆解当前问题的核心要素与潜在痛点；
2. 识别系统所面临的关键技术约束、性能指标与边界条件；
3. 对比推导 2-3 个可行性方案，分析各自的优劣得失与折衷（Trade-offs）；
4. 严格交叉验证结论是否与前置假设、安全红线保持高度一致。`,p3:`## 认知多重人格叠加协议 (Persona Stack)
- [创造者 Creator]: 积极发掘方案中蕴藏的架构机会、商业价值与效率优势，给出创新的建设性方案。
- [批评者 Critic]: 严苛审查设计方案中潜藏的可用性漏洞、安全风险、单点故障与假设漏洞，找出最坏的崩溃场景。
- [仲裁者 Arbiter]: 秉持完全中立的学术态度，客观综合两方辩证结论，输出具备触发前提与保障机制的折衷方案。
【输出格式规范】：请依次按 [创造者视角] -> [批评者视角] -> [仲裁者综合决策] 结构输出分析。`,p4:`## 少样本推理引导 (Few-Shot Examples)

【示例 1】
输入：构建低频高并发签到服务。
输出：
\`\`\`json
{
  "architecture": "Write-Behind with Redis Buffer",
  "storage": "Redis Hash + DynamoDB Rolling",
  "key_risk": "Redis OOM under bursts",
  "mitigation": "Token bucket rate limiter + Slot partitioning"
}
\`\`\`

【示例 2】
输入：微服务分布式事务回滚。
输出：
\`\`\`json
{
  "architecture": "Saga Orchestrator",
  "storage": "Transactional Outbox in Local DB",
  "key_risk": "Idempotent action failure on compensation",
  "mitigation": "Idempotent Key tracking table + Aggressive retry queue"
}
\`\`\`

请基于以上设计思维，分析接下来的输入任务，并输出对应格式 of 决策结果。
输入：{USER_INPUT}`,p5:`## 令牌预算规划 (Token Budget Constraint)
[预算控制协议]: 本次交互已开启 Token 严格受控流。请将响应内容限制在 2048 个 Token 的主干分析内。
- 严禁冗长过渡客套，直奔架构原理与实现细节；
- 优先提供伪代码或高密度的 Mermaid 拓扑，而非大篇幅自然语言叙述；
- 对次要概念仅做关键字提及，读者可在后续交互中通过特定命令深度展开。`,p6:`## 元反思协议 (Meta-Reflection Protocol)
【重要】：请在生成完主体回复后，自动另起一行，执行以下自我审计并输出：
1. [自我打分]: 本次回答在完备性、准确度与严谨性上分别能打几分 (1-10)？痛点在哪里？
2. [反面质疑]: 如果你是挑剔的系统架构评审委员会成员，你会对这个回答提出哪 3 个关键质疑？
3. [条件订正]: 针对上述质疑，如果存在逻辑漏洞，请立即提供更正版设计。`,p7:`## 锚点布局注入 (Anchor-Layout Scheme)
⚓ [首锚 - Identity & Goal]: 记住，你当前的首要目标是设计高并发系统，始终遵循令牌预算与架构自洽性。
[此处承接核心业务方案...]
🔗 [中锚 - Keep-on-Track Reminder]: ─── ⚠️ 关键校验点：请在此处重新审视你的设计是否违背了首锚的安全隔离原则 ───
[此处承接具体数据结构与逻辑流程...]
📍 [尾锚 - Compliance Self-Check]: 
输出结束前请输出以下检查单：
- [✓] 是否完成了安全隔离？
- [✓] 是否使用了列式存储？
- [✓] Token 预算是否合规？`,p8:`## 渐进式信息披露协议 (Progressive Disclosure)
- 层级 L0 (快速把握): 提供 1 句话核心概念描述，不超过 20 字。
- 层级 L1 (技术骨架): 提供 3 个核心原理的精炼列表与作用。
- 层级 L2 (深度分析): 提供完整的系统设计演进、具体示例与性能比对。
- 层级 L3 (专家边界): 提供极端边缘负载下的表现、故障模式分析与防御手段。
【交互指令】：初始回复仅提供 L0 与 L1 层级。用户可通过回复 "展开 L2" 或 "钻取 L3" 触发深度内容。`,p9:`## 自洽性验证矩阵 (Self-Consistency Verification)
在正式回复前，请在脑海中完成以下三层自洽性校验，确认无误后方可输出：
1. 事实自洽性: 确保方案中提及的所有中间件（如 Kafka, DuckDB）与网络协议与主流版本 spec 严格一致，无编造虚构参数。
2. 逻辑自洽性: 确保你的推导步骤中，所有的设计决断（如使用 Redis 缓存）都能在系统瓶颈分析中找到对应的强因果关系。
3. 约束自洽性: 确保满足本次对话的所有前置格式、字数与语气红线。`},Fe=()=>{const[b,M]=h.useState(0),[T,q]=h.useState(new Set);h.useEffect(()=>{const e=localStorage.getItem(se.CONTEXT_PROGRESS);if(e)try{q(new Set(JSON.parse(e)))}catch(s){console.error("Failed to load progress",s)}},[]),h.useEffect(()=>{localStorage.setItem(se.CONTEXT_PROGRESS,JSON.stringify(Array.from(T)))},[T]);const[re,le]=h.useState(!0),[oe,ie]=h.useState(0),[C,de]=h.useState({}),[B,E]=h.useState(!1),[z,J]=h.useState(""),[ce,Y]=h.useState([`上下文工程 v4 REPL 准备就绪。
输入 p1 ~ p9 预览微模式，或输入 compose p1 p2 组合模式。
──────────────────────────────`]),[y,A]=h.useState([]),he=e=>{A(s=>s.includes(e)?s.filter(n=>n!==e):[...s,e])},O=h.useMemo(()=>{if(y.length===0)return"暂无选中模式节点。请在左侧 ACTIVE CONTEXT TREE 中点击文件（或输入 p1~p9 运行）开始组合。";let e=`# ==========================================
`;return e+=`#  COMPOSED CONTEXT PROMPT (STRUCTURED TEMPLATE)
`,e+=`# ==========================================

`,[...y].sort().forEach(s=>{const n=s.toUpperCase(),r=_e[s];r&&(e+=`### [PATTERN: ${n}]
${r}

`)}),e.trim()},[y]),pe=h.useMemo(()=>y.length===0?0:Math.round(O.length/4.2),[O,y]),me=()=>{if(y.length===0)return;const e=new Blob([O],{type:"text/markdown;charset=utf-8;"}),s=URL.createObjectURL(e),n=document.createElement("a");n.setAttribute("href",s),n.setAttribute("download",`composed_prompt_${new Date().getTime()}.md`),document.body.appendChild(n),n.click(),document.body.removeChild(n)},V=h.useRef(null),H=h.useRef(null),I=h.useRef(null),f=N[b];h.useEffect(()=>{let e;const s=H.current;if(!s)return;const n=s.getContext("2d");if(!n)return;const r=window.devicePixelRatio||1,m=800,a=240;s.width=m*r,s.height=a*r;const i=x=>{n.setTransform(1,0,0,1,0,0),n.scale(r,r),be(n,m,a,x/1e3,f.cv||"default"),e=requestAnimationFrame(i)};return e=requestAnimationFrame(i),()=>cancelAnimationFrame(e)},[b]),h.useEffect(()=>{V.current&&V.current.scrollTo({top:0,behavior:"smooth"})},[b]),h.useEffect(()=>{const e=()=>{const s=window.location.hash.replace("#","");if(s.startsWith("id=")){const n=s.replace("id=",""),r=N.findIndex(m=>m.id===n);r!==-1&&(M(r),E(!1))}};return e(),window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[]);const be=(e,s,n,r,m)=>{const a=Pe.colors;e.clearRect(0,0,s,n);const i=s/2,x=n/2,D=Math.min(s,n)*.35,w=Math.PI*2,v=()=>e.globalAlpha=1,j=(K,U)=>{e.shadowBlur=U,e.shadowColor=K};switch(m){case"core":const K=[a.primary[400],a.info[400],a.success[400],a.warning[400],a.danger[400],a.secondary[400],a.primary[500],a.info[500],a.success[500]],U=["P1","P2","P3","P4","P5","P6","P7","P8","P9"];j(a.info[400],14),e.beginPath(),e.arc(i,x,16,0,w),e.fillStyle=ae(a.info[400],.2),e.fill(),e.strokeStyle=a.info[400],e.lineWidth=1.5,e.stroke(),v(),e.font="bold 10px system-ui",e.fillStyle="#fff",e.textAlign="center",e.textBaseline="middle",e.fillText("μ",i,x),K.forEach((l,o)=>{const d=o/9*w+r*.35,c=D+7*Math.sin(r*.9+o*.7),p=i+Math.cos(d)*c,u=x+Math.sin(d)*c;j(l,12),e.beginPath(),e.arc(p,u,11,0,w),e.fillStyle=l+"25",e.fill(),e.strokeStyle=l,e.lineWidth=1.5,e.stroke(),v(),e.font="bold 9px system-ui",e.fillStyle="#fff",e.textAlign="center",e.textBaseline="middle",e.fillText(U[o],p,u)});break;case"p1":const ue=[{l:"身份标签",c:a.info[400]},{l:"专业领域",c:a.secondary[500]},{l:"行为承诺",c:a.success[400]}],R=(s-60)/3,_=55,$=n/2-_/2;ue.forEach((l,o)=>{const d=20+(R+10)*o,c=(r*.6+o*.25)%1,p=.3+.4*Math.sin(r*1.2+o*1.3);if(j(l.c,8*p),e.beginPath(),e.roundRect?e.roundRect(d,$,R,_,6):e.rect(d,$,R,_),e.fillStyle=l.c+Math.floor(p*50+15).toString(16).padStart(2,"0"),e.fill(),e.strokeStyle=l.c,e.lineWidth=1.5,e.stroke(),v(),e.font="bold 10px system-ui",e.fillStyle="#fff",e.textAlign="center",e.textBaseline="middle",e.fillText(l.l,d+R/2,$+_/2),o<2){const u=d+R+2,k=$+_/2;e.beginPath(),e.arc(u+10*c,k,3,0,w),e.fillStyle=l.c,e.fill()}});break;case"cot":const Z=[`输入
问题`,`激活
CoT`,`步骤1
分析`,`步骤2
推导`,`步骤3
验证`,`输出
答案`],G=[a.primary[500],a.secondary[500],a.danger[400],a.warning[500],a.accent[400],a.success[400]],F=(s-30)/Z.length;Z.forEach((l,o)=>{const d=15+o*F,c=n*.3,p=.4+.4*((r*.5-o*.15)%1);j(G[o],8),e.beginPath(),e.roundRect?e.roundRect(d,c,F*.85,50,5):e.rect(d,c,F*.85,50),e.fillStyle=G[o]+Math.floor(30+p*30).toString(16).padStart(2,"0"),e.fill(),e.strokeStyle=G[o],e.lineWidth=1.2,e.stroke(),v(),e.font="bold 8.5px system-ui",e.fillStyle="#fff",e.textAlign="center",e.textBaseline="middle",l.split(`
`).forEach((u,k)=>e.fillText(u,d+F*.425,c+25+(k-.5)*11))});break;case"persona":const ge=[{c:a.danger[400],l:"Creator 创造者",r:75},{c:a.danger[500],l:"Critic 批评者",r:50},{c:a.primary[500],l:"Arbiter 仲裁者",r:25}],ee=s/2,te=n/2;ge.forEach((l,o)=>{const d=r*(o%2===0?.5:-.4)+o*2.1,c=1+.08*Math.sin(r*1.5+o);j(l.c,8),e.beginPath(),e.arc(ee,te,l.r*c,0,w),e.strokeStyle=l.c+"77",e.lineWidth=1.8,o===1&&e.setLineDash([4,4]),e.stroke(),e.setLineDash([]),v();const p=ee+Math.cos(d)*l.r*c,u=te+Math.sin(d)*l.r*c;j(l.c,10),e.beginPath(),e.arc(p,u,7,0,w),e.fillStyle=l.c,e.fill(),v()});break;case"fewshot":const ye=3,S=n*.23,we=n*.05;for(let l=0;l<ye;l++){const o=10+l*(S+we),d=.3+.35*Math.sin(r*.8+l*1.2),c=[a.success[400],a.info[300],a.info[400]][l],p=s*.42;j(c,5*d),e.beginPath(),e.roundRect?e.roundRect(10,o,p,S,5):e.rect(10,o,p,S),e.fillStyle=c+"15",e.fill(),e.strokeStyle=c+"66",e.lineWidth=1,e.stroke(),v();const u=(r*.5+l*.33)%1;e.beginPath(),e.arc(10+p+10+s*.12*u,o+S/2,3,0,w),e.fillStyle=c,e.fill();const k=s*.58;e.beginPath(),e.roundRect?e.roundRect(k,o,s-k-10,S,5):e.rect(k,o,s-k-10,S),e.fillStyle="rgba(255,255,255,.04)",e.fill(),e.strokeStyle="rgba(255,255,255,.1)",e.lineWidth=1,e.stroke()}break;case"token":const ve=[{n:"Role",pct:.6,c:a.info[400]},{n:"Inst",pct:.84,c:a.secondary[500]},{n:"Constr",pct:1.16,c:a.danger[500]},{n:"Context",pct:.9,c:a.primary[500]},{n:"FewShot",pct:.94,c:a.success[400]},{n:"Output",pct:.67,c:a.info[300]},{n:"History",pct:1.12,c:a.warning[500]}],L=18,je=7,ke=12,X=s-100;ve.forEach((l,o)=>{const d=ke+o*(L+je),c=Math.min(l.pct,1)*X,p=l.pct>1;e.beginPath(),e.roundRect?e.roundRect(65,d,X,L,3):e.rect(65,d,X,L),e.fillStyle="rgba(255,255,255,.04)",e.fill(),j(l.c,p?10:4),e.beginPath(),e.roundRect?e.roundRect(65,d,c*(1+.05*Math.sin(r*1.5+o)),L,3):e.rect(65,d,c*(1+.05*Math.sin(r*1.5+o)),L),e.fillStyle=p?ae(a.danger[500],.5):l.c+"40",e.fill(),e.strokeStyle=p?a.danger[500]:l.c,e.lineWidth=1,e.stroke(),v()});break;default:const Ne=s/2,Se=n/2;e.beginPath(),e.arc(Ne,Se,20+5*Math.sin(r*2),0,w),e.strokeStyle="rgba(0,240,255,.4)",e.lineWidth=2,e.stroke()}},Q=e=>{if(!e.trim())return;if(J(""),e==="clear"){Y([`已清空。
──────────────────────────────`]),A([]);return}const s=e.split(" "),n=s[0].toLowerCase(),r=s.slice(1).join(" "),m={p1:i=>`[P1 · 角色声明句]
你是一位资深${i||"软件工程师"}，专注于高质量系统设计，
将以架构视角审查问题并给出可执行中的专业建议。
─ Token估算: ~28 tokens ─`,p2:i=>`[P2 · 思维链触发]
${i?`问题：${i}`:""} 让我们一步步思考：
  步骤 1: 分析问题的核心要素...
  步骤 2: 识别关键约束条件...
  步骤 3: 推导可行方案...
  步骤 4: 验证结论与前提是否一致...
─ Token估算: +15 tokens ─`,p3:()=>`[P3 · 人格叠加模板]
## Persona Stack
🌟 创造者: 积极寻找机会，挖掘方案优势
🔴 批评者: 严格审查风险，找出假设漏洞
⚖️ 仲裁者: 中立综合两方，给出有条件建议
输出格式：[创造者]→[批评者]→[仲裁者综合]
─ Token估算: +120 tokens ─`,p4:i=>`[P4 · 少样本框架（3-Shot）]
## Few-Shot Examples

示例1: 输入="简单案例" → 输出={"result":"A","confidence":0.9}
示例2: 输入="复杂案例" → 输出={"result":"B","confidence":0.7,"note":"混合"}  
示例3: 输入="边界情况" → 输出={"result":"N/A","confidence":0.5,"note":"无法判断"}

${i?`任务: ${i}`:"请分析下面的输入："}
输入: "{user_input}"
输出:
─ Token估算: +180 tokens ─`,p5:()=>`[P5 · Token预算分析]
## Token Budget (8192 窗口)
├── Role(A)       300  ████░░░░ ✅
├── Instruction(B) 500 ███████░ ✅
├── Constraint(C)  250 ████░░░░ ✅
├── Context(G)    2400 ███████████████░ ✅
├── Few-Shot(P4)   900 ██████░░ ✅
├── Output(D)      300 ████░░░░ ✅
└── History        800 █████░░░ ✅
总计: 5450 / 6144 可用 (留给响应: 2048)
─ 预算状态: ✅ 健康 ─`,p6:()=>`[P6 · 元反思协议]
## Meta-Reflection（输出后执行）
Step 1 [打分]: 我给这个回答打 ?/10 分
  优点: ...  不足: ...
Step 2 [批评]: 如果我是挑剔的专家，我会质疑：
  1. [逻辑漏洞]  2. [遗漏信息]  3. [误导表述]
Step 3 [条件修订]:
  IF 评分 < 8 → 重写 → 再评分
  IF 评分 ≥ 8 → 附置信度声明
─ Token估算: +200 tokens ─`,p7:()=>`[P7 · 锚点注入布局]
⚓ [首锚 - 开头, 最高权重]
  你是[角色]，核心约束：[约束]。
  
  [...... 提示体主体内容 ......]
  
🔗 [中锚 - 50%位置, 防漂移]
  ─── ⚠️ 关键提醒：始终遵守[核心约束] ───
  
  [...... 输出格式定义 ......]
  
📍 [尾锚 - 紧邻输出, 次高权重]
  确认：✓ [约束1] ✓ [约束2] ✓ [格式]
  现在开始：
─ Token估算: +90 tokens ─`,p8:i=>`[P8 · 渐进揭示结构]
## Progressive Disclosure: ${i||"目标概念"}

L0 [5秒]: "[一句话核心定义，≤20字]"

L1 [30秒]: 三个核心原理
  1. [最重要原理]
  2. [第二原理]
  3. [第三原理]

L2 [3分钟]: 完整解释 + 示例 + 类比
  [详细展开...]

L3 [专家]: 边界情况 + 反例 + 研究引用
  (回复 L3 获取专家级深度)
─ 用户可回复 L0/L1/L2/L3 ─`,p9:()=>`[P9 · 自洽验证清单]
## Self-Consistency Check（输出后）
✅ 层1 事实自洽:
  □ 所有数据来自上下文？(无虚构)
  □ 引用的名称/API/版本是否存在？
✅ 层2 逻辑自洽:
  □ 每个结论有对应前提？
  □ 无推理跳步？
✅ 层3 约束自洽:
  □ 字数在限制内？
  □ 在领域白名单内？
  □ 区分了确定/推断？
结果: ✅ 全部通过 / ⚠️ 发现问题：[列表]
─ Token估算: +150 tokens ─`};let a="";if(n.startsWith("compose")){const i=e.match(/p\d+/gi)||[];i.length===0?a="用法: compose p1 p2 p6":(a=`[COMPOSE: ${i.join(" + ")}]
${"─".repeat(40)}
`,i.forEach(x=>{const D=m[x.toLowerCase()];D?a+=D("")+`

`:a+=`⚠️ 未知微模式: ${x}
`}),a+=`─ 总Token估算: ~${i.length*120} tokens ─`,A(i.map(x=>x.toLowerCase())))}else m[n]?(a=m[n](r),A([n])):a=`⚠️ 未知命令: "${e}"
可用命令: p1~p9, compose [p1 p2...], clear`;Y(i=>[...i,`› ${e}
${a}
──────────────────────────────`]),setTimeout(()=>{I.current&&(I.current.scrollTop=I.current.scrollHeight)},10)},fe=(e,s)=>{const n={...C};n[e]||(n[e]=new Set),n[e].has(s)?n[e].delete(s):n[e].add(s),de(n),n[e].size===N[e].checks.length&&(q(r=>{const m=new Set(r);return m.add(e),m}),ie(r=>r+1))},xe=t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"p-8 border-b border-slate-100 bg-white/50 backdrop-blur-sm",children:[t.jsxs("div",{className:"flex justify-between items-center text-xs font-black tracking-widest text-slate-400 mb-3",children:[t.jsx("span",{children:"LEARNING STREAK"}),t.jsxs("span",{className:"text-orange-500 font-black",children:["🔥 ",oe]})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded-full overflow-hidden",children:t.jsx("div",{className:"h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500",style:{width:`${T.size/N.length*100}%`}})})]}),t.jsx("div",{className:"flex-1 overflow-y-auto py-6 px-4 space-y-1",children:N.map((e,s)=>{const n=b===s,r=T.has(s);return t.jsxs("button",{onClick:()=>{M(s),E(!1)},className:g("w-full flex items-start gap-4 p-4 text-left transition-all duration-300 rounded-2xl group",n?"bg-slate-900 text-white shadow-xl shadow-cyan-950/20 scale-[1.02] border border-cyan-500/30":"text-slate-500 hover:bg-white hover:text-slate-900 hover:shadow-md hover:shadow-slate-200/50 border border-transparent"),children:[t.jsx("div",{className:g("w-2.5 h-2.5 rounded-full mt-1.5 shrink-0 transition-all duration-500",n?"bg-cyan-400 scale-125 shadow-[0_0_10px_rgba(34,211,238,0.5)]":r?"bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]":"bg-slate-300 group-hover:bg-slate-400")}),t.jsxs("div",{className:"min-w-0",children:[t.jsx("div",{className:g("text-xs font-black tracking-[0.2em] mb-1 uppercase transition-colors",n?"text-cyan-400":"text-slate-500"),children:e.id}),t.jsx("div",{className:g("text-sm font-black leading-tight truncate transition-colors",n?"text-white":"text-slate-800"),children:e.title}),t.jsx("div",{className:g("text-xs mt-2 font-bold uppercase tracking-widest transition-colors",n?"text-cyan-300/60":"text-slate-500"),children:e.phase.split("·")[1]})]})]},e.id)})})]});return t.jsx(t.Fragment,{children:t.jsx(Te,{header:t.jsx(Ce,{title:"上下文工程",subtitle:"提示工程 · 结构化认知 · 逻辑底座",description:"掌握 9 种元提示体微模式与 17 维度设计闭环。通过精确的上下文注入与结构化推理，释放 LLM 的极致潜力。",icon:"⚙️",gradient:"from-cyan-400 to-blue-600",badgeText:"Prompt Engineering · Meta-Patterns",stats:[{label:"核心微模式",value:"9",icon:"🧩"},{label:"设计维度",value:"17",icon:"📐"},{label:"掌握进度",value:`${T.size}/${N.length}`,icon:"📈"}]}),sidebar:xe,footer:t.jsx(Ee,{title:"Context Engineering Systems",description:"构建高可靠的提示工程资产，让 AI 协作进入工程化时代。",icon:"⚙️",tags:["Context Injection","Meta-Prompting","Token Efficiency","System Consistency"],gradient:"from-cyan-400 to-blue-600"}),isSidebarOpen:re,onToggleSidebar:le,mainRef:V,children:t.jsx(ne,{mode:"wait",children:t.jsxs(W.div,{initial:{opacity:0,x:20},animate:{opacity:1,y:0},exit:{opacity:0,x:-20},className:"space-y-16",children:[t.jsxs("div",{className:"relative p-10 rounded-3xl border border-slate-100 overflow-hidden shadow-xl bg-white group",children:[t.jsx("div",{className:"absolute top-0 right-0 w-[300px] h-[300px] bg-slate-50 rounded-full -mr-24 -mt-24 blur-3xl opacity-50 pointer-events-none group-hover:scale-110 transition-transform duration-700"}),t.jsxs("div",{className:"relative z-10",children:[t.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-xs font-bold tracking-widest uppercase mb-4 text-slate-400",children:[t.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"}),f.phase]}),t.jsxs("div",{className:"flex items-start justify-between gap-6",children:[t.jsxs("div",{children:[t.jsxs("div",{className:"text-xs font-bold tracking-widest uppercase text-cyan-600 mb-2",children:[f.id," · ",f.icon]}),t.jsx("h1",{className:"text-4xl font-black text-slate-900 leading-tight mb-3 tracking-tight",children:f.title}),t.jsx("p",{className:"text-lg font-bold text-slate-400 leading-relaxed max-w-2xl",children:f.tag})]}),t.jsx("div",{className:"w-20 h-20 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-5xl shadow-inner shrink-0 rotate-3 group-hover:rotate-0 transition-transform",children:f.icon})]})]})]}),t.jsxs("section",{children:[t.jsx(P,{title:"理论模型",badge:"Theoretical Model"}),t.jsxs("div",{className:"bg-slate-50/50 rounded-2xl p-10 border border-slate-100 shadow-inner",children:[t.jsx("div",{className:"text-base md:text-lg text-slate-600 leading-relaxed font-medium space-y-4 knowledge-body",dangerouslySetInnerHTML:{__html:f.concept}}),t.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10",children:f.callouts?.map((e,s)=>t.jsxs("div",{className:g("p-6 rounded-xl border-2 flex flex-col gap-2 transition-all hover:translate-y-0.5 shadow-sm",e.t==="b"?"bg-blue-50/50 border-blue-100 text-blue-900":e.t==="g"?"bg-emerald-50/50 border-emerald-100 text-emerald-900":e.t==="o"?"bg-amber-50/50 border-amber-100 text-amber-900":e.t==="p"?"bg-violet-50/50 border-violet-100 text-violet-900":"bg-rose-50/50 border-rose-100 text-rose-900"),children:[t.jsx("div",{className:"text-xs font-bold uppercase tracking-widest opacity-40",children:e.i}),t.jsx("div",{className:"font-bold text-sm leading-snug",children:e.s})]},s))})]})]}),t.jsxs("section",{children:[t.jsx(P,{title:"范式可视化",badge:"Dynamic Visualization"}),t.jsxs("div",{className:"bg-slate-900 border border-white/5 rounded-2xl overflow-hidden relative shadow-2xl group",children:[t.jsxs("div",{className:"absolute top-4 left-6 flex items-center gap-3 z-10",children:[t.jsxs("div",{className:"flex gap-1",children:[t.jsx("div",{className:"w-2 h-2 rounded-full bg-rose-500 shadow-[0_0_6px_rgba(244,63,94,0.4)]"}),t.jsx("div",{className:"w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.4)]"})]}),t.jsx("span",{className:"text-xs font-bold text-white/20 uppercase tracking-[0.3em]",children:"System Visualizer v4.0"})]}),t.jsx("canvas",{ref:H,width:"800",height:"240",className:"w-full block"}),t.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent pointer-events-none"})]})]}),t.jsxs("section",{children:[t.jsx(P,{title:"原子实验沙盒",badge:"Interactive REPL"}),t.jsxs("div",{className:"bg-slate-900 border border-white/5 rounded-2xl overflow-hidden shadow-2xl flex flex-col",children:[t.jsxs("div",{className:"px-6 py-4 bg-slate-950/40 border-b border-white/5 flex justify-between items-center backdrop-blur-md",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"bg-cyan-500/10 text-cyan-400 text-xs font-bold px-2.5 py-0.5 rounded-md uppercase tracking-widest border border-cyan-500/20",children:"TERMINAL"}),t.jsx("span",{className:"text-xs font-bold px-2.5 py-0.5 rounded-md bg-white/5 text-white/30 uppercase tracking-widest border border-white/5",children:"REPL MODE"})]}),t.jsx("div",{className:"text-xs font-bold text-white/10 tracking-widest uppercase",children:"Connected"})]}),t.jsxs("div",{className:"flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-white/5 bg-slate-950/20 border-b border-white/5",children:[t.jsxs("div",{className:"w-full md:w-64 p-6 overflow-y-auto font-mono text-xs text-white/60 selection:bg-cyan-500/30 border-r border-white/5 max-h-[300px]",children:[t.jsx("div",{className:"flex items-center gap-2 mb-4 text-cyan-400 font-bold uppercase tracking-wider text-xs",children:t.jsx("span",{children:"📁 ACTIVE CONTEXT TREE"})}),t.jsxs("div",{className:"space-y-2 select-none",children:[t.jsxs("div",{className:"flex items-center gap-1.5 text-white/80 font-bold",children:[t.jsx("span",{children:"📂"}),t.jsx("span",{children:"active_prompt/"})]}),t.jsx("div",{className:"pl-3 space-y-2 border-l border-white/10 ml-2",children:Re.map((e,s)=>{const n=e.files.some(r=>y.includes(r.id));return t.jsxs("div",{className:"space-y-1.5",children:[t.jsxs("div",{className:g("flex items-center gap-1.5 transition-colors",n?"text-cyan-300 font-bold":"text-white/40"),children:[t.jsx("span",{children:n?"📂":"📁"}),t.jsxs("span",{children:[e.dir,"/"]})]}),t.jsx("div",{className:"pl-4 space-y-1 border-l border-white/5 ml-1.5",children:e.files.map((r,m)=>{const a=y.includes(r.id);return t.jsxs("button",{onClick:()=>he(r.id),className:g("w-full text-left flex items-center justify-between py-1 px-2 rounded transition-colors group cursor-pointer",a?"text-cyan-400 font-bold bg-white/5":"text-white/40 hover:text-white/70 hover:bg-white/5"),children:[t.jsxs("span",{className:"flex items-center gap-1.5 truncate",children:[t.jsx("span",{children:a?"🟢":"📄"}),t.jsx("span",{className:"truncate",children:r.name})]}),a&&t.jsx("span",{className:"text-xs font-black tracking-widest leading-none bg-cyan-500/20 text-cyan-300 px-1 py-0.5 rounded border border-cyan-500/30",children:"LIVE"})]},m)})})]},s)})})]})]}),t.jsx("div",{ref:I,className:"flex-1 p-6 font-mono text-xs leading-relaxed text-cyan-50/60 h-[300px] overflow-y-auto whitespace-pre-wrap selection:bg-cyan-500/30 scroll-smooth",children:ce.join(`
`)})]}),t.jsxs("div",{className:"px-6 py-4 bg-slate-950/60 border-t border-white/5 flex items-center gap-4",children:[t.jsx("span",{className:"text-cyan-500 font-bold text-base",children:"›"}),t.jsx("input",{type:"text",value:z,onChange:e=>J(e.target.value),onKeyDown:e=>e.key==="Enter"&&Q(z),className:"flex-1 bg-transparent border-none outline-none text-cyan-400 font-mono text-base placeholder:text-white/5",placeholder:"输入模式指令 (如: p1, p2, clear)...","aria-label":"模式指令输入",spellCheck:!1}),t.jsx("button",{onClick:()=>Q(z),className:"bg-cyan-600 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-lg hover:bg-cyan-500 transition-all shadow-lg shadow-cyan-900/20",children:"Execute"})]})]})]}),t.jsxs("section",{children:[t.jsxs("div",{className:"flex items-center justify-between mb-6",children:[t.jsx(P,{title:"拼装提示词预览",badge:"Composed Prompt",className:"mb-0"}),t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("button",{onClick:me,disabled:y.length===0,className:"px-4 py-2 bg-emerald-600 disabled:opacity-40 text-white rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-emerald-500 transition-all active:scale-95 shadow-lg shadow-emerald-950/20",children:"📥 导出 Markdown"}),t.jsxs("div",{className:"px-3 py-1.5 bg-slate-800 border border-white/5 rounded-lg text-xs font-mono text-cyan-400 font-bold",children:["Estimated Tokens: ",pe]})]})]}),t.jsxs("div",{className:"bg-slate-900 border border-white/5 rounded-3xl p-8 shadow-xl relative overflow-hidden",children:[t.jsx("div",{className:"absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 rounded-full -mr-24 -mt-24 blur-2xl"}),t.jsx("div",{className:"relative z-10 space-y-4",children:t.jsx("div",{className:"p-8 bg-slate-950 rounded-2xl border border-white/5 shadow-inner max-h-[400px] overflow-y-auto",children:t.jsx("pre",{className:"text-cyan-100/90 font-mono text-xs md:text-sm leading-relaxed whitespace-pre-wrap selection:bg-cyan-500/30",children:O})})})]})]}),t.jsxs("section",{children:[t.jsx(P,{title:"掌握清单",badge:"Mastery Checklist"}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:f.checks.map((e,s)=>t.jsxs("button",{role:"checkbox","aria-checked":C[b]?.has(s)||!1,onClick:()=>fe(b,s),className:g("p-5 rounded-xl border-2 text-left flex items-start gap-4 transition-all group",C[b]?.has(s)?"bg-emerald-50 border-emerald-500 text-emerald-900":"bg-white border-slate-100 text-slate-600 hover:border-cyan-500 hover:bg-cyan-50/30"),children:[t.jsx("div",{className:g("w-5 h-5 rounded-md border-2 mt-0.5 shrink-0 flex items-center justify-center transition-all",C[b]?.has(s)?"bg-emerald-500 border-emerald-500 text-white":"border-slate-200 group-hover:border-cyan-500"),children:C[b]?.has(s)&&t.jsx("svg",{className:"w-3.5 h-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:3,d:"M5 13l4 4L19 7"})})}),t.jsx("span",{className:"font-bold text-sm leading-snug",children:e})]},s))})]}),t.jsxs("section",{children:[t.jsxs("div",{className:"flex items-center justify-between mb-6",children:[t.jsx(P,{title:"提示词本体",badge:"System Prompt",className:"mb-0"}),t.jsx("button",{onClick:()=>E(!B),className:"px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-slate-800 transition-all active:scale-95 shadow-lg shadow-slate-900/10",children:B?"显示源码 View Source":"预览效果 View Result"})]}),t.jsxs("div",{className:"bg-white border border-slate-200 rounded-3xl p-8 shadow-xl relative overflow-hidden",children:[t.jsx("div",{className:"absolute top-0 right-0 w-48 h-48 bg-slate-50 rounded-full -mr-24 -mt-24 opacity-50"}),t.jsx("div",{className:"relative z-10",children:t.jsx(ne,{mode:"wait",children:B?t.jsx(W.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},className:"bg-slate-50 p-8 rounded-2xl border-2 border-dashed border-slate-200",children:t.jsxs("div",{className:"flex flex-col gap-4 text-slate-500",children:[t.jsx("div",{className:"w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-xl shadow-sm",children:"✨"}),t.jsx("p",{className:"text-lg font-medium leading-relaxed italic opacity-80",children:'"基于上述架构，LLM 现在将表现出显著增强的推理自洽性与多维度约束遵守能力..."'}),t.jsx("div",{className:"h-px bg-slate-200 w-16"}),t.jsx("div",{className:"text-xs font-bold uppercase tracking-widest opacity-30",children:"End of Preview"})]})},"result"):t.jsx(W.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},className:"space-y-4",children:t.jsx("div",{className:"p-8 bg-slate-900 rounded-2xl border border-white/5 shadow-inner",children:t.jsx("pre",{className:"text-blue-100/80 font-mono text-xs md:text-sm leading-relaxed whitespace-pre-wrap selection:bg-cyan-500/30",children:f.code})})},"source")})})]})]}),t.jsxs("div",{className:"pt-8 border-t border-slate-100 flex justify-between items-center pb-24 lg:pb-8",children:[t.jsx("button",{disabled:b===0,onClick:()=>{M(b-1),E(!1)},className:"text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-xl border-2 border-slate-100 text-slate-400 hover:text-slate-600 hover:bg-slate-50 disabled:opacity-30 transition-all flex items-center gap-2",children:"← Previous"}),t.jsxs("div",{className:"px-4 py-2 rounded-full bg-slate-100 text-xs font-bold text-slate-500 uppercase tracking-widest border border-slate-200",children:["Pattern ",b+1," of ",N.length]}),t.jsx("button",{disabled:b===N.length-1,onClick:()=>{M(b+1),E(!1)},className:"text-xs font-bold uppercase tracking-widest px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:opacity-90 shadow-lg shadow-cyan-500/20 disabled:opacity-30 transition-all flex items-center gap-2",children:"Next →"})]})]},f.id)})})})};export{Fe as default};
