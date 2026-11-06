/** One guide file as listed in public/guides-index.json (p = path below public/Guides, t = title). */
export type GuideEntry = { p: string; t: string }

/** Upstream repository the guides live in; links that leave the bundled folder point here. */
export const UPSTREAM_BLOB = "https://community.opengroup.org/osdu/data/data-definitions/-/blob/master/"
export const UPSTREAM_TREE = "https://community.opengroup.org/osdu/data/data-definitions/-/tree/master/"
export const UPSTREAM_RAW = "https://community.opengroup.org/osdu/data/data-definitions/-/raw/master/"

/** Folder inside the repo (and under /public) that holds the guides. */
const GUIDES_DIR = "Guides"
export const DEFAULT_GUIDE = "README.md"

// ---------------------------------------------------------------------------------------------------------------
// Routing: "#/guides/<path>?a=<anchor>" and "#/schema/<group>/<Name>.<version>"
// ---------------------------------------------------------------------------------------------------------------

export type Route =
  | { view: "guides"; path: string; anchor?: string }
  | { view: "schema"; ref: string }

export function parseRoute(hash: string): Route | null {
  const h = hash.replace(/^#/, "")
  if (h === "/guides" || h.startsWith("/guides/") || h.startsWith("/guides?")) {
    const [pathPart, query = ""] = h.slice("/guides".length).split("?")
    const safe = (s: string) => {
      try {
        return decodeURIComponent(s)
      } catch {
        return s
      }
    }
    const path = safe(pathPart.replace(/^\//, "")) || DEFAULT_GUIDE
    const anchor = new URLSearchParams(query).get("a") || undefined
    return { view: "guides", path, anchor }
  }
  if (h.startsWith("/schema/")) {
    try {
      return { view: "schema", ref: decodeURIComponent(h.slice("/schema/".length)) }
    } catch {
      return null
    }
  }
  return null
}

const encodePath = (p: string) => p.split("/").map(encodeURIComponent).join("/")

export const guideHash = (path: string, anchor?: string) =>
  `#/guides/${encodePath(path)}${anchor ? `?a=${encodeURIComponent(anchor)}` : ""}`

export const schemaHash = (ref: string) => `#/schema/${encodePath(ref)}`

// ---------------------------------------------------------------------------------------------------------------
// Link resolution
// ---------------------------------------------------------------------------------------------------------------

/** Join `rel` onto the directory of `from`, resolving "." and ".." ; the result may escape the root ("../x"). */
export function resolvePath(fromDir: string[], rel: string): string[] {
  const out = [...fromDir]
  for (const seg of rel.split("/")) {
    if (seg === "" || seg === ".") continue
    if (seg === "..") out.pop()
    else out.push(seg)
  }
  return out
}

export type ResolvedLink =
  | { kind: "guide"; path: string; anchor?: string }
  | { kind: "schema"; ref: string }
  | { kind: "external"; url: string }

/**
 * Resolve a link found in the guide at `fromPath` (relative to public/Guides).
 * Links inside the bundled guides stay in the app, links to schema docs (E-R/<group>/<Name>.<ver>.md) open the
 * schema in the graph, and anything else (worked examples, folders, missing files) goes to the upstream repository.
 */
export function resolveLink(href: string, fromPath: string, files: Set<string>): ResolvedLink {
  if (/^[a-z][a-z0-9+.-]*:/i.test(href) || href.startsWith("//")) return { kind: "external", url: href }

  const hashAt = href.indexOf("#")
  const rawPath = hashAt === -1 ? href : href.slice(0, hashAt)
  const rawAnchor = hashAt === -1 ? "" : href.slice(hashAt + 1)
  const decode = (s: string) => {
    try {
      return decodeURIComponent(s)
    } catch {
      return s
    }
  }
  const anchor = rawAnchor ? decode(rawAnchor) : undefined
  if (!rawPath) return { kind: "guide", path: fromPath, anchor }

  // Work with repo-relative segments: ["Guides", ...dir of fromPath]
  const fromDir = [GUIDES_DIR, ...fromPath.split("/").slice(0, -1)]
  const full = resolvePath(fromDir, decode(rawPath))
  const fullStr = full.join("/")
  // "M25.4" is a folder: a real extension starts with a letter
  const isDir = rawPath.endsWith("/") || !/\.[a-z][a-z0-9]*$/i.test(full[full.length - 1] || "")

  if (full[0] === GUIDES_DIR) {
    const inner = full.slice(1).join("/")
    if (files.has(inner)) return { kind: "guide", path: inner, anchor }
    if (isDir && files.has(`${inner ? inner + "/" : ""}README.md`)) {
      return { kind: "guide", path: `${inner ? inner + "/" : ""}README.md`, anchor }
    }
  }

  const er = /^E-R\/([^/]+)\/([^/]+?)\.(\d+\.\d+\.\d+)\.md$/.exec(fullStr)
  if (er) return { kind: "schema", ref: `${er[1]}/${er[2]}.${er[3]}.json` }

  const base = isDir ? UPSTREAM_TREE : UPSTREAM_BLOB
  return { kind: "external", url: base + encodePath(fullStr) + (anchor ? `#${anchor}` : "") }
}

/** Where an image referenced from `fromPath` is served: bundled copy when it is inside Guides, else upstream raw. */
export function resolveImage(src: string, fromPath: string, base: string): string {
  if (/^([a-z][a-z0-9+.-]*:|\/\/|data:)/i.test(src)) return src
  const full = resolvePath([GUIDES_DIR, ...fromPath.split("/").slice(0, -1)], (() => {
    try {
      return decodeURIComponent(src)
    } catch {
      return src
    }
  })())
  if (full[0] === GUIDES_DIR) return `${base}${encodePath(full.join("/"))}`
  return UPSTREAM_RAW + encodePath(full.join("/"))
}

/** "master-data--Well.1.2.0.md" -> { group, name, version } (migration guides are named after the schema). */
export function schemaFromGuideName(path: string): { group: string; name: string; version: string } | null {
  const file = path.split("/").pop() || ""
  const m = /^([a-z-]+)--(.+?)\.(\d+\.\d+\.\d+)\.md$/i.exec(file)
  return m ? { group: m[1], name: m[2], version: m[3] } : null
}

// ---------------------------------------------------------------------------------------------------------------
// Tree
// ---------------------------------------------------------------------------------------------------------------

export type TreeFolder = {
  name: string
  path: string
  folders: TreeFolder[]
  files: GuideEntry[]
}

const naturalCompare = (a: string, b: string) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" })
const TOP_ORDER = ["Chapters", "MigrationGuides", "ReleaseReports"]

export function buildTree(entries: GuideEntry[]): TreeFolder {
  const root: TreeFolder = { name: "", path: "", folders: [], files: [] }
  for (const e of entries) {
    const parts = e.p.split("/")
    let cur = root
    for (let i = 0; i < parts.length - 1; i++) {
      const path = parts.slice(0, i + 1).join("/")
      let next = cur.folders.find((f) => f.path === path)
      if (!next) {
        next = { name: parts[i], path, folders: [], files: [] }
        cur.folders.push(next)
      }
      cur = next
    }
    cur.files.push(e)
  }
  const sort = (f: TreeFolder, top: boolean) => {
    f.files.sort((a, b) => {
      const ra = /(^|\/)README\.md$/i.test(a.p) ? 0 : 1
      const rb = /(^|\/)README\.md$/i.test(b.p) ? 0 : 1
      return ra - rb || naturalCompare(a.p, b.p)
    })
    f.folders.sort((a, b) => {
      if (top) {
        const ia = TOP_ORDER.indexOf(a.name)
        const ib = TOP_ORDER.indexOf(b.name)
        if (ia !== -1 || ib !== -1) return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib)
      }
      return naturalCompare(a.name, b.name)
    })
    f.folders.forEach((c) => sort(c, false))
  }
  sort(root, true)
  return root
}

/** Label shown in the tree: file name without extension. */
export const fileLabel = (p: string) => (p.split("/").pop() || p).replace(/\.(md|html)$/i, "")
