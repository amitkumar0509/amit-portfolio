import { SectionHeader } from "@/components/common/SectionHeader";
import { getGitHubProfile, getGitHubRepos } from "@/lib/github";

export async function GitHubSignals() {
  let profile;
  let repos = [];

  try {
    profile = await getGitHubProfile();
    repos = await getGitHubRepos();
  } catch (error) {
    return (
      <section id="github" className="scroll-mt-24 py-16">
        <SectionHeader
          eyebrow="GitHub"
          title="Code signals"
          description="GitHub API is currently unavailable. Set GITHUB_USERNAME and optional GITHUB_TOKEN to enable live stats."
        />
      </section>
    );
  }

  return (
    <section id="github" className="scroll-mt-24 py-16">
      <SectionHeader
        eyebrow="GitHub"
        title="Code signals"
        description="Consistency, experimentation, and ML-focused repositories surfaced via GitHub API."
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-[0.35fr_0.65fr]">
        <div className="rounded-3xl border border-slate-800/80 bg-slate-950/60 p-6">
          <div className="flex items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={profile.avatar_url}
              alt={profile.login}
              className="h-12 w-12 rounded-full border border-slate-700"
            />
            <div>
              <p className="text-lg font-semibold text-white">{profile.login}</p>
              <p className="text-xs text-slate-400">Public repos: {profile.public_repos}</p>
            </div>
          </div>
          <div className="mt-6 grid gap-4">
            <div className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                Followers
              </p>
              <p className="mt-2 text-2xl font-semibold text-white">
                {profile.followers}
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                Focus
              </p>
              <p className="mt-2 text-sm text-slate-300">
                ML experiments, data pipelines, real-time AI prototypes
              </p>
            </div>
          </div>
        </div>
        <div className="grid gap-4">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="rounded-3xl border border-slate-800/80 bg-slate-950/60 p-6"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-white">{repo.name}</h3>
                <span className="text-xs text-slate-400">
                  ★ {repo.stargazers_count}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-400">
                {repo.description ?? "Experimental repository focused on AI systems."}
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.3em] text-slate-500">
                {repo.language ?? "Mixed"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
