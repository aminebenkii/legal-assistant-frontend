import TypingDots from "./TypingDots"

export default function TypingIndicator() {
  return (
    <div
      className="flex items-center justify-center px-4 py-2"
      aria-label="Assistant is typing"
      role="status"
    >
      <span className="sr-only">Assistant is typing</span>
      <TypingDots />
    </div>
  )
}
