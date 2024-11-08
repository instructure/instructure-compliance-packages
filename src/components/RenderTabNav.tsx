import { Tabs, View } from "@instructure/ui";
import { ParentBrands } from "../variables/brands.tsx";

/**
 * Renders the tabs for Navigation in LTI mode.  Useful for navigating from downloads and errors.
 * @returns {React.ReactElement} The rendered primary tabs component.
 */
function RenderTabNav({
  language,
  brand,
}: {
  language: LangCode;
  brand: GlobalBrand;
}): React.ReactElement {
  const l = language;
  const Brands: BrandDetail[] = [...ParentBrands];
  const currentBrand = brand.toLowerCase().split(" ")[0];
  const css: string = `.markdown .lang { display: none; } .markdown .lang.${l.toUpperCase()} { display: inherit; }`;

  // @TODO: go to that brand page
  const handleTabClick = (
    //@ts-ignore
    _event: MouseEvent<ViewOwnProps, MouseEvent> | KeyboardEvent<ViewOwnProps>,
    tabData: { index: number; id?: string | undefined },
  ) => {
    window.location.href = `/#/${tabData.id?.toLowerCase().replaceAll(" ", "-")}`;
  };

  return (
    <View as="div">
      <style>{css}</style>
      {/* @ts-ignore */}
      <Tabs onRequestTabChange={handleTabClick} variant="secondary">
        {Brands.map(
          (brand) => (
            <Tabs.Panel
              key={brand.brandName.toLowerCase()}
              id={brand.brandName.toLowerCase()}
              renderTitle={brand.brandName}
              isSelected={brand.title === currentBrand}
            />
          ),
          [currentBrand],
        )}
      </Tabs>
    </View>
  );
}
export default RenderTabNav;
