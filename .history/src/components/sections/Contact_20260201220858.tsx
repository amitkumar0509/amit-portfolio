"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { SectionHeader } from "@/components/common/SectionHeader";

type ContactState = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<ContactState>("idle");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const formData = new FormData(event.currentTarget);
    
    // Replace these with your actual EmailJS credentials
    // It's recommended to use environment variables for these values
    const SERVICE_ID = "service_3g8nawm";
    const TEMPLATE_ID = "template_25g78kg";
    const PUBLIC_KEY = "S0ngTS5E7aWva8UNY";

    const templateParams = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      company: String(formData.get("company") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      setStatus("success");
      setMessage("Message sent. I will get back to you shortly.");
      event.currentTarget.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      setMessage("Unable to send right now. Please try again soon.");
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 py-16">
      <SectionHeader
        eyebrow="Contact"
        title="Open to AI/ML internships & roles"
        description="Reach out for research collaborations, ML engineering roles, or real-time AI systems work."
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-[0.6fr_0.4fr]">
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-slate-800/80 bg-slate-950/60 p-6"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <label className="text-xs uppercase tracking-[0.3em] text-slate-500">
              Name
              <input
                name="name"
                required
                className="mt-2 w-full rounded-2xl border border-slate-700/80 bg-slate-950/80 px-4 py-3 text-sm text-slate-100"
              />
            </label>
            <label className="text-xs uppercase tracking-[0.3em] text-slate-500">
              Email
              <input
                type="email"
                name="email"
                required
                className="mt-2 w-full rounded-2xl border border-slate-700/80 bg-slate-950/80 px-4 py-3 text-sm text-slate-100"
              />
            </label>
          </div>
          <label className="mt-4 block text-xs uppercase tracking-[0.3em] text-slate-500">
            Company / Team
            <input
              name="company"
              className="mt-2 w-full rounded-2xl border border-slate-700/80 bg-slate-950/80 px-4 py-3 text-sm text-slate-100"
            />
          </label>
          <label className="mt-4 block text-xs uppercase tracking-[0.3em] text-slate-500">
            Message
            <textarea
              name="message"
              rows={4}
              required
              className="mt-2 w-full rounded-2xl border border-slate-700/80 bg-slate-950/80 px-4 py-3 text-sm text-slate-100"
            />
          </label>
          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-6 w-full rounded-full bg-sky-400/90 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "sending" ? "Sending..." : "Send message"}
          </button>
          {message ? (
            <p
              className={`mt-3 text-sm ${
                status === "success" ? "text-emerald-300" : "text-rose-300"
              }`}
            >
              {message}
            </p>
          ) : null}
        </form>
        <div className="space-y-4">
          <div className="rounded-3xl border border-slate-800/80 bg-slate-950/60 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
              Direct
            </p>
            <div className="mt-3 mb-4 space-y-1">
              <a
                href="mailto:kumaramit01977@gmail.com"
                className="block text-sm font-medium text-slate-200 transition-colors hover:text-sky-400"
              >
                kumaramit01977@gmail.com
              </a>
              <a
                href="tel:+918700562901"
                className="block text-sm font-medium text-slate-200 transition-colors hover:text-sky-400"
              >
                +91 8700562901
              </a>
            </div>
            <p className="mt-3 text-sm text-slate-300">
              LinkedIn and GitHub available below. Resume link in hero section.
            </p>
            <div className="mt-4 flex flex-col gap-2 text-sm text-slate-200">
              <a
                href="https://www.linkedin.com/in/amitkumar0509/"
                className="rounded-full border border-slate-700/80 px-4 py-2 text-center hover:border-slate-500"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/amitkumar0509"
                className="rounded-full border border-slate-700/80 px-4 py-2 text-center hover:border-slate-500"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-800/80 bg-slate-950/60 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
              Availability
            </p>
            <p className="mt-3 text-sm text-slate-300">
              Open to AI/ML internships & roles. Interested in real-time AI,
              data platforms, and research engineering collaborations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
