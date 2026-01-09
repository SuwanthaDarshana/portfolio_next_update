"use client";

import { useEffect, useState } from "react";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  // { label: "Contact", href: "#contact" },
];

const Icon = ({ name }: { name: "menu" | "close" }) => {
  const base = "stroke-current";
  if (name === "menu") {
    return (
      <svg
        className={base}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1.5"
        aria-hidden
      >
        <path d="M4 7h16" />
        <path d="M4 12h16" />
        <path d="M4 17h16" />
      </svg>
    );
  }

  return (
    <svg
      className={base}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      aria-hidden
    >
      <path d="M6 6 18 18" />
      <path d="m6 18 12-12" />
    </svg>
  );
};

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-slate-800/60 transition-colors duration-300 ${
        isScrolled ? "bg-slate-950/85 backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <a
          href="#home"
          className="flex items-center gap-2 text-lg font-semibold text-slate-100 hover:text-teal-300 transition-colors"
          aria-label="Suwantha Darshana home"
        >
          <span className="h-3 w-3 rounded-full bg-teal-400 shadow-[0_0_12px_rgba(45,212,191,0.7)]" />
          Suwantha Darshana
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium text-slate-200 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative py-1 transition-colors hover:text-teal-300"
            >
              {item.label}
              <span className="absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 bg-teal-400 transition-transform duration-200 group-hover:scale-x-100" />
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full border border-slate-700 px-4 py-2 text-slate-100 shadow-sm transition-all hover:-translate-y-0.5 hover:border-teal-400 hover:text-teal-200 hover:shadow-[0_10px_40px_-15px_rgba(45,212,191,0.55)]"
          >
            Let&apos;s talk
          </a>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-md border border-slate-700 p-2 text-slate-100 transition hover:border-teal-400 hover:text-teal-200 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation"
          type="button"
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-slate-800/60 bg-slate-950/95 px-4 py-4 shadow-2xl md:hidden"
        >
          <div className="flex flex-col gap-4 text-sm font-medium text-slate-100">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-2 py-2 transition-colors hover:bg-slate-800/60 hover:text-teal-200"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-md border border-slate-800 px-2 py-2 text-center transition hover:border-teal-400 hover:text-teal-200"
              onClick={() => setOpen(false)}
            >
              Let&apos;s talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
