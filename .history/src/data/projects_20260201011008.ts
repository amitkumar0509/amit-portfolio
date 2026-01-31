import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    id: "uidai-hackathon",
    name: "UIDAI Hackathon – Intelligent Address Update System",
    role: "Full Stack AI Engineer",
    summary:
      "Developed for the UIDAI Hackathon, this solution addresses challenges in the Aadhaar ecosystem, specifically focusing on simplifying address updates and verification using AI-driven document analysis.",
    problem:
      "Simplifying the complex process of demographic updates while ensuring strict security and fraud prevention standards.",
    dataset: "Synthetic Aadhaar data and document samples for verification.",
    approach:
      "Implemented a secure portal that utilizes OCR and NLP to automatically extract and verify address details from uploaded documents, reducing manual verification overhead.",
    pipeline:
      "User Authentication → Document Upload → OCR Text Extraction → Cross-referencing with Input → Validity Scoring → Update Request Processing.",
    evaluation:
      "Assessed on accuracy of data extraction, processing speed, and adherence to UIDAI's security guidelines.",
    challenges:
      "Handling various document formats, ensuring data privacy, and preventing fraudulent document submissions.",
    stack: ["React", "Node.js", "Python", "OCR", "MongoDB"],
    highlights: [
      "Designed a user-friendly interface for seamless address updates.",
      "Integrated AI-based document verification to reduce rejection rates.",
      "Ensured compliance with data privacy and security standards.",
    ],
    details: [
      { label: "Event", value: "UIDAI Hackathon" },
      { label: "Focus", value: "Digital Identity & Security" },
      {
        label: "Repository",
        value: "https://github.com/amitkumar0509/UIDAI-HACKATHON",
      },
    ],
  },
  {
    id: "ugc-regulation",
    name: "UGC & AICTE Regulation Automation Platform",
    role: " AI Engineer",
    summary:
      "A comprehensive automated platform for verifying educational institution compliance against UGC & AICTE regulations. The system digitizes the approval process by using AI to analyze uploaded documents, verify infrastructure claims via computer vision, and validate faculty requirements through automated text parsing.",
    problem:
      "The manual accreditation process for thousands of technical institutions is labor-intensive, slow, and prone to human error and inconsistency.",
    dataset:
      "Institutional compliance documents (PDFs), infrastructure blueprints, and faculty records.",
    approach:
      "Designed a microservices architecture separating the Node.js application logic from the Python AI processing unit. Utilized OCR for text extraction and YOLO models for verifying infrastructure images embedded in documents.",
    pipeline:
      "Document Upload → PDF Parsing & Text Extraction → YOLO Object Detection (Infrastructure) → Rule-Engine Validation → Compliance Report Generation.",
    evaluation:
      "Tested against standard application formats to ensure high accuracy in extracting key compliance metrics (faculty count, land area, lab equipment).",
    challenges:
      "Processing varying PDF formats, integrating real-time Python inference with Node.js backend, and ensuring accurate extraction from low-quality scans.",
    stack: [
      "React",
      "Node.js",
      "Python",
      "Flask",
      "YOLO",
      "MongoDB",
      "OCR",
      "FastAPI",
      "Docker",
      "Git",
      "GitHub",
    ],
    highlights: [
      "Built a dual-stack architecture (Node/Express + Python/Flask).",
      "Implemented YOLOv8 for automated infrastructure verification.",
      "Developed a rule engine to cross-check claims against AICTE norms.",
      "Streamlined the approval workflow with real-time status tracking.",
    ],
    details: [
      { label: "Role", value: "Full Stack & AI Core" },
      { label: "Target", value: "Regulatory Automation" },
      { label: "Tech", value: "Computer Vision + NLP" },
      {
        label: "Repository",
        value: "https://github.com/amitkumar0509/UGC-Aicte-approval-",
      },
    ],
  },
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
      "My data analytics projects focus on extracting meaningful insights from real-world datasets using structured analysis, statistical reasoning, and clear visualizations. The work emphasizes end-to-end analytics workflows—from data understanding and preprocessing to visualization and insight generation—aligned with industry decision-making scenarios.",
    problem:
      "Transform raw, inconsistent datasets into decision-ready insights that explain trends, behavior, and operational bottlenecks.",
    dataset:
      "Multi-source datasets including public CSVs, transactional logs, app usage data, and domain-specific records.",
    approach:
      "Built repeatable cleaning + preprocessing workflows, ran EDA to surface patterns, engineered features, and delivered narrative insights with targeted visualizations.",
    pipeline:
      "Data collection & understanding → Data cleaning & preprocessing → Exploratory data analysis (EDA) → Feature engineering → Insight extraction → Visualization & reporting.",
    evaluation:
      "Validated insights through consistency checks, trend validation, and stakeholder-aligned KPIs to ensure actionable outcomes.",
    challenges:
      "Handling missing values, noisy inputs, schema drift, and aligning analysis outputs to real business questions.",
    stack: ["Python", "Pandas", "NumPy", "SQL", "Matplotlib", "Seaborn"],
    highlights: [
      "Project: videogame",
      "Project: UBER",
      "Project: retail_sales",
      "Project: realstate",
      "Project: PHONEPE",
      "Project: ola",
      "Project: IPLK",
      "Project: Instagram_sugar_cosmetic",
      "Project: FOOD WASTE MANAGEMENT",
      "Project: flight analysis",
      "Project: bird_monitoring",
      "Project: Bikedekho",
    ],
    details: [
      { label: "Input Types", value: "CSV, API data, scraped HTML" },
      { label: "Focus", value: "End-to-end analytics workflows" },
      { label: "Outputs", value: "EDA reports, dashboards, KPI insights" },
      {
        label: "Project Archive",
        value:
          "https://drive.google.com/drive/folders/1JYek9jk-A4R9f5nql0mByXZQw25kCNia?usp=sharing",
      },
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
