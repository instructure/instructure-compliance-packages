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
declare type MarkdownNodeToProps<T> = {
  node: T;
  children: T extends { children: unknown } ? ReactNode : never;
};

declare type MarkdownCustomRenderer = {
  [K in Content["type"]]?: (
    props: MarkdownNodeToProps<Extract<Content, { type: K }>>,
  ) => ReactElement;
};
