import { useQuery } from "@tanstack/react-query"

interface LeetCodeStats {
  totalSolved: number
  submissionCalendar: string
  activeDays: number
  maxStreak: number
  streak: number
}

export function useLeetCodeStats() {
  return useQuery<LeetCodeStats>({
    queryKey: ["leetcode-stats"],
    queryFn: async () => {
      const response = await fetch("/api/leetcode")
      if (!response.ok) {
        throw new Error("Failed to fetch LeetCode stats")
      }
      return response.json()
    },
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
    refetchOnWindowFocus: false,
  })
}