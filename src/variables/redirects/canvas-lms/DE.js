const DE = [
  {
    title: "Startseite",
    from: "/de/canvas/lms",
    to: "https://www.instructure.com/de/hochschule/produkt/canvas/canvas-lms/",
  },
  {
    title: "Handbücher",
    from: "/de/canvas/handbuch",
    to: "https://community.canvaslms.com/t5/Ressourcen-auf-Deutsch-German/ct-p/german_resources",
  },
];

export default DE.map((links) => ({ ...links, lang: "DE" }));
