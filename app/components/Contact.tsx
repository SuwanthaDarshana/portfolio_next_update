"use client";

import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

type FormState = { name: string; email: string; message: string };
type ContactProps = { email: string; github: string; linkedin: string };

export function Contact({ email, github, linkedin }: ContactProps) {
  const contactLinks = [
    {
      Icon: FaEnvelope,
      label: "Email",
      value: email,
      href: `mailto:${email}`,
    },
    {
      Icon: FaGithub,
      label: "GitHub",
      value: `@${github.split("/").pop()}`,
      href: github,
    },
    {
      Icon: FaLinkedin,
      label: "LinkedIn",
      value: linkedin.split("/in/")[1]?.replace(/\/$/, "") ?? "LinkedIn",
      href: linkedin,
    },
  ];
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [error, setError] = useState<string>("");
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(false);
    setError("");

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    const emailRegex = /[^\s@]+@[^\s@]+\.[^\s@]+/;
    if (!emailRegex.test(form.email)) {
      setError("Enter a valid email address.");
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setError("Email service is not configured. Please add EmailJS keys to .env.local.");
      return;
    }

    setSending(true);
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          reply_to: form.email,
          message: form.message,
          to_email: email,
        },
        { publicKey }
      );
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err: unknown) {
      const message =
        typeof err === "object" && err && "text" in err
          ? String((err as { text?: unknown }).text)
          : "Please try again.";
      setError(`Sorry, something went wrong. ${message}`);
      console.error("EmailJS error", err);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-10">
        {/* Section header */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-baseline sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-200">Contact</p>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">Let&apos;s build together</h2>
          </div>
          <div className="h-px flex-1 bg-linear-to-r from-teal-500/60 to-transparent sm:ml-6" />
        </div>

        <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-5">
            <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
              Open to new opportunities, collaborations, and interesting projects. Feel free to reach out — I&apos;ll get back to you soon.
            </p>

            <div className="space-y-3 pt-1">
              {contactLinks.map(({ Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
                  className="group flex items-center gap-4 rounded-xl border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/5 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-teal-400/50"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-teal-500/30 bg-teal-500/10 text-teal-600 dark:text-teal-400 transition-colors group-hover:border-teal-400/60 group-hover:bg-teal-500/15">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">{label}</p>
                    <p className="truncate text-sm font-medium text-slate-700 dark:text-slate-200">{value}</p>
                  </div>
                  <svg className="h-3.5 w-3.5 shrink-0 text-slate-400 transition-colors group-hover:text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-md p-6 shadow-2xl lg:col-span-3"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-100">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                  className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-4 py-3 text-sm text-slate-900 dark:text-slate-100 outline-none transition focus:border-teal-400 focus:bg-white/50 dark:focus:bg-white/10 focus:ring-2 focus:ring-teal-500/30"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-100">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                  className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-4 py-3 text-sm text-slate-900 dark:text-slate-100 outline-none transition focus:border-teal-400 focus:bg-white/50 dark:focus:bg-white/10 focus:ring-2 focus:ring-teal-500/30"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-100">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                className="min-h-40 w-full rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-4 py-3 text-sm text-slate-900 dark:text-slate-100 outline-none transition focus:border-teal-400 focus:bg-white/50 dark:focus:bg-white/10 focus:ring-2 focus:ring-teal-500/30"
                placeholder="Tell me about your project or idea."
                required
              />
            </div>

            {error && <p className="text-sm text-rose-500">{error}</p>}
            {sent && (
              <p className="text-sm text-teal-600 dark:text-teal-400">Thanks for reaching out! Your message has been sent.</p>
            )}

            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center gap-2 rounded-full bg-teal-400 px-7 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-teal-500/30 transition-all hover:-translate-y-0.5 hover:bg-teal-300 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {sending ? (
                <>
                  <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden>
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
