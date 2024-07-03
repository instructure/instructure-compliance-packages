import global from "../../globals.ts";

const branchName = "impact-PT_BR";
const github = `${global.gh}/${global.owner}/${global.repo}/archive/refs/heads`;
const repo = `${global.raw}/${global.owner}/${global.repo}`;
const branch = `${repo}/${branchName}`;

const PT_BR: RedirectLinkPartial[] = [
  {
    title: "Compliance Package",
    from: "/pt-br/impact/dl",
    to: `${github}/${branchName}.zip`,
  },
  {
    title: "Papel de Arquitetura",
    from: "/pt-br/impact/arquitetura/dl",
    to: `${branch}/Impact/Impact%20Architecture_PT.pdf`,
  },
  {
    title: "HECVAT",
    from: "/pt-br/impact/hecvat/dl",
    to: `${branch}/Impact/Impact%20by%20Instructure%20HECVAT%20Full.xlsx`,
  },
  {
    title: "Certificado de Nível 2 do TX-RAMP",
    from: "/pt-br/impact/tx-ramp/dl",
    to: `${branch}/Impact/Impact%20TX-RAMP%20Level%202%20Certification.pdf`,
  },
];

export default PT_BR.map((links) => ({
  ...links,
  lang: "PT_BR",
})) as RedirectLink[];
