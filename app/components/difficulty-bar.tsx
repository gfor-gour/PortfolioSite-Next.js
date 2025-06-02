export function DifficultyBar({ 
  label, 
  solved, 
  total, 
  color 
}: { 
  label: string
  solved: number
  total: number
  color: string 
}) {
  const percentage = total > 0 ? (solved / total) * 100 : 0

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-medium text-gray-700 dark:text-gray-300">
          {label}
        </span>
        <span className="text-sm text-gray-600 dark:text-gray-400">
          {solved}/{total}
        </span>
      </div>
      <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div
          className={`h-full bg-${color}-500 transition-all duration-500 ease-out rounded-full`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}