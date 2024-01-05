import { globalBrands } from "variables/brands";
const body = document.querySelector("body");

const toggle = (u, n) => {
	for (const e of n) {
		e.removeAttribute("aria-current");
		e.classList.remove("active");
	}

	if (u !== null && u.hash !== "#/") {
		u.setAttribute("aria-current", "page");
		u.classList.add("active");
	}

	//TODO ADD Brand to body classList
	body.classList.remove(...globalBrands.map((brand) => brand.toLowerCase()));
	if (u.id.length) body.classList.add(u.id);
};

document.addEventListener("DOMContentLoaded", () => {
	let u = document.location.href.split("#")[1];
	const n = document.querySelectorAll("nav a");

	if (u !== undefined && u !== "/" && u !== null) {
		u = document.getElementById(u.split("/")[1]);
		toggle(u, n);
	}

	for (const e of n) {
		e.onclick = () => {
			toggle(e, n);
		};
	}
});
