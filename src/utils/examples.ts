import { publicUrl } from "./referenceValues"

let cache: Promise<Set<string>> | null = null

/** Set of "<group>/<Name>.<ver>.json" paths that have a worked example under public/data/Examples (examples-index.json). */
export function loadExamplesIndex(): Promise<Set<string>> {
  if (!cache) {
    cache = fetch(publicUrl("/examples-index.json"))
      .then((r) => (r.ok ? r.json() : []))
      .then((list) => new Set<string>(Array.isArray(list) ? list : []))
      .catch(() => new Set<string>())
  }
  return cache
}

/** Maps a schema file path (e.g. /data/Generated/master-data/Wellbore.1.2.0.min.json) to its example key. */
export function exampleKey(filePath: string): string | null {
  const m = /([^/]+)\/([^/]+?)(?:\.min)?\.json$/.exec(filePath || "")
  return m ? `${m[1]}/${m[2]}.json` : null
}

export function exampleUrl(key: string): string {
  return publicUrl(`/data/Examples/${key}`)
}
