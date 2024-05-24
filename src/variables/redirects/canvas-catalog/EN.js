const EN = [
  {
    title: "Compliance Package",
    from: "/canvas/catalog/dl",
    to: "https://github.com/thedannywahl/instructure-security-package/archive/refs/heads/canvas-catalog.zip",
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

export default EN.map((links) => ({ ...links, lang: "EN" }));
