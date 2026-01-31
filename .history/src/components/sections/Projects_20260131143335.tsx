import { SectionHeader } from "@/components/common/SectionHeader";
import { Pill } from "@/components/common/Pill";
import { projects } from "@/data/projects";

function LingoLiveDiagram() {
  return (
    <svg
      viewBox="0 0 640 220"
      className="h-40 w-full rounded-2xl border border-slate-800/80 bg-slate-950/70"
      aria-label="LingoLive system architecture"
    >
      <defs>
        <linearGradient id="flow" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
      </defs>
      <rect x="20" y="40" width="130" height="50" rx="14" fill="#0f172a" />
      <text x="35" y="70" fill="#e2e8f0" fontSize="12">
        Audio Stream
      </text>
      <rect x="190" y="20" width="130" height="50" rx="14" fill="#0f172a" />
      <text x="215" y="50" fill="#e2e8f0" fontSize="12">
        Whisper STT
      </text>
      <rect x="190" y="100" width="130" height="50" rx="14" fill="#0f172a" />
      <text x="205" y="130" fill="#e2e8f0" fontSize="12">
        Translation
      </text>
      <rect x="360" y="60" width="130" height="50" rx="14" fill="#0f172a" />
      <text x="380" y="90" fill="#e2e8f0" fontSize="12">
        Voice Clone
      </text>
      <rect x="520" y="40" width="100" height="50" rx="14" fill="#0f172a" />
      <text x="540" y="70" fill="#e2e8f0" fontSize="12">
        Output
      </text>
      <path d="M150 65 L190 45" stroke="url(#flow)" strokeWidth="2" />
      <path d="M150 65 L190 125" stroke="url(#flow)" strokeWidth="2" />
      <path d="M320 45 L360 75" stroke="url(#flow)" strokeWidth="2" />
      <path d="M320 125 L360 85" stroke="url(#flow)" strokeWidth="2" />
      <path d="M490 85 L520 65" stroke="url(#flow)" strokeWidth="2" />
    </svg>
  );
}

function AnalyticsDiagram() {
  return (
    <svg
      viewBox="0 0 640 200"
      className="h-36 w-full rounded-2xl border border-slate-800/80 bg-slate-950/70"
      aria-label="Analytics pipeline"
    >
      <rect x="20" y="70" width="120" height="40" rx="12" fill="#0f172a" />
      <rect x="180" y="70" width="120" height="40" rx="12" fill="#0f172a" />
      <rect x="340" y="70" width="120" height="40" rx="12" fill="#0f172a" />
      <rect x="500" y="70" width="120" height="40" rx="12" fill="#0f172a" />
      <text x="35" y="95" fill="#e2e8f0" fontSize="12">
        Ingestion
      </text>
      <text x="200" y="95" fill="#e2e8f0" fontSize="12">
        Cleaning
      </text>
      <text x="360" y="95" fill="#e2e8f0" fontSize="12">
        Features
      </text>
      <text x="520" y="95" fill="#e2e8f0" fontSize="12">
        Insights
      </text>
      <path d="M140 90 L180 90" stroke="#38bdf8" strokeWidth="2" />
      <path d="M300 90 L340 90" stroke="#38bdf8" strokeWidth="2" />
      <path d="M460 90 L500 90" stroke="#38bdf8" strokeWidth="2" />
    </svg>
  );
}

function HackathonDiagram() {
  return (
    <svg
      viewBox="0 0 640 200"
      className="h-36 w-full rounded-2xl border border-slate-800/80 bg-slate-950/70"
      aria-label="Hackathon solution lifecycle"
    >
      <circle cx="120" cy="100" r="40" fill="#0f172a" />
      <circle cx="320" cy="60" r="40" fill="#0f172a" />
      <circle cx="520" cy="120" r="40" fill="#0f172a" />
      <text x="90" y="105" fill="#e2e8f0" fontSize="12">
        Scope
      </text>
      <text x="295" y="65" fill="#e2e8f0" fontSize="12">
        Prototype
      </text>
      <text x="495" y="125" fill="#e2e8f0" fontSize="12">
        Deploy
      </text>
      <path d="M160 100 L280 70" stroke="#6366f1" strokeWidth="2" />
      <path d="M360 70 L480 110" stroke="#38bdf8" strokeWidth="2" />
    </svg>
  );
}

const diagramMap = {
  lingolive: <LingoLiveDiagram />,
  "data-analytics": <AnalyticsDiagram />,
  sih: <HackathonDiagram />,
};

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-16">
      <SectionHeader
        eyebrow="Projects"
        title="Production-minded AI systems"
        description="Deep dives into real-time AI pipelines, data analytics workflows, and impact-driven ML solutions."
      />
      <div className="mt-10 space-y-6">
        {projects.map((project) => (
          <details
            key={project.id}
            className="group rounded-3xl border border-slate-800/80 bg-slate-950/60 p-8"
            open={project.id === "lingolive"}
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-sky-300/70">
                  {project.role}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-white">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm text-slate-400">{project.summary}</p>
              </div>
              <span className="rounded-full border border-slate-700/80 px-4 py-2 text-xs text-slate-300 transition group-open:border-sky-400/70">
                Expand
              </span>
            </summary>
            <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="space-y-4 text-sm text-slate-300">
                <p>
                  <span className="font-semibold text-white">Problem:</span>{" "}
                  {project.problem}
                </p>
                <p>
                  <span className="font-semibold text-white">Dataset:</span>{" "}
                  {project.dataset}
                </p>
                <p>
                  <span className="font-semibold text-white">Approach:</span>{" "}
                  {project.approach}
                </p>
                <p>
                  <span className="font-semibold text-white">Pipeline:</span>{" "}
                  {project.pipeline}
                </p>
                <p>
                  <span className="font-semibold text-white">Evaluation:</span>{" "}
                  {project.evaluation}
                </p>
                <p>
                  <span className="font-semibold text-white">Challenges:</span>{" "}
                  {project.challenges}
                </p>
              </div>
              <div className="space-y-4">
                {diagramMap[project.id as keyof typeof diagramMap]}
                <div className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                    Engineering notes
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-300">
                    {project.highlights.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
                  {project.id === "lingolive" ? (
                    <pre className="rounded-2xl border border-slate-800/80 bg-black/40 p-4 text-xs text-slate-200">
  {`stream = capture_audio()
  chunks = whisper.stream(stream, window=320)
  translated = translate.route(chunks, target_lang)
  audio_out = voice.clone(translated, speaker_ref)
  emit(audio_out)`}
                    </pre>
                  ) : null}
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Pill key={tech}>{tech}</Pill>
                  ))}
                </div>
                <div className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                    Metrics
                  </p>
                  <div className="mt-3 space-y-2 text-sm text-slate-300">
                    {project.details.map((detail) => (
                      <div
                        key={detail.label}
                        className="flex items-center justify-between"
                      >
                        <span>{detail.label}</span>
                        <span className="text-slate-200">{detail.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
