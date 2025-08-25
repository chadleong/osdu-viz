import { useEffect, useMemo, useState } from "react"
import SchemaGraph from "./components/SchemaGraph"
import { buildGraph } from "./utils/graphBuilder"
import { SchemaModel } from "./types"

// Load ALL schemas for comprehensive search (content loaded on demand)
function useSchemas() {
  const [models, setModels] = useState<SchemaModel[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<unknown>(null)
  const [index, setIndex] = useState<Record<string, any>>({})

  useEffect(() => {
    async function loadSchemaIndex() {
      try {
        console.log("Loading ALL schemas for comprehensive search...")

        // Load the complete schema index (metadata only)
        try {
          const indexResponse = await fetch("/schema-index.json")
          if (indexResponse.ok) {
            const schemaIndex = await indexResponse.json()
            console.log(`Found ${schemaIndex.length} schemas in index`)

            // Create lightweight schema models from ALL schemas in the index
            const allSchemas: SchemaModel[] = schemaIndex.map((schemaInfo: any) => ({
              id: schemaInfo.id,
              title: schemaInfo.title,
              schema: null, // Will be loaded on demand when selected
              path: schemaInfo.publicPath,
              version: schemaInfo.version,
            }))

            // Sort alphabetically by title for better UX
            allSchemas.sort((a, b) => a.title.localeCompare(b.title))

            console.log(`Made ALL ${allSchemas.length} schemas available for search!`)

            setModels(allSchemas)
            setIndex({}) // Start with empty index, populate on demand
            setLoading(false)
            return
          }
        } catch (e) {
          console.warn("Failed to load schema index, falling back to curated list")
        }

        // Fallback: Load a curated set of schemas manually (with content)
        const curatedSchemas = [
          "/data/Generated/abstract/AbstractContact.1.0.0.json",
          "/data/Generated/abstract/AbstractDataset.1.0.0.json",
          "/data/Generated/abstract/AbstractFile.1.0.0.json",
          "/data/Generated/master-data/Well.1.0.0.json",
          "/data/Generated/master-data/Wellbore.1.0.0.json",
          "/data/Generated/work-product-component/SeismicLine.1.0.0.json",
          "/data/Generated/work-product-component/Activity.1.0.0.json",
        ]

        const parsed: SchemaModel[] = []
        const idx: Record<string, any> = {}

        for (const path of curatedSchemas) {
          try {
            const response = await fetch(path)
            if (response.ok) {
              const schema = await response.json()

              const isStandard =
                schema && typeof schema["$schema"] === "string" && /json-schema\.org/.test(schema["$schema"])
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
        setModels(parsed)
        setIndex(idx)
        setLoading(false)
      } catch (e) {
        console.error("Schema loading error:", e)
        setError(e)
        setLoading(false)
      }
    }

    loadSchemaIndex()
  }, [])

  // Function to load schema content on demand
  const loadSchemaContent = async (model: SchemaModel): Promise<any> => {
    if (model.schema) {
      return model.schema // Already loaded
    }

    if (index[model.path]) {
      return index[model.path] // Already in index
    }

    try {
      console.log(`Loading schema content for: ${model.title}`)
      const response = await fetch(model.path)
      if (response.ok) {
        const schema = await response.json()

        const isStandard = schema && typeof schema["$schema"] === "string" && /json-schema\.org/.test(schema["$schema"])
        if (isStandard) {
          // Update the index and model
          setIndex((prev) => ({ ...prev, [model.path]: schema }))
          setModels((prev) => prev.map((m) => (m.id === model.id ? { ...m, schema } : m)))
          return schema
        }
      }
    } catch (e) {
      console.error(`Failed to load schema content for ${model.title}:`, e)
    }

    return null
  }

  return { models, loading, error, index, loadSchemaContent }
}

export default function App() {
  const { models, loading, error, index, loadSchemaContent } = useSchemas()
  const [selectedModelId, setSelectedModelId] = useState<string>("")
  const [query, setQuery] = useState("")
  const [modelQuery, setModelQuery] = useState("")
  const [comboOpen, setComboOpen] = useState(false)
  const [highlight, setHighlight] = useState(0)
  const [loadingSchema, setLoadingSchema] = useState(false)

  const selectedModel: SchemaModel | undefined = useMemo(() => {
    if (!models.length) return undefined
    const initial = selectedModelId || models[0]?.id
    return models.find((m) => m.id === initial)
  }, [models, selectedModelId])

  // Load schema content when a model is selected
  useEffect(() => {
    if (selectedModel && !selectedModel.schema && !index[selectedModel.path]) {
      setLoadingSchema(true)
      loadSchemaContent(selectedModel).finally(() => {
        setLoadingSchema(false)
      })
    }
  }, [selectedModel, index, loadSchemaContent])

  const filteredModels = useMemo(() => {
    if (!modelQuery.trim()) return models

    const query = modelQuery.toLowerCase()
    return models.filter(
      (model) =>
        model.title.toLowerCase().includes(query) ||
        model.id.toLowerCase().includes(query) ||
        (model.version && model.version.includes(query))
    )
  }, [models, modelQuery])

  const { nodes, edges } = useMemo(() => {
    if (!selectedModel) return { nodes: [], edges: [] }

    const schema = selectedModel.schema || index[selectedModel.path]
    if (!schema) return { nodes: [], edges: [] }

    const modelWithSchema = { ...selectedModel, schema }
    return buildGraph(modelWithSchema, { index })
  }, [selectedModel, index])

  const handleModelSelect = async (modelId: string) => {
    setSelectedModelId(modelId)
    setComboOpen(false)
    setModelQuery("")

    const model = models.find((m) => m.id === modelId)
    if (model && !model.schema && !index[model.path]) {
      setLoadingSchema(true)
      await loadSchemaContent(model)
      setLoadingSchema(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!comboOpen) return

    if (e.key === "ArrowDown") {
      e.preventDefault()
      setHighlight((prev) => Math.min(prev + 1, filteredModels.length - 1))
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setHighlight((prev) => Math.max(prev - 1, 0))
    } else if (e.key === "Enter" && filteredModels[highlight]) {
      e.preventDefault()
      handleModelSelect(filteredModels[highlight].id)
    } else if (e.key === "Escape") {
      e.preventDefault()
      setComboOpen(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading OSDU schemas...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center text-red-600">
          <p className="text-xl font-semibold mb-2">Error loading schemas</p>
          <p>{String(error)}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b p-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">OSDU Schema Visualizer</h1>

          {/* Model Selection Dropdown */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Data Model ({models.length} total schemas available)
            </label>
            <div className="relative">
              <input
                type="text"
                value={comboOpen ? modelQuery : selectedModel?.title || ""}
                onChange={(e) => {
                  setModelQuery(e.target.value)
                  setHighlight(0)
                  if (!comboOpen) setComboOpen(true)
                }}
                onFocus={() => {
                  setComboOpen(true)
                  setModelQuery("")
                }}
                onKeyDown={handleKeyDown}
                placeholder="Search all schemas..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                onClick={() => setComboOpen(!comboOpen)}
                className="absolute right-2 top-2 text-gray-400 hover:text-gray-600"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown List */}
              {comboOpen && (
                <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                  {filteredModels.length === 0 ? (
                    <div className="px-3 py-2 text-gray-500">No schemas found</div>
                  ) : (
                    filteredModels.map((model, index) => (
                      <button
                        key={model.id}
                        onClick={() => handleModelSelect(model.id)}
                        className={`w-full text-left px-3 py-2 hover:bg-blue-50 ${
                          index === highlight ? "bg-blue-100" : ""
                        } ${selectedModel?.id === model.id ? "bg-blue-50 font-medium" : ""}`}
                      >
                        <div className="font-medium">{model.title}</div>
                        {model.version && <div className="text-xs text-gray-500">v{model.version}</div>}
                      </button>
                    ))
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Schema Info */}
          {selectedModel && (
            <div className="mt-4 p-3 bg-blue-50 rounded-md">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-blue-900">{selectedModel.title}</h3>
                  {selectedModel.version && <p className="text-sm text-blue-700">Version: {selectedModel.version}</p>}
                </div>
                {loadingSchema && (
                  <div className="flex items-center text-blue-600">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
                    <span className="text-sm">Loading schema...</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 relative">
        {selectedModel && (selectedModel.schema || index[selectedModel.path]) ? (
          <SchemaGraph nodes={nodes} edges={edges} />
        ) : selectedModel ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading schema content...</p>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-center text-gray-500">
              <p className="text-xl">Select a schema to visualize</p>
              <p className="mt-2">Choose from {models.length} available OSDU data models</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
