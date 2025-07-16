interface StatCardProps {
  title: string
  value: number | string
  total?: number
  subtitle?: string
}

export function StatCard({ title, value, total, subtitle }: StatCardProps) {
  const glowingCardStyle = {
    border: "2px solid rgba(139,92,246,1)",
    boxShadow: "0 0 8px 2px rgba(139, 92, 246, 0.7), 0 0 4px 1px rgba(139, 92, 246, 0.5)",
    background: "transparent",
  }

  return (
    <div className="p-4 sm:p-6 rounded-xl backdrop-blur" style={glowingCardStyle}>
      <h3 className="text-lg font-semibold text-black dark:text-primary mb-2">{title}</h3>
      <div className="flex items-end gap-2">
        <span className="text-2xl sm:text-3xl font-bold text-violet-600 dark:text-violet-400">
          {value}
        </span>
        {total && (
          <span className="text-lg text-gray-600 dark:text-gray-400">
            / {total}
          </span>
        )}
      </div>
      {subtitle && (
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{subtitle}</p>
      )}
    </div>
  )
}