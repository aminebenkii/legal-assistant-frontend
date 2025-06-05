import { Gavel } from "lucide-react"
import LanguageToggle from "./LanguageToggle"
import ThemeToggle from "./ThemeToggle"
import { useLanguage } from "@/context/LanguageContext"

export default function ChatHeader() {
  const { lang } = useLanguage()

  return (
    <header className="relative z-50 bg-gradient-to-tr from-[#3b2f1d] to-[#23180c] dark:from-[#1b1b1b] dark:to-[#101010] text-white shadow-2xl border-b border-white/10 backdrop-blur-xl font-sans">
      <div className="max-w-6xl mx-auto px-6 pt-5 pb-3 sm:py-8 flex flex-wrap sm:flex-nowrap items-center justify-between gap-6 sm:gap-10">
        {/* Left: Logo + Title */}
        <div className="flex items-start gap-x-4 sm:gap-x-6 flex-grow min-w-0">
          <div className="flex-shrink-0 bg-white/10 backdrop-blur-md p-2.5 rounded-2xl ring-1 ring-white/10 shadow-[0_4px_20px_rgba(255,255,255,0.08)] hover:scale-105 transition-transform duration-300">
            <Gavel className="h-14 w-14 sm:h-16 sm:w-16 text-amber-300 drop-shadow-xl rounded-xl" />
          </div>
          <div className="min-w-0 pb-1">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-amber-300 via-yellow-300 to-orange-300 bg-clip-text text-transparent drop-shadow-2xl leading-none overflow-visible" style={{ paddingBottom: "0.2em" }}>
              Legal Assistant
            </h1>
            <p className="mt-2 text-sm sm:text-lg text-amber-200 font-medium tracking-wide leading-snug">
              {lang === "en"
                ? "Quick legal guidance at your fingertips"
                : lang === "fr"
                ? "Des réponses juridiques rapides à portée de main"
                : "إجابات قانونية سريعة بين يديك"}
            </p>
          </div>
        </div>

        {/* Right: Controls */}
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 sm:gap-6">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
