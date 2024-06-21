import global from "../../globals.ts";

const branchName = "elevate-standards-alignment";
const repo = `${global.raw}/${global.owner}/${global.repo}`;
const branch = `${repo}/${branchName}`;

const EN: RedirectLinkPartial[] = [
  {
    title: "Compliance Package",
    from: "/elevate/standards-alignment/dl",
    to: `${repo}/archive/refs/heads/${branchName}.zip`,
  },
  {
    title: "HECVAT Lite",
    from: "/elevate/standards-alignment/hecvat/dl",
    to: `${branch}/Elevate%20Standards%20Alignment/Elevate%20Standards%20Alignment%20HECVAT%20Lite.xlsx`,
  },
  {
    title: "Home",
    from: "/elevate/standards-alignment",
    to: "https://www.instructure.com/corporate-education/products/elevate/elevate-standards-alignment",
  },
  {
    title: "Release Notes",
    from: "/elevate/standards-alignment/releases",
    to: "https://community.canvaslms.com/t5/Elevate-Standards-Alignment/tkb-p/esa_releases",
  },
  {
    title: "Guides",
    from: "/elevate/standards-alignment/guides",
    to: "https://community.canvaslms.com/t5/Elevate-Standards-Alignment/tkb-p/ab_basics",
  },
];

export default EN.map((links) => ({ ...links, lang: "EN" })) as RedirectLink[];
