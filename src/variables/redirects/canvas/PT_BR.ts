const PT_BR: RedirectLink[] = [
  {
    title: "Comunidade",
    from: "/pt-br/canvas/comunidade",
    to: "https://community.canvaslms.com/t5/Recursos-em-Portugu%C3%AAs-Portuguese/ct-p/portuguese_resources",
  },
];

export default PT_BR.map((links) => ({ ...links, lang: "PT_BR" }));
