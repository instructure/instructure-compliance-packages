export type RedirectLink = {
  title?: string;
  from: string;
  to: string;
};

/**
 * Converts a CSV string into an array of RedirectLink objects.
 *
 * @param csv - The CSV string to be converted. If null, an empty array is returned.
 * @returns An array of RedirectLink objects parsed from the CSV string.
 *
 * The function processes the CSV string by:
 * - Converting the entire string to lowercase.
 * - Splitting the string into lines based on carriage return and newline characters.
 * - Extracting headers from the first line and removing the first header.
 * - Iterating over the remaining lines to create objects with keys from the headers and values from the corresponding columns.
 * - Returning an array of these objects cast to RedirectLink.
 *
 * Example usage:
 * ```typescript
 * const csvData = "title,from,to\r\nHome,/home,https://instructure.com\r\nCanvas,/canvas,https://canvas.com";
 * const redirectLinks = csvJSON(csvData);
 * console.log(redirectLinks);
 * // Output:
 * // [
 * //   { from: "/home", to: "https://instructure.com" },
 * //   { "/canvas", url: "https://canvas.com" }
 * // ]
 * ```
 *
 * Note: Google Sheets publishes CSV files with CRLF line endings, which are explicitly handled in this function.
 * Other CSV files may require modification to the line splitting logic.
 */
export const csvJSON = (csv: string | null): RedirectLink[] => {
  const result: RedirectLink[] = [];

  if (!csv) return result;

  const lines = csv.replaceAll(" ", "").split("\r\n");
  const headers = lines[0].toLowerCase().split(",");
  headers.shift();

  for (let i = 1; i < lines.length; i++) {
    const obj: Partial<RedirectLink> = {};
    const currentline = lines[i].split(",");
    currentline.shift();

    const from = headers[0] as keyof RedirectLink;
    obj[from] = currentline[0].toLowerCase();

    const to = headers[1] as keyof RedirectLink;
    obj[to] = encodeURI(currentline[1].toLowerCase());

    result.push(obj as RedirectLink);
  }

  return result;
};

/**
 * Fetches a CSV file from the specified URL, converts it to an array of RedirectLink objects, and updates the state with the parsed data.
 *
 * @param url - The URL from which to fetch the CSV data.
 * @param setData - A React state setter function to update the state with the parsed RedirectLink objects.
 *
 * The function performs the following steps:
 * - Fetches the CSV data from the provided URL.
 * - Converts the fetched CSV data to text.
 * - Parses the CSV text into an array of RedirectLink objects using the csvJSON function.
 * - Updates the state with the parsed data using the setData function.
 *
 * If an error occurs during the fetch or parsing process, it logs the error to the console.
 *
 * Example usage:
 * ```typescript
 * const [redirectLinks, setRedirectLinks] = useState<RedirectLink[]>([]);
 *
 * useEffect(() => {
 *   fetchRedirects("https://example.com/redirects.csv", setRedirectLinks);
 * }, []);
 * ```
 */
export const fetchRedirects = async (
  url: URL["href"],
  setData: React.Dispatch<React.SetStateAction<RedirectLink[]>>,
) => {
  try {
    const response = await fetch(url);
    const data = await response.text();
    const jsonData = csvJSON(data);
    setData(jsonData);
  } catch (error) {
    console.error("Error fetching CSV data:", error);
  }
};
