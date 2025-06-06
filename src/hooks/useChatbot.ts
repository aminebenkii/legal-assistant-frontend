import { useState, useEffect } from "react"
import { v4 as uuidv4 } from "uuid"
import { WelcomeMessage } from "@/data/ChatbotConfig"
import { useLanguage } from "@/context/LanguageContext"
import { getLegalReply } from "@/lib/api"

type ChatMessage = {
  role: "user" | "assistant"
  content: string
}

export function useChatbot() {
  const { lang } = useLanguage()
  const [messages, setMessages] = useState<ChatMessage[]>([
  { role: "assistant", content: WelcomeMessage[lang] }])
  const [sessionId, setSessionId] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setSessionId(uuidv4())
    setMessages([{ role: "assistant", content: WelcomeMessage[lang] }])
  }, [lang])

  const addMessage = (role: "user" | "assistant", content: string) => {
    setMessages(prev => [...prev, { role, content }])
  }

  const handleUserMessage = async (text: string) => {
    addMessage("user", text)
    setIsLoading(true)

    const reply = await getLegalReply({ query: text, sessionId, lang })
    setMessages(prev => [...prev, { role: "assistant", content: reply }])
    setIsLoading(false)
  }

  return { messages, isLoading, addMessage, handleUserMessage, setSessionId }
}
