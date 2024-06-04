const ES_LA: RedirectLink[] = [
  {
    title: "Communidad",
    from: "/es-la/canvas/lms/communidad",
    to: "https://community.canvaslms.com/t5/Recursos-en-Espa%C3%B1ol-Spanish/ct-p/espanol_resources",
  },
];

export default ES_LA.map((links) => ({ ...links, lang: "ES_LA" }));
