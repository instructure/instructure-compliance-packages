const EN: RedirectLinkPartial[] = [
  {
    title: "CAIQ",
    from: "/aws/caiq/dl",
    to: "https://raw.githubusercontent.com/thedannywahl/instructure-security-package/canvas-lms/Amazon%20Web%20Services/AWS%20CAIQ.pdf",
  },
  {
    title: "Cyber Essentials+ Certificate",
    from: "/aws/ce/dl",
    to: "https://raw.githubusercontent.com/thedannywahl/instructure-security-package/canvas-lms/Amazon%20Web%20Services/AWS%20Cyber%20Essentials%20Plus%20Certificate.pdf",
  },
  {
    title: "CSA Star Level 2 Certificate",
    from: "/aws/csa/dl",
    to: "https://raw.githubusercontent.com/thedannywahl/instructure-security-package/canvas-lms/Amazon%20Web%20Services/AWS%20CSA%20Star%20Certification.pdf",
  },
  {
    title: "ISO 27001 Certificate",
    from: "/aws/iso/dl",
    to: "https://raw.githubusercontent.com/thedannywahl/instructure-security-package/canvas-lms/Amazon%20Web%20Services/AWS%20ISO%2027001%20Certificate.pdf",
  },
  {
    title: "ISO 9001 Certificate",
    from: "/aws/iso9001/dl",
    to: "https://raw.githubusercontent.com/thedannywahl/instructure-security-package/canvas-lms/Amazon%20Web%20Services/AWS%20ISO%209001%20Certificate.pdf",
  },
  {
    title: "SOC 3 Report",
    from: "/aws/soc/dl",
    to: "https://raw.githubusercontent.com/thedannywahl/instructure-security-package/canvas-lms/Amazon%20Web%20Services/AWS%20SOC%203.pdf",
  },
];
export default EN.map((links) => ({ ...links, lang: "EN" })) as RedirectLink[];
