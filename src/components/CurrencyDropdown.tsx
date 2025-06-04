import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import clsx from "clsx"

const CURRENCIES = [
  { value: "EUR", label: "💶 EUR" },
  { value: "USD", label: "💵 USD" },
  { value: "MAD", label: "🪙 MAD" },
  { value: "GBP", label: "💷 GBP" },
]

export default function CurrencyDropdown({
  value,
  onChange,
}: {
  value: string
  onChange: (val: string) => void
}) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger
        className={clsx(
          "w-[110px] h-[38px] rounded-full px-4 bg-white/10 text-white text-sm font-semibold",
          "border-none shadow-sm",
          "hover:bg-cyan-400/10 focus:bg-cyan-400/20 focus:ring-0 focus:border-2 focus:border-cyan-400 transition-all duration-200"
        )}
        style={{
          boxShadow: "0 1px 6px 0 rgba(0,0,0,0.06)",
        }}
      >
        <SelectValue placeholder="Devise" />
      </SelectTrigger>
      <SelectContent>
        {CURRENCIES.map((c) => (
          <SelectItem key={c.value} value={c.value}>
            {c.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
