# OSDU Schema Viz

A React + Vite app (React Flow) to explore and visualize OSDU JSON Schemas and their relationships.

Quick features

- Dropdown search to find and select any schema found under `public/data/**/*.(min.)json`.
- Fast text search / filter by schema title, $id or version.
- Clickable graph nodes with styled relationship edges and tooltip details.
- Tooltip shows properties, relationships and (for reference-data types) loads reference values from disk.

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
