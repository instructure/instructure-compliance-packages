import global from "../../globals.ts";

const branchName = "canvas-credentials-ES_LA";
const repo = `${global.raw}/${global.owner}/${global.repo}`;
const branch = `${repo}/${branchName}`;

const ES_LA: RedirectLinkPartial[] = [
  {
    title: "Compliance Package",
    from: "/es-la/canvas/credentials/dl",
    to: `${repo}/archive/refs/heads/${branchName}.zip`,
  },
  {
    title: "VPAT",
    from: "/es-la/canvas/credentials/vpat/dl",
    to: `${branch}/Canvas%20Credentials/Canvas%20Credentials%20(formerly%20Badgr)%20VPAT.pdf`,
  },
  {
    title: "Papel de Arquitectura",
    from: "/es-la/canvas/credentials/arquitectura/dl",
    to: `${branch}/Canvas%20Credentials/Canvas%20Credentials%20Architecture_ES.pdf`,
  },
  {
    title: "HECVAT",
    from: "/es-la/canvas/credentials/hecvat/dl",
    to: `${branch}/Canvas%20Credentials/Canvas%20Credentials%20HECVAT%20Full.xlsx`,
  },
  {
    title: "Certificado de Nivel 2 de TX-RAMP",
    from: "/es-la/canvas/credentials/tx-ramp/dl",
    to: `${branch}/Canvas%20Credentials/Canvas%20Credentials%20TX-RAMP%20Level%202%20Certification.pdf`,
  },
];

export default ES_LA.map((links) => ({
  ...links,
  lang: "ES_LA",
})) as RedirectLink[];
