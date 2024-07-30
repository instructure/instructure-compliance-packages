import packageJson from "../../package.json" with { type: "json" };

const global: Global = {
  owner: "thedannywahl",
  repo: "instructure-security-package",
  branch: "main",
  url: packageJson.homepage.replace("/#/", ""),
  gh: "https://github.com",
  api: "https://api.github.com",
  raw: "https://raw.githubusercontent.com",
} as const;

export default global;
export const { owner, repo, branch, url, gh, api, raw } = global;
