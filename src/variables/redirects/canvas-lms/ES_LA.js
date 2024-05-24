const ES_LA = [
  {
    title: "Compliance Package (ES-LA)",
    from: "/es-la/canvas/lms/dl",
    to: "https://github.com/thedannywahl/instructure-security-package/archive/canvas-lms-ES_LA.zip",
  },
  {
    title: "Papel de Arquitectura",
    from: "/es-la/canvas/lms/arquitectura/dl",
    to: "https://raw.githubusercontent.com/thedannywahl/instructure-security-package/canvas-lms-ES_LA/Canvas%20LMS/Canvas%20LMS%20Architecture_ES.pdf",
  },
  {
    title: "HECVAT",
    from: "/es-la/canvas/lms/hecvat/dl",
    to: "https://raw.githubusercontent.com/thedannywahl/instructure-security-package/canvas-lms-ES_LA/Canvas%20LMS/Canvas%20LMS%20HECVAT%20Full.xlsx",
  },
  {
    title: "K12CVAT",
    from: "/es-la/canvas/lms/k12cvat/dl",
    to: "https://raw.githubusercontent.com/thedannywahl/instructure-security-package/canvas-lms-ES_LA/Canvas%20LMS/Canvas%20LMS%20K-12CVAT-Lite.xlsx",
  },
  {
    title: "Informe SOC 3",
    from: "/es-la/canvas/lms/soc/dl",
    to: "https://raw.githubusercontent.com/thedannywahl/instructure-security-package/canvas-lms-ES_LA/Canvas%20LMS/Canvas%20LMS%20SOC%203.pdf",
  },
  {
    title: "Certificado de Nivel 2 de TX-RAMP",
    from: "/es-la/canvas/lms/txramp/dl",
    to: "https://raw.githubusercontent.com/thedannywahl/instructure-security-package/canvas-lms-ES_LA/Canvas%20LMS/Canvas%20LMS%20TX-RAMP%20Level%202%20Certification.pdf",
  },
  {
    title: "Página de inicio (HE)",
    from: "/es-la/canvas/lms",
    to: "https://www.instructure.com/es/canvas/educacion-superior/",
  },
  {
    title: "Página de inicio (K12)",
    from: "/es-la/canvas/lms/basica",
    to: "https://www.instructure.com/es/educacion-basica/",
  },
  {
    title: "Guías",
    from: "/es-la/canvas/guias",
    to: "https://community.canvaslms.com/t5/Recursos-en-Espa%C3%B1ol-Spanish/ct-p/espanol_resources",
  },
  {
    title: "Notas de implementación",
    from: "/es-la/canvas/lms/publicacion",
    to: "https://community.canvaslms.com/t5/Espa%C3%B1ol/tkb-p/canvas-release-espanol",
  },
];

export default ES_LA.map((links) => ({ ...links, lang: "ES_LA" }));
