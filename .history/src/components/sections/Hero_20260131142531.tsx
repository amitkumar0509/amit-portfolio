"use client";

import { motion } from "framer-motion";
import { NeuralScene } from "@/components/three/NeuralScene";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.18),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(99,102,241,0.2),transparent_40%)]" />
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-sky-300/70">
            AI lab portfolio
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
            AI &amp; Machine Learning Engineer | Real-Time Intelligent Systems
          </h1>
          <p className="max-w-xl text-lg text-slate-300">
            Designing ML pipelines, data-driven systems, and scalable AI
            applications with production-grade engineering discipline.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-sky-400/90 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              className="rounded-full border border-slate-700/80 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500"
            >
              Resume
            </a>
            <a
              href="#contact"
              className="rounded-full border border-slate-700/80 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500"
            >
              Contact
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                label: "ML pipelines",
                detail: "Streaming + batch hybrid workflows",
              },
              {
                label: "Data-driven systems",
                detail: "Metrics-first experimentation",
              },
              {
                label: "Scalable AI apps",
                detail: "Latency-aware deployment mindset",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-4"
              >
                <p className="text-sm font-semibold text-white">{item.label}</p>
                <p className="text-xs text-slate-400">{item.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          className="flex items-center"
        >
          <NeuralScene />
        </motion.div>
      </div>
    </section>
  );
}
