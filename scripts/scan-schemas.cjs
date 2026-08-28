const fs = require("fs")
const path = require("path")

// Function to scan for JSON Schema files recursively
function scanSchemasRecursively(dir, basePath = "", results = []) {
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true })

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name)
      const relativePath = path.join(basePath, entry.name).replace(/\\/g, "/")

      if (entry.isDirectory()) {
        // Recursively scan subdirectories
        scanSchemasRecursively(fullPath, relativePath, results)
      } else if (entry.isFile() && entry.name.endsWith(".json")) {
        // Skip status files and minified files (minified files are handled via publicPath replacement)
        if (entry.name === "SchemaStatus.json" || entry.name === "SchemaToIndexSchema.json" || entry.name.endsWith(".min.json")) {
          continue
        }

        try {
          // Try to read and parse the JSON file
          const content = fs.readFileSync(fullPath, "utf8")
          const schema = JSON.parse(content)

          // Check if it's a valid JSON Schema
          if (schema && typeof schema["$schema"] === "string" && /json-schema\.org/.test(schema["$schema"])) {
            // prefer a .min.json filename in the publicPath when available
            const publicPathBase = `/data/Generated/${relativePath}`
            const minPath = publicPathBase.replace(/\.json$/i, ".min.json")
            const publicPathToUse = fs.existsSync(path.join(dir, entry.name.replace(/\.json$/i, ".min.json")))
              ? minPath
              : publicPathBase

            results.push({
              fileName: entry.name,
              relativePath: relativePath,
              fullPath: fullPath,
              publicPath: publicPathToUse,
              title: schema.title || "Untitled",
              id: schema["$id"] || relativePath,
              version: extractVersion(schema),
              directory: basePath || "root",
              rawSchema: schema,
            })
          }
        } catch (e) {
          console.warn(`Failed to parse ${relativePath}:`, e.message)
        }
      }
    }
  } catch (e) {
    console.error(`Failed to scan directory ${dir}:`, e.message)
  }

  return results
}

// Function to extract version from schema
function extractVersion(schema) {
  const id = schema["$id"]
  const src = schema["x-osdu-schema-source"]

  if (typeof id === "string") {
    const idMatch = id.match(/:(\d+\.\d+\.\d+)\.json$/)
    if (idMatch) return idMatch[1]
  }

  if (typeof src === "string") {
    const srcMatch = src.match(/:(\d+\.\d+\.\d+)$/)
    if (srcMatch) return srcMatch[1]
  }

  return undefined
}

// Main execution
const dataDir = path.join(__dirname, "..", "public", "data", "Generated")

console.log(`Scanning schemas in: ${dataDir}`)
console.log(`Checking if directory exists: ${fs.existsSync(dataDir)}`)

if (!fs.existsSync(dataDir)) {
  console.error("Data directory does not exist!")
  process.exit(1)
}

const schemas = scanSchemasRecursively(dataDir)

console.log(`\nFound ${schemas.length} valid JSON Schema files:`)

// Group by directory
const byDirectory = {}
schemas.forEach((schema) => {
  const dir = schema.directory || "root"
  if (!byDirectory[dir]) byDirectory[dir] = []
  byDirectory[dir].push(schema)
})

// Print summary by directory
Object.keys(byDirectory)
  .sort()
  .forEach((dir) => {
    console.log(`\n${dir}/ (${byDirectory[dir].length} schemas):`)
    byDirectory[dir].slice(0, 5).forEach((schema) => {
      console.log(`  - ${schema.fileName} (${schema.title})`)
    })
    if (byDirectory[dir].length > 5) {
      console.log(`  ... and ${byDirectory[dir].length - 5} more`)
    }
  })

// Generate a comprehensive list for the React app
const schemaList = schemas.map((s) => s.publicPath)

console.log(`\n\nGenerated schema list for React app (${schemaList.length} files):`)
console.log("const allSchemaPaths = [")
schemaList.slice(0, 20).forEach((path) => {
  console.log(`  "${path}",`)
})
if (schemaList.length > 20) {
  console.log(`  // ... and ${schemaList.length - 20} more paths`)
}
console.log("];")

