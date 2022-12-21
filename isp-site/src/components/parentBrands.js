const ParentBrands = [
  {
    brandName:  "Instructure",
    get title() { return this.brandName.toLowerCase() },
    route:      "/",
    readme:     "https://raw.githubusercontent.com/thedannywahl/instructure-security-package/main/README.md"
  },
  {
    brandName:  "Canvas",
    get title()   { return this.brandName.toLowerCase() },
    get route()   { return `/${this.title}` },
    readme:       `https://raw.githubusercontent.com/thedannywahl/instructure-security-package/main/README-Canvas.md`
  },
  {
    brandName:  "Mastery",
    get title()   { return this.brandName.toLowerCase() },
    get route()   { return `/${this.title}` },
    get readme()  { return `https://raw.githubusercontent.com/thedannywahl/instructure-security-package/main/README-${this.brandName}.md` }
  },
  {
    brandName:  "Elevate",
    get title()   { return this.brandName.toLowerCase() },
    get route()   { return `/${this.title}` },
    get readme()  { return `https://raw.githubusercontent.com/thedannywahl/instructure-security-package/main/README-${this.brandName}.md` }
  },
  {
    brandName:  "Impact",
    get title()   { return this.brandName.toLowerCase() },
    get route()   { return `/${this.title}` },
    get readme()  { return `https://raw.githubusercontent.com/thedannywahl/instructure-security-package/main/README-${this.brandName}.md` }
  },
]

export default ParentBrands
