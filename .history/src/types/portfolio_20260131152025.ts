export type SkillGroup = {
  title: string;
  skills: string[];
  description: string;
};

export type ProjectDetail = {
  label: string;
  value: string;
};

export type Project = {
  id: string;
  name: string;
  role: string;
  summary: string;
  problem: string;
  dataset: string;
  approach: string;
  pipeline: string;
  evaluation: string;
  challenges: string;
  stack: string[];
  highlights: string[];
  details: ProjectDetail[];
};

export type TimelineItem = {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  description: string;
  signals: string[];
};

export type Achievement = {
  id: string;
  title: string;
  description: string;
  year: string;
  image?: {
    src: string;
    alt: string;
  };
};

export type TerminalCommand = {
  id: string;
  command: string;
  output: string[];
};
