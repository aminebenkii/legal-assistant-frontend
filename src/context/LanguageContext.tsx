// src/context/LanguageContext.tsx
import { createContext, useContext, useState } from "react"
import type { ReactNode } from "react"


type Language = "en" | "fr"

type LangContextType = {
  lang: Language
  setLang: (lang: Language) => void
}

const LanguageContext = createContext<LangContextType | null>(null)

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error("useLanguage must be used inside LangProvider")
  return context
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem("lang")
    return (saved === "fr" || saved === "en") ? saved : "en"
  })

  const setLang = (newLang: Language) => {
    setLangState(newLang)
    localStorage.setItem("lang", newLang)
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}