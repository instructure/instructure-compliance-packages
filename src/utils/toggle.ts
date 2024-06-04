import { globalBrands } from "../variables/brands.ts";

/**
 * Toggle function to manipulate DOM elements.
 * @param {HTMLElement} u - The HTMLElement to be manipulated.
 * @param {NodeListOf<HTMLElement>} n - The NodeList of HTMLElements to be manipulated.
 */
const toggle = (u: HTMLElement, n: NodeListOf<HTMLElement>) => {
  const body: HTMLElement | null = document.querySelector("body");

  /**
   * Remove attributes and classes from each element in NodeList.
   */
  for (const e of n) {
    e.removeAttribute("aria-current");
    e.classList.remove("active");
  }

  /**
   * Set attributes and classes for the HTMLElement if it's not null and location hash is not '#/'.
   */
  if (u !== null && document.location.hash !== "#/") {
    u.setAttribute("aria-current", "page");
    u.classList.add("active");
  }

  /**
   * Remove classes from body that match the global brands.
   */
  body?.classList.remove(...globalBrands.map((brand) => brand.toLowerCase()));

  /**
   * Add class to body and set document title based on the id of the HTMLElement.
   */
  if (u?.id.length) {
    body?.classList.add(u.id);
    const brand = globalBrands.find((brand) => brand.toLowerCase() === u.id);
    document.title = `${brand} Compliance Package`;
  } else {
    body?.classList.add("instructure");
    document.title = "Instructure Compliance Packages";
  }
};

/**
 * Add event listener for window load event.
 */
window.addEventListener("load", () => {
  const u: string = document.location.href.split("#")[1];
  const n: NodeListOf<HTMLElement> = document.querySelectorAll("nav a");

  /**
   * If 'u' is defined and not equal to '/' or null, find the element with id 'u' and toggle it.
   */
  if (u !== undefined && u !== "/" && u !== null) {
    const element = document.getElementById(u.split("/")[1]);
    if (element instanceof HTMLElement) {
      toggle(element, n);
    }
  }

  for (const e of n) {
    e.onclick = () => {
      toggle(e, n);
    };
  }
});
