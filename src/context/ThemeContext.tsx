import { createContext, useContext, useEffect, useState } from "react"
import type { ReactNode } from "react"

export type Theme = "light" | "dark"

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | null>(null)

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider")
  return ctx
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("theme")
    return saved === "dark" ? "dark" : "light"
  })

  useEffect(() => {
    localStorage.setItem("theme", theme)
    const root = document.getElementById("root")
    if (root) {
      if (theme === "dark") root.classList.add("dark")
      else root.classList.remove("dark")
    }
  }, [theme])

  const toggleTheme = () => setTheme(t => (t === "dark" ? "light" : "dark"))

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
