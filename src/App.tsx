import React, { useState, useEffect, useMemo } from "react"
import SchemaGraph from "./components/SchemaGraph"
import { buildGraph } from "./utils/graphBuilder"
import type { SchemaModel } from "./types"
import pkg from "../package.json"

export default function App() {
  const [models, setModels] = useState<SchemaModel[]>([])
  const [index, setIndex] = useState<Record<string, any>>({})
  const [selectedModel, setSelectedModel] = useState<SchemaModel | null>(null)
  const [history, setHistory] = useState<SchemaModel[]>([])
  const [hasAutoSelected, setHasAutoSelected] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [showDropdown, setShowDropdown] = useState(false)

  // Do not auto-select any schema on app start

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
    return buildGraph(selectedModel, { index, erdView: true })
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
    // Manual selection resets history
    setHistory([])
    setSelectedModel(model)
    setSearchTerm(model.title)
    setShowDropdown(false)
  }

  const handleSchemaSelect = (schemaId: string) => {
    // Accept id, partial id, title, or file path
    const key = schemaId || ""
    const keyLower = key.toLowerCase()
    const lastSeg = key.split("/").pop() || key
    const targetSchema = models.find((model) => {
      const idLower = model.id.toLowerCase()
      const titleLower = model.title.toLowerCase()
      const pathLower = (model.path || "").toLowerCase()
      return (
        model.id === key ||
        idLower.includes(keyLower) ||
        titleLower.includes(keyLower) ||
        pathLower === keyLower ||
        pathLower.endsWith((lastSeg || "").toLowerCase())
      )
    })

    if (targetSchema) {
      // Only push to history if navigating to a different schema
      const isDifferent =
        !selectedModel || selectedModel.id !== targetSchema.id || selectedModel.path !== targetSchema.path

      if (isDifferent && selectedModel) {
        setHistory((h) => [...h, selectedModel])
      }

      if (isDifferent) {
        setSelectedModel(targetSchema)
        setSearchTerm(targetSchema.title)
        setShowDropdown(false)
      }
    }
  }

  const handleBack = () => {
    setHistory((h) => {
      if (h.length === 0) return h
      const prev = h[h.length - 1]
      // apply previous selection and shrink history
      setSelectedModel(prev)
      setSearchTerm(prev.title)
      return h.slice(0, -1)
    })
  }

  return (
    <div className="h-screen bg-gray-50">
      {/* Header with Search and Dropdown */}
      <div
        className="bg-white border-b border-gray-200 px-100 py-3"
        style={{ position: "sticky", top: 0, zIndex: 1000, backdropFilter: "saturate(180%) blur(4px)" }}
      >
        <div
          className="flex items-center space-x-4"
          style={{ paddingLeft: 32, paddingRight: 32, paddingTop: 12, paddingBottom: 12 }}
        >
          <div>
            <div>
              <h1 className="text-lg font-semibold text-gray-900">OSDU Schema Visualizer</h1>
              <div className="text-xs text-gray-500" style={{ marginTop: 2 }}>
                v{(pkg as any).version}
              </div>
            </div>
          </div>

          {/* Schema Selector with Search */}
          <div className="flex-1 max-w-md relative dropdown-container">
            <div style={{ position: "relative" }}>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value)
                  setShowDropdown(true)
                }}
                onFocus={() => setShowDropdown(true)}
                placeholder="Search schemas..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-8"
              />
              {/* Carat icon */}
              <span
                style={{
                  position: "absolute",
                  right: 12,
                  top: "50%",
                  transform: "translateY(-50%)",
                  pointerEvents: "none",
                  fontSize: 16,
                  color: "#64748b",
                }}
              >
                ▼
              </span>
              {/* Selected version badge inside the input */}
              {selectedModel?.version && (
                <span
                  style={{
                    position: "absolute",
                    right: 44,
                    top: "50%",
                    transform: "translateY(-50%)",
                    pointerEvents: "none",
                    fontSize: 12,
                    color: "#475569",
                    background: "#f1f5f9",
                    padding: "2px 6px",
                    borderRadius: 6,
                    border: "1px solid #e2e8f0",
                  }}
                >
                  v{selectedModel.version}
                </span>
              )}
            </div>

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
                setHistory([])
              }}
              className="px-3 py-2 text-sm text-gray-600 hover:text-gray-800 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Clear
            </button>
          )}

          {/* Status Info */}
          <div className="text-sm text-gray-600">
            {models.length} schemas loaded | Selected: {selectedModel?.title || "None"}
            {selectedModel?.version && (
              <span className="text-xs text-gray-500" style={{ marginLeft: 8 }}>
                v{selectedModel.version}
              </span>
            )}
          </div>
        </div>
      </div>{" "}
      {/* Main Content */}
      <div className="h-full" style={{ height: "calc(100vh - 73px)" }}>
        {selectedModel && selectedModel.schema ? (
          <div style={{ position: "relative", height: "100%" }}>
            <SchemaGraph nodes={nodes} edges={edges} onSchemaSelect={handleSchemaSelect} />
            {/* Overlay layer to host interactive controls above ReactFlow */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 10000,
                pointerEvents: "none",
              }}
            >
              {history.length > 0 && (
                <button
                  onClick={handleBack}
                  className="absolute top-3 left-3 px-3 py-2 bg-white border border-gray-300 rounded shadow text-sm font-medium text-gray-700 hover:bg-gray-50"
                  title="Back"
                  style={{ pointerEvents: "auto" }}
                >
                  ← Back
                </button>
              )}
            </div>
          </div>
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
