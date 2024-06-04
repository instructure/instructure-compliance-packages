import { Grid, SourceCodeEditor, View } from "@instructure/ui";
import { Suspense, lazy, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import rehypeRaw from "rehype-raw";
import remarkGemoji from "remark-gemoji";
import remarkGfm from "remark-gfm";
import RenderFooter from "../components/RenderFooter.tsx";
import RenderTopNavBar from "../components/RenderTopNavBar.tsx";
import mdtoui from "../components/mdtoui.tsx";
import strings from "../strings/mdui.ts";
import { getLang, getStrings } from "../utils/langs.ts";
import allowedElements from "../variables/allowedElements.ts";
import markdownSample from "../variables/markdownSample.md?raw" with {
  type: "text/markdown",
};

export function Component(): React.ReactElement {
  const l = getLang(useParams().language as LangCode);
  const s = getStrings(strings, l);
  const md = markdownSample;

  useEffect(() => {
    document.title = "Markdown to Instructure UI";
  });

  const [content, setContent] = useState<string | undefined>(`${s.loading}`);

  useEffect(() => {
    setContent(md);
  }, [md]);

  return (
    <>
      <RenderTopNavBar language={l} />
      <View
        id="main"
        className="mdui"
        as="div"
        padding="medium medium xx-large"
        minWidth="20rem"
        maxWidth="100vw"
        margin="0 auto"
      >
        <Grid startAt="large">
          <Grid.Row>
            <Grid.Col>
              <ReactMarkdown
                remarkPlugins={[remarkGfm, remarkGemoji]}
                rehypePlugins={[rehypeRaw]}
                allowedElements={allowedElements}
                components={mdtoui}
              >
                {content}
              </ReactMarkdown>
            </Grid.Col>
            <Grid.Col>
              <SourceCodeEditor
                label={`${s.markdown_source}`}
                language="markdown"
                readOnly={false}
                editable={true}
                lineNumbers={true}
                foldGutter={true}
                highlightActiveLineGutter={true}
                highlightActiveLine={true}
                lineWrapping={true}
                value={content}
                onChange={(value) => {
                  setContent(value);
                }}
              />
            </Grid.Col>
          </Grid.Row>
        </Grid>
      </View>
      <RenderFooter language={l} />
    </>
  );
}
Component.displayName = "Route.MDUI";

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
