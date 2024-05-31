# Changelog

## [Unreleased](https://github.com/thedannywahl/instructure-security-package/compare/isp-site-v3.2.0...isp-site)

### Roadmap

* Code chunking with `lazy()`
* 🚧 JSX => TSX
* Add MDX support to markdown renderer
* Additional contexts (language detection, UI detection, frame detection)

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
