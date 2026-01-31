import type { TerminalCommand } from "@/types/portfolio";

export const terminalCommands: TerminalCommand[] = [
  {
    id: "explain-lingolive",
    command: "explain lingolive",
    output: [
      "Pipeline: audio → Whisper STT → translation routing → prosody alignment → voice cloning → stream",
      "Latency target: < 900ms for short utterances",
      "Focus: preserve speaker identity while maintaining intelligibility",
    ],
  },
  {
    id: "list-models",
    command: "list models",
    output: [
      "- Whisper (streaming speech-to-text)",
      "- Transformer-based translation model",
      "- Speaker-conditioned voice synthesis",
      "- Evaluation harness (WER, MOS, latency budget)",
    ],
  },
  {
    id: "show-skills",
    command: "show skills",
    output: [
      "Core: Python, SQL, Data Structures, Algorithms",
      "Data: Pandas, NumPy, Feature Engineering, EDA",
      "ML: Supervised/Unsupervised, NLP, Whisper, Translation, Voice Cloning",
      "Engineering: Git, APIs, Deployment awareness",
    ],
  },
];
