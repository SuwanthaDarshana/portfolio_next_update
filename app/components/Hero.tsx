"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type HeroProps = {
  name: string;
  role: string;
  tagline?: string;
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-200"
          >
            Welcome to my portfolio
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold leading-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl"
          >
            {name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg font-semibold text-teal-600 dark:text-teal-200 sm:text-xl"
          >
            {role}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-2xl text-base text-slate-600 dark:text-slate-200 sm:text-lg"
          >
            {tagline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="https://drive.google.com/file/d/1aLqiF4g49BtosDrqQX6tE20xX4YZECO2/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-400 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-teal-500/30 transition hover:-translate-y-0.5 hover:bg-teal-300"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/5 px-6 py-3 text-sm font-semibold text-slate-800 dark:text-slate-100 transition hover:-translate-y-0.5 hover:bg-slate-100 dark:hover:bg-white/10 hover:border-teal-400 hover:text-teal-600 dark:hover:text-teal-200"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="flex flex-1 items-center justify-center"
        >
          <div className="relative h-64 w-52 overflow-hidden rounded-3xl border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-sm p-1 shadow-2xl shadow-teal-500/10 sm:h-72 sm:w-56 lg:h-80 lg:w-64">
            <div className="absolute inset-0 animate-pulse rounded-3xl bg-linear-to-br from-teal-400/10 via-transparent to-cyan-400/20" />
            <div className="relative h-full w-full overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-950 ring-1 ring-slate-200 dark:ring-white/10">
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/10 dark:from-slate-950/45 via-transparent to-transparent" />
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
        </motion.div>
      </div>
    </section>
  );
}
