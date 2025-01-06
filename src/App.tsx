import { StrictMode, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import {
  type RouteObject,
  RouterProvider,
  createHashRouter,
} from "react-router";
import { Redirect } from "./Redirect.tsx";
import { type RedirectLink, fetchRedirects } from "./fetchRedirects.ts";
import { Conveyor, Links } from "./globals.ts";

/**
 * App Component
 *
 * This is the main component of the application.
 *
 * The component performs the following tasks:
 * - Initializes a state variable `data` to hold an array of RedirectLink objects.
 * - Uses the `useEffect` hook to fetch redirect data from a specified URL
 *   and update the state with the fetched data.
 * - Maps the fetched redirect data to an array of route objects for the router.
 * - Adds a catch-all route to redirect any unmatched paths to a default URL.
 * - Renders the fetched data as a JSON string for debugging purposes.
 * - Sets up a router using the `RouterProvider` and `createHashRouter` with the generated routes.
 *
 * Example usage:
 * ```tsx
 * <App />
 * ```
 *
 * The component uses the following hooks and functions:
 * - `useState` to manage the state of the redirect data.
 * - `useEffect` to fetch the redirect data when the component mounts.
 * - `fetchRedirects` to fetch and parse the CSV data into RedirectLink objects.
 * - `createHashRouter` to create a router with the generated routes.
 *
 * The component returns a `div` containing:
 * - An `h1` element with the title "Data".
 * - A `pre` element to display the fetched data as a JSON string.
 * - A `RouterProvider` to handle the routing based on the generated routes.
 */
export const App: React.FC = () => {
  const [data, setData] = useState<RedirectLink[]>([]);

  useEffect(() => {
    fetchRedirects(Links, setData);
  }, []);

  const routes: RouteObject[] = data.map((l) => ({
    path: l.from,
    element: <Redirect force to={l.to} />,
  }));

  routes.push({
    path: "/",
    element: <Redirect to={Conveyor} />,
  });

  return <RouterProvider router={createHashRouter(routes)} />;
};

/**
 * Renders the App component into the DOM.
 *
 * The code performs the following steps:
 * - Attempts to find an existing DOM element with the id "root".
 * - If the "root" element does not exist, it creates a new `div` element with the id "root"
 *   and appends it to the document body.
 * - Uses `ReactDOM.createRoot` to create a root for the React application.
 * - Renders the `App` component wrapped in `StrictMode` into the root element.
 *
 * This ensures that the application is rendered into a valid DOM element, creating one if necessary.
 */
ReactDOM.createRoot(
  document.getElementById("root") ||
    (() => {
      const rootElement = document.createElement("div");
      rootElement.id = "root";
      document.body.appendChild(rootElement);
      return rootElement;
    })(),
).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
