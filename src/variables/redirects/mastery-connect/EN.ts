import global from "../../globals.ts";

const branchName = "mastery-connect";
const github = `${global.gh}/${global.owner}/${global.repo}/archive/refs/heads`;
const repo = `${global.raw}/${global.owner}/${global.repo}`;
const branch = `${repo}/${branchName}`;

const EN: RedirectLinkPartial[] = [
  {
    title: "Compliance Package",
    from: "/mastery/connect/dl",
    to: `${github}/${branchName}.zip`,
  },
  {
    title: "Architecture Paper",
    from: "/mastery/connect/architecture/dl",
    to: `${branch}/Mastery%20Connect/Mastery%20Connect%20Architecture.pdf`,
  },
  {
    title: "HECVAT Lite",
    from: "/mastery/connect/hecvat/dl",
    to: `${branch}/Mastery%20Connect/Mastery%20Connect%20HECVAT%20Lite.xlsx`,
  },
  {
    title: "Home",
    from: "/mastery/connect",
    to: "https://www.instructure.com/k12/products/mastery/mastery-connect",
  },
  {
    title: "Guides",
    from: "/mastery/connect/guides",
    to: "https://community.canvaslms.com/t5/Mastery-Connect/ct-p/masteryconnect",
  },
  {
    title: "Release Notes",
    from: "/mastery/connect/releases",
    to: "https://community.canvaslms.com/t5/Mastery-Connect-Releases/tkb-p/masteryconnect",
  },
  {
    title: "API",
    from: "/mastery/connect/api",
    to: "https://docs.google.com/document/d/19TxyeRzF6nyJDY6ej2dZozbE87JdUygw",
  },
  {
    title: "Mobile App (Android)",
    from: "/mastery/connect/android",
    to: "https://play.google.com/store/apps/dev?id=8869528477632015729&hl=EN&gl=US",
  },
  {
    title: "Mobile App (iOS)",
    from: "/canvas/lms/ios",
    to: "https://apps.apple.com/us/developer/masteryconnect/id413937396",
  },
];

export default EN.map((links) => ({ ...links, lang: "EN" })) as RedirectLink[];
