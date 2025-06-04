import { useState, useEffect } from "react"
import { v4 as uuidv4 } from "uuid"
import { WelcomeMessage } from "@/data/ChatbotConfig"
import { useLanguage } from "@/context/LanguageContext"
import { getFlightReply } from "@/lib/api"

type ChatMessage = {
  role: "user" | "assistant"
  content: string
}

export function useChatbot(currency: string) {
  const { lang } = useLanguage()
  const [messages, setMessages] = useState<ChatMessage[]>([
  { role: "assistant", content: WelcomeMessage[lang] }])
  const [sessionId, setSessionId] = useState("")

  useEffect(() => {
    setSessionId(uuidv4())
    setMessages([{ role: "assistant", content: WelcomeMessage[lang] }])
  }, [lang])

  const addMessage = (role: "user" | "assistant", content: string) => {
    setMessages(prev => [...prev, { role, content }])
  }

  const handleUserMessage = async (text: string) => {
    addMessage("user", text)
    addMessage("assistant", "__TYPING__")

    try {
      const reply = await getFlightReply({ query: text, sessionId, currency })
      setMessages(prev => {
        const updated = [...prev]
        const last = updated.length - 1
        if (updated[last].role === "assistant" && updated[last].content === "__TYPING__") {
          updated[last] = { role: "assistant", content: reply }
        }
        return updated
      })
    } catch {
      setMessages(prev => {
        const updated = [...prev]
        const last = updated.length - 1
        if (updated[last].role === "assistant" && updated[last].content === "__TYPING__") {
          updated[last] = { role: "assistant", content: "❌ Sorry, I couldn't reach the flight server." }
        }
        return updated
      })
    }
  }

  return { messages, addMessage, handleUserMessage, currency, setSessionId }
}
