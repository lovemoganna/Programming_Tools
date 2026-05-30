import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TICKETS } from './data/tickets';
import { DesignTokens } from '../../theme/design-tokens';
import { hexToRgba } from '../../utils/theme-utils';
import { cn } from '../../utils/cn';
import { PageHeader } from "../../components/PageHeader";
import { PageFooter } from "../../components/PageFooter";
import { SectionHeader } from "../../components/SectionHeader";
import { SplitViewLayout } from "../../components/SplitViewLayout";
import { STORAGE_KEYS } from "../../utils/StorageUtility";

const contextTree = [
  {
    dir: "01_identity",
    files: [
      { id: "p1", name: "Role_Declare_P1.meta" },
      { id: "p3", name: "Persona_Stack_P3.meta" }
    ]
  },
  {
    dir: "02_reasoning",
    files: [
      { id: "p2", name: "CoT_Trigger_P2.meta" },
      { id: "p9", name: "Self_Consistency_P9.meta" }
    ]
  },
  {
    dir: "03_data",
    files: [
      { id: "p4", name: "FewShot_Examples_P4.meta" },
      { id: "p5", name: "Static_Context_P5.meta" }
    ]
  },
  {
    dir: "04_guardrails",
    files: [
      { id: "p6", name: "Meta_Reflection_P6.meta" },
      { id: "p7", name: "Anchor_Layout_P7.meta" },
      { id: "p8", name: "Progressive_Disclosure_P8.meta" }
    ]
  }
];

const TEMPLATE_CONTENTS: Record<string, string> = {
  p1: `你是一位资深软件架构师，专注于高可用与高安全性的系统设计。你将以严谨的架构视角审查接下来的问题，并给出高度可执行的、生产级别的专业设计建议与规范。`,
  p2: `让我们一步步思考：
1. 深入分析并拆解当前问题的核心要素与潜在痛点；
2. 识别系统所面临的关键技术约束、性能指标与边界条件；
3. 对比推导 2-3 个可行性方案，分析各自的优劣得失与折衷（Trade-offs）；
4. 严格交叉验证结论是否与前置假设、安全红线保持高度一致。`,
  p3: `## 认知多重人格叠加协议 (Persona Stack)
- [创造者 Creator]: 积极发掘方案中蕴藏的架构机会、商业价值与效率优势，给出创新的建设性方案。
- [批评者 Critic]: 严苛审查设计方案中潜藏的可用性漏洞、安全风险、单点故障与假设漏洞，找出最坏的崩溃场景。
- [仲裁者 Arbiter]: 秉持完全中立的学术态度，客观综合两方辩证结论，输出具备触发前提与保障机制的折衷方案。
【输出格式规范】：请依次按 [创造者视角] -> [批评者视角] -> [仲裁者综合决策] 结构输出分析。`,
  p4: `## 少样本推理引导 (Few-Shot Examples)

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
输入：{USER_INPUT}`,
  p5: `## 令牌预算规划 (Token Budget Constraint)
[预算控制协议]: 本次交互已开启 Token 严格受控流。请将响应内容限制在 2048 个 Token 的主干分析内。
- 严禁冗长过渡客套，直奔架构原理与实现细节；
- 优先提供伪代码或高密度的 Mermaid 拓扑，而非大篇幅自然语言叙述；
- 对次要概念仅做关键字提及，读者可在后续交互中通过特定命令深度展开。`,
  p6: `## 元反思协议 (Meta-Reflection Protocol)
【重要】：请在生成完主体回复后，自动另起一行，执行以下自我审计并输出：
1. [自我打分]: 本次回答在完备性、准确度与严谨性上分别能打几分 (1-10)？痛点在哪里？
2. [反面质疑]: 如果你是挑剔的系统架构评审委员会成员，你会对这个回答提出哪 3 个关键质疑？
3. [条件订正]: 针对上述质疑，如果存在逻辑漏洞，请立即提供更正版设计。`,
  p7: `## 锚点布局注入 (Anchor-Layout Scheme)
⚓ [首锚 - Identity & Goal]: 记住，你当前的首要目标是设计高并发系统，始终遵循令牌预算与架构自洽性。
[此处承接核心业务方案...]
🔗 [中锚 - Keep-on-Track Reminder]: ─── ⚠️ 关键校验点：请在此处重新审视你的设计是否违背了首锚的安全隔离原则 ───
[此处承接具体数据结构与逻辑流程...]
📍 [尾锚 - Compliance Self-Check]: 
输出结束前请输出以下检查单：
- [✓] 是否完成了安全隔离？
- [✓] 是否使用了列式存储？
- [✓] Token 预算是否合规？`,
  p8: `## 渐进式信息披露协议 (Progressive Disclosure)
- 层级 L0 (快速把握): 提供 1 句话核心概念描述，不超过 20 字。
- 层级 L1 (技术骨架): 提供 3 个核心原理的精炼列表与作用。
- 层级 L2 (深度分析): 提供完整的系统设计演进、具体示例与性能比对。
- 层级 L3 (专家边界): 提供极端边缘负载下的表现、故障模式分析与防御手段。
【交互指令】：初始回复仅提供 L0 与 L1 层级。用户可通过回复 "展开 L2" 或 "钻取 L3" 触发深度内容。`,
  p9: `## 自洽性验证矩阵 (Self-Consistency Verification)
在正式回复前，请在脑海中完成以下三层自洽性校验，确认无误后方可输出：
1. 事实自洽性: 确保方案中提及的所有中间件（如 Kafka, DuckDB）与网络协议与主流版本 spec 严格一致，无编造虚构参数。
2. 逻辑自洽性: 确保你的推导步骤中，所有的设计决断（如使用 Redis 缓存）都能在系统瓶颈分析中找到对应的强因果关系。
3. 约束自洽性: 确保满足本次对话的所有前置格式、字数与语气红线。`
};

