import { Marked } from "marked"
import DOMPurify from "dompurify"
import { guideHash, resolveImage, resolveLink, schemaHash } from "./guides"

// Kept apart from guides.ts so marked + DOMPurify load only with the (lazy) guides viewer.

// ---------------------------------------------------------------------------------------------------------------
// Markdown rendering
// ---------------------------------------------------------------------------------------------------------------

/** GitLab/GitHub style heading slug ("10.1 Well, Wellbore" -> "101-well-wellbore"). */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\p{L}\p{N}\s_-]/gu, "")
    .replace(/\s/g, "-")
    .replace(/-{2,}/g, "-")
    .replace(/^-+|-+$/g, "")
}

export type Heading = { id: string; text: string; level: number }
export type RenderedGuide = { html: string; headings: Heading[] }

function makeMarked() {
  const seen = new Map<string, number>()
  const marked = new Marked({ gfm: true })
  marked.use({
    renderer: {
      heading({ tokens, depth, text }) {
        const inner = this.parser.parseInline(tokens)
        const plain = String(text).replace(/<[^>]+>/g, "")
        const base = slugify(plain) || "section"
        const n = seen.get(base) ?? 0
        seen.set(base, n + 1)
        const id = n === 0 ? base : `${base}-${n}`
        return `<h${depth} id="${id}">${inner}</h${depth}>\n`
      },
    },
  })
  return marked
}

/**
 * Render a guide to sanitized HTML. Links are rewritten to in-app hash routes (or upstream URLs) and images to the
 * bundled copies, so the result can be dropped straight into the page.
 */
export function renderGuide(md: string, fromPath: string, files: Set<string>, base: string): RenderedGuide {
  // GitLab's [[_TOC_]] macro: the viewer shows its own outline instead
  const source = md.replace(/^\s*\[\[_TOC_\]\]\s*$/gm, "")
  const raw = makeMarked().parse(source, { async: false }) as string
  // Ids are generated above and trusted content only is rendered; SANITIZE_DOM would drop ids like "links".
  const clean = DOMPurify.sanitize(raw, { SANITIZE_DOM: false, ADD_ATTR: ["target"] })

  const doc = new DOMParser().parseFromString(`<div id="root">${clean}</div>`, "text/html")
  const root = doc.getElementById("root")!

  root.querySelectorAll("a[href]").forEach((a) => {
    const href = a.getAttribute("href") || ""
    const r = resolveLink(href, fromPath, files)
    if (r.kind === "guide") a.setAttribute("href", guideHash(r.path, r.anchor))
    else if (r.kind === "schema") {
      a.setAttribute("href", schemaHash(r.ref))
      a.setAttribute("title", "Open in schema graph")
    } else {
      a.setAttribute("href", r.url)
      a.setAttribute("target", "_blank")
      a.setAttribute("rel", "noopener noreferrer")
    }
  })
  root.querySelectorAll("img[src]").forEach((img) => {
    img.setAttribute("src", resolveImage(img.getAttribute("src") || "", fromPath, base))
    img.setAttribute("loading", "lazy")
  })
  // Wide tables scroll horizontally instead of stretching the page
  root.querySelectorAll("table").forEach((t) => {
    const wrap = doc.createElement("div")
    wrap.className = "guide-table-wrap"
    t.replaceWith(wrap)
    wrap.appendChild(t)
  })

  const headings: Heading[] = Array.from(root.querySelectorAll("h1,h2,h3,h4")).map((h) => ({
    id: h.id,
    text: (h.textContent || "").trim(),
    level: Number(h.tagName[1]),
  }))
  return { html: root.innerHTML, headings }
}
