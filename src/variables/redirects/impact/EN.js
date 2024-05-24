const EN = [
  {
    title: "Compliance Package",
    from: "/impact/dl",
    to: "https://github.com/thedannywahl/instructure-security-package/archive/refs/heads/impact.zip",
  },
  {
    title: "Compliance Package2",
    from: "/impact/dl",
    to: "https://github.com/thedannywahl/instructure-security-package/archive/refs/heads/impact.zip",
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

export default EN.map((links) => ({ ...links, lang: "EN" }));
