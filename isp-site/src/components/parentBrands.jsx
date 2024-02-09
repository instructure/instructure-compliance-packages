const ParentBrands = [
	{
		brandName: "Instructure",
		get title() {
			return this.brandName.toLowerCase();
		},
		route: "/",
		readme:
			"https://raw.githubusercontent.com/thedannywahl/instructure-security-package/main/README.md",
		color: "#287A9F",
	},
	{
		brandName: "Canvas",
		get title() {
			return this.brandName.toLowerCase();
		},
		get route() {
			return `/${this.title}`;
		},
		get readme() {
			return `https://raw.githubusercontent.com/thedannywahl/instructure-security-package/main/README-${this.brandName}.md`;
		},
		color: "#E72429",
	},
	{
		brandName: "Mastery",
		get title() {
			return this.brandName.toLowerCase();
		},
		get route() {
			return `/${this.title}`;
		},
		get readme() {
			return `https://raw.githubusercontent.com/thedannywahl/instructure-security-package/main/README-${this.brandName}.md`;
		},
		color: "#24A159",
	},
	{
		brandName: "Elevate",
		get title() {
			return this.brandName.toLowerCase();
		},
		get route() {
			return `/${this.title}`;
		},
		get readme() {
			return `https://raw.githubusercontent.com/thedannywahl/instructure-security-package/main/README-${this.brandName}.md`;
		},
		color: "#0097D3",
	},
	{
		brandName: "Impact",
		get title() {
			return this.brandName.toLowerCase();
		},
		get route() {
			return `/${this.title}`;
		},
		get readme() {
			return `https://raw.githubusercontent.com/thedannywahl/instructure-security-package/main/README-${this.brandName}.md`;
		},
		color: "#F76400",
	},
	{
		brandName: "LearnPlatform",
		get title() {
			return this.brandName.toLowerCase();
		},
		get route() {
			return `/${this.title}`;
		},
		get readme() {
			return `https://raw.githubusercontent.com/thedannywahl/instructure-security-package/main/README-${this.brandName}.md`;
		},
		color: "#F76400",
	},
];

export default ParentBrands;
