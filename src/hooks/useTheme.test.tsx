import { describe, it, expect, beforeEach, vi } from "vitest"
import { act, render, renderHook, screen, fireEvent } from "@testing-library/react"
import { getInitialTheme, THEME_KEY, useTheme } from "./useTheme"
import ThemeToggle from "../components/ThemeToggle"

function mockPrefersDark(dark: boolean) {
  window.matchMedia = vi.fn().mockReturnValue({ matches: dark }) as any
}

beforeEach(() => {
  window.localStorage.clear()
  document.documentElement.removeAttribute("data-theme")
  mockPrefersDark(false)
})

describe("getInitialTheme", () => {
  it("defaults to light", () => {
    expect(getInitialTheme()).toBe("light")
  })
  it("stays light even when the OS prefers dark and nothing is saved", () => {
    mockPrefersDark(true)
    expect(getInitialTheme()).toBe("light")
  })
  it("honours a saved choice", () => {
    window.localStorage.setItem(THEME_KEY, "dark")
    expect(getInitialTheme()).toBe("dark")
  })
  it("ignores garbage in storage", () => {
    window.localStorage.setItem(THEME_KEY, "purple")
    expect(getInitialTheme()).toBe("light")
  })
  it("survives blocked storage", () => {
    const spy = vi.spyOn(Storage.prototype, "getItem").mockImplementation(() => {
      throw new Error("blocked")
    })
    expect(getInitialTheme()).toBe("light")
    spy.mockRestore()
  })
})

describe("useTheme", () => {
  it("applies data-theme, toggles, and persists", () => {
    const { result } = renderHook(() => useTheme())
    expect(document.documentElement.getAttribute("data-theme")).toBe("light")
    act(() => result.current.toggleTheme())
    expect(result.current.theme).toBe("dark")
    expect(document.documentElement.getAttribute("data-theme")).toBe("dark")
    expect(window.localStorage.getItem(THEME_KEY)).toBe("dark")
    act(() => result.current.toggleTheme())
    expect(document.documentElement.getAttribute("data-theme")).toBe("light")
  })
})

describe("ThemeToggle", () => {
  it("describes the action and reports pressed state", () => {
    const onToggle = vi.fn()
    const { rerender } = render(<ThemeToggle theme="light" onToggle={onToggle} />)
    const btn = screen.getByRole("button", { name: "Switch to dark background" })
    expect(btn).toHaveAttribute("aria-pressed", "false")
    fireEvent.click(btn)
    expect(onToggle).toHaveBeenCalledTimes(1)
    rerender(<ThemeToggle theme="dark" onToggle={onToggle} />)
    expect(screen.getByRole("button", { name: "Switch to light background" })).toHaveAttribute("aria-pressed", "true")
  })
})
