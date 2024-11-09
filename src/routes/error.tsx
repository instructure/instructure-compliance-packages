import {
  Billboard,
  IconArrowOpenStartLine,
  Link,
  Text,
  View,
} from "@instructure/ui";
import {
  isRouteErrorResponse,
  useLoaderData,
  useParams,
  useRouteError,
} from "react-router-dom";
import RenderFooter from "../components/RenderFooter.tsx";
import RenderTabNav from "../components/RenderTabNav.tsx";
import RenderTopNavBar from "../components/RenderTopNavBar.tsx";
import strings from "../strings/error.js";
import { getLang, getStrings } from "../utils/langs.ts";

export function Component() {
  const {
    config: { mode },
  } = useLoaderData() as {
    config: Config;
  };
  const isApp = mode === "App";
  const l = getLang(useParams().language as LangCode);
  const s = getStrings(strings, l);
  const error: unknown = useRouteError();
  let msg = s.not_your_fault;
  if (isRouteErrorResponse(error)) {
    msg = `${error.status} ${error.statusText}`;
  } else if (error instanceof Error) {
    msg = error.message;
  } else if (typeof error === "string") {
    msg = error;
  } else {
    console.error(error);
    msg = s.unknown_error;
  }

  return (
    <>
      {isApp ? (
        <RenderTopNavBar language={l} />
      ) : (
        <>
          <RenderTabNav language={l} brand="Instructure" />
          <Link
            href="#"
            onClick={() => history.back()}
            margin="0 0 0 large"
            renderIcon={<IconArrowOpenStartLine size="x-small" />}
          >
            {s.back}
          </Link>
        </>
      )}
      <View
        id="main"
        as="div"
        padding="medium medium xx-large"
        minWidth="20rem"
        maxWidth="59.25rem"
        margin="0 auto"
      >
        <Billboard
          size="medium"
          heading={s.awkward}
          headingAs="h1"
          themeOverride={{ messageColor: "primary" }}
          message={
            <>
              <Text as="p">
                <i>{msg}</i>
              </Text>
              {isApp && (
                <Text as="p">
                  {s.uhm} <Link href="./#/">{s.class_dismissed}</Link>.
                </Text>
              )}
            </>
          }
        />
      </View>
      {isApp && <RenderFooter language={l} />}
    </>
  );
}
Component.displayName = "Route.Error";

export function ErrorBoundary() {
  return <Component />;
}
ErrorBoundary.displayName = "Error.ErrorPage";
