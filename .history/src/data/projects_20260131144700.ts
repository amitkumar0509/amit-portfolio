import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    id: "lingolive",
    name: "LingoLive – Real-Time Multilingual Voice Conversation with Voice Cloning",
    role: "AI Specialist",
    summary:
      "LingoLive is a real-time AI-powered voice communication system that enables multilingual conversations while preserving the original speaker’s voice identity. It captures live speech, transcribes with Whisper, translates across languages, and synthesizes speech that retains speaker tone and style, delivering natural conversational flow.",
    problem:
      "Enable two or more users to converse across languages in real time without losing speaker identity or conversational continuity.",
    dataset:
      "Live microphone audio streams, multilingual speech samples, and speaker reference clips for voice identity preservation.",
    approach:
      "Built a low-latency pipeline that streams audio, transcribes with Whisper, performs NLP translation, and synthesizes voice-cloned speech with synchronized playback.",
    pipeline:
      "Speech capture & streaming → Whisper STT (streaming) → NLP translation → Voice cloning & synthesis → Audio playback & synchronization.",
    evaluation:
      "Measured end-to-end latency, transcription accuracy, translation quality, and perceptual voice similarity to maintain natural dialogue.",
    challenges:
      "Latency management, speaker identity preservation, coordinating asynchronous STT/translation/TTS stages, and maintaining audio clarity under noisy conditions.",
    stack: [
      "Python",
      "Whisper",
      "NLP Models",
      "Voice Cloning",
      "Speech Processing",
      "Real-Time Systems",
      "Git",
      "GitHub",
    ],
    highlights: [
      "Designed the complete AI pipeline from capture to playback.",
      "Integrated Whisper for multilingual streaming transcription.",
      "Optimized real-time orchestration across STT → Translation → TTS.",
      "Handled noise, silence detection, and speech segmentation for clarity.",
    ],
    details: [
      { label: "Role", value: "AI Specialist" },
      { label: "Focus", value: "Low-latency real-time AI orchestration" },
      { label: "Impact", value: "End-to-end multilingual voice conversations" },
    ],
  },
  {
    id: "data-analytics",
    name: "Applied Data Analytics – Insight Extraction & Decision Support",
    role: "Data Analytics Engineer",
    summary:
      "A collection of analytics projects focused on cleaning noisy datasets, generating actionable insights, and visualizing outcomes.",
    problem:
      "Transform unstructured and inconsistent operational datasets into a reliable analytics layer for decision making.",
    dataset:
      "Public datasets, scraped operational data, and structured CSV pipelines sourced from business-style problems.",
    approach:
      "Automated cleaning and normalization, feature enrichment, and KPI extraction aligned to stakeholder questions.",
    pipeline:
      "Data ingestion → Cleaning & validation → Feature engineering → Visualization dashboards → Insight report.",
    evaluation:
      "Improved reporting accuracy by 22% and reduced manual cleaning time by 60% via automated checks.",
    challenges:
      "Handling missing values, reconciling inconsistent schemas, and maintaining reproducible pipelines across data sources.",
    stack: ["Python", "Pandas", "NumPy", "SQL", "Matplotlib", "Seaborn"],
    highlights: [
      "Built reusable cleaning utilities with schema validation.",
      "Implemented EDA workflows tailored to business questions.",
      "Delivered narrative insight summaries with actionable recommendations.",
    ],
    details: [
      { label: "Input Types", value: "CSV, API data, scraped HTML" },
      { label: "Focus", value: "Data quality + insight generation" },
      { label: "Outputs", value: "Dashboards, KPI reports" },
    ],
  },
  {
    id: "sih",
    name: "Smart India Hackathon – AI-enabled Solution Design",
    role: "Lead ML Contributor",
    summary:
      "A problem-driven solution engineered under constraints to deliver an AI system with measurable social impact.",
    problem:
      "Addressed a time-sensitive public-sector challenge with strict constraints on data availability and deployment resources.",
    dataset:
      "Government-provided datasets and domain-specific signals collected during the hackathon sprint.",
    approach:
      "Rapid prototyping of an ML-assisted decision engine with robust preprocessing and explainability focused outputs.",
    pipeline:
      "Problem scoping → Data alignment → Model prototyping → Validation → Deployment strategy.",
    evaluation:
      "Judged on impact, feasibility, and technical depth; secured winner status for solution clarity and execution.",
    challenges:
      "Time-boxed experimentation, limited domain data, and aligning multidisciplinary stakeholders under pressure.",
    stack: ["Python", "Scikit-learn", "FastAPI", "Streamlit", "Git"],
    highlights: [
      "Defined measurable success metrics under strict time constraints.",
      "Delivered a working prototype with explainable model outputs.",
      "Led team collaboration for data sourcing and system integration.",
    ],
    details: [
      { label: "Constraint", value: "72-hour build window" },
      { label: "Impact", value: "Policy-ready insight generation" },
      { label: "Team", value: "Cross-functional collaboration" },
    ],
  },
];
