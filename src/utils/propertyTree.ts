export type TreeNode<T> = { prop: T; children: TreeNode<T>[] }

/**
 * Turn flat dotted property names ("data.Address.City") into a tree so object-like properties can be
 * shown with their attributes underneath. `rootDepth` is the depth of the first level to show
 * (2 = "data.X", because depth 1 ("data") is listed in the top-level section).
 * Missing parents are synthesised as objects; duplicate names (e.g. from merged allOf branches) keep the first.
 */
export function buildPropertyTree<T extends { name: string; type?: string }>(
  props: T[],
  rootDepth = 2
): TreeNode<T>[] {
  const nodes = new Map<string, TreeNode<T>>()
  const roots: TreeNode<T>[] = []

  const attach = (name: string, prop: T) => {
    const node: TreeNode<T> = { prop, children: [] }
    nodes.set(name, node)
    const segs = name.split(".")
    if (segs.length <= rootDepth) roots.push(node)
    else nodes.get(segs.slice(0, -1).join("."))!.children.push(node)
  }

  for (const p of props) {
    if (nodes.has(p.name)) continue
    const segs = p.name.split(".")
    // make sure every ancestor at or below the root level exists first
    for (let k = rootDepth; k < segs.length; k++) {
      const ancestor = segs.slice(0, k).join(".")
      if (!nodes.has(ancestor)) attach(ancestor, { name: ancestor, type: "object" } as T)
    }
    attach(p.name, p)
  }
  return roots
}

/** Number of nodes in a subtree, excluding the node itself. */
export function countDescendants<T>(node: TreeNode<T>): number {
  return node.children.reduce((n, c) => n + 1 + countDescendants(c), 0)
}
