const DE: RedirectLink[] = [
  {
    title: "Startseite",
    from: "/de/home",
    to: "https://www.instructure.com/de",
  },
  {
    title: "Contato",
    from: "/pt-br/contato",
    to: "https://www.instructure.com/pt-br/contato/",
  },
  {
    title: "Kontakt",
    from: "/kontakt",
    to: "https://www.instructure.com/de/contact-us",
  },
];

export default DE.map((links) => ({ ...links, lang: "DE" }));
