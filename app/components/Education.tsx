"use client";

import { motion } from "framer-motion";

type EducationItem = { title: string; institution: string; period: string; details?: string };
type EducationProps = { items: EducationItem[] };

export function Education({ items }: EducationProps) {
  return (
    <section id="education" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-10">

        <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-teal-600 dark:text-teal-400">Education</p>
            <h2 className="mt-1 text-3xl font-black text-slate-900 sm:text-4xl dark:text-white">Where I studied</h2>
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
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((item) => (
            <motion.article
              key={`${item.institution}-${item.title}`}
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-lg hover:shadow-teal-100/60 dark:border-white/8 dark:bg-white/3 dark:shadow-none dark:hover:border-teal-400/25 dark:hover:bg-white/5"
            >
              {/* Teal top accent */}
              <div className="absolute inset-x-0 top-0 h-0.5 bg-linear-to-r from-teal-500/60 via-teal-400/30 to-transparent dark:from-teal-500/60 dark:via-teal-400/20" />
              {/* Hover glow */}
              <div className="absolute inset-0 bg-linear-to-br from-teal-50/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-teal-500/5" />

              <div className="relative">
                <span className="inline-flex items-center rounded-full border border-teal-300 bg-teal-50 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-teal-700 dark:border-teal-500/25 dark:bg-teal-500/10 dark:text-teal-400">
                  {item.period}
                </span>
                <div className="mt-4">
                  <h3 className="text-sm font-bold leading-snug text-slate-800 transition-colors group-hover:text-teal-700 dark:text-slate-100 dark:group-hover:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm font-semibold text-teal-600 dark:text-teal-400">{item.institution}</p>
                </div>
                {item.details && (
                  <p className="mt-3 text-xs leading-6 text-slate-500 dark:text-slate-500">{item.details}</p>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
