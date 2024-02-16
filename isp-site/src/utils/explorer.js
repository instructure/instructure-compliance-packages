import global from "variables/globals";
import strings from "strings/markdown";
import { getStrings } from "utils/langs";

async function getGithubRepoContents(owner, repo, branch) {
	const apiUrl = `${global.api}/repos/${owner}/${repo}/git/trees/${branch}?recursive=1`;

	try {
		const response = await fetch(apiUrl);
		const data = await response.json();

		return data.tree || null;
	} catch (error) {
		console.error(`Error: ${error.message}`);
		return null;
	}
}

function formatGithubContents(contents, owner, repo, name, language) {
	const l = language;
	const s = getStrings(strings, l);
	const dirs = contents.filter((item) => item.type === "tree"); // TODO: Sort
	const files = contents
		.filter((item) => item.type === "blob")
		.filter((item) => item.path !== ".gitignore");

	let htmlTable = `<details>
    <summary>🕵️ ${s.explore}</summary>\r\n\r\n`;

	for (const [i, dir] of dirs.entries()) {
		htmlTable += `| ${dir.path} | |\r\n| ---------------- | - |`;

		for (const file of files) {
			if (file.path.startsWith(dir.path)) {
				htmlTable += `\r\n| [${file.path.replace(
					`${dir.path}/`,
					"",
				)}](${encodeURI(
					`${global.raw}/${owner}/${repo}/${name}/${file.path}`,
				)}) | |`;
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
