// src/components/ChatSuggestionBar.tsx
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/context/LanguageContext"
import { suggestions } from "@/data/ChatbotConfig"

export default function ChatSuggestionBar({
  addMessage,
}: {
  addMessage: (role: "user" | "assistant", content: string) => void
}) {
  const { lang } = useLanguage()

  function sendToChatbot(userText: string, botReplyMarkdown: string) {
    addMessage("user", userText)

    setTimeout(() => {
      addMessage("assistant", botReplyMarkdown)
    }, 500)
  }

  return (
    <div className="w-full bg-gray-50 border-t border-gray-100 px-3 sm:px-6 py-3 flex flex-wrap justify-center gap-x-3 gap-y-2">
      {suggestions.map((item, idx) => (
        <Button
          key={idx}
          variant="outline"
          className="rounded-full text-[10px] sm:text-xs font-medium px-4 py-2 bg-white shadow-md hover:bg-cyan-50 hover:ring-1 hover:ring-cyan-200 transition"
          onClick={() =>
            sendToChatbot(item.userText[lang], item.botReply[lang])
          }
        >
          {item.label[lang]}
        </Button>
      ))}
    </div>
  )
}
