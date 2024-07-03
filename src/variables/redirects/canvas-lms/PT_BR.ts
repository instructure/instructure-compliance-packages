import global from "../../globals.ts";

const branchName = "canvas-lms-PT_BR";
const github = `${global.gh}/${global.owner}/${global.repo}/archive/refs/heads`;
const repo = `${global.raw}/${global.owner}/${global.repo}`;
const branch = `${repo}/${branchName}`;

const PT_BR: RedirectLinkPartial[] = [
  {
    title: "Compliance Package",
    from: "/pt-br/canvas/lms/dl",
    to: `${github}/${branchName}.zip`,
  },
  {
    title: "Papel de Arquitetura",
    from: "/pt-br/canvas/lms/arquitetura/dl",
    to: `${branch}/Canvas%20LMS/Canvas%20LMS%20Architecture_PT.pdf`,
  },
  {
    title: "HECVAT",
    from: "/pt-br/canvas/lms/hecvat/dl",
    to: `${branch}/Canvas%20LMS/Canvas%20LMS%20HECVAT%20Full.xlsx`,
  },
  {
    title: "K12CVAT",
    from: "/pt-br/canvas/lms/k12cvat/dl",
    to: `${branch}/Canvas%20LMS/Canvas%20LMS%20K-12CVAT-Lite.xlsx`,
  },
  {
    title: "Relatório SOC 3",
    from: "/pt-br/canvas/lms/soc/dl",
    to: `${branch}/Canvas%20LMS/Canvas%20LMS%20SOC%203.pdf`,
  },
  {
    title: "Certificado de Nível 2 do TX-RAMP",
    from: "/pt-br/canvas/lms/txramp/dl",
    to: `${branch}/Canvas%20LMS/Canvas%20LMS%20TX-RAMP%20Level%202%20Certification.pdf`,
  },
  {
    title: "Página inicial (HE)",
    from: "/canvas/lms/pt",
    to: "https://www.instructure.com/pt-br/canvas/ensino-superior/",
  },
  {
    title: "Página inicial (K12)",
    from: "/canvas/lms/pt/basica",
    to: "https://www.instructure.com/pt-br/ensino-fundamental-e-medio/",
  },
  {
    title: "Guias",
    from: "/pt-br/canvas/guias",
    to: "https://community.canvaslms.com/t5/Recursos-en-Espa%C3%B1ol-Spanish/ct-p/espanol_resources",
  },
  {
    title: "Notas de lançamento (Canvas LMS)",
    from: "/canvas/lms/lancamentos",
    to: "https://community.canvaslms.com/t5/Portugues/tkb-p/canvas-release-portugues",
  },
];

export default PT_BR.map((links) => ({
  ...links,
  lang: "PT_BR",
})) as RedirectLink[];
