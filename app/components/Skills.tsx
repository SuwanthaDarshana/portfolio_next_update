"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

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
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-200">Skills</p>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">What I work with</h2>
          </motion.div>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="h-px flex-1 origin-left bg-linear-to-r from-teal-500/60 to-transparent sm:ml-6"
          />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="mt-8 grid gap-6 md:grid-cols-2"
        >
          {categories.map((category) => (
            <motion.div
              key={category.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-md p-6 shadow-2xl transition hover:-translate-y-1 hover:border-teal-400/50 hover:bg-slate-50 dark:hover:bg-white/10"
            >
              <div className="absolute inset-0 bg-linear-to-br from-teal-500/5 via-transparent to-cyan-500/5" />
              <div className="relative flex items-start justify-between">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{category.title}</h3>
                <span className="text-xs uppercase tracking-[0.2em] text-teal-600 dark:text-teal-200">{category.items.length}+</span>
              </div>
              <div className="relative mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-2 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 px-3 py-2 text-sm text-slate-700 dark:text-slate-100 transition hover:border-teal-400/60 hover:text-teal-700 dark:hover:text-teal-100 hover:bg-white/50 dark:hover:bg-white/10"
                  >
                    <span className="text-xl text-teal-600 dark:text-teal-200" aria-hidden>
                      {item.icon ?? "•"}
                    </span>
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
