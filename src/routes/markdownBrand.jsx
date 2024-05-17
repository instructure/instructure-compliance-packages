import { View } from "@instructure/ui";
// Modules
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import * as ReactDOM from "react-dom/client";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGemoji from "remark-gemoji";
import remarkGfm from "remark-gfm";
import RenderFooter from "../components/RenderFooter";
import RenderTopNavBar from "../components/RenderTopNavBar";

import { useParams } from "react-router-dom";
import mdtoui from "../components/mdtoui";
import strings from "../strings/markdown";
import { Explorer } from "../utils/explorer";
import { getLang, getStrings } from "../utils/langs";
// Components
import allowedElements from "../variables/allowedElements";

// Page
export default function MarkdownBrand({ readme, brand }) {
  const l = getLang(useParams().language);
  const s = getStrings(strings, l);
  const css = `.markdown .lang { display: none; } .markdown .lang.${l.toUpperCase()} { display: inherit; }`;
  const md = readme;

  const [content, setContent] = useState(`${s.loading}`);
  const [popupContainer, setPopupContainer] = useState(null);

  useEffect(() => {
    document.title = `${brand} Compliance Packages`;
  });

  useEffect(() => {
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
    const branches = document.querySelectorAll(".markdown .contents");

    if (branches.length > 0) {
      for (const branch of branches) {
        setPopupContainer(branch);
        Explorer(brand.toLowerCase(), branch, l).then((table) => {
          createPortal(
            <Markdown
              remarkPlugins={[remarkGfm, remarkGemoji]}
              rehypePlugins={[rehypeRaw]}
              allowedElements={allowedElements}
              components={mdtoui}
            >
              {table}
            </Markdown>,
            popupContainer,
          );
          console.log("popupContainer", popupContainer);
          console.log("portal created for", branch.classList[1]);
        });
      }
    }
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
        <style>{css}</style>
        <View as="div" className="markdown">
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
