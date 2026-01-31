"use client";

import { SectionHeader } from "@/components/common/SectionHeader";

export function AIAssistant() {
  return (
    <section id="assistant" className="scroll-mt-24 py-16">
      <SectionHeader
        eyebrow="AI Assistant"
        title="Ask about my ML projects"
        description="A placeholder for future conversational retrieval over project documentation."
      />
      <div className="mt-10 rounded-3xl border border-slate-800/80 bg-slate-950/60 p-6">
        <div className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4 text-sm text-slate-300">
          AI assistant is offline. This space will host a retrieval-augmented
          assistant for model pipelines, datasets, and experiment results.
        </div>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <input
            type="text"
            placeholder="Ask about LingoLive, models, or datasets"
            className="flex-1 rounded-full border border-slate-700/80 bg-slate-950/80 px-4 py-3 text-sm text-slate-200 placeholder:text-slate-500"
          />
          <button
            type="button"
            className="rounded-full bg-sky-400/90 px-6 py-3 text-sm font-semibold text-slate-950"
          >
            Ask
          </button>
        </div>
      </div>
    </section>
  );
}
