"use client";

import { motion } from "framer-motion";

type AboutProps = { summary: string };

const stats = [
  { value: "12+", label: "Projects Built" },
  { value: "20+", label: "Technologies" },
  { value: "2025", label: "Graduation" },
];

const tags = ["Problem Solver", "Clean Code", "Team Player", "Fast Learner"];

export function About({ summary }: AboutProps) {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-10">

        <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-teal-600 dark:text-teal-400">About me</p>
            <h2 className="mt-1 text-3xl font-black text-slate-900 sm:text-4xl dark:text-white">Who I am</h2>
          </motion.div>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-line sm:ml-8"
          />
        </div>

        <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">

          {/* Summary + tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6 lg:col-span-2"
          >
            <p className="text-base leading-8 text-slate-600 sm:text-lg sm:leading-9 dark:text-slate-400">{summary}</p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-teal-300 bg-teal-50 px-4 py-1.5 text-xs font-semibold tracking-wide text-teal-700 dark:border-teal-500/25 dark:bg-teal-500/10 dark:text-teal-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-3 gap-3 self-start lg:grid-cols-1"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-md hover:shadow-teal-100 dark:border-white/8 dark:bg-white/3 dark:shadow-none dark:hover:border-teal-400/30 dark:hover:shadow-xl dark:hover:shadow-black/20"
              >
                <div className="absolute inset-0 bg-linear-to-br from-teal-50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-teal-500/10 dark:to-transparent" />
                <p className="relative text-3xl font-black text-teal-600 transition-colors group-hover:text-teal-500 dark:text-teal-400 dark:group-hover:text-teal-300">
                  {stat.value}
                </p>
                <p className="relative mt-1 text-xs font-medium text-slate-400 dark:text-slate-500">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
