import { describe, expect, it } from "vitest";
import {
  type GlobalBrand,
  type GlobalSubBrand,
  Globals,
  globalBrands,
  globalSubBrands,
} from "./globals.ts";

describe("globalBrands", () => {
  it("should be an array", () => {
    expect(Array.isArray(globalBrands)).toBe(true);
  });

  it("should contain the correct brands", () => {
    const expectedBrands: readonly GlobalBrand[] = [
      "Instructure",
      "Canvas",
      "Mastery",
      "Elevate",
      "Impact",
      "LearnPlatform",
      "Intelligent Insights",
      "Parchment",
    ];
    expect(globalBrands).toEqual(expectedBrands);
  });

  it("should have the correct length", () => {
    expect(globalBrands.length).toBe(8);
  });

  it('should contain "Canvas"', () => {
    expect(globalBrands).toContain("Canvas");
  });

  it('should not contain "NonExistentBrand"', () => {
    expect(globalBrands).not.toContain("NonExistentBrand");
  });
});

describe("globalSubBrands", () => {
  it("should be an array", () => {
    expect(Array.isArray(globalSubBrands)).toBe(true);
  });

  it("should contain the correct sub-brands", () => {
    const expectedSubBrands: readonly GlobalSubBrand[] = [
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
    ];
    expect(globalSubBrands).toEqual(expectedSubBrands);
  });

  it("should have the correct length", () => {
    const expectedLength: number = globalBrands.length + 14;
    expect(globalSubBrands.length).toBe(expectedLength);
  });

  it('should contain "Canvas LMS"', () => {
    expect(globalSubBrands).toContain("Canvas LMS");
  });

  it('should not contain "NonExistentSubBrand"', () => {
    expect(globalSubBrands).not.toContain("NonExistentSubBrand");
  });
});

describe("Globals", () => {
  it("should have a Brands property that is an array", () => {
    expect(Array.isArray(Globals.Brands)).toBe(true);
  });

  it("should have a SubBrands property that is an array", () => {
    expect(Array.isArray(Globals.SubBrands)).toBe(true);
  });

  it("should have a Conveyor property that is a string", () => {
    expect(typeof Globals.Conveyor).toBe("string");
  });

  it("should have a Links property that is a string", () => {
    expect(typeof Globals.Links).toBe("string");
  });

  it("should contain the correct Conveyor URL", () => {
    const expectedConveyorUrl: (typeof Globals)["Conveyor"] =
      "https://app.conveyor.com/profile/b61af872-3391-492e-af74-85cc6ac44701";
    expect(Globals.Conveyor).toBe(expectedConveyorUrl);
  });

  it("should contain the correct Links URL", () => {
    const expectedLinksUrl: (typeof Globals)["Links"] =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQXWM1qxpmOn2nbubgaf2qncwNvfSpKBkgPpVSBIjloXNTnAlEOqmr9ylgqO82iIC7pEeVfD_TI8xmd/pub?output=csv";
    expect(Globals.Links).toBe(expectedLinksUrl);
  });
});
