// Modules
import { Billboard, Link, Text, View } from "@instructure/ui";
import { Suspense, lazy, useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import RenderFooter from "../components/RenderFooter.tsx";
import RenderTopNavBar from "../components/RenderTopNavBar.tsx";
import strings from "../strings/redirectTo.ts";
import { getLang, getStrings } from "../utils/langs.ts";

// Page
export function Component() {
  const { path, brand, url } = useLoaderData() as {
    path: string;
    brand: GlobalBrand;
    url: string;
  };

  const l = getLang(useParams().language as LangCode);
  const s = getStrings(strings, l);
  const urlRoot = url.split("?")[0];
  const filetype = url.slice(-4);
  const download = path.slice(-3) === "/dl";

  useEffect(() => {
    window.location.href = url;
  });

  const billboardText = () => {
    if (download) {
      return (
        <View as="div">
          <Text>
            {filetype === ".zip"
              ? `${s.youre_downloading_the} ${brand} ${s.compliance_package}`
              : `${s.youre_downloading_a} ${brand} ${s.compliance_package}`}
          </Text>
          <br />
          <Text size="x-small">
            {s.didnt_work} <Link href={url}>{s.try_again}</Link>
          </Text>
        </View>
      );
    }
    return (
      <View as="div">
        <Text>
          {s.redirecting_to} <Link href={url}>{urlRoot}</Link>
        </Text>
      </View>
    );
  };

  return (
    <>
      <RenderTopNavBar language={l} />
      <View
        id="main"
        as="div"
        padding="medium medium xx-large"
        minWidth="20rem"
        maxWidth="59.25rem"
        margin="0 auto"
      >
        <Billboard
          themeOverride={{ messageColor: "primary" }}
          size="medium"
          heading={download ? s.downloading : s.redirecting}
          headingAs="h1"
          message={billboardText}
        />
      </View>
      <RenderFooter language={l} />
    </>
  );
}
Component.displayName = "Route.Redirect";

export function ErrorBoundary() {
  const ErrorPage = lazy(() =>
    import("./error.tsx").then((module) => ({ default: module.Component })),
  );
  return (
    <Suspense fallback={<h1>Error.</h1>}>
      <ErrorPage />
    </Suspense>
  );
}
ErrorBoundary.displayName = "Error.Redirect";
