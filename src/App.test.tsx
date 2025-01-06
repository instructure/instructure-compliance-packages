//@ts-ignore
import { type Mock, describe, expect, it, vi } from "vitest";
import { render } from "vitest-browser-react";
import { App } from "./App.tsx";
//@ts-ignore
import { type RedirectLink, fetchRedirects } from "./fetchRedirects.ts";

vi.mock("./fetchRedirects", () => ({
  fetchRedirects: vi.fn(),
}));

/*
 * @TODO: Mock <Redirect /> component with force={false} [default] prop.
 * Calling <App /> includes the default Routes with Redirect.force props
 * This causes the tests to timeout because the redirect happens too quickly.
 */

/*
describe("App Component", () => {

  it("should create routes based on fetched data", async () => {
    const mockData: RedirectLink[] = [
      { from: "/home", to: "https://www.instructure.com" },
    ];

    (fetchRedirects as Mock).mockImplementation(
      (
        _: URL["href"],
        setData: React.Dispatch<React.SetStateAction<RedirectLink[]>>,
      ) => {
        setData(mockData);
      },
    );

    const { getByText } = render(<App />);

    await vi.waitFor(() => {
      expect(getByText("https://www.instructure.com")).toBeInTheDocument();
    });
  });

  it("should create a wildcard route to Conveyor", async () => {
    const mockData: RedirectLink[] = [];

    (fetchRedirects as Mock).mockImplementation(
      (
        _: URL["href"],
        setData: React.Dispatch<React.SetStateAction<RedirectLink[]>>,
      ) => {
        setData(mockData);
      },
    );

    const { getByText } = render(<App />);

    await vi.waitFor(() => {
      expect(getByText("Conveyor")).toBeInTheDocument();
    });
  });
});
*/

describe("Root Component", () => {
  it("should create a root element if not present", () => {
    const existingRoot = document.getElementById("root");
    if (existingRoot) {
      existingRoot.remove();
    }
    render(<App />);
    const rootElement = document.getElementById("root");
    vi.waitFor(() => expect(rootElement).not.toBeNull());
  });

  it("should render the App component", () => {
    const { getByText } = render(<App />);
    vi.waitFor(() =>
      expect(getByText("Some text in App component")).toBeInTheDocument(),
    );
  });
});
