import Image from "next/image";

import { SectionHeader } from "@/components/common/SectionHeader";
import { achievements } from "@/data/achievements";

export function Achievements() {
  return (
    <section id="achievements" className="scroll-mt-24 py-16">
      <SectionHeader
        eyebrow="Achievements"
        title="Signals of impact"
        description="Proof points that demonstrate performance under constraints and real-world pressure."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className="rounded-3xl border border-slate-800/80 bg-slate-950/60 p-6"
          >
            {achievement.image ? (
              <div className="mb-4 overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-950/60">
                <Image
                  src={achievement.image.src}
                  alt={achievement.image.alt}
                  width={1200}
                  height={900}
                  className="h-auto w-full object-cover"
                />
              </div>
            ) : null}
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
              {achievement.year}
            </p>
            <h3 className="mt-3 text-lg font-semibold text-white">
              {achievement.title}
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              {achievement.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
