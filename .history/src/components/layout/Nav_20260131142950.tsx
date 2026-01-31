export function Nav() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Journey" },
    { href: "#github", label: "GitHub" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-slate-900/80 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div>
          <p className="text-sm font-semibold text-white">
            AI/ML Systems Engineer
          </p>
          <p className="text-xs text-slate-500">
            Real-time AI • Data pipelines • ML deployment
          </p>
        </div>
        <nav className="hidden gap-6 text-xs uppercase tracking-[0.25em] text-slate-400 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-slate-200">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
