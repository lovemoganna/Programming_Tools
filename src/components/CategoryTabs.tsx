import { cn } from "../utils/cn";

interface TabItem {
  label: string;
  value: string;
}

interface CategoryTabsProps {
  items: TabItem[];
  activeValue: string;
  onSelect: (value: string) => void;
  activeClassName?: string;
  inactiveClassName?: string;
  className?: string;
}

export function CategoryTabs({
  items,
  activeValue,
  onSelect,
  activeClassName = "bg-slate-900 text-white border-slate-900 shadow-sm",
  inactiveClassName = "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50",
  className,
}: CategoryTabsProps) {
  return (
    <div className={cn("overflow-x-auto scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0", className)}>
      <div className="flex gap-1.5 min-w-max pb-1" role="tablist">
        {items.map((item) => (
          <button
            key={item.value}
            onClick={() => onSelect(item.value)}
            role="tab"
            aria-selected={activeValue === item.value}
            className={cn(
              "px-3.5 py-2 rounded-xl text-xs font-bold transition-all border whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2",
              activeValue === item.value ? activeClassName : inactiveClassName
            )}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
