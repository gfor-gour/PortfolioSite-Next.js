import { z } from 'zod'

export const LeetCodeUserSchema = z.object({
  totalSolved: z.number(),
  totalQuestions: z.number(),
  easySolved: z.number(),
  totalEasy: z.number(),
  mediumSolved: z.number(),
  totalMedium: z.number(),
  hardSolved: z.number(),
  totalHard: z.number(),
  acceptanceRate: z.number()
})

export const LeetCodeDataSchema = z.object({
  userInfo: LeetCodeUserSchema,
  recentSubmissions: z.array(z.any()),
  contestInfo: z.object({
    rating: z.number(),
    topPercentage: z.number()
  }),
  calendarData: z.record(z.string(), z.number()),
  lastUpdated: z.string()
})

export type LeetCodeData = z.infer<typeof LeetCodeDataSchema>

// Example usage in your components
const response = await fetch('/api/leetcode')
const leetcodeData = await response.json()