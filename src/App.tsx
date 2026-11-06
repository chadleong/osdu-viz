import React, { useState, useEffect, useMemo, useRef } from "react"
import { createPortal } from "react-dom"
import SchemaGraph from "./components/SchemaGraph"
import { buildGraph } from "./utils/graphBuilder"
import type { SchemaModel } from "./types"
import { findBestMatch } from "./utils/schemaMatch"
import { groupVersions, groupKey, compareVersions, versionOf } from "./utils/schemaVersions"
import { getNodeColors } from "./utils/nodeColors"
import { parseSchemaFiles } from "./utils/localSchemas"
import { idbGetAll, idbPutMany } from "./utils/schemaCache"
import { useTheme } from "./hooks/useTheme"
import ThemeToggle from "./components/ThemeToggle"
import pkg from "../package.json"

export default function App() {
  const { theme, toggleTheme } = useTheme()
  const [models, setModels] = useState<SchemaModel[]>([])
  const [index, setIndex] = useState<Record<string, any>>({})
  const [selectedModel, setSelectedModel] = useState<SchemaModel | null>(null)
  const [history, setHistory] = useState<SchemaModel[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [showDropdown, setShowDropdown] = useState(false)
  const [showAllVersions, setShowAllVersions] = useState(false)
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
  const rawSchemaIndexRef = useRef<any[]>([])

  // Helper to resolve public asset URLs under a subpath deployment
  const publicUrl = (p: string) => {
    if (/^https?:\/\//i.test(p)) return p
    const base = (import.meta.env.BASE_URL as string) || "/"
    const b = base.endsWith("/") ? base.slice(0, -1) : base
    const r = p.startsWith("/") ? p.slice(1) : p
    return `${b}/${r}`
  }

  // Extract $ref and entity relationship targets from a schema
  function extractRefsAndRelationships(schema: any): string[] {
    const targets: string[] = []
    function walk(o: any) {
      if (!o || typeof o !== "object") return
      if (o.$ref && typeof o.$ref === "string") targets.push(o.$ref)
      if (o["x-osdu-relationship"] && Array.isArray(o["x-osdu-relationship"])) {
        for (const r of o["x-osdu-relationship"]) {
          if (r.EntityType) targets.push(r.EntityType)
        }
      }
      if (o.properties && typeof o.properties === "object") {
        for (const v of Object.values(o.properties)) walk(v)
      }
      if (Array.isArray(o.allOf)) o.allOf.forEach(walk)
      if (Array.isArray(o.anyOf)) o.anyOf.forEach(walk)
      if (Array.isArray(o.oneOf)) o.oneOf.forEach(walk)
      if (o.items) walk(o.items)
    }
    walk(schema)
    return Array.from(new Set(targets))
  }

  // Find a schema's publicPath in schema-index given a reference string
  function findPathInIndexList(refStr: string, indexList: any[]): string | undefined {
    if (!Array.isArray(indexList)) return undefined
    const items = indexList.map((item) => ({ path: String(item.publicPath || ""), title: item.title, id: item.id }))
    return findBestMatch(refStr, items, { fuzzy: true })?.path
  }

  // Ensure a target schema (and its directly referenced schemas) are loaded into memory
  async function ensureSchemaLoaded(targetModel: SchemaModel): Promise<SchemaModel> {
    let currentSchema = targetModel.schema || index[targetModel.path]
    const newIdxEntries: Record<string, any> = {}

    if (!currentSchema) {
      try {
        const res = await fetch(publicUrl(targetModel.path))
        if (res.ok) {
          currentSchema = await res.json()
          newIdxEntries[targetModel.path] = currentSchema
        }
      } catch (e) {
        console.warn("Failed to fetch target schema on demand:", targetModel.path, e)
      }
    }

    if (currentSchema) {
      const refs = extractRefsAndRelationships(currentSchema)
      const missingPaths: string[] = []

      for (const r of refs) {
        const matchedPath = findPathInIndexList(r, rawSchemaIndexRef.current)
        if (matchedPath && !index[matchedPath] && !newIdxEntries[matchedPath]) {
          missingPaths.push(matchedPath)
        }
      }

      if (missingPaths.length > 0) {
        await Promise.all(
          missingPaths.map(async (p) => {
            try {
              const res = await fetch(publicUrl(p))
              if (res.ok) {
                const s = await res.json()
                newIdxEntries[p] = s
              }
            } catch (e) {
              console.warn("Failed to fetch ref schema on demand:", p, e)
            }
          })
        )
      }
    }

    if (Object.keys(newIdxEntries).length > 0) {
      setIndex((prev) => ({ ...prev, ...newIdxEntries }))
    }

    const updatedModel: SchemaModel = {
      ...targetModel,
      schema: currentSchema || targetModel.schema,
    }

    setModels((prev) =>
      prev.map((m) => (m.path === updatedModel.path ? updatedModel : m))
    )

    return updatedModel
  }

  // Load schemas on mount: Instant UI startup via lightweight index, on-demand fetching + background bundle
  useEffect(() => {
    ;(async () => {
      let parsed: SchemaModel[] = []
      try {
        const response = await fetch(publicUrl("/schema-index.json"))
        const schemaIndex = await response.json()
        if (Array.isArray(schemaIndex)) {
          rawSchemaIndexRef.current = schemaIndex
          parsed = schemaIndex.map((info: any) => ({
            id: info.id || info.publicPath,
            title: info.title || info.id || info.publicPath,
            schema: null,
            path: info.publicPath,
            version: info.version,
          }))

          setModels(parsed)
          setLoadTotal(parsed.length)
          setLoadDone(parsed.length)
        }
      } catch (error) {
        console.error("Failed to load schema index:", error)
      }

      // Fast background bundle fetch (single HTTP request for all schemas)
      try {
        const bundleRes = await fetch(publicUrl("/schema-bundle.json"))
        if (bundleRes.ok) {
          const bundle = await bundleRes.json()
          if (bundle && typeof bundle === "object") {
            setIndex((prev) => ({ ...bundle, ...prev }))
            setModels((prev) =>
              prev.map((m) => ({ ...m, schema: bundle[m.path] || m.schema }))
            )
          }
        }
      } catch (e) {
        console.warn("Failed background schema-bundle.json fetch:", e)
      }

      // Offline fallback: load from IndexedDB if network fetch failed
      if (parsed.length === 0) {
        try {
          const cached = await idbGetAll()
          if (cached && cached.length > 0) {
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
      }
    })()
  }, [])

  // (removed unused loadSchemas helper)

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

      const jsonCount = files.filter((x) => x.path.toLowerCase().endsWith(".json")).length
      setLocalLoadTotal(jsonCount)
      setLocalLoadDone(0)

      const { models: parsed, index: idx } = await parseSchemaFiles(files, setLocalLoadDone)

      try {
        await idbPutMany(
          parsed.map((m) => ({ path: m.path, schema: m.schema, id: m.id, title: m.title, fetchedAt: Date.now() }))
        )
      } catch (e) {
        console.warn("Failed to cache local schemas:", e)
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
    const neutral = theme === "dark" ? "#d1d5db" : "#374151"
    if (!model) return neutral
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

    const defaultColor = neutral
    if (!match) return defaultColor
    return getNodeColors(match.data?.nodeType as string, match.data?.category as string)?.[theme === "dark" ? "onDark" : "text"] ?? defaultColor
  }

  // Filter models based on search term
  const groups = useMemo(() => groupVersions(models), [models])
  const groupByKey = useMemo(() => new Map(groups.map((g) => [g.key, g])), [groups])

  const filteredModels = useMemo(() => {
    const term = searchTerm.toLowerCase()
    const matches = term
      ? models.filter(
          (model) =>
            model.title.toLowerCase().includes(term) ||
            model.id.toLowerCase().includes(term) ||
            (versionOf(model) || "").includes(term)
        )
      : models
    if (showAllVersions) return matches
    // Latest only: keep the newest matching version of each schema
    const best = new Map<string, SchemaModel>()
    for (const m of matches) {
      const k = groupKey(m)
      const cur = best.get(k)
      if (!cur || compareVersions(versionOf(m), versionOf(cur)) > 0) best.set(k, m)
    }
    return Array.from(best.values())
  }, [models, searchTerm, showAllVersions])

  const selectedGroup = selectedModel ? groupByKey.get(groupKey(selectedModel)) : undefined

  // Switch to another version of the current schema without resetting the navigation trail
  const handleVersionSwitch = async (path: string) => {
    const target = selectedGroup?.versions.find((v) => v.path === path)
    if (!target || target.path === selectedModel?.path) return
    const full = await ensureSchemaLoaded(target)
    setSelectedModel(full)
  }

  const handleModelSelect = async (model: SchemaModel) => {
    // Manual selection resets history
    setHistory([])
    const fullModel = await ensureSchemaLoaded(model)
    setSelectedModel(fullModel)
    setSearchTerm(fullModel.title)
    setShowDropdown(false)
  }

  const handleSchemaSelect = async (schemaId: string) => {
    // Accept id, partial id, title, or file path
    const key = schemaId || ""
    const targetSchema = findBestMatch(
      key,
      models.map((m) => ({ path: m.path, title: m.title, id: m.id, model: m })),
      { fuzzy: true }
    )?.model

    if (targetSchema) {
      const fullModel = await ensureSchemaLoaded(targetSchema)
      // Only push to history if navigating to a different schema
      const isDifferent =
        !selectedModel || selectedModel.id !== fullModel.id || selectedModel.path !== fullModel.path

      if (isDifferent && selectedModel) {
        setHistory((h) => [...h, selectedModel])
      }

      if (isDifferent) {
        setSelectedModel(fullModel)
        setSearchTerm(fullModel.title)
        setShowDropdown(false)
      }
    }
  }

  // Jump to history[index]; everything after it (and the current schema) is dropped from the trail
  function goToHistory(index: number) {
    if (index < 0 || index >= history.length) return
    const target = history[index]
    setSelectedModel(target)
    setSearchTerm(target.title)
    setHistory(history.slice(0, index))
  }

  const handleBack = () => goToHistory(history.length - 1)
  const handleBreadcrumbJump = goToHistory

  return (
    <div className="h-screen bg-gray-50" style={{ display: "flex", flexDirection: "column" }}>
      {/* Header with Search and Dropdown */}
      <div
        className="app-header bg-white border-b border-gray-200"
        style={{ position: "sticky", top: 0, zIndex: 1000, backdropFilter: "saturate(180%) blur(4px)", flex: "0 0 auto" }}
      >
        <div
          className="app-header-row flex items-center"
        >
          <div className="app-brand">
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <h1 className="text-lg font-semibold text-gray-900 app-title">
                OSDU<span className="app-title-extra"> Schema Viz</span>
              </h1>
              <span className="text-xs text-gray-500 app-version">v{(pkg as any).version}</span>
              <a
                href="https://github.com/chadleong/osdu-viz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-1 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors ml-1"
                title="View Source Code on GitHub"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Schema Selector with Search */}
          <div className="relative dropdown-container app-search">
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
                style={{
                  boxSizing: "border-box",
                  // leave room for the wider version dropdown
                  paddingRight: selectedGroup && selectedGroup.versions.length > 1 ? 152 : undefined,
                }}
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
              {selectedModel && selectedGroup && selectedGroup.versions.length > 1 ? (
                <select
                  className="version-badge"
                  aria-label="Schema version"
                  title={`${selectedGroup.versions.length} versions available`}
                  value={selectedModel.path}
                  onChange={(e) => handleVersionSwitch(e.target.value)}
                  style={{
                    position: "absolute",
                    right: 32,
                    top: "50%",
                    transform: "translateY(-50%)",
                    fontSize: 12,
                    padding: "2px 2px",
                    borderRadius: 6,
                    width: 108,
                    cursor: "pointer",
                  }}
                >
                  {selectedGroup.versions.map((v, i) => (
                    <option key={v.path} value={v.path}>
                      v{versionOf(v)}
                      {i === 0 ? " (latest)" : ""}
                    </option>
                  ))}
                </select>
              ) : (
                selectedModel &&
                versionOf(selectedModel) && (
                <span
                  className="version-badge"
                  style={{
                    position: "absolute",
                    right: 44,
                    top: "50%",
                    transform: "translateY(-50%)",
                    pointerEvents: "none",
                    fontSize: 12,
                    padding: "2px 6px",
                    borderRadius: 6,
                    width: 60,
                    textAlign: "center",
                  }}
                >
                  v{versionOf(selectedModel)}
                </span>
                )
              )}
            </div>

            {/* Dropdown Results rendered via portal so it can overlay breadcrumb */}
            {showDropdown && portalStyle && (
              <DropdownPortal>
                {filteredModels.length > 0 ? (
                  <>
                    {/* Results count header */}
                    <div
                      className="px-3 py-2 bg-gray-50 border-b border-gray-200 text-xs text-gray-600 font-medium sticky top-0"
                      style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}
                    >
                      <span>
                        {filteredModels.length} schema{filteredModels.length !== 1 ? "s" : ""}
                        {showAllVersions ? " (all versions)" : " (latest versions)"}
                      </span>
                      <label style={{ display: "flex", alignItems: "center", gap: 4, cursor: "pointer", fontWeight: 400 }}>
                        <input
                          type="checkbox"
                          checked={showAllVersions}
                          onChange={(e) => setShowAllVersions(e.target.checked)}
                        />
                        All versions
                      </label>
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
                          {versionOf(model) && (
                            <div className="text-xs text-gray-500">
                              Version {versionOf(model)}
                              {(() => {
                                const g = groupByKey.get(groupKey(model))
                                if (!g || g.versions.length < 2) return null
                                return g.latest.path === model.path
                                  ? ` · latest of ${g.versions.length}`
                                  : ` · older (latest ${versionOf(g.latest)})`
                              })()}
                            </div>
                          )}
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

          {/* Status Info with inline OSDU link */}
          <div className="text-sm text-gray-600 ml-auto app-status" title={`${models.length} schemas loaded from OSDU data-definitions v0.30.1`}>
            {models.length} schemas ·{" "}
            <a
              href="https://community.opengroup.org/osdu/data/data-definitions/-/tree/v0.30.1?ref_type=tags"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
              title="OSDU Data Definitions Source (v0.30.1)"
            >
              OSDU v0.30.1
            </a>
          </div>

          {/* Light / dark background toggle (top right) */}
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: "1 1 auto", minHeight: 0 }}>
        {selectedModel && selectedModel.schema ? (
          <div style={{ position: "relative", height: "100%" }}>
            <SchemaGraph
              key={selectedModel.id || selectedModel.path}
              nodes={nodes}
              edges={edges}
              onSchemaSelect={handleSchemaSelect}
              theme={theme}
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
                  <button
                    onClick={handleBack}
                    className="mr-3 px-2 py-1 border border-gray-300 rounded bg-white hover:bg-gray-50 text-gray-700"
                    title="Back to previous schema"
                  >
                    ← Back
                  </button>
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
                          background: "var(--line)",
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
