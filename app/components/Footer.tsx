type FooterProps = {
  email: string;
  github: string;
  linkedin: string;
};

export function Footer({ email, github, linkedin }: FooterProps) {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-800/70 bg-slate-950/60 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 text-sm text-slate-400 md:flex-row md:items-center md:justify-between md:px-6">
        <p className="text-slate-300">
          © {year} Suwantha Darshana. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-200">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-teal-200"
            aria-label="GitHub"
          >
            GitHub
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-teal-200"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${email}`}
            className="transition hover:text-teal-200"
            aria-label="Email"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
