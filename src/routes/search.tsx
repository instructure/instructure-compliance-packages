import {
  Alert,
  Billboard,
  Button,
  Flex,
  Heading,
  IconButton,
  IconSearchLine,
  IconXSolid,
  TextInput,
  Text,
  View,
  Table,
} from "@instructure/ui";
import { Suspense, lazy, useState } from "react";
import { useParams } from "react-router-dom";
import RenderFooter from "../components/RenderFooter.tsx";
import RenderTopNavBar from "../components/RenderTopNavBar.tsx";
import strings from "../strings/search.ts";
import { getLang, getStrings } from "../utils/langs.ts";
import { useSearchContext } from "../components/SearchContext.tsx";
import { printSearch, highlightMatches } from "../utils/search.ts";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import mdtoui from "../components/Mdtoui.tsx";
import allowedElements from "../variables/allowedElements.ts";
import React from "react";

/**
 * Main component for the search functionality.
 * This component handles the rendering of the search input, results, and any related UI elements.
 *
 * @returns {JSX.Element} The main search component.
 */
export function Component(): JSX.Element {
  const l = getLang(useParams().language as LangCode);
  const s = getStrings(strings, l);

  const { query, setQuery } = useSearchContext();
  const [tmpQuery, setTmpQuery] = useState(query);
  const [content, setContent] = useState<JSX.Element | null>(null);

  const css: string =
    '.markdown p br:first-child, .markdown p br:last-child {display: none;} #results [class$="rowHeader"] {vertical-align: top;} mark { color: inherit; background: 0 none; text-decoration: underline wavy 1px;} br { margin-bottom: 1em; }';

  /**
   * A React functional component that renders a search result entry.
   *
   * @param props - The props for the component.
   * @param props.string - The string content to be rendered as markdown.
   * @returns A JSX element containing the rendered markdown.
   */
  const SearchResultEntry: React.FC<{ string: string }> = (props: {
    string: string;
  }): JSX.Element => {
    return (
      <View as="div" className="markdown">
        <Markdown
          rehypePlugins={[rehypeRaw]}
          allowedElements={allowedElements}
          components={mdtoui}
        >
          {props.string}
        </Markdown>
      </View>
    );
  };

  /**
   * Handles the search form submission, sets the query, fetches search results, and outputs the results.
   *
   * @param {React.FormEvent<HTMLFormElement>} e - The form submission event.
   * @returns {Promise<void>} A promise that resolves when the search handling is complete.
   */
  // @ts-ignore
  const handleSearch = async (e): Promise<void> => {
    e.preventDefault();
    e.stopPropagation();
    setQuery(tmpQuery);
    const results = await printSearch(tmpQuery);
    outputResults(results);
  };

  /**
   * Processes and displays the search results.
   *
   * @param {SearchResult} results - The search results to be processed and displayed.
   * @returns {void}
   */
  const outputResults = (results: SearchResult): void => {
    const data = results;
    let container = null;
    let heading = "";
    let message = "";
    if (typeof data === "string") {
      heading = s.error;
      message = data;
    }
    if (typeof data !== "string" && data?.type) {
      heading = s[data.type as keyof typeof s];
      message = `${s[data.string as keyof typeof s]}${data.message ? `\r\n${data.message}` : ""}`;
      if (data.string === "no_results") {
        message = `${message} ${s.hints}`;
      }
    }
    if (
      typeof data !== "string" &&
      data?.status === "403" &&
      typeof data?.message === "string" &&
      data.message.includes("rate limit")
    ) {
      heading = s[data.type as keyof typeof s];
      message = s.rate_limit;
    }

    if (message.length || heading.length) {
      container = (
        <Billboard margin="large" message={message} heading={heading} />
      );
      setContent(container);
    }

    // @TODO: Type the return to one from OCTOKIT
    // @ts-ignore
    if (data && typeof data !== "string" && data?.total_count > 0) {
      const highlightedData = highlightMatches(data as GithubSearchAPI);

      container = (
        <View margin="large">
          {
            // @TODO: Table layout 'auto' and 'hover' are griping.
            // @ts-ignore
            highlightedData.items.map((item, itemIndex) => {
              return (
                <React.Fragment key={item.name}>
                  <Heading level="h2" key={`${item.name}-heading`}>
                    {item.name.split(".")[0]}
                  </Heading>
                  <Table
                    hover={true}
                    layout="auto"
                    key={`${item.name}-table`}
                    caption={item.name}
                    margin="0 0 medium"
                  >
                    <Table.Head>
                      <Table.Row>
                        <Table.ColHeader id="rank">#</Table.ColHeader>
                        <Table.ColHeader id="content">
                          {s.content}
                        </Table.ColHeader>
                      </Table.Row>
                    </Table.Head>
                    <Table.Body>
                      {
                        // @ts-ignore
                        item.text_matches.map((text_match, textMatchIndex) => {
                          const fragment = text_match.fragment;
                          return (
                            <Table.Row
                              key={`${text_match.fragment}-${textMatchIndex}`}
                            >
                              <Table.RowHeader>
                                <Text as="p">{textMatchIndex + 1}</Text>
                              </Table.RowHeader>
                              <Table.Cell>
                                <SearchResultEntry string={fragment} />
                              </Table.Cell>
                            </Table.Row>
                          );
                        })
                      }
                    </Table.Body>
                  </Table>
                </React.Fragment>
              );
            })
          }
        </View>
      );
      setContent(container);
    }
  };

  /**
   * Handles the event to clear the search query, temporary query, and content.
   *
   * @param e - The mouse event triggered by clicking the clear button.
   * @returns {void}
   */

  // @ts-ignore
  const handleQueryClear = (e): void => {
    e.stopPropagation();
    setQuery("");
    setTmpQuery("");
    setContent(null);
  };

  /**
   * Renders a button to clear the search query if there is a temporary or current query.
   *
   * @returns {React.ReactElement | null} The clear button as a React element, or null if there is no query.
   */
  const renderQueryClearButton = (): React.ReactElement | null => {
    if (tmpQuery.length || query.length) {
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
   * Handles keyboard input events on the search input field.
   * If the Enter key is pressed, it prevents the default action and propagation,
   * then triggers the search handler.
   *
   * @param {React.KeyboardEvent<TextInputOwnProps>} e - The keyboard event triggered by user input.
   * @returns {void}
   */
  const handleKeyboardInput = (
    //@ts-ignore
    e: React.KeyboardEvent<TextInputOwnProps>,
  ): void => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.stopPropagation();
      handleSearch(e);
    }
  };

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
        <Heading level="h1">
          {s.search}{" "}
          <Text as="sup" size="medium" weight="normal" color="secondary">
            Beta
          </Text>
        </Heading>
        <Alert
          variant="warning"
          renderCloseButtonLabel={s.close}
          margin="small"
        >
          {s.description}
        </Alert>
        <View as="div" margin="large none small" id="search">
          <form name="searchFilters" autoComplete="off">
            <Flex>
              <Flex.Item shouldGrow>
                <TextInput
                  type="search"
                  placeholder={`${s.search}...`}
                  onChange={(_e, v) => setTmpQuery(v)}
                  onKeyDown={handleKeyboardInput}
                  renderBeforeInput={<IconSearchLine inline={false} />}
                  renderAfterInput={renderQueryClearButton}
                  value={tmpQuery ? tmpQuery : query}
                  shouldNotWrap
                  maxLength={256}
                />
              </Flex.Item>
              <Flex.Item>
                <Button
                  color="primary"
                  margin="0 0 0 small"
                  onClick={handleSearch}
                >
                  {s.search}
                </Button>
              </Flex.Item>
            </Flex>
          </form>
        </View>
        <View as="div" id="results">
          {content}
        </View>
      </View>
      <RenderFooter language={l} />
    </>
  );
}
Component.displayName = "Route.Search";

/**
 * ErrorBoundary component that lazily loads the ErrorPage component and displays it within a Suspense fallback.
 *
 * @returns {JSX.Element} The ErrorBoundary component.
 */
export function ErrorBoundary(): JSX.Element {
  const ErrorPage = lazy(() =>
    import("./error.tsx").then((module) => ({ default: module.Component })),
  );
  return (
    <Suspense fallback={<h1>Error.</h1>}>
      <ErrorPage />
    </Suspense>
  );
}
ErrorBoundary.displayName = "Error.Search";
