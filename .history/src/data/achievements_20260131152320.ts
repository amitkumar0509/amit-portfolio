import type { Achievement } from "@/types/portfolio";

export const achievements: Achievement[] = [
  {
    id: "sih-winner",
    title: "Smart India Hackathon Winner",
    description:
      "Recognized for delivering a high-impact AI solution under tight constraints with clear engineering trade-offs.",
    year: "2024",
    image: {
      src: "/images/sih-winner.png",
      alt: "Smart India Hackathon winner ceremony group photo",
    },
  },
  {
    id: "hackathons",
    title: "Hackathon Finalist & Rapid Prototyping",
    description:
      "Multiple hackathon finals with focus on translating research ideas into deployable prototypes.",
    year: "2023 – 2024",
  },
  {
    id: "certs",
    title: "ML & Data Analytics Certifications",
    description:
      "Targeted certifications focused on model evaluation, data analytics, and ML pipeline design.",
    year: "2023",
  },
];
