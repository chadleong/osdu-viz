import React, { useState, useEffect, useMemo, useRef } from "react"
import { createPortal } from "react-dom"
import SchemaGraph from "./components/SchemaGraph"
import { buildGraph } from "./utils/graphBuilder"
import type { SchemaModel } from "./types"
import pkg from "../package.json"

export default function App() {
  const [models, setModels] = useState<SchemaModel[]>([])
  const [index, setIndex] = useState<Record<string, any>>({})
  const [selectedModel, setSelectedModel] = useState<SchemaModel | null>(null)
  const [history, setHistory] = useState<SchemaModel[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [showDropdown, setShowDropdown] = useState(false)
  const inputRef = useRef<HTMLDivElement | null>(null)
  const portalRef = useRef<HTMLDivElement | null>(null)
  const [portalStyle, setPortalStyle] = useState<{ top: number; left: number; width: number } | null>(null)
  // Loading progress (initial schema load)
  const [loadTotal, setLoadTotal] = useState(0)
  const [loadDone, setLoadDone] = useState(0)

  // Close dropdown when clicking outside — attach a capture-phase pointerdown listener while dropdown is open
  useEffect(() => {
    if (!showDropdown) return

    const handlePointerDown = (event: Event) => {
      const target = event.target as Node
      // If click is inside input container or inside the portal dropdown, ignore
      if (
        (inputRef.current && inputRef.current.contains(target)) ||
        (portalRef.current && portalRef.current.contains(target))
      ) {
        return
      }
      setShowDropdown(false)
    }

    document.addEventListener("pointerdown", handlePointerDown, true)
    return () => document.removeEventListener("pointerdown", handlePointerDown, true)
  }, [showDropdown])

  // Recalculate portal position when opening, and on scroll/resize
  useEffect(() => {
    if (!showDropdown) return
    function recalc() {
      const el = inputRef.current
      if (!el) return
      const r = el.getBoundingClientRect()
      setPortalStyle({ top: r.bottom + window.scrollY, left: r.left + window.scrollX, width: r.width })
    }

    recalc()
    window.addEventListener("resize", recalc)
    window.addEventListener("scroll", recalc, { passive: true })
    return () => {
      window.removeEventListener("resize", recalc)
      window.removeEventListener("scroll", recalc)
    }
  }, [showDropdown])

  // Small internal component to render the dropdown via portal
  function DropdownPortal({ children }: { children: React.ReactNode }) {
    if (!portalStyle) return null
    return createPortal(
      <div
        ref={portalRef}
        className="bg-white border border-gray-300 rounded-md shadow-lg"
        style={{
          position: "absolute",
          top: `${portalStyle.top}px`,
          left: `${portalStyle.left}px`,
          width: portalStyle.width,
          maxHeight: "min(400px, calc(100vh - 200px))",
          overflowY: "auto",
          zIndex: 20000,
          scrollbarWidth: "thin",
          scrollbarColor: "#cbd5e0 #f7fafc",
        }}
      >
        {children}
      </div>,
      document.body
    )
  }

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

      // setup progress counters
      const total = Array.isArray(schemaIndex) ? schemaIndex.length : 0
      setLoadTotal(total)
      setLoadDone(0)

      // schemaIndex is an array of objects with metadata, we need the publicPath
      let completed = 0
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
        // update progress regardless of success/failure for this item
        completed += 1
        setLoadDone(completed)
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

  // Map a schema model to a text color that matches the node rendering in SchemaGraph
  const getColorForModel = (model: SchemaModel | null) => {
    if (!model) return "#374151" // neutral gray
    // try to find a node that corresponds to this model
    const match = nodes.find((n: any) => {
      const d = n?.data || {}
      if (d?.filePath && d.filePath === model.path) return true
      if (d?.schemaId && d.schemaId === model.id) return true
      if (
        String(n.id || "")
          .toLowerCase()
          .includes(
            String(model.title || "")
              .toLowerCase()
              .replace(/[^a-z0-9]/gi, "")
          )
      )
        return true
      return false
    })

    // colors align with SchemaGraph's ErdEntityNode colorMap.text values
    const defaultColor = "#374151"
    if (!match) return defaultColor

    const d = match.data || {}
    const nodeType = d.nodeType
    const category = d.category

    if (nodeType === "entity") return "#451a7a" // purple main
    if (nodeType === "abstract") return "#1e40af" // blue
    if (nodeType === "related-entity") {
      if (category === "master-data") return "#7f1d1d"
      if (category === "reference-data") return "#065f46"
      if (category === "work-product-component") return "#5c3d00"
      return "#374151"
    }

    return defaultColor
  }

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

  function handleBreadcrumbJump(index: number) {
    // index refers to the history index: 0..history.length-1
    // The breadcrumb shows [...history, selected]; clicking an item in history jumps to it
    setHistory((h) => {
      if (index < 0 || index >= h.length) return h
      const target = h[index]
      setSelectedModel(target)
      setSearchTerm(target.title)
      // keep only items before the clicked index
      return h.slice(0, index)
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
            <div style={{ position: "relative" }} ref={inputRef}>
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

            {/* Dropdown Results rendered via portal so it can overlay breadcrumb */}
            {showDropdown && portalStyle && (
              <DropdownPortal>
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
              </DropdownPortal>
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
            <SchemaGraph
              key={selectedModel.id || selectedModel.path}
              nodes={nodes}
              edges={edges}
              onSchemaSelect={handleSchemaSelect}
            />
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
                <nav
                  aria-label="Breadcrumb"
                  className="absolute top-3 left-3 px-3 py-2 text-sm max-w-[70vw] overflow-x-auto whitespace-nowrap"
                  style={{ pointerEvents: "auto", background: "transparent" }}
                >
                  {/* Show history items then the current selected */}
                  {history.map((m, i) => (
                    <span key={m.path}>
                      <button
                        onClick={() => handleBreadcrumbJump(i)}
                        className="hover:underline text-gray-700"
                        title={m.id}
                      >
                        {m.title}
                      </button>
                      <span className="mx-2 text-gray-400 text-sm">›</span>
                    </span>
                  ))}
                  {selectedModel && (
                    <span
                      className="font-medium ml-2 text-sm"
                      title={selectedModel.id}
                      style={{ color: getColorForModel(selectedModel) }}
                    >
                      {selectedModel.title}
                    </span>
                  )}
                </nav>
              )}
            </div>
          </div>
        ) : (
          <div className="h-full">
            <div className="text-center" style={{ marginTop: 64 }}>
              {models.length === 0 ? (
                <>
                  <div className="spinner mx-auto mb-4"></div>
                  <p className="text-gray-600">Loading schemas...</p>
                  {/* Progress bar + percent */}
                  {loadTotal > 0 && (
                    <div className="mt-3" style={{ width: 260, marginLeft: "auto", marginRight: "auto" }}>
                      <div
                        style={{
                          height: 8,
                          background: "#e5e7eb",
                          borderRadius: 9999,
                          overflow: "hidden",
                          boxShadow: "inset 0 1px 2px rgba(0,0,0,0.05)",
                        }}
                        aria-label="Loading progress"
                      >
                        <div
                          style={{
                            width: `${Math.round((loadDone / Math.max(loadTotal, 1)) * 100)}%`,
                            height: "100%",
                            background: "linear-gradient(90deg,#3b82f6,#06b6d4)",
                            transition: "width 200ms ease",
                          }}
                        />
                      </div>
                      <div className="text-xs text-gray-600 mt-1">
                        {Math.round((loadDone / Math.max(loadTotal, 1)) * 100)}% · {loadDone}/{loadTotal}
                      </div>
                    </div>
                  )}
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
