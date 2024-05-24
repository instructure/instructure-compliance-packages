const ES_LA = [
  {
    title: "Compliance Package",
    from: "/es-la/impact/dl",
    to: "https://github.com/thedannywahl/instructure-security-package/archive/refs/heads/impact-ES_LA.zip",
    lang: "ES_LA",
  },
  {
    title: "Papel de Arquitectura",
    from: "/es-la/impact/arquitectura/dl",
    to: "https://raw.githubusercontent.com/thedannywahl/instructure-security-package/impact-ES_LA/Impact/Impact%20Architecture_ES.pdf",
  },
  {
    title: "HECVAT Lite",
    from: "/es-la/impact/hecvat/dl",
    to: "https://raw.githubusercontent.com/thedannywahl/instructure-security-package/impact-ES_LA/Impact/Impact%20HECVAT%20Lite.xlsx",
  },
  {
    title: "Certificado de Nivel 2 de TX-RAMP",
    from: "/es-la/impact/tx-ramp/dl",
    to: "https://raw.githubusercontent.com/thedannywahl/instructure-security-package/impact-ES_LA/Impact/Impact%20TX-RAMP%20Level%202%20Certification.pdf",
  },
];

export default ES_LA.map((links) => ({ ...links, lang: "ES_LA" }));
