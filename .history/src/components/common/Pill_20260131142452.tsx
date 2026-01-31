import type { ReactNode } from "react";

type PillProps = {
  children: ReactNode;
};

export function Pill({ children }: PillProps) {
  return (
    <span className="rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1 text-xs font-medium text-slate-200">
      {children}
    </span>
  );
}
