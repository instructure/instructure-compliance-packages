const DE: RedirectLinkPartial[] = [
  {
    title: "Startseite",
    from: "/de/home",
    to: "https://www.instructure.com/de",
  },
  {
    title: "Kontakt",
    from: "/de/kontakt",
    to: "https://www.instructure.com/de/contact-us",
  },
];

export default DE.map((links) => ({ ...links, lang: "DE" })) as RedirectLink[];
