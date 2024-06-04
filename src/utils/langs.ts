import { globalLangs } from "../variables/langs.ts";

/**
 * Retrieves the language code from the global languages.
 *
 * @param lang - The language code to retrieve. Defaults to "EN".
 * @returns The language code if it exists in the global languages, otherwise "EN".
 */
export function getLang(lang: LangCode = "EN") {
  return globalLangs.find((e) => e.includes(lang.toUpperCase())) || "EN";
}

/**
 * Retrieves the strings for a specific language from a page strings object.
 *
 * @param strs - The page strings object to retrieve the strings from.
 * @param lang - The language code to retrieve the strings for. Defaults to "EN".
 * @returns An object with the same keys as the input object, but the values are the strings for the specified language, or for English if the specified language is not available.
 */
export function getStrings(strs: PageStrings, lang: LangCode = "EN") {
  return Object.fromEntries(
    Object.entries(strs).map(([key, value]) => [key, value[lang] || value.EN]),
  );
}
