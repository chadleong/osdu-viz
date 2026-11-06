import { afterEach } from "vitest"
// Registers the jest-dom matchers on vitest's expect and augments its types
import "@testing-library/jest-dom/vitest"
import { cleanup } from "@testing-library/react"

// Auto-cleanup the DOM after each test
afterEach(() => {
  cleanup()
})
