import { isDeprecated } from "./deprecated"

export type ReferenceValue = { id?: string; name: string; code?: string; description?: string; deprecated?: boolean }

export type ReferenceValueSet = { values: ReferenceValue[]; sourcePath: string }

/** Convert a manifest's ReferenceData array into display rows. */
export function toReferenceValues(entries: any[]): ReferenceValue[] {
  return entries.map((entry) => {
    const d = entry?.data || {}
    return {
      id: entry?.id,
      name: String(d.Name ?? d.Code ?? "").trim(),
      code: d.Code,
      description: d.Description,
      deprecated: d.InactiveIndicator === true || isDeprecated(d.Description),
    }
  })
}

export function publicUrl(p: string): string {
  if (/^https?:\/\//i.test(p)) return p
  const base = ((import.meta as any).env?.BASE_URL as string) || "/"
  const b = base.endsWith("/") ? base.slice(0, -1) : base
  return `${b}/${p.startsWith("/") ? p.slice(1) : p}`
}

const cache = new Map<string, Promise<ReferenceValueSet | null>>()

async function fetchReferenceValues(entityType: string): Promise<ReferenceValueSet | null> {
  for (const scope of ["OPEN", "LOCAL", "FIXED"]) {
    for (const v of ["1", "2", "3"]) {
      for (const suffix of [".min.json", ".json"]) {
        const path = `/data/reference-data/${scope}/${entityType}.${v}${suffix}`
        try {
          const res = await fetch(publicUrl(path))
          if (!res.ok) continue
          const json = await res.json()
          if (json && Array.isArray(json.ReferenceData)) {
            return { values: toReferenceValues(json.ReferenceData), sourcePath: path }
          }
        } catch {
          // not found / not JSON (dev server may return index.html) - try next candidate
        }
      }
    }
  }
  return null
}

/** Load (and memoise) the allowed values for a reference-data entity type such as "RigType". */
export function loadReferenceValues(entityType: string): Promise<ReferenceValueSet | null> {
  let p = cache.get(entityType)
  if (!p) {
    p = fetchReferenceValues(entityType)
    cache.set(entityType, p)
  }
  return p
}
