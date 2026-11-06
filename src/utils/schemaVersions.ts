import type { SchemaModel } from "../types"

const VERSION_RE = /\.(\d+(?:\.\d+)*)(?:\.min)?\.json$/i

/** Version parsed from a model: explicit `version` first, else from the file name ("Well.1.2.0.min.json" -> "1.2.0"). */
export function versionOf(m: Pick<SchemaModel, "path" | "version">): string | undefined {
  return m.version || VERSION_RE.exec(m.path || "")?.[1]
}

/** Key shared by every version of one schema: its path with the version/extension removed. */
export function groupKey(m: Pick<SchemaModel, "path">): string {
  return String(m.path || "").replace(VERSION_RE, "").toLowerCase()
}

/** Numeric, segment-wise comparison ("1.10.0" > "1.9.0"). Missing versions sort lowest. */
export function compareVersions(a?: string, b?: string): number {
  if (!a && !b) return 0
  if (!a) return -1
  if (!b) return 1
  const pa = a.split(".").map(Number)
  const pb = b.split(".").map(Number)
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
    const d = (pa[i] || 0) - (pb[i] || 0)
    if (d !== 0) return d
  }
  return 0
}

export type SchemaGroup = {
  key: string
  /** Newest version first. */
  versions: SchemaModel[]
  latest: SchemaModel
}

/** Group models by schema, newest version first, preserving first-seen group order. */
export function groupVersions(models: SchemaModel[]): SchemaGroup[] {
  const map = new Map<string, SchemaModel[]>()
  for (const m of models) {
    const k = groupKey(m)
    const list = map.get(k)
    if (list) list.push(m)
    else map.set(k, [m])
  }
  return Array.from(map, ([key, list]) => {
    const versions = [...list].sort((a, b) => compareVersions(versionOf(b), versionOf(a)))
    return { key, versions, latest: versions[0] }
  })
}
