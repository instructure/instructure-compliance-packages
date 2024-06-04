const ES_LA: RedirectLinkPartial[] = [
  {
    title: "Compliance Package",
    from: "/es-la/canvas/credentials/dl",
    to: "https://github.com/thedannywahl/instructure-security-package/archive/refs/heads/canvas-credentials-ES_LA.zip",
  },
  {
    title: "VPAT",
    from: "/es-la/canvas/credentials/vpat/dl",
    to: "https://raw.githubusercontent.com/thedannywahl/instructure-security-package/canvas-credentials-ES_LA/Canvas%20Credentials/Canvas%20Credentials%20(formerly%20Badgr)%20VPAT.pdf",
  },
  {
    title: "Papel de Arquitectura",
    from: "/es-la/canvas/credentials/arquitectura/dl",
    to: "https://raw.githubusercontent.com/thedannywahl/instructure-security-package/canvas-credentials-ES_LA/Canvas%20Credentials/Canvas%20Credentials%20Architecture_ES.pdf",
  },
  {
    title: "HECVAT",
    from: "/es-la/canvas/credentials/hecvat/dl",
    to: "https://raw.githubusercontent.com/thedannywahl/instructure-security-package/canvas-credentials-ES_LA/Canvas%20Credentials/Canvas%20Credentials%20HECVAT%20Full.xlsx",
  },
  {
    title: "Certificado de Nivel 2 de TX-RAMP",
    from: "/es-la/canvas/credentials/tx-ramp/dl",
    to: "https://raw.githubusercontent.com/thedannywahl/instructure-security-package/canvas-credentials-ES_LA/Canvas%20Credentials/Canvas%20Credentials%20TX-RAMP%20Level%202%20Certification.pdf",
  },
];

export default ES_LA.map((links) => ({ ...links, lang: "ES_LA" }));
