import global from "../../globals.ts";

const branchName = "impact";
const github = `${global.gh}/${global.owner}/${global.repo}/archive/refs/heads`;
const repo = `${global.raw}/${global.owner}/${global.repo}`;
const branch = `${repo}/${branchName}`;

const EN: RedirectLinkPartial[] = [
  {
    title: "Compliance Package",
    from: "/impact/dl",
    to: `${github}/${branchName}.zip`,
  },
  {
    title: "Architecture Paper",
    from: "/impact/architecture/dl",
    to: `${branch}/Impact/Impact%20Architecture.pdf`,
  },
  {
    title: "HECVAT",
    from: "/impact/hecvat/dl",
    to: `${branch}/Impact/Impact%20by%20Instructure%20HECVAT%20Full.xlsx`,
  },
  {
    title: "TX-RAMP Level 2 Certification",
    from: "/impact/tx-ramp/dl",
    to: `${branch}/Impact/Impact%20TX-RAMP%20Level%202%20Certification.pdf`,
  },
  {
    title: "Home (HE)",
    from: "/impact/he",
    to: "https://www.instructure.com/higher-education/products/impact/",
  },
  {
    title: "Home (K12)",
    from: "/impact/k12",
    to: "https://www.instructure.com/k12/products/impact/",
  },
  {
    title: "Community",
    from: "/impact/community",
    to: "https://community.canvaslms.com/t5/Impact/ct-p/impact",
  },
  {
    title: "Guides",
    from: "/impact/guides",
    to: "https://community.canvaslms.com/t5/Impact-Guides/tkb-p/impact_guides",
  },
  {
    title: "Release Notes",
    from: "/impact/releases",
    to: "https://community.canvaslms.com/t5/Impact-Releases/ct-p/impact_releases",
  },
];

export default EN.map((links) => ({ ...links, lang: "EN" })) as RedirectLink[];
