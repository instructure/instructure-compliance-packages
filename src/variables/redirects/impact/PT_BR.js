const PT_BR = [
  {
    title: "Compliance Package",
    from: "/pt-br/impact/dl",
    to: "https://github.com/thedannywahl/instructure-security-package/archive/refs/heads/impact-PT_BR.zip",
    lang: "PT_BR",
  },
  {
    title: "Papel de Arquitetura",
    from: "/pt-br/impact/arquitetura/dl",
    to: "https://raw.githubusercontent.com/thedannywahl/instructure-security-package/impact-PT_BR/Impact/Impact%20Architecture_PT.pdf",
  },
  {
    title: "HECVAT Lite",
    from: "/pt-br/impact/hecvat/dl",
    to: "https://raw.githubusercontent.com/thedannywahl/instructure-security-package/impact-PT_BR/Impact/Impact%20HECVAT%20Lite.xlsx",
  },
  {
    title: "Certificado de Nível 2 do TX-RAMP",
    from: "/pt-br/impact/tx-ramp/dl",
    to: "https://raw.githubusercontent.com/thedannywahl/instructure-security-package/impact-PT_BR/Impact/Impact%20TX-RAMP%20Level%202%20Certification.pdf",
  },
];

export default PT_BR.map((links) => ({ ...links, lang: "PT_BR" }));
