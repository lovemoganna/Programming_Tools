import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FlowWiki.css';
import * as Pages from './components';
import { DesignTokens } from '../../theme/design-tokens';
import { PageHeader } from "../../components/PageHeader";
import { PageFooter } from "../../components/PageFooter";
import { cn } from "../../utils/cn";
import { SplitViewLayout } from "../../components/SplitViewLayout";

const FlowWikiPage: React.FC = () => {
  const [activePage, setActivePage] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const isMountedRef = useRef(true);

  // Track component mounted status
  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  const showPage = (id: string) => {
    setActivePage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleSidebar = (open: boolean) => setIsSidebarOpen(open);

  // Handle Deep Linking via Hash
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('id=')) {
        const id = hash.replace('id=', '');
        // Check if id is valid in navItems
        const allItemIds = navItems.flatMap(n => n.items.map(i => i.id));
        if (allItemIds.includes(id)) {
          setActivePage(id);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isMountedRef.current) return;
      if (activePage === 'mece') {
        drawTimeline();
      }
      if (activePage === 'overview' || activePage === 'vol2-system') {
        drawComplexityLadder();
      }
    }, 100);

    const handleResize = () => {
      if (activePage === 'mece') {
        drawTimeline();
      }
      if (activePage === 'overview' || activePage === 'vol2-system') {
        drawComplexityLadder();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, [activePage]);

  const drawTimeline = () => {
    const canvas = document.getElementById('timelineCanvas') as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const logicalW = 760;
    const logicalH = 120;

    canvas.width = logicalW * dpr;
    canvas.height = logicalH * dpr;

    ctx.scale(dpr, dpr);

    const W = logicalW, H = logicalH;
    const colors = DesignTokens.colors;

    ctx.clearRect(0, 0, W, H);

    const phases = [
      { label: '准备', sub: 'Ontology\nWishful', start: 0, end: 0.12, color: colors.primary[600] },
      { label: '启动', sub: '第一个动作', start: 0.12, end: 0.18, color: colors.secondary[600] },
      { label: '执行循环', sub: 'Single Thread\n+ Feedback', start: 0.18, end: 0.78, color: colors.info[600] },
      { label: '阻塞解决', sub: 'Lazy Eval', start: 0.35, end: 0.45, color: colors.success[600], row: 1 },
      { label: '收尾', sub: '完成声明\n队列处理', start: 0.78, end: 1.0, color: colors.warning[600] },
    ];

    const pad = 20;
    const rowH = 34;
    const yBase = 20;

    const roundRect = (ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) => {
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.lineTo(x + w - r, y);
      ctx.quadraticCurveTo(x + w, y, x + w, y + r);
      ctx.lineTo(x + w, y + h - r);
      ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
      ctx.lineTo(x + r, y + h);
      ctx.quadraticCurveTo(x, y + h, x, y + h - r);
      ctx.lineTo(x, y + r);
      ctx.quadraticCurveTo(x, y, x + r, y);
      ctx.closePath();
    };

    phases.forEach(p => {
      const y = yBase + (p.row || 0) * (rowH + 8);
      const x1 = pad + p.start * (W - 2 * pad);
      const x2 = pad + p.end * (W - 2 * pad);
      const w = x2 - x1;

      ctx.fillStyle = p.color;
      ctx.globalAlpha = 0.9;
      roundRect(ctx, x1, y, w, rowH, 5);
      ctx.fill();
      ctx.globalAlpha = 1;

      ctx.fillStyle = colors.neutral[50];
      ctx.font = 'bold 11px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      if (w > 50) {
        ctx.fillText(p.label, x1 + w / 2, y + rowH / 2);
      }
    });

    ctx.strokeStyle = colors.neutral[200];
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(pad, H - 20);
    ctx.lineTo(W - pad, H - 20);
    ctx.stroke();

    ['0', '25m', '50m', '75m', '90m'].forEach((t, i) => {
      const x = pad + (i / 4) * (W - 2 * pad);
      ctx.fillStyle = colors.neutral[400];
      ctx.font = '10px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(t, x, H - 6);
      ctx.beginPath();
      ctx.moveTo(x, H - 22);
      ctx.lineTo(x, H - 18);
      ctx.stroke();
    });
  };

  const drawComplexityLadder = () => {
    const canvas = document.getElementById('complexityCanvas') as HTMLCanvasElement || document.getElementById('complexityCanvasVol2') as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const logicalW = 760;
    const logicalH = 230;

    canvas.width = logicalW * dpr;
    canvas.height = logicalH * dpr;

    ctx.scale(dpr, dpr);

    const W = logicalW, H = logicalH;
    const colors = DesignTokens.colors;
    ctx.clearRect(0, 0, W, H);

    const levels = [
      { label: 'A 系列 5 原子', count: 5, color: colors.primary[600], y: 20 },
      { label: 'B 系列 5 原子', count: 5, color: colors.secondary[600], y: 60 },
      { label: 'A×B 跨卷双元', count: 25, color: colors.info[600], y: 100 },
      { label: 'A+B 三元组合', count: 120, color: colors.success[600], y: 140 },
      { label: '双卷融合系统', count: 1, color: colors.warning[600], y: 180 },
    ];

    const roundRect = (ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) => {
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.lineTo(x + w - r, y);
      ctx.quadraticCurveTo(x + w, y, x + w, y + r);
      ctx.lineTo(x + w, y + h - r);
      ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
      ctx.lineTo(x + r, y + h);
      ctx.quadraticCurveTo(x, y + h, x, y + h - r);
      ctx.lineTo(x, y + r);
      ctx.quadraticCurveTo(x, y, x + r, y);
      ctx.closePath();
    };

    levels.forEach(l => {
      const barW = Math.min((Math.log10(l.count + 1) / 2.2) * (W - 160), W - 160);
      ctx.fillStyle = l.color;
      ctx.globalAlpha = 0.85;
      roundRect(ctx, 130, l.y, barW, 28, 4);
      ctx.fill();
      ctx.globalAlpha = 1;

      ctx.fillStyle = colors.neutral[700];
      ctx.font = '12px sans-serif';
      ctx.textAlign = 'right';
      ctx.textBaseline = 'middle';
      ctx.fillText(l.label, 124, l.y + 14);

      ctx.fillStyle = colors.neutral[50];
      ctx.font = 'bold 11px sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(l.count === 1 ? '完整涌现' : l.count + ' 种', 138, l.y + 14);
    });
  };

  const navItems = [
    { section: '导论', items: [
      { id: 'home', label: '🏠 Wiki 首页', badge: 'START', badgeClass: 'badge-start' },
      { id: 'overview', label: '🗺️ 全局概览' },
      { id: 'mece', label: '📊 MECE 结构图' },
    ]},
    { section: '原子组件', items: [
      { id: 'atom-ontology', label: '🧩 A1 · Ontology 本体' },
      { id: 'atom-wishful', label: '✨ A2 · Wishful Thinking' },
      { id: 'atom-lazy', label: '⏳ A3 · Lazy Evaluation' },
      { id: 'atom-feedback', label: '🔄 A4 · Feedback Loop' },
      { id: 'atom-singlethread', label: '🧵 A5 · Single Thread' },
    ]},
    { section: '组合模式', items: [
      { id: 'combo-2', label: '🔗 L2 · 双元组合' },
      { id: 'combo-3', label: '🔗 L3 · 三元组合' },
      { id: 'combo-full', label: '🌊 L5 · 完整系统', badge: 'BOSS', badgeClass: 'badge-boss' },
    ]},
    { section: '应用场景', items: [
      { id: 'scene-write', label: '✍️ 场景：写作心流' },
      { id: 'scene-code', label: '💻 场景：编程心流' },
      { id: 'scene-decide', label: '⚡ 场景：模糊决策' },
    ]},
    { section: '参考', items: [
      { id: 'sop', label: '📋 标准 SOP 速查' },
      { id: 'antipattern', label: '🚫 反模式手册' },
      { id: 'toon-log', label: '📊 TOON 项目日志' },
    ]},
    { section: '第二卷 · 深层原子', items: [
      { id: 'b1-completion-state', label: '🎯 B1 · 完成态设计' },
      { id: 'b2-interrupt-queue', label: '📥 B2 · 中断队列' },
      { id: 'b3-time-fence', label: '⏳ B3 · 时间围栏' },
      { id: 'b4-context-anchor', label: '⚓ B4 · 上下文锚点' },
      { id: 'b5-minimum-viable-action', label: '🛠️ B5 · 最小可行动作' },
    ]},
    { section: '第二卷 · 深层组合', items: [
      { id: 'vol2-combo-ab', label: '🔗 跨卷双元组合' },
      { id: 'vol2-combo-triple', label: '🔗 深层三元组合' },
      { id: 'vol2-system', label: '🌊 双卷融合系统', badge: 'V2', badgeClass: 'badge-v2' },
    ]},
    { section: '第二卷 · 深层场景', items: [
      { id: 'scene-research', label: '🔍 场景：研究综述' },
      { id: 'scene-meeting', label: '🤝 场景：会议准备' },
      { id: 'scene-stuck', label: '🧱 场景：彻底卡住了' },
    ]},
    { section: '第二卷 · 元认知层', items: [
      { id: 'meta-energy', label: '🔋 能量管理与心流' },
      { id: 'meta-calibration', label: '⚙️ 系统校准手册' },
      { id: 'toon-log2', label: '📊 TOON 日志 Vol.2' },
    ]}
  ];

  const PageComponent = () => {
    switch (activePage) {
      case 'home': return <Pages.PageHome onNavigate={showPage} />;
      case 'overview': return <Pages.PageOverview onNavigate={showPage} />;
      case 'mece': return <Pages.PageMece onNavigate={showPage} />;
      case 'atom-ontology': return <Pages.PageAtomOntology onNavigate={showPage} />;
      case 'atom-wishful': return <Pages.PageAtomWishful onNavigate={showPage} />;
      case 'atom-lazy': return <Pages.PageAtomLazy onNavigate={showPage} />;
      case 'atom-feedback': return <Pages.PageAtomFeedback onNavigate={showPage} />;
      case 'atom-singlethread': return <Pages.PageAtomSingleThread onNavigate={showPage} />;
      case 'combo-2': return <Pages.PageCombo2 onNavigate={showPage} />;
      case 'combo-3': return <Pages.PageCombo3 onNavigate={showPage} />;
      case 'combo-full': return <Pages.PageComboFull onNavigate={showPage} />;
      case 'scene-write': return <Pages.PageSceneWrite onNavigate={showPage} />;
      case 'scene-code': return <Pages.PageSceneCode onNavigate={showPage} />;
      case 'scene-decide': return <Pages.PageSceneDecide onNavigate={showPage} />;
      case 'sop': return <Pages.PageSop onNavigate={showPage} />;
      case 'antipattern': return <Pages.PageAntipattern onNavigate={showPage} />;
      case 'toon-log': return <Pages.PageToonLog onNavigate={showPage} />;
      case 'b1-completion-state': return <Pages.PageB1CompletionState onNavigate={showPage} />;
      case 'b2-interrupt-queue': return <Pages.PageB2InterruptQueue onNavigate={showPage} />;
      case 'b3-time-fence': return <Pages.PageB3TimeFence onNavigate={showPage} />;
      case 'b4-context-anchor': return <Pages.PageB4ContextAnchor onNavigate={showPage} />;
      case 'b5-minimum-viable-action': return <Pages.PageB5MinimumViableAction onNavigate={showPage} />;
      case 'vol2-combo-ab': return <Pages.PageVol2ComboAb onNavigate={showPage} />;
      case 'vol2-combo-triple': return <Pages.PageVol2ComboTriple onNavigate={showPage} />;
      case 'vol2-system': return <Pages.PageVol2System onNavigate={showPage} />;
      case 'scene-research': return <Pages.PageSceneResearch onNavigate={showPage} />;
      case 'scene-meeting': return <Pages.PageSceneMeeting onNavigate={showPage} />;
      case 'scene-stuck': return <Pages.PageSceneStuck onNavigate={showPage} />;
      case 'meta-energy': return <Pages.PageMetaEnergy onNavigate={showPage} />;
      case 'meta-calibration': return <Pages.PageMetaCalibration onNavigate={showPage} />;
      case 'toon-log2': return <Pages.PageToonLog2 onNavigate={showPage} />;
      default: return <Pages.PageHome onNavigate={showPage} />;
    }
  };

  const sidebar = (
    <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1 sidebar-scroll-area">
      {navItems.map((section, idx) => (
        <React.Fragment key={idx}>
          <div className="px-6 py-4 text-xs font-black uppercase tracking-[0.2em] text-slate-500 nav-section-title">
            {section.section}
          </div>
          {section.items.map(item => (
            <a
              key={item.id}
              className={cn(
                "group flex items-center gap-4 px-6 py-3.5 cursor-pointer transition-all duration-300 rounded-2xl nav-item",
                activePage === item.id 
                  ? "bg-slate-900 text-white shadow-xl shadow-cyan-950/20 active scale-[1.02] border border-cyan-500/20" 
                  : "text-slate-500 hover:bg-white hover:text-slate-900 hover:shadow-md hover:shadow-slate-200/50 border border-transparent"
              )}
              onClick={(e) => { e.preventDefault(); showPage(item.id); }}
              href="#"
            >
              <div className="min-w-0 flex-1 flex items-center justify-between">
                <div className={cn("text-sm font-black leading-tight truncate transition-colors", activePage === item.id ? "text-white" : "text-slate-800")}>
                  {item.label}
                </div>
                {item.badge && (
                  <span className={cn("text-xs font-black px-2 py-0.5 rounded-full uppercase tracking-tighter nav-badge transition-all", item.badgeClass, activePage === item.id ? "scale-110" : "")}>
                    {item.badge}
                  </span>
                )}
              </div>
            </a>
          ))}
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <>
      <SplitViewLayout
      className="flow-wiki-container"
      header={
        <PageHeader
          title="心流触发 Wiki"
          subtitle="Wishful Thinking × Ontology"
          description="掌握心流触发的核心方法论。通过本体定义、愿望思考与延迟决策，构建高效的个人生产力系统。"
          icon="🌊"
          gradient="from-cyan-500 to-blue-600"
          badgeText="Methodology Wiki · System v2.0"
          stats={[
            { label: "原子组件", value: "10", icon: "🧩" },
            { label: "应用场景", value: "6", icon: "🏹" },
            { label: "方法论卷次", value: "2", icon: "📚" },
          ]}
        />
      }
      sidebar={sidebar}
      footer={
        <PageFooter 
          title="Flow Wiki Systems"
          description="构建心流的底层逻辑，让行动与理想深度契合。"
          icon="🌊"
          tags={["Ontology", "Wishful Thinking", "Lazy Evaluation", "Single Thread"]}
          gradient="from-cyan-500 to-blue-600"
        />
      }
      isSidebarOpen={isSidebarOpen}
      onToggleSidebar={toggleSidebar}
      sidebarPosition="right"
      mainClassName="wiki-main-wrapper"
    >
      <div className="main-content serif-reading">
        <PageComponent />
      </div>
      </SplitViewLayout>
    </>
  );
};

export default FlowWikiPage;
