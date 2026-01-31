type GitHubProfile = {
  login: string;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
};

type GitHubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
};

const githubUser = process.env.GITHUB_USERNAME ?? "amitkumar0509";

const githubHeaders = () => {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
  };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }
  return headers;
};

export async function getGitHubProfile() {
  const response = await fetch(`https://api.github.com/users/${githubUser}`, {
    headers: githubHeaders(),
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch GitHub profile");
  }

  return (await response.json()) as GitHubProfile;
}

export async function getGitHubRepos() {
  const response = await fetch(
    `https://api.github.com/users/${githubUser}/repos?per_page=6&sort=updated`,
    {
      headers: githubHeaders(),
      next: { revalidate: 3600 },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch GitHub repositories");
  }

  const repos = (await response.json()) as GitHubRepo[];

  return repos.filter((repo) => !repo.name.includes("fork"));
}
