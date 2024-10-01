import { describe, expect, it } from "vitest";
import global, { owner, repo, branch, url, gh, api, raw } from "./globals.ts";

describe("global object", () => {
  it("should have the correct owner", () => {
    expect(global.owner).toStrictEqual("instructure");
  });

  it("should have the correct repo", () => {
    expect(global.repo).toStrictEqual("instructure-compliance-packages");
  });

  it("should have the correct branch", () => {
    expect(global.branch).toStrictEqual("main");
  });

  it("should have the correct url", () => {
    expect(global.url).toStrictEqual("https://inst.bid");
  });

  it("should have the correct GitHub URL", () => {
    expect(global.gh).toStrictEqual("https://github.com");
  });

  it("should have the correct API URL", () => {
    expect(global.api).toStrictEqual("https://api.github.com");
  });

  it("should have the correct raw URL", () => {
    expect(global.raw).toStrictEqual("https://raw.githubusercontent.com");
  });
});

describe("individual exports", () => {
  it("should export the correct owner", () => {
    expect(owner).toStrictEqual("instructure");
  });

  it("should export the correct repo", () => {
    expect(repo).toStrictEqual("instructure-compliance-packages");
  });

  it("should export the correct branch", () => {
    expect(branch).toStrictEqual("main");
  });

  it("should export the correct url", () => {
    expect(url).toStrictEqual("https://inst.bid");
  });

  it("should export the correct GitHub URL", () => {
    expect(gh).toStrictEqual("https://github.com");
  });

  it("should export the correct API URL", () => {
    expect(api).toStrictEqual("https://api.github.com");
  });

  it("should export the correct raw URL", () => {
    expect(raw).toStrictEqual("https://raw.githubusercontent.com");
  });
});
