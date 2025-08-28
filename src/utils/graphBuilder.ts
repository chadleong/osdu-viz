import type { Edge, Node } from "reactflow"
import { GraphBuildOptions, SchemaModel } from "../types"

function normalizeId(id: string) {
  return id.replace(/[^a-zA-Z0-9_\-:.]/g, "_")
}

type CollectResult = {
  properties: Array<{ name: string; type?: string; description?: string; required?: boolean; depth: number }>
  relations: Array<{ kind: string; target: string; type: "ref" | "relationship" }>
  refs: string[]
}

function collectFromSchema(schema: any): CollectResult {
  const props: CollectResult["properties"] = []
  const rels: CollectResult["relations"] = []
  const refs: string[] = []
  const rootRequired: string[] = Array.isArray(schema?.required) ? schema.required : []

  function walk(obj: any, path: string[] = []) {
    if (!obj || typeof obj !== "object") return

    if (obj.$ref && typeof obj.$ref === "string") {
      refs.push(obj.$ref)
      rels.push({ kind: "$ref", target: obj.$ref, type: "ref" })
    }

    if (obj["x-osdu-relationship"]) {
      const rs = obj["x-osdu-relationship"] as Array<{ GroupType: string; EntityType: string }>
      for (const r of rs) {
        rels.push({ kind: `${r.GroupType}--${r.EntityType}`, target: path.join(".") || "(root)", type: "relationship" })
      }
    }

    if (obj.properties && typeof obj.properties === "object") {
      for (const [k, v] of Object.entries<any>(obj.properties)) {
        const type = v.type || (Array.isArray(v.type) ? v.type.join("|") : v.$ref ? `$ref:${v.$ref}` : undefined)
        const name = [...path, k].join(".")
        const depth = name.split(".").length
        const required = depth === 1 && rootRequired.includes(k)
        props.push({ name, type, description: (v as any).description, required, depth })
        walk(v, [...path, k])
      }
    }

    if (Array.isArray(obj.allOf)) {
      for (const sub of obj.allOf) walk(sub, path)
    }
    if (Array.isArray(obj.anyOf)) {
      for (const sub of obj.anyOf) walk(sub, path)
    }
    if (Array.isArray(obj.oneOf)) {
      for (const sub of obj.oneOf) walk(sub, path)
    }
    if (obj.items) walk(obj.items, path)
  }

  walk(schema)
  return { properties: props, relations: rels, refs }
}

function collectPropsOnly(schema: any) {
  const out: Array<{ name: string; type?: string; description?: string }> = []
  function walk(o: any, path: string[] = []) {
    if (!o || typeof o !== "object") return
    if (o.properties && typeof o.properties === "object") {
      for (const [k, v] of Object.entries<any>(o.properties)) {
        const type = v.type || (Array.isArray(v.type) ? v.type.join("|") : v.$ref ? `$ref:${v.$ref}` : undefined)
        out.push({ name: [...path, k].join("."), type, description: (v as any).description })
        walk(v, [...path, k])
      }
    }
    if (Array.isArray(o.allOf)) o.allOf.forEach((s: any) => walk(s, path))
    if (Array.isArray(o.anyOf)) o.anyOf.forEach((s: any) => walk(s, path))
    if (Array.isArray(o.oneOf)) o.oneOf.forEach((s: any) => walk(s, path))
    if (o.items) walk(o.items, path)
  }
  walk(schema)
  return out
}

