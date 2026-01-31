import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { Achievements } from "@/components/sections/Achievements";
import { GitHubSignals } from "@/components/sections/GitHubSignals";
import { Contact } from "@/components/sections/Contact";
import { ModelPipelineExplorer } from "@/components/sections/ModelPipelineExplorer";
import { TerminalPanel } from "@/components/sections/TerminalPanel";
import { AIAssistant } from "@/components/sections/AIAssistant";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Nav />
      <main className="mx-auto max-w-6xl px-6">
        <Hero />
        <About />
        <Skills />
        <ModelPipelineExplorer />
        <Projects />
        <ExperienceTimeline />
        <Achievements />
        <GitHubSignals />
        <TerminalPanel />
        <AIAssistant />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
