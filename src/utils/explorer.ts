import strings from "../strings/markdown.ts";
import global from "../variables/globals.ts";
import { getStrings } from "./langs.ts";

/**
 * @TODO: Octokit API types are throwing errors
 * import type { Endpoints } from "@octokit/types";
 * Endpoints["GET /repos/{owner}/{repo}/git/trees/{tree_sha}"]["response"];
 * Property 'tree' does not exist on type 'OctokitResponse<GitGetTreeResponseData>'
 */
type GithubFile = {
  path?: string;
  mode?: string;
  type?: string;
  sha?: string;
  size?: number;
  url?: string;
}

interface GithubFilesAPI {
  sha: string;
  url: string;
  tree: GithubFile[];
}

/**
 * Fetches the contents of a GitHub repository.
 *
 * @param owner - The username of the owner of the repository.
 * @param repo - The name of the repository.
 * @param branch - The name of the branch in the repository.
 * @returns A promise that resolves to an object representing the contents of the repository, or null if an error occurs.
 * The object has properties for each file in the repository, and a `tree` property that is an array of all the files, sorted by the `sortProduct` function.
 * If an error occurs during the fetch operation, the function logs the error and returns null.
 */
async function getGithubRepoContents(
  owner: string,
  repo: string,
  branch: string,
): Promise<GithubFilesAPI | null> {
  const apiUrl: string = `${global.api}/repos/${owner}/${repo}/git/trees/${branch}?recursive=1`;

  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        Accept: "application/vnd.github.v3+json",
        Authorization: import.meta.env?.GITHUB_TOKEN
          ? `token ${import.meta.env.GITHUB_TOKEN}`
          : "",
      },
    });
    const data = await response.json();
    return { ...data, tree: data.tree.sort(sortProduct) } || null;
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
 * Sorts two product objects based on their `path` properties.
 *
 * The function first checks if the `path` of each product starts with any of the strings in the `priorityStrings` array.
 * If a product's `path` starts with a string in `priorityStrings`, that product is given a higher priority.
 * If both products have the same priority, they are sorted alphabetically by their `path`. Always returns:
 * # <Product>
 * # Instructure
 * # Amazon Web Services
 *
 * @param a - The first product to compare.
 * @param b - The second product to compare.
 * @returns A negative number if `a` should be sorted before `b`, a positive number if `a` should be sorted after `b`, or 0 if they are equal.
 */
function sortProduct(a: { path: string }, b: { path: string }): number {
  const getPriorityIndex = (path: string) => {
    const uPath = path.toLocaleUpperCase();
    const index = priorityStrings.findIndex((str) =>
      uPath.startsWith(str.toLocaleUpperCase()),
    );
    return index !== -1 ? index : priorityStrings.length;
  };

  const priorityStrings: string[] = [
    "Amazon Web Services",
    "Instructure",
  ] as const;

  const priorityA = getPriorityIndex(a.path);
  const priorityB = getPriorityIndex(b.path);

  if (priorityA !== priorityB) {
    return priorityB - priorityA;
  }
  return a.path.localeCompare(b.path);
}
/**
 * Formats the contents of a GitHub repository into a string of Markdown.
 *
 * The function first filters the `tree` property of the `contents` object to separate directories and files.
 * It then creates a Markdown table for each directory, with a row for each file in the directory.
 * The file names are links to the raw content of the file on GitHub.
 *
 * @param contents - An object representing the contents of a GitHub repository.
 * @param owner - The username of the owner of the repository.
 * @param repo - The name of the repository.
 * @param name - The name of the branch in the repository.
 * @param language - The language code for the language to use for strings in the Markdown.
 * @returns A string of Markdown representing the contents of the repository.
 */
function formatGithubContents(
  contents: GithubFilesAPI,
  owner: string,
  repo: string,
  name: string,
  language: LangCode,
): string {
  const l = language;
  const s = getStrings(strings, l);
  const dirs = contents.tree.filter((item) => item.type === "tree");
  const files = contents.tree
    .filter((item) => item.type === "blob")
    .filter((item) => item.path !== ".gitignore");

  let htmlTable = `<details>
    <summary>🕵️ ${s.explore}</summary>\r\n\r\n`;

  for (const [i, dir] of dirs.entries()) {
    htmlTable += `| ${dir.path} |\r\n| ---------------- |`;

    for (const file of files) {
      if (dir?.path && file?.path?.startsWith(dir.path)) {
        htmlTable += `\r\n| [${file.path.replace(
          `${dir.path}/`,
          "",
        )}](${encodeURI(
          `${global.raw}/${owner}/${repo}/${name}/${file.path}`,
        )}) |`;
      }
    }
    if (i < dirs.length - 1) htmlTable += "\r\n\r\n";
  }

  htmlTable += "</details>";

  return htmlTable;
}

/**
 * Fetches and formats the contents of a specific branch of a GitHub repository.
 *
 * The function first determines the name of the branch based on the `page` parameter and the classes of the `branch` element.
 * If a branch name is found, the function fetches the contents of the branch using the `getGithubRepoContents` function.
 * If the fetch is successful, the function formats the contents into a string of Markdown using the `formatGithubContents` function.
 *
 * @param page - The name of the page to fetch the contents for.
 * @param branch - An HTML element representing the branch to fetch the contents from.
 * @param language - The language code for the language to use for strings in the Markdown.
 * @returns A promise that resolves to a string of HTML representing the contents of the branch, or null if an error occurs or no branch name is found.
 */
export async function Explorer(
  page: string,
  branch: HTMLElement,
  language: LangCode,
): Promise<string | null> {
  const l = language;
  const owner = global.owner;
  const repo = global.repo;
  const name = [...branch.classList].filter((c) => ~c.indexOf(page)).toString();

  if (name) {
    const contents = await getGithubRepoContents(owner, repo, name);
    if (contents) {
      const mdTable = formatGithubContents(contents, owner, repo, name, l);
      return mdTable;
    }
  }
  return null;
}
