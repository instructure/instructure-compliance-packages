import { globalLangs } from "../variables/langs.ts";

/**
 * Retrieves the language code from the global language list.
 *
 * @param {LangCode} [lang="EN"] - The language code to search for. Defaults to "EN".
 * @returns {LangCode} The matched language code from the global language list, or "EN" if not found.
 */
export function getLang(lang: LangCode = "EN"): LangCode {
  return globalLangs.find((e) => e.includes(lang.toUpperCase())) || "EN";
}

/**
 * Retrieves a set of strings for a specified language from the given PageStrings object.
 * If the specified language is not available, it defaults to English ("EN").
 *
 * @param strs - An object containing strings for different languages.
 * @param lang - The language code to retrieve the strings for. Defaults to "EN".
 * @returns {FilteredStrings} object with the strings for the specified language.
 */
export function getStrings(
  strs: PageStrings,
  lang: LangCode = "EN",
): FilteredStrings {
  return Object.fromEntries(
    Object.entries(strs).map(([key, { [lang]: langValue = strs.EN }]) => [
      key,
      langValue,
    ]),
  ) as FilteredStrings;
}
