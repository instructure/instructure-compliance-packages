import packageJson from "../../package.json" with { type: "json" };

const global = {
  owner: "thedannywahl",
  repo: "instructure-security-package",
  branch: "main",
  url: packageJson.homepage.replace("/#/", ""),
  api: "https://api.github.com",
  raw: "https://raw.githubusercontent.com",
};
export default global;
