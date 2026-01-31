import type { ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: ReactNode;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="space-y-3">
      <p className="text-xs uppercase tracking-[0.3em] text-sky-300/70">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base text-slate-300">{description}</p>
      ) : null}
    </div>
  );
}
