const EN = [
  {
    title: "Home",
    from: "/elevate/dataquality",
    to: "https://www.instructure.com/k12/products/elevate/elevate-data-quality/",
  },
  {
    title: "Guides",
    from: "/elevate/dataquality/guides",
    to: "https://community.canvaslms.com/t5/Elevate-Data-Quality/ct-p/certify",
  },
];

export default EN.map((links) => ({ ...links, lang: "EN" }));
