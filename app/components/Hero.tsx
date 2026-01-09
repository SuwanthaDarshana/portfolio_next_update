import Image from "next/image";

type HeroProps = {
  name: string;
  role: string;
  tagline: string;
};

export function Hero({ name, role, tagline }: HeroProps) {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden pt-28 pb-24 sm:pt-32"
    >
      <div className="absolute inset-0 -z-10 opacity-40 blur-3xl">
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-teal-500/20" />
        <div className="absolute right-0 top-40 h-64 w-64 rounded-full bg-cyan-400/20" />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 md:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-10">
        <div className="flex-1 space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-200">
            Welcome to my portfolio
          </p>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            {name}
          </h1>
          <p className="text-lg font-semibold text-teal-200 sm:text-xl">
            {role}
          </p>
          <p className="max-w-2xl text-base text-slate-200 sm:text-lg">
            {tagline}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-400 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-teal-500/30 transition hover:-translate-y-0.5 hover:bg-teal-300"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-teal-400 hover:text-teal-200"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <div className="relative h-64 w-52 overflow-hidden rounded-3xl border border-slate-800/70 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 p-1 shadow-2xl shadow-teal-500/10 sm:h-72 sm:w-56 lg:h-80 lg:w-64">
            <div className="absolute inset-0 animate-pulse rounded-3xl bg-linear-to-br from-teal-400/10 via-transparent to-cyan-400/20" />
            <div className="relative h-full w-full overflow-hidden rounded-2xl bg-slate-950 ring-1 ring-slate-800/80">
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/45 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-teal-400/6 mix-blend-screen" />
              <Image
                src="/profile.jpg"
                alt={`Portrait of ${name}`}
                fill
                priority
                sizes="(max-width: 768px) 60vw, (max-width: 1200px) 320px, 400px"
                className="object-cover"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-teal-400/25" />
          </div>
        </div>
      </div>
    </section>
  );
}
