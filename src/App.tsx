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
  const [loadingSchema, setLoadingSchema] = useState(false)
  const [erdView, setErdView] = useState(true) // Default to ERD view

  // Auto-select first schema when models are loaded
  useEffect(() => {
    if (models.length > 0 && !selectedModelId) {
      setSelectedModelId(models[0].id)
    }
  }, [models, selectedModelId])

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

  const { nodes, edges } = useMemo(() => {
    console.log("Building graph for selectedModel:", selectedModel?.title)
    if (!selectedModel) {
      console.log("No selected model")
      return { nodes: [], edges: [] }
    }

    const schema = selectedModel.schema || index[selectedModel.path]
    if (!schema) {
      console.log("No schema found for:", selectedModel.title)
      return { nodes: [], edges: [] }
    }

    console.log("Building graph with schema for:", selectedModel.title)
    const modelWithSchema = { ...selectedModel, schema }
    const result = buildGraph(modelWithSchema, { index, erdView })
    console.log("Graph built:", { nodeCount: result.nodes.length, edgeCount: result.edges.length })
    return result
  }, [selectedModel, index, erdView])

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
    <div className="h-screen bg-gray-50">
      {/* Debug Info */}
      <div className="absolute top-4 left-4 z-50 bg-white p-4 rounded shadow text-xs">
        <div>Models loaded: {models.length}</div>
        <div>Selected: {selectedModel?.title || 'None'}</div>
        <div>Schema exists: {selectedModel && (selectedModel.schema || index[selectedModel.path]) ? 'Yes' : 'No'}</div>
        <div>Nodes: {nodes.length}</div>
        <div>Edges: {edges.length}</div>
        <div>Loading: {loadingSchema ? 'Yes' : 'No'}</div>
      </div>

      {/* Main Content */}
      <div className="h-full relative">
        {selectedModel && (selectedModel.schema || index[selectedModel.path]) ? (
          <SchemaGraph nodes={nodes} edges={edges} />
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading schema content...</p>
              {selectedModel && <p className="text-sm text-gray-500 mt-2">Loading: {selectedModel.title}</p>}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
