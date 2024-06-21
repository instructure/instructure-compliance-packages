import packageJson from "../../package.json" with { type: "json" };

const global: Global = {
  owner: "instructure",
  repo: "compliance-packages",
  branch: "main",
  url: packageJson.homepage.replace("/#/", ""),
  api: "https://api.github.com",
  raw: "https://raw.githubusercontent.com",
} as const;

const { owner, repo, branch, url, api, raw } = global;

export default global;
export { owner, repo, branch, url, api, raw };
