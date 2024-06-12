// Modules
import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGemoji from "remark-gemoji";
import remarkGfm from "remark-gfm";
import { Explorer } from "../utils/explorer.ts";
import allowedElements from "../variables/allowedElements.ts";
import mdtoui from "./Mdtoui.tsx";

/**
 * Component that explores a branch of a brand.
 *
 * @param brand - The brand to explore.
 * @param branch - The branch to explore.
 * @param l - The language code.
 * @returns A React element representing the explorer content.
 */
const BranchExplorer = ({
  brand,
  branch,
  l,
}: { brand: string; branch: HTMLElement; l: LangCode }): React.ReactElement => {
  // State for storing the explorer content
  const [explorerContent, setExplorerContent] = useState<string | null>(null);

  // Effect for fetching the explorer content
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
