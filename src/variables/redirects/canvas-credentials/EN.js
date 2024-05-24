const EN = [
  {
    title: "Compliance Package",
    from: "/canvas/credentials/dl",
    to: "https://github.com/thedannywahl/instructure-security-package/archive/refs/heads/canvas-credentials.zip",
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

export default EN.map((links) => ({ ...links, lang: "EN" }));
