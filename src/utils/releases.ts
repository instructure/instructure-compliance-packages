import global from "../variables/globals.ts";

/**
 * Fetches the GitHub releases for a given repository.
 *
 * @param owner - The owner of the repository.
 * @param repo - The name of the repository.
 * @returns A promise that resolves to a string containing the release information, or null if an error occurred.
 */
async function getGithubReleases(
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
      },
    });
    const data = await response.json();
    return data.map(buildRelease).join("\r\n\r\n").slice(0, -3) || null;
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
 * Builds a Markdown representation of a GitHub release name and body.
 *
 * @param release - The GitHub API release to build the string for.
 * @returns A Markdown representation of the GitHub release.
 */
function buildRelease(response: GithubRelease): string {
  console.log("response: ", response)
    return `
## ${response.name}\r\n
> ${response.tag_name}${response?.author?.login ? ` -- ${response.author.login}` : null}\r\n

${response.body}\r\n
---`
}

/**
 * Prints the releases for the repository specified in the global configuration.
 *
 * @returns A promise that resolves to a string containing the release information, or null if an error occurred.
 */
export async function printReleases(): Promise<string | null> {
  const owner = global.owner;
  const repo = global.repo;
  return getGithubReleases(owner, repo);
}
