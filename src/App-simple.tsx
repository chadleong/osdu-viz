import React, { useState, useEffect, useMemo } from "react"
import SchemaGraph from "./components/SchemaGraph"
import { buildGraphFromSchema } from "./utils/graphBuilder"
import type { SchemaModel } from "./types"

export default function App() {
  const [models, setModels] = useState<SchemaModel[]>([])
  const [index, setIndex] = useState<Record<string, any>>({})
  const [selectedModel, setSelectedModel] = useState<SchemaModel | null>(null)

  // Auto-select first model when models load
  useEffect(() => {
    if (models.length > 0 && !selectedModel) {
      console.log("Auto-selecting first model:", models[0].title)
      setSelectedModel(models[0])
    }
  }, [models, selectedModel])

  // Load schemas
  useEffect(() => {
    loadSchemas()
  }, [])

  async function loadSchemas() {
    try {
      console.log("Loading schemas...")
      const response = await fetch("/schema-index.json")
      const schemaIndex = await response.json()

      const parsed: SchemaModel[] = []
      const idx: Record<string, any> = {}

      for (const path of schemaIndex.slice(0, 10)) {
        // Limit to first 10 for testing
        try {
          const schemaResponse = await fetch(path)
          const schema = await schemaResponse.json()

          if (schema && typeof schema === "object" && schema["$schema"]) {
            const isStandard = schema["$schema"].includes("json-schema.org")
            if (isStandard) {
              const id = schema["$id"] || path
              const title = schema["title"] || id
              const model: SchemaModel = { id, title, schema, path }
              parsed.push(model)
              idx[path] = schema
            }
          }
        } catch (e) {
          console.warn(`Failed to load ${path}:`, e)
        }
      }

      console.log("Loaded models:", parsed.length)
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
    return buildGraphFromSchema(selectedModel.schema, index)
  }, [selectedModel, index])

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "lightblue",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Debug Info */}
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "8px",
          fontSize: "14px",
        }}
      >
        Models: {models.length} | Selected: {selectedModel?.title || "None"} | Nodes: {nodes.length} | Edges:{" "}
        {edges.length}
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, backgroundColor: "white", border: "2px solid green" }}>
        {selectedModel && selectedModel.schema ? (
          <SchemaGraph nodes={nodes} edges={edges} />
        ) : (
          <div
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
              backgroundColor: "pink",
            }}
          >
            Loading schema...
          </div>
        )}
      </div>
    </div>
  )
}
