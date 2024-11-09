import { ParentBrands } from "../variables/brands.tsx";

export function getBrandDetail(
  k: keyof BrandDetail,
  globalBrand: GlobalBrand = "Instructure",
): BrandDetail[typeof k] | "Instructure" {
  const brandDetail = ParentBrands.find((b) => b.brandName === globalBrand);
  return brandDetail ? brandDetail[k] : "Instructure";
}
