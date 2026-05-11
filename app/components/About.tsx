"use client";

import { motion } from "framer-motion";

type AboutProps = {
  summary: string;
};

const stats = [
  { value: "7+", label: "Projects Built" },
  { value: "20+", label: "Technologies" },
  { value: "2025", label: "Graduation Year" },
];

export function About({ summary }: AboutProps) {
  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-baseline sm:justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-200">About</p>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">Who I am</h2>
          </motion.div>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="h-px flex-1 origin-left bg-linear-to-r from-teal-500/60 to-transparent sm:ml-6"
          />
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 max-w-4xl text-base leading-7 text-slate-700 dark:text-slate-200 sm:text-lg"
        >
          {summary}
        </motion.p>

        <div className="mt-8 grid grid-cols-3 gap-4 sm:gap-6 lg:max-w-sm">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/5 p-4 text-center shadow-lg backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-teal-400/50"
            >
              <p className="text-2xl font-extrabold text-teal-600 dark:text-teal-300">{stat.value}</p>
              <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
