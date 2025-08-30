import { expect, afterEach } from "vitest"
import * as matchers from "@testing-library/jest-dom/matchers"
import { cleanup } from "@testing-library/react"

// Extend expect with jest-dom matchers

expect.extend(matchers)

// Auto-cleanup the DOM after each test
afterEach(() => {
  cleanup()
})
