import ChatHeader from "@/components/ChatHeader"
import ChatMessages from "@/components/ChatMessages"
import ChatInput from "@/components/ChatInput"
import ChatSuggestionBar from "@/components/ChatSuggestionBar"
import ChatFooter from "@/components/ChatFooter"
import { Separator } from "@/components/ui/separator"
import { useState } from "react"
import { useChatbot } from "@/hooks/useChatbot"

export default function ChatbotPage() {
  const [currency, setCurrency] = useState("EUR")
  const { messages, addMessage, handleUserMessage } = useChatbot(currency)

  return (
    <div className="h-dvh flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800">
      <ChatHeader currency={currency} setCurrency={setCurrency} />

      <div className="flex-1 flex flex-col min-h-0 items-center max-w-4xl w-full mx-auto pb-4 px-4">
        <div className="w-full flex-1 flex flex-col min-h-0 bg-white rounded-b-2xl shadow-xl border border-gray-100">

          <div className="flex-1 overflow-y-auto min-h-0">
            <ChatMessages messages={messages} />
          </div>

          <ChatSuggestionBar addMessage={addMessage} />
          <Separator />

          <ChatInput onSend={handleUserMessage} />
        </div>
      </div>

      <ChatFooter />
    </div>
  )
}
