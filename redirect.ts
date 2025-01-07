interface Redirect { from: string; to: string; }
const LinksCSV =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQXWM1qxpmOn2nbubgaf2qncwNvfSpKBkgPpVSBIjloXNTnAlEOqmr9ylgqO82iIC7pEeVfD_TI8xmd/pub?gid=1670948929&single=true&output=csv";
const Conveyor =
  "https://app.conveyor.com/profile/b61af872-3391-492e-af74-85cc6ac44701";
 const redirectTo = (url: string) => window.location.href = url;
 const csvJSON = (csv: string): Redirect[] =>
  csv
    ? csv
      .split("\r\n")
      .map((link) => {
        const [from, to] = link.split(",");
        return { from: from, to: to };
      })
    : [];
const fetchRedirects = async (url: string): Promise<Redirect[]> => {
  try {
    const results = await fetch(url);
    const data = await results.text();
    return csvJSON(data);
  } catch (e) {
    redirectTo(Conveyor);
    return [];
  }
};
const hash = window.location.hash.length ? window.location.hash.slice(1) : (redirectTo(Conveyor), "");
fetchRedirects(LinksCSV).then((links) => redirectTo(links?.find((link) => link.from === hash)?.to || Conveyor));
