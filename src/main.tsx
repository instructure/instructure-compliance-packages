/**
 * @module main
 */

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  type RouteObject,
  RouterProvider,
  createHashRouter,
} from "react-router-dom";
import "./index.css";
import { InstUISettingsProvider, View, canvas } from "@instructure/ui";
import ErrorPage from "./routes/error";
import Links from "./routes/links";
import MarkdownBrand from "./routes/markdownBrand";
import MDUI from "./routes/mdui";
import RedirectTo from "./routes/redirectTo";
import Releases from "./routes/releases";
import { ParentBrands } from "./variables/brands";
import Redirects from "./variables/redirects";

/**
 * An array to hold the routes for the application.
 */
const routes: RouteObject[] = [];

for (const brand of ParentBrands) {
  routes.push({
    path: `${brand.route}`,

    element: <MarkdownBrand readme={brand.readme} brand={brand.brandName} />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ":language",
        element: (
          <MarkdownBrand readme={brand.readme} brand={brand.brandName} />
        ),
      },
    ],
  });
}

for (const redirect of Redirects) {
  for (const link of redirect.links) {
    routes.push({
      path: link.from,

      element: (
        <RedirectTo path={link.from} brand={redirect.brand} url={link.to} />
      ),
      errorElement: <ErrorPage />,
      children: [
        {
          path: ":language",
          element: (
            <RedirectTo path={link.from} brand={redirect.brand} url={link.to} />
          ),
        },
      ],
    });
  }
}

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

routes.push({
  path: "/mdui",
  element: <MDUI />,
  errorElement: <ErrorPage />,
  children: [
    {
      path: ":language",
      element: <MDUI />,
    },
  ],
});

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

/**
 * Create a hash router with the defined routes.
 */
const router = createHashRouter(routes);

/**
 * Get the root element from the DOM.
 */
const root: HTMLElement | null = document.getElementById("root");
if (!root) {
  throw new Error("Root element not found");
}

/**
 * Render the application to the root element.
 */
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <InstUISettingsProvider theme={canvas}>
      <View as="div" minHeight="100vh" position="relative">
        <RouterProvider router={router} />
      </View>
    </InstUISettingsProvider>
  </React.StrictMode>,
);
