import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

type FooterProps = {
  email: string;
  github: string;
  linkedin: string;
};

export function Footer({ email, github, linkedin }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/70 bg-white/50 dark:bg-slate-950/60 py-8 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-center text-sm text-slate-600 dark:text-slate-400 md:flex-row md:justify-between md:text-left md:px-6">
        <p className="text-slate-700 dark:text-slate-300">
          © {year} Suwantha Darshana. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 transition-all hover:border-teal-500/50 hover:text-teal-600 dark:hover:text-teal-400 hover:-translate-y-0.5"
          >
            <FaGithub className="h-4 w-4" />
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 transition-all hover:border-teal-500/50 hover:text-teal-600 dark:hover:text-teal-400 hover:-translate-y-0.5"
          >
            <FaLinkedin className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${email}`}
            aria-label="Email"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 transition-all hover:border-teal-500/50 hover:text-teal-600 dark:hover:text-teal-400 hover:-translate-y-0.5"
          >
            <FaEnvelope className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
