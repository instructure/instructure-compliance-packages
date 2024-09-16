import global from "../variables/globals.ts";

/**
 * Fetches the latest GitHub releases for a given repository.
 *
 * @param owner - The owner of the repository.
 * @param repo - The name of the repository.
 * @returns A promise that resolves to a string containing the latest releases formatted as a markdown list, or null if an error occurs.
 *
 * The function fetches the releases from the GitHub API and formats the first three releases (if available) as a markdown list.
 * If there are more than three releases, it appends a link to the older releases.
 *
 * The GitHub API token is retrieved from the environment variable `VITE_GITHUB_TOKEN`.
 *
 * @throws Will log an error message to the console if the fetch operation fails.
 */
export async function getGithubReleases(
  owner: string,
  repo: string,
): Promise<string | null> {
  const apiUrl = `${global.api}/repos/${owner}/${repo}/releases`;
  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        Accept: "application/vnd.github.v3+json",
        Authorization: import.meta.env?.VITE_GITHUB_TOKEN
          ? `token ${import.meta.env.VITE_GITHUB_TOKEN}`
          : "",
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });
    const data = await response.json();
    return data.length > 3
      ? `${data.slice(0, 3).map(buildRelease).join("\r\n\r\n").slice(0, -3)}---\r\n\r\n[Older Releases](https://github.com/thedannywahl/instructure-security-package/releases)`
      : data.map(buildRelease).join("\r\n\r\n").slice(0, -3) || null;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error: ${error.message}`);
    } else {
      console.error(`An unexpected error occurred: ${error}`);
    }
    return null;
  }
}

/**
 * Builds a formatted release note string from a GithubRelease response.
 *
 * @param response - The GithubRelease object containing release information.
 * @returns A formatted string containing the release name, tag, author, and body.
 *
 * The author field is customized for specific usernames:
 * - "gdenne" is replaced with " -- Gary Denne"
 * - "thedannywahl" is replaced with " -- Danny Wahl"
 */
export function buildRelease(response: GithubRelease): string {
  let author = response?.author?.login || "";
  if (author === "gdenne") {
    author = " -- Gary Denne";
  } else if (author === "thedannywahl") {
    author = " -- Danny Wahl";
  }

  return `
## ${response.name}\r\n
> ${response.tag_name}${author}\r\n

${response.body}\r\n
---`;
}

/**
 * Fetches and prints the GitHub releases for the specified repository.
 *
 * @returns {Promise<string | null>} A promise that resolves to a string containing the release information,
 * or null if the releases could not be fetched.
 */
export async function printReleases(): Promise<string | null> {
  const owner = global.owner;
  const repo = global.repo;
  return getGithubReleases(owner, repo);
}