// Write to JSON files that the React app can use
const bundleMap = {}
schemas.forEach((s) => {
  if (s.rawSchema) {
    bundleMap[s.publicPath] = s.rawSchema
    delete s.rawSchema
  }
})

const outputFile = path.join(__dirname, "..", "public", "schema-index.json")
fs.writeFileSync(outputFile, JSON.stringify(schemas))
console.log(`\nSchema index written to: ${outputFile} (${(fs.statSync(outputFile).size / 1024).toFixed(1)} KB)`)

const bundleFile = path.join(__dirname, "..", "public", "schema-bundle.json")
fs.writeFileSync(bundleFile, JSON.stringify(bundleMap))
console.log(`Schema bundle written to: ${bundleFile} (${(fs.statSync(bundleFile).size / 1024 / 1024).toFixed(2)} MB)`)

// Generate SEO Assets: robots.txt, sitemap.xml, site.webmanifest, and og-image.svg
const publicDir = path.join(__dirname, "..", "public")
const siteUrl = "https://osdu-viz.netlify.app"
const today = new Date().toISOString().split("T")[0]

// 1. robots.txt
const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`
fs.writeFileSync(path.join(publicDir, "robots.txt"), robotsTxt, "utf8")
console.log("SEO: robots.txt written")

// 2. site.webmanifest
const webmanifest = {
  name: "OSDU Schema Visualizer",
  short_name: "OSDU Schemas",
  description: "Interactive OSDU Schema & Data Model Visualizer",
  start_url: "/",
  display: "standalone",
  background_color: "#f9fafb",
  theme_color: "#4f46e5",
  icons: [
    {
      src: "/favicon.ico",
      sizes: "64x64 32x32 24x24 16x16",
      type: "image/x-icon"
    }
  ]
}
fs.writeFileSync(path.join(publicDir, "site.webmanifest"), JSON.stringify(webmanifest, null, 2), "utf8")
console.log("SEO: site.webmanifest written")

// 3. sitemap.xml
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`
fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemapXml, "utf8")
console.log("SEO: sitemap.xml written (clean URL structure)")

