import { View } from "@instructure/ui";
import { Suspense, lazy, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Markdown from "react-markdown";
import { useLoaderData, useParams } from "react-router-dom";
import rehypeRaw from "rehype-raw";
import remarkGemoji from "remark-gemoji";
import remarkGfm from "remark-gfm";
import BranchExplorer from "../components/BranchExplorer.tsx";
import mdtoui from "../components/Mdtoui.tsx";
import RenderFooter from "../components/RenderFooter.tsx";
import RenderTopNavBar from "../components/RenderTopNavBar.tsx";
import strings from "../strings/markdown.ts";
import { getLang, getStrings } from "../utils/langs.ts";
import allowedElements from "../variables/allowedElements.ts";

export function Component(): React.ReactElement {
  const { readme, brand } = useLoaderData() as {
    readme: string;
    brand: GlobalBrand;
  };
  const l = getLang(useParams().language as LangCode);
  const s = getStrings(strings, l);
  const css: string = `.markdown .lang { display: none; } .markdown .lang.${l.toUpperCase()} { display: inherit; }`;
  const md = readme;

  const [content, setContent] = useState<string>("Loading...");
  const [contentRendered, setContentRendered] = useState<boolean>(false);
  const [branches, setBranches] = useState<HTMLElement[]>([]);

  useEffect(() => {
    document.title = `${brand} Compliance Packages`;
    fetch(md)
      .then((response: Response) => {
        if (response.ok) return response.text();
        return Promise.reject(s.fetch_fail);
      })
      .then((text: string) => {
        setContent(text);
      })
      .catch((error: unknown) => console.error(error));
  });

  useEffect(() => {
    if (content) {
      setBranches(Array.from(document.querySelectorAll(".contents")));
      setContentRendered(true);
    }
  }, [content]);

  return (
    <>
      {contentRendered &&
        branches?.map((branch) => {
          return createPortal(
            <BranchExplorer brand={brand} branch={branch} l={l} />,
            branch,
          );
        })}
      <RenderTopNavBar brand={brand} language={l} />
      <View
        id="main"
        as="div"
        padding="medium medium xx-large"
        minWidth="20rem"
        maxWidth="59.25rem"
        margin="0 auto"
      >
        <style>{css}</style>
        <View as="div" className={`${brand.toLowerCase()} markdown`}>
          <Markdown
            remarkPlugins={[remarkGfm, remarkGemoji]}
            rehypePlugins={[rehypeRaw]}
            allowedElements={allowedElements}
            components={mdtoui}
          >
            {content}
          </Markdown>
        </View>
      </View>
      <RenderFooter language={l} />
    </>
  );
}
Component.displayName = "Route.MarkdownBrand";

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
ErrorBoundary.displayName = "Error.MarkdownBrand";
