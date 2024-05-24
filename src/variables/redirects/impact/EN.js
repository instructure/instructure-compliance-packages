const EN = [
  {
    title: "Compliance Package",
    from: "/impact/dl",
    to: "https://github.com/thedannywahl/instructure-security-package/archive/refs/heads/impact.zip",
  },
  {
    title: "Architecture Paper",
    from: "/impact/architecture/dl",
    to: "https://raw.githubusercontent.com/thedannywahl/instructure-security-package/impact/Impact/Impact%20Architecture.pdf",
  },
  {
    title: "HECVAT Lite",
    from: "/impact/hecvat/dl",
    to: "https://raw.githubusercontent.com/thedannywahl/instructure-security-package/impact/Impact/Impact%20HECVAT%20Lite.xlsx",
  },
  {
    title: "TX-RAMP Level 2 Certification",
    from: "/impact/tx-ramp/dl",
    to: "https://raw.githubusercontent.com/thedannywahl/instructure-security-package/impact/Impact/Impact%20TX-RAMP%20Level%202%20Certification.pdf",
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
