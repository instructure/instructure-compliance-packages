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
  from: `/${Lowercase<GlobalBrand>}/${string}`;
  to: string;
};

declare type RedirectLink = RedirectLinkPartial & {
  lang: LangCode;
};

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
  Icon: ReactElement;
};

/**
 * @TODO: Octokit API types are throwing errors
 * import type { Endpoints } from "@octokit/types";
 * Endpoints["GET /repos/{owner}/{repo}/git/trees/{tree_sha}"]["response"];
 * Property 'tree' does not exist on type 'OctokitResponse<GitGetTreeResponseData>'
 */
declare type GithubFile = {
  path?: string;
  mode?: string;
  type?: string;
  sha?: string;
  size?: number;
  url?: string;
};

declare interface GithubFilesAPI {
  sha: string;
  url: string;
  tree: GithubFile[];
}

declare type GithubRelease = {
  assets?: [];
  assets_url?: string;
  author?: {
    avatar_url?: string;
    events_url?: string;
    followers_url?: string;
    gists_url?: string;
    gravatar_id?: string;
    html_url?: string;
    id?: number;
    login?: string;
    node_id?: string;
    organizations_url?: string;
    repos_url: string;
    site_admin?: boolean;
    starred_url: string;
    type?: string;
    url?: string;
  };
  body: string;
  created_at?: string;
  draft?: boolean;
  html_url?: string;
  id?: number;
  upload_url?: string;
  html_url?: string;
  name?: string;
  node_id?: string;
  prerelease?: boolean;
  published_at?: string;
  tag_name: string;
  tarball_url?: string;
  target_commitish?: string;
  upload_url?: string;
  url?: string;
  zipball_url?: string;
};
