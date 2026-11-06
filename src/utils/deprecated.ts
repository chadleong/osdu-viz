// Matches "DEPRECATED: ...", "[DEPRECATED] ..." at the start of a description, or a bracketed marker anywhere.
// Lives outside the component files so they only export components (required for Vite Fast Refresh).
export const isDeprecated = (description?: string) =>
  !!description && /^\s*[\[(]?\s*deprecated(?![a-z])|\[\s*deprecated\s*\]/i.test(description)
