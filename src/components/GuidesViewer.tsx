import React, { useEffect, useMemo, useRef, useState } from "react"
import {
  buildTree,
  fileLabel,
  guideHash,
  schemaFromGuideName,
  schemaHash,
  type GuideEntry,
  type TreeFolder,
  UPSTREAM_BLOB,
} from "../utils/guides"
import { renderGuide, type RenderedGuide } from "../utils/guidesRender"

type Props = {
  entries: GuideEntry[]
  path: string
  anchor?: string
  /** public base URL ending with "/" */
  base: string
}

// Raw page text, bounded (some migration guides are several hundred KB)
const DOC_CACHE_MAX = 30
const docCache = new Map<string, Promise<string>>()
function fetchText(url: string): Promise<string> {
  let p = docCache.get(url)
  if (p) {
    // refresh recency
    docCache.delete(url)
    docCache.set(url, p)
  } else {
    p = fetch(url).then(async (res) => {
      const text = await res.text()
      // the dev server answers unknown paths with index.html
      if (!res.ok || /^\s*<!doctype html/i.test(text) !== /\.html$/i.test(url)) throw new Error(`Could not load ${url}`)
      return text
    })
    p.catch(() => docCache.delete(url))
    docCache.set(url, p)
    if (docCache.size > DOC_CACHE_MAX) docCache.delete(docCache.keys().next().value as string)
  }
  return p
}

