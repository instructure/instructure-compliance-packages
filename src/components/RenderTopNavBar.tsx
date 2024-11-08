import {
  Drilldown,
  Heading,
  IconDiscussionLine,
  IconInstructureLogoLine,
  IconQuestionLine,
  InlineList,
  Link,
  Text,
  TopNavBar,
  View,
} from "@instructure/ui";
import { Link as Anchor } from "react-router-dom";
import strings from "../strings/header.ts";
import { getStrings } from "../utils/langs.ts";
import { IsApp } from "../utils/lti.ts";
import { ParentBrands } from "../variables/brands.tsx";
import { globalLangDetails } from "../variables/langs.ts";

/**
 * Component that renders the top navigation bar.
 *
 * @param language - The language code.
 * @param brand - The current brand name, defaults to Instructure
 * @returns A React node representing the top navigation bar.
 */
function RenderTopNavBar({
  language,
  brand = "Instructure",
}: { language: LangCode; brand?: GlobalBrand }): React.ReactElement {
  const l = language;
  const s = getStrings(strings, l);
  const Brands: BrandDetail[] = [...ParentBrands];
  Brands.shift();

  const currentBrand =
    Brands[Brands.findIndex((b) => b.brandName === brand)] ?? ParentBrands[0];

  const isApp = IsApp();

  const topNavBarThemeOverride = isApp
    ? {
        desktopBackgroundInverse: "#ffffff",
        smallViewportBackgroundInverse: "#ffffff",
      }
    : undefined;

  const topNavBarItemThemeOverride = isApp
    ? {
        activeIndicatorColorInverse: currentBrand.color,
      }
    : undefined;

  return (
    <View id="nav" className={`${currentBrand.title}`} as="div" tabIndex={0}>
      <TopNavBar inverseColor={true}>
        {() => (
          <TopNavBar.Layout
            navLabel="main"
            smallViewportConfig={{
              dropdownMenuToggleButtonLabel: s.toggle_menu,
              dropdownMenuLabel: s.main_menu,
            }}
            themeOverride={topNavBarThemeOverride}
            renderBrand={
              isApp ? (
                <TopNavBar.Brand
                  screenReaderLabel={currentBrand.brandName}
                  renderIcon={
                    <currentBrand.Icon
                      size="small"
                      color="primary-inverse"
                      height="2.5rem"
                      width="2.5rem"
                    />
                  }
                  iconBackground={currentBrand.color}
                  href={`#/${l === "EN" ? "" : l.toLowerCase().split("_")[0]}`}
                />
              ) : (
                <TopNavBar.Brand
                  screenReaderLabel={ParentBrands[0].brandName}
                  renderIcon={
                    <IconInstructureLogoLine
                      size="small"
                      color="primary"
                      height="2.5rem"
                      width="2.5rem"
                    />
                  }
                  href={`#/${l === "EN" ? "" : l.toLowerCase().split("_")[0]}`}
                />
              )
            }
            renderMenuItems={
              <TopNavBar.MenuItems
                listLabel={s.page_navigation}
                currentPageId=""
                renderHiddenItemsMenuTriggerLabel={(hiddenChildrenCount) =>
                  `${hiddenChildrenCount} ${s.more}`
                }
              >
                {Brands.map((brand) => (
                  <TopNavBar.Item
                    themeOverride={topNavBarItemThemeOverride}
                    id={brand.title}
                    key={brand.title}
                    href={`#${brand.route}${
                      l === "EN" ? "" : `/${l.toLowerCase().split("_")[0]}`
                    }`}
                    status={
                      currentBrand.title === brand.title ? "active" : "default"
                    }
                  >
                    {brand.brandName}
                  </TopNavBar.Item>
                ))}
              </TopNavBar.MenuItems>
            }
            renderActionItems={
              <TopNavBar.ActionItems
                listLabel={s.actions}
                renderHiddenItemsMenuTriggerLabel={(hiddenChildrenCount) =>
                  `${hiddenChildrenCount} ${s.more_actions}`
                }
              >
                <TopNavBar.Item
                  id="langSwitcher"
                  //@TODO: W/ Chevron enabled the Item width includes the ScreenReaderContent.
                  showSubmenuChevron={false}
                  tooltip={s.language}
                  variant="icon"
                  renderIcon={<IconDiscussionLine />}
                  renderSubmenu={
                    <Drilldown id="language" rootPageId="language">
                      <Drilldown.Page id="language">
                        {globalLangDetails.map((language) => (
                          <Drilldown.Option
                            id={language.lang}
                            key={language.code}
                            disabled={language.code === l}
                          >
                            {language.code === l ? (
                              language.local
                            ) : (
                              <Anchor
                                className="lang"
                                to={`./${
                                  language.code !== "EN"
                                    ? language.code.toLowerCase().split("_")[0]
                                    : ""
                                }`}
                              >
                                {language.local}
                              </Anchor>
                            )}
                          </Drilldown.Option>
                        ))}
                      </Drilldown.Page>
                    </Drilldown>
                  }
                >
                  {s.language}
                </TopNavBar.Item>
                {isApp ? (
                  <TopNavBar.Item
                    id="info"
                    showSubmenuChevron={false}
                    tooltip={s.help}
                    variant="icon"
                    renderIcon={<IconQuestionLine />}
                    customPopoverConfig={{
                      on: "click",
                      shouldContainFocus: true,
                      children: (
                        <View
                          id="help"
                          as="div"
                          padding="medium"
                          width="25rem"
                          tabIndex={0}
                          aria-label={s.contact_info}
                          position="relative"
                          borderRadius="small"
                        >
                          <Heading level="h3">{s.contact_info}</Heading>
                          <Text>{s.info_overview}</Text>

                          <View as="div" margin="medium 0 0">
                            <Text weight="bold">{s.current_customers}</Text>
                            <br />
                            <Text>{s.contact_csm}</Text>
                          </View>

                          <View as="div" margin="medium 0 0">
                            <Text weight="bold">{s.prospects}</Text>
                            <br />
                            <Text>{s.contact_sales}</Text>
                            <br />
                            <Text>
                              {s.contact_general}{" "}
                              <Link href="mailto:info@instructure.com">
                                info@instructure.com
                              </Link>
                              .
                            </Text>
                          </View>
                          <View
                            as="hr"
                            shadow="topmost"
                            borderWidth="small"
                            margin="small none"
                            padding="none"
                            borderColor="primary"
                          />
                          <InlineList delimiter="pipe" size="small">
                            <InlineList.Item>
                              <Link
                                href={`#/links/${
                                  l !== "EN"
                                    ? `${l.toLowerCase().split("_")[0]}`
                                    : ""
                                }`}
                              >
                                {s.redirects}
                              </Link>
                            </InlineList.Item>
                            <InlineList.Item>
                              <Link
                                href={`#/releases/${
                                  l !== "EN"
                                    ? `${l.toLowerCase().split("_")[0]}`
                                    : ""
                                }`}
                              >
                                {s.releases}
                              </Link>
                            </InlineList.Item>
                            <InlineList.Item>
                              <Link
                                href={`#/mdui/${
                                  l !== "EN"
                                    ? `${l.toLowerCase().split("_")[0]}`
                                    : ""
                                }`}
                              >
                                MDUI
                              </Link>
                            </InlineList.Item>
                            <InlineList.Item>
                              <Link
                                href={
                                  {
                                    EN: "https://www.instructure.com/contact-us",
                                    ES_LA:
                                      "https://www.instructure.com/es/contact-us",
                                    PT_BR:
                                      "https://www.instructure.com/pt-br/contato",
                                    DE: "https://www.instructure.com/de/contact-us",
                                  }[l as LangCode]
                                }
                              >
                                {s.contact}
                              </Link>
                            </InlineList.Item>
                          </InlineList>
                        </View>
                      ),
                    }}
                  >
                    {s.help}
                  </TopNavBar.Item>
                ) : null}
              </TopNavBar.ActionItems>
            }
          />
        )}
      </TopNavBar>
    </View>
  );
}
export default RenderTopNavBar;
