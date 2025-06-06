// src/components/ChatMessages.tsx
import TypingIndicator from "./TypingIndicator"
import { useEffect, useRef } from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm" 

export default function ChatMessages({
  messages,
  isLoading,
}: {
  messages: { role: "user" | "assistant"; content: string }[]
  isLoading: boolean
}) {
  const bottomRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isLoading])

  return (
    <ScrollArea className="flex-1 h-full px-4 py-6">
      <div className="flex flex-col gap-5 sm:gap-6">
        {messages.map((msg, i) => {
          const isUser = msg.role === "user"

          return (
            <div
              key={i}
              className={`flex ${isUser ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] px-4 py-1 sm:px-5 sm:py-1 rounded-2xl text-sm sm:text-[16px] leading-relaxed font-normal
                  ${isUser
                    ? "bg-sky-100 text-sky-900 rounded-tr-none shadow-md dark:bg-sky-700 dark:text-sky-100"
                    : "bg-gray-100 text-gray-700 rounded-tl-none border border-gray-200 shadow-sm dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
                  }`}
              >
                <div className="prose prose-sm sm:prose-base dark:prose-invert break-words leading-snug">
                  <ReactMarkdown
                    remarkPlugins={[[remarkGfm, { breaks: true }]]}
                    components={{
                      p: (props) => (
                        <p className="my-3">{props.children}</p>
                      )
                    }}
                  >
                    {msg.content}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          )
        })}

        {isLoading && (
          <div className="flex justify-center">
            <TypingIndicator />
          </div>
        )}

        <div ref={bottomRef} />
      </div>
    </ScrollArea>
  )

}
