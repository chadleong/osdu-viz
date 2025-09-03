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
  // Local folder load state
  const [loadingLocal, setLoadingLocal] = useState(false)
  const [localLoadTotal, setLocalLoadTotal] = useState(0)
  const [localLoadDone, setLocalLoadDone] = useState(0)

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

    // run an initial recalc to lock the portal width/position
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
          maxHeight: 320,
          overflow: "hidden",
          boxSizing: "border-box",
          zIndex: 20000,
          scrollbarWidth: "thin",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>{children}</div>
      </div>,
      document.body
    )
  }

  // Move loadSchemas here so it's defined before useEffect to avoid any callable/type confusion
  // Helper to resolve public asset URLs under a subpath deployment
  const publicUrl = (p: string) => {
    if (/^https?:\/\//i.test(p)) return p
    const base = (import.meta.env.BASE_URL as string) || "/"
    const b = base.endsWith("/") ? base.slice(0, -1) : base
    const r = p.startsWith("/") ? p.slice(1) : p
    return `${b}/${r}`
  }

  // Load schemas on mount (inline to avoid callable-type issues)
  useEffect(() => {
    ;(async () => {
      const parsed: SchemaModel[] = []
      const idx: Record<string, any> = {}
      try {
        const response = await fetch(publicUrl("/schema-index.json"))
        const schemaIndex = await response.json()

        // setup progress counters
        const total = Array.isArray(schemaIndex) ? schemaIndex.length : 0
        setLoadTotal(total)
        setLoadDone(0)

        let completed = 0
        for (const schemaInfo of schemaIndex) {
          try {
            const path = schemaInfo.publicPath
            const schemaResponse = await fetch(publicUrl(path))
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
          completed += 1
          setLoadDone(completed)
        }

        setModels(parsed)
        setIndex(idx)
      } catch (error) {
        console.error("Failed to load schema index:", error)
      }

      // try to load any cached schemas from IndexedDB so users can resume offline
      // NOTE: do NOT merge cache into freshly fetched results. Use cache only as a fallback
      // when the network fetch produced zero schemas (offline resume scenario).
      try {
        const cached = await idbGetAll()
        if (cached && cached.length > 0 && parsed.length === 0) {
          const cachedModels: SchemaModel[] = cached.map((it: any) => ({
            id: it.id || it.path,
            title: it.title || it.id || it.path,
            schema: it.schema,
            path: it.path,
            version: it.version,
          }))
          const cachedIndex: Record<string, any> = {}
          for (const it of cached) cachedIndex[it.path] = it.schema
          setModels(cachedModels)
          setIndex(cachedIndex)
        }
      } catch (e) {
        // ignore cache errors
      }
    })()
  }, [])

  // (removed unused loadSchemas helper)

  // --- IndexedDB helpers (very small wrapper) ---
  const DB_NAME = "osdu-viz-cache"
  const STORE = "schemas"

  function openDB(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
      const req = indexedDB.open(DB_NAME, 1)
      req.onupgradeneeded = () => {
        const db = req.result
        if (!db.objectStoreNames.contains(STORE)) db.createObjectStore(STORE, { keyPath: "path" })
      }
      req.onsuccess = () => resolve(req.result)
      req.onerror = () => reject(req.error)
    })
  }

  async function idbPut(item: {
    path: string
    schema: any
    id?: string
    title?: string
    version?: string
    fetchedAt?: number
  }) {
    const db = await openDB()
    return new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE, "readwrite")
      const store = tx.objectStore(STORE)
      const req = store.put(item)
      req.onsuccess = () => resolve()
      req.onerror = () => reject(req.error)
    })
  }

  async function idbGetAll(): Promise<Array<any>> {
    const db = await openDB()
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE, "readonly")
      const store = tx.objectStore(STORE)
      const req = store.getAll()
      req.onsuccess = () => resolve(req.result)
      req.onerror = () => reject(req.error)
    })
  }

  // --- Local folder loading (File System Access API or webkitdirectory fallback) ---
  async function selectLocalFolder() {
    if (loadingLocal) return
    setLoadingLocal(true)
    try {
      let files: Array<{ path: string; file: File }> = []

      if ((window as any).showDirectoryPicker) {
        // modern API: recursively iterate directory handle
        const dir = await (window as any).showDirectoryPicker()

        async function traverse(handle: any, base: string) {
          for await (const [name, child] of handle.entries()) {
            if (child.kind === "file") {
              const f = await child.getFile()
              files.push({ path: base + name, file: f })
            } else if (child.kind === "directory") {
              await traverse(child, base + name + "/")
            }
          }
        }

        await traverse(dir, "")
      } else {
        // fallback: input with webkitdirectory
        await new Promise<void>((resolve) => {
          const input = document.createElement("input")
          input.type = "file"
          ;(input as any).webkitdirectory = true
          input.multiple = true
          input.onchange = () => {
            const list = Array.from(input.files || [])
            for (const f of list) {
              const rel = (f as any).webkitRelativePath || f.name
              files.push({ path: rel, file: f })
            }
            resolve()
          }
          input.click()
        })
      }

      // Filter JSON files and process
      const jsonFiles = files.filter((x) => x.path.toLowerCase().endsWith(".json"))
      setLocalLoadTotal(jsonFiles.length)
      setLocalLoadDone(0)

      const parsed: SchemaModel[] = []
      const idx: Record<string, any> = {}
      let completed = 0

      for (const it of jsonFiles) {
        try {
          const text = await it.file.text()
          const schema = JSON.parse(text)
          if (
            schema &&
            typeof schema === "object" &&
            schema["$schema"] &&
            String(schema["$schema"]).includes("json-schema.org")
          ) {
            const id = schema["$id"] || it.path
            const title = schema["title"] || it.path
            const model: SchemaModel = { id, title, schema, path: it.path, version: undefined }
            parsed.push(model)
            idx[it.path] = schema
            try {
              await idbPut({ path: it.path, schema, id, title, fetchedAt: Date.now() })
            } catch (e) {
              console.warn("Failed to cache local schema:", e)
            }
          }
        } catch (e) {
          console.warn("Failed to read/parse local file", it.path, e)
        }
        completed += 1
        setLocalLoadDone(completed)
      }

      // Merge local-loaded schemas into current models/index (local takes precedence)
      setIndex((prev) => ({ ...prev, ...idx }))
      setModels((prev) => {
        // create map from path to model for easy merge
        const map = new Map<string, SchemaModel>()
        for (const m of prev) map.set(m.path, m)
        for (const m of parsed) map.set(m.path, m)
        return Array.from(map.values())
      })
    } catch (e) {
      console.error("Local folder load failed:", e)
    } finally {
      setLoadingLocal(false)
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
            <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
              <h1 className="text-lg font-semibold text-gray-900">OSDU Schema Viz</h1>
              <span className="text-xs text-gray-500">v{(pkg as any).version}</span>
            </div>
          </div>

          {/* Schema Selector with Search */}
          <div className="relative dropdown-container" style={{ width: 720, flex: "none" }}>
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-24"
                style={{ boxSizing: "border-box" }}
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
                    width: 60,
                    textAlign: "center",
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
                    <div style={{ height: 240, overflowY: "auto" }}>
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
                      <div
                        className="px-3 py-1 bg-gray-50 border-t border-gray-200 text-xs text-gray-500 text-center"
                        style={{ position: "sticky", bottom: 0 }}
                      >
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

          {/* Load from GitLab button removed - GitLab loading disabled in UI */}

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
                  <p className="text-xs text-blue-600 mt-2">
                    First time loading may take a while as all schemas are being fetched and processed. Please be
                    patient! 😊
                  </p>
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
