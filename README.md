# OSDU Schema Visualizer

A React + Vite app using React Flow to visualize OSDU JSON Schemas and relationships.

Features

- Dropdown to select any schema found under `data/**/.json`
- Search/filter by property name and description
- Clickable nodes highlight relationships
- Tooltip panel shows properties and relationships for the selected node

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

Notes

- Schemas are loaded with Vite `import.meta.glob` from `/data/**/*.json` at build time. Ensure the `data` folder is at the project root.
- Relationship visualization includes `$ref` edges to referenced schemas and nodes for logical relationship kinds (`x-osdu-relationship`).
- Layout uses dagre.
