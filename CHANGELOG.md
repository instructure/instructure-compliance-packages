# Changelog

## [Unreleased](https://github.com/thedannywahl/instructure-security-package/compare/isp-site-v4.3.01...isp-site)

### Roadmap

* Add MDX support to markdown renderer
* Additional contexts (language detection, UI detection, frame detection)

## [4.3.1](https://github.com/thedannywahl/instructure-security-package/compare/isp-site-v4.3.0...isp-site-v4.3.1)

### Changed

* Updated redirect links for Impact HECVAT
* Build script handles existing git tags.

### Fixed

* Broken package download links

## [4.3.0](https://github.com/thedannywahl/instructure-security-package/compare/isp-site-v4.2.4...isp-site-v4.3.0)

### Added

* Intelligent Insights

### Changed

* Add pnpm-lock.yaml to .gitignore.

### Fixed

* git tagging can fail gracefully (allows releases w/o bumping semver).

## [4.2.4](https://github.com/thedannywahl/instructure-security-package/compare/isp-site-v4.2.2...isp-site-v4.2.4)

### Fixed

* Fixed permalinks to AWS assets.
* Typing of Parchment redirects.

### Changed
* Update to Instructure UI 9.1.0.

## 4.2.3

* Nothin' to see here 👀

## [4.2.2](https://github.com/thedannywahl/instructure-security-package/compare/isp-site-v4.2.1...isp-site-v4.2.2)

### Fixed

* Mastery View Formative short link.

### Changed
* Stricter typing for redirect links.

## [4.2.1](https://github.com/thedannywahl/instructure-security-package/compare/isp-site-v4.2.0...isp-site-v4.2.1)

### Fixed

* Add missing contact email in Help menu.

## [4.2.0](https://github.com/thedannywahl/instructure-security-package/compare/isp-site-v4.1.1...isp-site-v4.2.0)

### Changed

* Mdtoui component now uses `React.Lazy`.  React-Markdown calls now only load the relevant Components.

## [4.1.1](https://github.com/thedannywahl/instructure-security-package/compare/isp-site-v4.1.0...isp-site-v4.1.1)

### Added

* Auto tagging on on deploys.

### Changed

* TopNavBar icons are now proper InstUI Icons or SVG Icons.  No more CSS hacks.
* Disable js imports in tsconfig.

## [4.1.0](https://github.com/thedannywahl/instructure-security-package/compare/isp-site-v4.0.3...isp-site-v4.1.0)

### Fixed

* `build:git` doesn't re-source `$npm_package_version`, as part of build.  Use `$(pnpm -s env:version)` instead.
* Return type for `getGithubRepoContents()` in utils/explorer.ts if the repo is empty.
* Stray comma in Releases.
* Brand toggles in TopNavBar and Footer
* Redirect Links filters sometimes don't behave properly.

### Changed
* Footer now static color.

## [4.0.3](https://github.com/thedannywahl/instructure-security-package/compare/isp-site-v4.0.2...isp-site-v4.0.3)

### Fixed

* Build version number not matching deploy version number

### Added

* `build:preview` script used by `pnpm run preview`

## [4.0.2](https://github.com/thedannywahl/instructure-security-package/compare/isp-site-v4.0.1...isp-site-v4.0.2)

### Fixed

* Vulnerabilities is package dependencies with pnpm overrides.
* Missing type guards in mdtoui JSX component.

### Added

* `sec` scripts for `pnpm audit` and snyk to build chain.

### Changed

* Migrate makefile to pnpm run scripts.
* Use JS shell emulator for cross-platform compatibility.

## [4.0.1](https://github.com/thedannywahl/instructure-security-package/compare/isp-site-v4.0.0...isp-site-v4.0.1)

### Added

