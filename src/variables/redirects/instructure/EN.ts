import global from "../../globals.ts";

const repo = `${global.raw}/${global.owner}/${global.repo}`;
const branch = `${repo}/${global.branch}`;

const EN: UnbrandedRedirectLinkPartial[] = [
  {
    title: "Security White Paper",
    from: "/security/dl",
    to: `${branch}/Instructure/Instructure%20Security%20Overview.pdf`,
  },
  {
    title: "Business Continuity White Paper",
    from: "/bc/dl",
    to: `${branch}/Instructure/Instructure%20Business%20Continuity%20%26%20Disaster%20Recovery.pdf`,
  },
  {
    title: "CAIQ",
    from: "/caiq/dl",
    to: `${branch}/Instructure/Instructure%20ESG%20Report%20FY2023.pdf`,
  },
  {
    title: "CSA Star Certificate",
    from: "/csa/dl",
    to: `${branch}/Instructure/Instructure%20CSA%20STAR%20Certificate.pdf`,
  },
  {
    title: "Cyber Essentials+ Certificate",
    from: "/ce/dl",
    to: `${branch}/Instructure/Instructure%20Cyber%20Essentials%20Plus.pdf`,
  },
  {
    title: "Environmental, Social, and Governance Report",
    from: "/esg/dl",
    to: `${branch}/Instructure/Instructure%20ESG%20Report%20FY2023.pdf`,
  },
  {
    title: "Instructure, Inc. Certificate of Insurance",
    from: "/coi/dl",
    to: `${branch}/Instructure/Instructure%20Inc%20COI.pdf`,
  },
  {
    title: "Instructure Global Certificate of Insurance",
    from: "/coi-global/dl",
    to: `${branch}/Instructure/Instructure%20Global%20COI.pdf`,
  },
  {
    title: "ISO 27001 Certificate",
    from: "/iso/dl",
    to: `${branch}/Instructure/Instructure%20ISO%2027001%20Compliance%20Certificate.pdf`,
  },
  {
    title: "Quality Assurance Program",
    from: "/qa/dl",
    to: `${branch}/Instructure/Instructure%20Quality%20Assurance%20Program.pdf`,
  },
  {
    title: "Home",
    from: "/home",
    to: "https://www.instructure.com/",
  },
  {
    title: "Roadmap",
    from: "/roadmap",
    to: "https://community.canvaslms.com/t5/Instructure-Roadmap/ct-p/instructure-roadmap/",
  },
  {
    title: "Accessibility",
    from: "/a11y",
    to: "https://www.instructure.com/accessibility/",
  },
  {
    title: "Contact",
    from: "/contact",
    to: "https://www.instructure.com/contact-us/",
  },
  {
    title: "Privacy",
    from: "/privacy",
    to: "https://www.instructure.com/canvas/privacy/",
  },
  {
    title: "Security",
    from: "/security",
    to: "https://www.instructure.com/products/canvas/security/",
  },
  {
    title: "Trust Center",
    from: "/trust",
    to: "https://www.instructure.com/trust-center/",
  },
  {
    title: "Community",
    from: "/community",
    to: "https://community.canvaslms.com/",
  },
  {
    title: "Terms & Conditions",
    from: "/tos",
    to: "https://www.instructure.com/policies/master-terms-conditions/",
  },
  {
    title: "Global Terms & Conditions",
    from: "/tos/global",
    to: "https://www.instructure.com/policies/global/master-terms-and-conditions/",
  },
  {
    title: "Acceptable Use Policy",
    from: "/aup",
    to: "https://www.instructure.com/policies/acceptable-use/",
  },
  {
    title: "Data Privacy Addendum",
    from: "/dpa",
    to: "https://www.instructure.com/policies/data-processing/",
  },
  {
    title: "Third-party Service Providers",
    from: "/subprocessors",
    to: "https://community.canvaslms.com/t5/Privacy-Articles/Instructure-s-Third-Party-Processing-Guide/ta-p/606339?attachment-id=10429",
  },
  {
    title: "Investor Relations",
    from: "/investors",
    to: "https://ir.instructure.com/overview/default.aspx",
  },
  {
    title: "Status",
    from: "/status",
    to: "https://status.instructure.com/",
  },
  {
    title: "CSA Star Registration",
    from: "/csa",
    to: "https://cloudsecurityalliance.org/star/registry/instructure/",
  },
  {
    title: "1EdTech Registrations",
    from: "/1edtech",
    to: "https://site.imsglobal.org/certifications?query=instructure",
  },
  {
    title: "Our Story",
    from: "/story",
    to: "https://www.instructure.com/about/our-story",
  },
  {
    title: "Study Hall",
    from: "/resources",
    to: "https://www.instructure.com/resources/",
  },
  {
    title: "EduAppCenter",
    from: "/apps",
    to: "https://www.eduappcenter.com/",
  },
  {
    title: "ESG Report (online)",
    from: "/esg",
    to: "https://instructure.com/esg-report",
  },
];

export default EN.map((links) => ({ ...links, lang: "EN" })) as RedirectLink[];
