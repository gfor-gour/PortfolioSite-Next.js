'use client'

import { useEffect, useState } from 'react'
import { Skeleton } from "@/components/ui/skeleton"
import { StatCard } from './stat-card'
import { DifficultyBar } from './difficulty-bar'
import { glowingCardStyle } from '../utils/styles'
import { SubmissionChart } from './submission-chart'
import { LeetCodeData } from '@/types/leetcode'

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
    <div className="w-full space-y-6 sm:space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div className="p-4 sm:p-6 rounded-xl backdrop-blur bg-white/10 dark:bg-black/10">
          <h2 className="text-2xl font-bold mb-6 text-violet-600 dark:text-violet-400">
            LeetCode Progress
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                Problems Solved
              </h3>
              <div className="text-4xl font-bold text-violet-600 dark:text-violet-400">
                {data?.userInfo?.totalSolved || 0}
                <span className="text-lg text-gray-500 dark:text-gray-400">
                  /{data?.userInfo?.totalQuestions || 0}
                </span>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                Contest Rating
              </h3>
              <div className="text-4xl font-bold text-violet-600 dark:text-violet-400">
                {data?.contestInfo?.rating || 0}
                <span className="text-lg text-gray-500 dark:text-gray-400">
                  {` (Top ${(data?.contestInfo?.topPercentage || 0).toFixed(1)}%)`}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Distribution Chart */}
      <div className="p-4 sm:p-6 rounded-xl backdrop-blur bg-white/10 dark:bg-black/10">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
          Problem Solving Distribution
        </h3>
        <div className="space-y-6">
          <DifficultyBar
            label="Easy"
            solved={data?.userInfo?.easySolved || 0}
            total={data?.userInfo?.totalEasy || 0}
            color="emerald"
          />
          <DifficultyBar
            label="Medium"
            solved={data?.userInfo?.mediumSolved || 0}
            total={data?.userInfo?.totalMedium || 0}
            color="yellow"
          />
          <DifficultyBar
            label="Hard"
            solved={data?.userInfo?.hardSolved || 0}
            total={data?.userInfo?.totalHard || 0}
            color="red"
          />
        </div>
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