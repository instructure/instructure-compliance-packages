import global from "../../globals.ts";

const branchName = "canvas-credentials-PT_BR";
const repo = `${global.raw}/${global.owner}/${global.repo}`;
const branch = `${repo}/${branchName}`;

const PT_BR: RedirectLinkPartial[] = [
  {
    title: "Compliance Package",
    from: "/pt-br/canvas/credentials/dl",
    to: `${repo}/archive/refs/heads/${branchName}.zip`,
  },
  {
    title: "VPAT",
    from: "/pt-br/canvas/credentials/vpat/dl",
    to: `${branch}/Canvas%20Credentials/Canvas%20Credentials%20(formerly%20Badgr)%20VPAT.pdf`,
  },
  {
    title: "Papel de Arquitectura",
    from: "/pt-br/canvas/credentials/arquitectura/dl",
    to: `${branch}/Canvas%20Credentials/Canvas%20Credentials%20Architecture_PT.pdf`,
  },
  {
    title: "HECVAT",
    from: "/pt-br/canvas/credentials/hecvat/dl",
    to: `${branch}/Canvas%20Credentials/Canvas%20Credentials%20HECVAT%20Full.xlsx`,
  },
  {
    title: "Certificado de Nível 2 de TX-RAMP",
    from: "/pt-br/canvas/credentials/tx-ramp/dl",
    to: `${branch}/Canvas%20Credentials/Canvas%20Credentials%20TX-RAMP%20Level%202%20Certification.pdf`,
  },
];

export default PT_BR.map((links) => ({
  ...links,
  lang: "PT_BR",
})) as RedirectLink[];
