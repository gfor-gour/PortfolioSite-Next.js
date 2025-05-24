export function DifficultyBar({ label, solved, total, color }: {
  label: string
  solved: number
  total: number
  color: string
}) {
  const percentage = (solved / total) * 100

  const colors = {
    emerald: 'bg-emerald-500',
    yellow: 'bg-yellow-500',
    red: 'bg-red-500'
  }

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-black dark:text-primary">{label}</span>
        <span className="text-gray-600 dark:text-gray-400">{solved}/{total}</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div
          className={`h-full ${colors[color as keyof typeof colors]} transition-all duration-500`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}