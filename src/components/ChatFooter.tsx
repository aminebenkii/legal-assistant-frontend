// src/components/ChatFooter.tsx

import { Separator } from "@/components/ui/separator"

export default function ChatFooter() {
  return (
    <footer className="w-full max-w-2xl mx-auto px-4 pb-4 pt-2">
      <Separator className="mb-3" />
      <div className="text-xs text-center text-gray-400 select-none">
        © {new Date().getFullYear()} Flight Sniper · Built with ❤️ by Amine Benkirane
      </div>
    </footer>
  )
}
