/**
 * @module main
 */

import React, { StrictMode, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import {
  type RouteObject,
  RouterProvider,
  createHashRouter,
} from "react-router-dom";
import "./index.css";
import { Heading, Spinner, View, canvas } from "@instructure/ui";
import { IsFrame, LTIConfig } from "./utils/lti.ts";
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
 * Initiates the configuration process.
 * Checks if running in a frame, and then tries to get LTI configuration.
 * @returns {Promise<Config>} The configuration object.
 */
const initiate = async (): Promise<Config> => {
  let config = { mode: "App" };
  if (IsFrame()) {
    const ltiConfig: Config = await LTIConfig();
    // @ts-ignore
    if (ltiConfig?.lti?.["lti.getPageSettings"] !== null) {
      config = ltiConfig;
    }
  }
  return config;
};

/**
 * The main application component.
 */
const App: React.FC<AppProps> = ({ config }) => {
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
      loader: () => ({
        readme: brand.readme,
        brand: brand.brandName,
        config: config,
      }),
      children: [
        {
          path: ":language",
          lazy: () => import("./routes/markdownBrand.tsx"),
          loader: () => ({
            readme: brand.readme,
            brand: brand.brandName,
            config: config,
          }),
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
          config: config,
        }),
        children: [
          {
            path: ":language",
            lazy: () => import("./routes/redirectTo.tsx"),
            loader: () => ({
              path: link.from,
              brand: redirect.brand,
              url: link.to,
              config: config,
            }),
          },
        ],
      });
    }
  }

  routes.push({
    path: "/links",
    lazy: () => import("./routes/links.tsx"),
    loader: () => ({ config: config }),
    children: [
      {
        path: ":language",
        lazy: () => import("./routes/links.tsx"),
        loader: () => ({ config: config }),
      },
    ],
  });

  routes.push({
    path: "/mdui",
    lazy: () => import("./routes/mdui.tsx"),
    loader: () => ({ config: config }),
    children: [
      {
        path: ":language",
        lazy: () => import("./routes/mdui.tsx"),
        loader: () => ({ config: config }),
      },
    ],
  });

  routes.push({
    path: "/releases",
    lazy: () => import("./routes/releases.tsx"),
    loader: () => ({ config: config }),
    children: [
      {
        path: ":language",
        lazy: () => import("./routes/releases.tsx"),
        loader: () => ({ config: config }),
      },
    ],
  });

  routes.push({
    path: "*",
    lazy: () => import("./routes/error.tsx"),
    loader: () => ({ config: config }),
    children: [
      {
        path: ":language",
        lazy: () => import("./routes/error.tsx"),
        loader: () => ({ config: config }),
      },
    ],
  });

  /**
   * Create a hash router with the defined routes.
   */
  const router = createHashRouter(routes);

  return (
    <React.StrictMode>
      <View
        as="div"
        minHeight="100vh"
        position="relative"
        className={config.mode.toLowerCase()}
      >
        <RouterProvider
          future={{
            v7_startTransition: true,
          }}
          router={router}
        />
      </View>
    </React.StrictMode>
  );
};

/**
 * Main component of the application.
 *
 * This component initializes the configuration and renders the App component
 * with the fetched configuration. If the configuration is not yet available,
 * it displays a loading spinner.
 */
const Main = (): JSX.Element => {
  const [config, setConfig] = useState<Config>({ mode: "LTI" });

  useEffect(() => {
    initiate()
      .then((config) => {
        setConfig(config);
        console.info("Config:", config);
      })
      .catch((error) => {
        console.error("Error initiating config:", error);
      });
  }, []);

  return config ? (
    <App config={config} />
  ) : (
    <View as="div" textAlign="center">
      <Heading level="h1" as="h1" margin="0 0 x-small">
        Loading...
      </Heading>
      <Spinner renderTitle="Loading" size="medium" />
    </View>
  );
};

ReactDOM.createRoot(root).render(
  <StrictMode>
    <Main />
  </StrictMode>,
);
