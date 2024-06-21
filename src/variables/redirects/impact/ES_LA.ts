import global from "../../globals.ts";

const branchName = "impact-ES_LA";
const repo = `${global.raw}/${global.owner}/${global.repo}`;
const branch = `${repo}/${branchName}`;

const ES_LA: RedirectLinkPartial[] = [
  {
    title: "Compliance Package",
    from: "/es-la/impact/dl",
    to: `${repo}/archive/refs/heads/${branchName}.zip`,
  },
  {
    title: "Papel de Arquitectura",
    from: "/es-la/impact/arquitectura/dl",
    to: `${branch}/Impact/Impact%20Architecture_ES.pdf`,
  },
  {
    title: "HECVAT Lite",
    from: "/es-la/impact/hecvat/dl",
    to: `${branch}/Impact/Impact%20HECVAT%20Lite.xlsx`,
  },
  {
    title: "Certificado de Nivel 2 de TX-RAMP",
    from: "/es-la/impact/tx-ramp/dl",
    to: `${branch}/Impact/Impact%20TX-RAMP%20Level%202%20Certification.pdf`,
  },
];

export default ES_LA.map((links) => ({
  ...links,
  lang: "ES_LA",
})) as RedirectLink[];
