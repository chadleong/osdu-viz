import type { NodeTypes, EdgeTypes } from "reactflow"
import { DefaultNode, ErdEntityNode } from "./nodes"

export const NODE_TYPES: NodeTypes = Object.freeze({
  default: DefaultNode,
  "erd-entity": ErdEntityNode,
})

export const EDGE_TYPES: EdgeTypes = Object.freeze({})
