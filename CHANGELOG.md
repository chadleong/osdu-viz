# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
