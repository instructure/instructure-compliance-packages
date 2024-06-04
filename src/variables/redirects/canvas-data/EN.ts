const EN: RedirectLink[] = [
  {
    title: "Guides",
    from: "/canvas/data/guides",
    to: "https://community.canvaslms.com/t5/Canvas-Data-Users/gh-p/data",
  },
  {
    title: "API",
    from: "/canvas/data/api",
    to: "https://portal.inshosteddata.com/docs",
  },
];

export default EN.map((links) => ({ ...links, lang: "EN" }));
