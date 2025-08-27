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
}> {
  const erdRels: Array<{
    sourceProperty: string
    targetEntity: string
    relationshipType: string
    cardinality?: string
    isConnectable?: boolean
  }> = []

  function walkForErd(obj: any, path: string[] = []) {
    if (!obj || typeof obj !== "object") return

    if (obj["x-osdu-relationship"] && path.length > 0) {
      const rs = obj["x-osdu-relationship"] as Array<{ GroupType: string; EntityType: string }>
      for (const r of rs) {
        const propertyName = path[path.length - 1]
        const targetEntity = r.EntityType

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
            erdRels.push({
              sourceProperty: propertyName,
              targetEntity: r.EntityType,
              relationshipType: "contains",
              cardinality: "one-to-many",
              isConnectable: true,
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
    return buildOriginalGraph(model, opts, filteredProps, filteredRels, refs, mainId, title, id)
  }

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

  for (const erdRel of erdRelationships) {
    const entityId = normalizeId(`entity::${erdRel.targetEntity}`)
    if (!entityNodes.has(entityId)) {
      // Try to find the actual schema for this entity
      let targetSchema: any = null
      let targetProps: Array<{ name: string; type?: string; description?: string }> = []

      if (opts.index) {
        // Look for schemas that match this entity type
        const matchKey = Object.keys(opts.index).find(
          (key) =>
            key.toLowerCase().includes(erdRel.targetEntity.toLowerCase()) ||
            key.toLowerCase().includes(erdRel.targetEntity.replace(/([A-Z])/g, "-$1").toLowerCase())
        )

        if (matchKey) {
          targetSchema = opts.index[matchKey]
          targetProps = collectPropsOnly(targetSchema)
        }
      }

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
          nodeType: "related-entity",
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

    return {
      id: normalizeId(`${mainId}::ref::${r}`),
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
  for (const erdRel of erdRelationships) {
    const targetEntityId = normalizeId(`entity::${erdRel.targetEntity}`)
    const targetNode = entityNodes.get(targetEntityId)

    if (targetNode) {
      const edgeId = `${mainId}->erd->${targetEntityId}`
      const label = erdRel.isConnectable ? `${erdRel.sourceProperty} (connectable)` : `${erdRel.sourceProperty}`

      edges.push({
        id: edgeId,
        source: mainId,
        target: targetEntityId,
        sourceHandle: undefined,
        targetHandle: undefined,
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
    edges.push({
      id: `${mainId}->${normalizeId(`${mainId}::ref::${r}`)}`,
      source: mainId,
      target: normalizeId(`${mainId}::ref::${r}`),
      sourceHandle: undefined,
      targetHandle: undefined,
      data: { type: "inheritance" },
      label: "extends",
    })
  }

  return { nodes, edges }
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
    return {
      id: normalizeId(`${mainId}::ref::${r}`),
      position: { x: 0, y: i * 100 + 100 },
      data: { label, subtitle, properties: refProps, relations: [], filePath, schemaId, schema },
      type: "default",
    }
  })

  nodes.push(...refNodes)

  const edges: Edge[] = []
  // $ref edges
  for (const r of new Set(refs)) {
    edges.push({
      id: `${mainId}->${normalizeId(`${mainId}::ref::${r}`)}`,
      source: mainId,
      target: normalizeId(`${mainId}::ref::${r}`),
      sourceHandle: undefined,
      targetHandle: undefined,
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
      sourceHandle: undefined,
      targetHandle: undefined,
      data: { type: "relationship", label: k },
    })
  })

  return { nodes, edges }
}
