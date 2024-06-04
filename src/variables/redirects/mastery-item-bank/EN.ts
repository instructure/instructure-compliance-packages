const EN: RedirectLink[] = [
  {
    title: "Home",
    from: "/mastery/itembank",
    to: "https://www.instructure.com/k12/products/mastery/mastery-item-bank/",
  },
  {
    title: "Guides",
    from: "/mastery/itembank/guides",
    to: "https://community.canvaslms.com/t5/Mastery-Item-Bank/ct-p/mastery-item-bank/",
  },
];

export default EN.map((links) => ({ ...links, lang: "EN" }));
