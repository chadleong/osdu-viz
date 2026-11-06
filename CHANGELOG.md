# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2026-11-06

Major release: the build toolchain moves to Vite 8, Vitest 5 and TypeScript 7 (Node 20.19+ / 22.12+ required), and the app gains a built-in guides viewer and reverse-reference ("referenced by") navigation.

### Added
- "Referenced by" section in the side panel: lists the schemas that use the selected one, via `$ref` (e.g. `AbstractBusinessRule` -> `DataQuality`) or `x-osdu-relationship` (with the property name). One row per schema with all referring versions; click to open it.
- "Show referenced by" button on the graph that draws the referring schemas (latest version of each, up to 24) as nodes pointing at the selected schema. Toggling it keeps your pan and zoom.
- Reverse references are computed in the browser from the loaded schemas (`src/utils/referencedBy.ts`), so schemas loaded from a local folder are included.
- Guides viewer (header "Guides" button): browse everything in `public/Guides` inside the app. A left tree (Chapters, Migration Guides by milestone, Release Reports) with search, the rendered page with an "On this page" outline, and shareable deep links (`#/guides/<path>?a=<heading>`).
  - Links between guides stay in the app; links to schema docs (`E-R/<group>/<Name>.<ver>.md`) open that schema in the graph; links to content that is not bundled (worked examples, etc.) open the upstream repository. Images, tables, `<details>` and heading anchors are supported, and content is sanitized.
  - Release reports (HTML) show in a sandboxed frame. Migration guides have an "Open schema in graph" button, and the schema side panel lists a schema's migration guides.
  - `npm run scan` now also writes `public/guides-index.json` (paths and titles of all guides).
- Warning banner at the top of the graph when an older version of a schema is selected, with a "Switch to latest" button (dismissible per version).
- "Wide view" button in the guides viewer hides the tree and outline so wide tables get the full width.
- "Nested properties" section in the side panel is collapsible (expanded by default).
- Deprecated reference values (description starting with `DEPRECATED:` or `InactiveIndicator: true`) are highlighted in red with a DEPRECATED badge, like deprecated properties.
- The "OSDU Schema Viz" title is clickable and behaves like Clear (and leaves the guides).

### Changed
- Dependencies updated to latest: Vite 7 -> 8, @vitejs/plugin-react 5 -> 6, Vitest and @vitest/coverage-v8 2 -> 5, TypeScript 5.9 -> 7, @dagrejs/dagre 1 -> 3, @testing-library/jest-dom 6 -> 7, jsdom 25 -> 29, plus React 19.3, @xyflow/react 12.12 and other minor/patch updates. `npm audit` now reports 0 vulnerabilities (was 10). jsdom stays on 29 because 30+ needs Node 22.22.2+.
- CI deploy workflow uses Node 22 (Node 18 is no longer supported by the toolchain).
- jest-dom is registered through `@testing-library/jest-dom/vitest` (types via `src/vitest-env.d.ts`).
- Guide tables use the full reader width with minimum column widths so long descriptions no longer squeeze narrow columns.
- `isDeprecated` moved from `Tooltip.tsx` to `src/utils/deprecated.ts` (fixes the Vite Fast Refresh warning) and is shared by property and reference-value deprecation checks.

### Performance
- The guides viewer (markdown renderer and sanitizer) loads on demand, keeping it out of the main bundle; its page cache is bounded to the 30 most recent pages.
- Reverse references are only computed once a schema is selected.

## [1.7.0] - 2026-11-06

### Added
- Schemas with multiple versions now appear once in the search dropdown, showing the latest version by default (924 entries instead of 1,448). An "All versions" checkbox in the dropdown header lists every version, and older ones are labelled with the latest available.
- When the selected schema has several versions, the version badge becomes a dropdown to switch between them (latest is marked). Switching keeps the breadcrumb trail.

### Changed
- Search matches on version number across all versions, even when only latest versions are listed.
- Schemas loaded from a local folder derive their version from the file name.

## [1.6.2] - 2026-11-05

### Added
- "Relationships" in the side panel is collapsible (collapsed by default, shows the count).

### Changed
- A property row with nested attributes expands and collapses when you click anywhere on the row, not just on its name. Clicks on inner buttons or links, and text selection, don't toggle it.
- The header status text is shortened to `N schemas · OSDU v0.30.1` (the duplicated "Selected: ..." is gone, since the search box and breadcrumb already show it) and is hidden below 900px.

### Removed
- "Copy $id" action in the side panel.

## [1.6.1] - 2026-11-05

### Changed
- The main header is more compact: stacked padding was reduced, the search box shrinks with the window (140-720px) instead of a fixed 720px, and the graph area now fills the remaining height instead of a hard-coded offset.
- On narrower screens the header trims itself: the status text is hidden below 1100px, and below 720px the title shortens to "OSDU" and the version number is hidden.
- The "Show Legend" button moved to the bottom-left, just above the mini-map, and its list opens upward. It was previously top-right, then top-left where the breadcrumb could cover it.

