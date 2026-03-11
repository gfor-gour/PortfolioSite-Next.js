interface StatCardProps {
  title: string
  value: number | string
  total?: number
  subtitle?: string
}

export function StatCard({ title, value, total, subtitle }: StatCardProps) {
  return (
    <div className="p-4 sm:p-6 rounded-xl backdrop-blur glow-surface">
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <div className="flex items-end gap-2">
        <span className="text-2xl sm:text-3xl font-bold text-foreground">
          {value}
        </span>
        {total && (
          <span className="text-lg text-foreground/70">
            / {total}
          </span>
        )}
      </div>
      {subtitle && (
        <p className="text-sm text-foreground/70 mt-1">{subtitle}</p>
      )}
    </div>
  )
}