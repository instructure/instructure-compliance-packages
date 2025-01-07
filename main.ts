interface R { f: string; t: string; }
const L =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQXWM1qxpmOn2nbubgaf2qncwNvfSpKBkgPpVSBIjloXNTnAlEOqmr9ylgqO82iIC7pEeVfD_TI8xmd/pub?output=csv";
const C =
  "https://app.conveyor.com/profile/b61af872-3391-492e-af74-85cc6ac44701";
 const rT = (u: string) => window.location.href = u;
 const cJ = (c: string): R[] =>
  c
    ? c
      .split("\r\n")
      .slice(1)
      .map((l) => {
        const [, f, t] = l.split(",");
        return { f: f, t: t };
      })
    : [];
const fR = async (u: string): Promise<R[]> => {
  try {
    const r = await fetch(u);
    const d = await r.text();
    return cJ(d);
  } catch (e) {
    console.error(e);
    rT(C);
    return [];
  }
};
const h = window.location.hash.length ? window.location.hash.slice(1) : (rT(C), "");
fR(L).then((l) => rT(l?.find((l) => l.f === h)?.t || C));