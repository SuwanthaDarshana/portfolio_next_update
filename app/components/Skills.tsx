import { ReactNode } from "react";

type SkillCategory = {
  title: string;
  items: { name: string; icon?: ReactNode }[];
};

type SkillsProps = {
  categories: SkillCategory[];
};

export function Skills({ categories }: SkillsProps) {
  return (
    <section id="skills" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-baseline sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-200">Skills</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">What I work with</h2>
          </div>
          <div className="h-px flex-1 bg-linear-to-r from-teal-500/60 to-transparent sm:ml-6" />
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {categories.map((category) => (
            <div
              key={category.title}
              className="relative overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-900/30 p-6 shadow-lg shadow-black/30 transition hover:-translate-y-1 hover:border-teal-400/50 hover:shadow-teal-500/20"
            >
              <div className="absolute inset-0 bg-linear-to-br from-teal-500/5 via-transparent to-cyan-500/5" />
              <div className="relative flex items-start justify-between">
                <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                <span className="text-xs uppercase tracking-[0.2em] text-teal-200">{category.items.length}+</span>
              </div>
              <div className="relative mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-2 rounded-xl border border-slate-800/80 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 transition hover:border-teal-400/60 hover:text-teal-100"
                  >
                    <span className="text-xl text-teal-200" aria-hidden>
                      {item.icon ?? "•"}
                    </span>
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
