import {
  Button,
  FormFieldGroup,
  Heading,
  IconButton,
  IconCopyLine,
  IconSearchLine,
  IconXSolid,
  Link,
  RadioInput,
  RadioInputGroup,
  Table,
  Text,
  TextInput,
  ToggleDetails,
  Tooltip,
  View,
} from "@instructure/ui";
import { lazy, Suspense, useState } from "react";
import { useParams } from "react-router-dom";
import RenderFooter from "../components/RenderFooter.tsx";
import RenderTopNavBar from "../components/RenderTopNavBar.tsx";
import strings from "../strings/links.ts";
import { getLang, getStrings } from "../utils/langs.ts";
import { globalBrands, globalSubBrands } from "../variables/brands.ts";
import global from "../variables/globals.ts";
import { globalLangDetails, globalLangs } from "../variables/langs.ts";
import Redirects from "../variables/redirects/index.ts";

/**
 * `Links` is a functional component that renders a list of links.
 *
 * It doesn't accept any props and doesn't have any internal state.
 *
 * The actual implementation of the component may vary, but it typically involves mapping over an array of link data and rendering a list item for each link.
 *
 * @returns A React element that represents the rendered list of links.
 */
export function Component() {
  const l = getLang(useParams().language as LangCode);
  const s = getStrings(strings, l);

  const fromPrefix: string = global.url.replace("https://", "");

  /**
   * `toggle` and `setExpanded` are part of a state hook for managing the state of a toggleable UI element.
   * The state is an object with two properties: `expanded` and `text`.
   * `expanded` is a boolean that represents whether the UI element is currently expanded or not.
   * `text` is a string that represents the current text to display for the toggle action.
   */
  const [toggle, setExpanded] = useState<{ expanded: boolean; text: string }>({
    expanded: false,
    text: s.toggleShow,
  });

  /**
   * `handleToggleChange` is a function that toggles the state of the UI element.
   * It checks the current `expanded` state, and sets the new state accordingly.
   * If the UI element is currently expanded, it sets `expanded` to false and `text` to `s.toggleShow`.
   * If the UI element is not currently expanded, it sets `expanded` to true and `text` to `s.toggleHide`.
   */
  const handleToggleChange = (): void => {
    const t = toggle.expanded ? s.toggleShow : s.toggleHide;
    setExpanded({
      expanded: !toggle.expanded,
      text: t,
    });
  };

  /**
   * `query` and `setQuery` are part of a state hook for managing the state of a search query.
   * The state is a string that represents the current search query.
   */
  const [query, setQuery] = useState<string>("");

  /**
   * `handleQueryChange` is a function that handles changes to the search query.
   * It takes two parameters: `e`, a React ChangeEvent representing the event that triggered the change,
   * and `v`, a string representing the new value of the search query.
   * The function prevents the default action of the event, updates the `query` state with the new value,
   * and then calls `handleChange` with the current language, the new query value, the current brands, and the active product.
   */
  const handleQueryChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    v: string,
  ): void => {
    e.preventDefault();
    setQuery(v);
    handleChange(lang, v, brands, activeProduct);
  };

  /**
   * `handleQueryClear` is a function that clears the search query.
   * It takes one parameter: `e`, a React SyntheticEvent representing the event that triggered the clear action.
   * The function stops the propagation of the event, and then calls `handleQueryChange` with the event and an empty string.
   * @TODO: event type as specified in Instructure UI docs throws an error
   * Event: React.KeyboardEvent<ViewProps> | React.MouseEvent<ViewProps>
   */
  // @ts-ignore
  const handleQueryClear = (e): void => {
    e.stopPropagation();
    handleQueryChange(e, "");
  };

  /**
   * `renderQueryClearButton` is a function that renders a clear button for the search query.
   * The function checks if the `search` property of the `query` state has a length greater than 0.
   * If it does, it returns an `IconButton` component with an `IconXSolid` child, and an `onClick` handler of `handleQueryClear`.
   * If it does not, it returns `null`.
   */
  const renderQueryClearButton = (): React.ReactElement | null => {
    if (query.search.length) {
      return (
        <IconButton
          type="button"
          size="small"
          withBackground={false}
          withBorder={false}
          screenReaderLabel={s.clearSearch}
          onClick={handleQueryClear}
        >
          <IconXSolid />
        </IconButton>
      );
    }
    return null;
  };

  /**
   * `lang` and `setLang` are part of a state hook for managing the state of the selected language.
   * The state is an array of `LangCode` that represents the current selected languages.
   */
  const [lang, setLang] = useState<LangCode[]>([l]);

  /**
   * `handleLangChange` is a function that handles changes to the selected language.
   * It takes two parameters: `e`, a React ChangeEvent representing the event that triggered the change,
   * and `v`, a string representing the new value of the selected language.
   * The function prevents the default action of the event, creates a new array of `LangCode`,
   * checks if the new value is "all", and if it is, it pushes all global languages to the array and calls `handleProductChange` with the event and "all".
   * If the new value is not "all", it pushes only the global languages that include the new value to the array.
   * Finally, it updates the `lang` state with the new array, and calls `handleChange` with the new array, the current query, the current brands, and the active product.
   */
  const handleLangChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    v: string,
  ): void => {
    e.preventDefault();
    const arr: LangCode[] = [];
    if (v === "all") {
      arr.push(...globalLangs);
      handleProductChange(e, "all");
    } else {
      arr.push(
        ...globalLangs.filter((lang) =>
          lang.toUpperCase().includes(v.toUpperCase()),
        ),
      );
    }
    setLang(arr);
    handleChange(arr, query, brands, activeProduct);
  };

  /**
   * `activeProduct` and `setActiveProduct` are part of a state hook for managing the state of the active product.
   * The state is a string that represents the current active product, which can be "all" or a `GlobalBrand`.
   */
  const [activeProduct, setActiveProduct] = useState<"all" | GlobalBrand>(
    "all",
  );

  /**
   * `products` and `setProducts` are part of a state hook for managing the state of the products.
   * The state is an array of `GlobalBrand` that represents the current products.
   */
  const [products, setProducts] = useState<GlobalBrand[]>(globalBrands);

  /**
   * `handleProductChange` is a function that handles changes to the active product.
   * It takes two parameters: `e`, a React ChangeEvent representing the event that triggered the change,
   * and `v`, a string representing the new value of the active product.
   * The function prevents the default action of the event, checks if the new value is "all" or a `GlobalBrand`,
   * and if it is, it updates the `activeProduct` state with the new value.
   * If the new value is not "all" or a `GlobalBrand`, it logs an error to the console.
   * Finally, it calls `handleChange` with the current language, the current query, the current brands, and the new active product.
   */
  const handleProductChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    v: string,
  ): void => {
    e.preventDefault();
    if (v === "all" || globalBrands.includes(v as GlobalBrand)) {
      setActiveProduct(v as "all" | GlobalBrand);
    } else {
      console.error(`Invalid value for setActiveProduct: ${v}`);
    }
    handleChange(lang, query, brands, v as "all" | GlobalBrand);
  };

  /**
   * `activeBrand` and `setActiveBrand` are part of a state hook for managing the state of the active brand.
   * The state is a string that represents the current active brand, which can be "all", "AWS", or a `GlobalSubBrand`.
   */
  const [activeBrand, setActiveBrand] = useState<
    "all" | "AWS" | GlobalSubBrand
  >("all");

  /**
   * `brands` and `setBrands` are part of a state hook for managing the state of the brands.
   * The state is an array of "AWS" or `GlobalSubBrand` that represents the current brands.
   */
  const [brands, setBrands] =
    useState<("AWS" | GlobalSubBrand)[]>(globalSubBrands);

  /**
   * `handleBrandChange` is a function that handles changes to the active brand.
   * It takes two parameters: `e`, a React ChangeEvent representing the event that triggered the change,
   * and `v`, a string representing the new value of the active brand.
   * The function prevents the default action of the event, creates a new array of "AWS" or `GlobalSubBrand`,
   * checks if the new value is "all", and if it is, it pushes "AWS" and all global sub-brands to the array.
   * If the new value is not "all", it pushes only the global sub-brands that include the new value to the array.
   * Finally, it updates the `activeBrand` and `brands` states with the new values, calls `handleProductChange` with the event and "all",
   * updates the `products` state with the new array as `GlobalBrand[]`, and calls `handleChange` with the current language, the current query, the new brands array, and "all".
   */
  const handleBrandChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    v: string,
  ): void => {
    e.preventDefault();
    const arr: ("AWS" | GlobalSubBrand)[] = [];
    if (v === "all") {
      arr.push(...(["AWS", ...globalSubBrands] as ("AWS" | GlobalSubBrand)[]));
    } else {
      arr.push(
        ...(["AWS", ...globalSubBrands].filter((brand) =>
          brand.toLowerCase().includes(v.toLowerCase()),
        ) as ("AWS" | GlobalSubBrand)[]),
      );
    }
    setActiveBrand(v as "all" | "AWS" | GlobalSubBrand);
    setBrands(arr);
    handleProductChange(e, "all");
    setProducts(arr as GlobalBrand[]);
    handleChange(lang, query, arr, "all");
  };

  /**
   * `links` and `setLinks` are part of a state hook for managing the state of the links.
   * The state is an object with a `list` property that is an array of brands, where each brand is an object with a `links` property that is an array of links.
   * Each link is an object with a `lang` property that is a string representing the language of the link.
   * The initial state is created by mapping over the `Redirects` array and for each brand, creating a new object that includes all properties of the brand,
   * and a `links` property that is a new array created by filtering the `links` array of the brand to include only the links where the `lang` property is equal to `l`.
   */
  const [links, setLinks] = useState({
    list: Redirects.map((brands) => ({
      ...brands,
      links: brands.links.filter((link) => link.lang.toUpperCase() === l),
    })),
  });

  /**
   * `handleChange` is a function that handles changes to the state.
   * It takes four parameters: `l`, an array of `LangCode` representing the selected languages; `q`, a string representing the search query;
   * `b`, an array of "AWS" or `GlobalSubBrand` representing the selected brands; and `p`, a string representing the active product.
   * The function creates a new array by mapping over the `Redirects` array and for each brand, creating a new object that includes all properties of the brand,
   * and a `links` property that is a new array created by filtering the `links` array of the brand to include only the links where the `title` property includes `q`,
   * and the `lang` property is included in `l`.
   * The new array is then filtered to include only the brands where the `links` array has a length greater than 0, the `brand` property is included in `b`,
   * and the `brand` property is equal to the first element of the `products` array or `p` if `p` is not "all".
   * Finally, the `links` state is updated with a new object that has a `list` property equal to the new array.
   */
  const handleChange = (
    l: LangCode[],
    q: string,
    b: ("AWS" | GlobalSubBrand)[],
    p: "all" | GlobalBrand,
  ): void => {
    const filteredLinks = Redirects.map((brands) => ({
      ...brands,
      links: brands.links
        .filter((link) =>
          `${`${brands.brand} ${link.title}`}`
            .toLowerCase()
            .includes(q.toLowerCase()),
        )
        .filter((link) => l.includes(link.lang.toUpperCase() as LangCode)),
    }))
      .filter((brands) => brands.links.length > 0)
      .filter((brands) => b.includes(brands.brand as "AWS" | GlobalSubBrand))
      .filter((brands) =>
        p !== "all" ? brands.brand === products[0] || brands.brand === p : true,
      );
    setLinks({
      list: filteredLinks,
    });
  };

  /**
   * Asynchronous function `copy` is used to copy a given text to the clipboard.
   * It uses the Clipboard API's `writeText` method to write the provided text to the clipboard.
   *
   * @param text - The text to be copied to the clipboard.
   *
   * @returns A Promise that resolves void.
   *
   * If the `writeText` method throws an error, the function catches it and logs an error message to the console.
   * The error message is determined based on the type of the error:
   * - If the error is an instance of `Error`, the error message is the `message` property of the error.
   * - If the error is a string, the error message is the error itself.
   * - Otherwise, the error message is `s.copy_error`.
   */
  async function copy(text: string): Promise<void> {
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      let msg: string = s.copy_error;
      if (error instanceof Error) {
        msg = error.message;
      } else if (typeof error === "string") {
        msg = error;
      }
      console.error(msg);
    }
  }

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
        <View as="div" margin="none none x-large">
          <Heading level="h1">{s.header}</Heading>
          <Text as="p">{s.description}</Text>
          <Button onClick={handleToggleChange}>{toggle.text}</Button>
          <ToggleDetails
            id="toggleFilters"
            summary={s.filters}
            onToggle={handleToggleChange}
            expanded={toggle.expanded}
          >
            <View as="div" margin="large none none">
              <form name="searchFilters" autoComplete="off">
                <FormFieldGroup label="" description="" layout="stacked">
                  <TextInput
                    type="search"
                    renderLabel={s.search}
                    placeholder={s.placeholder}
                    onChange={handleQueryChange}
                    renderBeforeInput={<IconSearchLine inline={false} />}
                    renderAfterInput={renderQueryClearButton}
                    value={query}
                  />
                  <RadioInputGroup
                    name="brand"
                    description={s.brands}
                    defaultValue="all"
                    layout="columns"
                    variant="toggle"
                    onChange={handleBrandChange}
                  >
                    <RadioInput
                      key="all"
                      value="all"
                      label="All"
                      context="off"
                    />
                    {["AWS", ...globalBrands].map((brand) => (
                      <RadioInput
                        key={brand}
                        value={brand}
                        label={brand}
                        context="off"
                      />
                    ))}
                  </RadioInputGroup>
                  {activeBrand !== "all" && products.length > 1 && (
                    <RadioInputGroup
                      name="product"
                      description={s.products}
                      defaultValue="all"
                      layout="columns"
                      variant="toggle"
                      onChange={handleProductChange}
                    >
                      <RadioInput
                        key="all"
                        value="all"
                        label="All"
                        context="off"
                        id="allProducts"
                        checked={activeProduct === "all"}
                      />

                      {products
                        .filter((product) => product !== activeBrand)
                        .map((product) => {
                          return (
                            <RadioInput
                              key={product}
                              value={product}
                              label={product}
                              context="off"
                            />
                          );
                        })}
                    </RadioInputGroup>
                  )}
                  <RadioInputGroup
                    name="language"
                    description={s.language}
                    defaultValue={l}
                    layout="columns"
                    variant="toggle"
                    onChange={handleLangChange}
                  >
                    <RadioInput
                      key="all"
                      value="all"
                      label="All"
                      context="off"
                    />
                    {globalLangDetails.map((lang) => (
                      <RadioInput
                        key={lang.code}
                        value={lang.code}
                        label={lang.local}
                        context="off"
                      />
                    ))}
                  </RadioInputGroup>
                </FormFieldGroup>
              </form>
            </View>
          </ToggleDetails>
        </View>
        {links.list.map((brands) => {
          if (brands.links.length) {
            const brand = brands.brand;
            return (
              <View key={brand} as="div" margin="none none xx-large">
                <Heading
                  level={
                    globalBrands.includes(brand as GlobalBrand) ? "h2" : "h3"
                  }
                  id={brand}
                >
                  {brand}
                </Heading>

                <Table hover caption={brand}>
                  <Table.Head>
                    <Table.Row>
                      <Table.ColHeader id="Title" width="25%">
                        {s.title}
                      </Table.ColHeader>
                      <Table.ColHeader id="URLs">{s.link}</Table.ColHeader>
                    </Table.Row>
                  </Table.Head>
                  <Table.Body>
                    {brands.links.map((link) => {
                      return (
                        <Table.Row key={link.title}>
                          <Table.Cell>
                            <Text>{link.title}</Text>
                          </Table.Cell>
                          <Table.Cell>
                            <Link
                              href={`https://${fromPrefix}${link.from}`}
                            >{`${fromPrefix}${link.from}`}</Link>
                            &nbsp;&nbsp;
                            <Tooltip
                              renderTip={s.copy}
                              on={["hover", "focus"]}
                              placement="top"
                              color="primary-inverse"
                            >
                              <IconButton
                                withBackground={false}
                                withBorder={false}
                                screenReaderLabel={s.copy_url}
                                onClick={() => {
                                  copy(`https://${fromPrefix}${link.from}`);
                                }}
                              >
                                <IconCopyLine />
                              </IconButton>
                            </Tooltip>
                            <br />
                            <Text size="small" color="secondary">
                              {link.to.split("?")[0]}
                            </Text>
                          </Table.Cell>
                        </Table.Row>
                      );
                    })}
                  </Table.Body>
                </Table>
              </View>
            );
          }
          return null;
        })}
      </View>
      <RenderFooter language={l} />
    </>
  );
}
Component.displayName = "Route.Links";

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
ErrorBoundary.displayName = "Error.Links";