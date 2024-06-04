const EN: RedirectLink[] = [
  {
    title: "Community",
    from: "/elevate/community",
    to: "https://community.canvaslms.com/t5/Elevate/ct-p/elevate",
  },
  {
    title: "Roadmap",
    from: "/elevate/roadmap",
    to: "https://community.canvaslms.com/t5/Elevate-Product-Roadmap/ct-p/elevate-product-roadmap",
  },
];

export default EN.map((links) => ({ ...links, lang: "EN" }));
