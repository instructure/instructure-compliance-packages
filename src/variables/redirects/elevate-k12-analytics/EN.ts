const EN: RedirectLinkPartial[] = [
  {
    title: "Compliance Package",
    from: "/elevate/k12-analytics/dl",
    to: "https://github.com/thedannywahl/instructure-security-package/archive/refs/heads/elevate-k12-analytics.zip",
  },
  {
    title: "Home",
    from: "/elevate/k12-analytics",
    to: "https://www.instructure.com/k12/products/elevate/elevate-k12-analytics",
  },
  {
    title: "Release Notes",
    from: "/elevate/k12-analytics/releases",
    to: "https://community.canvaslms.com/t5/Elevate-K-12-Analytics-Releases/tkb-p/v_release",
  },
  {
    title: "Guides",
    from: "/elevate/k12analytics/guides",
    to: "https://community.canvaslms.com/t5/Elevate-K-12-Analytics/ct-p/videri",
  },
];

export default EN.map((links) => ({ ...links, lang: "EN" })) as RedirectLink[];
