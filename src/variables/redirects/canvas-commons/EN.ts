const EN: RedirectLink[] = [
  {
    title: "Home",
    from: "/canvas/commons",
    to: "https://lor.instructure.com/",
  },
  {
    title: "Guides",
    from: "/canvas/commons/guides",
    to: "https://community.canvaslms.com/t5/Canvas-Commons/tkb-p/commons",
  },
  {
    title: "API",
    from: "/canvas/commons/api",
    to: "https://lor.instructure.com/docs/api/",
  },
];

export default EN.map((links) => ({ ...links, lang: "EN" }));
