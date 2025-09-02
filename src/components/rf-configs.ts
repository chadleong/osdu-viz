import { NodeTypes, EdgeTypes } from "@xyflow/react"
import { DefaultNode, ErdEntityNode } from "./nodes"

// By defining nodeTypes and edgeTypes in a separate file, we ensure they have a
// stable identity that doesn't get reset by Vite's Hot Module Replacement (HMR)
// when the SchemaGraph.tsx component is updated. This prevents the React Flow
// "002" error during development.

export const nodeTypes: NodeTypes = Object.freeze({
  default: DefaultNode,
  "erd-entity": ErdEntityNode,
})

export const edgeTypes: EdgeTypes = Object.freeze({})
