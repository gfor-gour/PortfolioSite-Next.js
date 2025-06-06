'use client'

import { useEffect, useState } from 'react'
import { Skeleton } from "@/components/ui/skeleton"
import { StatCard } from './stat-card'
import { glowingCardStyle } from '../utils/styles'
import { SubmissionChart } from './submission-chart'
import { LeetCodeData } from '@/types/leetcode'
import { LeetCodeHeatmap } from "./leetcode-heatmap"

export default function CPProfile() {
  const [data, setData] = useState<LeetCodeData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchLeetCodeData = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/leetcode', {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        }
      })

      if (!response.ok) {
        throw new Error('Failed to fetch LeetCode data')
      }

      const data = await response.json()
      setData(data)
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      console.error('Error fetching LeetCode data:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchLeetCodeData()
  }, [])

  if (loading) {
    return <LoadingSkeleton />
  }

  if (error) {
    return <ErrorState error={error} retry={fetchLeetCodeData} />
  }

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[60vh]">
      <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 w-full max-w-5xl mx-auto">
        {/* LeetCode Progress */}
        <div
          className="flex-1 w-full min-h-[220px] p-4 sm:p-6 rounded-xl shadow-lg flex flex-col justify-center"
          style={{
            ...glowingCardStyle,
            background: "linear-gradient(135deg, rgba(139,92,246,0.12) 0%, rgba(255,255,255,0.08) 100%)",
            border: "1.5px solid #a78bfa",
          }}
        >
          <h2 className="text-xl font-bold mb-4 text-violet-600 dark:text-violet-400 text-center">
            LeetCode Progress
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1 text-center">
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Problems Solved
              </h3>
              <div className="text-2xl font-bold text-violet-600 dark:text-violet-400">
                {data?.userInfo?.totalSolved || 0}
                <span className="text-base text-gray-500 dark:text-gray-400">
                  /{data?.userInfo?.totalQuestions || 0}
                </span>
              </div>
            </div>
            <div className="space-y-1 text-center">
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Contest Rating
              </h3>
              <div className="text-2xl font-bold text-violet-600 dark:text-violet-400">
                {Math.round(data?.contestInfo?.rating || 0)}
                <span className="text-base text-gray-500 dark:text-gray-400">
                  {` (Top ${(data?.contestInfo?.topPercentage || 0).toFixed(1)}%)`}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Problem Solving Distribution */}
        <div
          className="flex-1 w-full min-h-[220px] p-4 sm:p-6 rounded-xl shadow-lg flex flex-col justify-center"
          style={{
            ...glowingCardStyle,
            background: "linear-gradient(135deg, rgba(139,92,246,0.10) 0%, rgba(255,255,255,0.06) 100%)",
            border: "1.5px solid #a78bfa",
          }}
        >
          <h3 className="text-lg font-semibold text-violet-700 dark:text-violet-300 mb-4 text-center">
            Problem Solving Distribution
          </h3>
          <div className="space-y-4">
            <DifficultyBar
              label="Easy"
              solved={data?.userInfo?.easySolved || 0}
              total={data?.userInfo?.totalEasy || 0}
            />
            <DifficultyBar
              label="Medium"
              solved={data?.userInfo?.mediumSolved || 0}
              total={data?.userInfo?.totalMedium || 0}
            />
            <DifficultyBar
              label="Hard"
              solved={data?.userInfo?.hardSolved || 0}
              total={data?.userInfo?.totalHard || 0}
            />
          </div>
        </div>
      </div>

      {/* LeetCode Heatmap */}
      <div className="w-full mt-8 flex justify-center">
        {data?.calendar?.submissionCalendar && (
          <LeetCodeHeatmap 
            submissionCalendar={data.calendar.submissionCalendar} 
          />
        )}
      </div>
    </div>
  )
}

// Helper Components
function LoadingSkeleton() {
  return (
    <div className="w-full space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className="h-32 rounded-xl" />
        ))}
      </div>
      <Skeleton className="h-64 rounded-xl" />
    </div>
  )
}

function ErrorState({ error, retry }: { error: string; retry: () => void }) {
  return (
    <div className="w-full p-8 text-center rounded-xl backdrop-blur" style={glowingCardStyle}>
      <p className="text-lg text-red-600 dark:text-red-400 mb-4">{error}</p>
      <button
        onClick={retry}
        className="px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors"
      >
        Retry
      </button>
    </div>
  )
}

// Inline DifficultyBar for demonstration
function DifficultyBar({
  label,
  solved,
  total,
}: {
  label: string
  solved: number
  total: number
}) {
  const percent = total > 0 ? Math.min(100, Math.round((solved / total) * 100)) : 0
  // Use a fixed violet color for all bars, or set per label if you want
  const barColor =
    label === "Easy"
      ? "bg-violet-400"
      : label === "Medium"
      ? "bg-violet-500"
      : "bg-violet-700"

  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</span>
        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{solved} / {total}</span>
      </div>
      <div className="w-full h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div
          className={`h-4 rounded-full transition-all duration-700 ${barColor}`}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
}