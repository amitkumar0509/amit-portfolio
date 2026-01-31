export function Footer() {
  return (
    <footer className="border-t border-slate-900/80 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-xs text-slate-500 sm:flex-row">
        <p>© 2026 AI/ML Portfolio. Built for research-grade engineering.</p>
        <div className="flex gap-4">
          <a href="#projects" className="hover:text-slate-200">
            Projects
          </a>
          <a href="#contact" className="hover:text-slate-200">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
