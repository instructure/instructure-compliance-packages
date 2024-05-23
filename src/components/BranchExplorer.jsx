// Modules
import React, { useState, useEffect } from "react";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGemoji from "remark-gemoji";
import remarkGfm from "remark-gfm";

import { Explorer } from "../utils/explorer";
import mdtoui from "../components/mdtoui";

import allowedElements from "../variables/allowedElements";

const BranchExplorer = ({ brand, branch, l }) => {
  const [explorerContent, setExplorerContent] = useState(null);

  useEffect(() => {
    Explorer(brand.toLowerCase(), branch, l)
      .then((result) => setExplorerContent(result))
      .catch((error) => console.error(error));
  }, [brand, branch, l]);

  return (
    <Markdown
      remarkPlugins={[remarkGfm, remarkGemoji]}
      rehypePlugins={[rehypeRaw]}
      allowedElements={allowedElements}
      components={mdtoui}
    >
      {explorerContent}
    </Markdown>
  );
};
export default BranchExplorer;
