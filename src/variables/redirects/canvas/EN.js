const EN = [
  {
    title: "Security Audit Report",
    from: "/canvas/audit/dl",
    to: "https://github.com/thedannywahl/instructure-security-package/raw/canvas-lms/Canvas%20LMS/Canvas%20Security%20Audit%20Report.pdf",
  },
  {
    title: "Try Canvas (FFT)",
    from: "/try-canvas",
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

export default EN.map((links) => ({ ...links, lang: "EN" }));
