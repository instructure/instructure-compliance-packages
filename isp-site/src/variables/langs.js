export const globalLangs = ["EN", "ES_LA", "PT_BR", "DE"];

export const globalLangDetails = [
	{
		lang: "English",
		local: "English",
		code: "EN",
	},
	{
		lang: "Spanish",
		local: "Español",
		code: "ES_LA",
	},
	{
		lang: "Portuguese",
		local: "Português",
		code: "PT_BR",
	},
	{
		lang: "German",
		local: "Deutsch",
		code: "DE",
	},
];

export function getLang(lang = "EN") {
	return globalLangs.find((e) => e.includes(lang.toUpperCase())) || "EN";
}

export function getStrings(strs, lang = "EN") {
	return Object.fromEntries(
		Object.entries(strs).map(([key, value]) => [key, value[lang] || value.EN]),
	);
}
