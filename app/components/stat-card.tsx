interface StatCardProps {
  title: string
  value: number | string
  total?: number
  subtitle?: string
}

export function StatCard({ title, value, total, subtitle }: StatCardProps) {
  const glowingCardStyle = {
    border: "2px solid var(--glow)",
    boxShadow: "0 0 8px 2px var(--glow), 0 0 4px 1px var(--glow)",
    background: "#A6B0A6",
  }

  return (
    <div className="p-4 sm:p-6 rounded-xl backdrop-blur" style={glowingCardStyle}>
      <h3 className="text-lg font-semibold text-[#2F4F4F] dark:text-primary mb-2">{title}</h3>
      <div className="flex items-end gap-2">
        <span className="text-2xl sm:text-3xl font-bold text-[#2F4F4F] dark:text-violet-400">
          {value}
        </span>
        {total && (
          <span className="text-lg text-[#2F4F4F] dark:text-gray-400">
            / {total}
          </span>
        )}
      </div>
      {subtitle && (
        <p className="text-sm text-[#2F4F4F] dark:text-gray-400 mt-1">{subtitle}</p>
      )}
    </div>
  )
}