import global from "../../globals.ts";

const branchName = "canvas-lms";
const repo = `${global.raw}/${global.owner}/${global.repo}`;
const branch = `${repo}/${branchName}`;
const EN: RedirectLinkPartial[] = [
  {
    title: "Security Audit Report",
    from: "/canvas/audit/dl",
    to: `${branch}/Canvas%20LMS/Canvas%20Security%20Audit%20Report.pdf`,
  },
  {
    title: "Try Canvas (FFT)",
    from: "/canvas/try",
    to: "https://www.instructure.com/try-canvas",
  },
  {
    title: "Community",
    from: "/canvas/community",
    to: "https://community.canvaslms.com/t5/Canvas/ct-p/canvas",
  },
  {
    title: "Roadmap",
    from: "/canvas/roadmap",
    to: "https://community.canvaslms.com/t5/Canvas-Product-Roadmap/ct-p/canvas-product-roadmap",
  },
  {
    title: "Ideas",
    from: "/canvas/ideas",
    to: "https://community.canvaslms.com/t5/Canvas-Ideas-and-Themes/ct-p/canvas-ideas-themes?tab=identified",
  },
];

export default EN.map((links) => ({ ...links, lang: "EN" })) as RedirectLink[];
