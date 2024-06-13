const EN: RedirectLinkPartial[] = [
  {
    title: "Formatives Home",
    from: "/mastery/view/formative",
    to: "https://www.instructure.com/k12/products/mastery/mastery-view-formative-assessments/",
  },
  {
    title: "Predictives Home",
    from: "/mastery/view/predictive",
    to: "https://www.instructure.com/k12/products/mastery/mastery-view-predictive-assessments/",
  },
];

export default EN.map((links) => ({ ...links, lang: "EN" }));