const ContextEngineeringPage: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [completed, setCompleted] = useState<Set<number>>(new Set());
  // ... rest

  // Load progress
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.CONTEXT_PROGRESS);
    if (saved) {
      try {
        setCompleted(new Set(JSON.parse(saved)));
      } catch (e) {
        console.error('Failed to load progress', e);
      }
    }
  }, []);

  // Save progress
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.CONTEXT_PROGRESS, JSON.stringify(Array.from(completed)));
  }, [completed]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [streak, setStreak] = useState(0);
  const [checks, setChecks] = useState<Record<number, Set<number>>>({});
  const [isFlipped, setIsFlipped] = useState(false);
  const [replInput, setReplInput] = useState('');
  const [replOutput, setReplOutput] = useState<string[]>(['上下文工程 v4 REPL 准备就绪。\n输入 p1 ~ p9 预览微模式，或输入 compose p1 p2 组合模式。\n──────────────────────────────']);
  const [activeNodes, setActiveNodes] = useState<string[]>([]);

  const handleTreeNodeClick = (id: string) => {
    setActiveNodes(prev => {
      if (prev.includes(id)) {
        return prev.filter(n => n !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const composedPromptText = useMemo(() => {
    if (activeNodes.length === 0) {
      return "暂无选中模式节点。请在左侧 ACTIVE CONTEXT TREE 中点击文件（或输入 p1~p9 运行）开始组合。";
    }
    let text = "# ==========================================\n";
    text += "#  COMPOSED CONTEXT PROMPT (STRUCTURED TEMPLATE)\n";
    text += "# ==========================================\n\n";
    
    [...activeNodes].sort().forEach((nodeId) => {
      const titleName = nodeId.toUpperCase();
      const rawText = TEMPLATE_CONTENTS[nodeId];
      if (rawText) {
        text += `### [PATTERN: ${titleName}]\n${rawText}\n\n`;
      }
    });
    
    return text.trim();
  }, [activeNodes]);

  const estimatedTokens = useMemo(() => {
    if (activeNodes.length === 0) return 0;
    return Math.round(composedPromptText.length / 4.2);
  }, [composedPromptText, activeNodes]);

  const exportMarkdown = () => {
    if (activeNodes.length === 0) return;
    const blob = new Blob([composedPromptText], { type: "text/markdown;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `composed_prompt_${new Date().getTime()}.md`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  const mainContentRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const replOutRef = useRef<HTMLDivElement>(null);
  const currentTicket = TICKETS[currentIdx];

  // Visualizer Animation
  useEffect(() => {
    let frame: number;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const logicalW = 800;
    const logicalH = 240;

    canvas.width = logicalW * dpr;
    canvas.height = logicalH * dpr;

    const render = (time: number) => {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      drawVisualizer(ctx, logicalW, logicalH, time / 1000, currentTicket.cv || 'default');
      frame = requestAnimationFrame(render);
    };
    frame = requestAnimationFrame(render);
    return () => cancelAnimationFrame(frame);
  }, [currentIdx]);

  useEffect(() => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentIdx]);

  // Handle Deep Linking via Hash
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('id=')) {
        const id = hash.replace('id=', '');
        const targetIdx = TICKETS.findIndex(t => t.id === id);
        if (targetIdx !== -1) {
          setCurrentIdx(targetIdx);
          setIsFlipped(false);
        }
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const drawVisualizer = (ctx: CanvasRenderingContext2D, W: number, H: number, t: number, mode: string) => {
    const colors = DesignTokens.colors;
    ctx.clearRect(0, 0, W, H);
    const cx = W/2, cy = H/2, R = Math.min(W, H) * 0.35;
    const P2 = Math.PI * 2;
    const ng = () => ctx.globalAlpha = 1;
    const gw = (c: string, a: number) => { ctx.shadowBlur = a; ctx.shadowColor = c; };

    switch(mode) {
      case 'core':
        const cs = [colors.primary[400], colors.info[400], colors.success[400], colors.warning[400], colors.danger[400], colors.secondary[400], colors.primary[500], colors.info[500], colors.success[500]];
        const ls = ['P1','P2','P3','P4','P5','P6','P7','P8','P9'];
        gw(colors.info[400], 14); ctx.beginPath(); ctx.arc(cx, cy, 16, 0, P2);
        ctx.fillStyle=hexToRgba(colors.info[400], 0.2); ctx.fill(); ctx.strokeStyle=colors.info[400]; ctx.lineWidth=1.5; ctx.stroke(); ng();
        ctx.font='bold 10px system-ui'; ctx.fillStyle='#fff'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.fillText('μ', cx, cy);
        cs.forEach((c, i) => {
          const a = (i/9)*P2 + t*.35;
          const r = R + 7*Math.sin(t*.9 + i*.7);
          const x = cx + Math.cos(a)*r, y = cy + Math.sin(a)*r;
          gw(c, 12); ctx.beginPath(); ctx.arc(x, y, 11, 0, P2); ctx.fillStyle=c+'25'; ctx.fill(); ctx.strokeStyle=c; ctx.lineWidth=1.5; ctx.stroke(); ng();
          ctx.font='bold 9px system-ui'; ctx.fillStyle='#fff'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.fillText(ls[i], x, y);
        });
        break;
      case 'p1':
        const p1_blocks=[{l:'身份标签',c:colors.info[400]},{l:'专业领域',c:colors.secondary[500]},{l:'行为承诺',c:colors.success[400]}];
        const bw=(W-60)/3, bh=55, by=H/2-bh/2;
        p1_blocks.forEach((b, i) => {
          const bx = 20 + (bw+10)*i;
          const p = (t*.6 + i*.25)%1;
          const alpha = .3 + .4*Math.sin(t*1.2 + i*1.3);
          gw(b.c, 8*alpha); ctx.beginPath(); 
          // @ts-ignore
          if (ctx.roundRect) ctx.roundRect(bx, by, bw, bh, 6); else ctx.rect(bx, by, bw, bh);
          ctx.fillStyle=b.c + Math.floor(alpha*50+15).toString(16).padStart(2,'0');
          ctx.fill(); ctx.strokeStyle=b.c; ctx.lineWidth=1.5; ctx.stroke(); ng();
          ctx.font='bold 10px system-ui'; ctx.fillStyle='#fff'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.fillText(b.l, bx+bw/2, by+bh/2);
          if (i<2) { const ax=bx+bw+2, ay=by+bh/2; ctx.beginPath(); ctx.arc(ax+(10)*p, ay, 3, 0, P2); ctx.fillStyle=b.c; ctx.fill(); }
        });
        break;
      case 'cot':
        const cot_steps=['输入\n问题','激活\nCoT','步骤1\n分析','步骤2\n推导','步骤3\n验证','输出\n答案'];
        const cot_cs=[colors.primary[500],colors.secondary[500],colors.danger[400],colors.warning[500],colors.accent[400],colors.success[400]];
        const cot_sw=(W-30)/(cot_steps.length);
        cot_steps.forEach((s, i) => {
          const sx = 15+i*cot_sw, sy = H*.3;
          const pulse = .4 + .4*((t*.5-i*.15)%1);
          gw(cot_cs[i], 8); ctx.beginPath();
          // @ts-ignore
          if (ctx.roundRect) ctx.roundRect(sx, sy, cot_sw*.85, 50, 5); else ctx.rect(sx, sy, cot_sw*.85, 50);
          ctx.fillStyle=cot_cs[i] + Math.floor(30+pulse*30).toString(16).padStart(2,'0');
          ctx.fill(); ctx.strokeStyle=cot_cs[i]; ctx.lineWidth=1.2; ctx.stroke(); ng();
          ctx.font='bold 8.5px system-ui'; ctx.fillStyle='#fff'; ctx.textAlign='center'; ctx.textBaseline='middle';
          s.split('\n').forEach((ln, j) => ctx.fillText(ln, sx+cot_sw*.425, sy+25+(j-.5)*11));
        });
        break;
      case 'persona':
        const ps=[{c:colors.danger[400],l:'Creator 创造者',r:75},{c:colors.danger[500],l:'Critic 批评者',r:50},{c:colors.primary[500],l:'Arbiter 仲裁者',r:25}];
        const pcx=W/2, pcy=H/2;
        ps.forEach((p, i) => {
          const a = t*(i%2===0?.5:-.4) + i*2.1;
          const pulse = 1 + .08*Math.sin(t*1.5+i);
          gw(p.c, 8); ctx.beginPath(); ctx.arc(pcx, pcy, p.r*pulse, 0, P2);
          ctx.strokeStyle=p.c+'77'; ctx.lineWidth=1.8; if(i===1) ctx.setLineDash([4,4]); ctx.stroke(); ctx.setLineDash([]); ng();
          const dx=pcx+Math.cos(a)*p.r*pulse, dy=pcy+Math.sin(a)*p.r*pulse;
          gw(p.c, 10); ctx.beginPath(); ctx.arc(dx, dy, 7, 0, P2); ctx.fillStyle=p.c; ctx.fill(); ng();
        });
        break;
      case 'fewshot':
        const shots=3; const sh=H*.23, sg=H*.05;
        for(let i=0; i<shots; i++) {
          const sy=10+i*(sh+sg);
          const alpha=.3+.35*Math.sin(t*.8+i*1.2);
          const c=[colors.success[400],colors.info[300],colors.info[400]][i];
          const hw=W*.42;
          gw(c, 5*alpha); ctx.beginPath(); 
          // @ts-ignore
          if (ctx.roundRect) ctx.roundRect(10, sy, hw, sh, 5); else ctx.rect(10, sy, hw, sh);
          ctx.fillStyle=c+'15'; ctx.fill(); ctx.strokeStyle=c+'66'; ctx.lineWidth=1; ctx.stroke(); ng();
          const pp=(t*.5+i*.33)%1;
          ctx.beginPath(); ctx.arc(10+hw+10+(W*.12)*pp, sy+sh/2, 3, 0, P2); ctx.fillStyle=c; ctx.fill();
          const ox=W*.58;
          ctx.beginPath(); 
          // @ts-ignore
          if (ctx.roundRect) ctx.roundRect(ox, sy, W-ox-10, sh, 5); else ctx.rect(ox, sy, W-ox-10, sh);
          ctx.fillStyle='rgba(255,255,255,.04)'; ctx.fill(); ctx.strokeStyle='rgba(255,255,255,.1)'; ctx.lineWidth=1; ctx.stroke();
        }
        break;
      case 'token':
        const t_items=[{n:'Role',pct:.6,c:colors.info[400]},{n:'Inst',pct:.84,c:colors.secondary[500]},{n:'Constr',pct:1.16,c:colors.danger[500]},{n:'Context',pct:.9,c:colors.primary[500]},{n:'FewShot',pct:.94,c:colors.success[400]},{n:'Output',pct:.67,c:colors.info[300]},{n:'History',pct:1.12,c:colors.warning[500]}];
        const tbh=18, tgap=7, tstartY=12; const tmaxW=W-100;
        t_items.forEach((it, i) => {
          const y = tstartY + i*(tbh+tgap);
          const fillW = Math.min(it.pct, 1)*tmaxW;
          const over = it.pct>1;
          ctx.beginPath(); 
          // @ts-ignore
          if (ctx.roundRect) ctx.roundRect(65, y, tmaxW, tbh, 3); else ctx.rect(65, y, tmaxW, tbh);
          ctx.fillStyle='rgba(255,255,255,.04)'; ctx.fill();
          gw(it.c, over?10:4); ctx.beginPath(); 
          // @ts-ignore
          if (ctx.roundRect) ctx.roundRect(65, y, fillW*(1+.05*Math.sin(t*1.5+i)), tbh, 3); else ctx.rect(65, y, fillW*(1+.05*Math.sin(t*1.5+i)), tbh);
          ctx.fillStyle=over?hexToRgba(colors.danger[500], 0.5):it.c+'40'; ctx.fill(); ctx.strokeStyle=over?colors.danger[500]:it.c; ctx.lineWidth=1; ctx.stroke(); ng();
        });
        break;
      default:
        const def_cx=W/2, def_cy=H/2;
        ctx.beginPath(); ctx.arc(def_cx, def_cy, 20 + 5*Math.sin(t*2), 0, P2);
        ctx.strokeStyle='rgba(0,240,255,.4)'; ctx.lineWidth=2; ctx.stroke();
    }
  };

  // REPL Actions
  const handleReplCommand = (cmd: string) => {
    if (!cmd.trim()) return;
    setReplInput('');
    if (cmd === 'clear') {
      setReplOutput(['已清空。\n──────────────────────────────']);
      setActiveNodes([]);
      return;
    }
    
    const parts = cmd.split(' ');
    const main = parts[0].toLowerCase();
    const args = parts.slice(1).join(' ');

    const commands: any = {
      p1: (a: string) => `[P1 · 角色声明句]\n你是一位资深${a || '软件工程师'}，专注于高质量系统设计，\n将以架构视角审查问题并给出可执行中的专业建议。\n─ Token估算: ~28 tokens ─`,
      p2: (a: string) => `[P2 · 思维链触发]\n${a ? `问题：${a}` : ''} 让我们一步步思考：\n  步骤 1: 分析问题的核心要素...\n  步骤 2: 识别关键约束条件...\n  步骤 3: 推导可行方案...\n  步骤 4: 验证结论与前提是否一致...\n─ Token估算: +15 tokens ─`,
      p3: () => `[P3 · 人格叠加模板]\n## Persona Stack\n🌟 创造者: 积极寻找机会，挖掘方案优势\n🔴 批评者: 严格审查风险，找出假设漏洞\n⚖️ 仲裁者: 中立综合两方，给出有条件建议\n输出格式：[创造者]→[批评者]→[仲裁者综合]\n─ Token估算: +120 tokens ─`,
      p4: (a: string) => `[P4 · 少样本框架（3-Shot）]\n## Few-Shot Examples\n\n示例1: 输入="简单案例" → 输出={"result":"A","confidence":0.9}\n示例2: 输入="复杂案例" → 输出={"result":"B","confidence":0.7,"note":"混合"}  \n示例3: 输入="边界情况" → 输出={"result":"N/A","confidence":0.5,"note":"无法判断"}\n\n${a ? `任务: ${a}` : '请分析下面的输入：'}\n输入: "{user_input}"\n输出:\n─ Token估算: +180 tokens ─`,
      p5: () => `[P5 · Token预算分析]\n## Token Budget (8192 窗口)\n├── Role(A)       300  ████░░░░ ✅\n├── Instruction(B) 500 ███████░ ✅\n├── Constraint(C)  250 ████░░░░ ✅\n├── Context(G)    2400 ███████████████░ ✅\n├── Few-Shot(P4)   900 ██████░░ ✅\n├── Output(D)      300 ████░░░░ ✅\n└── History        800 █████░░░ ✅\n总计: 5450 / 6144 可用 (留给响应: 2048)\n─ 预算状态: ✅ 健康 ─`,
      p6: () => `[P6 · 元反思协议]\n## Meta-Reflection（输出后执行）\nStep 1 [打分]: 我给这个回答打 ?/10 分\n  优点: ...  不足: ...\nStep 2 [批评]: 如果我是挑剔的专家，我会质疑：\n  1. [逻辑漏洞]  2. [遗漏信息]  3. [误导表述]\nStep 3 [条件修订]:\n  IF 评分 < 8 → 重写 → 再评分\n  IF 评分 ≥ 8 → 附置信度声明\n─ Token估算: +200 tokens ─`,
      p7: () => `[P7 · 锚点注入布局]\n⚓ [首锚 - 开头, 最高权重]\n  你是[角色]，核心约束：[约束]。\n  \n  [...... 提示体主体内容 ......]\n  \n🔗 [中锚 - 50%位置, 防漂移]\n  ─── ⚠️ 关键提醒：始终遵守[核心约束] ───\n  \n  [...... 输出格式定义 ......]\n  \n📍 [尾锚 - 紧邻输出, 次高权重]\n  确认：✓ [约束1] ✓ [约束2] ✓ [格式]\n  现在开始：\n─ Token估算: +90 tokens ─`,
      p8: (a: string) => `[P8 · 渐进揭示结构]\n## Progressive Disclosure: ${a || '目标概念'}\n\nL0 [5秒]: "[一句话核心定义，≤20字]"\n\nL1 [30秒]: 三个核心原理\n  1. [最重要原理]\n  2. [第二原理]\n  3. [第三原理]\n\nL2 [3分钟]: 完整解释 + 示例 + 类比\n  [详细展开...]\n\nL3 [专家]: 边界情况 + 反例 + 研究引用\n  (回复 L3 获取专家级深度)\n─ 用户可回复 L0/L1/L2/L3 ─`,
      p9: () => `[P9 · 自洽验证清单]\n## Self-Consistency Check（输出后）\n✅ 层1 事实自洽:\n  □ 所有数据来自上下文？(无虚构)\n  □ 引用的名称/API/版本是否存在？\n✅ 层2 逻辑自洽:\n  □ 每个结论有对应前提？\n  □ 无推理跳步？\n✅ 层3 约束自洽:\n  □ 字数在限制内？\n  □ 在领域白名单内？\n  □ 区分了确定/推断？\n结果: ✅ 全部通过 / ⚠️ 发现问题：[列表]\n─ Token估算: +150 tokens ─`
    };

    let resp = '';
    if (main.startsWith('compose')) {
      const pids = cmd.match(/p\d+/gi) || [];
      if (pids.length === 0) resp = '用法: compose p1 p2 p6';
      else {
        resp = `[COMPOSE: ${pids.join(' + ')}]\n${'─'.repeat(40)}\n`;
        pids.forEach(pid => {
          const fn = commands[pid.toLowerCase()];
          if (fn) resp += fn('') + '\n\n';
          else resp += `⚠️ 未知微模式: ${pid}\n`;
        });
        resp += `─ 总Token估算: ~${pids.length * 120} tokens ─`;
        setActiveNodes(pids.map(p => p.toLowerCase()));
      }
    } else if (commands[main]) {
      resp = commands[main](args);
      setActiveNodes([main]);
    } else {
      resp = `⚠️ 未知命令: "${cmd}"\n可用命令: p1~p9, compose [p1 p2...], clear`;
    }

    setReplOutput(prev => [...prev, `› ${cmd}\n${resp}\n──────────────────────────────`]);
    setTimeout(() => { if (replOutRef.current) replOutRef.current.scrollTop = replOutRef.current.scrollHeight; }, 10);
  };

  const toggleCheck = (idx: number, ckIdx: number) => {
    const newCk = { ...checks };
    if (!newCk[idx]) newCk[idx] = new Set();
    if (newCk[idx].has(ckIdx)) newCk[idx].delete(ckIdx);
    else newCk[idx].add(ckIdx);
    setChecks(newCk);

    if (newCk[idx].size === TICKETS[idx].checks.length) {
      setCompleted(prev => {
        const next = new Set(prev);
        next.add(idx);
        return next;
      });
      setStreak(s => s + 1);
    }
  };

  const sidebar = (
    <>
      <div className="p-8 border-b border-slate-100 bg-white/50 backdrop-blur-sm">
        <div className="flex justify-between items-center text-xs font-black tracking-widest text-slate-400 mb-3">
          <span>LEARNING STREAK</span>
          <span className="text-orange-500 font-black">🔥 {streak}</span>
        </div>
        <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500" style={{ width: `${(completed.size/TICKETS.length)*100}%` }} />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
        {TICKETS.map((t, i) => {
          const isActive = currentIdx === i;
          const isDone = completed.has(i);
          return (
            <button
              key={t.id}
              onClick={() => { setCurrentIdx(i); setIsFlipped(false); }}
              className={cn(
                "w-full flex items-start gap-4 p-4 text-left transition-all duration-300 rounded-2xl group",
                isActive 
                  ? "bg-slate-900 text-white shadow-xl shadow-cyan-950/20 scale-[1.02] border border-cyan-500/30" 
                  : "text-slate-500 hover:bg-white hover:text-slate-900 hover:shadow-md hover:shadow-slate-200/50 border border-transparent"
              )}
            >
              <div className={cn(
                "w-2.5 h-2.5 rounded-full mt-1.5 shrink-0 transition-all duration-500",
                isActive ? "bg-cyan-400 scale-125 shadow-[0_0_10px_rgba(34,211,238,0.5)]" : (isDone ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" : "bg-slate-300 group-hover:bg-slate-400")
              )} />
              <div className="min-w-0">
                <div className={cn("text-xs font-black tracking-[0.2em] mb-1 uppercase transition-colors", isActive ? "text-cyan-400" : "text-slate-500")}>{t.id}</div>
                <div className={cn("text-sm font-black leading-tight truncate transition-colors", isActive ? "text-white" : "text-slate-800")}>{t.title}</div>
                <div className={cn("text-xs mt-2 font-bold uppercase tracking-widest transition-colors", isActive ? "text-cyan-300/60" : "text-slate-500")}>{t.phase.split('·')[1]}</div>
              </div>
            </button>
          );
        })}
      </div>
    </>
  );

  return (
    <>
      <SplitViewLayout
      header={
        <PageHeader
          title="上下文工程"
          subtitle="提示工程 · 结构化认知 · 逻辑底座"
          description="掌握 9 种元提示体微模式与 17 维度设计闭环。通过精确的上下文注入与结构化推理，释放 LLM 的极致潜力。"
          icon="⚙️"
          gradient="from-cyan-400 to-blue-600"
          badgeText="Prompt Engineering · Meta-Patterns"
          stats={[
            { label: "核心微模式", value: "9", icon: "🧩" },
            { label: "设计维度", value: "17", icon: "📐" },
            { label: "掌握进度", value: `${completed.size}/${TICKETS.length}`, icon: "📈" },
          ]}
        />
      }
      sidebar={sidebar}
      footer={
        <PageFooter 
          title="Context Engineering Systems"
          description="构建高可靠的提示工程资产，让 AI 协作进入工程化时代。"
          icon="⚙️"
          tags={["Context Injection", "Meta-Prompting", "Token Efficiency", "System Consistency"]}
          gradient="from-cyan-400 to-blue-600"
        />
      }
      isSidebarOpen={isSidebarOpen}
      onToggleSidebar={setIsSidebarOpen}
      mainRef={mainContentRef}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentTicket.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="space-y-16"
        >
          {/* Lesson Hero */}
          <div className="relative p-10 rounded-3xl border border-slate-100 overflow-hidden shadow-xl bg-white group">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-slate-50 rounded-full -mr-24 -mt-24 blur-3xl opacity-50 pointer-events-none group-hover:scale-110 transition-transform duration-700" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-xs font-bold tracking-widest uppercase mb-4 text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                {currentTicket.phase}
              </div>
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="text-xs font-bold tracking-widest uppercase text-cyan-600 mb-2">{currentTicket.id} · {currentTicket.icon}</div>
                  <h1 className="text-4xl font-black text-slate-900 leading-tight mb-3 tracking-tight">{currentTicket.title}</h1>
                  <p className="text-lg font-bold text-slate-400 leading-relaxed max-w-2xl">{currentTicket.tag}</p>
                </div>
                <div className="w-20 h-20 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-5xl shadow-inner shrink-0 rotate-3 group-hover:rotate-0 transition-transform">
                  {currentTicket.icon}
                </div>
              </div>
            </div>
          </div>

          {/* Concept & Callouts */}
          <section>
            <SectionHeader title="理论模型" badge="Theoretical Model" />
            <div className="bg-slate-50/50 rounded-2xl p-10 border border-slate-100 shadow-inner">
              <div className="text-base md:text-lg text-slate-600 leading-relaxed font-medium space-y-4 knowledge-body" dangerouslySetInnerHTML={{ __html: currentTicket.concept }} />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
                {currentTicket.callouts?.map((co, i) => (
                  <div key={i} className={cn("p-6 rounded-xl border-2 flex flex-col gap-2 transition-all hover:translate-y-0.5 shadow-sm", 
                    co.t === 'b' ? "bg-blue-50/50 border-blue-100 text-blue-900" :
                    co.t === 'g' ? "bg-emerald-50/50 border-emerald-100 text-emerald-900" :
                    co.t === 'o' ? "bg-amber-50/50 border-amber-100 text-amber-900" :
                    co.t === 'p' ? "bg-violet-50/50 border-violet-100 text-violet-900" :
                    "bg-rose-50/50 border-rose-100 text-rose-900"
                  )}>
                    <div className="text-xs font-bold uppercase tracking-widest opacity-40">{co.i}</div>
                    <div className="font-bold text-sm leading-snug">{co.s}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Visualizer */}
          <section>
            <SectionHeader title="范式可视化" badge="Dynamic Visualization" />
            <div className="bg-slate-900 border border-white/5 rounded-2xl overflow-hidden relative shadow-2xl group">
              <div className="absolute top-4 left-6 flex items-center gap-3 z-10">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-rose-500 shadow-[0_0_6px_rgba(244,63,94,0.4)]"></div>
                  <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.4)]"></div>
                </div>
                <span className="text-xs font-bold text-white/20 uppercase tracking-[0.3em]">System Visualizer v4.0</span>
              </div>
              <canvas ref={canvasRef} width="800" height="240" className="w-full block" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent pointer-events-none" />
            </div>
          </section>

          {/* Interactive REPL / Sandbox */}
          <section>
            <SectionHeader title="原子实验沙盒" badge="Interactive REPL" />
            <div className="bg-slate-900 border border-white/5 rounded-2xl overflow-hidden shadow-2xl flex flex-col">
              <div className="px-6 py-4 bg-slate-950/40 border-b border-white/5 flex justify-between items-center backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <span className="bg-cyan-500/10 text-cyan-400 text-xs font-bold px-2.5 py-0.5 rounded-md uppercase tracking-widest border border-cyan-500/20">
                    TERMINAL
                  </span>
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-white/5 text-white/30 uppercase tracking-widest border border-white/5">
                    REPL MODE
                  </span>
                </div>
                <div className="text-xs font-bold text-white/10 tracking-widest uppercase">
                  Connected
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-white/5 bg-slate-950/20 border-b border-white/5">
                {/* Left Column: Active Memory Folder Tree */}
                <div className="w-full md:w-64 p-6 overflow-y-auto font-mono text-xs text-white/60 selection:bg-cyan-500/30 border-r border-white/5 max-h-[300px]">
                  <div className="flex items-center gap-2 mb-4 text-cyan-400 font-bold uppercase tracking-wider text-xs">
                    <span>📁 ACTIVE CONTEXT TREE</span>
                  </div>
                  <div className="space-y-2 select-none">
                    <div className="flex items-center gap-1.5 text-white/80 font-bold">
                      <span>📂</span>
                      <span>active_prompt/</span>
                    </div>
                    <div className="pl-3 space-y-2 border-l border-white/10 ml-2">
                      {contextTree.map((dir, i) => {
                        const isDirActive = dir.files.some(f => activeNodes.includes(f.id));
                        return (
                          <div key={i} className="space-y-1.5">
                            <div className={cn("flex items-center gap-1.5 transition-colors", isDirActive ? "text-cyan-300 font-bold" : "text-white/40")}>
                              <span>{isDirActive ? "📂" : "📁"}</span>
                              <span>{dir.dir}/</span>
                            </div>
                            <div className="pl-4 space-y-1 border-l border-white/5 ml-1.5">
                              {dir.files.map((file, j) => {
                                const isFileActive = activeNodes.includes(file.id);
                                return (
                                  <button
                                    key={j}
                                    onClick={() => handleTreeNodeClick(file.id)}
                                    className={cn("w-full text-left flex items-center justify-between py-1 px-2 rounded transition-colors group cursor-pointer", 
                                      isFileActive ? "text-cyan-400 font-bold bg-white/5" : "text-white/40 hover:text-white/70 hover:bg-white/5"
                                    )}
                                  >
                                    <span className="flex items-center gap-1.5 truncate">
                                      <span>{isFileActive ? "🟢" : "📄"}</span>
                                      <span className="truncate">{file.name}</span>
                                    </span>
                                    {isFileActive && (
                                      <span className="text-xs font-black tracking-widest leading-none bg-cyan-500/20 text-cyan-300 px-1 py-0.5 rounded border border-cyan-500/30">LIVE</span>
                                    )}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Right Column: Terminal Screen */}
                <div 
                  ref={replOutRef}
                  className="flex-1 p-6 font-mono text-xs leading-relaxed text-cyan-50/60 h-[300px] overflow-y-auto whitespace-pre-wrap selection:bg-cyan-500/30 scroll-smooth"
                >
                  {replOutput.join('\n')}
                </div>
              </div>

              <div className="px-6 py-4 bg-slate-950/60 border-t border-white/5 flex items-center gap-4">
                <span className="text-cyan-500 font-bold text-base">›</span>
                <input
                  type="text"
                  value={replInput}
                  onChange={(e) => setReplInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleReplCommand(replInput)}
                  className="flex-1 bg-transparent border-none outline-none text-cyan-400 font-mono text-base placeholder:text-white/5"
                  placeholder="输入模式指令 (如: p1, p2, clear)..."
                  aria-label="模式指令输入"
                  spellCheck={false}
                />
                <button
                  onClick={() => handleReplCommand(replInput)}
                  className="bg-cyan-600 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-lg hover:bg-cyan-500 transition-all shadow-lg shadow-cyan-900/20"
                >
                  Execute
                </button>
              </div>
            </div>
          </section>

          {/* Composed Prompt Preview Section */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <SectionHeader title="拼装提示词预览" badge="Composed Prompt" className="mb-0" />
              <div className="flex items-center gap-3">
                <button
                  onClick={exportMarkdown}
                  disabled={activeNodes.length === 0}
                  className="px-4 py-2 bg-emerald-600 disabled:opacity-40 text-white rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-emerald-500 transition-all active:scale-95 shadow-lg shadow-emerald-950/20"
                >
                  📥 导出 Markdown
                </button>
                <div className="px-3 py-1.5 bg-slate-800 border border-white/5 rounded-lg text-xs font-mono text-cyan-400 font-bold">
                  Estimated Tokens: {estimatedTokens}
                </div>
              </div>
            </div>

            <div className="bg-slate-900 border border-white/5 rounded-3xl p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 rounded-full -mr-24 -mt-24 blur-2xl" />
              <div className="relative z-10 space-y-4">
                <div className="p-8 bg-slate-950 rounded-2xl border border-white/5 shadow-inner max-h-[400px] overflow-y-auto">
                  <pre className="text-cyan-100/90 font-mono text-xs md:text-sm leading-relaxed whitespace-pre-wrap selection:bg-cyan-500/30">
                    {composedPromptText}
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* Checklist */}
          <section>
            <SectionHeader title="掌握清单" badge="Mastery Checklist" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {currentTicket.checks.map((ck, i) => (
                <button
                  key={i}
                  role="checkbox"
                  aria-checked={checks[currentIdx]?.has(i) || false}
                  onClick={() => toggleCheck(currentIdx, i)}
                  className={cn("p-5 rounded-xl border-2 text-left flex items-start gap-4 transition-all group", 
                    checks[currentIdx]?.has(i) 
                      ? "bg-emerald-50 border-emerald-500 text-emerald-900" 
                      : "bg-white border-slate-100 text-slate-600 hover:border-cyan-500 hover:bg-cyan-50/30"
                  )}
                >
                  <div className={cn("w-5 h-5 rounded-md border-2 mt-0.5 shrink-0 flex items-center justify-center transition-all", 
                    checks[currentIdx]?.has(i) ? "bg-emerald-500 border-emerald-500 text-white" : "border-slate-200 group-hover:border-cyan-500"
                  )}>
                    {checks[currentIdx]?.has(i) && <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                  </div>
                  <span className="font-bold text-sm leading-snug">{ck}</span>
                </button>
              ))}
            </div>
          </section>

          {/* Prompt Body / Flip Card */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <SectionHeader title="提示词本体" badge="System Prompt" className="mb-0" />
              <button
                onClick={() => setIsFlipped(!isFlipped)}
                className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-slate-800 transition-all active:scale-95 shadow-lg shadow-slate-900/10"
              >
                {isFlipped ? '显示源码 View Source' : '预览效果 View Result'}
              </button>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-slate-50 rounded-full -mr-24 -mt-24 opacity-50" />
              <div className="relative z-10">
                <AnimatePresence mode="wait">
                  {!isFlipped ? (
                    <motion.div
                      key="source"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-4"
                    >
                      <div className="p-8 bg-slate-900 rounded-2xl border border-white/5 shadow-inner">
                        <pre className="text-blue-100/80 font-mono text-xs md:text-sm leading-relaxed whitespace-pre-wrap selection:bg-cyan-500/30">
                          {currentTicket.code}
                        </pre>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="result"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="bg-slate-50 p-8 rounded-2xl border-2 border-dashed border-slate-200"
                    >
                      <div className="flex flex-col gap-4 text-slate-500">
                        <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-xl shadow-sm">✨</div>
                        <p className="text-lg font-medium leading-relaxed italic opacity-80">
                          "基于上述架构，LLM 现在将表现出显著增强的推理自洽性与多维度约束遵守能力..."
                        </p>
                        <div className="h-px bg-slate-200 w-16" />
                        <div className="text-xs font-bold uppercase tracking-widest opacity-30">End of Preview</div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </section>

          {/* Footer Navigation */}
          <div className="pt-8 border-t border-slate-100 flex justify-between items-center pb-24 lg:pb-8">
            <button
              disabled={currentIdx === 0}
              onClick={() => { setCurrentIdx(currentIdx - 1); setIsFlipped(false); }}
              className="text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-xl border-2 border-slate-100 text-slate-400 hover:text-slate-600 hover:bg-slate-50 disabled:opacity-30 transition-all flex items-center gap-2"
            >
              ← Previous
            </button>
            <div className="px-4 py-2 rounded-full bg-slate-100 text-xs font-bold text-slate-500 uppercase tracking-widest border border-slate-200">
              Pattern {currentIdx + 1} of {TICKETS.length}
            </div>
            <button
              disabled={currentIdx === TICKETS.length - 1}
              onClick={() => { setCurrentIdx(currentIdx + 1); setIsFlipped(false); }}
              className="text-xs font-bold uppercase tracking-widest px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:opacity-90 shadow-lg shadow-cyan-500/20 disabled:opacity-30 transition-all flex items-center gap-2"
            >
              Next →
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
      </SplitViewLayout>
    </>
  );
};

export default ContextEngineeringPage;