// 4. og-image.svg
const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="50%" stop-color="#1e1b4b"/>
      <stop offset="100%" stop-color="#311042"/>
    </linearGradient>
    <linearGradient id="primary-grad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="50%" stop-color="#818cf8"/>
      <stop offset="100%" stop-color="#c084fc"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>

  <g opacity="0.12" stroke="#ffffff" stroke-width="1">
    <line x1="0" y1="70" x2="1200" y2="70"/>
    <line x1="0" y1="140" x2="1200" y2="140"/>
    <line x1="0" y1="210" x2="1200" y2="210"/>
    <line x1="0" y1="280" x2="1200" y2="280"/>
    <line x1="0" y1="350" x2="1200" y2="350"/>
    <line x1="0" y1="420" x2="1200" y2="420"/>
    <line x1="0" y1="490" x2="1200" y2="490"/>
    <line x1="0" y1="560" x2="1200" y2="560"/>
    <line x1="120" y1="0" x2="120" y2="630"/>
    <line x1="240" y1="0" x2="240" y2="630"/>
    <line x1="360" y1="0" x2="360" y2="630"/>
    <line x1="480" y1="0" x2="480" y2="630"/>
    <line x1="600" y1="0" x2="600" y2="630"/>
    <line x1="720" y1="0" x2="720" y2="630"/>
    <line x1="840" y1="0" x2="840" y2="630"/>
    <line x1="960" y1="0" x2="960" y2="630"/>
    <line x1="1080" y1="0" x2="1080" y2="630"/>
  </g>

  <g transform="translate(680, 80)">
    <path d="M 120,80 C 220,80 220,180 320,180" fill="none" stroke="#6366f1" stroke-width="3" stroke-dasharray="6,4"/>
    <path d="M 120,80 C 220,80 220,320 280,320" fill="none" stroke="#38bdf8" stroke-width="3"/>
    <path d="M 320,180 C 380,180 380,270 380,360" fill="none" stroke="#a855f7" stroke-width="3"/>

    <g transform="translate(0, 40)">
      <rect width="200" height="90" rx="12" fill="#1e293b" stroke="#818cf8" stroke-width="2.5"/>
      <rect width="200" height="28" rx="12" fill="#4338ca"/>
      <rect y="16" width="200" height="12" fill="#4338ca"/>
      <text x="16" y="20" fill="#ffffff" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="13">master-data:Wellbore</text>
      <text x="16" y="52" fill="#94a3b8" font-family="monospace" font-size="11">WellID: string</text>
      <text x="16" y="72" fill="#94a3b8" font-family="monospace" font-size="11">SpatialLocation: object</text>
    </g>

    <g transform="translate(240, 140)">
      <rect width="210" height="90" rx="12" fill="#1e293b" stroke="#c084fc" stroke-width="2"/>
      <rect width="210" height="28" rx="12" fill="#7e22ce"/>
      <rect y="16" width="210" height="12" fill="#7e22ce"/>
      <text x="16" y="20" fill="#ffffff" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="13">work-product-component:WellLog</text>
      <text x="16" y="52" fill="#94a3b8" font-family="monospace" font-size="11">WellboreID: string</text>
      <text x="16" y="72" fill="#94a3b8" font-family="monospace" font-size="11">Curves: array</text>
    </g>

    <g transform="translate(200, 280)">
      <rect width="220" height="90" rx="12" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
      <rect width="220" height="28" rx="12" fill="#0284c7"/>
      <rect y="16" width="220" height="12" fill="#0284c7"/>
      <text x="16" y="20" fill="#ffffff" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="13">abstract:SpatialLocation</text>
      <text x="16" y="52" fill="#94a3b8" font-family="monospace" font-size="11">Wgs84Coordinates: object</text>
      <text x="16" y="72" fill="#94a3b8" font-family="monospace" font-size="11">SpatialGeometryType: string</text>
    </g>
  </g>

  <g transform="translate(90, 110)">
    <g>
      <rect width="240" height="36" rx="18" fill="#312e81" stroke="#6366f1" stroke-width="1"/>
      <circle cx="18" cy="18" r="6" fill="#38bdf8"/>
      <text x="34" y="23" fill="#e0e7ff" font-family="system-ui, -apple-system, sans-serif" font-weight="600" font-size="13" letter-spacing="0.5">OSDU DATA DEFINITIONS</text>
    </g>

    <text x="0" y="110" fill="url(#primary-grad)" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="54" letter-spacing="-1">
      OSDU Schema
    </text>
    <text x="0" y="170" fill="#ffffff" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="54" letter-spacing="-1">
      Visualizer &amp; Explorer
    </text>

    <text x="0" y="230" fill="#cbd5e1" font-family="system-ui, -apple-system, sans-serif" font-weight="400" font-size="21">
      Interactive JSON Schema &amp; Entity Relationship Explorer
    </text>
    <text x="0" y="262" fill="#94a3b8" font-family="system-ui, -apple-system, sans-serif" font-weight="400" font-size="18">
      Browse 1,400+ Master Data, WPC, Reference Data &amp; Abstract Schemas
    </text>

    <g transform="translate(0, 310)">
      <rect x="0" y="0" width="145" height="34" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1"/>
      <text x="12" y="22" fill="#38bdf8" font-family="system-ui, -apple-system, sans-serif" font-weight="600" font-size="13">⚡ Interactive Graph</text>

      <rect x="157" y="0" width="138" height="34" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1"/>
      <text x="169" y="22" fill="#c084fc" font-family="system-ui, -apple-system, sans-serif" font-weight="600" font-size="13">🔍 Schema Search</text>

      <rect x="307" y="0" width="155" height="34" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1"/>
      <text x="319" y="22" fill="#34d399" font-family="system-ui, -apple-system, sans-serif" font-weight="600" font-size="13">📊 Reference Values</text>
    </g>

    <g transform="translate(0, 390)">
      <text x="0" y="0" fill="#64748b" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="500">
        osdu-viz.netlify.app • Open Subsurface Data Universe
      </text>
    </g>
  </g>
</svg>`
fs.writeFileSync(path.join(publicDir, "og-image.svg"), ogSvg, "utf8")
console.log("SEO: og-image.svg written")

