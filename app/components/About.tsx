type AboutProps = {
  summary: string;
};

export function About({ summary }: AboutProps) {
  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-baseline sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-200">About</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Who I am</h2>
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-teal-500/60 to-transparent sm:ml-6" />
        </div>
        <p className="mt-6 max-w-4xl text-base leading-7 text-slate-200 sm:text-lg">
          {summary}
        </p>
      </div>
    </section>
  );
}
