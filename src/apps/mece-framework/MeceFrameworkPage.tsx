import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { categories, Framework, meceMatrix, qualityPrinciples } from "./data/frameworks";
import { PageHeader } from "../../components/PageHeader";
import { PageFooter } from "../../components/PageFooter";
import { SectionHeader, MetaTag } from "../../components/SectionHeader";
import { CopyButton } from "../../components/CopyButton";
import { cn } from "../../utils/cn";
import { SplitViewLayout } from "../../components/SplitViewLayout";

export default function MeceFrameworkPage() {
  const [customFrameworks, setCustomFrameworks] = useState<Framework[]>([]);
  const [selectedFramework, setSelectedFramework] = useState<Framework>(categories[0].frameworks[0]);
  const [formData, setState] = useState<Record<string, string>>({});
  const [isGenerated, setIsGenerated] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Custom creator states
  const [isCreating, setIsCreating] = useState(false);
  const [creatorFw, setCreatorFw] = useState<Omit<Framework, 'id'>>({
    name: '',
    nameEn: '',
    tagline: '',
    scene: '',
    color: 'emerald',
    gradient: 'from-emerald-500 to-teal-600',
    icon: '🛠️',
    blocks: [
      { key: 'part1', label: '模块一 Label', description: '此模块用于描述...', placeholder: '请输入...', required: true }
    ],
    example: { part1: '示例输入内容' },
    tips: ['保证内容相互独立', '确保逻辑完全穷尽']
  });

  // Load custom frameworks from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("mece_custom_frameworks");
    if (saved) {
      try {
        setCustomFrameworks(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to load custom frameworks", e);
      }
    }
  }, []);

  const allCategories = useMemo(() => {
    const list = [...categories];
    if (customFrameworks.length > 0) {
      list.push({
        id: "custom",
        label: "自定义框架",
        icon: "🛠️",
        color: "emerald",
        frameworks: customFrameworks
      });
    }
    return list;
  }, [customFrameworks]);

  const flatFrameworks = useMemo(() => allCategories.flatMap(cat => cat.frameworks), [allCategories]);

  // Sync selectedFramework if deleted or loaded
  useEffect(() => {
    if (flatFrameworks.length > 0 && !flatFrameworks.some(f => f.id === selectedFramework.id)) {
      setSelectedFramework(flatFrameworks[0]);
    }
  }, [flatFrameworks, selectedFramework]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
      if (isCreating) return;

      const activeEl = document.activeElement;
      const isInputFocused = activeEl && (
        activeEl.tagName === 'INPUT' || 
        activeEl.tagName === 'TEXTAREA' || 
        activeEl.getAttribute('contenteditable') === 'true'
      );
      if (isInputFocused) return;

      e.preventDefault();
      const currentIdx = flatFrameworks.findIndex(f => f.id === selectedFramework.id);
      if (currentIdx === -1) return;

      let nextIdx = currentIdx;
      if (e.key === "ArrowDown") {
        nextIdx = (currentIdx + 1) % flatFrameworks.length;
      } else if (e.key === "ArrowUp") {
        nextIdx = (currentIdx - 1 + flatFrameworks.length) % flatFrameworks.length;
      }

      const nextFw = flatFrameworks[nextIdx];
      setSelectedFramework(nextFw);
      setState({});
      setIsGenerated(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [flatFrameworks, selectedFramework, isCreating]);

  // Handle Deep Linking via Hash
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('id=')) {
        const id = hash.replace('id=', '');
        const allFw = categories.flatMap(c => c.frameworks).concat(customFrameworks);
        const target = allFw.find(f => f.id === id);
        if (target) {
          setSelectedFramework(target);
          setState({});
          setIsGenerated(false);
          setIsCreating(false);
          // Scroll to builder
          setTimeout(() => {
            const el = document.getElementById('builder');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 300);
        }
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, [customFrameworks]);

  const handleInputChange = (key: string, val: string) => {
    setState(prev => ({ ...prev, [key]: val }));
    setIsGenerated(false);
  };

  const generatedPrompt = useMemo(() => {
    if (!selectedFramework) return "";
    let p = `## Framework: ${selectedFramework.nameEn}\n\n`;
    selectedFramework.blocks.forEach(block => {
      const val = formData[block.key] || `{{${block.label}}}`;
      p += `### ${block.label}\n${val}\n\n`;
    });
    return p.trim();
  }, [selectedFramework, formData]);

  const saveCustomFramework = () => {
    if (!creatorFw.name.trim() || !creatorFw.nameEn.trim()) {
      alert("请输入框架名称与英文缩写！");
      return;
    }
    if (creatorFw.blocks.length === 0 || creatorFw.blocks.some(b => !b.key.trim() || !b.label.trim())) {
      alert("请确保每个模块的 Key 与 Label 都不为空！");
      return;
    }

    const newId = `custom-${Date.now()}`;
    const newFw: Framework = {
      ...creatorFw,
      id: newId,
    };

    const nextList = [...customFrameworks, newFw];
    setCustomFrameworks(nextList);
    localStorage.setItem("mece_custom_frameworks", JSON.stringify(nextList));
    setSelectedFramework(newFw);
    setState({});
    setIsGenerated(false);
    setIsCreating(false);
  };

  const deleteCustomFramework = (id: string) => {
    if (!window.confirm("确定要删除此自定义框架吗？")) return;
    const nextList = customFrameworks.filter(f => f.id !== id);
    setCustomFrameworks(nextList);
    localStorage.setItem("mece_custom_frameworks", JSON.stringify(nextList));
    if (selectedFramework.id === id) {
      setSelectedFramework(categories[0].frameworks[0]);
      setState({});
      setIsGenerated(false);
    }
  };

  const sidebar = (
    <div className="flex flex-col h-full">
      <div className="p-8 border-b border-slate-100 bg-white/50 backdrop-blur-sm">
        <div className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Framework Categories</div>
      </div>
      <div className="flex-1 overflow-y-auto py-6 px-4 space-y-6">
        {allCategories.map(cat => (
          <div key={cat.id}>
            <div className="px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-500 flex items-center gap-2">
              <span className="opacity-50">{cat.icon}</span> {cat.label}
            </div>
            <div className="mt-2 space-y-1">
              {cat.frameworks.map(f => (
                <button
                  key={f.id}
                  onClick={() => { setSelectedFramework(f); setState({}); setIsGenerated(false); setIsCreating(false); }}
                  className={cn(
                    "w-full text-left px-5 py-3.5 rounded-2xl transition-all duration-300 flex items-center gap-4 group",
                    !isCreating && selectedFramework.id === f.id 
                      ? "bg-slate-900 text-white shadow-xl shadow-cyan-950/20 scale-[1.02] border border-cyan-500/20" 
                      : "text-slate-500 hover:bg-white hover:text-slate-900 hover:shadow-md hover:shadow-slate-200/50 border border-transparent"
                  )}
                >
                  <span className="text-lg grayscale group-hover:grayscale-0 transition-all">{f.icon}</span>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-bold tracking-tight truncate">{f.name}</div>
                    <div className={cn("text-xs font-bold uppercase truncate transition-colors", !isCreating && selectedFramework.id === f.id ? "text-cyan-400" : "text-slate-500")}>{f.nameEn.split('·')[0]}</div>
                  </div>
                  {f.id.startsWith("custom-") && (
                    <button
                      onClick={(e) => { e.stopPropagation(); deleteCustomFramework(f.id); }}
                      className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-rose-500 px-2 transition-opacity"
                      title="删除框架"
                      aria-label="删除框架"
                    >
                      ✕
                    </button>
                  )}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-slate-100 bg-white/50 backdrop-blur-sm">
        <button
          onClick={() => setIsCreating(true)}
          className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-black uppercase tracking-widest transition-all active:scale-95 flex items-center justify-center gap-2"
        >
          <span>➕</span> 新建自定义框架
        </button>
      </div>
    </div>
  );

  return (
    <>
      <SplitViewLayout
      header={
        <PageHeader
          title="元提示"
          subtitle="提示工程 · 结构化认知 · 逻辑底座"
          description="基于 MECE 原则设计的结构化提示词体系。通过「相互独立、完全穷尽」的逻辑拆解，消除提示词的模糊性，构建高可靠、可复用的 AI 指令资产。"
          icon="🛠️"
          gradient="from-violet-500 to-cyan-500"
          badgeText="Meta-Prompting v4.0 · Structuring Intelligence"
          stats={[
            { label: "专业框架", value: `${flatFrameworks.length}+`, icon: "📐" },
            { label: "场景适配", value: "全领域", icon: "🎯" },
            { label: "提效幅度", value: "300%", icon: "⚡" },
          ]}
        />
      }
      sidebar={sidebar}
      footer={
        <PageFooter 
          title="Meta-Prompt Framework"
          description="基于 MECE 原则设计的提示词方法论体系。旨在通过结构化思维，更精准地释放大语言模型的能力。"
          icon="M"
          tags={["Role-Scene-Task", "AIDA Model", "Chain of Thought", "CRAFT Universal"]}
          gradient="from-violet-500 to-cyan-500"
        />
      }
      isSidebarOpen={isSidebarOpen}
      onToggleSidebar={setIsSidebarOpen}
    >
      <div className="space-y-16">
        {/* Quality Principles */}
        <section>
          <SectionHeader 
            title="提示词质量公理" 
            badge="Foundations" 
            description="在构建任何提示词之前，请确保遵循以下六大核心原则。" 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {qualityPrinciples.map((p, i) => (
              <motion.div 
                key={p.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="bg-white p-7 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group"
              >
                <div className={cn("w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-5 shadow-sm group-hover:scale-110 transition-transform", 
                  p.color === 'blue' ? "bg-blue-50 text-blue-600" :
                  p.color === 'rose' ? "bg-rose-50 text-rose-600" :
                  p.color === 'emerald' ? "bg-emerald-50 text-emerald-600" :
                  p.color === 'violet' ? "bg-violet-50 text-violet-600" :
                  p.color === 'amber' ? "bg-amber-50 text-amber-600" :
                  "bg-teal-50 text-teal-600"
                )}>
                  {p.icon}
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">{p.subtitle}</div>
                <h3 className="text-lg font-black text-slate-900 mb-2">{p.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Prompt Builder */}
        <section id="builder">
          <SectionHeader 
            title={isCreating ? "创建自定义架构" : "交互式生成器"} 
            badge={isCreating ? "Creator" : "Tooling"} 
            description={isCreating ? "定义一套全新的结构化元素，定制您独创的逻辑拆解框架。" : "选择合适的专业框架，填入核心要素，一键生成结构化的高质量提示词。"} 
          />
          
          <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-xl overflow-hidden flex flex-col">
            <div className="p-10 lg:p-12">
              <AnimatePresence mode="wait">
                {isCreating ? (
                  <motion.div
                    key="creator-form"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-8"
                  >
                    {/* Meta Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8 border-b border-slate-100">
                      <div className="space-y-2">
                        <label htmlFor="fw-name" className="text-xs font-bold text-slate-500 uppercase tracking-widest">框架中文名</label>
                        <input
                          id="fw-name"
                          type="text"
                          value={creatorFw.name}
                          onChange={(e) => setCreatorFw(prev => ({ ...prev, name: e.target.value }))}
                          placeholder="例: CRAFT 框架"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-slate-900 focus:bg-white transition-all font-semibold"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="fw-name-en" className="text-xs font-bold text-slate-500 uppercase tracking-widest">英文缩写（使用中点分隔）</label>
                        <input
                          id="fw-name-en"
                          type="text"
                          value={creatorFw.nameEn}
                          onChange={(e) => setCreatorFw(prev => ({ ...prev, nameEn: e.target.value }))}
                          placeholder="例: Context · Role · Action · Format"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-slate-900 focus:bg-white transition-all font-semibold"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="fw-tagline" className="text-xs font-bold text-slate-500 uppercase tracking-widest">一句话亮点 Tagline</label>
                        <input
                          id="fw-tagline"
                          type="text"
                          value={creatorFw.tagline}
                          onChange={(e) => setCreatorFw(prev => ({ ...prev, tagline: e.target.value }))}
                          placeholder="例: 上下文锚定 × 动作驱动"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-slate-900 focus:bg-white transition-all font-semibold"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="fw-scene" className="text-xs font-bold text-slate-500 uppercase tracking-widest">适用场景</label>
                        <input
                          id="fw-scene"
                          type="text"
                          value={creatorFw.scene}
                          onChange={(e) => setCreatorFw(prev => ({ ...prev, scene: e.target.value }))}
                          placeholder="例: 适合学术论文写作、通用指令提炼"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-slate-900 focus:bg-white transition-all font-semibold"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="fw-icon" className="text-xs font-bold text-slate-500 uppercase tracking-widest">图标 Emoji</label>
                        <input
                          id="fw-icon"
                          type="text"
                          value={creatorFw.icon}
                          onChange={(e) => setCreatorFw(prev => ({ ...prev, icon: e.target.value }))}
                          placeholder="例: 🧩"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-slate-900 focus:bg-white transition-all font-semibold"
                        />
                      </div>
                    </div>

                    {/* Blocks Fields */}
                    <div className="space-y-6">
                      <div className="flex justify-between items-center">
                        <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider">架构逻辑模块 Blocks</h3>
                        <button
                          onClick={() => setCreatorFw(prev => {
                            const key = `part${prev.blocks.length + 1}`;
                            return {
                              ...prev,
                              blocks: [...prev.blocks, { key, label: `新模块 Label`, description: '描述说明', placeholder: '占位符...', required: true }],
                              example: { ...prev.example, [key]: '' }
                            };
                          })}
                          className="px-4 py-2 border border-slate-200 hover:border-slate-900 rounded-xl text-xs font-bold uppercase tracking-widest transition-all"
                        >
                          ➕ 新增元素
                        </button>
                      </div>

                      <div className="space-y-4">
                        {creatorFw.blocks.map((block, idx) => (
                          <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col md:flex-row gap-4 items-start relative group">
                            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                              <div className="space-y-1">
                                <label htmlFor={`fw-block-${idx}-key`} className="text-xs font-bold text-slate-400 uppercase tracking-wider">Key (代码引用)</label>
                                <input
                                  id={`fw-block-${idx}-key`}
                                  type="text"
                                  value={block.key}
                                  onChange={(e) => setCreatorFw(prev => {
                                    const nextBlocks = [...prev.blocks];
                                    nextBlocks[idx] = { ...block, key: e.target.value };
                                    return { ...prev, blocks: nextBlocks };
                                  })}
                                  placeholder="e.g. role"
                                  className="w-full bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-xs outline-none focus:border-slate-900 font-mono"
                                />
                              </div>
                              <div className="space-y-1">
                                <label htmlFor={`fw-block-${idx}-label`} className="text-xs font-bold text-slate-400 uppercase tracking-wider">模块名称 Label</label>
                                <input
                                  id={`fw-block-${idx}-label`}
                                  type="text"
                                  value={block.label}
                                  onChange={(e) => setCreatorFw(prev => {
                                    const nextBlocks = [...prev.blocks];
                                    nextBlocks[idx] = { ...block, label: e.target.value };
                                    return { ...prev, blocks: nextBlocks };
                                  })}
                                  placeholder="e.g. 角色 Role"
                                  className="w-full bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-xs outline-none focus:border-slate-900"
                                />
                              </div>
                              <div className="space-y-1">
                                <label htmlFor={`fw-block-${idx}-desc`} className="text-xs font-bold text-slate-400 uppercase tracking-wider">设计引导 Description</label>
                                <input
                                  id={`fw-block-${idx}-desc`}
                                  type="text"
                                  value={block.description}
                                  onChange={(e) => setCreatorFw(prev => {
                                    const nextBlocks = [...prev.blocks];
                                    nextBlocks[idx] = { ...block, description: e.target.value };
                                    return { ...prev, blocks: nextBlocks };
                                  })}
                                  placeholder="引导用户填写的说明"
                                  className="w-full bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-xs outline-none focus:border-slate-900"
                                />
                              </div>
                              <div className="space-y-1">
                                <label htmlFor={`fw-block-${idx}-placeholder`} className="text-xs font-bold text-slate-400 uppercase tracking-wider">占位引导 Placeholder</label>
                                <input
                                  id={`fw-block-${idx}-placeholder`}
                                  type="text"
                                  value={block.placeholder}
                                  onChange={(e) => setCreatorFw(prev => {
                                    const nextBlocks = [...prev.blocks];
                                    nextBlocks[idx] = { ...block, placeholder: e.target.value };
                                    return { ...prev, blocks: nextBlocks };
                                  })}
                                  placeholder="例：赋予AI何种身份..."
                                  className="w-full bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-xs outline-none focus:border-slate-900"
                                />
                              </div>
                            </div>
                            <div className="flex items-center gap-3 self-center shrink-0">
                              <label className="flex items-center gap-1.5 text-xs font-bold text-slate-500 cursor-pointer">
                                <input
                                  type="checkbox"
                                  checked={block.required}
                                  onChange={(e) => setCreatorFw(prev => {
                                    const nextBlocks = [...prev.blocks];
                                    nextBlocks[idx] = { ...block, required: e.target.checked };
                                    return { ...prev, blocks: nextBlocks };
                                  })}
                                  className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                                />
                                必填
                              </label>
                              <button
                                onClick={() => setCreatorFw(prev => ({
                                  ...prev,
                                  blocks: prev.blocks.filter((_, bIdx) => bIdx !== idx)
                                }))}
                                className="text-slate-400 hover:text-rose-500 font-bold p-1 text-base transition-colors"
                                title="删除此模块"
                                aria-label="删除此模块"
                              >
                                ✕
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-8 flex gap-4 justify-end">
                      <button
                        onClick={() => setIsCreating(false)}
                        className="px-6 py-3 border border-slate-200 text-slate-500 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-slate-50 transition-all"
                      >
                        取消 Cancel
                      </button>
                      <button
                        onClick={saveCustomFramework}
                        className="px-8 py-3 bg-emerald-600 text-white rounded-xl font-black text-xs uppercase tracking-widest hover:bg-emerald-500 transition-all shadow-lg active:scale-95"
                      >
                        保存并启用 Save
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key={selectedFramework.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-100">
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="px-2 py-0.5 rounded-md text-xs font-bold uppercase tracking-widest bg-slate-100 text-slate-500">
                            {selectedFramework.id}
                          </span>
                          <span className={cn("px-2 py-0.5 rounded-md text-xs font-bold uppercase tracking-widest text-white shadow-sm", selectedFramework.gradient)}>
                            {selectedFramework.nameEn}
                          </span>
                          {selectedFramework.id.startsWith("custom-") && (
                            <button
                              onClick={() => deleteCustomFramework(selectedFramework.id)}
                              className="text-xs font-bold text-rose-500 hover:text-rose-600 ml-4 transition-colors uppercase tracking-widest"
                            >
                              🗑️ 删除该框架
                            </button>
                          )}
                        </div>
                        <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-2">{selectedFramework.name}</h2>
                        <p className="text-slate-500 font-bold tracking-tight text-lg">{selectedFramework.tagline}</p>
                      </div>
                      <div className="shrink-0">
                         <p className="text-xs font-bold text-slate-500 bg-slate-50 px-4 py-2 rounded-lg border border-slate-100 inline-block shadow-sm">🎯 {selectedFramework.scene}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-8">
                      {selectedFramework.blocks.map(block => (
                        <div key={block.key} className="space-y-3">
                          <div className="flex justify-between items-center px-1">
                            <label htmlFor={block.key} className="text-xs font-bold text-slate-900 uppercase tracking-widest flex items-center gap-2">
                              {block.label}
                              {block.required && <span className="text-rose-500">*</span>}
                            </label>
                            {selectedFramework.example && selectedFramework.example[block.key] && (
                              <button 
                                onClick={() => handleInputChange(block.key, selectedFramework.example[block.key])}
                                className="text-xs font-bold text-cyan-600 hover:text-cyan-700 transition-colors uppercase tracking-widest"
                              >
                                Use Example
                              </button>
                            )}
                          </div>
                          <textarea
                            id={block.key}
                            placeholder={block.placeholder}
                            value={formData[block.key] || ""}
                            onChange={(e) => handleInputChange(block.key, e.target.value)}
                            className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl p-6 text-sm font-medium text-slate-600 outline-none focus:border-slate-900 focus:bg-white transition-all placeholder:text-slate-300 min-h-[140px] resize-none leading-relaxed shadow-inner"
                          />
                        </div>
                      ))}
                    </div>

                    <div className="pt-8 flex flex-col md:flex-row gap-8 items-center justify-between">
                      <div className="flex-1">
                        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Mastering Tips</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedFramework.tips && selectedFramework.tips.map((tip, i) => (
                            <span key={i} className="text-xs font-bold text-slate-600 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                               • {tip}
                            </span>
                          ))}
                        </div>
                      </div>
                      <button
                        onClick={() => setIsGenerated(true)}
                        className="w-full md:w-auto px-10 py-4 bg-slate-900 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20 active:scale-95"
                      >
                        Generate Prompt
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Generated Result Modal/Overlay */}
        <AnimatePresence>
          {isGenerated && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="bg-slate-900 rounded-[3rem] p-10 lg:p-16 text-white shadow-2xl border border-white/5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full -mr-32 -mt-32 blur-3xl" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-3xl bg-white/10 flex items-center justify-center text-3xl border border-white/10 shadow-inner">✨</div>
                    <div>
                      <h3 className="text-3xl font-black tracking-tight">已为您生成元提示体</h3>
                      <p className="text-sm font-bold text-white/40 uppercase tracking-widest mt-1">Copy to use in your favorite LLM</p>
                    </div>
                  </div>
                  <CopyButton text={generatedPrompt} />
                </div>
                
                <div className="bg-black/40 border border-white/5 rounded-[2rem] p-10 lg:p-12 shadow-inner">
                  <pre className="text-lg font-mono leading-relaxed text-blue-100/90 whitespace-pre-wrap selection:bg-cyan-500/30">
                    {generatedPrompt}
                  </pre>
                </div>

                <div className="mt-10 flex justify-center">
                  <button 
                    onClick={() => setIsGenerated(false)}
                    className="text-xs font-black uppercase tracking-[0.3em] text-white/30 hover:text-white transition-colors"
                  >
                    Close Result
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* MECE Matrix Section */}
        <section>
          <SectionHeader 
            title="决策矩阵" 
            badge="Strategic Matrix" 
            description="根据不同的任务目标与输出需求，选择最佳的组合策略。" 
          />
          <div className="bg-white rounded-[3rem] border border-slate-100 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <th className="px-10 py-8 text-xs font-black uppercase tracking-[0.2em] text-slate-500">维度 Dimension</th>
                    <th className="px-10 py-8 text-xs font-black uppercase tracking-[0.2em] text-slate-500 text-center">选项 L1</th>
                    <th className="px-10 py-8 text-xs font-black uppercase tracking-[0.2em] text-slate-500 text-center">选项 L2</th>
                    <th className="px-10 py-8 text-xs font-black uppercase tracking-[0.2em] text-slate-500 text-center">选项 L3</th>
                    <th className="px-10 py-8 text-xs font-black uppercase tracking-[0.2em] text-slate-500 text-center">选项 L4</th>
                  </tr>
                </thead>
                <tbody>
                  {meceMatrix.map((row, i) => (
                    <tr key={i} className="border-b border-slate-50 last:border-none hover:bg-slate-50/50 transition-colors">
                      <td className="px-10 py-8 font-black text-slate-900 text-base">{row.dimension}</td>
                      {row.values.map((v, j) => (
                        <td key={j} className="px-10 py-8">
                          <div className="text-sm font-bold text-slate-500 border border-slate-200 px-4 py-2.5 rounded-xl text-center hover:border-slate-900 hover:text-slate-900 transition-all cursor-default">
                            {v}
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
      </SplitViewLayout>
    </>
  );
}
