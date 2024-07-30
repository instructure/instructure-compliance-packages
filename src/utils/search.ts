import global from "../variables/globals.ts";

/**
 * Fetches search results from the GitHub API based on the provided owner, repository, and query.
 *
 * @param {string} owner - The owner of the repository.
 * @param {string} repo - The name of the repository.
 * @param {string} query - The search query string.
 * @returns {Promise<SearchResult>} A promise that resolves to the search results.
 */
async function getSearchResults(
  owner: string,
  repo: string,
  query: string,
): Promise<SearchResult> {
  const encodedQuery = [
    query.substring(0, 256),
    `repo:${owner}/${repo}`,
    "path:Search",
    "in:file",
  ]
    .map(encodeURIComponent)
    .join("+");
  const apiUrl = `${global.api}/search/code?q=${encodedQuery}`;
  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        Accept: "application/vnd.github.text-match+json",
        Authorization: import.meta.env?.VITE_GITHUB_TOKEN
          ? `token ${import.meta.env.VITE_GITHUB_TOKEN}`
          : "",
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });
    const data = await response.json();
    if (data?.total_count > 0 && data?.items.length > 0) return data;
    return searchError("no_results", "", "sorry");
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error: ${error.message}`);
      return searchError("error", error.message);
    }
    console.error(`An unexpected error occurred: ${error}`);
    return searchError("unexpected_error", String(error));
  }
}

/**
 * Creates a SearchResult object with the provided string, message, and type.
 *
 * @param {string} str - The string to include in the SearchResult.
 * @param {string} [msg] - An optional message to include in the SearchResult. Defaults to an empty string if not provided.
 * @param {string} [t] - An optional type to include in the SearchResult. Defaults to "error" if not provided.
 * @returns {SearchResult} The constructed SearchResult object.
 */
function searchError(str: string, msg?: string, t?: string): SearchResult {
  return { string: str, message: msg || "", type: t || "error" };
}

/**
 * Executes a search query and returns the search results.
 *
 * @param {string} query - The search query string.
 * @returns {Promise<SearchResult>} A promise that resolves to the search results.
 */
export async function printSearch(query: string): Promise<SearchResult> {
  const owner = global.owner;
  const repo = global.repo;
  if (!query) {
    return searchError("no_query", "", "warning");
  }
  return getSearchResults(owner, repo, query);
}

/**
 * Highlights matches in the search results by wrapping keywords in <mark> tags with specific colors.
 *
 * @param {GithubSearchAPI} data - The search results data from the GitHub API.
 * @returns {GithubSearchAPI} The search results data with highlighted matches.
 */
export function highlightMatches(data: GithubSearchAPI): GithubSearchAPI {
  const highlightedData = data;

  const colors = [
    "#2B7ABC", // colors.contrasts.blue4570
    "#E62429", // colors.contrasts.red4570
    "#E8EAEC", // colors.contrasts.gray4570
    "#03893D", // colors.contrasts.green4570
    "#CF4A00", // colors.contrasts.orange4570
  ];

  const keywordsText = Array.from(
    new Set(
      data.items.flatMap((item) =>
        item.text_matches.flatMap((text_match) =>
          text_match.matches.map((match) =>
            match.text ? match.text.toLowerCase() : "",
          ),
        ),
      ),
    ),
  ).slice(0, 5);

  const escapeRegExp = (text: string) => {
    return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  };

  const escapedKeywords = keywordsText.map(escapeRegExp);
  const keywordPattern = new RegExp(
    `\\b(${escapedKeywords.join("|")})\\b`,
    "gi",
  );

  const keywords = keywordsText.reduce(
    (acc, keyword, index) => {
      acc[keyword] = colors[index % colors.length];
      return acc;
    },
    {} as Record<string, string>,
  );

  for (const { text_matches } of highlightedData.items) {
    for (const text_match of text_matches) {
      let fragment = text_match.fragment;

      fragment = fragment
        // remove leading and trailing whitespace
        .trim()
        // wrap the matched keywords in <mark> tags
        .replace(
          keywordPattern,
          (match) =>
            `<mark style="text-decoration-color: ${keywords[match.toLowerCase()]}">${match}</mark>`,
        )
        // replace tab characters with line breaks
        .replace(/\t+/g, "<br>")
        // replace carriage return characters with line breaks
        .replace(/[\n\r]+/g, "<br>")
        // replace bullets with Markdown bullet points
        .replace(/<br>• <br>/g, "\r\n* ")
        // replace nested bullets with Markdown bullet points
        .replace(/<br>o <br>/g, "\r\n  * ")
        .replace(/<br>o /g, "\r\n  * ")
        // replace stray quotes with a line break
        .replace(/<br>"<br>/g, "<br>")
        // replace multiple line breaks with a single line break
        .replace(/(<br\s*\/?>)+/gi, "<br>")
        // remove leading and trailing line breaks
        .replace(/^(<br\s*\/?>)+|(<br\s*\/?>)+$/gi, "")
        // remove leading and trailing quotes
        .replace(/^["']+|["']+$/g, "");

      if (fragment.length > 1000) {
        const truncatedFragment = fragment.substring(0, 1000);
        const lastSpaceIndex = truncatedFragment.lastIndexOf(" ") + 1;
        fragment = `${truncatedFragment.substring(0, lastSpaceIndex)}...`;
      }

      text_match.fragment = fragment;
    }
  }

  return highlightedData;
}
