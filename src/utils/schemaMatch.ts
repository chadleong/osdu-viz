export type MatchItem = { path?: string; title?: string; id?: string }

/** Strip leading "./", "/" and "../" from a $ref-like string. */
export function cleanRef(ref: string): string {
  return String(ref || "")
    .replace(/^\.\//, "")
    .replace(/^\//, "")
    .replace(/^[.]{2}\//, "")
}

/** File name without ".json"/".min.json" and trailing version (e.g. "Well.1.0.0.min.json" -> "Well"). */
export function baseName(p: string): string {
  const last = String(p || "").split("/").pop() || ""
  return last.replace(/(\.min)?\.json$/i, "").replace(/\.[0-9]+(\.[0-9]+)*$/, "")
}

const lower = (s: unknown) => String(s ?? "").toLowerCase()

/** True when `path` ends with `suffix` on a path-segment boundary (so "XFoo.json" does not match "Foo.json"). */
function endsOnBoundary(path: string, suffix: string): boolean {
  if (!suffix) return false
  return path === suffix || path.endsWith("/" + suffix)
}

/**
 * Find the best item for a reference (path, $ref, title, $id fragment or entity name).
 * Candidates are tried from most to least specific so that e.g. "Well" never resolves to "WellLog"
 * when an exact "Well" exists. The loose substring tier is opt-in via `fuzzy`.
 */
export function findBestMatch<T extends MatchItem>(
  ref: string,
  items: T[],
  opts: { fuzzy?: boolean } = {}
): T | undefined {
  if (!ref || !Array.isArray(items) || items.length === 0) return undefined
  const refClean = cleanRef(ref)
  const refMin = refClean.replace(/\.json$/i, ".min.json")
  const lastSeg = refClean.split("/").pop() || refClean
  const lastSegMin = lastSeg.replace(/\.json$/i, ".min.json")
  const refLower = lower(ref)
  const refCleanLower = lower(refClean)
  const lastSegLower = lower(lastSeg)

  const tiers: Array<(it: T) => boolean> = [
    // 1. exact path / exact $id
    (it) => lower(it.path) === refLower || (!!it.id && lower(it.id) === refLower),
    // 2. full relative ref path on a segment boundary
    (it) => {
      const p = lower(it.path)
      return endsOnBoundary(p, refCleanLower) || endsOnBoundary(p, lower(refMin))
    },
    // 3. exact title
    (it) => !!it.title && lower(it.title) === refLower,
    // 4. same file name
    (it) => {
      const p = lower(it.path)
      return endsOnBoundary(p, lastSegLower) || endsOnBoundary(p, lower(lastSegMin))
    },
    // 5. entity name inside the $id (…--Well:1.0.0), delimited so "Well" doesn't match "WellLog"
    (it) => {
      const id = lower(it.id)
      return !!id && (id.includes(`--${refLower}:`) || id.endsWith(`--${refLower}`))
    },
  ]

  for (const test of tiers) {
    const hit = items.find(test)
    if (hit) return hit
  }

  if (opts.fuzzy) {
    return items.find(
      (it) => lower(it.path).includes(refLower) || lower(it.id).includes(refLower) || lower(it.title).includes(refLower)
    )
  }
  return undefined
}