// ERD-style relationship extraction from schema
function extractErdRelationships(
  schema: any,
  schemaTitle: string
): Array<{
  sourceProperty: string
  targetEntity: string
  relationshipType: string
  cardinality?: string
  isConnectable?: boolean
  groupType?: string
}> {
  const erdRels: Array<{
    sourceProperty: string
    targetEntity: string
    relationshipType: string
    cardinality?: string
    isConnectable?: boolean
    groupType?: string
  }> = []

  function walkForErd(obj: any, path: string[] = []) {
    if (!obj || typeof obj !== "object") return

    if (obj["x-osdu-relationship"] && path.length > 0) {
      const rs = obj["x-osdu-relationship"] as Array<{ GroupType: string; EntityType: string }>
      for (const r of rs) {
        const propertyName = path[path.length - 1]
        const targetEntity = (r.EntityType as string) || ""
        const groupType = (r.GroupType as string) || undefined

        // Determine relationship type and if it's a connectable
        let relationshipType = "references"
        let isConnectable = false

        if (propertyName.toLowerCase().includes("id")) {
          relationshipType = "references"
        }

        // Check for connection patterns
        if (
          propertyName.toLowerCase().includes("connection") ||
          targetEntity.toLowerCase().includes("connection") ||
          propertyName.toLowerCase().includes("connect")
        ) {
          relationshipType = "connects to"
          isConnectable = true
        }

        // Check for component relationships
        if (targetEntity.toLowerCase().includes("component") || propertyName.toLowerCase().includes("component")) {
          relationshipType = "contains"
        }

        // Check for assembly/parent-child relationships
        if (propertyName.toLowerCase().includes("parent") || propertyName.toLowerCase().includes("assembly")) {
          relationshipType = "part of"
        }

        erdRels.push({
          sourceProperty: propertyName,
          targetEntity,
          relationshipType,
          cardinality: obj.type === "array" ? "one-to-many" : "one-to-one",
          isConnectable,
          groupType,
        })
      }
    }

    // Also look for arrays that might represent connectables
    if (obj.type === "array" && obj.items && path.length > 0) {
      const propertyName = path[path.length - 1]
      if (
        propertyName.toLowerCase().includes("connection") ||
        propertyName.toLowerCase().includes("component") ||
        propertyName.toLowerCase().includes("node")
      ) {
        // Check if the array items have relationships
        if (obj.items["x-osdu-relationship"]) {
          const rs = obj.items["x-osdu-relationship"] as Array<{ GroupType: string; EntityType: string }>
          for (const r of rs) {
            const targetEntity = (r.EntityType as string) || ""
            const groupType = (r.GroupType as string) || undefined
            erdRels.push({
              sourceProperty: propertyName,
              targetEntity,
              relationshipType: "contains",
              cardinality: "one-to-many",
              isConnectable: true,
              groupType,
            })
          }
        }
      }
    }

    if (obj.properties && typeof obj.properties === "object") {
      for (const [k, v] of Object.entries<any>(obj.properties)) {
        walkForErd(v, [...path, k])
      }
    }

    if (Array.isArray(obj.allOf)) {
      for (const sub of obj.allOf) walkForErd(sub, path)
    }
    if (Array.isArray(obj.anyOf)) {
      for (const sub of obj.anyOf) walkForErd(sub, path)
    }
    if (Array.isArray(obj.oneOf)) {
      for (const sub of obj.oneOf) walkForErd(sub, path)
    }
    if (obj.items) walkForErd(obj.items, path)
  }

  walkForErd(schema)
  return erdRels
}
export function buildGraph(model: SchemaModel, opts: GraphBuildOptions): { nodes: Node[]; edges: Edge[] } {
  const filter = (opts.filter || "").trim().toLowerCase()
  const title = model.title
  const id = model.id || title
  const mainId = normalizeId(id)
  const erdView = opts.erdView !== false // Default to true
  console.log("Building graph for:", title, "erdView:", erdView, "opts.erdView:", opts.erdView)

  const { properties, relations, refs } = collectFromSchema(model.schema)
  const erdRelationships = extractErdRelationships(model.schema, title)

  const filteredProps = filter
    ? properties.filter(
        (p) => p.name.toLowerCase().includes(filter) || (p.description || "").toLowerCase().includes(filter)
      )
    : properties
  const filteredRels = filter
    ? relations.filter((r) => r.kind.toLowerCase().includes(filter) || r.target.toLowerCase().includes(filter))
    : relations

  if (!erdView) {
    // Original view - simple node with relationships as separate nodes
    console.log("Using original graph builder")
    return buildOriginalGraph(model, opts, filteredProps, filteredRels, refs, mainId, title, id)
  }

  console.log("Using ERD graph builder")
  // ERD view - entities with relationships
  const nodes: Node[] = [
    {
      id: mainId,
      position: { x: 0, y: 0 },
      data: {
        label: title,
        subtitle: id,
        properties: filteredProps,
        relations: filteredRels,
        erdRelationships,
        filePath: model.path,
        schemaId: (model.schema && model.schema.$id) || undefined,
        schema: model.schema,
        nodeType: "entity", // Mark as main entity
      },
      type: "erd-entity",
    },
  ]

  // Create entity nodes for relationships found in the schema
  const entityNodes = new Map<string, Node>()

  function inferCategory(from?: string): string | undefined {
    if (!from) return undefined
    const s = from.toLowerCase()
    if (s.includes("/master-data/") || s.includes("master-data")) return "master-data"
    if (s.includes("/reference-data/") || s.includes("reference-data")) return "reference-data"
    if (s.includes("/work-product-component/") || s.includes("work-product-component")) return "work-product-component"
    return undefined
  }

  for (const erdRel of erdRelationships) {
    const targetEntityName = erdRel.targetEntity || ""
    if (!targetEntityName) continue // skip empty/unnamed relationships (GroupType-only entries)
    const entityId = normalizeId(`entity::${targetEntityName}`)
    if (!entityNodes.has(entityId)) {
      // Try to find the actual schema for this entity
      let targetSchema: any = null
      let targetProps: Array<{ name: string; type?: string; description?: string }> = []
      let targetFilePath: string | undefined
      let targetSchemaId: string | undefined

      if (opts.index) {
        const index = opts.index || {}
        // Prefer matches scoped to the reported GroupType (e.g., master-data)
        const indexKeys = Object.keys(index)

        // If an erdRel.groupType exists, prefer keys that contain that segment
        let candidates = indexKeys
        if (erdRel.groupType) {
          const groupSegment = (erdRel.groupType || "").toLowerCase()
          const filtered = indexKeys.filter(
            (k) => k.toLowerCase().includes(`/${groupSegment}/`) || k.toLowerCase().includes(groupSegment)
          )
          if (filtered.length > 0) {
            candidates = filtered
          }
        }

        // Look for schemas that match this entity type among candidates
        const matchKey = candidates.find((key) => {
          const keyLower = key.toLowerCase()
          const targetLower = (erdRel.targetEntity || "").toLowerCase()
          const titleMatch = ((index[key] && index[key].title) || "").toLowerCase() === targetLower
          const idMatch = ((index[key] && index[key].$id) || "").toLowerCase().includes(`--${targetLower}`)
          const fileMatch =
            keyLower.includes(targetLower) ||
            keyLower.includes(erdRel.targetEntity.replace(/([A-Z])/g, "-$1").toLowerCase())
          return titleMatch || idMatch || fileMatch
        })

        if (matchKey) {
          targetSchema = index[matchKey]
          targetProps = collectPropsOnly(targetSchema)
          targetFilePath = matchKey
          targetSchemaId = targetSchema?.$id
        }
      }

      const category = inferCategory(targetFilePath) || inferCategory(targetSchemaId)

      entityNodes.set(entityId, {
        id: entityId,
        position: { x: 400, y: entityNodes.size * 200 },
        data: {
          label: erdRel.targetEntity,
          subtitle: "Related Entity",
          properties: targetProps,
          relations: [],
          erdRelationships: [],
          schema: targetSchema,
          filePath: targetFilePath,
          schemaId: targetSchemaId,
          nodeType: "related-entity",
          category,
        },
        type: "erd-entity",
      })
    }
  }

  nodes.push(...Array.from(entityNodes.values()))

  // Create nodes for referenced schemas (by $ref)
  const refNodes = Array.from(new Set(refs)).map((r, i) => {
    let refProps: Array<{ name: string; type?: string; description?: string }> = []
    let filePath: string | undefined
    let schemaId: string | undefined
    let schema: any | undefined

    if (opts.index) {
      const matchKey = Object.keys(opts.index).find(
        (k) =>
          k.endsWith(
            r
              .replace(/^\.\//, "")
              .replace(/^\//, "")
              .replace(/^[.]{2}\//, "")
          ) || k.endsWith("/" + r.split("/").pop()!)
      )
      const targetSchema = matchKey ? opts.index[matchKey] : undefined
      if (targetSchema) {
        refProps = collectPropsOnly(targetSchema)
        filePath = matchKey
        schemaId = targetSchema?.$id
        schema = targetSchema
      }
    }

    const label = r.split("/").slice(-1)[0]?.replace(".json", "") || r
    const subtitle = "Abstract Schema"

    // Use stable ref ids (don't include mainId) so refs remain consistent across schema loads
    const refId = normalizeId(`ref::${r}`)
    return {
      id: refId,
      position: { x: -400, y: i * 150 + 100 },
      data: {
        label,
        subtitle,
        properties: refProps,
        relations: [],
        erdRelationships: [],
        filePath,
        schemaId,
        schema,
        nodeType: "abstract",
      },
      type: "erd-entity",
    }
  })

  nodes.push(...refNodes)

  const edges: Edge[] = []

  // ERD relationship edges
  // Ensure unique edge IDs even when multiple properties relate to the same target entity
  const edgeIdOccurrences = new Map<string, number>()
  for (const erdRel of erdRelationships) {
    const targetEntityId = normalizeId(`entity::${erdRel.targetEntity}`)
    const targetNode = entityNodes.get(targetEntityId)

    if (targetNode) {
      // Base ID includes source property to avoid collisions across multiple relationships to same target
      const baseId = `${mainId}->erd->${targetEntityId}::${normalizeId(erdRel.sourceProperty)}`
      const nextCount = (edgeIdOccurrences.get(baseId) || 0) + 1
      edgeIdOccurrences.set(baseId, nextCount)
      const edgeId = nextCount > 1 ? `${baseId}#${nextCount}` : baseId
      const label = erdRel.isConnectable ? `${erdRel.sourceProperty} (connectable)` : `${erdRel.sourceProperty}`

      edges.push({
        id: edgeId,
        source: mainId,
        target: targetEntityId,
        data: {
          type: erdRel.isConnectable ? "connectable" : "erd-relationship",
          sourceProperty: erdRel.sourceProperty,
          relationshipType: erdRel.relationshipType,
          cardinality: erdRel.cardinality,
          isConnectable: erdRel.isConnectable,
        },
        label: label,
      })
    }
  }

  // $ref edges (inheritance/composition)
  for (const r of new Set(refs)) {
    const refId = normalizeId(`ref::${r}`)
    edges.push({
      id: `${mainId}->${refId}`,
      source: mainId,
      target: refId,
      data: { type: "inheritance" },
      label: "extends",
    })
  }

  return { nodes, edges: validateEdges(edges, nodes) }
}

// Validate edges to ensure they don't have undefined handles and valid source/target
function validateEdges(edges: Edge[], nodes: Node[]): Edge[] {
  const nodeIds = new Set(nodes.map((n) => n.id))

  const validatedEdges = edges
    .filter((edge) => {
      // Ensure source and target exist
      if (!edge.source || !edge.target) {
        console.warn("Removing edge with missing source/target:", edge.id)
        return false
      }
      if (!nodeIds.has(edge.source) || !nodeIds.has(edge.target)) {
        console.warn("Removing edge with invalid node reference:", edge.id, {
          source: edge.source,
          target: edge.target,
          availableNodes: Array.from(nodeIds),
        })
        return false
      }
      return true
    })
    .map((edge) => {
      // Create clean edge without undefined handles
      const cleanEdge: Edge = {
        id: edge.id,
        source: edge.source,
        target: edge.target,
        data: edge.data || {},
      }

      // Only add label if it exists
      if (edge.label) {
        cleanEdge.label = edge.label
      }

      // Only add handles if they are explicitly defined and not undefined
      if (edge.sourceHandle !== undefined && edge.sourceHandle !== null) {
        cleanEdge.sourceHandle = edge.sourceHandle
      }
      if (edge.targetHandle !== undefined && edge.targetHandle !== null) {
        cleanEdge.targetHandle = edge.targetHandle
      }

      // Log edges that have any handle properties for debugging
      if ("sourceHandle" in edge || "targetHandle" in edge) {
        console.log("Edge with handles:", edge.id, {
          originalSourceHandle: edge.sourceHandle,
          originalTargetHandle: edge.targetHandle,
          cleanSourceHandle: cleanEdge.sourceHandle,
          cleanTargetHandle: cleanEdge.targetHandle,
        })
      }

      return cleanEdge
    })

  console.log("Validated edges:", validatedEdges.length, "from original:", edges.length)
  return validatedEdges
}

// Original graph building function
function buildOriginalGraph(
  model: SchemaModel,
  opts: GraphBuildOptions,
  filteredProps: any[],
  filteredRels: any[],
  refs: string[],
  mainId: string,
  title: string,
  id: string
): { nodes: Node[]; edges: Edge[] } {
  // Node for the model itself
  const nodes: Node[] = [
    {
      id: mainId,
      position: { x: 0, y: 0 },
      data: {
        label: title,
        subtitle: id,
        properties: filteredProps,
        relations: filteredRels,
        filePath: model.path,
        schemaId: (model.schema && model.schema.$id) || undefined,
        schema: model.schema,
      },
      type: "default",
    },
  ]

  // Create nodes for referenced schemas (by $ref) using their ref path as label
  const refNodes = Array.from(new Set(refs)).map((r, i) => {
    let refProps: Array<{ name: string; type?: string; description?: string }> = []
    let filePath: string | undefined
    let schemaId: string | undefined
    let schema: any | undefined
    if (opts.index) {
      const matchKey = Object.keys(opts.index).find(
        (k) =>
          k.endsWith(
            r
              .replace(/^\.\//, "")
              .replace(/^\//, "")
              .replace(/^[.]{2}\//, "")
          ) || k.endsWith("/" + r.split("/").pop()!)
      )
      const targetSchema = matchKey ? opts.index[matchKey] : undefined
      if (targetSchema) {
        refProps = collectPropsOnly(targetSchema)
        filePath = matchKey
        schemaId = targetSchema?.$id
        schema = targetSchema
      }
    }
    const label = r.split("/").slice(-1)[0] || r
    const subtitle = r
    const refId = normalizeId(`ref::${r}`)
    return {
      id: refId,
      position: { x: 0, y: i * 100 + 100 },
      data: { label, subtitle, properties: refProps, relations: [], filePath, schemaId, schema },
      type: "default",
    }
  })

  nodes.push(...refNodes)

  const edges: Edge[] = []
  // $ref edges
  for (const r of new Set(refs)) {
    const refId = normalizeId(`ref::${r}`)
    edges.push({
      id: `${mainId}->${refId}`,
      source: mainId,
      target: refId,
      data: { type: "ref" },
    })
  }
  // Create a node per unique relationship kind to avoid self-loops
  const uniqueRelKinds = Array.from(new Set(filteredRels.map((r) => r.kind)))
  const relNodes = uniqueRelKinds.map((k, i) => ({
    id: normalizeId(`${mainId}::rel::${k}`),
    position: { x: 300, y: i * 80 + 100 },
    data: { label: k, subtitle: "relationship", properties: [], relations: [] },
    type: "default",
  }))
  nodes.push(...relNodes)
  // relationship edges to relationship-kind nodes
  uniqueRelKinds.forEach((k, idx) => {
    edges.push({
      id: `${mainId}-rel-${idx}`,
      source: mainId,
      target: normalizeId(`${mainId}::rel::${k}`),
      data: { type: "relationship", label: k },
    })
  })

  return { nodes, edges: validateEdges(edges, nodes) }
}
