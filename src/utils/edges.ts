import type { Edge, Node } from "@xyflow/react"

const compactId = (s: string) => String(s).replace(/[^a-zA-Z0-9]/g, "").toLowerCase()

/**
 * Drop edges that cannot be drawn and repair ids that differ only in formatting
 * (e.g. "ref::Foo.json" vs "ref::Foo.1.0.0.min.json"). Edges whose endpoints cannot be resolved are removed
 * instead of being re-attached to the main node, so no relationship is invented.
 */
export function validateEdges(edges: Edge[], nodes: Node[]): Edge[] {
  const nodeIds = new Set(nodes.map((n) => n.id))

  // Alias map for abstract nodes whose ids may be referenced by their file name
  const aliasMap = new Map<string, string>()
  for (const n of nodes) {
    const d: any = (n as any).data || {}
    if (d.nodeType !== "abstract") continue
    const last = String(d.schemaId || d.filePath || d.label || n.id).split("/").pop() || ""
    const normLast = last.replace(/[^a-zA-Z0-9_.-]/g, "_")
    aliasMap.set(`ref::${normLast}`, n.id)
    aliasMap.set(normLast, n.id)
  }

  // Resolve a missing id: alias first, then a node whose compacted id ends with the compacted last segment
  const resolve = (rawId: string | undefined): string | undefined => {
    if (!rawId) return undefined
    if (nodeIds.has(rawId)) return rawId
    if (aliasMap.has(rawId)) return aliasMap.get(rawId)
    const compact = compactId(String(rawId).split("::").pop() || rawId)
    if (!compact) return undefined
    const matches = nodes.filter((n) => compactId(n.id).endsWith(compact))
    return matches.length === 1 ? matches[0].id : undefined
  }

  const out: Edge[] = []
  for (const edge of edges) {
    if (!edge.id) continue
    const source = resolve(edge.source)
    const target = resolve(edge.target)
    if (!source || !target || source === target) continue
    out.push({ ...edge, source, target })
  }
  return out
}
