"use client";

import { motion } from "framer-motion";

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
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-200">Education</p>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">Where I studied</h2>
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
          className="mt-8 grid gap-4 md:grid-cols-2"
        >
          {items.map((item) => (
            <motion.article
              key={`${item.institution}-${item.title}`}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-md p-6 shadow-2xl transition hover:-translate-y-1 hover:border-teal-400/50 hover:bg-slate-50 dark:hover:bg-white/10"
            >
              <div className="absolute inset-0 bg-linear-to-br from-teal-400/5 via-transparent to-cyan-400/5" />
              <div className="relative flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-200">{item.institution}</p>
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-teal-600 dark:text-teal-200 whitespace-nowrap">
                  {item.period}
                </span>
              </div>
              {item.details && (
                <p className="relative mt-3 text-sm text-slate-600 dark:text-slate-200">{item.details}</p>
              )}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
