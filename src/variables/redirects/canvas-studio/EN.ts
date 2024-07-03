import global from "../../globals.ts";

const branchName = "canvas-studio";
const github = `${global.gh}/${global.owner}/${global.repo}/archive/refs/heads`;
const repo = `${global.raw}/${global.owner}/${global.repo}`;
const branch = `${repo}/${branchName}`;

const EN: RedirectLinkPartial[] = [
  {
    title: "Compliance Package",
    from: "/canvas/studio/dl",
    to: `${github}/${branchName}.zip`,
  },
  {
    title: "Architecture Paper",
    from: "/canvas/studio/architecture/dl",
    to: `${branch}/Canvas%20Studio/Canvas%20Studio%20Architecture.pdf`,
  },
  {
    title: "HECVAT",
    from: "/canvas/studio/hecvat/dl",
    to: `${branch}/Canvas%20Studio/Canvas%20Studio%20HECVAT%20Lite.xlsx`,
  },
  {
    title: "Home (HE)",
    from: "/canvas/studio",
    to: "https://www.instructure.com/higher-education/products/canvas/canvas-studio/",
  },
  {
    title: "Home (K12)",
    from: "/canvas/studio/k12",
    to: "https://www.instructure.com/k12/products/canvas/canvas-studio/",
  },
  {
    title: "VPAT",
    from: "/canvas/studio/vpat",
    to: "https://www.instructure.com/accessibility/canvas/canvas-studio-vpat/",
  },
  {
    title: "Guides",
    from: "/canvas/studio/guides",
    to: "https://community.canvaslms.com/t5/Canvas-Studio/ct-p/studio_guides",
  },
  {
    title: "Release Notes",
    from: "/canvas/studio/releases",
    to: "https://community.canvaslms.com/t5/Studio-Releases/ct-p/studio_releases",
  },
  {
    title: "API",
    from: "/canvas/studio/api",
    to: "https://canvas.instructuremedia.com/api/public/docs/#/",
  },
];

export default EN.map((links) => ({ ...links, lang: "EN" })) as RedirectLink[];
