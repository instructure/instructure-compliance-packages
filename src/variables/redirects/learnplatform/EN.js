const EN = [
  {
    title: "Home",
    from: "/learnplatform",
    to: "https://www.instructure.com/k12/products/learnplatform/",
  },
  {
    title: "Compliance Package",
    from: "/learnplatform/dl",
    to: "https://github.com/thedannywahl/instructure-security-package/archive/refs/heads/learnplatform.zip",
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
