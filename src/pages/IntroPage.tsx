// src/pages/IntroPage.tsx
import { useNavigate } from "react-router-dom"
import { useLanguage } from "@/context/LanguageContext"
import { IntroMessages } from "@/data/ChatbotConfig"

export default function IntroPage() {
  const { lang } = useLanguage()
  const navigate = useNavigate()

  const { title, body, button } = IntroMessages[lang]

  return (
    <div className="h-dvh flex items-center justify-center flex-col gap-8 text-center px-6 bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 font-[Manrope]">
      <h2 className="pb-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500 drop-shadow-md">
        {title}
      </h2>

      <div
        className="text-sm sm:text-lg leading-relaxed text-gray-700 max-w-2xl space-y-4 bg-white/70 p-6 rounded-2xl shadow-lg backdrop-blur-md border border-gray-200 text-left"
        dangerouslySetInnerHTML={{ __html: body }}
      />

      <button
        onClick={() => navigate("/chat")}
        className="mt-2 px-6 py-3 bg-indigo-700 text-white rounded-full text-sm sm:text-base font-semibold hover:bg-indigo-800 transition-all shadow-md"
      >
        {button}
      </button>
    </div>
  )
}
