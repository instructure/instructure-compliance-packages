import global from "../../globals.ts";

const branchName = "canvas-lms";
const repo = `${global.raw}/${global.owner}/${global.repo}`;
const branch = `${repo}/${branchName}`;

const EN: RedirectLinkPartial[] = [
  {
    title: "Compliance Package",
    from: "/canvas/lms/dl",
    to: `${repo}/archive/refs/heads/${branchName}.zip`,
  },
  {
    title: "Architecture Paper",
    from: "/canvas/lms/architecture/dl",
    to: `${branch}/Canvas%20LMS/Canvas%20LMS%20Architecture.pdf`,
  },
  {
    title: "HECVAT",
    from: "/canvas/lms/hecvat/dl",
    to: `${branch}/Canvas%20LMS/Canvas%20LMS%20HECVAT%20Full.xlsx`,
  },
  {
    title: "K12CVAT",
    from: "/canvas/lms/k12cvat/dl",
    to: `${branch}/Canvas%20LMS/Canvas%20LMS%20K12CVAT%20Full.xlsx`,
  },
  {
    title: "SOC 3 Report",
    from: "/canvas/lms/soc/dl",
    to: `${branch}/Canvas%20LMS/Canvas%20LMS%20SOC%203.pdf`,
  },
  {
    title: "TX-RAMP Level 2 Certificate",
    from: "/canvas/lms/txramp/dl",
    to: `${branch}/Canvas%20LMS/Canvas%20LMS%20TX-RAMP%20Level%202%20Certification.pdf`,
  },
  {
    title: "Home (HE)",
    from: "/canvas/lms",
    to: "https://www.instructure.com/higher-education/products/canvas/canvas-lms/",
  },
  {
    title: "Home (K12)",
    from: "/canvas/lms/k12",
    to: "https://www.instructure.com/k12/products/canvas/canvas-lms/",
  },
  {
    title: "VPAT",
    from: "/canvas/lms/vpat",
    to: "https://www.instructure.com/products/canvas/accessibility/",
  },
  {
    title: "Guides",
    from: "/canvas/lms/guides",
    to: "https://community.canvaslms.com/t5/Canvas-Guides/ct-p/canvas_guides/",
  },
  {
    title: "Release Notes",
    from: "/canvas/lms/releases",
    to: "https://community.canvaslms.com/t5/Canvas-Releases/tkb-p/canvas-release",
  },
  {
    title: "API",
    from: "/canvas/lms/api",
    to: "https://canvas.instructure.com/doc/api/index.html",
  },
];

export default EN.map((links) => ({ ...links, lang: "EN" })) as RedirectLink[];
