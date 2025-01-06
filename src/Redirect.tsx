import { type JSX, useEffect } from "react";
import type { RedirectLink } from "./fetchRedirects.ts";

/**
 * @component Redirect
 * @description A React functional component that redirects the user to a specified URL.
 *
 * @example
 * ```tsx
 * <Redirect to="https://example.com" />
 * ```
 *
 * @returns {JSX.Element} A div element indicating the redirection.
 *
 * Note: the `force` prop is used to automatically redirect the user's browser.
 */
export const Redirect: React.FC<{
  to: RedirectLink["to"];
  force?: boolean | undefined;
}> = ({ to, force }): JSX.Element => {
  useEffect(() => {
    if (force) {
      window.location.href = to;
    }
  }, [to, force]);

  return (
    <p>
      Redirecting to <a href={to}>{to}</a>
    </p>
  );
};
