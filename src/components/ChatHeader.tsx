import { PlaneTakeoff } from "lucide-react"
import CurrencyDropdown from "./CurrencyDropdown"
import LanguageToggle from "./LanguageToggle"
import { useLanguage } from "@/context/LanguageContext"

export default function ChatHeader({
  currency,
  setCurrency,
}: {
  currency: string
  setCurrency: (val: string) => void
}) {
  const { lang } = useLanguage()

  return (
    <header className="relative z-50 bg-gradient-to-tr from-[#0f172a] to-[#1e293b] text-white shadow-2xl border-b border-white/10 backdrop-blur-xl font-sans">
      <div className="max-w-6xl mx-auto px-6 pt-5 pb-3 sm:py-8 flex flex-wrap sm:flex-nowrap items-center justify-between gap-6 sm:gap-10">
        {/* Left: Logo + Title */}
        <div className="flex items-start gap-x-4 sm:gap-x-6 flex-grow min-w-0">
          <div className="flex-shrink-0 bg-white/10 backdrop-blur-md p-2.5 rounded-2xl ring-1 ring-white/10 shadow-[0_4px_20px_rgba(255,255,255,0.08)] hover:scale-105 transition-transform duration-300">
            <PlaneTakeoff className="h-14 w-14 sm:h-16 sm:w-16 text-cyan-300 drop-shadow-xl rounded-xl" />
          </div>
          <div className="min-w-0 pb-1">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-cyan-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent drop-shadow-2xl leading-none overflow-visible" style={{ paddingBottom: "0.2em" }}>
              Flight Sniper
            </h1>
            <p className="mt-2 text-sm sm:text-lg text-indigo-200 font-medium tracking-wide leading-snug">
              {lang === "en"
                ? "Find the cheapest times to travel"
                : "Trouvez les périodes les moins chères pour voyager"}
            </p>
          </div>
        </div>

        {/* Right: Controls */}
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 sm:gap-6">
          <CurrencyDropdown value={currency} onChange={setCurrency} />
          <LanguageToggle />
        </div>
      </div>
    </header>
  )
}
