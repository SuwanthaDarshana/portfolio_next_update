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
      className="relative isolate overflow-hidden pt-28 pb-24 sm:pt-32 sm:pb-32"
    >
      {/* Glow orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 -top-20 h-[600px] w-[600px] rounded-full bg-teal-500/10 blur-[120px]" />
        <div className="absolute right-0 top-32 h-[400px] w-[500px] rounded-full bg-cyan-400/10 blur-[100px]" />
        <div className="absolute bottom-0 left-1/3 h-[300px] w-[400px] rounded-full bg-teal-400/6 blur-[80px]" />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 md:px-6 lg:flex-row lg:items-center lg:gap-20 lg:px-10">
        {/* Text */}
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
          {tagline && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-2xl text-base text-slate-600 dark:text-slate-200 sm:text-lg"
            >
              {tagline}
            </motion.p>
          )}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="/Suwantha_Darshana_SE.pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-400 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-teal-500/30 transition hover:-translate-y-0.5 hover:bg-teal-300"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/5 px-6 py-3 text-sm font-semibold text-slate-800 dark:text-slate-100 transition hover:-translate-y-0.5 hover:bg-slate-100 dark:hover:bg-white/10 hover:border-teal-400 hover:text-teal-600 dark:hover:text-teal-200"
            >
              Contact Me
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
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
              <Image
                src="/profile.jpg"
                alt={`Portrait of ${name}`}
                fill
                priority
                sizes="(max-width: 768px) 60vw, (max-width: 1200px) 320px, 400px"
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <div className="mt-16 flex justify-center">
        <a
          href="#about"
          className="flex flex-col items-center gap-1.5 text-xs text-slate-500 transition-colors hover:text-teal-400"
        >
          <span>Scroll down</span>
          <svg className="h-4 w-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
