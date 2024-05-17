import strings from "../strings/markdown";
import { getStrings } from "../utils/langs";
import global from "../variables/globals";

async function getGithubRepoContents(owner, repo, branch) {
  const apiUrl = `${global.api}/repos/${owner}/${repo}/git/trees/${branch}?recursive=1`;

  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        Accept: "application/vnd.github.v3+json",
        Authorization: import.meta.env.GITHUB_TOKEN
          ? `token ${import.meta.env.GITHUB_TOKEN}`
          : "",
      },
    });
    const data = await response.json();

    return data.tree.sort(sortProduct) || null;
  } catch (error) {
    console.error(`Error: ${error.message}`);
    return null;
  }
}

function sortProduct(a, b) {
  const getPriorityIndex = (path) => {
    const uPath = path.toLocaleUpperCase();
    const index = priorityStrings.findIndex((str) =>
      uPath.startsWith(str.toLocaleUpperCase()),
    );
    return index !== -1 ? index : priorityStrings.length;
  };

  const priorityStrings = ["Amazon Web Services", "Instructure"];

  const priorityA = getPriorityIndex(a.path);
  const priorityB = getPriorityIndex(b.path);

  if (priorityA !== priorityB) {
    return priorityB - priorityA;
  }
  return a.path.localeCompare(b.path);
}

function formatGithubContents(contents, owner, repo, name, language) {
  const l = language;
  const s = getStrings(strings, l);
  const dirs = contents.filter((item) => item.type === "tree");
  const files = contents
    .filter((item) => item.type === "blob")
    .filter((item) => item.path !== ".gitignore");

  let htmlTable = `<details>
    <summary>🕵️ ${s.explore}</summary>\r\n\r\n`;

  for (const [i, dir] of dirs.entries()) {
    htmlTable += `| ${dir.path} |\r\n| ---------------- |`;

    for (const file of files) {
      if (file.path.startsWith(dir.path)) {
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

export async function Explorer(page, branch, language) {
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
