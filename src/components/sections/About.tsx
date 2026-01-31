import { SectionHeader } from "@/components/common/SectionHeader";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-16">
      <div className="rounded-3xl border border-slate-800/80 bg-slate-950/60 p-10">
        <SectionHeader
          eyebrow="About"
          title="Engineering-first ML practitioner"
          description="I build real-time ML systems with a strong foundation in core CS, data analytics, and deployment-aware engineering."
        />
        <div className="mt-8 grid gap-6 text-sm text-slate-300 lg:grid-cols-2">
          <p>
            Strong computer science fundamentals anchor every system I build:
            reliable data structures, algorithmic efficiency, and careful
            complexity analysis. This foundation helps me ship ML workflows that
            are maintainable, testable, and production-ready.
          </p>
          <p>
            My experience spans hackathon problem-solving and internship exposure
            to real datasets. I focus on clean preprocessing, robust pipelines,
            and measurable outcomes rather than buzzwords. The result is ML
            systems that are explainable, fast, and deployable under real-world
            constraints.
          </p>
        </div>
      </div>
    </section>
  );
}
