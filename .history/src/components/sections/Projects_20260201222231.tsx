"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Pill } from "@/components/common/Pill";
import { projects } from "@/data/projects";
import { CheckCircle2, Loader2, ChevronDown, ChevronUp, ExternalLink, FolderKanban } from "lucide-react";
import type { Project } from "@/types/portfolio";

function ProjectCard({ project }: { project: Project }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isDataAnalytics = project.id === "data-analytics";
  
  // Find the archive/repo link
  const archiveLink = project.details.find(
    (d) => d.label === "Project Archive" || d.label === "Repository"
  );

  return (
    <div className="flex flex-col justify-between rounded-3xl border border-slate-800/80 bg-slate-950/60 p-8 transition-all hover:bg-slate-900/40">
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
        <h3 className="text-xl font-semibold text-white mb-3">
          {project.name}
        </h3>
        
        <p className="text-slate-400 text-sm leading-relaxed mb-6">
          {project.summary}
        </p>

        {isDataAnalytics && (
           <div className="mb-6">
             <button
               onClick={() => setIsExpanded(!isExpanded)}
               className="flex items-center gap-2 text-sm font-medium text-sky-400 hover:text-sky-300 transition-colors"
             >
               <FolderKanban size={16} />
               {isExpanded ? "Hide Analytics Projects" : "View Analytics Projects"}
               {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
             </button>

             {isExpanded && (
               <div className="mt-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                    <h4 className="text-xs uppercase tracking-wider text-slate-500 mb-3 font-semibold">Project Archive</h4>
                    <ul className="space-y-2 mb-4">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-sky-500 flex-shrink-0" />
                          {highlight.replace("Project: ", "")}
                        </li>
                      ))}
                    </ul>
                    
                    {archiveLink && (
                      <a 
                        href={archiveLink.value}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs font-medium text-sky-400 hover:text-sky-300 transition-colors border-t border-slate-800 pt-3"
                      >
                        <ExternalLink size={14} />
                        Access Drive Folder
                      </a>
                    )}
                  </div>
               </div>
             )}
           </div>
        )}
      </div>
      
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.stack.map((tech) => (
          <Pill key={tech}>{tech}</Pill>
        ))}
      </div>
    </div>
  );
}

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
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
