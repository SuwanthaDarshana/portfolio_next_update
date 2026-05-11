"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

type HeroProps = { name: string; role: string; tagline?: string };

export function Hero({ name, role, tagline }: HeroProps) {
  return (
    <section id="home" className="relative isolate flex min-h-screen items-center pt-20">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 left-1/4 h-[600px] w-[600px] rounded-full bg-teal-400/10 blur-[120px] dark:bg-teal-500/10" />
        <div className="absolute right-0 top-0 h-[500px] w-[700px] rounded-full bg-violet-400/6 blur-[120px] dark:bg-violet-500/8" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[500px] rounded-full bg-cyan-400/6 blur-[100px] dark:bg-cyan-500/6" />
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-16 px-4 py-16 md:px-6 lg:flex-row lg:items-center lg:gap-12 lg:px-10">

        {/* ── Text ── */}
        <div className="flex flex-1 flex-col items-center gap-8 text-center lg:items-start lg:text-left">

          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 rounded-full border border-teal-400/40 bg-teal-50 px-5 py-2 dark:border-teal-500/30 dark:bg-teal-500/10"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-500 opacity-75 dark:bg-teal-400" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500 dark:bg-teal-400" />
            </span>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-teal-700 dark:text-teal-300">
              Available for opportunities
            </span>
          </motion.div>

          {/* Name + role */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <p className="mb-2 text-base font-medium text-slate-500 dark:text-slate-400">Hi there, I&apos;m</p>
            <h1 className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
              <span className="gradient-text">{name}</span>
            </h1>
            <p className="mt-4 text-lg font-semibold text-teal-600 sm:text-xl lg:text-2xl dark:text-teal-400">{role}</p>
          </motion.div>

          {tagline && (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-lg text-base leading-relaxed text-slate-500 sm:text-lg dark:text-slate-400"
            >
              {tagline}
            </motion.p>
          )}

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 lg:justify-start"
          >
            <a
              href="/Suwantha_Darshana_SE.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-teal-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-teal-500/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-teal-400 hover:shadow-teal-400/40 dark:bg-teal-400 dark:text-slate-900 dark:hover:bg-teal-300"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-teal-400 hover:text-teal-600 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:hover:border-teal-400/40 dark:hover:bg-white/10 dark:hover:text-teal-300"
            >
              Contact Me
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex items-center gap-3"
          >
            {[
              { href: "https://github.com/SuwanthaDarshana", label: "GitHub", icon: <FaGithub className="h-5 w-5" /> },
              { href: "https://www.linkedin.com/in/suwantha-darshana-3b9856219/", label: "LinkedIn", icon: <FaLinkedin className="h-5 w-5" /> },
            ].map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-all hover:-translate-y-0.5 hover:border-teal-400 hover:text-teal-600 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:text-slate-500 dark:hover:border-teal-400/40 dark:hover:text-teal-400"
              >
                {icon}
              </a>
            ))}
            <span className="text-xs text-slate-400 dark:text-slate-600">@SuwanthaDarshana</span>
          </motion.div>
        </div>

        {/* ── Photo ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="flex flex-1 items-center justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="absolute -inset-6 rounded-full bg-teal-400/10 blur-3xl dark:bg-teal-400/10" />
            <div className="absolute -inset-3 rounded-full bg-teal-500/15 blur-xl dark:bg-teal-500/15" />

            <div className="relative h-64 w-64 sm:h-72 sm:w-72 lg:h-80 lg:w-80 xl:h-96 xl:w-96">
              {/* Ring */}
              <div className="absolute inset-0 rounded-full bg-linear-to-br from-teal-500 via-cyan-400/50 to-violet-400/30 p-[2px] dark:from-teal-400 dark:via-cyan-400/50 dark:to-violet-500/30">
                <div className="h-full w-full rounded-full bg-slate-100 dark:bg-slate-950" />
              </div>

              {/* Photo */}
              <div className="absolute inset-[3px] overflow-hidden rounded-full ring-1 ring-teal-400/20">
                <Image
                  src="/profile.jpg"
                  alt={`Portrait of ${name}`}
                  fill
                  priority
                  sizes="(max-width: 640px) 256px, (max-width: 1024px) 288px, 384px"
                  className="object-cover"
                />
              </div>

              {/* Full Stack badge */}
              <div className="absolute -bottom-4 -right-4 flex items-center gap-2.5 rounded-2xl border border-slate-200 bg-white px-4 py-2.5 shadow-lg shadow-slate-200/60 dark:border-white/10 dark:bg-slate-900/90 dark:shadow-black/40">
                <span className="text-lg">⚡</span>
                <div>
                  <p className="text-xs font-bold leading-tight text-slate-800 dark:text-white">Full Stack Dev</p>
                </div>
              </div>

              {/* Open to work badge */}
              <div className="absolute -left-6 top-8 flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-md dark:border-white/10 dark:bg-slate-900/90">
                <div className="h-2 w-2 rounded-full bg-teal-500 shadow-[0_0_6px_rgba(20,184,166,0.8)] dark:bg-teal-400" />
                <p className="text-[10px] font-semibold text-slate-700 dark:text-slate-300">Open to work</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a href="#about" className="flex flex-col items-center gap-1.5 text-xs text-slate-400 transition-colors hover:text-teal-500 dark:text-slate-600 dark:hover:text-teal-400">
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <svg className="h-4 w-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
