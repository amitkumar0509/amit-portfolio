import { SectionHeader } from "@/components/common/SectionHeader";
import { Pill } from "@/components/common/Pill";
import { projects } from "@/data/projects";

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
