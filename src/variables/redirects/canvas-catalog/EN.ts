const EN: RedirectLink[] = [
  {
    title: "Compliance Package",
    from: "/canvas/catalog/dl",
    to: "https://github.com/thedannywahl/instructure-security-package/archive/refs/heads/canvas-catalog.zip",
  },
  {
    title: "PCI AOC SAQ",
    from: "/canvas/catalog/aoc/dl",
    to: "https://raw.githubusercontent.com/thedannywahl/instructure-security-package/canvas-catalog/Canvas%20Catalog/2023%20Instructure%20PCI%20DSS%20v3.2.1%20AOC%20SAQ-D%20Service%20Provider.pdf",
  },
  {
    title: "Architecture Paper",
    from: "/canvas/catalog/architecture/dl",
    to: "https://raw.githubusercontent.com/thedannywahl/instructure-security-package/canvas-catalog/Canvas%20Catalog/Canvas%20Catalog%20Architecture.pdf",
  },
  {
    title: "HECVAT Lite",
    from: "/canvas/catalog/hecvat/dl",
    to: "https://raw.githubusercontent.com/thedannywahl/instructure-security-package/canvas-catalog/Canvas%20Catalog/Canvas%20Catalog%20HECVAT%20Lite.xlsx",
  },
  {
    title: "PCI Shared Responsibility Matrix",
    from: "/canvas/catalog/pci/dl",
    to: "https://raw.githubusercontent.com/thedannywahl/instructure-security-package/canvas-catalog/Canvas%20Catalog/Canvas%20Catalog%20PCI%20Responsibility%20Matrix.pdf",
  },
  {
    title: "TX-RAMP Certification",
    from: "/canvas/catalog/tx-ramp/dl",
    to: "https://raw.githubusercontent.com/thedannywahl/instructure-security-package/canvas-catalog/Canvas%20Catalog/Canvas%20Catalog%20TX-RAMP%20Provisional%20Certificate.pdf",
  },
  {
    title: "Payment Redirector",
    from: "/canvas/catalog/payments/dl",
    to: "https://raw.githubusercontent.com/thedannywahl/instructure-security-package/canvas-catalog/Canvas%20Catalog/Catalog%20Payment%20Redirector.png",
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
