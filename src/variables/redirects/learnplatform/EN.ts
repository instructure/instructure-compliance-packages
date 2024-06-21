import global from "../../globals.ts";

const branchName = "learnplatform";
const repo = `${global.raw}/${global.owner}/${global.repo}`;
const branch = `${repo}/${branchName}`;

const EN: RedirectLinkPartial[] = [
  {
    title: "Compliance Package",
    from: "/learnplatform/dl",
    to: `${repo}/archive/refs/heads/${branchName}.zip`,
  },
  {
    title: "EdTech Top 40 Report",
    from: "/learnplatform/top40/dl",
    to: `${branch}/LearnPlatform/EdTech%20Top%2040.pdf`,
  },
  {
    title: "Architecture Paper",
    from: "/learnplatform/architecture/dl",
    to: `${branch}/LearnPlatform/LearnPlatform%20Architecture%20Overview.pdf`,
  },
  {
    title: "HECVAT Lite",
    from: "/learnplatform/hecvat/dl",
    to: `${branch}/LearnPlatform/LearnPlatform%20HECVAT%20Lite.xlsx`,
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

export default EN.map((links) => ({ ...links, lang: "EN" })) as RedirectLink[];
