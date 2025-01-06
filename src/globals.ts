export type GlobalBrand = (typeof globalBrands)[number];

export const globalBrands = [
  "Instructure",
  "Canvas",
  "Mastery",
  "Elevate",
  "Impact",
  "LearnPlatform",
  "Intelligent Insights",
  "Parchment",
] as const;

export type GlobalSubBrand = (typeof globalSubBrands)[number];

export const globalSubBrands = [
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
  "Elevate Data Quality",
  "Elevate Data Sync",
  "Elevate Standards Alignment",
  "LearnPlatform",
] as const;

export type Global = {
  Brands: readonly GlobalBrand[];
  SubBrands: readonly GlobalSubBrand[];
  Conveyor: URL["href"];
  Links: URL["href"];
};

export const Globals: Global = {
  Brands: globalBrands,
  SubBrands: globalSubBrands,
  Conveyor:
    "https://app.conveyor.com/profile/b61af872-3391-492e-af74-85cc6ac44701",
  Links:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQXWM1qxpmOn2nbubgaf2qncwNvfSpKBkgPpVSBIjloXNTnAlEOqmr9ylgqO82iIC7pEeVfD_TI8xmd/pub?output=csv",
} as const;

export default Globals;

export const { Brands, SubBrands, Conveyor, Links } = Globals;
