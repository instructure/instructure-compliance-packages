const ES_LA = [
  {
    title: "Página de inicio",
    from: "/es-la/home",
    to: "https://www.instructure.com/es/",
  },
  {
    title: "Contáctenos",
    from: "/es-la/contactenos",
    to: "https://www.instructure.com/es/contactenos/",
  },
  {
    title: "Privacidad",
    from: "/es-la/privicidad",
    to: "https://www.instructure.com/es/canvas/privacidad/",
  },
  {
    title: "Seguridad",
    from: "/es-la/seguridad",
    to: "https://www.instructure.com/es/canvas/seguridad/",
  },
  {
    title: "Nuestra Historia",
    from: "/es-la/historia",
    to: "https://www.instructure.com/es/sobre/nuestra-historia",
  },
];

export default ES_LA.map((links) => ({ ...links, lang: "ES_LA" }));
