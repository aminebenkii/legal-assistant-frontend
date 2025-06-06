import ChatHeader from "@/components/ChatHeader"
import ChatMessages from "@/components/ChatMessages"
import ChatInput from "@/components/ChatInput"
import ChatSuggestionBar from "@/components/ChatSuggestionBar"
import ChatFooter from "@/components/ChatFooter"
import { Separator } from "@/components/ui/separator"
import { useChatbot } from "@/hooks/useChatbot"

export default function ChatbotPage() {
  const { messages, isLoading, addMessage, handleUserMessage } = useChatbot()

  return (
    <div className="h-dvh flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-950 dark:text-gray-100">
      <ChatHeader />

      <div className="flex-1 flex flex-col min-h-0 items-center max-w-4xl w-full mx-auto pb-4 px-4">
        <div className="w-full flex-1 flex flex-col min-h-0 bg-white dark:bg-gray-800 rounded-b-2xl shadow-xl border border-gray-100 dark:border-gray-700">

          <div className="flex-1 overflow-y-auto min-h-0">
            <ChatMessages messages={messages} isLoading={isLoading} />
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
