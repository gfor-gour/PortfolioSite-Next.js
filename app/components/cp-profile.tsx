'use client'

import { useEffect, useState } from 'react'
import { Skeleton } from "@/components/ui/skeleton"
import { glowingCardStyle } from '../utils/styles'
import { LeetCodeData } from '@/types/leetcode'
import { LeetCodeHeatmap } from "./leetcode-heatmap"
import LeetCodeBadges from "./leetcode-badges"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function CPProfile() {
  const [data, setData] = useState<LeetCodeData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [expanded, setExpanded] = useState(false)
 
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

  // The full paragraph text
  const paragraph = `I embarked on my coding journey in 2022, initially honing my problem-solving skills on platforms such as Codeforces, CodeChef, UVA, and v.judge. For a significant period now, I've dedicated myself to consistent practice on LeetCode, actively participating in live contests to further refine my abilities. This consistent engagement has been instrumental in overcoming past challenges with inconsistency and self-doubt, transforming my approach to complex problems.
  This portfolio goes beyond a traditional static display. I've integrated API routes to fetch real-time data from LeetCode using its GraphQL API. This dynamic approach allowed me to develop a data-driven heatmap, providing a live and visual representation of my coding activity and progress.`

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[60vh] px-4 sm:px-6">
      <div className="w-full flex flex-col items-start max-w-[920px] mx-auto">
        {/* CP Profile Description with dropdown */}
        <div className="w-full flex flex-col items-center mb-8">
          <div
            className={`w-full relative transition-all duration-500`}
            style={{
              maxHeight: expanded ? 500 : 64, 
              overflow: "hidden",
            }}
          >
            <p className="w-full text-[1.18rem] sm:text-lg md:text-xl text-[#2F4F4F] dark:text-gray-100 text-center font-medium leading-relaxed transition-all duration-500">
              {paragraph}
            </p>
            {!expanded && (
              <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-[#2F4F4F] dark:from-[#18102b] to-transparent pointer-events-none transition-all duration-500" />
            )}
          </div>
          <button
            className="flex items-center gap-1 mt-2 text-[#2F4F4F] dark:text-violet-300 font-bold hover:underline focus:outline-none transition-colors"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
          >
            {expanded ? "Show less" : "Read more"}
            {expanded ? (
              <ChevronUp className="w-5 h-5 text-[#2F4F4F] dark:text-violet-300" />
            ) : (
              <ChevronDown className="w-5 h-5 text-[#2F4F4F] dark:text-violet-300" />
            )}
          </button>
          <div className="w-full flex justify-center mt-6">
            <hr className="w-full h-1 rounded border-0 bg-[#2F4F4F] dark:bg-violet-400 shadow-[0_0_16px_2px_#2F4F4F] dark:shadow-[0_0_16px_2px_rgba(139,92,246,0.7)]" />
          </div>
        </div>

        {/* LeetCode Data Title */}
        <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[#2F4F4F] dark:text-violet-400 text-left">
          LeetCode Statistics:
        </h3>
        
        <div
          className="rounded-xl shadow-lg flex flex-col justify-between backdrop-blur p-4 sm:p-6 md:p-8 w-full"
          style={{
            ...boxStyle,
            background: "rgba(255, 255, 255, 0.05)", 
          }}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 w-full">
            {/* Problem Solved & Contest Rating */}
            <div className="flex-1 flex flex-col items-center gap-8 w-full max-w-xs">
              <div className="w-full flex flex-col items-center">
                <span className="text-lg font-semibold text-[#2F4F4F] dark:text-violet-300">
                  Problem Solved
                </span>
                <div className="flex items-end gap-2 mt-1">
                  <span className="text-4xl font-extrabold text-[#2F4F4F] dark:text-violet-400">
                    {data?.userInfo?.totalSolved || 0}
                  </span>
                  <span className="text-base text-[#2F4F4F] dark:text-gray-400 mb-1">
                    / {data?.userInfo?.totalQuestions || 0}
                  </span>
                </div>
              </div>
              <div className="w-full flex flex-col items-center mt-2">
                <span className="text-lg font-bold text-[#2F4F4F] dark:text-violet-300">
                  Contest Rating
                </span>
                <div className="flex flex-col mt-1 items-center">
                  <span className="text-3xl font-semibold text-[#2F4F4F] dark:text-violet-400">
                    {Math.round(data?.contestInfo?.rating || 0)}
                  </span>
                  <span className="text-sm text-[#2F4F4F] dark:text-gray-400">
                    Top {(data?.contestInfo?.topPercentage || 0).toFixed(1)}%
                  </span>
                </div>
              </div>
            </div>
            {/* Problem Solving Distribution */}
            <div className="flex-1 flex flex-col items-center gap-4 w-full max-w-xs">
              <h3 className="text-lg font-semibold text-[#2F4F4F] dark:text-violet-300 mb-2 text-center">
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