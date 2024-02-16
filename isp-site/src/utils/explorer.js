import strings from "strings/markdown";
import { getStrings, getLang } from "utils/langs";

async function getGithubRepoContents(owner, repo, branch) {
	const apiUrl = `https://api.github.com/repos/${owner}/${repo}/git/trees/${branch}?recursive=1`;

	try {
		const response = await fetch(apiUrl);
		const data = await response.json();

		return data.tree || [];
	} catch (error) {
		console.error(`Error: ${error.message}`);
		return [];
	}
}

function formatGithubContents(contents, name, language) {
	const l = getLang(language);
	const s = getStrings(strings, l);
	const dlUrl = `https://raw.githubusercontent.com/thedannywahl/instructure-security-package/${name}/`;
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
				)}](${encodeURI(dlUrl + file.path)}) | |`;
			}
		}
		if (i < dirs.length - 1) htmlTable += "\r\n\r\n";
	}

	htmlTable += "</details>";

	return htmlTable;
}

export async function Explorer(page, branch, language) {
	const owner = "thedannywahl";
	const repo = "instructure-security-package";
	const name = [...branch.classList].filter((c) => ~c.indexOf(page)).toString();

	const contents = await getGithubRepoContents(owner, repo, name);

	const mdTable = formatGithubContents(contents, name, language);
	return mdTable;
}
