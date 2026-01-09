"use client";

import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type ContactProps = {
  email: string;
};

export function Contact({ email }: ContactProps) {
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
        {
          publicKey,
        }
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
        <div className="flex flex-col gap-4 sm:flex-row sm:items-baseline sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-200">Contact</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Let&apos;s build together</h2>
          </div>
          <div className="h-px flex-1 bg-linear-to-r from-teal-500/60 to-transparent sm:ml-6" />
        </div>

        <div className="mt-8">
          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl border border-slate-800/70 bg-slate-900/40 p-6 shadow-lg shadow-black/30"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-100">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-teal-400 focus:ring-2 focus:ring-teal-500/30"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-100">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-teal-400 focus:ring-2 focus:ring-teal-500/30"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-slate-100">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                className="min-h-40 w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-teal-400 focus:ring-2 focus:ring-teal-500/30"
                placeholder="Tell me about your project or idea."
                required
              />
            </div>

            {error && <p className="text-sm text-rose-300">{error}</p>}
            {sent && (
              <p className="text-sm text-teal-200">Thanks for reaching out! Your message has been sent.</p>
            )}

            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center justify-center rounded-full bg-teal-400 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-teal-500/30 transition hover:-translate-y-0.5 hover:bg-teal-300 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
