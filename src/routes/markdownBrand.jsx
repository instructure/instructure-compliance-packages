import { View } from "@instructure/ui";
// Modules
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Markdown from "react-markdown";
import { useParams } from "react-router-dom";
import rehypeRaw from "rehype-raw";
import remarkGemoji from "remark-gemoji";
import remarkGfm from "remark-gfm";
import BranchExplorer from "../components/BranchExplorer";
import RenderFooter from "../components/RenderFooter";
import RenderTopNavBar from "../components/RenderTopNavBar";
import mdtoui from "../components/mdtoui";
import strings from "../strings/markdown";
import { getLang, getStrings } from "../utils/langs";
// Components
import allowedElements from "../variables/allowedElements";

// Page
export default function MarkdownBrand({ readme, brand }) {
  const l = getLang(useParams().language);
  const s = getStrings(strings, l);
  const css = `.markdown .lang { display: none; } .markdown .lang.${l.toUpperCase()} { display: inherit; }`;
  const md = readme;

  const [content, setContent] = useState(false);
  const [contentRendered, setContentRendered] = useState(false);
  const [branches, setBranches] = useState(false);

  useEffect(() => {
    document.title = `${brand} Compliance Packages`;
    fetch(md)
      .then((response) => {
        if (response.ok) return response.text();
        return Promise.reject(s.fetch_fail);
      })
      .then((text) => {
        setContent(text);
      })
      .catch((error) => console.error(error));
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
      <RenderTopNavBar language={l} />
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
