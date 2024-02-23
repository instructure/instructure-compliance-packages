import global from "variables/globals";

async function getGithubReleases(owner, repo) {
	const apiUrl = `${global.api}/repos/${owner}/${repo}/releases`;
	try {
		const response = await fetch(apiUrl, {
			method: "GET",
			headers: {
				Accept: "application/vnd.github.v3+json",
				Authorization: process.env.REACT_APP_GITHUB_TOKEN
					? `token ${process.env.REACT_APP_GITHUB_TOKEN}`
					: "",
			},
		});
		const data = await response.json();

		return data.map(buildRelease).join("\r\n\r\n").slice(0, -3);
	} catch (error) {
		console.error(`Error: ${error.message}`);
		return null;
	}
}

function buildRelease(release) {
	return `
## ${release.name}\r\n
${release.body}\r\n
---`;
}

export async function printReleases() {
	const owner = global.owner;
	const repo = global.repo;
	return getGithubReleases(owner, repo);
}
