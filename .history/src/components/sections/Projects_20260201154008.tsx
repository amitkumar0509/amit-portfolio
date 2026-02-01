import { SectionHeader } from "@/components/common/SectionHeader";
import { Pill } from "@/components/common/Pill";
import { projects } from "@/data/projects";
import { CheckCircle2, Loader2 } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-16">
      <SectionHeader
        eyebrow="Projects"
        title="Production-minded AI systems"
        description="Deep dives into real-time AI pipelines, data analytics workflows, and impact-driven ML solutions."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col justify-between rounded-3xl border border-slate-800/80 bg-slate-950/60 p-8 transition-all hover:bg-slate-900/40"
          >
            <div>
              <div className="mb-4">
                {project.id === "lingolive" ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-xs font-medium text-sky-300">
                    <Loader2 size={12} className="animate-spin" />
                    Ongoing
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                    <CheckCircle2 size={12} />
                    Completed
                  </span>
                )}
              </div>
              <h3 className="text-xl font-semibold text-white mb-6">
                {project.name}
              </h3>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.stack.map((tech) => (
                <Pill key={tech}>{tech}</Pill>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
