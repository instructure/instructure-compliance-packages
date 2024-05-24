const EN = [
  {
    title: "Compliance Package",
    from: "/elevate/standards-alignment/dl",
    to: "https://github.com/thedannywahl/instructure-security-package/archive/refs/heads/elevate-standards-alignment.zip",
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

export default EN.map((links) => ({ ...links, lang: "EN" }));
