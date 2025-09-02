# OSDU Schema Viz

A React + Vite app (React Flow) to explore and visualize OSDU JSON Schemas and their relationships.

Quick features

- Dropdown search to find and select any schema found under `public/data/**/*.(min.)json`. The current schema source is from the published `v0.28.7` [here](https://community.opengroup.org/osdu/data/data-definitions/-/tree/v0.28.7/Generated?ref_type=tags) and reference values [here](https://community.opengroup.org/osdu/data/data-definitions/-/tree/v0.28.7/ReferenceValues/Manifests?ref_type=tags).
- Fast text search / filter by schema title, $id or version.
- Clickable graph nodes with styled relationship edges and tooltip details.
- Tooltip shows properties, relationships and (for reference-data types) loads reference values from disk.

## Requirements

- Node.js 18 or later
- npm (or yarn) — project uses npm scripts
- Modern browser for the UI (Chrome, Edge, Firefox) with IndexedDB support
- Recommended: 4+ GB free disk and 2+ GB RAM for a smooth dev experience when working with all schemas

## Installation & Quick Start

1. Clone the repo and change into the project directory:

```pwsh
git clone <repo> && cd osdu-viz
```

1. Install dependencies:

```pwsh
npm install
```

1. Run the dev server (Vite):

```pwsh
npm run dev
```

1. Open the app in your browser (usually `http://localhost:5173`)

Build for production:

```pwsh
npm run build
npm run preview
```

Run tests:

```pwsh
npm test
```

## Notes for deployment

- The app prefers minified JSON assets in `public/data` (`*.min.json`). The build script scans `public/data/Generated` and writes `public/schema-index.json` which the app consumes at runtime.
- If you host the app under a subpath, set Vite's `base` (for example `base: '/osdu-viz/'` in `vite.config.ts`). The app uses the Vite `BASE_URL` internally so asset fetches resolve correctly.
- Serve `dist/` (the `npm run build` output) from a static host or CDN. Configure long-lived caching for versioned `.min.json` files and appropriate cache-control for `schema-index.json`.

## IndexedDB cache

- DB name: `osdu-viz-cache`
- Object store: `schemas` (keyPath: `path`)
- Behavior: cached schemas are only used as a fallback when network fetches return zero schemas (offline resume). This avoids merging large cached sets into fresh loads.

## Troubleshooting

- If reference values are not visible in tooltips, check the Network tab for attempted candidate paths like `/data/reference-data/OPEN/RigType.1.min.json`.
- To inspect the IndexedDB cache in Chrome: DevTools → Application → IndexedDB → `osdu-viz-cache` → `schemas`.

If you want me to add deployment scripts (CloudFront/Cloudflare), CI/CD steps, or a build-time merged reference index, tell me which provider and I’ll add a recommended setup.

Development

- Requires Node 18+

Run locally

```pwsh
npm install
npm run dev
```

Build

```pwsh
npm run build
npm run preview
```

Tests

```pwsh
npm test
```
