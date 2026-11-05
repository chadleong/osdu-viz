import { useCallback, useEffect, useState } from "react"

export type Theme = "light" | "dark"
export const THEME_KEY = "osdu-viz-theme"

/** Saved choice if any, otherwise light (the OS colour scheme is deliberately ignored). Storage may be unavailable. */
export function getInitialTheme(): Theme {
  try {
    const saved = window.localStorage.getItem(THEME_KEY)
    if (saved === "light" || saved === "dark") return saved
  } catch {
    // storage blocked (private mode, etc.)
  }
  return "light"
}

export function useTheme(): { theme: Theme; toggleTheme: () => void } {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    try {
      window.localStorage.setItem(THEME_KEY, theme)
    } catch {
      // ignore
    }
  }, [theme])

  const toggleTheme = useCallback(() => setTheme((t) => (t === "dark" ? "light" : "dark")), [])
  return { theme, toggleTheme }
}
