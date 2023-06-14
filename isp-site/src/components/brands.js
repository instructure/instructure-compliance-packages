export const globalBrands = [
    "Instructure",
    "Canvas",
    "Mastery",
    "Elevate",
    "Impact"
]

export const globalSubBrands = [
    "Canvas LMS",
    "Canvas Mobile",
    "Canvas Studio",
    "Canvas Credentials",
    "Canvas Catalog",
    "Canvas Commons",
    "Canvas Data",
    "Mastery Connect",
    "Mastery Item Bank",
    "Mastery View Assessments",
    "Elevate K-12 Analytics",
    "Elevate Data Quality",
    "Elevate Data Sync",
    "Learn Platform"
, ...globalBrands]

export const ParentBrands = [
    {
      brandName:    globalBrands[0],
      get title()   { return this.brandName.toLowerCase() },
      route:        "/",
      readme:       "https://raw.githubusercontent.com/thedannywahl/instructure-security-package/main/README.md",
      color:        "#287A9F"
    },
    {
      brandName:    globalBrands[1],
      get title()   { return this.brandName.toLowerCase() },
      get route()   { return `/${this.title}` },
      get readme()  { return `https://raw.githubusercontent.com/thedannywahl/instructure-security-package/main/README-${this.brandName}.md` },
      color:        "#E72429"
    },
    {
      brandName:    globalBrands[2],
      get title()   { return this.brandName.toLowerCase() },
      get route()   { return `/${this.title}` },
      get readme()  { return `https://raw.githubusercontent.com/thedannywahl/instructure-security-package/main/README-${this.brandName}.md` },
      color:        "#24A159"
    },
    {
      brandName:    globalBrands[3],
      get title()   { return this.brandName.toLowerCase() },
      get route()   { return `/${this.title}` },
      get readme()  { return `https://raw.githubusercontent.com/thedannywahl/instructure-security-package/main/README-${this.brandName}.md` },
      color:        "#0097D3"
    },
    {
      brandName:    globalBrands[4],
      get title()   { return this.brandName.toLowerCase() },
      get route()   { return `/${this.title}` },
      get readme()  { return `https://raw.githubusercontent.com/thedannywahl/instructure-security-package/main/README-${this.brandName}.md` },
      color:        "#F76400"
    },
  ]


