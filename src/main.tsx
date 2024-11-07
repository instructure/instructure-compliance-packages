/**
 * @module main
 */

import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import {
  type RouteObject,
  RouterProvider,
  createHashRouter,
} from "react-router-dom";
import "./index.css";
import { View, canvas } from "@instructure/ui";
import { IsApp } from "./utils/frame.ts";
import { ParentBrands } from "./variables/brands.tsx";
import Redirects from "./variables/redirects/index.js";

canvas.use({
  overrides: {
    typography: {
      fontFamily:
        'LatoWeb, "Lato Extended", Lato, "Helvetica Neue", Helvetica, Arial, sans-serif',
    },
  },
});

/**
 * Get the root element from the DOM.
 */
const root: HTMLElement | null = document.getElementById("root");
if (!root) {
  throw new Error("Root element not found");
}

/**
 * Determine if the application is running in an iframe or as a standalone app.
 */
const body: HTMLElement | null = document.body;
const bodyClass = IsApp() ? "app" : "frame";
body.classList.add(bodyClass);

/**
 * The main application component.
 */
const App = () => {
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
        loader: () => ({
          path: link.from,
          brand: redirect.brand,
          url: link.to,
        }),
        children: [
          {
            path: ":language",
            lazy: () => import("./routes/redirectTo.tsx"),
            loader: () => ({
              path: link.from,
              brand: redirect.brand,
              url: link.to,
            }),
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

  return (
    <React.StrictMode>
      <View as="div" minHeight="100vh" position="relative">
        <RouterProvider router={router} />
      </View>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
