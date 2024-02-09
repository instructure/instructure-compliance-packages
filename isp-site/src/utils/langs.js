import { globalLangs } from "variables/langs";

export function getLang(lang = "EN") {
	return globalLangs.find((e) => e.includes(lang.toUpperCase())) || "EN";
}

export function getStrings(strs, lang = "EN") {
	return Object.fromEntries(
		Object.entries(strs).map(([key, value]) => [key, value[lang] || value.EN]),
	);
}
