export type SchemaModel = {
  id: string
  title: string
  schema: any
  path: string
  version?: string
}

export type GraphBuildOptions = {
  filter?: string
  index?: Record<string, any>
  erdView?: boolean
}
