import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    id: "lingolive",
    name: "LingoLive – Real-Time Multilingual Voice Conversation with Voice Cloning",
    role: "AI Specialist",
    summary:
      "A low-latency conversational system that translates live speech, preserves speaker identity, and streams cloned audio in real time.",
    problem:
      "Enable natural, low-latency multilingual conversations that preserve speaker identity without breaking conversational flow.",
    dataset:
      "Live microphone audio streams, aligned parallel text, and speaker reference clips for voice identity preservation.",
    approach:
      "Streaming speech-to-text with Whisper, dynamic translation routing, and speaker-conditioned voice synthesis with adaptive buffering.",
    pipeline:
      "Audio capture → Whisper streaming inference → Translation engine → Prosody alignment → Voice cloning synthesis → Streaming output.",
    evaluation:
      "Latency budget under 900ms for short utterances, intelligibility tested with bilingual listeners, and word error tracking for STT.",
    challenges:
      "Balancing accuracy vs. latency, managing multi-stage buffering, and ensuring stable voice identity under varying audio quality.",
    stack: [
      "Python",
      "Whisper",
      "Translation APIs",
      "Voice Synthesis",
      "WebRTC",
      "Node.js",
    ],
    highlights: [
      "Designed a resilient streaming pipeline with adaptive chunking.",
      "Implemented fallback translation routing for unstable network conditions.",
      "Optimized concurrency to reduce end-to-end latency by 32%.",
    ],
    details: [
      { label: "Inference Mode", value: "Streaming + batch hybrid" },
      { label: "Latency Target", value: "< 900ms per short utterance" },
      { label: "Speaker Identity", value: "Reference embedding + prosody alignment" },
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
