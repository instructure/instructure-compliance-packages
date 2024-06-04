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
import { useState } from "react";
import { useParams } from "react-router-dom";
import global from "../variables/globals.ts";
import RenderFooter from "../components/RenderFooter.tsx";
import RenderTopNavBar from "../components/RenderTopNavBar.tsx";
import strings from "../strings/links.ts";
import { getLang, getStrings } from "../utils/langs.ts";
import { globalBrands, globalSubBrands } from "../variables/brands.ts";
import { globalLangDetails, globalLangs } from "../variables/langs.ts";
import Redirects from "../variables/redirects/index.ts";
export default function Links() {
  const l = getLang(useParams().language as LangCode);
  const s = getStrings(strings, l);

  const fromPrefix: string = global.url.replace("https://", "");

  const [toggle, setExpanded] = useState<{ expanded: boolean; text: string }>({
    expanded: false,
    text: s.toggleShow,
  });
  const handleToggleChange = (): void => {
    const t = toggle.expanded ? s.toggleShow : s.toggleHide;
    setExpanded({
      expanded: !toggle.expanded,
      text: t,
    });
  };

  const [query, setQuery] = useState<string>("");

  const handleQueryChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    v: string,
  ): void => {
    e.preventDefault();
    setQuery(v);
    handleChange(lang, v, brands.list, activeProduct);
  };

  const [lang, setLang] = useState([l]);
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
    handleChange(arr, query, brands.list, activeProduct);
  };

  const [activeProduct, setActiveProduct] = useState("all");
  const [products, setProducts] = useState({
    list: globalBrands,
  });
  const handleProductChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    v: string,
  ): void => {
    e.preventDefault();
    setActiveProduct(v);
    handleChange(lang, query, brands.list, v);
  };

  const [activeBrand, setActiveBrand] = useState("all");
  const [brands, setBrands] = useState({
    list: globalSubBrands,
  });
  const handleBrandChange = (e, v): void => {
    const arr = [];
    if (v === "all") {
      arr.push(...globalSubBrands);
    } else {
      arr.push(
        ...["AWS", ...globalSubBrands].filter((brand) =>
          brand.toLowerCase().includes(v.toLowerCase()),
        ),
      );
    }
    setActiveBrand(v);
    setBrands({
      list: arr,
    });
    handleProductChange(e, "all");
    setProducts({
      list: arr,
    });
    handleChange(lang, query, arr, "all");
  };

  const [links, setLinks] = useState({
    list: Redirects.map((brands) => ({
      ...brands,
      links: brands.links.filter((link) => link.lang.toUpperCase() === l),
    })),
  });
  const handleChange = (l: LangCode[], q: string, b, p): void => {
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
      .filter((brands) => b.includes(brands.brand))
      .filter((brands) =>
        p !== "all"
          ? brands.brand === products.list[0] || brands.brand === p
          : true,
      );
    setLinks({
      list: filteredLinks,
    });
  };

  const renderClearButton = (): React.ReactElement | null => {
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

  const handleQueryClear = (e): void => {
    e.stopPropagation();
    handleQueryChange(e, "");
  };

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
      console.error(error);
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
                    renderAfterInput={renderClearButton}
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
                  {activeBrand !== "all" && products.list.length > 1 && (
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

                      {products.list
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
                  level={globalBrands.includes(brand) ? "h2" : "h3"}
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
