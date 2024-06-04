import { Heading, Link, View } from "@instructure/ui";
import { IconRssLine } from "@instructure/ui";
import { useState, useEffect, lazy, Suspense } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import rehypeRaw from "rehype-raw";
import remarkGemoji from "remark-gemoji";
import remarkGfm from "remark-gfm";
import RenderFooter from "../components/RenderFooter.tsx";
import RenderTopNavBar from "../components/RenderTopNavBar.tsx";
import mdtoui from "../components/mdtoui.tsx";
import strings from "../strings/releases.ts";
import { getLang, getStrings } from "../utils/langs.ts";
import { printReleases } from "../utils/releases.ts";
import allowedElements from "../variables/allowedElements.ts";
import global from "../variables/globals.ts";

export function Component(): React.ReactElement {
  const l = getLang(useParams().language as LangCode);
  const s = getStrings(strings, l);

  const atom: string = `https://github.com/${global.owner}/${global.repo}/releases.atom`;

  const css: string = `.markdown .lang { display: none; } .markdown .lang.${l.toUpperCase()} { display: inherit; }`;

  const [content, setContent] = useState<string | null>(`${s.loading}`);
  useEffect(() => {
    printReleases()
      .then((text) => {
        setContent(text);
      })
      .catch((error) => console.error(error));
  });

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
        <Heading level="h1">
          <Link href={atom}>
            <IconRssLine size="small" color="warning" title={s.subscribe} />
          </Link>{" "}
          {s.releases}
        </Heading>
        <style>{css}</style>
        <View as="div" className="markdown">
          <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkGemoji]}
            rehypePlugins={[rehypeRaw]}
            allowedElements={allowedElements}
            components={mdtoui}
          >
            {content}
          </ReactMarkdown>
        </View>
      </View>
      <RenderFooter language={l} />,
    </>
  );
}
Component.displayName = "Route.Releases";

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
ErrorBoundary.displayName = "Error.Releases";
