"use client"

import { useState, useEffect } from "react"
import { ChevronDown, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface ContributionDay {
  date: string
  count: number
  level: number
}

interface LeetCodeHeatmapProps {
  submissionCalendar: Record<string, number>
}

export function LeetCodeHeatmap({ submissionCalendar }: LeetCodeHeatmapProps) {
  const [selectedPeriod, setSelectedPeriod] = useState<
    "Current" | "Last Year" | "All Time"
  >("Current")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (submissionCalendar) {
      setIsLoading(false)
    }
  }, [submissionCalendar])

  const getContributionData = (): ContributionDay[][] => {
    try {
      if (!submissionCalendar) return []

      // Parse if string, otherwise use as is
      const calendar =
        typeof submissionCalendar === "string"
          ? JSON.parse(submissionCalendar)
          : submissionCalendar

      console.log("Calendar data:", calendar) // Debug log

      const weeks: ContributionDay[][] = []
      let currentWeek: ContributionDay[] = []
      const today = new Date()
      const oneYearAgo = new Date()
      oneYearAgo.setFullYear(today.getFullYear() - 1)

      // Create date range for last 12 months
      for (
        let d = new Date(oneYearAgo);
        d <= today;
        d.setDate(d.getDate() + 1)
      ) {
        // Use UTC midnight timestamp to match LeetCode keys
        const timestamp = Math.floor(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 1000).toString()
        const count = calendar[timestamp] || 0

        const level =
          count === 0
            ? 0
            : count <= 2
            ? 1
            : count <= 4
            ? 2
            : count <= 6
            ? 3
            : 4

        currentWeek.push({
          date: d.toISOString().split("T")[0],
          count,
          level,
        })

        // Start new week on Sunday
        if (currentWeek.length === 7) {
          weeks.push([...currentWeek])
          currentWeek = []
        }
      }

      // Add remaining days if any
      if (currentWeek.length > 0) {
        weeks.push([...currentWeek])
      }

      return weeks
    } catch (error) {
      console.error("Error processing calendar:", error)
      return []
    }
  }

  const contributionWeeks = getContributionData()

  // Group weeks by month
  const getMonthGroups = () => {
    const monthGroups: { month: string; weeks: ContributionDay[][] }[] = []
    let currentMonth = ""
    let currentWeeks: ContributionDay[][] = []

    contributionWeeks.forEach((week) => {
      if (week[0]) {
        const weekMonth = new Date(week[0].date).toLocaleDateString("en", {
          month: "short",
        })

        if (weekMonth !== currentMonth) {
          if (currentWeeks.length > 0) {
            monthGroups.push({ month: currentMonth, weeks: currentWeeks })
          }
          currentMonth = weekMonth
          currentWeeks = [week]
        } else {
          currentWeeks.push(week)
        }
      }
    })

    if (currentWeeks.length > 0) {
      monthGroups.push({ month: currentMonth, weeks: currentWeeks })
    }

    return monthGroups
  }

  const monthGroups = getMonthGroups()

  const getLevelColor = (level: number): string => {
    const colors = {
      0: "bg-gray-800/30",
      1: "bg-green-900/90",
      2: "bg-green-700/90",
      3: "bg-green-500/90",
      4: "bg-green-400/90",
    }
    return colors[level as keyof typeof colors]
  }

  // Calculate statistics
  const stats = contributionWeeks
    .flat()
    .flat() // Double flat to get array of ContributionDay
    .reduce(
      (acc, day: ContributionDay) => {
        if (day.count > 0) {
          acc.totalSubmissions += day.count
          acc.activeDays++
        }
        return acc
      },
      { totalSubmissions: 0, activeDays: 0 }
    )

  console.log("Submission Calendar:", submissionCalendar)

  if (isLoading) {
    return (
      <div className="w-full h-64 bg-gray-900/50 animate-pulse rounded-lg" />
    )
  }

  return (
    <div
      className="backdrop-blur-sm border border-violet-500/20 text-white p-6 rounded-lg mx-auto"
      style={{
        width: "min(100%, 920px)",
        border: "2px solid rgba(139,92,246,1)",
        boxShadow: "0 0 16px 2px rgba(139,92,246,0.7), 0 0 8px 2px rgba(139,92,246,0.5)",
        background: "transparent",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8"> {/* Increased margin */}
        <div className="flex items-center gap-3"> {/* Increased gap */}
          <span className="text-3xl font-bold text-violet-400"> {/* Increased text size, added violet color */}
            {stats.totalSubmissions}
          </span>
          <span className="text-lg text-violet-300/80"> {/* Increased text size, added transparent violet */}
            submissions in the past one year
          </span>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Info className="w-5 h-5 text-violet-400" /> {/* Increased icon size, added violet color */}
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-violet-100">GitHub-style contribution graph showing your coding activity</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div className="flex items-center gap-8"> {/* Increased gap */}
          <span className="text-lg text-violet-300/80"> {/* Increased text size, added transparent violet */}
            Total active days:{" "}
            <span className="text-violet-400 font-semibold">{stats.activeDays}</span>
          </span>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="bg-violet-950/30 border-violet-500/30 hover:bg-violet-900/20 text-violet-300"
              >
                {selectedPeriod}
                <ChevronDown className="ml-2 h-5 w-5" /> {/* Increased icon size */}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-gray-900/95 border-violet-500/30">
              {["Current", "Last Year", "All Time"].map((period) => (
                <DropdownMenuItem
                  key={period}
                  onClick={() => setSelectedPeriod(period as "Current" | "Last Year" | "All Time")}
                  className="text-violet-300 hover:bg-violet-950/50 hover:text-violet-200"
                >
                  {period}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Heatmap Grid */}
      <div className="relative">
        <div className="flex gap-2"> {/* Reduced gap from 3 to 2 */}
          {/* Remove the day labels div and start directly with month groups */}
          {monthGroups.map((monthGroup, monthIndex) => (
            <div key={monthIndex} className="flex flex-col">
              <div className="text-xs text-violet-400/80 mb-1 text-center"> {/* Reduced text size and margin */}
                {monthGroup.month}
              </div>
              <div className="flex gap-[2px]"> {/* Reduced gap */}
                {monthGroup.weeks.map((week, weekIndex) => (
                  <div key={weekIndex} className="flex flex-col gap-[2px]"> {/* Reduced gap */}
                    {week.map((day, dayIndex) => (
                      <TooltipProvider key={dayIndex}>
                        <Tooltip>
                          <TooltipTrigger>
                            <div
                              // Reduced size from w-4/h-4 to w-3/h-3
                              className={`w-3 h-3 rounded-sm ${getLevelColor(
                                day.level
                              )} hover:ring-1 hover:ring-violet-400`}
                            />
                          </TooltipTrigger>
                          <TooltipContent className="bg-gray-900/95 border-violet-500/30">
                            <p className="text-violet-300">
                              {day.count} submissions on{" "}
                              {new Date(day.date).toLocaleDateString()}
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ))}
                  </div>
                ))}
              </div> 
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-end mt-4"> {/* Reduced margin */}
        <div className="flex items-center gap-2 text-xs text-violet-300/80"> {/* Reduced text size and gap */}
          <span>Less</span>
          <div className="flex gap-[2px]"> {/* Reduced gap */}
            {[0, 1, 2, 3, 4].map((level: number) => (
              <div
                key={level}
                className={`w-3 h-3 ${getLevelColor(level)} rounded-sm`}
              />
            ))}
          </div>
          <span>More</span>
        </div>
      </div>
    </div>
  )
}