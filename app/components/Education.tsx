type EducationItem = {
  title: string;
  institution: string;
  period: string;
  details?: string;
};

type EducationProps = {
  items: EducationItem[];
};

export function Education({ items }: EducationProps) {
  return (
    <section id="education" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-baseline sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-200">Education</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Where I studied</h2>
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-teal-500/60 to-transparent sm:ml-6" />
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <article
              key={`${item.institution}-${item.title}`}
              className="relative overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-900/40 p-6 shadow-lg shadow-black/30 transition hover:-translate-y-1 hover:border-teal-400/50 hover:shadow-teal-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400/5 via-transparent to-cyan-400/5" />
              <div className="relative flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-slate-200">{item.institution}</p>
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-teal-200">
                  {item.period}
                </span>
              </div>
              {item.details && (
                <p className="relative mt-3 text-sm text-slate-200">{item.details}</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
