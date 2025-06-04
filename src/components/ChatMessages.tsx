// src/components/ChatMessages.tsx
import TypingDots from "./TypingDots"
import { useEffect, useRef } from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm" 

export default function ChatMessages({
  messages,
}: {
  messages: { role: "user" | "assistant"; content: string }[]
}) {
  const bottomRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <ScrollArea className="flex-1 h-full px-4 py-6">
      <div className="flex flex-col gap-5 sm:gap-6">
        {messages.map((msg, i) => {
          const isUser = msg.role === "user"
          const isTyping = msg.content === "__TYPING__"

          return (
            <div
              key={i}
              className={`flex ${isUser ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] px-4 py-1 sm:px-5 sm:py-1 rounded-2xl text-sm sm:text-[16px] leading-relaxed font-normal
                  ${isUser
                    ? "bg-sky-100 text-sky-900 rounded-tr-none shadow-md"
                    : "bg-gray-100 text-gray-700 rounded-tl-none border border-gray-200 shadow-sm"
                  }`}
              >
                {isTyping ? (
                  <TypingDots />
                ) : (
                  <div className="prose prose-sm sm:prose-base dark:prose-invert break-words leading-snug">
                  <ReactMarkdown
                    remarkPlugins={[[remarkGfm, { breaks: true }]]}
                    components={{
                      p: ({ node, ...props }) => (
                        <p className="my-3">{props.children}</p>
                      )
                    }}
                  >
                    {msg.content}
                  </ReactMarkdown>
                  </div>
                )}
              </div>
            </div>
          )
        })}

        <div ref={bottomRef} />
      </div>
    </ScrollArea>
  )

}
