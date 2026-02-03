import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

type FooterProps = {
  email: string;
  github: string;
  linkedin: string;
  twitter?: string;
};

export function Footer({ email, github, linkedin }: FooterProps) {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/70 bg-white/50 dark:bg-slate-950/60 py-8 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-center text-sm text-slate-600 dark:text-slate-400 md:flex-row md:justify-between md:text-left md:px-6">
        <p className="text-slate-700 dark:text-slate-300">
          © {year} Suwantha Darshana. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-slate-700 dark:text-slate-200 md:justify-end">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 transition hover:text-teal-600 dark:hover:text-teal-200"
            aria-label="GitHub"
          >
            <FaGithub className="text-xl" />
            <span>GitHub</span>
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 transition hover:text-teal-600 dark:hover:text-teal-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-xl" />
            <span>LinkedIn</span>
          </a>
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-2 transition hover:text-teal-600 dark:hover:text-teal-200"
            aria-label="Email"
          >
            <FaEnvelope className="text-xl" />
            <span>Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
