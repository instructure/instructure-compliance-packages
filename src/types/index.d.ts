/**
 * `raw` query param on import path forces Vite to import the Asset as a string.
 * https://vitejs.dev/guide/assets#importing-asset-as-string
 */
declare module "*?raw" {
  const content: string;
  export default content;
}
