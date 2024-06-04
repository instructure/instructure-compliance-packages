const EN: RedirectLinkPartial[] = [
  {
    title: "Compliance Package",
    from: "/learnplatform/dl",
    to: "https://github.com/thedannywahl/instructure-security-package/archive/refs/heads/learnplatform.zip",
  },
  {
    title: "EdTech Top 40 Report",
    from: "/learnplatform/top40/dl",
    to: "https://raw.githubusercontent.com/thedannywahl/instructure-security-package/learnplatform/LearnPlatform/EdTech%20Top%2040.pdf",
  },
  {
    title: "Architecture Paper",
    from: "/learnplatform/architecture/dl",
    to: "https://raw.githubusercontent.com/thedannywahl/instructure-security-package/learnplatform/LearnPlatform/LearnPlatform%20Architecture%20Overview.pdf",
  },
  {
    title: "HECVAT Lite",
    from: "/learnplatform/hecvat/dl",
    to: "https://raw.githubusercontent.com/thedannywahl/instructure-security-package/learnplatform/LearnPlatform/LearnPlatform%20HECVAT%20Lite.xlsx",
  },
  {
    title: "Home",
    from: "/learnplatform",
    to: "https://www.instructure.com/k12/products/learnplatform/",
  },
  {
    title: "Terms of Service",
    from: "/learnplatform/tos",
    to: "https://www.instructure.com/policies/learnplatform-terms-of-service/",
  },
  {
    title: "Privacy",
    from: "/learnplatform/privacy",
    to: "https://www.instructure.com/policies/privacy-learnplatform/",
  },
  {
    title: "Data Processing Agreement",
    from: "/learnplatform/dpa",
    to: "https://www.instructure.com/policies/learnplatform-data-processing-agreement/",
  },
  {
    title: "Statement of Neutrality",
    from: "/learnplatform/neutrality",
    to: "https://www.instructure.com/policies/learnplatform-neutrality/",
  },
];

export default EN.map((links) => ({ ...links, lang: "EN" }));
