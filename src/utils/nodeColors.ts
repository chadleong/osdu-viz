export type NodeColors = { bg: string; border: string; text: string; onDark: string }

/** Single source of truth for entity colours (graph nodes, legend, breadcrumb). */
export const NODE_COLORS: Record<string, NodeColors> = {
  entity: { bg: "#f5f3ff", border: "#7c3aed", text: "#451a7a", onDark: "#c4b5fd" },
  abstract: { bg: "#eff6ff", border: "#3b82f6", text: "#1e40af", onDark: "#93c5fd" },
  "master-data": { bg: "#fff1f2", border: "#fca5a5", text: "#7f1d1d", onDark: "#fca5a5" },
  "reference-data": { bg: "#ecfdf5", border: "#34d399", text: "#065f46", onDark: "#6ee7b7" },
  "work-product-component": { bg: "#fffbeb", border: "#fcd34d", text: "#5c3d00", onDark: "#fcd34d" },
  defaultRelated: { bg: "#f3f4f6", border: "#9ca3af", text: "#374151", onDark: "#d1d5db" },
}

/** Colours for a node, or undefined when the node type has no dedicated styling. */
export function getNodeColors(nodeType?: string, category?: string): NodeColors | undefined {
  if (nodeType === "entity") return NODE_COLORS.entity
  if (nodeType === "abstract") return NODE_COLORS.abstract
  if (nodeType === "related-entity") return (category && NODE_COLORS[category]) || NODE_COLORS.defaultRelated
  return undefined
}
