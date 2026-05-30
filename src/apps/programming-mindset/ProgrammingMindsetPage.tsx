import React, { useEffect, useState, useRef } from "react";
import SignalCard from "./components/SignalCard";
import ElispGallery from "./components/ElispGallery";
import PromptModuleCard from "./components/PromptModuleCard";
import ChecklistSection from "./components/ChecklistSection";
import { signals, elispExamples, promptModules } from "./data/enlightenmentData";
import { PageHeader } from "../../components/PageHeader";
import { PageFooter } from "../../components/PageFooter";
import { SectionHeader } from "../../components/SectionHeader";
import { SplitViewLayout } from "../../components/SplitViewLayout";
import { cn } from "../../utils/cn";

export default function ProgrammingMindsetPage() {
  const [activeTab, setActivePage] = useState("signals");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const mainContentRef = useRef<HTMLDivElement>(null);

  // Handle Deep Linking via Hash
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (!hash) return;
      const params = new URLSearchParams(hash);
      const type = params.get('type');
      const id = params.get('id');

      if (type === 'signal') setActivePage('signals');
      if (type === 'elisp') setActivePage('elisp');
      if (type === 'ai') setActivePage('ai');

      if (type && id) {
        setTimeout(() => {
          const el = document.getElementById(`${type}-${id}`);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            el.classList.add('ring-4', 'ring-violet-500/30');
            setTimeout(() => el.classList.remove('ring-4', 'ring-violet-500/30'), 2000);
          }
        }, 300);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navItems = [
    { id: "signals", label: "⚡ 开窍信号", icon: "Cognition" },
    { id: "elisp", label: "λ Elisp 范式", icon: "Abstraction" },
    { id: "ai", label: "⚙️ AI 辅助建模", icon: "Augmented" },
    { id: "progress", label: "📈 进化评估", icon: "Assessment" },
  ];

  const sidebar = (
    <>
      <div className="p-8 border-b border-slate-100 bg-white/50 backdrop-blur-sm">
        <div className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Mindset Modules</div>
      </div>
      <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              setActivePage(item.id);
              if (mainContentRef.current) mainContentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={cn(
              "w-full flex items-center gap-4 px-6 py-3.5 text-left transition-all duration-300 rounded-2xl group",
              activeTab === item.id
                ? "bg-slate-900 text-white shadow-xl shadow-indigo-950/20 scale-[1.02] border border-indigo-500/20"
                : "text-slate-500 hover:bg-white hover:text-slate-900 hover:shadow-md hover:shadow-slate-200/50 border border-transparent"
            )}
          >
            <span className="text-sm font-bold">{item.label}</span>
          </button>
        ))}
      </div>
    </>
  );

  return (
    <>
      <SplitViewLayout
      header={
        <PageHeader
          title="编程开窍"
          subtitle="认知建模 · 逻辑底座 · 范式转移"
          description="从语法搬运工向系统架构师的思维跃迁。通过 Emacs Lisp 的逻辑纯粹性，剥离琐碎的语法噪音，直击编程本质：数据、变换与模型化。"
          icon="λ"
          gradient="from-indigo-500 to-violet-600"
          badgeText="Paradigm Shift · Logic Design"
          stats={[
            { label: "跃迁信号", value: signals.length, icon: "⚡" },
            { label: "核心范式", value: elispExamples.length, icon: "🧩" },
            { label: "开窍程度", value: "Level 1", icon: "💎" },
          ]}
        />
      }
      sidebar={sidebar}
      footer={
        <PageFooter 
          title="Programming Enlightenment"
          description="编程不是目的，构建优雅的问题解决模型才是。通过理解 Lisp 的同构性，掌握跨越语法表象的底层思维。"
          icon="λ"
          tags={["Mindset Modeling", "Lisp Paradigm", "AI Augmented", "Complexity Control"]}
          gradient="from-indigo-500 to-violet-600"
        />
      }
      isSidebarOpen={isSidebarOpen}
      onToggleSidebar={setIsSidebarOpen}
      mainRef={mainContentRef}
    >
      <div className="space-y-12 serif-reading max-w-4xl mx-auto">
        {activeTab === "signals" && (
          <section>
            <SectionHeader 
              title="开窍信号：识别你的思维跃迁" 
              badge="Cognition" 
              description="这些信号代表你开始从「实现思维」转向「建模思维」。点击信号查看对应的核心逻辑演示。"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {signals.map((signal, i) => (
                <SignalCard key={signal.id} signal={signal} index={i} />
              ))}
            </div>
          </section>
        )}

        {activeTab === "elisp" && (
          <section>
            <SectionHeader 
              title="Elisp 范式：纯粹的逻辑表达" 
              badge="Abstraction" 
              description="通过 Lisp 的「代码即数据」特性，剥离琐碎的语法噪音，直击编程逻辑的本质。"
            />
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
              <ElispGallery examples={elispExamples} />
            </div>
          </section>
        )}

        {activeTab === "ai" && (
          <section>
            <SectionHeader 
              title="结构化提示词：AI 辅助建模" 
              badge="Augmented" 
              description="利用 AI 辅助你建立思维模型。我们将核心开窍信号转化为可执行的系统提示词（System Prompts）。"
            />
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              {promptModules.map((module) => (
                <PromptModuleCard key={module.id} module={module} />
              ))}
            </div>
          </section>
        )}

        {activeTab === "progress" && (
          <section>
            <SectionHeader 
              title="我的进度：进化评估" 
              badge="Assessment" 
              description="定期自测，观察自己的思维重心是否正在从「代码实现」转移到「问题模型」。"
            />
            <ChecklistSection />
          </section>
        )}
      </div>
      </SplitViewLayout>
    </>
  );
}
