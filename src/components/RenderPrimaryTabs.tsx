import { Tabs, View } from "@instructure/ui";
import { useEffect, useState } from "react";
import type { KeyboardEvent, MouseEvent } from "react";
import { createPortal } from "react-dom";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGemoji from "remark-gemoji";
import remarkGfm from "remark-gfm";
import BranchExplorer from "../components/BranchExplorer.tsx";
import Mdtoui from "../components/Mdtoui.tsx";
import strings from "../strings/tabs.ts";
import { getStrings } from "../utils/langs.ts";
import allowedElements from "../variables/allowedElements.ts";
import { ParentBrands, globalBrands } from "../variables/brands.tsx";

/**
 * Outlet component that fetches and renders brand-specific content.
 * @returns {JSX.Element} The rendered Outlet component.
 */
const Outlet: React.FC<{ index: number; language: LangCode }> = ({
  index,
  language,
}: { index: number; language: LangCode }): JSX.Element => {
  const Brands: BrandDetail[] = [...ParentBrands];
  const l = language;
  const s = getStrings(strings, l);
  const brand = Brands[index];
  const md = brand.readme;

  const [content, setContent] = useState<string | null>(null);
  const [contentRendered, setContentRendered] = useState<boolean>(false);
  const [branches, setBranches] = useState<HTMLElement[]>([]);

  useEffect(() => {
    fetch(md)
      .then((response: Response) => {
        if (response.ok) return response.text();
        return Promise.reject(s.fetch_fail);
      })
      .then((text: string) => {
        setContent(text);
      })
      .then(() => {
        setBranches(Array.from(document.querySelectorAll(".contents")));
        setContentRendered(true);
      })
      .catch((error: unknown) => console.error(error));
  }, [md, s.fetch_fail]);

  return (
    <>
      {contentRendered ? (
        <>
          {branches.map((branch) => {
            return createPortal(
              <BranchExplorer brand={brand.brandName} branch={branch} l={l} />,
              branch,
            );
          })}
          <View as="div" className="markdown">
            <Markdown
              remarkPlugins={[remarkGfm, remarkGemoji]}
              rehypePlugins={[rehypeRaw]}
              allowedElements={allowedElements}
              components={Mdtoui}
            >
              {content}
            </Markdown>
          </View>
        </>
      ) : null}
    </>
  );
};

/**
 * Renders the primary tabs for the application in LTI mode.
 * @returns {React.ReactElement} The rendered primary tabs component.
 */
function RenderPrimaryTabs({
  language,
  brand = globalBrands[0],
}: {
  language: LangCode;
  brand: GlobalBrand | undefined;
}): React.ReactElement {
  const l = language;
  const Brands: BrandDetail[] = [...ParentBrands];
  const css: string = `.markdown .lang { display: none; } .markdown .lang.${l.toUpperCase()} { display: inherit; }`;

  const currentBrandIndex = Brands.findIndex(
    (b) => b.title.replace(/\s+/g, "-") === brand.toLowerCase(),
  );

  const [selectedIndex, setSelectedIndex] = useState(currentBrandIndex);

  const handleTabChange = (
    //@ts-ignore
    _event: MouseEvent<ViewOwnProps, MouseEvent> | KeyboardEvent<ViewOwnProps>,
    tabData: { index: number; id?: string | undefined },
  ) => {
    setSelectedIndex(tabData.index);
  };

  return (
    <View as="div">
      <style>{css}</style>
      {/* @ts-ignore */}
      <Tabs onRequestTabChange={handleTabChange} variant="secondary">
        <Tabs.Panel
          key={Brands[0].brandName}
          id={`tab-${Brands[0].brandName}`}
          renderTitle={Brands[0].brandName}
          padding="large large none"
          isSelected={selectedIndex === 0}
          active
        >
          <Outlet index={selectedIndex} language={l} />
        </Tabs.Panel>
        {Brands.shift() &&
          Brands.map(
            (brand, index) => (
              <Tabs.Panel
                key={brand.brandName}
                id={`tab-${brand.brandName}`}
                renderTitle={brand.brandName}
                isSelected={selectedIndex === index + 1}
              >
                {brand.brandName}
              </Tabs.Panel>
            ),
            [selectedIndex],
          )}
      </Tabs>
    </View>
  );
}
export default RenderPrimaryTabs;
