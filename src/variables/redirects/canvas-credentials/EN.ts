import global from "../../globals.ts";

const branchName = "canvas-credentials";
const github = `${global.gh}/${global.owner}/${global.repo}/archive/refs/heads`;
const repo = `${global.raw}/${global.owner}/${global.repo}`;
const branch = `${repo}/${branchName}`;

const EN: RedirectLinkPartial[] = [
  {
    title: "Compliance Package",
    from: "/canvas/credentials/dl",
    to: `${github}/${branchName}.zip`,
  },
  {
    title: "VPAT",
    from: "/canvas/credentials/vpat/dl",
    to: `${branch}/Canvas%20Credentials/Canvas%20Credentials%20(formerly%20Badgr)%20VPAT.pdf`,
  },
  {
    title: "Architecture Paper",
    from: "/canvas/credentials/architecture/dl",
    to: `${branch}/Canvas%20Credentials/Canvas%20Credentials%20Architecture.pdf`,
  },
  {
    title: "HECVAT",
    from: "/canvas/credentials/hecvat/dl",
    to: `${branch}/Canvas%20Credentials/Canvas%20Credentials%20HECVAT%20Full.xlsx`,
  },
  {
    title: "TX-RAMP Certification",
    from: "/canvas/credentials/tx-ramp/dl",
    to: `${branch}/Canvas%20Credentials/Canvas%20Credentials%20TX-RAMP%20Level%202%20Certification.pdf`,
  },
  {
    title: "Home (HE)",
    from: "/canvas/credentials",
    to: "https://www.instructure.com/higher-education/products/canvas/canvas-credentials-digital-badges/",
  },
  {
    title: "Home (K12)",
    from: "/canvas/credentials/k12",
    to: "https://www.instructure.com/k12/products/canvas/canvas-credentials-digital-badges/",
  },
  {
    title: "Guides",
    from: "/canvas/credentials/guides",
    to: "https://community.canvaslms.com/t5/Canvas-Credentials-Badges-Badgr/ct-p/canvas-credentials-badges",
  },
  {
    title: "Release Notes",
    from: "/canvas/credentials/releases",
    to: "https://community.canvaslms.com/t5/Badges-Credentials-Releases/tkb-p/badges-release",
  },
  {
    title: "API",
    from: "/canvas/credentials/api",
    to: "https://api.badgr.io/docs/v2/",
  },
];

export default EN.map((links) => ({ ...links, lang: "EN" })) as RedirectLink[];
