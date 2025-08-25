import { useEffect, useState } from "react"
import { SchemaModel } from "../types"

export default function useSchemas() {
  console.log("useSchemas hook called...")

  const [models, setModels] = useState<SchemaModel[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<unknown>(null)
  const [index, setIndex] = useState<Record<string, any>>({})

  useEffect(() => {
    console.log("useSchemas - useEffect running...")

    async function loadSchemas() {
      try {
        console.log("Starting simple test schema loading...")

        const response = await fetch("/data/Generated/abstract/AbstractContact.1.0.0.json")
        console.log("Fetch response:", response.status, response.statusText)

        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`)
        }

        const schema = await response.json()
        console.log("Schema loaded:", schema.$id)

        const model: SchemaModel = {
          id: schema.$id || "test",
          title: schema.title || "Test Schema",
          schema: schema,
          path: "/data/Generated/abstract/AbstractContact.1.0.0.json",
          version: "1.0.0",
        }

        setModels([model])
        setIndex({ [model.path]: schema })
        setLoading(false)

        console.log("useSchemas - Success! Loaded 1 schema")
      } catch (e) {
        console.error("Schema loading error:", e)
        setError(e)
        setLoading(false)
      }
    }

    loadSchemas()
  }, [])

  console.log("useSchemas - Returning:", { loading, error, models: models.length })
  return { models, loading, error, index }
}

export { useSchemas }
