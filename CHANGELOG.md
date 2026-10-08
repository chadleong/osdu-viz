# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
