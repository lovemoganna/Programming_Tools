import type { Category } from "../data/frameworks";
import PromptBuilder from "./PromptBuilder";

interface Props {
  category: Category;
}

const colorAccent: Record<string, string> = {
  violet: "border-l-violet-500 bg-violet-50",
  rose: "border-l-rose-500 bg-rose-50",
  blue: "border-l-blue-500 bg-blue-50",
  emerald: "border-l-emerald-500 bg-emerald-50",
  amber: "border-l-amber-500 bg-amber-50",
  slate: "border-l-slate-500 bg-slate-100",
};

export default function CategorySection({ category }: Props) {
  const accent = colorAccent[category.color] || "border-l-slate-400 bg-slate-50";

  return (
    <section className="py-16 px-6 border-t border-slate-100 first:border-t-0">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="mb-10 flex items-end justify-between">
          <div className="flex items-center gap-4">
            <div className={`w-14 h-14 rounded-2xl border-2 flex items-center justify-center text-3xl shadow-sm ${accent}`}>
              {category.icon}
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">{category.label}</h2>
              <p className="text-sm text-slate-500 font-medium mt-1">
                {category.frameworks.length} 个专属框架 · 专注于{category.label}效率提升
              </p>
            </div>
          </div>
          <div className="hidden sm:block text-xs font-black uppercase tracking-[0.2em] text-slate-300">
            {category.id} / Category
          </div>
        </div>

        {/* Framework Cards Grid */}
        <div className="grid grid-cols-1 gap-8">
          {category.frameworks.map((fw) => (
            <PromptBuilder key={fw.id} framework={fw} />
          ))}
        </div>
      </div>
    </section>
  );
}
