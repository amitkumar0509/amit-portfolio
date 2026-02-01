import { Github } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";

export function GitHubSignals() {
  return (
    <section id="github" className="scroll-mt-24 py-16">
      <SectionHeader
        eyebrow="GitHub"
        title="Code signals"
        description="Explore my source code and contributions directly on GitHub."
      />
      <div className="mt-10 flex justify-center">
        <a 
          href="https://github.com/amitkumar0509" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-4 rounded-full border border-slate-700 bg-slate-900/50 px-8 py-4 text-slate-300 transition-all hover:border-slate-500 hover:bg-slate-800 hover:text-white hover:scale-105 active:scale-95 group"
        >
          <div className="flex bg-slate-800 p-2 rounded-full border border-slate-600 group-hover:border-white/50 transition-colors">
            <Github className="h-6 w-6" />
          </div>
          <div className="text-left">
             <div className="text-sm text-slate-400 group-hover:text-slate-300">View profile</div>
             <div className="font-semibold text-white">amitkumar0509</div>
          </div>
        </a>
      </div>
    </section>
  );
}