function Folder({
  folder,
  current,
  depth,
}: {
  folder: TreeFolder
  current: string
  depth: number
}) {
  const containsCurrent = current.startsWith(folder.path + "/")
  const [open, setOpen] = useState(containsCurrent || depth === 0)
  // open the branch that holds the page we navigate to
  useEffect(() => {
    if (containsCurrent) setOpen(true)
  }, [containsCurrent])
  return (
    <li>
      {depth > 0 && (
        <button type="button" className="guide-folder" onClick={() => setOpen(!open)} aria-expanded={open}>
          {open ? "▾" : "▸"} {folder.name}
        </button>
      )}
      {(open || depth === 0) && (
        <ul className="guide-tree" style={depth > 0 ? { paddingLeft: 12 } : undefined}>
          {folder.folders.map((f) => (
            <Folder key={f.path} folder={f} current={current} depth={depth + 1} />
          ))}
          {folder.files.map((f) => (
            <li key={f.p}>
              <a
                href={guideHash(f.p)}
                className={`guide-file ${f.p === current ? "active" : ""}`}
                title={f.t}
                aria-current={f.p === current ? "page" : undefined}
              >
                {fileLabel(f.p)}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

export default function GuidesViewer({ entries, path, anchor, base }: Props) {
  const files = useMemo(() => new Set(entries.map((e) => e.p)), [entries])
  const tree = useMemo(() => buildTree(entries), [entries])
  const [query, setQuery] = useState("")
  const [focus, setFocus] = useState(false)
  const [state, setState] = useState<{ loading: boolean; error?: string; doc?: RenderedGuide; path?: string }>({
    loading: true,
  })
  const contentRef = useRef<HTMLDivElement | null>(null)
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const isHtml = /\.html$/i.test(path)
  const entry = entries.find((e) => e.p === path)
  const schema = schemaFromGuideName(path)

  // Load + render the page (markdown only; HTML reports are shown in an iframe)
  useEffect(() => {
    let alive = true
    if (isHtml) {
      setState({ loading: false, path })
      return
    }
    setState((s) => ({ ...s, loading: true, error: undefined }))
    fetchText(`${base}Guides/${path.split("/").map(encodeURIComponent).join("/")}`)
      .then((text) => {
        if (!alive) return
        setState({ loading: false, doc: renderGuide(text, path, files, base), path })
      })
      .catch((e) => alive && setState({ loading: false, error: String(e.message || e), path }))
    return () => {
      alive = false
    }
  }, [path, isHtml, files, base])

  // Scroll to the anchor (or to the top) once the page for `path` is on screen
  useEffect(() => {
    if (state.loading || state.path !== path) return
    const root = contentRef.current
    if (anchor && root) {
      const target =
        root.querySelector(`[id="${CSS.escape(anchor)}"]`) ||
        root.querySelector(`[id="${CSS.escape(anchor.toLowerCase())}"]`) ||
        root.querySelector(`a[name="${CSS.escape(anchor)}"]`)
      if (target) {
        target.scrollIntoView({ block: "start" })
        return
      }
    }
    scrollRef.current?.scrollTo({ top: 0 })
  }, [state.loading, state.path, path, anchor])

  const q = query.trim().toLowerCase()
  const results = useMemo(
    () =>
      q
        ? entries.filter((e) => e.p.toLowerCase().includes(q) || e.t.toLowerCase().includes(q)).slice(0, 150)
        : [],
    [entries, q]
  )

  return (
    <div className={`guides-viewer ${focus ? "focus" : ""}`}>
      <nav className="guides-sidebar" aria-label="Guides">
        <input
          type="search"
          placeholder="Search guides..."
          aria-label="Search guides"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {q ? (
          <ul className="guide-tree">
            {results.map((e) => (
              <li key={e.p}>
                <a href={guideHash(e.p)} className={`guide-file ${e.p === path ? "active" : ""}`} title={e.p}>
                  {e.t}
                  <span className="muted guide-path">{e.p}</span>
                </a>
              </li>
            ))}
            {!results.length && <li className="muted">No guides found</li>}
          </ul>
        ) : (
          <ul className="guide-tree">
            <Folder folder={tree} current={path} depth={0} />
          </ul>
        )}
      </nav>

      <div className="guides-main" ref={scrollRef}>
        <div className="guides-toolbar">
          <span className="muted" title={entry?.t}>
            {path}
          </span>
          <span style={{ display: "inline-flex", gap: 8 }}>
            <button
              type="button"
              className="btn"
              aria-pressed={focus}
              onClick={() => setFocus(!focus)}
              title="Hide the tree and outline to give wide tables the full width"
            >
              {focus ? "Show navigation" : "Wide view"}
            </button>
            {schema && (
              <a className="btn" href={schemaHash(`${schema.group}/${schema.name}.${schema.version}.json`)}>
                Open schema in graph
              </a>
            )}
            <a
              className="btn"
              href={UPSTREAM_BLOB + "Guides/" + path.split("/").map(encodeURIComponent).join("/")}
              target="_blank"
              rel="noopener noreferrer"
            >
              View upstream
            </a>
          </span>
        </div>

        {isHtml ? (
          // Release reports are self-contained static pages: no scripts, no same-origin access
          <iframe
            key={path}
            title={entry?.t || path}
            className="guides-frame"
            sandbox="allow-popups allow-popups-to-escape-sandbox"
            src={`${base}Guides/${path.split("/").map(encodeURIComponent).join("/")}`}
          />
        ) : (
          <div className="guides-body">
            {state.loading && <div className="muted">Loading...</div>}
            {state.error && <div className="muted">{state.error}</div>}
            {state.doc && !state.loading && (
              <article
                ref={contentRef}
                className="guide-content"
                // sanitized with DOMPurify in renderGuide
                dangerouslySetInnerHTML={{ __html: state.doc.html }}
              />
            )}
          </div>
        )}
      </div>

      {!isHtml && state.doc && state.doc.headings.length > 1 && (
        <aside className="guides-outline" aria-label="On this page">
          <div className="guides-outline-title">On this page</div>
          <ul>
            {state.doc.headings
              .filter((h) => h.level <= 3)
              .map((h) => (
                <li key={h.id} style={{ paddingLeft: (h.level - 1) * 10 }}>
                  <a href={guideHash(path, h.id)}>{h.text}</a>
                </li>
              ))}
          </ul>
        </aside>
      )}
    </div>
  )
}
