"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/common/SectionHeader";

const stages = [
  {
    id: "ingestion",
    title: "Data Ingestion",
    detail:
      "Streaming + batch data collection with validation gates and schema enforcement.",
  },
  {
    id: "feature",
    title: "Feature Engineering",
    detail:
      "Feature store style enrichment, normalization, and leakage detection.",
  },
  {
    id: "training",
    title: "Training Loop",
    detail:
      "Experiment tracking, hyperparameter sweeps, and evaluation checkpoints.",
  },
  {
    id: "evaluation",
    title: "Evaluation",
    detail:
      "Accuracy + latency budgets, WER/MOS measurements, and fairness checks.",
  },
  {
    id: "deployment",
    title: "Deployment",
    detail:
      "Real-time inference, monitoring, and feedback-driven model iteration.",
  },
];

export function ModelPipelineExplorer() {
  const [active, setActive] = useState(stages[0]);

  return (
    <section id="pipeline" className="scroll-mt-24 py-16">
      <SectionHeader
        eyebrow="Model Pipeline Explorer"
        title="Interactive ML lifecycle"
        description="Explore the stages of a production ML pipeline with clear engineering checkpoints."
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-[0.45fr_0.55fr]">
        <div className="space-y-3">
          {stages.map((stage) => (
            <button
              key={stage.id}
              type="button"
              onClick={() => setActive(stage)}
              className={`w-full rounded-2xl border px-5 py-4 text-left transition ${
                active.id === stage.id
                  ? "border-sky-400/80 bg-slate-950/80 text-white"
                  : "border-slate-800/80 bg-slate-950/60 text-slate-300 hover:border-slate-600"
              }`}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                Stage
              </p>
              <p className="mt-1 text-base font-semibold">{stage.title}</p>
            </button>
          ))}
        </div>
        <div className="rounded-3xl border border-slate-800/80 bg-slate-950/60 p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
            Focus
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-white">
            {active.title}
          </h3>
          <p className="mt-3 text-sm text-slate-300">{active.detail}</p>
          <div className="mt-6 rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4 text-sm text-slate-400">
            <p>
              Output: {active.title} artifacts are versioned, validated, and
              ready for the next stage of the pipeline.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
