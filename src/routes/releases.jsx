import { Heading, Link, View } from "@instructure/ui";
import { IconRssLine } from "@instructure/ui";
import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import rehypeRaw from "rehype-raw";
import remarkGemoji from "remark-gemoji";
import remarkGfm from "remark-gfm";
import RenderFooter from "../components/RenderFooter";
import RenderTopNavBar from "../components/RenderTopNavBar";
import mdtoui from "../components/mdtoui";
import strings from "../strings/releases";
import { getLang, getStrings } from "../utils/langs";
import { printReleases } from "../utils/releases";
import allowedElements from "../variables/allowedElements";
import global from "../variables/globals";

export default function Releases() {
  const l = getLang(useParams().language);
  const s = getStrings(strings, l);

  const atom = `https://github.com/${global.owner}/${global.repo}/releases.atom`;

  const css = `.markdown .lang { display: none; } .markdown .lang.${l.toUpperCase()} { display: inherit; }`;

  const [content, setContent] = useState(`${s.loading}`);
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
