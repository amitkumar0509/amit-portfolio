"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { terminalCommands } from "@/data/terminal";

export function TerminalPanel() {
  const [active, setActive] = useState(terminalCommands[0]);

  return (
    <section id="terminal" className="scroll-mt-24 py-16">
      <SectionHeader
        eyebrow="Terminal"
        title="Interactive command console"
        description="A fast way to explore ML systems, models, and skills like a live engineering brief."
      />
      <div className="mt-10 rounded-3xl border border-slate-800/80 bg-slate-950/70 p-6">
        <div className="flex flex-wrap gap-3">
          {terminalCommands.map((command) => (
            <button
              key={command.id}
              type="button"
              onClick={() => setActive(command)}
              className={`rounded-full border px-4 py-2 text-xs transition ${
                active.id === command.id
                  ? "border-sky-400/80 bg-sky-400/10 text-sky-200"
                  : "border-slate-700/80 text-slate-300 hover:border-slate-500"
              }`}
            >
              {command.command}
            </button>
          ))}
        </div>
        <div className="mt-6 rounded-2xl border border-slate-800/80 bg-black/40 p-5 font-mono text-xs text-slate-200">
          <div className="flex items-center gap-2 text-slate-400">
            <span>ml@portfolio</span>
            <span>:</span>
            <span className="text-sky-300">~</span>
            <span>$</span>
            <span>{active.command}</span>
          </div>
          <div className="mt-3 space-y-1">
            {active.output.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
