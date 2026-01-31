import type { SkillGroup } from "@/types/portfolio";

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming & Core CS",
    skills: ["Python", "SQL", "Data Structures", "Algorithms"],
    description:
      "Solid CS fundamentals with focus on efficient data processing, system thinking, and correctness-first coding.",
  },
  {
    title: "Data & Analytics",
    skills: [
      "Pandas",
      "NumPy",
      "Data Cleaning",
      "Feature Engineering",
      "Exploratory Data Analysis",
    ],
    description:
      "Structured analytics workflow: data sourcing, preprocessing, EDA, and insight generation with business context.",
  },
  {
    title: "Machine Learning & AI",
    skills: [
      "Supervised Learning",
      "Unsupervised Learning",
      "NLP",
      "Speech-to-Text (Whisper)",
      "Translation Systems",
      "Voice Cloning",
      "Model Evaluation Concepts",
      "Pipeline Design",
    ],
    description:
      "Model-centric thinking with an emphasis on measurable outcomes, reproducible pipelines, and deployment-aware design.",
  },
  {
    title: "Tools & Engineering",
    skills: [
      "Git",
      "GitHub",
      "APIs",
      "Experimentation Mindset",
      "Deployment Awareness",
    ],
    description:
      "Engineering rigor that connects data, models, and product delivery with versioned experiments and system reliability.",
  },
];
