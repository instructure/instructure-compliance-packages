import { describe, expect, it, vi } from "vitest";
import {
  type RedirectLink,
  csvJSON,
  fetchRedirects,
} from "./fetchRedirects.ts";

describe("csvJSON", () => {
  it("should return an empty array when input is null", () => {
    const result: RedirectLink[] = csvJSON(null);
    expect(result).toEqual([]);
  });

  it("should return an empty array when input is an empty string", () => {
    const result: RedirectLink[] = csvJSON("");
    expect(result).toEqual([]);
  });

  it("should parse a valid CSV string correctly", () => {
    const csvData =
      "title,from,to\r\nHome,/home,https://instructure.com\r\nCanvas,/canvas,https://canvas.com";
    const expected: RedirectLink[] = [
      { from: "/home", to: "https://instructure.com" },
      { from: "/canvas", to: "https://canvas.com" },
    ];
    const result: RedirectLink[] = csvJSON(csvData);
    expect(result).toEqual(expected);
  });

  it("should handle CSV with different line endings", () => {
    const csvData =
      "title,from,to\nHome,/home,https://instructure.com\nCanvas,/canvas,https://canvas.com";
    const expected: RedirectLink[] = [
      { from: "/home", to: "https://instructure.com" },
      { from: "/canvas", to: "https://canvas.com" },
    ];
    const result: RedirectLink[] = csvJSON(csvData.replace(/\n/g, "\r\n"));
    expect(result).toEqual(expected);
  });

  it("should handle CSV with extra spaces", () => {
    const csvData =
      "title, from, to\r\nHome, /home, https://instructure.com\r\nCanvas, /canvas, https://canvas.com";
    const expected: RedirectLink[] = [
      { from: "/home", to: "https://instructure.com" },
      { from: "/canvas", to: "https://canvas.com" },
    ];
    const result: RedirectLink[] = csvJSON(csvData);
    expect(result).toEqual(expected);
  });
});

describe("fetchRedirects", () => {
  it("should fetch CSV data and update state", async () => {
    const mockSetData = vi.fn();
    const mockCsvData =
      "title,from,to\r\nHome,/home,https://instructure.com\r\nCanvas,/canvas,https://canvas.com";
    const mockJsonData: RedirectLink[] = csvJSON(mockCsvData);

    globalThis.fetch = vi.fn(() =>
      Promise.resolve({
        text: () => Promise.resolve(mockCsvData),
      } as Response),
    );

    await fetchRedirects("https://example.com/redirects.csv", mockSetData);

    expect(fetch).toHaveBeenCalledWith("https://example.com/redirects.csv");
    expect(mockSetData).toHaveBeenCalledWith(mockJsonData);
  });

  it("should handle fetch errors", async () => {
    const mockSetData = vi.fn();
    const mockError = new Error("Fetch error");

    globalThis.fetch = vi.fn(() => Promise.reject(mockError));
    const consoleErrorSpy = vi
      .spyOn(console, "error")
      .mockImplementation(() => {});

    await fetchRedirects("https://example.com/redirects.csv", mockSetData);

    expect(fetch).toHaveBeenCalledWith("https://example.com/redirects.csv");
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      "Error fetching CSV data:",
      mockError,
    );

    consoleErrorSpy.mockRestore();
  });
});
