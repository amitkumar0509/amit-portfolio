import { SectionHeader } from "@/components/common/SectionHeader";
import { timeline } from "@/data/timeline";
import { Pill } from "@/components/common/Pill";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="scroll-mt-24 py-16">
      <SectionHeader
        eyebrow="Journey"
        title="Research + engineering progression"
        description="A timeline that blends academic depth with real-world analytics exposure."
      />
      <div className="mt-10 space-y-6">
        {timeline.map((item) => (
          <div
            key={item.id}
            className="grid gap-6 rounded-3xl border border-slate-800/80 bg-slate-950/60 p-6 md:grid-cols-[0.35fr_0.65fr]"
          >
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
                {item.period}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-slate-400">{item.subtitle}</p>
            </div>
            <div>
              <p className="text-sm text-slate-300">{item.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.signals.map((signal) => (
                  <Pill key={signal}>{signal}</Pill>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
