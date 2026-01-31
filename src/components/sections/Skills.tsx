"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SectionHeader } from "@/components/common/SectionHeader";
import { skillGroups } from "@/data/skills";
import { Pill } from "@/components/common/Pill";

export function Skills() {
  const flowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!flowRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".skill-node",
        { opacity: 0.4, y: 8 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: "power2.out" }
      );
      gsap.to(".skill-flow", {
        backgroundPositionX: "200%",
        duration: 8,
        repeat: -1,
        ease: "none",
      });
    }, flowRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" className="scroll-mt-24 py-16">
      <div className="grid gap-12 lg:grid-cols-[0.6fr_1fr]">
        <SectionHeader
          eyebrow="Skills"
          title="ML-centric capability map"
          description="Organized around how models are built, evaluated, and delivered in production environments."
        />
        <div ref={flowRef} className="space-y-6">
          <div className="skill-flow rounded-3xl border border-slate-800/80 bg-[linear-gradient(90deg,rgba(56,189,248,0.08),rgba(59,130,246,0.02),rgba(56,189,248,0.08))] bg-[length:200%_100%] p-8">
            <p className="text-sm font-semibold text-slate-100">
              Training → Evaluation → Deployment pipeline
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {["Data", "Models", "Inference"].map((stage) => (
                <div
                  key={stage}
                  className="skill-node rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    {stage}
                  </p>
                  <p className="mt-2 text-sm text-slate-200">
                    {stage === "Data"
                      ? "Cleaning, feature design, analytics validation"
                      : stage === "Models"
                        ? "Training loops, metrics, evaluation harness"
                        : "Latency-aware deployment, monitoring, feedback"}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-3xl border border-slate-800/80 bg-slate-950/60 p-6"
              >
                <p className="text-sm font-semibold text-white">{group.title}</p>
                <p className="mt-2 text-sm text-slate-400">{group.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Pill key={skill}>{skill}</Pill>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
