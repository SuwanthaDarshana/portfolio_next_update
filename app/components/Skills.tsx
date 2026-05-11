"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type SkillCategory = {
  title: string;
  items: { name: string; icon?: ReactNode }[];
};
type SkillsProps = { categories: SkillCategory[] };

const S: Record<string, { glow: string; border: string; badge: string; chip: string; icon: string }> = {
  "Programming Languages": {
    glow:   "from-violet-500/10 dark:from-violet-500/15",
    border: "hover:border-violet-400/60 dark:hover:border-violet-400/40",
    badge:  "border-violet-300 bg-violet-50 text-violet-700 dark:border-violet-500/30 dark:bg-violet-500/10 dark:text-violet-300",
    chip:   "hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700 dark:hover:border-violet-400/30 dark:hover:bg-violet-500/10 dark:hover:text-violet-200",
    icon:   "text-violet-600 dark:text-violet-300",
  },
  Frontend: {
    glow:   "from-sky-500/10 dark:from-sky-500/15",
    border: "hover:border-sky-400/60 dark:hover:border-sky-400/40",
    badge:  "border-sky-300 bg-sky-50 text-sky-700 dark:border-sky-500/30 dark:bg-sky-500/10 dark:text-sky-300",
    chip:   "hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700 dark:hover:border-sky-400/30 dark:hover:bg-sky-500/10 dark:hover:text-sky-200",
    icon:   "text-sky-600 dark:text-sky-300",
  },
  Backend: {
    glow:   "from-teal-500/10 dark:from-teal-500/15",
    border: "hover:border-teal-400/60 dark:hover:border-teal-400/40",
    badge:  "border-teal-300 bg-teal-50 text-teal-700 dark:border-teal-500/30 dark:bg-teal-500/10 dark:text-teal-300",
    chip:   "hover:border-teal-300 hover:bg-teal-50 hover:text-teal-700 dark:hover:border-teal-400/30 dark:hover:bg-teal-500/10 dark:hover:text-teal-200",
    icon:   "text-teal-600 dark:text-teal-300",
  },
  Database: {
    glow:   "from-orange-500/10 dark:from-orange-500/15",
    border: "hover:border-orange-400/60 dark:hover:border-orange-400/40",
    badge:  "border-orange-300 bg-orange-50 text-orange-700 dark:border-orange-500/30 dark:bg-orange-500/10 dark:text-orange-300",
    chip:   "hover:border-orange-300 hover:bg-orange-50 hover:text-orange-700 dark:hover:border-orange-400/30 dark:hover:bg-orange-500/10 dark:hover:text-orange-200",
    icon:   "text-orange-600 dark:text-orange-300",
  },
  Tools: {
    glow:   "from-slate-400/8 dark:from-slate-400/10",
    border: "hover:border-slate-400/60 dark:hover:border-slate-400/40",
    badge:  "border-slate-300 bg-slate-100 text-slate-600 dark:border-slate-500/30 dark:bg-slate-500/10 dark:text-slate-300",
    chip:   "hover:border-slate-300 hover:bg-slate-100 hover:text-slate-700 dark:hover:border-slate-400/30 dark:hover:bg-slate-500/10 dark:hover:text-slate-200",
    icon:   "text-slate-500 dark:text-slate-400",
  },
};

const fallback = S.Backend;

export function Skills({ categories }: SkillsProps) {
  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-10">

        <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-teal-600 dark:text-teal-400">Skills</p>
            <h2 className="mt-1 text-3xl font-black text-slate-900 sm:text-4xl dark:text-white">What I work with</h2>
          </motion.div>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-line sm:ml-8"
          />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
        >
          {categories.map((cat) => {
            const s = S[cat.title] ?? fallback;
            return (
              <motion.div
                key={cat.title}
                variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } }}
                className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/8 dark:bg-white/3 dark:shadow-none dark:hover:bg-white/5 dark:hover:shadow-xl ${s.border}`}
              >
                <div className={`absolute inset-0 bg-linear-to-br ${s.glow} via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />

                <div className="relative">
                  <div className="mb-5 flex items-center justify-between">
                    <h3 className="text-sm font-bold text-slate-700 dark:text-slate-200">{cat.title}</h3>
                    <span className={`rounded-full border px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider ${s.badge}`}>
                      {cat.items.length}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <div
                        key={item.name}
                        className={`flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 transition-all duration-200 dark:border-white/8 dark:bg-white/3 dark:text-slate-400 ${s.chip}`}
                      >
                        {item.icon && (
                          <span className={`text-base leading-none ${s.icon}`} aria-hidden>{item.icon}</span>
                        )}
                        {item.name}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
