// Modules
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";
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

const routes = [];

// Brands

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

// Redirects
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
