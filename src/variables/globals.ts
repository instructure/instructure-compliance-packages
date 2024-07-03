import packageJson from "../../package.json" with { type: "json" };

const global: Global = {
  owner: "thedannywahl",
  repo: "instructure-security-package",
  branch: "main",
  url: packageJson.homepage.replace("/#/", ""),
  api: "https://api.github.com",
  raw: "https://github.com",
} as const;

const { owner, repo, branch, url, api, raw } = global;

export default global;
export { owner, repo, branch, url, api, raw };
