'use client'

import { useEffect, useState } from 'react'
import { Skeleton } from "@/components/ui/skeleton"
import { glowingCardStyle } from '../utils/styles'
import { LeetCodeData } from '@/types/leetcode'
import { LeetCodeHeatmap } from "./leetcode-heatmap"
import LeetCodeBadges from "./leetcode-badges"

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

  const boxStyle = {
    ...glowingCardStyle,
    background: "var(--card)",
    border: "1.5px solid var(--glow)",
    width: "min(100%, 920px)",
    minHeight: "296px", 
    maxWidth: "920px",
    margin: "0 auto",
  }

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[60vh] px-4 sm:px-6">
      <div className="w-full flex flex-col items-start max-w-[920px] mx-auto">
        {/* CP Profile Description - Elegant Section */}
        <div className="w-full mb-8">
          <div className="relative group">
            {/* Animated gradient border background */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-black via-black to-black dark:from-white dark:via-white dark:to-white rounded-2xl opacity-25 group-hover:opacity-35 blur transition duration-500" />
            
            {/* Main content card */}
            <div className="relative bg-background dark:bg-background backdrop-blur-md border border-black/80 dark:border-white/80 rounded-2xl p-8 sm:p-10 md:p-12">
              {/* Decorative quote mark */}
              <div className="absolute -top-2 -left-2 text-6xl text-black/20 dark:text-white/20 font-serif">
                &ldquo;
              </div>

              {/* Content sections */}
              <div className="space-y-6">
                {/* First paragraph */}
                <p className="text-base sm:text-lg md:text-lg text-black dark:text-white leading-relaxed font-light">
                  I embarked on my coding journey in <span className="font-bold">2022</span>, initially honing my problem-solving skills on platforms such as <span className="font-bold">Codeforces</span>, <span className="font-bold">CodeChef</span>, <span className="font-bold">UVA</span>, and <span className="font-bold">v.judge</span>. For a significant period now, I&apos;ve dedicated myself to consistent practice on <span className="font-bold">LeetCode</span>, actively participating in live contests to further refine my abilities.
                </p>

                {/* Divider */}
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-px bg-gradient-to-r from-black/0 via-black/40 to-black/0 dark:from-white/0 dark:via-white/40 dark:to-white/0" />
                  <div className="w-1.5 h-1.5 rounded-full bg-black/60 dark:bg-white/60" />
                  <div className="flex-1 h-px bg-gradient-to-r from-black/0 via-black/40 to-black/0 dark:from-white/0 dark:via-white/40 dark:to-white/0" />
                </div>

                {/* Second paragraph */}
                <p className="text-base sm:text-lg md:text-lg text-black dark:text-white leading-relaxed font-light">
                  This consistent engagement has been instrumental in overcoming past challenges with inconsistency and self-doubt, transforming my approach to complex problems. This portfolio goes beyond a traditional static display—I&apos;ve integrated <span className="font-bold">API routes</span> to fetch real-time data from LeetCode using its <span className="font-bold">GraphQL API</span>, developing a dynamic, data-driven heatmap that provides a live visual representation of my coding activity and progress.
                </p>
              </div>

              {/* Decorative quote mark */}
              <div className="absolute -bottom-2 -right-4 text-6xl text-black/20 dark:text-white/20 font-serif">
                &rdquo;
              </div>
            </div>
          </div>
        </div>

        {/* LeetCode Data Title */}
        <h3 className="text-xl sm:text-2xl font-bold mb-4 text-foreground dark:text-foreground text-left">
          LeetCode Statistics:
        </h3>
        
        <div
          className="rounded-xl shadow-lg flex flex-col justify-between backdrop-blur p-4 sm:p-6 md:p-8 w-full"
          style={{
            ...boxStyle,
            background: "transparent", 
          }}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 w-full">
            {/* Problem Solved & Contest Rating */}
            <div className="flex-1 flex flex-col items-center gap-8 w-full max-w-xs">
              <div className="w-full flex flex-col items-center">
                <span className="text-lg font-semibold text-foreground dark:text-foreground">
                  Problem Solved
                </span>
                <div className="flex items-end gap-2 mt-1">
                  <span className="text-4xl font-extrabold text-foreground dark:text-foreground">
                    {data?.userInfo?.totalSolved || 0}
                  </span>
                  <span className="text-base text-foreground/70 dark:text-foreground/70 mb-1">
                    / {data?.userInfo?.totalQuestions || 0}
                  </span>
                </div>
              </div>
              <div className="w-full flex flex-col items-center mt-2">
                <span className="text-lg font-bold text-foreground dark:text-foreground">
                  Contest Rating
                </span>
                <div className="flex flex-col mt-1 items-center">
                  <span className="text-3xl font-semibold text-foreground dark:text-foreground">
                    {Math.round(data?.contestInfo?.rating || 0)}
                  </span>
                  <span className="text-sm text-foreground/70 dark:text-foreground/70">
                    Top {(data?.contestInfo?.topPercentage || 0).toFixed(1)}%
                  </span>
                </div>
              </div>
            </div>
            {/* Problem Solving Distribution */}
            <div className="flex-1 flex flex-col items-center gap-4 w-full max-w-xs">
              <h3 className="text-lg font-semibold text-foreground dark:text-foreground mb-2 text-center">
                Problem Solving Distribution
              </h3>
              <div className="w-full min-w-[220px] max-w-xs space-y-3">
                <DifficultyBar
                  label="Easy"
                  solved={data?.userInfo?.easySolved || 0}
                  total={data?.userInfo?.totalEasy || 0}
                  color="bg-green-400"
                />
                <DifficultyBar
                  label="Medium"
                  solved={data?.userInfo?.mediumSolved || 0}
                  total={data?.userInfo?.totalMedium || 0}
                  color="bg-yellow-400"
                />
                <DifficultyBar
                  label="Hard"
                  solved={data?.userInfo?.hardSolved || 0}
                  total={data?.userInfo?.totalHard || 0}
                  color="bg-red-400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* LeetCode Heatmap */}
      <div className="w-full mt-8 flex justify-center">
        {data?.calendar?.submissionCalendar && (
          <LeetCodeHeatmap 
            activeYears={data?.calendar?.activeYears || []}
            submissionCalendar={
              typeof data.calendar.submissionCalendar === "string"
                ? JSON.parse(data.calendar.submissionCalendar)
                : data.calendar.submissionCalendar
            }
          />
        )}
      </div>

      {/* LeetCode Badges */}
      <div className="w-full mt-8 flex justify-center">
        <div className="w-full max-w-[920px]">
          <LeetCodeBadges badges={data?.userInfo?.badges || []} />
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
    <div className="w-full p-8 text-center rounded-xl backdrop-blur glow-surface" style={{ ...glowingCardStyle }}>
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

// Updated DifficultyBar to accept color prop
function DifficultyBar({
  label,
  solved,
  total,
  color = "bg-violet-500",
}: {
  label: string
  solved: number
  total: number
  color?: string
}) {
  const percent = total > 0 ? Math.round((solved / total) * 100) : 0
  return (
    <div className="w-full">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{label}</span>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
          {solved} / {total}
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-3">
        <div
          className={`${color} h-3 rounded-full transition-all`}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
}