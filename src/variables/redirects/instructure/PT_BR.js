const PT_BR = [
  {
    title: "Pagina inicial",
    from: "/pt-br/home",
    to: "https://www.instructure.com/pt-br/",
  },
  {
    title: "Contato",
    from: "/pt-br/contato",
    to: "https://www.instructure.com/pt-br/contato/",
  },
  {
    title: "Contato",
    from: "/pt-br/contato",
    to: "https://www.instructure.com/pt-br/contato/",
  },
  {
    title: "Privacidade",
    from: "/pt-br/privacidade",
    to: "https://www.instructure.com/pt-br/canvas/privacidade/",
  },
  {
    title: "Segurança",
    from: "/pt-br/seguranca",
    to: "https://www.instructure.com/pt-br/canvas/seguranca/",
  },
  {
    title: "Nossa História",
    from: "/pt-br/historia",
    to: "https://www.instructure.com/pt-br/sobre/nossa-historia",
  },
];

export default PT_BR.map((links) => ({ ...links, lang: "PT_BR" }));
