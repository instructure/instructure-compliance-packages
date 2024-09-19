import { describe, it, expect } from "vitest";
import { allowedElements } from "./allowedElements.ts";

describe("allowedElements", () => {
  it("should be an array", () => {
    expect(Array.isArray(allowedElements)).toBe(true);
  });

  const elementsToCheck = [
    "strong",
    "summary",
    "blockquote",
    "details",
    "table",
    "tbody",
    "thead",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "input",
    "ul",
    "li",
    "div",
    "pre",
    "ol",
    "br",
    "em",
    "hr",
    "td",
    "th",
    "tr",
    "a",
    "img",
    "p",
    "del",
    "span",
    "code",
    "button",
    "mark",
  ];

  it("should contain specific elements", () => {
    for (const element of elementsToCheck) {
      expect(allowedElements).toContain(element);
    }
  });

  it("should not contain duplicates", () => {
    const uniqueElements = new Set(allowedElements);
    expect(uniqueElements.size).toBe(allowedElements.length);
  });

  it("should contain only strings", () => {
    for (const element of allowedElements) {
      expect(typeof element).toBe("string");
    }
  });

  it("should contain only valid HTML elements", () => {
    const tempElement = document.createElement("div");
    const invalidElements = [];

    const table = {
      thead: "<table><thead></thead></table>",
      tbody: "<table><tbody></tbody></table>",
      tr: "<table><tbody><tr></tr></tbody></table>",
      th: "<table><tbody><tr><th></th></tr></tbody></table>",
      td: "<table><tbody><tr><td></td></tr></tbody></table>",
    };

    for (const element of allowedElements) {
      if (table[element as keyof typeof table]) {
        tempElement.innerHTML = table[element as keyof typeof table];
        const firstChild = tempElement.querySelector(element);
        const isValid =
          firstChild && firstChild.nodeName.toLowerCase() === element;
        if (!isValid) {
          invalidElements.push(element);
        }
      } else {
        tempElement.innerHTML = `<${element}></${element}>`;
        let firstChild = tempElement.firstChild;
        let isValid =
          firstChild && firstChild.nodeName.toLowerCase() === element;

        if (!isValid) {
          tempElement.innerHTML = `<${element} />`;
          firstChild = tempElement.firstChild;
          isValid = firstChild && firstChild.nodeName.toLowerCase() === element;
        }

        if (!isValid) {
          invalidElements.push(element);
        }
      }
    }

    expect(invalidElements).toEqual([]);
  });
});

const findDuplicates = (arr: string[]) => {
  const seen = new Set();
  const duplicates = new Set();
  for (const item of arr) {
    if (seen.has(item)) {
      duplicates.add(item);
    } else {
      seen.add(item);
    }
  }
  return Array.from(duplicates);
};

const duplicates = findDuplicates(allowedElements);
expect(duplicates).toEqual([]);
