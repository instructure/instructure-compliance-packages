interface RedirectLink {
  title?: string;
  from: string;
  to: string;
}

export default {};

const Links: string =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQXWM1qxpmOn2nbubgaf2qncwNvfSpKBkgPpVSBIjloXNTnAlEOqmr9ylgqO82iIC7pEeVfD_TI8xmd/pub?output=csv";

const Conveyor: string =
  "https://app.conveyor.com/profile/b61af872-3391-492e-af74-85cc6ac44701";

const redirectTo = (url: string) => {
  window.location.href = url.toString();
 };

 const csvJSON = (csv: string | null): RedirectLink[] => {
  if (!csv) return [];

  const lines = csv.replace(/\s/g, "%20").split("\r\n");
  const headers = lines[0].toLowerCase().split(",");
  lines.shift();
  headers.shift();

  return lines.map((line) => {
    const obj: Partial<RedirectLink> = {};
    const cl = line.split(",");
    cl.shift();

    const from = headers[0] as keyof RedirectLink;
    obj[from] = cl[0].toLowerCase();

    const to = headers[1] as keyof RedirectLink;
    obj[to] = encodeURI(cl[1].toLowerCase());

    return obj as RedirectLink;
  });
};

const fetchRedirects = async (url: URL["href"]): Promise<void | RedirectLink[]> => {
  try {
    const response: Response = await fetch(url);
    const data: string = await response.text();
    return csvJSON(data);
  } catch (e: unknown) {
    console.error("Error fetching CSV data:", e);
    redirectTo(Conveyor);
  }
};

const l: string | void = window.location.hash.length
  ? window.location.hash.slice(1)
  : redirectTo(Conveyor);

fetchRedirects(Links).then((links: void | RedirectLink[]) => {
  const redirect: string =
    links?.find((link) => link.from === l)?.to || Conveyor;
  // redirectTo(redirect);
  console.log(redirect);
});