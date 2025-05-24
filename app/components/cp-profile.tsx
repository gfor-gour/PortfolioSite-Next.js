'use client'

import { useState, useEffect } from 'react'
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

  useEffect(() => {
    fetchLeetCodeData()
  }, [])

  const fetchLeetCodeData = async () => {
    try {
      const response = await fetch('/api/leetcode')
      if (!response.ok) throw new Error('Failed to fetch data')
      const data = await response.json()
      setData(data)
      setError(null)
    } catch (err) {
      setError('Failed to load LeetCode data')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <LoadingSkeleton />
  }

  if (error) {
    return <ErrorState error={error} retry={fetchLeetCodeData} />
  }

  return (
    <div className="w-full space-y-8">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Problems Solved"
          value={data?.userInfo?.totalSolved || 0}
          total={data?.userInfo?.totalQuestions || 0}
        />
        <StatCard
          title="Acceptance Rate"
          value={`${data?.userInfo?.acceptanceRate?.toFixed(1) || 0}%`}
        />
        <StatCard
          title="Contest Rating"
          value={data?.contestInfo?.rating || 0}
          subtitle={`Top ${data?.contestInfo?.topPercentage?.toFixed(1) || 0}%`}
        />
      </div>

      {/* Difficulty Distribution */}
      <div className="p-6 rounded-xl backdrop-blur" style={glowingCardStyle}>
        <h3 className="text-xl font-semibold text-black dark:text-primary mb-4">
          Problem Solving Distribution
        </h3>
        <div className="grid grid-cols-3 gap-4">
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

      {/* Submission Calendar */}
      <div className="p-6 rounded-xl backdrop-blur" style={glowingCardStyle}>
        <h3 className="text-xl font-semibold text-black dark:text-primary mb-4">
          Submission Activity
        </h3>
        <div className="h-64">
          <SubmissionChart data={data?.calendarData} />
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