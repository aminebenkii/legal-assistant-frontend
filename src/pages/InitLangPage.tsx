// src/pages/InitLangPage.tsx

import { useNavigate } from "react-router-dom"
import { useLanguage } from "@/context/LanguageContext"
import { PlaneTakeoff } from "lucide-react"

export default function InitLangPage() {
  const { setLang } = useLanguage()
  const navigate = useNavigate()

  const chooseLanguage = (lang: "en" | "fr") => {
    setLang(lang)
    navigate("/intro")
  }

  return (
    <div className="h-dvh w-full flex items-center justify-center bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] text-gray-800 px-6">
      <div className="max-w-md w-full flex flex-col items-center gap-10 text-center font-[Manrope] animate-fade-in">
        <div className="flex flex-col items-center gap-3">
          <div className="p-4 bg-white shadow-lg rounded-2xl">
            <PlaneTakeoff className="h-12 w-12 sm:h-16 sm:w-16 text-cyan-500 drop-shadow-lg" />
          </div>
          <h1 className="p-2 pt-4 text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent drop-shadow-xl">
            Flight Sniper
          </h1>
        </div>

        <p className="text-lg sm:text-xl text-gray-700 font-medium leading-relaxed">
          Find the <span className="text-indigo-600 font-semibold">cheapest dates</span> to fly — in seconds.
        </p>

        <div className="w-full">
          <p className="text-sm text-gray-500 mb-4">Choose your language to begin</p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => chooseLanguage("en")}
              className="px-6 py-2 bg-indigo-700 hover:bg-indigo-800 text-white rounded-full text-sm font-semibold shadow-md transition-all"
            >
              English
            </button>
            <button
              onClick={() => chooseLanguage("fr")}
              className="px-6 py-2 bg-indigo-700 hover:bg-indigo-800 text-white rounded-full text-sm font-semibold shadow-md transition-all"
            >
              Français
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
