import global from "../../globals.ts";

const branchName = "canvas-catalog";
const github = `${global.gh}/${global.owner}/${global.repo}/archive/refs/heads`;
const repo = `${global.raw}/${global.owner}/${global.repo}`;
const branch = `${repo}/${branchName}`;

const EN: RedirectLinkPartial[] = [
  {
    title: "Compliance Package",
    from: "/canvas/catalog/dl",
    to: `${github}/${branchName}.zip`,
  },
  {
    title: "PCI AOC SAQ",
    from: "/canvas/catalog/aoc/dl",
    to: `${branch}/Canvas%20Catalog/2024_Instructure_PCI_DSS_Summary.pdf`,
  },
  {
    title: "Architecture Paper",
    from: "/canvas/catalog/architecture/dl",
    to: `${branch}/Canvas%20Catalog/Canvas%20Catalog%20Architecture.pdf`,
  },
  {
    title: "HECVAT Lite",
    from: "/canvas/catalog/hecvat/dl",
    to: `${branch}/Canvas%20Catalog/Canvas%20Catalog%20HECVAT%20Lite.xlsx`,
  },
  {
    title: "PCI Shared Responsibility Matrix",
    from: "/canvas/catalog/pci/dl",
    to: `${branch}/Canvas%20Catalog/Canvas%20Catalog%20PCI%20Responsibility%20Matrix.pdf`,
  },
  {
    title: "TX-RAMP Certification",
    from: "/canvas/catalog/tx-ramp/dl",
    to: `${branch}/Canvas%20Catalog/Canvas%20Catalog%20TX-RAMP%20Provisional%20Certificate.pdf`,
  },
  {
    title: "Payment Redirector",
    from: "/canvas/catalog/payments/dl",
    to: `${branch}/Canvas%20Catalog/Catalog%20Payment%20Redirector.png`,
  },
  {
    title: "Home (HE)",
    from: "/canvas/catalog",
    to: "https://www.instructure.com/higher-education/products/canvas/canvas-catalog/",
  },
  {
    title: "Home (K12)",
    from: "/canvas/catalog/k12",
    to: "https://www.instructure.com/k12/products/canvas/canvas-catalog/",
  },
  {
    title: "Guides",
    from: "/canvas/catalog/guides",
    to: "https://community.canvaslms.com/t5/Canvas-Catalog/ct-p/canvas_catalog",
  },
  {
    title: "Release Notes",
    from: "/canvas/catalog/releases",
    to: "https://community.canvaslms.com/t5/Catalog-Releases/ct-p/catalog_releases",
  },
  {
    title: "API",
    from: "/canvas/catalog/api",
    to: "https://api.catalog.instructure.com/api/docs",
  },
];

export default EN.map((links) => ({ ...links, lang: "EN" })) as RedirectLink[];
