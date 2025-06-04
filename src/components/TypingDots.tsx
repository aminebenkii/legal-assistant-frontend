// src/components/TypingDots.tsx
export default function TypingDots() {
  return (
    <div className="flex items-center space-x-1 px-3 py-1">
      <div className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0s" }} />
      <div className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0.15s" }} />
      <div className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0.3s" }} />
    </div>
  )
}
