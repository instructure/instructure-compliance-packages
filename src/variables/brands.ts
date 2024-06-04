import global from "./globals.ts";

const readmePrefix = `${global.raw}/${global.owner}/${global.repo}/${global.branch}/README`;

export const globalBrands: GlobalBrand[] = [
  "Instructure",
  "Canvas",
  "Mastery",
  "Elevate",
  "Impact",
  "LearnPlatform",
  "Parchment",
] as const;

export const globalSubBrands: GlobalSubBrand[] = [
  ...globalBrands,
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
  "Learn Platform",
] as const;

export const ParentBrands: BrandDetail[] = [
  {
    brandName: globalBrands[0],
    get title() {
      return this.brandName.toLowerCase();
    },
    route: "/",
    readme: `${readmePrefix}.md`,
    color: "#287A9F",
  },
  {
    brandName: globalBrands[1],
    get title() {
      return this.brandName.toLowerCase();
    },
    get route() {
      return `/${this.title}`;
    },
    get readme() {
      return `${readmePrefix}-${this.brandName}.md`;
    },
    color: "#E72429",
  },
  {
    brandName: globalBrands[2],
    get title() {
      return this.brandName.toLowerCase();
    },
    get route() {
      return `/${this.title}`;
    },
    get readme() {
      return `${readmePrefix}-${this.brandName}.md`;
    },
    color: "#24A159",
  },
  {
    brandName: globalBrands[3],
    get title() {
      return this.brandName.toLowerCase();
    },
    get route() {
      return `/${this.title}`;
    },
    get readme() {
      return `${readmePrefix}-${this.brandName}.md`;
    },
    color: "#0097D3",
  },
  {
    brandName: globalBrands[4],
    get title() {
      return this.brandName.toLowerCase();
    },
    get route() {
      return `/${this.title}`;
    },
    get readme() {
      return `${readmePrefix}-${this.brandName}.md`;
    },
    color: "#F76400",
  },
  {
    brandName: globalBrands[5],
    get title() {
      return this.brandName.toLowerCase();
    },
    get route() {
      return `/${this.title}`;
    },
    get readme() {
      return `${readmePrefix}-${this.brandName}.md`;
    },
    color: "#0077CC",
  },
  {
    brandName: globalBrands[6],
    get title() {
      return this.brandName.toLowerCase();
    },
    get route() {
      return `/${this.title}`;
    },
    get readme() {
      return `${readmePrefix}-${this.brandName}.md`;
    },
    color: "#0093b2",
  },
] as const;
