"use client";

import { motion } from "framer-motion";

type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
};

type ProjectsProps = {
  projects: Project[];
};

export function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-baseline sm:justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-200">Projects</p>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">Selected work</h2>
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
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-md p-6 shadow-2xl transition hover:-translate-y-1 hover:border-teal-400/60 hover:bg-slate-50 dark:hover:bg-white/10"
            >
              <div className="absolute inset-0 bg-linear-to-br from-teal-400/5 via-transparent to-cyan-400/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-200">{project.description}</p>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-teal-600 dark:text-teal-200">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-teal-400/50 bg-teal-500/10 dark:bg-teal-500/10">
                    {project.tech.length}
                  </span>
                </div>
              </div>

              <div className="relative mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 px-3 py-1 text-xs font-medium text-slate-700 dark:text-slate-100 transition group-hover:border-teal-400/60 hover:bg-white/50 dark:hover:bg-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="relative mt-5 flex items-center gap-3 text-sm font-semibold text-teal-600 dark:text-teal-200">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/5 px-3 py-2 transition hover:-translate-y-0.5 hover:bg-white/50 dark:hover:bg-white/10 hover:border-teal-400"
                  >
                    GitHub
                    <span aria-hidden>-&gt;</span>
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/5 px-3 py-2 text-slate-700 dark:text-slate-100 transition hover:-translate-y-0.5 hover:border-teal-400 hover:text-teal-600 dark:hover:text-teal-100 hover:bg-white/50 dark:hover:bg-white/10"
                  >
                    Live Demo
                    <span aria-hidden>-&gt;</span>
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
