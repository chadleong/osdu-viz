import React, { useState, useEffect, useMemo } from "react"
import SchemaGraph from "./components/SchemaGraph"
import { buildGraph } from "./utils/graphBuilder"
import type { SchemaModel } from "./types"

export default function App() {
  const [models, setModels] = useState<SchemaModel[]>([])
  const [index, setIndex] = useState<Record<string, any>>({})
  const [selectedModel, setSelectedModel] = useState<SchemaModel | null>(null)
  const [hasAutoSelected, setHasAutoSelected] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [showDropdown, setShowDropdown] = useState(false)

  // Auto-select first model when models load (only once)
  useEffect(() => {
    if (models.length > 0 && !selectedModel && !hasAutoSelected) {
      setSelectedModel(models[0])
      setSearchTerm(models[0].title)
      setHasAutoSelected(true)
    }
  }, [models, selectedModel, hasAutoSelected])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest(".dropdown-container")) {
        setShowDropdown(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Load schemas
  useEffect(() => {
    loadSchemas()
  }, [])

  async function loadSchemas() {
    try {
      const response = await fetch("/schema-index.json")
      const schemaIndex = await response.json()

      const parsed: SchemaModel[] = []
      const idx: Record<string, any> = {}

      // schemaIndex is an array of objects with metadata, we need the publicPath
      for (const schemaInfo of schemaIndex) {
        // Load ALL schemas
        try {
          const path = schemaInfo.publicPath
          const schemaResponse = await fetch(path)
          const schema = await schemaResponse.json()

          if (schema && typeof schema === "object" && schema["$schema"]) {
            const isStandard = schema["$schema"].includes("json-schema.org")
            if (isStandard) {
              const id = schema["$id"] || path
              const title = schema["title"] || schemaInfo.title || id
              const model: SchemaModel = {
                id,
                title,
                schema,
                path,
                version: schemaInfo.version,
              }
              parsed.push(model)
              idx[path] = schema
            }
          }
        } catch (e) {
          console.warn(`Failed to load ${schemaInfo.publicPath}:`, e)
        }
      }

      setModels(parsed)
      setIndex(idx)
    } catch (error) {
      console.error("Failed to load schema index:", error)
    }
  }

  const { nodes, edges } = useMemo(() => {
    if (!selectedModel || !selectedModel.schema) {
      return { nodes: [], edges: [] }
    }
    return buildGraph(selectedModel, { index })
  }, [selectedModel, index])

  // Filter models based on search term
  const filteredModels = useMemo(() => {
    if (!searchTerm) return models
    return models.filter(
      (model) =>
        model.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        model.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (model.version && model.version.includes(searchTerm))
    )
  }, [models, searchTerm])

  const handleModelSelect = (model: SchemaModel) => {
    setSelectedModel(model)
    setSearchTerm(model.title)
    setShowDropdown(false)
  }

  return (
    <div className="h-screen bg-gray-50">
      {/* Header with Search and Dropdown */}
      <div className="bg-white border-b border-gray-200 px-4 py-3" style={{ position: "relative", zIndex: 1000 }}>
        <div className="flex items-center space-x-4">
          <h1 className="text-lg font-semibold text-gray-900">OSDU Schema Visualizer</h1>

          {/* Schema Selector with Search */}
          <div className="flex-1 max-w-md relative dropdown-container">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value)
                setShowDropdown(true)
              }}
              onFocus={() => setShowDropdown(true)}
              placeholder="Search schemas..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />

            {/* Dropdown Results */}
            {showDropdown && (
              <div
                className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-50"
                style={{
                  maxHeight: "min(400px, calc(100vh - 200px))",
                  overflowY: "auto",
                  scrollbarWidth: "thin",
                  scrollbarColor: "#cbd5e0 #f7fafc",
                }}
              >
                {filteredModels.length > 0 ? (
                  <>
                    {/* Results count header */}
                    <div className="px-3 py-2 bg-gray-50 border-b border-gray-200 text-xs text-gray-600 font-medium sticky top-0">
                      {filteredModels.length} schema{filteredModels.length !== 1 ? "s" : ""} found
                    </div>

                    {/* Scrollable results */}
                    <div className="max-h-80 overflow-y-auto">
                      {filteredModels.map((model, index) => (
                        <div
                          key={model.path}
                          onClick={() => handleModelSelect(model)}
                          className="px-3 py-2 hover:bg-blue-50 cursor-pointer border-b border-gray-100 last:border-b-0 transition-colors duration-150"
                          style={{
                            borderLeft:
                              selectedModel?.path === model.path ? "3px solid #3b82f6" : "3px solid transparent",
                          }}
                        >
                          <div className="font-medium text-sm text-gray-900">{model.title}</div>
                          {model.version && <div className="text-xs text-gray-500">Version {model.version}</div>}
                          <div className="text-xs text-gray-400 truncate">{model.id}</div>
                        </div>
                      ))}
                    </div>

                    {/* Scroll indicator for many results */}
                    {filteredModels.length > 10 && (
                      <div className="px-3 py-1 bg-gray-50 border-t border-gray-200 text-xs text-gray-500 text-center sticky bottom-0">
                        Scroll to see more results
                      </div>
                    )}
                  </>
                ) : (
                  <div className="px-3 py-4 text-gray-500 text-sm text-center">
                    <div className="mb-1">No schemas found</div>
                    <div className="text-xs">Try a different search term</div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Clear button */}
          {selectedModel && (
            <button
              onClick={() => {
                setSelectedModel(null)
                setSearchTerm("")
                setShowDropdown(false)
              }}
              className="px-3 py-2 text-sm text-gray-600 hover:text-gray-800 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Clear
            </button>
          )}

          {/* Status Info */}
          <div className="text-sm text-gray-600">
            {models.length} schemas loaded | Selected: {selectedModel?.title || "None"}
          </div>
        </div>
      </div>{" "}
      {/* Main Content */}
      <div className="h-full" style={{ height: "calc(100vh - 73px)" }}>
        {selectedModel && selectedModel.schema ? (
          <SchemaGraph nodes={nodes} edges={edges} />
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              {models.length === 0 ? (
                <>
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
                  <p className="text-gray-600">Loading schemas...</p>
                </>
              ) : (
                <p className="text-gray-600">Please select a schema from the dropdown above</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
