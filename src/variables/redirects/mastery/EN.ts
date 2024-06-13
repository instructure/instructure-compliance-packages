const EN: RedirectLinkPartial[] = [
  {
    title: "Community",
    from: "/mastery/community",
    to: "https://community.canvaslms.com/t5/Mastery/ct-p/mastery",
  },
  {
    title: "Roadmap",
    from: "/mastery/roadmap",
    to: "https://community.canvaslms.com/t5/Mastery-Product-Roadmap/ct-p/mastery-product-roadmap",
  },
];

export default EN.map((links) => ({ ...links, lang: "EN" })) as RedirectLink[];
