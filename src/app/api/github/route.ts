import { NextResponse } from "next/server";

export async function GET() {
  const username = process.env.GITHUB_USERNAME ?? "octocat";
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const [profileResponse, reposResponse] = await Promise.all([
    fetch(`https://api.github.com/users/${username}`, {
      headers,
      next: { revalidate: 3600 },
    }),
    fetch(
      `https://api.github.com/users/${username}/repos?per_page=6&sort=updated`,
      {
        headers,
        next: { revalidate: 3600 },
      }
    ),
  ]);

  if (!profileResponse.ok || !reposResponse.ok) {
    return NextResponse.json(
      { error: "Unable to fetch GitHub data." },
      { status: 502 }
    );
  }

  const profile = await profileResponse.json();
  const repos = await reposResponse.json();

  return NextResponse.json({ profile, repos });
}
