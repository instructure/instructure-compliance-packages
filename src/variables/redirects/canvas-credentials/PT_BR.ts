const PT_BR: RedirectLinkPartial[] = [
  {
    title: "Compliance Package",
    from: "/pt-br/canvas/credentials/dl",
    to: "https://github.com/thedannywahl/instructure-security-package/archive/refs/heads/canvas-credentials-PT_BR.zip",
  },
  {
    title: "VPAT",
    from: "/pt-br/canvas/credentials/vpat/dl",
    to: "https://raw.githubusercontent.com/thedannywahl/instructure-security-package/canvas-credentials-PT_BR/Canvas%20Credentials/Canvas%20Credentials%20(formerly%20Badgr)%20VPAT.pdf",
  },
  {
    title: "Papel de Arquitectura",
    from: "/pt-br/canvas/credentials/arquitectura/dl",
    to: "https://raw.githubusercontent.com/thedannywahl/instructure-security-package/canvas-credentials-PT_BR/Canvas%20Credentials/Canvas%20Credentials%20Architecture_PT.pdf",
  },
  {
    title: "HECVAT",
    from: "/pt-br/canvas/credentials/hecvat/dl",
    to: "https://raw.githubusercontent.com/thedannywahl/instructure-security-package/canvas-credentials-PT_BR/Canvas%20Credentials/Canvas%20Credentials%20HECVAT%20Full.xlsx",
  },
  {
    title: "Certificado de Nível 2 de TX-RAMP",
    from: "/pt-br/canvas/credentials/tx-ramp/dl",
    to: "https://raw.githubusercontent.com/thedannywahl/instructure-security-package/canvas-credentials-PT_BR/Canvas%20Credentials/Canvas%20Credentials%20TX-RAMP%20Level%202%20Certification.pdf",
  },
];

export default PT_BR.map((links) => ({ ...links, lang: "PT_BR" }));