## [1.6.0] - 2026-11-05

### Added
- Properties that point at reference data (e.g. `data.TypeRigID` -> `RigType`, including array properties) get an "Allowed values" toggle in the side panel. It lists the possible values with their full record IDs (e.g. `namespace:reference-data--RigType:Barge:`), with a filter box for long lists. Values are loaded on demand from the bundled reference data and cached.
- The side panel is resizable: drag its left edge (or use the arrow keys when focused), double-click to reset. The width is remembered in the browser.

### Changed
- Reference value loading moved into a shared, cached helper (`src/utils/referenceValues.ts`) used by both the entity-level and per-property lists.

## [1.5.0] - 2026-11-05

### Added
- Light/dark background toggle at the top right of the header. Light is the default; the choice is remembered in the browser. Graph controls, mini-map, side panel, dropdown, legend and breadcrumb are themed; entity cards keep their light colours in both themes.
- Nested properties in the side panel are shown as a tree: object properties (e.g. `data.HistoricalInterests`) are collapsible groups that show how many attributes they contain, with Expand all / Collapse all.
- Attributes marked `DEPRECATED` are highlighted in red with a badge.
- "← Back" button in the breadcrumb.
- Unit tests grew from 4 to 56 (schema matching, edge validation, layout, local-folder parsing, property tree, theme, tooltip behaviour).

### Changed
- "Top-level properties" is collapsible and collapsed by default (open when a schema has no nested properties).
- Type labels (`string`, `array`, `integer`, ...) use a darker green that is readable on a light background.
- Schema lookups prefer exact matches over substring matches, so e.g. `Well` no longer resolves to `WellLog`; unresolved graph edges are dropped instead of being re-attached to the main entity.
- Local-folder loading is stricter about what counts as a schema, parses files in batches and caches them in a single IndexedDB transaction.
- The graph only re-fits the view when the set of nodes changes, so hovering or selecting no longer resets pan and zoom.
- Internal cleanup: shared colour, matching, edge and tree helpers; one property-row component in the side panel.

### Fixed
- Back / breadcrumb navigation no longer updates state inside a state updater (double-run under React StrictMode).

## [1.4.0] - 2026-10-08

### Added
- Added 23 new schemas from OSDU Data Definitions `v0.30.1` (total schemas now 1,448), including `EquipmentInventory:1.1.0`, `Risk:2.0.0`, `Well:1.5.0`, `SeismicTraceData:1.8.0`, `CoilTubingWrapType`, the `Rig*` master-data types (`RigAnchor`, `RigBoiler`, `RigCementUnit`, `RigCentrifuge`, `RigCoilTubingReel`, `RigCrane`, `RigDegasser`, `RigHydrocyclone`, `RigMotor`, `RigPit`, `RigShaker`, `RigPump:1.1.0`) and the `SeismicPreStack*` / `SeismicPostStack*` work-product-components.
- Added reference-data `CoilTubingWrapType` and `LithoStratigraphy`.

### Changed
- Updated data source link in the navigation bar and README from `v0.30.0` to `v0.30.1`.
- Refreshed `Well:1.4.0`, `SeismicTraceData:1.7.0`, `SchemaStatus`, `SchemaToIndexSchema` and the reference-data manifests (`GeoLabelType`, `HeaderKeyName`, `IngestionSequence`, `ReferenceValueTypeDependencies` and the LOCAL schema-upgrade tables).

## [1.3.0] - 2026-07-22

### Added
- Added GitHub icon and repository link (`https://github.com/chadleong/osdu-viz`) in the header navigation bar.
- Added application footer displaying "Made with ❤️ from Chad".

## [1.2.0] - 2026-07-22

### Added
- Added link in navigation bar pointing to the latest OSDU Data Definitions source (`v0.30.0`).
- Updated schema definitions dataset (expanded total schemas from 1,316 to 1,425).

### Fixed
- Fixed file scanner in `scan-schemas.cjs` to ignore `.min.json` files during recursive directory scanning.

## [1.1.1] - 2026-07-22

### Added
- Added `CHANGELOG.md` to track project releases and changes according to Semantic Versioning.

## [1.1.0] - 2026-07-22

### Added
- Pre-bundled single `schema-bundle.json` generated at build time (~700 KB gzipped) to download all schemas in one request.
- On-demand schema loading mechanism (`ensureSchemaLoaded`) for instant rendering of targeted schemas and `$ref` dependencies.

### Changed
- Optimized app startup in `App.tsx` using lightweight `schema-index.json` metadata, reducing initial page load time from ~30s to <50ms.

### Fixed
- Fixed TypeScript compiler errors with `@testing-library/jest-dom` type declarations in `tsconfig.json`.
- Regenerated and minified schema dataset for `SeismicHistogram.1.0.0`.

## [1.0.0] - 2025-09-08

### Added
- Initial release of OSDU Schema Visualizer.
- Interactive ERD and relationship graph visualization with React Flow & Dagre layout.
- Schema index scanner and IndexedDB offline caching.
- Automated GitHub Pages deployment pipeline.
