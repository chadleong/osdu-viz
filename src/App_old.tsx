import { useEffect, useMemo, useState } from "react"
import SchemaGraph from "./components/SchemaGraph"
import { buildGraph } from "./utils/graphBuilder"
import { SchemaModel } from "./types"

// Load multiple schemas from the public folder
function useSchemas() {
  const [models, setModels] = useState<SchemaModel[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<unknown>(null)
  const [index, setIndex] = useState<Record<string, any>>({})

  useEffect(() => {
    async function loadSchemas() {
      try {
        console.log("Loading comprehensive schema index...")

        // First try to load the pre-generated schema index
        try {
          const indexResponse = await fetch('/schema-index.json')
          if (indexResponse.ok) {
            const schemaIndex = await indexResponse.json()
            console.log(`Found ${schemaIndex.length} schemas in index`)

            const parsed: SchemaModel[] = []
            const idx: Record<string, any> = {}

            // Group schemas by directory to ensure diverse representation
            const byDirectory: Record<string, any[]> = {}
            schemaIndex.forEach((schema: any) => {
              if (!byDirectory[schema.directory]) {
                byDirectory[schema.directory] = []
              }
              byDirectory[schema.directory].push(schema)
            })

            // Take a representative sample from each directory
            const samplesPerDirectory = Math.max(8, Math.floor(150 / Object.keys(byDirectory).length))
            const selectedSchemas: any[] = []

            Object.keys(byDirectory).forEach(dir => {
              const dirSchemas = byDirectory[dir]
              const sample = dirSchemas.slice(0, samplesPerDirectory)
              selectedSchemas.push(...sample)
              console.log(`Selected ${sample.length} schemas from ${dir}/ directory`)
            })

            // Ensure we have some important schemas like Well and Wellbore
            const importantSchemas = [
              'Wellbore.1.0.0.json',
              'Well.1.0.0.json',
              'SeismicLine.1.0.0.json',
              'Activity.1.0.0.json'
            ]

            importantSchemas.forEach(fileName => {
              const found = schemaIndex.find((s: any) => s.fileName === fileName)
              if (found && !selectedSchemas.find(s => s.fileName === fileName)) {
                selectedSchemas.push(found)
                console.log(`Added important schema: ${fileName}`)
              }
            })

            console.log(`Loading ${selectedSchemas.length} diverse schemas...`)

            for (const schemaInfo of selectedSchemas) {
              try {
                const response = await fetch(schemaInfo.publicPath)
                if (response.ok) {
                  const schema = await response.json()

                  // Validate it's a proper JSON Schema
                  const isStandard = schema && typeof schema["$schema"] === "string" && /json-schema\.org/.test(schema["$schema"])
                  if (isStandard) {
                    const model: SchemaModel = {
                      id: schemaInfo.id,
                      title: schemaInfo.title,
                      schema,
                      path: schemaInfo.publicPath,
                      version: schemaInfo.version
                    }
                    parsed.push(model)
                    idx[schemaInfo.publicPath] = schema
                  }
                }
              } catch (e) {
                console.warn(`Failed to load ${schemaInfo.publicPath}:`, e)
              }
            }            parsed.sort((a, b) => a.title.localeCompare(b.title))
            console.log(`Loaded ${parsed.length} schemas from comprehensive index`)

            setModels(parsed)
            setIndex(idx)
            setLoading(false)
            return
          }
        } catch (e) {
          console.warn("Failed to load schema index, falling back to manual discovery")
        }

        // Fallback: Load a curated set of schemas manually
        const curatedSchemas = [
          // Abstract schemas
          "/data/Generated/abstract/AbstractContact.1.0.0.json",
          "/data/Generated/abstract/AbstractDataset.1.0.0.json",
          "/data/Generated/abstract/AbstractFile.1.0.0.json",
          "/data/Generated/abstract/AbstractProject.1.0.0.json",
          "/data/Generated/abstract/AbstractActivityParameter.1.0.0.json",
          "/data/Generated/abstract/AbstractFacility.1.0.0.json",
          "/data/Generated/abstract/AbstractMaster.1.0.0.json",
          "/data/Generated/abstract/AbstractWell.1.0.0.json",

          // Master data - IMPORTANT SCHEMAS
          "/data/Generated/master-data/Well.1.0.0.json",
          "/data/Generated/master-data/Wellbore.1.0.0.json",
          "/data/Generated/master-data/ActivityPlan.1.0.0.json",
          "/data/Generated/master-data/Field.1.0.0.json",
          "/data/Generated/master-data/Platform.1.0.0.json",

          // Work products
          "/data/Generated/work-product-component/SeismicLine.1.0.0.json",
          "/data/Generated/work-product-component/Activity.1.0.0.json",
          "/data/Generated/work-product-component/WellLog.1.0.0.json",
          "/data/Generated/work-product-component/GeologicalUnit.1.0.0.json",

          // Datasets
          "/data/Generated/dataset/File.CompressedVectorHeaders.1.0.0.json",
          "/data/Generated/dataset/File.SeismicVolumeHeaders.1.0.0.json",

          // Manifests
          "/data/Generated/manifest/GenericDataset.1.0.0.json",
          "/data/Generated/manifest/GenericWorkProduct.1.0.0.json",
          "/data/Generated/manifest/GenericMasterData.1.0.0.json",

          // Reference data (sample)
          "/data/Generated/reference-data/ActivityCode.1.0.0.json",
          "/data/Generated/reference-data/WellType.1.0.0.json",
          "/data/Generated/reference-data/FieldType.1.0.0.json"
        ]

        const parsed: SchemaModel[] = []
        const idx: Record<string, any> = {}

        for (const path of curatedSchemas) {
          try {
            const response = await fetch(path)
            if (response.ok) {
              const schema = await response.json()

              // Only include standard JSON Schema files
              const isStandard = schema && typeof schema["$schema"] === "string" && /json-schema\.org/.test(schema["$schema"])
              if (isStandard) {
                const id = schema["$id"] || path
                const title = schema["title"] || id
                const idMatch = typeof id === "string" ? id.match(/:(\d+\.\d+\.\d+)\.json$/) : null
                const src = schema["x-osdu-schema-source"]
                const srcMatch = typeof src === "string" ? src.match(/:(\d+\.\d+\.\d+)$/) : null
                const version = (idMatch && idMatch[1]) || (srcMatch && srcMatch[1]) || undefined

                const model: SchemaModel = { id, title, schema, path, version }
                parsed.push(model)
                idx[path] = schema
              }
            }
          } catch (e) {
            console.warn(`Failed to load ${path}:`, e)
          }
        }

        parsed.sort((a, b) => a.title.localeCompare(b.title))
        console.log(`Loaded ${parsed.length} curated schemas`)

        setModels(parsed)
        setIndex(idx)
        setLoading(false)

      } catch (e) {
        console.error("Schema loading error:", e)
        setError(e)
        setLoading(false)
      }
    }

    loadSchemas()
  }, [])

  return { models, loading, error, index }
}

export default function App() {
  const { models, loading, error, index } = useSchemas()
  const [selectedModelId, setSelectedModelId] = useState<string>("")
  const [query, setQuery] = useState("")
  const [modelQuery, setModelQuery] = useState("")
  const [comboOpen, setComboOpen] = useState(false)
  const [highlight, setHighlight] = useState(0)

  const selectedModel: SchemaModel | undefined = useMemo(() => {
    if (!models.length) return undefined
    const initial = selectedModelId || models[0]?.id
    return models.find((m) => m.id === initial)
  }, [models, selectedModelId])

  // Ensure dropdown reflects the selected model once models load
  useEffect(() => {
    if (!selectedModelId && models.length) {
      setSelectedModelId(models[0].id)
      const firstLabel = `${models[0].title || models[0].id}${models[0].version ? ` (v${models[0].version})` : ""}`
      setModelQuery(firstLabel)
    }
  }, [models, selectedModelId])

  const { nodes, edges } = useMemo(() => {
    if (!selectedModel) return { nodes: [], edges: [] }
    return buildGraph(selectedModel, { filter: query, index })
  }, [selectedModel, query, index])

  const optionLabel = (m: SchemaModel) => `${m.title || m.id}${m.version ? ` (v${m.version})` : ""}`
  const filteredModels = useMemo(() => {
    const q = modelQuery.trim().toLowerCase()
    if (!q) return models
    return models.filter(
      (m) =>
        (m.title || "").toLowerCase().includes(q) ||
        (m.id || "").toLowerCase().includes(q) ||
        (m.version || "").toLowerCase().includes(q)
    )
  }, [models, modelQuery])

  const commitSelection = (m: SchemaModel | undefined) => {
    if (!m) return
    setSelectedModelId(m.id)
    setModelQuery(optionLabel(m))
    setComboOpen(false)
  }

  // Early returns AFTER all hooks
  if (loading)
    return (
      <div className="app" style={{ padding: "20px" }}>
        Loading schemas…
      </div>
    )
  if (error)
    return (
      <div className="app" style={{ padding: "20px" }}>
        Error: {String(error)}
      </div>
    )
  if (!models.length)
    return (
      <div className="app" style={{ padding: "20px" }}>
        No schemas found. Check console for details.
      </div>
    )

  return (
    <div className="app">
      <header className="toolbar">
        <div className="brand">OSDU Schema Visualizer</div>
        <div className="combo" role="combobox" aria-expanded={comboOpen} aria-haspopup="listbox">
          <input
            className="combo-input"
            placeholder="Select schema…"
            value={modelQuery}
            onChange={(e) => {
              setModelQuery(e.target.value)
              setComboOpen(true)
              setHighlight(0)
            }}
            onFocus={() => setComboOpen(true)}
            onKeyDown={(e) => {
              if (!comboOpen && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
                setComboOpen(true)
                return
              }
              if (e.key === "ArrowDown") {
                e.preventDefault()
                setHighlight((h) => Math.min(h + 1, Math.max(0, filteredModels.length - 1)))
              } else if (e.key === "ArrowUp") {
                e.preventDefault()
                setHighlight((h) => Math.max(h - 1, 0))
              } else if (e.key === "Enter") {
                e.preventDefault()
                commitSelection(filteredModels[highlight])
              } else if (e.key === "Escape") {
                setComboOpen(false)
              }
            }}
            aria-controls="schema-listbox"
            aria-autocomplete="list"
          />
          {comboOpen && (
            <ul id="schema-listbox" className="combo-list" role="listbox">
              {filteredModels.map((m, idx) => (
                <li
                  key={m.id}
                  role="option"
                  aria-selected={selectedModel?.id === m.id}
                  className={`combo-item ${idx === highlight ? "active" : ""}`}
                  onMouseEnter={() => setHighlight(idx)}
                  onMouseDown={(e) => {
                    e.preventDefault()
                    commitSelection(m)
                  }}
                >
                  {optionLabel(m)}
                </li>
              ))}
              {!filteredModels.length && <li className="combo-empty">No matches</li>}
            </ul>
          )}
        </div>
        <input
          className="input"
          placeholder="Search properties or refs…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </header>
      <main className="canvas">
        <SchemaGraph nodes={nodes} edges={edges} />
      </main>
    </div>
  )
}
