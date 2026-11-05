import type { SchemaModel } from "../types"

export type LocalFile = { path: string; file: { text(): Promise<string> } }

/** A JSON-Schema document worth listing: declares a json-schema.org $schema and describes something. */
export function isSchemaDocument(doc: any): boolean {
  if (!doc || typeof doc !== "object" || Array.isArray(doc)) return false
  if (!String(doc["$schema"] ?? "").includes("json-schema.org")) return false
  return Boolean(doc["$id"] || doc.title || doc.properties || doc.allOf || doc.oneOf || doc.anyOf)
}

/**
 * Read and parse local files in small parallel batches. Non-JSON files, unparsable files and
 * JSON that isn't a schema are skipped. `onProgress` receives the number of files processed so far.
 */
export async function parseSchemaFiles(
  files: LocalFile[],
  onProgress?: (done: number) => void,
  batchSize = 16
): Promise<{ models: SchemaModel[]; index: Record<string, any>; skipped: number }> {
  const jsonFiles = files.filter((f) => f.path.toLowerCase().endsWith(".json"))
  const models: SchemaModel[] = []
  const index: Record<string, any> = {}
  let skipped = 0
  let done = 0

  for (let i = 0; i < jsonFiles.length; i += batchSize) {
    const batch = jsonFiles.slice(i, i + batchSize)
    const results = await Promise.all(
      batch.map(async (f) => {
        try {
          const schema = JSON.parse(await f.file.text())
          return isSchemaDocument(schema) ? { f, schema } : null
        } catch {
          return null
        }
      })
    )
    for (const r of results) {
      if (!r) {
        skipped++
        continue
      }
      const id = r.schema["$id"] || r.f.path
      const title = r.schema["title"] || r.f.path
      models.push({ id, title, schema: r.schema, path: r.f.path, version: undefined })
      index[r.f.path] = r.schema
    }
    done += batch.length
    onProgress?.(done)
  }
  return { models, index, skipped }
}
