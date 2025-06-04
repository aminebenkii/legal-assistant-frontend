import { useNavigate } from "react-router-dom"
import { useLanguage } from "@/context/LanguageContext"
import { Button } from "@/components/ui/button"
import clsx from "clsx"

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage()
  const navigate = useNavigate()

  const handleLangSwitch = (selectedLang: "en" | "fr") => {
    if (lang !== selectedLang) {
      setLang(selectedLang)
      if (location.pathname === "/chat") {
        navigate("/chat") // re-triggers `useChatbot` state
      }
    }
  }

  return (
    <div className="flex gap-2 sm:gap-3">
      <Button
        variant="ghost"
        onClick={() => handleLangSwitch("en")}
        className={clsx(
          "h-[38px] px-5 rounded-full text-sm font-semibold transition-all duration-300",
          lang === "en"
            ? "bg-cyan-400/20 text-cyan-100 font-bold shadow-md"
            : "bg-transparent text-white/80 hover:bg-cyan-400/10"
        )}
      >
        English
      </Button>
      <Button
        variant="ghost"
        onClick={() => handleLangSwitch("fr")}
        className={clsx(
          "h-[38px] px-5 rounded-full text-sm font-semibold transition-all duration-300",
          lang === "fr"
            ? "bg-cyan-400/20 text-cyan-100 font-bold shadow-md"
            : "bg-transparent text-white/80 hover:bg-cyan-400/10"
        )}
      >
        Français
      </Button>
    </div>
  )
}
