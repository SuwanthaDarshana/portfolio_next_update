"use client";

import { motion } from "framer-motion";

type Project = { title: string; description: string; tech: string[]; github?: string; demo?: string };
type ProjectsProps = { projects: Project[] };

const GithubIcon = () => (
  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const ExternalIcon = () => (
  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

export function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-10">

        <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-teal-600 dark:text-teal-400">Projects</p>
            <h2 className="mt-1 text-3xl font-black text-slate-900 sm:text-4xl dark:text-white">Selected work</h2>
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
          className="grid gap-4 md:grid-cols-2"
        >
          {projects.map((project, idx) => (
            <motion.article
              key={project.title}
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-lg hover:shadow-teal-100/60 dark:border-white/8 dark:bg-white/3 dark:shadow-none dark:hover:border-teal-400/25 dark:hover:bg-white/5 dark:hover:shadow-xl dark:hover:shadow-teal-500/5"
            >
              {/* Top gradient line on hover */}
              <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-teal-400/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              {/* Hover glow — subtle in light, more visible in dark */}
              <div className="absolute inset-0 bg-linear-to-br from-teal-50/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-teal-400/5 dark:to-cyan-400/5" />

              <div className="relative flex flex-1 flex-col">
                {/* Number + title */}
                <div className="flex items-start gap-3">
                  <span className="mt-1 shrink-0 font-mono text-xs font-black text-teal-400/50 dark:text-teal-500/40">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-slate-800 transition-colors group-hover:text-teal-700 sm:text-lg dark:text-slate-100 dark:group-hover:text-white">
                      {project.title.trim()}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-500">{project.description}</p>
                  </div>
                </div>

                {/* Tech chips */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-500 transition-colors group-hover:border-teal-200 group-hover:text-teal-700 dark:border-white/8 dark:bg-white/3 dark:text-slate-500 dark:group-hover:border-teal-500/20 dark:group-hover:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                {(project.github || project.demo) && (
                  <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-slate-100 pt-4 dark:border-white/6">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-semibold text-slate-600 transition-all hover:-translate-y-0.5 hover:border-teal-400 hover:bg-teal-50 hover:text-teal-700 hover:shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-400 dark:hover:border-teal-400/50 dark:hover:bg-teal-400/10 dark:hover:text-teal-300"
                      >
                        <GithubIcon /> GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-teal-500 bg-teal-500 px-4 py-1.5 text-xs font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-teal-400 hover:border-teal-400 hover:shadow-sm hover:shadow-teal-500/30 dark:border-teal-400 dark:bg-teal-400 dark:text-slate-900 dark:hover:bg-teal-300 dark:hover:border-teal-300"
                      >
                        <ExternalIcon /> Live Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
