import { describe, expect, it, vi } from "vitest";
import { render } from "vitest-browser-react";
import { Redirect } from "./Redirect.tsx";
import type { RedirectLink } from "./fetchRedirects.ts";

describe("Redirect", () => {
  it("should display the correct redirect message", () => {
    const to: RedirectLink["to"] = "https://www.instructure.com";
    const screen = render(<Redirect force={false} to={to} />);

    vi.waitFor(() =>
      expect(screen.getByText("Redirecting to")).toBeInTheDocument(),
    );
    vi.waitFor(() =>
      expect(screen.getByRole("link", { name: to })).toHaveAttribute(
        "href",
        to,
      ),
    );
  });
});
