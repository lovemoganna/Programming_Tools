import { useState, useMemo, useRef, useEffect } from "react";
import { categories } from "./data/prompts";
import { SearchInput } from "../../components/SearchInput";
import ExcelPromptCard from "./components/ExcelPromptCard";
import { FormulaSandbox } from "./components/FormulaSandbox";
import { PageHeader } from "../../components/PageHeader";
import { PageFooter } from "../../components/PageFooter";
import { cn } from "../../utils/cn";
import { SplitViewLayout } from "../../components/SplitViewLayout";
import { matchPinyin } from "../../utils/pinyin";

export default function ExcelPromptsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [search, setSearch] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const mainContentRef = useRef<HTMLDivElement>(null);

  const totalCount = categories.reduce((acc, c) => acc + c.prompts.length, 0);

  // Handle Deep Linking via Hash
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (!hash) return;
      
      const params = new URLSearchParams(hash);
      const catId = params.get('category');
      const promptId = params.get('id');
      
      if (catId) setActiveCategory(catId);
      if (promptId) {
        // Wait for rendering then scroll
        setTimeout(() => {
          const el = document.getElementById(`prompt-${promptId}`);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            // Add a temporary highlight effect
            el.classList.add('ring-4', 'ring-emerald-500/30');
            setTimeout(() => el.classList.remove('ring-4', 'ring-emerald-500/30'), 2000);
          }
        }, 300);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const filtered = useMemo(() => {
    const q = search.trim();
    return categories
      .filter((c) => activeCategory === "all" || c.id === activeCategory)
      .map((c) => ({
        ...c,
        prompts: c.prompts.filter((p) => {
          const matchSearch =
            !q ||
            matchPinyin(p.title, q) ||
            matchPinyin(p.scenario, q) ||
            matchPinyin(p.prompt, q) ||
            p.tags.some((t) => matchPinyin(t, q));
          return matchSearch;
        }),
      }))
      .filter((c) => c.prompts.length > 0);
  }, [activeCategory, search]);

  const sidebar = (
    <>
      <div className="p-8 border-b border-slate-100 bg-white/50 backdrop-blur-sm">
        <SearchInput
          value={search}
          onChange={setSearch}
          placeholder="搜索关键词..."
          className="w-full"
        />
      </div>

      <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
        <div className="px-6 py-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          Prompt Categories
        </div>
        
        <button
          onClick={() => setActiveCategory("all")}
          className={cn(
            "w-full flex items-center gap-4 px-6 py-3.5 text-left transition-all duration-300 rounded-2xl group",
            activeCategory === "all"
              ? "bg-slate-900 text-white shadow-xl shadow-emerald-950/20 scale-[1.02] border border-emerald-500/20"
              : "text-slate-500 hover:bg-white hover:text-slate-900 hover:shadow-md hover:shadow-slate-200/50 border border-transparent"
          )}
        >
          <span className="text-sm font-bold">✨ 全部内容</span>
          <span className="ml-auto text-xs opacity-40 font-black">{totalCount}</span>
        </button>

        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setActiveCategory(c.id)}
            className={cn(
              "w-full flex items-center gap-4 px-6 py-3.5 text-left transition-all duration-300 rounded-2xl group",
              activeCategory === c.id
                ? "bg-slate-900 text-white shadow-xl shadow-emerald-950/20 scale-[1.02] border border-emerald-500/20"
                : "text-slate-500 hover:bg-white hover:text-slate-900 hover:shadow-md hover:shadow-slate-200/50 border border-transparent"
            )}
          >
            <span className="text-lg grayscale group-hover:grayscale-0 transition-all">{c.icon}</span>
            <span className="text-sm font-bold leading-tight truncate">{c.name}</span>
            <span className="ml-auto text-xs opacity-40 font-black">{c.prompts.length}</span>
          </button>
        ))}
      </div>

      <div className="p-8 bg-white/50 border-t border-slate-100 backdrop-blur-sm">
        <div className="flex items-center gap-3 text-xs font-bold text-slate-400 uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          MECE Library v4.0
        </div>
      </div>
    </>
  );

  return (
    <>
      <SplitViewLayout
      header={
        <PageHeader
          title="Excel AI"
          subtitle="数据分析 · 元提示工程 · 专家级"
          description="遵循 MECE 原则设计的数据处理专家体系。覆盖清洗、公式、透视及分析全场景，助力办公自动化。"
          icon="📊"
          gradient="from-emerald-500 to-teal-600"
          badgeText="Library v4.0 · MECE 专家体系"
          stats={[
            { label: "精选提示词", value: totalCount, icon: "💎" },
            { label: "专业分类", value: categories.length, icon: "📁" },
            { label: "难度分级", value: "3", icon: "⚖️" },
          ]}
        />
      }
      sidebar={sidebar}
      footer={
        <PageFooter 
          title="Excel Meta-Prompts"
          description="提升数据生产力的原子级指令集，让 AI 真正懂你的 Excel 需求。"
          icon="📊"
          tags={["Data Cleaning", "Advanced Formula", "Pivot Table", "VBA Automation"]}
          gradient="from-emerald-500 to-teal-600"
        />
      }
      isSidebarOpen={isSidebarOpen}
      onToggleSidebar={setIsSidebarOpen}
      mainRef={mainContentRef}
    >
      <>
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center bg-white rounded-3xl border border-slate-200 shadow-sm">
            <span className="text-6xl mb-4 text-slate-200 grayscale opacity-20">🔍</span>
            <h3 className="text-xl font-bold text-slate-900 mb-2">未找到匹配的提示词</h3>
            <p className="text-slate-500 text-sm">试试其他关键词，或清除筛选条件</p>
          </div>
        ) : (
          <div className="space-y-16">
            {filtered.map((category) => (
              <section key={category.id}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-1 h-3.5 rounded-full bg-emerald-600" />
                    <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                      {category.id} Category
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-2">{category.name}</h2>
                  <p className="text-slate-500 text-lg leading-relaxed font-medium">{category.description}</p>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                  {category.prompts.map((prompt) => (
                    <ExcelPromptCard key={prompt.id} prompt={prompt} category={category} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
        <FormulaSandbox />
      </>
      </SplitViewLayout>
    </>
  );
}
