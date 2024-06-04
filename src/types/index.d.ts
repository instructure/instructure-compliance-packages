declare interface ImportMeta {
  env: Record<string, string | boolean | undefined>;
}

/**
 * `raw` query param on import path forces Vite to import the Asset as a string.
 * https://vitejs.dev/guide/assets#importing-asset-as-string
 */
declare module "*?raw" {
  const content: string;
  export default content;
}

/**
 * https://stackoverflow.com/questions/66628783/react-markdown-type-for-paragraph-renderer
 *
 */
type MarkdownNodeToProps<T> = {
  node: T;
  children: T extends { children: unknown } ? ReactNode : never;
};

declare type MarkdownCustomRenderer = {
  [K in Content["type"]]?: (
    props: MarkdownNodeToProps<Extract<Content, { type: K }>>,
  ) => ReactElement;
};

declare type RedirectLinkPartial = {
  title: string;
  from: string;
  to: string;
};

declare type RedirectLink = RedirectLinkPartial & {
  lang: string;
}

declare type RedirectBrand = {
  brand: string;
  links: RedirectLink[];
};

type LangString = {
  EN: string;
  ES_LA: string;
  PT_BR: string;
  DE: string;
};

declare type PageStrings = {
  [key: string]: LangString;
};

declare type FilteredStrings = {
  [key: string]: string;
};

declare type LangCode = "EN" | "ES_LA" | "PT_BR" | "DE";

declare type LangDetail = {
  lang: string;
  local: string;
  code: LangCode;
};

declare type GlobalBrand =
  | "Instructure"
  | "Canvas"
  | "Mastery"
  | "Elevate"
  | "Impact"
  | "LearnPlatform"
  | "Parchment";

declare type GlobalSubBrand =
  | GlobalBrand
  | "Canvas LMS"
  | "Canvas Mobile"
  | "Canvas Studio"
  | "Canvas Credentials"
  | "Canvas Catalog"
  | "Canvas Commons"
  | "Canvas Data"
  | "Mastery Connect"
  | "Mastery Item Bank"
  | "Mastery View Assessments"
  | "Elevate K-12 Analytics"
  | "Elevate Data Quality"
  | "Elevate Data Sync"
  | "Learn Platform";

declare type BrandDetail = {
  brandName: globalBrand;
  title: Lowercase<GlobalBrand>;
  route: string;
  readme: string;
  color: `#${string}`;
};
