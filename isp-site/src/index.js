// Modules
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "reportWebVitals";
import "./index.css";

import { InstUISettingsProvider, canvas, View } from "@instructure/ui";
import Links from "routes/links";
import MDUI from "routes/mdui";
import Markdown from "routes/markdown";
import Releases from "routes/releases";
import ErrorPage from "routes/error";
import { ParentBrands } from "variables/brands";
import RedirectTo from "routes/redirectTo";
import Redirects from "variables/redirects";

const routes = [];

// Brands
ParentBrands.map((brand) => {
	routes.push({
		path: `${brand.route}`,
		element: <Markdown readme={brand.readme} brand={brand.brandName} />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: ":language",
				element: <Markdown readme={brand.readme} brand={brand.brandName} />,
			},
		],
	});
});

// Redirects
Redirects.map((brand) => {
	brand.links.map((link) => {
		routes.push({
			path: link.from,
			element: (
				<RedirectTo path={link.from} brand={brand.brand} url={link.to} />
			),
			errorElement: <ErrorPage />,
			children: [
				{
					path: ":language",
					element: (
						<RedirectTo path={link.from} brand={brand.brand} url={link.to} />
					),
				},
			],
		});
	});
});

// Links
routes.push({
	path: "/links",
	element: <Links />,
	errorElement: <ErrorPage />,
	children: [
		{
			path: ":language",
			element: <Links />,
		},
	],
});

// Markdown to InstructureUI showcase
routes.push({
	path: "/mdui",
	element: <MDUI />,
	// errorElement: <ErrorPage />,
	children: [
		{
			path: ":language",
			element: <MDUI />,
		},
	],
});

// Release notes page
routes.push({
	path: "/releases",
	element: <Releases />,
	children: [
		{
			path: ":language",
			element: <Releases />,
		},
	],
});

// All others
routes.push({
	path: "*",
	element: <ErrorPage />,
	children: [
		{
			path: ":language",
			element: <ErrorPage />,
		},
	],
});

const router = createHashRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<InstUISettingsProvider theme={canvas}>
			<View as="div" minHeight="100vh" position="relative">
				<RouterProvider router={router} />
			</View>
		</InstUISettingsProvider>
	</React.StrictMode>,
);
reportWebVitals();
