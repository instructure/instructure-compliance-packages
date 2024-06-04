/**
 * @module main
 */

import React from "react";
import ReactDOM from "react-dom/client";
import {
  type RouteObject,
  RouterProvider,
  createHashRouter,
} from "react-router-dom";
import "./index.css";
import { InstUISettingsProvider, View, canvas } from "@instructure/ui";
import RedirectTo from "./routes/redirectTo.tsx";
import { ParentBrands } from "./variables/brands.ts";
import Redirects from "./variables/redirects/index.js";

/**
 * An array to hold the routes for the application.
 */
const routes: RouteObject[] = [];

for (const brand of ParentBrands) {
  routes.push({
    path: `${brand.route}`,
    lazy: () => import("./routes/markdownBrand.tsx"),
    /**
     * A function that returns the data to be passed to the markdownBrand component.
     * This function is created by a closure that captures the current brand object.
     */
    loader: () => ({ readme: brand.readme, brand: brand.brandName }),
    children: [
      {
        path: ":language",
        lazy: () => import("./routes/markdownBrand.tsx"),
        loader: () => ({ readme: brand.readme, brand: brand.brandName }),
      },
    ],
  });
}

for (const redirect of Redirects) {
  for (const link of redirect.links) {
    routes.push({
      path: link.from,
      lazy: () => import("./routes/redirectTo.tsx"),
      loader: () => ({path: link.from, brand: redirect.brand, url: link.to}),
      children: [
        {
          path: ":language",
          lazy: () => import("./routes/redirectTo.tsx"),
          loader: () => ({path: link.from, brand: redirect.brand, url: link.to})
        },
      ],
    });
  }
}

routes.push({
  path: "/links",
  lazy: () => import("./routes/links.tsx"),
  children: [
    {
      path: ":language",
      lazy: () => import("./routes/links.tsx"),
    },
  ],
});

routes.push({
  path: "/mdui",
  lazy: () => import("./routes/mdui.tsx"),
  children: [
    {
      path: ":language",
      lazy: () => import("./routes/mdui.tsx"),
    },
  ],
});

routes.push({
  path: "/releases",
  lazy: () => import("./routes/releases.tsx"),
  children: [
    {
      path: ":language",
      lazy: () => import("./routes/releases.tsx"),
    },
  ],
});

routes.push({
  path: "*",
  lazy: () => import("./routes/error.tsx"),
  children: [
    {
      path: ":language",
      lazy: () => import("./routes/error.tsx"),
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
