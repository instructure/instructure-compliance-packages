import global from "../../globals.ts";

const branchName = "intelligent-insights";
const github = `${global.gh}/${global.owner}/${global.repo}/archive/refs/heads`;
const repo = `${global.raw}/${global.owner}/${global.repo}`;
const branch = `${repo}/${branchName}`;

const EN: RedirectLinkPartial[] = [
  {
    title: "Compliance Package",
    from: "/intelligent-insights/dl",
    to: `${github}/${branchName}.zip`,
  },
  {
    title: "Architecture Paper",
    from: "/intelligent-insights/architecture/dl",
    to: `${branch}/Intelligent%20Insights/Intelligent%20Insights%20Architecture%20Overview.pdf`,
  },
  {
    title: "HECVAT",
    from: "/intelligent-insights/hecvat/dl",
    to: `${branch}/Intelligent%20Insights/Intelligent%20Insights%20HECVAT%20Lite.xlsx`,
  },
  {
    title: "Data Sheet",
    from: "/intelligent-insights/data/dl",
    to: `${branch}/Intelligent%20Insights/Intelligent%20Insights%20Data%20Sheet.pdf`,
  },
  {
    title: "Home",
    from: "/intelligent-insights/home",
    to: "https://www.instructure.com/products/intelligent-insights",
  },
  {
    title: "Community",
    from: "/intelligent-insights/community",
    to: "https://community.canvaslms.com/t5/Intelligent-Insights/ct-p/intelligent_insights",
  },
  {
    title: "Guides",
    from: "/intelligent-insights/guides",
    to: "https://community.canvaslms.com/t5/Intelligent-Insights-Guides/tkb-p/intelligent_insights_guides",
  },
  {
    title: "Release Notes",
    from: "/intelligent-insights/releases",
    to: "https://community.canvaslms.com/t5/Intelligent-Insights-Releases/ct-p/intelligent_insights_releases",
  },
];

export default EN.map((links) => ({ ...links, lang: "EN" })) as RedirectLink[];
