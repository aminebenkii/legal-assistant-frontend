// src/components/ChatInput.tsx

import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/context/LanguageContext"

export default function ChatInput({ onSend }: { onSend: (text: string) => void }) {
  const [value, setValue] = useState("")
  const { lang } = useLanguage()

  const placeholder = lang === "en" ? "Type your message…" : "Écrivez votre message…"

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = value.trim()
    if (!trimmed) return
    onSend(trimmed)
    setValue("") // clear input
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 p-2 border-t bg-white dark:bg-gray-800 dark:border-gray-700 rounded-b-2xl"
    >
      <Input
        className="flex-1 px-3 py-2 bg-transparent border-none focus:ring-0 focus:outline-none text-[16px] sm:text-sm dark:text-gray-100"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-full px-2.5 py-2.5 bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 transition shadow"
      >
        <Send className="w-5 h-5" />
      </button>
    </form>
  )
}
