import {
  IconCanvasLogoLine,
  IconElevateLogoLine,
  IconImpactLogoLine,
  IconInstructureLogoLine,
  IconMasteryLogoLine,
} from "@instructure/ui";
import { describe, expect, it } from "vitest";
import { ParentBrands, globalBrands, globalSubBrands } from "./brands.tsx";

describe("globalBrands", () => {
  it("should contain the expected brands", () => {
    expect(globalBrands).toEqual([
      "Instructure",
      "Canvas",
      "Mastery",
      "Elevate",
      "Impact",
      "LearnPlatform",
      "Intelligent Insights",
      "Parchment",
    ]);
  });
});

describe("globalSubBrands", () => {
  it("should contain the expected sub-brands", () => {
    expect(globalSubBrands).toEqual([
      "Instructure",
      "Canvas",
      "Mastery",
      "Elevate",
      "Impact",
      "LearnPlatform",
      "Intelligent Insights",
      "Parchment",
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
      "Learn Platform",
    ]);
  });
});

describe("ParentBrands", () => {
  it("should contain the expected brand details", () => {
    expect(ParentBrands).toHaveLength(8);
  });

  it("should have correct properties for each brand", () => {
    const expectedBrands = [
      {
        brandName: "Instructure",
        title: "instructure",
        route: "/",
        readme: expect.stringContaining("README.md"),
        color: "#287A9F",
        Icon: IconInstructureLogoLine,
      },
      {
        brandName: "Canvas",
        title: "canvas",
        route: "/canvas",
        readme: expect.stringContaining("README-Canvas.md"),
        color: "#E72429",
        Icon: IconCanvasLogoLine,
      },
      {
        brandName: "Mastery",
        title: "mastery",
        route: "/mastery",
        readme: expect.stringContaining("README-Mastery.md"),
        color: "#24A159",
        Icon: IconMasteryLogoLine,
      },
      {
        brandName: "Elevate",
        title: "elevate",
        route: "/elevate",
        readme: expect.stringContaining("README-Elevate.md"),
        color: "#0097D3",
        Icon: IconElevateLogoLine,
      },
      {
        brandName: "Impact",
        title: "impact",
        route: "/impact",
        readme: expect.stringContaining("README-Impact.md"),
        color: "#F76400",
        Icon: IconImpactLogoLine,
      },
      {
        brandName: "LearnPlatform",
        title: "learnplatform",
        route: "/learnplatform",
        readme: expect.stringContaining("README-LearnPlatform.md"),
        color: "#0077CC",
        Icon: expect.any(Function),
      },
      {
        brandName: "Intelligent Insights",
        title: "intelligent insights",
        route: "/intelligent-insights",
        readme: expect.stringContaining("README-Intelligent-Insights.md"),
        color: "#287A9F",
        Icon: IconInstructureLogoLine,
      },
      {
        brandName: "Parchment",
        title: "parchment",
        route: "/parchment",
        readme: expect.stringContaining("README-Parchment.md"),
        color: "#0093b2",
        Icon: expect.any(Function),
      },
    ];

    ParentBrands.forEach((brand, index) => {
      expect(brand.brandName).toStrictEqual(expectedBrands[index].brandName);
      expect(brand.title).toStrictEqual(expectedBrands[index].title);
      expect(brand.route).toStrictEqual(expectedBrands[index].route);
      expect(brand.readme).toStrictEqual(expectedBrands[index].readme);
      expect(brand.color).toStrictEqual(expectedBrands[index].color);
      expect(brand.Icon).toStrictEqual(expectedBrands[index].Icon);
    });
  });
});