* [Snyk](https://snyk.io/) for SAST

## [4.0.0](https://github.com/thedannywahl/instructure-security-package/compare/isp-site-v3.2.0...isp-site-v4.0.0)

### Added

* Author and Name to Releases.
* Releases page now displays 3 most recent Releases, w/ link to more.

### Changed

* Full conversion to TypeScript. 🙌
* Implement code chunking with react-router [`lazy`](https://reactrouter.com/en/main/route/lazy#lazy).

```
Before:
dist/index.html                            1.31 kB │ gzip:   0.59 kB
dist/assets/banner-Dl8io6Qq.webp         163.78 kB
dist/assets/index-9AL1K8pI.css            15.54 kB │ gzip:   6.26 kB
dist/assets/index-BGBpAMfR.js          1,733.08 kB │ gzip: 543.97 kB

After:
dist/index.html                            1.31 kB │ gzip:   0.59 kB
dist/assets/banner-Dl8io6Qq.webp         163.78 kB
dist/assets/index-DXft5ptw.css            15.54 kB │ gzip:   6.26 kB
dist/assets/error-khoKcG1q.js              2.49 kB │ gzip:   1.36 kB
dist/assets/redirectTo-DL16hFgT.js         3.56 kB │ gzip:   1.62 kB
dist/assets/releases-B2U3Nq7U.js           4.85 kB │ gzip:   2.63 kB
dist/assets/markdownBrand-BaosrPVo.js      5.18 kB │ gzip:   2.69 kB
dist/assets/mdui-Cnx4ZaSO.js               7.33 kB │ gzip:   3.45 kB
dist/assets/links-xmvbtdnr.js             19.24 kB │ gzip:   6.58 kB
dist/assets/index-DhdQIOzm.js             97.47 kB │ gzip:  26.69 kB
dist/assets/RenderTopNavBar-CIF88TF3.js  270.11 kB │ gzip:  72.60 kB
dist/assets/index-NclIL3Cn.js            333.30 kB │ gzip: 103.77 kB
dist/assets/mdtoui-B7dhu_zY.js           997.21 kB │ gzip: 334.78 kB
```

### Fixed

* Menu Item CSS selector broke between INSTUI v8 and v9. ([e536d44](https://github.com/thedannywahl/instructure-security-package/commit/e536d4466143de9ea8b08ae9ae2f6404ea00fb4a))
* URL for favicon. ([1a57bfe](https://github.com/thedannywahl/instructure-security-package/commit/1a57bfebb4b61b019201ef9a9c26d09f68e8aa84))

## [3.2.0](https://github.com/thedannywahl/instructure-security-package/compare/isp-site-v3.1.3...isp-site-v3.2.0)

### Changed

* Switched to React 19 RC and [react-compiler](https://react.dev/learn/react-compiler).
* Rewrite package.json Scripts:
  * add `env:` scripts: `env:package`, `env:biome`, and `env:app`
  * add evaluation biome scripts and rename scripts that write (`check`/`check:apply`, `format`/`format:apply`, `lint`/`lint:apply`, `biome`/`biome:apply`)
* Use [node-jq](https://www.npmjs.com/package/node-jq) for a bundled version of jq (used in Scripts and makefile)


### Fixed

* Task lists were not resolving correctly in MDUI components with github-flavored markdown.
* Incorrect calls to `process.env` instead of `import.meta.env` in Releases. 

## [3.1.3](https://github.com/thedannywahl/instructure-security-package/compare/f10e243eb0eaa93bfc64df30624200ce6942660f...isp-site-v3.1.3)

### Fixed

* Broken release tags

## [3.1.2](https://github.com/thedannywahl/instructure-security-package/compare/isp-site-v3.1.1...f10e243eb0eaa93bfc64df30624200ce6942660f)

### Added

* `push-test` script for testing deploying builds to a non-prod branch (`test-gh-pages`).

### Changed

* Update Vite to [5.2.12](https://github.com/vitejs/vite/blob/v5.2.12/packages/vite/CHANGELOG.md#5212-2024-05-28)
* Update PNPM to [9.1.3](https://github.com/pnpm/pnpm/releases/tag/v9.1.3)

### Fixed

* `inflight` dependency deprecation via PNPM override of `gh-pages>globby@11.1.0`.

## [3.1.1](https://github.com/thedannywahl/instructure-security-package/compare/isp-site-v3.1.0...isp-site-v3.1.1)

### Added

* [CHANGELOG.md](https://github.com/thedannywahl/instructure-security-package/blob/isp-site/CHANGELOG.md)

### Changed

* Use "A+" Learnplatform logo

## [3.1.0](https://github.com/thedannywahl/instructure-security-package/compare/isp-site-v3.0.1...isp-site-v3.1.0)

### Added

* Added support for [GFM Alerts](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts) to [MDUI](https://inst.bid/#/mdui) Component Renderer.

```markdown
> [!NOTE]
> This is some informational content.
```

will render as an Instructure UI Alert component.

```jsx
<Alert variant="info">
  This is some informational content.
</Alert>
```

> [!NOTE]
> Alert variants are supported, but dismissing is not.

## [3.0.1](https://github.com/thedannywahl/instructure-security-package/compare/isp-site-v3.0.0...isp-site-v3.0.1)

### Added

* [inst.bid/links](https://inst.bid/#/links) includes a "Products" filter underneath the "Brands" filter.  Available Products update dynamically based on the selected Brand.
* [inst.bid/links](https://inst.bid/#/links) has short redirects for every asset of every compliance package.
* [inst.bid/links](https://inst.bid/#/links) includes "AWS" as a Brand.
* Commit messages for build & deploy match release versions
* Release version added in `<meta name="application-version" content="$VERSION" />` tag.

### Changed

* Explorer now uses [React Portals](https://react.dev/reference/react-dom/createPortal) for HMR.
* `README-[brand].md` files simplified to call `Explorer()` less frequently.
* ES-Lint replaced with [Biome](https://biomejs.dev/)

### Fixed

* Instructure logo not displaying in TopNavBar on initial render.

## [3.0.0](https://github.com/thedannywahl/instructure-security-package/compare/cee28de804f8b1c559398495384097ba470630b3...isp-site-v3.0.0)

### Added

* [Parchment](https://www.parchment.com/) to Brands.

### Changed

* Yarn replaced with [pnpm](https://pnpm.io/cli/update).
* Migrated to [Vite](https://vitejs.dev/).
* Upgraded [Instructure UI](https://instructure.design/) to v9.

### Removed

* Build files no longer live in `gh-pages` branch.  Builds live in `isp-site` and are deployed to `gh-pages`.

## 2.X and Prior

See [commit history](https://github.com/thedannywahl/instructure-security-package/commits/isp-site/?after=cee28de804f8b1c559398495384097ba470630b3+34)
