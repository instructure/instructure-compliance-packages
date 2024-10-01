/**
 * @fileoverview Unit tests for language utility functions.
 *
 * This file contains tests for the `getLang` and `getStrings` functions
 * from the `langs.ts` module. The tests are written using the `vitest`
 * testing framework.
 *
 * The `getLang` function is tested to ensure it:
 * - Returns the specified language if it exists in `globalLangs`.
 * - Returns 'EN' if the specified language does not exist in `globalLangs`.
 * - Defaults to 'EN' if no language is specified.
 * - Handles case insensitivity.
 *
 * The `getStrings` function is tested to ensure it:
 * - Returns strings for the specified language.
 * - Returns English strings if the specified language is not available.
 * - Defaults to English if no language is specified.
 * - Handles missing keys gracefully.
 *
 * @module utils/langs.test
 */

import { describe, expect, it } from "vitest";
import { getLang, getStrings } from "./langs.ts";

describe("getLang", () => {
  it("should return the specified language if it exists in globalLangs", () => {
    const result = getLang("ES_LA");
    expect(result).toBe("ES_LA");
  });

  it("should return 'EN' if the specified language does not exist in globalLangs", () => {
    //@ts-ignore
    const result = getLang("FR");
    expect(result).toBe("EN");
  });

  it("should default to 'EN' if no language is specified", () => {
    const result = getLang();
    expect(result).toBe("EN");
  });

  it("should handle case insensitivity", () => {
    //@ts-ignore
    const result = getLang("es_la");
    expect(result).toBe("ES_LA");
  });
});

describe("getStrings", () => {
  const pageStrings: PageStrings = {
    greeting: { EN: "Hello", ES_LA: "Hola", PT_BR: "Olá", DE: "Hallo" },
    farewell: {
      EN: "Goodbye",
      ES_LA: "Adiós",
      PT_BR: "Adeus",
      DE: "Auf Wiedersehen",
    },
    welcome: {
      EN: "Welcome",
      ES_LA: "Bienvenido",
      PT_BR: "Bem-vindo",
      DE: "Willkommen",
    },
  };

  it("should return strings for the specified language", () => {
    const result = getStrings(pageStrings, "ES_LA");
    expect(result).toEqual({
      greeting: "Hola",
      farewell: "Adiós",
      welcome: "Bienvenido",
    });
  });

  it("should return English strings if the specified language is not available", () => {
    const result = getStrings(pageStrings, "DE");
    expect(result).toEqual({
      greeting: "Hallo",
      farewell: "Auf Wiedersehen",
      welcome: "Willkommen",
    });
  });

  it("should default to English if no language is specified", () => {
    const result = getStrings(pageStrings);
    expect(result).toEqual({
      greeting: "Hello",
      farewell: "Goodbye",
      welcome: "Welcome",
    });
  });

  it("should handle missing keys gracefully", () => {
    const incompleteStrings: PageStrings = {
      //@ts-ignore
      greeting: { EN: "Hello" },
    };
    const result = getStrings(incompleteStrings, "ES_LA");
    expect(result).toEqual({
      greeting: "Hello",
    });
  });
});
